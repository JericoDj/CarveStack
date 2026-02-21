import React, { useState, useRef, useEffect } from 'react';

const ModuleDropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchQuery('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = (options || []).filter(opt =>
        opt.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelectAction = (optionId) => {
        onSelect(optionId);
        setIsOpen(false);
        setSearchQuery('');
    };

    return (
        <div className="relative w-full max-w-sm" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-3 bg-white/70 backdrop-blur-md border border-white/50 text-slate-700 text-sm rounded-xl px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
                <div className="flex items-center gap-2 font-semibold">
                    <span className="material-symbols-outlined text-cyan-500 text-[18px]">add_circle</span>
                    Select a module...
                </div>
                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {/* Dropdown Menu (Glassmorphism) */}
            {isOpen && (
                <div className="absolute z-50 top-[calc(100%+8px)] left-0 w-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden animate-fade-in-up">

                    {/* Search Bar */}
                    <div className="p-3 border-b border-slate-200/50 bg-white/40">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                            <input
                                type="text"
                                placeholder="Search modules..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/50 border border-white/50 text-slate-700 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-colors placeholder:text-slate-400"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="max-h-[280px] overflow-y-auto p-2 scrollbar-hide">
                        {filteredOptions.length === 0 ? (
                            <div className="p-4 text-center text-sm text-slate-500 italic">
                                No modules found.
                            </div>
                        ) : (
                            filteredOptions.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleSelectAction(opt.id)}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50/80 transition-colors text-left group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-slate-100/80 group-hover:bg-cyan-100/50 flex items-center justify-center text-slate-500 group-hover:text-cyan-600 border border-slate-200/50 group-hover:border-cyan-200/50 transition-colors">
                                        <span className="material-symbols-outlined text-[16px]">{opt.icon || 'extension'}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-cyan-800 transition-colors">{opt.name}</span>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModuleDropdown;
