import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

const HowItWorks = () => {
    return (
        <div className="relative text-[#1F2937] bg-gradient-to-br from-[#eef2f3] via-[#BFD3D6] to-[#f6f7f8] min-h-screen flex flex-col w-full">

            {/* Blob Backgrounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="liquid-blob bg-[#49A7D3] w-[600px] h-[600px] top-[-200px] left-[-100px] opacity-30"></div>
                <div className="liquid-blob bg-[#BFD3D6] w-[700px] h-[700px] top-[40%] right-[-200px] opacity-40"></div>
                <div className="liquid-blob bg-[#137fec] w-[500px] h-[500px] bottom-[-100px] left-[10%] opacity-20"></div>
            </div>
            <AppNavbar />
            <header className="pt-16 pb-12 px-4 text-center max-w-[800px] mx-auto relative z-10">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="material-symbols-outlined text-sm">flowsheet</span>
                    Workflow
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight mb-6">
                    From Idea to Spec in <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#49A7D3]">Three Liquid
                        Steps</span>
                </h1>
                <p className="text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed">
                    See how CarveStack translates your feature requirements into production-ready technical prompts through our
                    transparent AI pipeline.
                </p>
            </header>
            <main className="flex-grow relative px-4 pb-12">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-16 lg:gap-24 relative">
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block -z-10">
                    </div>
                    <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            <div
                                className="inline-flex items-center justify-center size-12 rounded-xl bg-white/60 shadow-glass mb-6 border border-white/60">
                                <span className="material-symbols-outlined text-primary text-2xl">touch_app</span>
                            </div>
                            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">1. Intelligent Selection</h2>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                                Start by selecting high-level feature modules. Our interface presents a curated menu of common
                                SaaS components—Auth, Payments, Database, Storage—allowing you to assemble your stack visually.
                            </p>
                            <ul className="space-y-3 text-[#6B7280] inline-block text-left">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span>Visual component library</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span>Context-aware suggestions</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span>Instant stack validation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative animate-float-slow">
                            <div
                                className="glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[360px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
                                <div className="relative z-10 flex flex-col gap-4 w-full max-w-sm">
                                    <div className="flex gap-3 justify-center">
                                        <div
                                            className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 bg-white/80 border-primary/40 shadow-lg scale-105">
                                            <span className="material-symbols-outlined text-primary">fingerprint</span>
                                            <span className="font-bold text-[#1F2937]">Authentication</span>
                                            <div className="size-4 bg-primary rounded-full flex items-center justify-center ml-1">
                                                <span className="material-symbols-outlined text-[10px] text-white">check</span>
                                            </div>
                                        </div>
                                        <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 opacity-60">
                                            <span className="material-symbols-outlined text-[#6B7280]">search</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-center">
                                        <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 opacity-60">
                                            <span className="material-symbols-outlined text-[#6B7280]">analytics</span>
                                        </div>
                                        <div
                                            className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 bg-white/80 border-primary/40 shadow-lg scale-105">
                                            <span className="material-symbols-outlined text-primary">database</span>
                                            <span className="font-bold text-[#1F2937]">PostgreSQL</span>
                                            <div className="size-4 bg-primary rounded-full flex items-center justify-center ml-1">
                                                <span className="material-symbols-outlined text-[10px] text-white">check</span>
                                            </div>
                                        </div>
                                        <div className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 opacity-60">
                                            <span className="material-symbols-outlined text-[#6B7280]">api</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-center">
                                        <div
                                            className="glass-card px-4 py-3 rounded-xl flex items-center gap-2 bg-white/80 border-primary/40 shadow-lg scale-105">
                                            <span className="material-symbols-outlined text-primary">payments</span>
                                            <span className="font-bold text-[#1F2937]">Stripe</span>
                                            <div className="size-4 bg-primary rounded-full flex items-center justify-center ml-1">
                                                <span className="material-symbols-outlined text-[10px] text-white">check</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-[20%] right-[25%] pointer-events-none drop-shadow-xl">
                                        <svg className="w-8 h-8 fill-[#1F2937] stroke-white stroke-2" viewBox="0 0 320 512">
                                            <path
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-1 relative animate-float-slow" style={{ animationDelay: '1s' }}>
                            <div
                                className="glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[360px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent z-0"></div>
                                <div
                                    className="relative z-10 w-48 h-48 rounded-full glass-orb flex items-center justify-center animate-pulse-glow">
                                    <div
                                        className="absolute w-[120%] h-[120%] border border-white/20 rounded-full animate-spin [animation-duration:10s]">
                                    </div>
                                    <div
                                        className="absolute w-[140%] h-[140%] border border-white/10 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]">
                                    </div>
                                    <span
                                        className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                        temp_preferences_custom
                                    </span>
                                </div>
                                <div className="absolute w-full h-full pointer-events-none">
                                    <div
                                        className="absolute top-1/2 left-4 w-16 h-[1px] bg-gradient-to-r from-transparent to-primary/40">
                                    </div>
                                    <div
                                        className="absolute top-1/2 right-4 w-16 h-[1px] bg-gradient-to-l from-transparent to-primary/40">
                                    </div>
                                    <div
                                        className="absolute top-8 left-1/2 h-16 w-[1px] bg-gradient-to-b from-transparent to-primary/40">
                                    </div>
                                    <div
                                        className="absolute bottom-8 left-1/2 h-16 w-[1px] bg-gradient-to-t from-transparent to-primary/40">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2 text-center lg:text-left">
                            <div
                                className="inline-flex items-center justify-center size-12 rounded-xl bg-white/60 shadow-glass mb-6 border border-white/60">
                                <span className="material-symbols-outlined text-primary text-2xl">memory</span>
                            </div>
                            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">2. Neural Processing</h2>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                                Our AI engine analyzes the relationships between your selected modules. It resolves
                                dependencies, establishes security protocols, and structures the architecture according to
                                industry best practices.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-card p-4 rounded-xl text-center">
                                    <span className="block text-2xl font-bold text-[#1F2937] mb-1">0.4s</span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Latency</span>
                                </div>
                                <div className="glass-card p-4 rounded-xl text-center">
                                    <span className="block text-2xl font-bold text-[#1F2937] mb-1">100%</span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Coherence</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            <div
                                className="inline-flex items-center justify-center size-12 rounded-xl bg-white/60 shadow-glass mb-6 border border-white/60">
                                <span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
                            </div>
                            <h2 className="text-3xl font-bold text-[#1F2937] mb-4">3. Delivery &amp; Build</h2>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                                The result is a pristine, structured Markdown document. Copy this prompt directly into your LLM
                                of choice (GPT-4, Claude 3, etc.) to generate the actual codebase immediately.
                            </p>
                            <button
                                className="primary-gradient text-white h-12 px-8 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 group">
                                Try It Now
                                <span
                                    className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 relative animate-float-slow" style={{ animationDelay: '0.5s' }}>
                            <div
                                className="glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[360px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tl from-white/40 to-transparent z-0"></div>
                                <div
                                    className="relative z-10 w-full max-w-sm glass-card bg-white/60 backdrop-blur-xl border border-white/70 rounded-xl overflow-hidden shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                                    <div className="bg-white/40 border-b border-white/30 px-4 py-3 flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="size-2.5 rounded-full bg-red-400"></div>
                                            <div className="size-2.5 rounded-full bg-amber-400"></div>
                                            <div className="size-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="ml-auto text-[10px] font-mono text-gray-400">output.md</div>
                                    </div>
                                    <div className="p-5 space-y-3 font-mono text-xs">
                                        <div className="flex items-center gap-2 text-[#1F2937] font-bold text-sm">
                                            <span className="text-primary">#</span> Project Spec
                                        </div>
                                        <div className="h-px w-full bg-gray-200"></div>
                                        <div className="space-y-2 opacity-80">
                                            <div className="flex gap-2">
                                                <span className="text-primary">-</span>
                                                <span className="text-[#1F2937]">Stack: React, Node, PG</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-primary">-</span>
                                                <span className="text-[#1F2937]">Auth: JWT + Rotation</span>
                                            </div>
                                        </div>
                                        <div className="p-3 bg-blue-50/50 rounded border border-blue-100/50 mt-2">
                                            <div className="text-primary font-bold mb-1">## Instructions</div>
                                            <div className="code-line w-3/4 mb-1.5 bg-primary/10"></div>
                                            <div className="code-line w-full mb-1.5 bg-primary/10"></div>
                                            <div className="code-line w-5/6 bg-primary/10"></div>
                                        </div>
                                        <div
                                            className="absolute top-14 right-5 p-1.5 rounded-md bg-white shadow-sm border border-gray-100">
                                            <span className="material-symbols-outlined text-xs text-gray-400">content_copy</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/10 blur-xl rounded-[100%]">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <AppFooter />


        </div>
    );
};

export default HowItWorks;
