import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="font-display text-slate-900 antialiased overflow-x-hidden min-h-screen flex flex-col" style={{ background: 'radial-gradient(at 0% 0%, hsla(210, 80%, 93%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(220, 60%, 96%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(200, 70%, 90%, 1) 0, transparent 50%)', backgroundColor: '#f0f4f8', backgroundAttachment: 'fixed' }}>

            <nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-primary to-blue-400 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>view_in_ar</span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-slate-900 text-lg font-bold tracking-tight">CarveStack</h1>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-6">
                                <Link className="glass-nav-item active text-slate-900 font-semibold text-sm transition-colors" to="#">Dashboard</Link>
                                <Link className="glass-nav-item text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" to="#">Projects</Link>
                                <Link className="glass-nav-item text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" to="#">Feature Library</Link>
                                <Link className="glass-nav-item text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" to="#">Generator</Link>
                                <Link className="glass-nav-item text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors" to="#">API Keys</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden lg:flex relative group">
                                <button className="flex items-center gap-2 text-slate-600 bg-white/40 hover:bg-white/60 px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-white/50">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    E-commerce MVP
                                    <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
                                </button>
                            </div>
                            <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
                            <div className="flex items-center gap-3">
                                <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-600 hover:text-primary transition-colors relative">
                                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>
                                <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9kUAlg6lTLyUIUKsh4DbEk18vLTPsOOouQvyPXHNC0FIf7bVZd-Qp2G2V8y2eZQos1D8PdsFhGOsS3Qs8byEjj_yHXosjYMktR5EFgUKyx5o-R7lYiL8lWDKWHb0HYr4pDKOBdYPz7CVEZMARRO767zcUNXDxixaU5PnuRYtWDRXVc3snnq-YhEfWMkxcV5DIo5jTuTp6bvo0nva6VWYLPnL01D7KouefBtU1QTfJL2yVzfHxfk2Q_lH1eTJ_urnO8ZAWsbtLOgU')` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Good morning, Sarah</h2>
                        <p className="text-slate-500">Here's what's happening with your stacks today.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-3">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Usage</span>
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-24 bg-slate-200/60 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-400 to-primary w-[85%] rounded-full"></div>
                                </div>
                                <span className="text-xs font-bold text-slate-700">85%</span>
                            </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white py-2 px-5 rounded-xl font-semibold shadow-lg shadow-primary/30 transition-all transform active:scale-95">
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span>New Project</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link to="/builder/1" className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
                        <div>
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                                    <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors bg-white/50 p-1.5 rounded-lg hover:bg-white"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-xl font-bold text-slate-900">SaaS Starter Kit</h4>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 uppercase tracking-wide">Active</span>
                                </div>
                                <p className="text-sm text-slate-500 line-clamp-2">Complete e-commerce solution with integrated payment processing and user authentication.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Auth0</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Stripe</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Dashboard</span>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                            <div className="flex -space-x-3">
                                <img alt="Team member" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLJjUYN4cLroj1PpXSm4ljgFRJZ4TC76_25oQ6NzMDggwuo_hOZ9bxHdImlFg3Ce-zKtt_3VLCq2IY50Lozwefbxa3SA25GSSUOpopVbnY3lFudFBnIxJvE9Ms4DamJyovFBVdIcii-NVGiJJ1JMPQO9Gd7SlW-oc4MGuYxMbL2w6m5TkU9DfZpqGf4iZEL-MvwG4i5uTmllNSfkxZV2cVH_quZfCjMWmBzLvMyoJrzJ4q8egrz4qIXx2DSuKqSUunn-aBiKTs8RQ" />
                                <img alt="Team member" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyrlUDvAkE-87D18Fn48eHtumcBNmXRdVTNkeGKuB60gH5K2GWnTdw3sbZONEVTdyWxArdTm1pOQvD7BlLzQYLGHqlU8KINwEo-28_dTodS0DmrrG3WEQAiQFeLQzdK_FHSBAorIBspL6t7ZYu3SITxbtMQFr525DSfnFC-ERMfMb3AzUFZ6Pcjf---tdaFaNQAdiHp3Wm90_9Z2Kv0NIjlonqYVKk9rLZFotxvEd9XRGuZcWJEAKzVGf_Xi0T8f_mn8p2SLJ6GY" />
                                <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500 shadow-sm">+3</div>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">Edited 2h ago</p>
                        </div>
                    </Link>
                    <Link to="/builder/2" className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
                        <div>
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                                    <span className="material-symbols-outlined text-2xl">table_chart</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors bg-white/50 p-1.5 rounded-lg hover:bg-white"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-xl font-bold text-slate-900">Internal CRM</h4>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wide">Draft</span>
                                </div>
                                <p className="text-sm text-slate-500 line-clamp-2">Internal tool for managing customer relationships and support tickets with RBAC.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Tables</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Forms</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">RBAC</span>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                            <div className="flex -space-x-3">
                                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 border-2 border-white shadow-sm">You</div>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">Edited yesterday</p>
                        </div>
                    </Link>
                    <Link to="/builder/3" className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
                        <div>
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-sm">
                                    <span className="material-symbols-outlined text-2xl">bolt</span>
                                </div>
                                <button className="text-slate-400 hover:text-primary transition-colors bg-white/50 p-1.5 rounded-lg hover:bg-white"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="text-xl font-bold text-slate-900">Marketing Site</h4>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 uppercase tracking-wide">Active</span>
                                </div>
                                <p className="text-sm text-slate-500 line-clamp-2">High performance landing page with integrated CMS for blog management.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">CMS</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">Blog</span>
                                <span className="px-3 py-1 rounded-lg bg-white/60 text-slate-600 text-xs font-medium border border-white/50">SEO</span>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                            <div className="flex -space-x-3">
                                <img alt="Team member" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjEx4hYsO6waKAZydmWEsgaLHtT58evfXEnoZ9NoJVEPVrUvs7ZySZd_Z2BppZ8ZnVD-s54dgT9E3QAWv_b0FuLo8qv80ZjfmYhha9wvMKS1V0zzYKxBt5IkTr0MKJ6XBnOdXSfH-odDORIO8t4Ux9JN4bTOuTC_LG6Y8QVP6M4Fuk3whgOxKd4TvhYWLAeFm32LgaDgQpLTmYqgSFlPdb0v7lKdszxlA14m3SWsrVZK8-Zg3HZEhnGC4o_1qJ8SCLumm5DBS3_Ss" />
                            </div>
                            <p className="text-xs text-slate-400 font-medium">Edited 3 days ago</p>
                        </div>
                    </Link>
                    <button className="glass-card p-8 rounded-2xl border-dashed border-2 border-slate-300 bg-white/20 hover:bg-white/50 hover:border-primary flex flex-col items-center justify-center gap-6 group transition-all h-full min-h-[320px]">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform group-hover:shadow-xl">
                            <span className="material-symbols-outlined text-4xl text-primary">add</span>
                        </div>
                        <div className="text-center max-w-[200px]">
                            <h4 className="text-lg font-bold text-slate-800">Create New Project</h4>
                            <p className="text-sm text-slate-500 mt-2">Start a new stack from scratch or use a template</p>
                        </div>
                    </button>
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-slate-900">42</p>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Generations this month</p>
                        </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">api</span>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-slate-900">1.2k</p>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">API Calls total</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-6">
                        <span>© 2024 CarveStack</span>
                        <Link className="hover:text-primary" to="#">Documentation</Link>
                        <Link className="hover:text-primary" to="#">Support</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="font-medium text-slate-600">All systems operational</span>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default Dashboard;
