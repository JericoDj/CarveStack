import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="min-h-screen w-full text-slate-900 bg-gradient-animate overflow-x-hidden selection:bg-primary/30 selection:text-primary-900">

            {/*  Navbar  */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary backdrop-blur-sm border border-primary/20">
                            <span className="material-symbols-outlined text-xl">layers</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-slate-800">CarveStack</h1>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors"
                            to="/how-it-works">How it Works</Link>
                        <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors"
                            to="#">Features</Link>
                        <Link className="text-primary font-bold text-sm transition-colors" to="/pricing">Pricing</Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" to="#">Docs</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link className="hidden sm:block text-[#1F2937] text-sm font-semibold hover:text-primary transition-colors"
                            to="/dashboard">Log In</Link>
                        <button className="glass-btn px-5 py-2 rounded-xl text-sm font-bold text-primary shadow-sm hover:shadow-md active:scale-95">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
            {/*  Main Content  */}
            <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/*  Hero Header  */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                            Plans that scale with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">your stack</span>
                        </h1>
                        <p className="text-lg text-slate-600/90 max-w-2xl mx-auto font-medium">
                            Generate structured technical prompts instantly. Choose the tier that fits your development cycle perfectly.
                        </p>
                        {/*  Toggle (Visual Only)  */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <span className="text-sm font-medium text-slate-600">Monthly</span>
                            <button className="relative w-12 h-7 rounded-full glass-panel border-primary/30 transition-colors duration-200 ease-in-out focus:outline-none">
                                <span className="translate-x-6 inline-block w-5 h-5 transform bg-primary rounded-full shadow transition-transform duration-200 ease-in-out mt-[2px] ml-[2px]"></span>
                            </button>
                            <span className="text-sm font-bold text-slate-900">Yearly <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-1 border border-primary/20">-20%</span></span>
                        </div>
                    </div>
                    {/*  Pricing Grid  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative mb-24">
                        {/*  Starter Card  */}
                        <div className="glass-card rounded-3xl p-8 flex flex-col h-full relative group">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">Starter</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tight">$0</span>
                                    <span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <p className="text-sm text-slate-600 mt-2">Perfect for side projects and learning.</p>
                            </div>
                            <button className="w-full glass-btn py-3 rounded-xl text-slate-800 font-bold mb-8 hover:bg-white/60">
                                Start Building
                            </button>
                            <div className="space-y-4 flex-1">
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Basic prompt generation</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>5 projects/mo</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Community support</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-400">
                                    <span className="material-symbols-outlined text-[20px] shrink-0">remove</span>
                                    <span>Advanced logic engine</span>
                                </div>
                            </div>
                        </div>
                        {/*  Pro Card  */}
                        <div className="glass-card pro-card rounded-3xl p-8 flex flex-col h-full relative transform md:-translate-y-4 md:scale-105 z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wide uppercase">
                                Most Popular
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center justify-between">
                                    Pro
                                    <span className="material-symbols-outlined text-primary opacity-50">verified</span>
                                </h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-slate-900 tracking-tight">$49</span>
                                    <span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <p className="text-sm text-slate-600 mt-2">For professional developers shipping daily.</p>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold mb-8 shadow-lg shadow-primary/25 transition-all active:scale-95">
                                Go Pro
                            </button>
                            <div className="space-y-4 flex-1">
                                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Everything in Starter</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Advanced logic engine</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Unlimited exports</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Priority email support</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Team collaboration (up to 3)</span>
                                </div>
                            </div>
                        </div>
                        {/*  Enterprise Card  */}
                        <div className="glass-card rounded-3xl p-8 flex flex-col h-full relative">
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">Enterprise</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tight">Custom</span>
                                </div>
                                <p className="text-sm text-slate-600 mt-2">Scalable solutions for large organizations.</p>
                            </div>
                            <button className="w-full glass-btn py-3 rounded-xl text-slate-800 font-bold mb-8 hover:bg-white/60">
                                Contact Sales
                            </button>
                            <div className="space-y-4 flex-1">
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Full API access</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Custom integrations</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>Dedicated account manager</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>SSO &amp; Advanced Security</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-slate-700">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">check_circle</span>
                                    <span>99.99% SLA Uptime</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  FAQ Section  */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="glass-panel rounded-xl group overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-800 font-medium transition-colors hover:bg-white/20">
                                    <span>How does the prompt conversion work?</span>
                                    <span className="material-symbols-outlined text-slate-500 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-white/20 pt-4">
                                    Our engine analyzes your selected features and tech stack constraints to generate optimized, context-aware prompts ready for LLMs like GPT-4 or Claude 3.5. It ensures technical accuracy by strictly following your architectural patterns.
                                </div>
                            </details>
                            <details className="glass-panel rounded-xl group overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-800 font-medium transition-colors hover:bg-white/20">
                                    <span>Can I cancel my subscription anytime?</span>
                                    <span className="material-symbols-outlined text-slate-500 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-white/20 pt-4">
                                    Yes, absolutely. You can cancel your subscription at any time from your dashboard. Your access will continue until the end of your current billing cycle.
                                </div>
                            </details>
                            <details className="glass-panel rounded-xl group overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-800 font-medium transition-colors hover:bg-white/20">
                                    <span>What output formats are supported?</span>
                                    <span className="material-symbols-outlined text-slate-500 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-white/20 pt-4">
                                    We support Markdown, JSON, and plain text formats. Enterprise plans can also configure custom XML or YAML templates to fit into specific CI/CD pipelines.
                                </div>
                            </details>
                            <details className="glass-panel rounded-xl group overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-800 font-medium transition-colors hover:bg-white/20">
                                    <span>Do you offer team discounts?</span>
                                    <span className="material-symbols-outlined text-slate-500 transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-white/20 pt-4">
                                    Yes, for teams larger than 10 members, please contact our sales team. We offer volume pricing and dedicated onboarding sessions for larger engineering organizations.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </main>
            {/*  Footer decoration  */}
            <footer className="relative z-10 py-10 text-center text-slate-600/80 text-sm glass-panel border-t border-white/40">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 CarveStack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
                        <Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link>
                        <Link className="hover:text-primary transition-colors" to="#">Twitter</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Pricing;
