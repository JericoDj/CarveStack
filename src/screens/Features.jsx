import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

export default function Features() {
    return (
        <div className="relative text-[#1F2937] min-h-screen flex flex-col w-full bg-gradient-to-br from-[#eef2f3] via-[#BFD3D6] to-[#f6f7f8]">
            {/* Blob Backgrounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="liquid-blob bg-[#49A7D3] w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-40"></div>
                <div className="liquid-blob bg-[#BFD3D6] w-[600px] h-[600px] top-[20%] right-[-150px] opacity-50"></div>
                <div className="liquid-blob bg-[#137fec] w-[400px] h-[400px] bottom-[-50px] left-[20%] opacity-20"></div>
            </div>

            <AppNavbar />
            <div className="flex-grow flex flex-col w-full">

                <section className="relative pt-12 pb-16 px-4 md:px-8">
                    <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 text-primary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            Feature Library v2.0
                        </div>
                        <h1
                            className="text-[#1F2937] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                            Modular by Design, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#49A7D3]">Production by
                                Default</span>
                        </h1>
                        <p className="text-[#6B7280] text-lg md:text-xl font-medium max-w-[700px] leading-relaxed mb-10">
                            Explore our comprehensive library of pre-configured, production-ready modules. From auth to payments,
                            simply stack what you need and export the code.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                className="primary-gradient text-white h-12 px-8 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                                Start Building
                                <span
                                    className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button
                                className="glass-button h-12 px-8 rounded-xl font-bold text-[#1F2937] bg-white/40 hover:bg-white/60 transition-all duration-300 flex items-center gap-2 border border-white/50">
                                <span className="material-symbols-outlined text-lg">book</span>
                                Read Documentation
                            </button>
                        </div>
                    </div>
                </section>
                <section className="py-12 px-4 md:px-8 pb-12">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className="glass-panel rounded-3xl p-8 hover:shadow-glass-hover transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-primary">architecture</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-blue-100/50 text-primary">
                                        <span className="material-symbols-outlined text-2xl">dns</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1F2937]">Core Architecture</h3>
                                </div>
                                <p className="text-[#6B7280] mb-8 leading-relaxed">Fundamental building blocks for scalable
                                    applications. Choose your runtime, language, and deployment strategy.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-orange-500 text-lg">javascript</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Node.js Runtime</h4>
                                            <span className="text-xs text-[#6B7280]">Express or Fastify</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-blue-500 text-lg">code_blocks</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">React Frontend</h4>
                                            <span className="text-xs text-[#6B7280]">Vite + TypeScript</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-cyan-500 text-lg">wind_power</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Tailwind CSS</h4>
                                            <span className="text-xs text-[#6B7280]">Utility-first styling</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-purple-500 text-lg">rocket_launch</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Docker Ready</h4>
                                            <span className="text-xs text-[#6B7280]">Containerized setup</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="glass-panel rounded-3xl p-8 hover:shadow-glass-hover transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-emerald-600">security</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-emerald-100/50 text-emerald-600">
                                        <span className="material-symbols-outlined text-2xl">lock</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1F2937]">Security &amp; Identity</h3>
                                </div>
                                <p className="text-[#6B7280] mb-8 leading-relaxed">Enterprise-grade protection out of the box. Secure
                                    your users and data with industry standard protocols.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-emerald-600 text-lg">vpn_key</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">JWT Auth</h4>
                                            <span className="text-xs text-[#6B7280]">Rotation &amp; Refresh</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-indigo-600 text-lg">badge</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">OAuth 2.0</h4>
                                            <span className="text-xs text-[#6B7280]">Google &amp; GitHub</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span
                                                className="material-symbols-outlined text-gray-700 text-lg">admin_panel_settings</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">RBAC</h4>
                                            <span className="text-xs text-[#6B7280]">Role-based Access</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-red-500 text-lg">shield</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">WAF Config</h4>
                                            <span className="text-xs text-[#6B7280]">Rate limiting &amp; CORS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="glass-panel rounded-3xl p-8 hover:shadow-glass-hover transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-indigo-600">database</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-indigo-100/50 text-indigo-600">
                                        <span className="material-symbols-outlined text-2xl">storage</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1F2937]">Data Persistence</h3>
                                </div>
                                <p className="text-[#6B7280] mb-8 leading-relaxed">Robust data layers configured for performance. Choose
                                    between relational SQL or flexible NoSQL solutions.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-blue-700 text-lg">table_chart</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">PostgreSQL</h4>
                                            <span className="text-xs text-[#6B7280]">With TypeORM</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-teal-600 text-lg">data_object</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">MongoDB</h4>
                                            <span className="text-xs text-[#6B7280]">Mongoose Schema</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-gray-800 text-lg">change_history</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Prisma ORM</h4>
                                            <span className="text-xs text-[#6B7280]">Type-safe queries</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-red-600 text-lg">bolt</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Redis Cache</h4>
                                            <span className="text-xs text-[#6B7280]">In-memory store</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="glass-panel rounded-3xl p-8 hover:shadow-glass-hover transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-8xl text-purple-600">hub</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-purple-100/50 text-purple-600">
                                        <span className="material-symbols-outlined text-2xl">extension</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1F2937]">Integrations</h3>
                                </div>
                                <p className="text-[#6B7280] mb-8 leading-relaxed">Connect to the services your business runs on.
                                    Pre-built webhooks and API wrappers for popular SaaS.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-indigo-500 text-lg">payments</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">Stripe</h4>
                                            <span className="text-xs text-[#6B7280]">Billing &amp; Subscriptions</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-pink-500 text-lg">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">SendGrid</h4>
                                            <span className="text-xs text-[#6B7280]">Transactional Email</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-orange-600 text-lg">cloud_upload</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">AWS S3</h4>
                                            <span className="text-xs text-[#6B7280]">File Storage</span>
                                        </div>
                                    </div>
                                    <div className="glass-chip rounded-xl p-3 flex items-center gap-3 cursor-pointer">
                                        <div className="size-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-blue-400 text-lg">analytics</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-[#1F2937]">PostHog</h4>
                                            <span className="text-xs text-[#6B7280]">Product Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <main className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-12 pb-12">
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div
                            className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-primary drop-shadow-sm">shield_lock</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Enterprise-Grade Security</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Baked-in security protocols that adhere to SOC2 and ISO27001 standards. We generate
                                        authentication flows that include refresh token rotation, RBAC middleware, and encrypted
                                        data-at-rest configurations by default.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">OAuth 2.0 &amp; OIDC</h4>
                                            <p className="text-xs text-text-muted mt-1">Pre-configured providers for Google, GitHub, and
                                                Azure AD.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Role-Based Access</h4>
                                            <p className="text-xs text-text-muted mt-1">Granular permission middleware generated
                                                automatically.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Audit Logging</h4>
                                            <p className="text-xs text-text-muted mt-1">Immutable activity logs stored in isolated
                                                database schemas.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Input Validation</h4>
                                            <p className="text-xs text-text-muted mt-1">Zod schemas generated for every API endpoint.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-4 pt-6 border-t border-gray-200/40">
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider text-primary self-center mr-2">Supported:</span>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">lock</span>
                                        <span className="text-sm font-semibold text-gray-700">NextAuth.js</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">vpn_key</span>
                                        <span className="text-sm font-semibold text-gray-700">Clerk</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">security</span>
                                        <span className="text-sm font-semibold text-gray-700">Supabase Auth</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div
                            className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-purple-500 drop-shadow-sm">database</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Intelligent Schema Design</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Don't just get a database; get a fully normalized schema designed for scale. CarveStack
                                        analyzes your data relationships and outputs optimized migration files, indexes, and ORM
                                        definitions.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-purple-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Auto-Normalization</h4>
                                            <p className="text-xs text-text-muted mt-1">Reduces redundancy by detecting related
                                                entities.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-purple-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Migration Generation</h4>
                                            <p className="text-xs text-text-muted mt-1">Outputs versioned SQL or Prisma migration files.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-purple-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Index Optimization</h4>
                                            <p className="text-xs text-text-muted mt-1">Suggests composite indexes based on query
                                                patterns.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-purple-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Seeding Scripts</h4>
                                            <p className="text-xs text-text-muted mt-1">Generates dummy data scripts for rapid testing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-4 pt-6 border-t border-gray-200/40">
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider text-purple-600 self-center mr-2">Supported:</span>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">table_chart</span>
                                        <span className="text-sm font-semibold text-gray-700">PostgreSQL</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">dns</span>
                                        <span className="text-sm font-semibold text-gray-700">MongoDB</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">data_object</span>
                                        <span className="text-sm font-semibold text-gray-700">Prisma ORM</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">storage</span>
                                        <span className="text-sm font-semibold text-gray-700">Drizzle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div
                            className="absolute -right-20 -bottom-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl group-hover:bg-green-400/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-emerald-500 drop-shadow-sm">api</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">API &amp; Connectivity</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Build robust communication layers instantly. Whether you prefer REST or GraphQL, CarveStack
                                        generates type-safe controllers, routes, and client-side hooks that just work.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Type-Safe Endpoints</h4>
                                            <p className="text-xs text-text-muted mt-1">End-to-end type safety shared between frontend
                                                and backend.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Rate Limiting</h4>
                                            <p className="text-xs text-text-muted mt-1">Built-in protection against DDoS and abuse.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Documentation</h4>
                                            <p className="text-xs text-text-muted mt-1">Auto-generated OpenAPI (Swagger) specifications.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-text-main text-sm">Caching Strategies</h4>
                                            <p className="text-xs text-text-muted mt-1">Redis implementation for high-traffic endpoints.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-4 pt-6 border-t border-gray-200/40">
                                    <span
                                        className="text-xs font-bold uppercase tracking-wider text-emerald-600 self-center mr-2">Supported:</span>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">bolt</span>
                                        <span className="text-sm font-semibold text-gray-700">FastAPI</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">code</span>
                                        <span className="text-sm font-semibold text-gray-700">tRPC</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">hub</span>
                                        <span className="text-sm font-semibold text-gray-700">GraphQL</span>
                                    </div>
                                    <div className="chip px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-default">
                                        <span className="material-symbols-outlined text-sm text-gray-600">webhook</span>
                                        <span className="text-sm font-semibold text-gray-700">Express</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Stripe Integration */}
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group mt-4">
                        <div
                            className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-blue-500 drop-shadow-sm">payments</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Stripe Integration</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Build robust monetization flows and subscription logic with comprehensive Stripe capabilities out of the box.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Stripe Checkout', 'One-Time Payments', 'Subscriptions & Recurring Billing', 'Usage-Based Billing', 'Customer Portal', 'Saved Payment Methods', 'Payment Intents & Webhooks', 'Refunds & Disputes', 'Coupons & Promotion Codes', 'Tax Calculation (Stripe Tax)', 'Multi-Currency Support', '3D Secure Authentication', 'Invoice Generation', 'Payment Failure Recovery', 'Payouts / Connect Accounts', 'Marketplace Split Payments', 'Revenue Reporting', 'Test Mode & Sandbox'].map(chip => (
                                        <div key={chip} className="px-3 py-1.5 rounded-xl text-sm font-medium border bg-white/60 border-gray-200 text-gray-700 flex items-center gap-1.5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                                            <span className="material-symbols-outlined text-[16px] text-blue-500">check_circle</span>
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* PayPal Integration */}
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group mt-4">
                        <div
                            className="absolute -left-20 -bottom-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-yellow-500 drop-shadow-sm">account_balance_wallet</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">PayPal Integration</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Accept payments globally with PayPal's extensive digital wallet network and reliable subscription tools.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['PayPal Checkout', 'PayPal Subscriptions', 'One-Time Payments', 'PayPal Wallet Payments', 'Capture / Authorize Payments', 'Refunds Handling', 'Payment Status Sync', 'Webhook Notifications', 'Multi-Currency Payments', 'Invoice Payments', 'Payment Links', 'Dispute Handling', 'Sandbox Testing', 'Express Checkout Buttons', 'Guest Checkout Support', 'Payouts to Users', 'Transaction History Sync', 'Payment Notifications'].map(chip => (
                                        <div key={chip} className="px-3 py-1.5 rounded-xl text-sm font-medium border bg-white/60 border-gray-200 text-gray-700 flex items-center gap-1.5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                                            <span className="material-symbols-outlined text-[16px] text-yellow-500">check_circle</span>
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Paddle Integration */}
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group mt-4">
                        <div
                            className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-purple-500 drop-shadow-sm">shopping_cart_checkout</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Paddle Integration</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Offload tax compliance and subscription management globally with Paddle's Merchant of Record framework.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Hosted Checkout', 'Subscriptions Billing', 'In-App Purchases (Web Apps)', 'Tax & VAT Handling', 'Global Sales Tax Compliance', 'Customer Portal', 'License Keys', 'Trial Periods', 'Upgrade / Downgrade Plans', 'Dunning Management', 'Refund Handling', 'Webhook Events', 'Revenue Analytics', 'Coupon Discounts', 'Multi-Currency Pricing', 'EU Compliance Ready', 'Subscription Cancellation', 'Receipt Emails'].map(chip => (
                                        <div key={chip} className="px-3 py-1.5 rounded-xl text-sm font-medium border bg-white/60 border-gray-200 text-gray-700 flex items-center gap-1.5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                                            <span className="material-symbols-outlined text-[16px] text-purple-500">check_circle</span>
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Lemon Squeezy Integration */}
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group mt-4">
                        <div
                            className="absolute -left-20 -bottom-20 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl group-hover:bg-lime-500/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center -rotate-2 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-lime-600 drop-shadow-sm">storefront</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Lemon Squeezy Integration</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Streamline digital product sales and global tax handling with developer-friendly Lemon Squeezy infrastructure.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Hosted Checkout', 'Digital Product Sales', 'Subscriptions', 'License Key Management', 'Customer Portal', 'VAT & Sales Tax Handling', 'Global Payments', 'Discount Codes', 'Trial Periods', 'Webhook Events', 'Order Management', 'Refund Handling', 'Receipt Emails', 'Affiliate Tracking', 'Product Variants', 'Storefront Pages', 'Usage Analytics', 'Developer-Friendly API'].map(chip => (
                                        <div key={chip} className="px-3 py-1.5 rounded-xl text-sm font-medium border bg-white/60 border-gray-200 text-gray-700 flex items-center gap-1.5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                                            <span className="material-symbols-outlined text-[16px] text-lime-600">check_circle</span>
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Layered Architecture Section */}
                    <article className="glass-slab rounded-3xl p-8 md:p-12 relative overflow-hidden group mt-4">
                        <div
                            className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500">
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start relative z-10">
                            <div
                                className="glass-icon-container w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                                <span
                                    className="material-symbols-outlined text-6xl md:text-7xl text-cyan-600 drop-shadow-sm">account_tree</span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-3">Service-Layer Architecture</h3>
                                    <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                                        Implement a clean, separation-of-concerns based architecture with distinct layers for routing, business logic, data access, and models.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Controllers & Route Isolation', 'Business Service Layer', 'Data Repository Pattern', 'Data Transfer Objects (DTOs)', 'Schema Validation Layer', 'Stateful Middleware Flow', 'Dependency Injection Configuration', 'Global Error Handling Strategy', 'Automated Unit Testing', 'Swagger / OpenAPI Documentation', 'Modular Logic Decoupling', 'Robust Data Access Layer'].map(chip => (
                                        <div key={chip} className="px-3 py-1.5 rounded-xl text-sm font-medium border bg-white/60 border-gray-200 text-gray-700 flex items-center gap-1.5 shadow-sm hover:bg-white hover:shadow-md transition-all">
                                            <span className="material-symbols-outlined text-[16px] text-cyan-600">check_circle</span>
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </main>

            </div>

            <AppFooter />
        </div>
    );
}
