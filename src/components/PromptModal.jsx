import React, { useState } from 'react';

const PromptModal = ({ isOpen, onClose, prompt }) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-sm">
                            <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800 leading-tight">Your AI Build Prompt</h2>
                            <p className="text-xs text-slate-500 font-medium">Paste this into v0, Cursor, or ChatGPT</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
                    <div className="relative group">
                        <pre className="text-sm text-slate-700 font-mono whitespace-pre-wrap leading-relaxed">
                            {prompt}
                        </pre>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-between">
                    <p className="text-xs text-slate-500 font-medium max-w-[60%]">
                        We recommend using an editor like <span className="font-bold text-slate-700">Cursor</span> for full-stack apps targeting multiple files at once.
                    </p>
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${copied
                                ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20'
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[18px]">
                            {copied ? 'check' : 'content_copy'}
                        </span>
                        {copied ? 'Copied to Clipboard!' : 'Copy Prompt'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromptModal;
