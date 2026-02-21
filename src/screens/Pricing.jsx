import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    return (
        <div className="relative bg-gradient-to-br from-[#eef2f3] via-[#BFD3D6] to-[#f6f7f8] min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary-900 text-slate-900 w-full">

            {/*  Navbar  */}
            <AppNavbar />
            {/*  Main Content  */}
            <main className="flex-grow relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
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
                        {/*  Toggle  */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>Monthly</span>
                            <button
                                onClick={() => setIsAnnual(!isAnnual)}
                                className="relative inline-flex h-7 w-12 items-center rounded-full bg-white/50 backdrop-blur-md border border-primary/30 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                <span className={`${isAnnual ? 'translate-x-6 bg-primary' : 'translate-x-1 bg-slate-400'} inline-block h-5 w-5 transform rounded-full shadow transition-transform duration-200 ease-in-out`}></span>
                            </button>
                            <span className={`text-sm transition-colors flex items-center ${isAnnual ? 'text-slate-900 font-bold' : 'text-slate-600 font-medium'}`}>
                                Yearly <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-1.5 border border-primary/20">-20%</span>
                            </span>
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
                                    <span className="text-5xl font-bold text-slate-900 tracking-tight">${isAnnual ? '39' : '49'}</span>
                                    <span className="text-slate-500 font-medium">/mo</span>
                                </div>
                                <p className="text-sm text-slate-600 mt-2">
                                    {isAnnual ? 'Billed $468 annually' : 'Billed monthly'}
                                </p>
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
            <AppFooter />
        </div>
    );
};

export default Pricing;
