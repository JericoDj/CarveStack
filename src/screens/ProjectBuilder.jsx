import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ConfigOptions } from '../data/ProjectConfigData';
import { generatePreviewTree } from '../utils/generatePreviewTree';
import { generateBuildPrompt } from '../utils/generateBuildPrompt';
import PromptModal from '../components/PromptModal';
import ModuleDropdown from '../components/ModuleDropdown';
const ProjectBuilder = () => {
    const { projectId } = useParams();

    const [intent, setIntent] = useState('web');
    const [config, setConfig] = useState({});
    const [activeModules, setActiveModules] = useState({});
    const [isPromptOpen, setIsPromptOpen] = useState(false);
    const [generatedPrompt, setGeneratedPrompt] = useState('');

    // Initialize config when intent changes
    useEffect(() => {
        setActiveModules({});
        const initialConfig = { modulePrompts: {} };
        if (ConfigOptions[intent] && ConfigOptions[intent].steps) {
            ConfigOptions[intent].steps.forEach(step => {
                if (step.type === 'features' || step.type === 'multi_tags') {
                    initialConfig[step.id] = [];
                } else if (step.type === 'categories') {
                    if (step.options && step.options.length > 0 && step.options[0].items.length > 0) {
                        initialConfig[step.id] = step.options[0].items[0];
                    }
                } else if (step.type === 'grid') {
                    if (step.options && step.options.length > 0) {
                        initialConfig[step.id] = step.options[0].id;
                    }
                } else if (step.type === 'tags') {
                    if (step.options && step.options.length > 0) {
                        initialConfig[step.id] = step.options[0];
                    }
                }
            });
        }
        setConfig(initialConfig);
    }, [intent]);

    // Handlers
    const handleAddModule = (stepId, moduleId) => {
        const instanceId = `${moduleId}_${Date.now()}`;
        setActiveModules(prev => {
            const current = prev[stepId] || [];
            return { ...prev, [stepId]: [...current, { instanceId, moduleId }] };
        });
    };

    const handleRemoveModule = (stepId, instanceIdToRemove) => {
        // Remove from active modules
        setActiveModules(prev => ({
            ...prev,
            [stepId]: (prev[stepId] || []).filter(inst => inst.instanceId !== instanceIdToRemove)
        }));

        // Remove from config (selected features for this specific instance)
        setConfig(prev => {
            // Because config[step.id] used to be an array of feature strings,
            // we will now store feature selections per-instance in config.moduleFeatures[instanceId] = []
            const moduleFeatures = { ...(prev.moduleFeatures || {}) };
            delete moduleFeatures[instanceIdToRemove];

            // Remove module prompt if it exists
            const modulePrompts = { ...(prev.modulePrompts || {}) };
            delete modulePrompts[instanceIdToRemove];

            return {
                ...prev,
                moduleFeatures,
                modulePrompts
            };
        });
    };

    const handleGeneratePrompt = () => {
        setGeneratedPrompt(generateBuildPrompt(intent, config));
        setIsPromptOpen(true);
    };

    const handleConfigChange = (stepId, value, isMulti = false) => {
        setConfig(prev => {
            let newConfig = { ...prev };

            if (isMulti) {
                const currentSelections = prev[stepId] || [];
                if (currentSelections.includes(value)) {
                    newConfig[stepId] = currentSelections.filter(v => v !== value);
                } else {
                    newConfig[stepId] = [...currentSelections, value];
                }
            } else {
                newConfig[stepId] = value;
            }

            // Handle cascading dependencies
            const dependentStep = ConfigOptions[intent].steps.find(s => s.dependsOn === stepId);
            if (dependentStep) {
                if (dependentStep.type === 'tags_depends_on') {
                    const dependencyKey = typeof value === 'string' ? value : value.id;
                    const newOptions = dependentStep.options[dependencyKey] || [];
                    if (newOptions.length > 0) {
                        newConfig[dependentStep.id] = newOptions[0].id;
                    } else {
                        newConfig[dependentStep.id] = '';
                    }
                }
            }
            return newConfig;
        });
    };

    const toggleFeature = (instanceId, featureName) => {
        setConfig(prev => {
            const moduleFeatures = { ...(prev.moduleFeatures || {}) };
            const currentInstanceFeatures = moduleFeatures[instanceId] || [];

            if (currentInstanceFeatures.includes(featureName)) {
                moduleFeatures[instanceId] = currentInstanceFeatures.filter(f => f !== featureName);
            } else {
                moduleFeatures[instanceId] = [...currentInstanceFeatures, featureName];
            }

            return { ...prev, moduleFeatures };
        });
    };

    const handlePromptChange = (instanceId, value) => {
        setConfig(prev => {
            const currentPrompts = prev.modulePrompts || {};
            return {
                ...prev,
                modulePrompts: { ...currentPrompts, [instanceId]: value }
            };
        });
    };

    // Render Helpers
    const renderStepContent = (step) => {
        switch (step.type) {
            case 'grid':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {step.options.map(opt => {
                            const isSelected = config[step.id] === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => handleConfigChange(step.id, opt.id)}
                                    className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${isSelected ? 'bg-white border-cyan-400 shadow-md' : 'bg-white/60 border-transparent hover:bg-white hover:border-slate-200 shadow-sm'}`}
                                >
                                    <span className={`material-symbols-outlined text-3xl mb-2 ${isSelected ? 'text-cyan-500' : 'text-slate-400'}`}>{opt.icon}</span>
                                    <span className={`text-sm font-bold ${isSelected ? 'text-slate-800' : 'text-slate-600'}`}>{opt.name}</span>
                                    {opt.subtitle && <span className={`text-[10px] font-medium mt-1 uppercase tracking-wider ${isSelected ? 'text-cyan-600' : 'text-slate-400'}`}>{opt.subtitle}</span>}
                                    {isSelected && <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>}
                                </button>
                            );
                        })}
                    </div>
                );
            case 'tags_depends_on':
                const dependencyKey = config[step.dependsOn];
                const activeOptions = dependencyKey ? (step.options[dependencyKey] || []) : [];
                return (
                    <div className="flex flex-wrap gap-3 animate-fade-in-up">
                        {activeOptions.map(opt => {
                            const isSelected = config[step.id] === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => handleConfigChange(step.id, opt.id)}
                                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border-2 ${isSelected ? 'bg-cyan-50 border-cyan-400 text-cyan-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:shadow-sm'}`}
                                >
                                    {opt.name}
                                </button>
                            );
                        })}
                    </div>
                );
            case 'tags':
                return (
                    <div className="flex flex-wrap gap-3 animate-fade-in-up">
                        {step.options.map(opt => {
                            const isSelected = config[step.id] === opt;
                            return (
                                <button
                                    key={opt}
                                    onClick={() => handleConfigChange(step.id, opt)}
                                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border-2 ${isSelected ? 'bg-cyan-50 border-cyan-400 text-cyan-700 shadow-sm' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300 hover:shadow-sm'}`}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>
                );
            case 'multi_tags':
                return (
                    <div className="flex flex-wrap gap-3 animate-fade-in-up">
                        {step.options.map(opt => {
                            const isSelected = (config[step.id] || []).includes(opt.id);
                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => handleConfigChange(step.id, opt.id, true)}
                                    className={`relative flex flex-col items-start p-4 rounded-xl transition-all border-2 text-left min-w-[150px] ${isSelected ? 'bg-cyan-50 border-cyan-400 shadow-sm' : 'bg-white border-slate-100 hover:border-slate-300 hover:shadow-sm'}`}
                                >
                                    <span className={`text-sm font-bold ${isSelected ? 'text-cyan-700' : 'text-slate-700'}`}>{opt.name}</span>
                                    {opt.subtitle && <span className={`text-[11px] font-medium mt-1 ${isSelected ? 'text-cyan-600' : 'text-slate-500'}`}>{opt.subtitle}</span>}
                                    {isSelected && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>}
                                </button>
                            );
                        })}
                    </div>
                );
            case 'categories':
                return (
                    <div className="flex flex-col gap-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                        {step.options.map((cat, idx) => (
                            <div key={idx}>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{cat.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map(opt => {
                                        const isSelected = config[step.id] === opt;
                                        return (
                                            <button
                                                key={opt}
                                                onClick={() => handleConfigChange(step.id, opt)}
                                                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all border ${isSelected ? 'bg-slate-800 border-slate-800 text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'}`}
                                            >
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'features':
                const currentActiveInstances = activeModules[step.id] || [];
                // We don't filter out available modules anymore since they can add identical modules multiple times.
                const availableModules = step.options;

                return (
                    <div className="flex flex-col gap-8">
                        {/* Dropdown to add modules */}
                        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
                            <div>
                                <h3 className="font-bold text-slate-800 text-base mb-1">Add Modules</h3>
                                <p className="text-sm text-slate-500">Select functional modules to include in your architecture.</p>
                            </div>
                            <ModuleDropdown
                                options={availableModules}
                                onSelect={(moduleId) => handleAddModule(step.id, moduleId)}
                            />
                        </div>

                        {/* Render active modules */}
                        {currentActiveInstances.length > 0 && (
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                {currentActiveInstances.map((instance, idx) => {
                                    // Map instance back to original category definition for rendering
                                    const cat = step.options.find(o => o.id === instance.moduleId);
                                    if (!cat) return null;

                                    const selectedFeatures = (config.moduleFeatures && config.moduleFeatures[instance.instanceId]) || [];
                                    const isModuleActive = selectedFeatures.length > 0;
                                    const promptValue = (config.modulePrompts && config.modulePrompts[instance.instanceId]) ? config.modulePrompts[instance.instanceId] : '';

                                    return (
                                        <div key={instance.instanceId} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col relative animate-fade-in-up">
                                            {/* Remove Button */}
                                            <button
                                                onClick={() => handleRemoveModule(step.id, instance.instanceId)}
                                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors"
                                                title="Remove Module"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">close</span>
                                            </button>

                                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 pr-8">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                                                    <span className="material-symbols-outlined">{cat.icon}</span>
                                                </div>
                                                <h3 className="font-bold text-slate-800 text-base">
                                                    {cat.name}
                                                    {/* Optional index if there are multiples of the same type? */}
                                                    {currentActiveInstances.filter(i => i.moduleId === cat.id).length > 1 && (
                                                        <span className="ml-2 px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                                                            #{currentActiveInstances.filter(i => i.moduleId === cat.id).findIndex(i => i.instanceId === instance.instanceId) + 1}
                                                        </span>
                                                    )}
                                                </h3>
                                            </div>
                                            <div className={`flex flex-wrap gap-2 ${isModuleActive ? 'mb-6' : ''}`}>
                                                {cat.features.map(feature => {
                                                    const isSelected = selectedFeatures.includes(feature);
                                                    return (
                                                        <button
                                                            key={feature}
                                                            onClick={() => toggleFeature(instance.instanceId, feature)}
                                                            className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all border flex items-center gap-1.5 ${isSelected ? 'bg-cyan-50 border-cyan-300 text-cyan-800 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}
                                                        >
                                                            {isSelected && <span className="material-symbols-outlined text-[14px]">check</span>}
                                                            {feature}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            {isModuleActive && (
                                                <div className="mt-auto pt-4 border-t border-slate-100 animate-fade-in-up">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Module Instructions</p>
                                                        <span className="material-symbols-outlined text-cyan-500 text-[16px]">edit</span>
                                                    </div>
                                                    <textarea
                                                        placeholder={`Specific goals or constraints for the ${cat.name}...`}
                                                        className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm text-slate-700 min-h-[90px] focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all resize-y"
                                                        value={promptValue}
                                                        onChange={(e) => handlePromptChange(instance.instanceId, e.target.value)}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    const renderSynopsisItem = (step) => {
        if (step.type === 'features') return null; // handled separately

        let displayValue = config[step.id];
        let displaySubtitle = step.title;

        if (!displayValue || (Array.isArray(displayValue) && displayValue.length === 0)) {
            displayValue = '(Not selected)';
        } else {
            // Resolve IDs to names for grid/tags_depends_on/multi_tags
            if (step.type === 'grid') {
                const opt = step.options.find(o => o.id === displayValue);
                displayValue = opt ? opt.name : displayValue;
            } else if (step.type === 'tags_depends_on') {
                const dependencyKey = config[step.dependsOn];
                const activeOptions = dependencyKey ? (step.options[dependencyKey] || []) : [];
                const opt = activeOptions.find(o => o.id === displayValue);
                displayValue = opt ? opt.name : displayValue;
            } else if (step.type === 'multi_tags') {
                displayValue = displayValue.map(val => {
                    const opt = step.options.find(o => o.id === val);
                    return opt ? opt.name : val;
                }).join(', ');
            }
            // For 'categories' and 'tags', the displayValue is already the string itself.
        }

        return (
            <div key={step.id} className="mb-5 last:mb-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{displaySubtitle}</p>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200/50">
                        <span className="material-symbols-outlined text-[16px]">{step.icon || 'settings'}</span>
                    </div>
                    <div>
                        <p className="font-bold text-slate-800 text-sm max-w-[200px] truncate" title={displayValue}>{displayValue}</p>
                    </div>
                </div>
            </div>
        );
    };

    const renderPreviewNode = (node, depth = 0) => {
        const isFolder = node.type === 'folder';
        return (
            <div key={`${node.name}-${depth}`} style={{ paddingLeft: `${depth * 12}px` }} className="flex flex-col py-0.5">
                <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[14px] ${isFolder ? 'text-blue-400' : 'text-slate-400'}`}>
                        {isFolder ? 'folder' : 'draft'}
                    </span>
                    <span className={isFolder ? 'text-blue-300 font-semibold' : 'text-slate-300'}>{node.name}</span>
                </div>
                {isFolder && node.children && (
                    <div className="flex flex-col border-l border-slate-700/50 ml-[7px] mt-0.5">
                        {node.children.map(child => renderPreviewNode(child, depth + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="font-display text-slate-900 antialiased overflow-x-hidden min-h-screen flex flex-col" style={{ background: '#f8fafc' }}>
            {/* Top Navigation Bar */}
            <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link to="/dashboard" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-500">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg w-10 h-10 flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>layers</span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-slate-900 text-base font-bold leading-tight">Project Configurator</h1>
                                    <p className="text-xs text-slate-500 font-medium">Build your Architecture</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="h-8 w-8 rounded-full bg-cover bg-center border border-slate-200 shadow-sm cursor-pointer ml-2" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9kUAlg6lTLyUIUKsh4DbEk18vLTPsOOouQvyPXNCOFIf7bVZd-Qp2G2V8y2eZQos1D8PdsFhGOsS3Qs8byEjj_yHXosjYMktR5EFgUKyx5o-R7lYiL8lWDKWHb0HYr4pDKOBdYPz7CVEZMARRO767zcUNXDxixaU5PnuRYtWDRXVc3snnq-YhEfWMkxcV5DIo5jTuTp6bvo0nva6VWYLPnL01D7KouefBtU1QTfJL2yVzfHxfk2Q_lH1eTJ_urnO8ZAWsbtLOgU')` }}></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row relative">

                {/* Left Side: Builder Logic */}
                <div className="flex-1 px-4 sm:px-6 lg:px-12 py-8 overflow-y-auto pb-32">

                    {/* Step 0: Architecture Intent */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-sm">0</div>
                            <h2 className="text-xl font-bold text-slate-800">Architecture Intent</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {ConfigOptions.intents.map(int => (
                                <button
                                    key={int.id}
                                    onClick={() => setIntent(int.id)}
                                    className={`p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ${intent === int.id ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent shadow-lg shadow-cyan-500/30' : 'bg-white border-slate-200 hover:border-cyan-300'}`}
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${intent === int.id ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-500'}`}>
                                        <span className="material-symbols-outlined text-2xl">{int.icon}</span>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className={`text-[15px] font-bold ${intent === int.id ? 'text-white' : 'text-slate-800'}`}>{int.title}</h3>
                                    </div>
                                    {intent === int.id && (
                                        <span className="material-symbols-outlined text-white">check_circle</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Dynamic Steps based on Intent */}
                    {ConfigOptions[intent] && ConfigOptions[intent].steps.map((step, index) => (
                        <section key={step.id} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-sm">{index + 1}</div>
                                <h2 className="text-xl font-bold text-slate-800">{step.title}</h2>
                            </div>
                            {renderStepContent(step)}
                        </section>
                    ))}
                </div>

                {/* Right Side: Configuration Summary & Preview */}
                <aside className="w-full lg:w-[380px] xl:w-[420px] bg-white border-l border-slate-200 p-8 flex flex-col h-[calc(100vh-64px)] overflow-y-auto z-10 sticky top-[64px]">

                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                        {ConfigOptions.intents.find(i => i.id === intent)?.title} Synopsis
                    </h3>

                    <div className="flex flex-col gap-6 mb-8 flex-1">

                        {/* Render all single-choice synopses */}
                        {ConfigOptions[intent]?.steps.map((step) => renderSynopsisItem(step))}

                        {/* Render Features summary if any feature steps exist */}
                        {ConfigOptions[intent]?.steps.filter(s => s.type === 'features').map(step => {
                            const selectedInstances = activeModules[step.id] || [];
                            return (
                                <div key={step.id} className="pt-4 border-t border-slate-100 mt-2">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{step.title} ({selectedInstances.length})</p>
                                    </div>
                                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[250px]">
                                        {selectedInstances.length === 0 ? (
                                            <span className="text-xs text-slate-400 italic">No modules selected yet.</span>
                                        ) : (
                                            selectedInstances.map((inst, instIdx) => {
                                                const cat = step.options.find(o => o.id === inst.moduleId);
                                                const selectedFeatures = (config.moduleFeatures && config.moduleFeatures[inst.instanceId]) || [];

                                                if (!cat) return null;

                                                return (
                                                    <div key={inst.instanceId} className="flex flex-col gap-1.5">
                                                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                                                            <span className="material-symbols-outlined text-[14px] text-cyan-500">{cat.icon}</span>
                                                            {cat.name}
                                                            {selectedInstances.filter(i => i.moduleId === cat.id).length > 1 && (
                                                                <span className="text-slate-400 font-medium">
                                                                    #{selectedInstances.filter(i => i.moduleId === cat.id).findIndex(i => i.instanceId === inst.instanceId) + 1}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-wrap gap-1 pl-5">
                                                            {selectedFeatures.length === 0 ? (
                                                                <span className="text-[10px] text-slate-400 italic">No features appended.</span>
                                                            ) : (
                                                                selectedFeatures.map(f => (
                                                                    <span key={f} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium border border-slate-200">
                                                                        {f}
                                                                    </span>
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    <div className="flex-1 mt-2 mb-6 flex flex-col min-h-[250px]">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">File Tree Preview</h3>
                        <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs shadow-inner overflow-y-auto flex-1 border border-slate-800">
                            {generatePreviewTree(intent, config).map(node => renderPreviewNode(node))}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
                        <button
                            onClick={handleGeneratePrompt}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-xl text-sm font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 transition-all">
                            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                            Generate Build Prompt
                        </button>
                    </div>
                </aside>
            </main>

            <PromptModal
                isOpen={isPromptOpen}
                onClose={() => setIsPromptOpen(false)}
                prompt={generatedPrompt}
            />
        </div>
    );
};

export default ProjectBuilder;
