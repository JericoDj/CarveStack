import React from 'react'
import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

const Landing = () => {
  return (
    <div className="relative text-[#1F2937] min-h-screen flex flex-col font-sans selection:bg-primary/20 bg-gradient-to-br from-[#eef2f3] via-[#BFD3D6] to-[#f6f7f8] w-full">
      {/* Decorative Liquid Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="liquid-blob bg-[#49A7D3] w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-40"></div>
        <div className="liquid-blob bg-[#BFD3D6] w-[600px] h-[600px] top-[20%] right-[-150px] opacity-50"></div>
        <div className="liquid-blob bg-[#137fec] w-[400px] h-[400px] bottom-[-50px] left-[20%] opacity-20"></div>
      </div>

      {/* Navigation */}
      <AppNavbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 px-4 md:px-8">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            {/* Hero Glass Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-16 max-w-[960px] w-full text-center relative overflow-hidden animate-float">
              {/* Inner subtle glow */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  v2.0 Now Available
                </div>
                <h1 className="text-[#1F2937] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  Turn Features Into <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#49A7D3]">Build-Ready Software</span>
                </h1>
                <p className="text-[#6B7280] text-lg md:text-xl font-medium max-w-[640px] leading-relaxed">
                  Stop writing specs from scratch. Our liquid-smooth AI transforms your feature list into structured technical prompts instantly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                  <button className="primary-gradient text-white h-12 px-8 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
                    Generate Prompt
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <button className="glass-button h-12 px-8 rounded-xl font-bold text-[#1F2937] hover:bg-white/60 transition-all duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">play_circle</span>
                    View Features
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative Elements behind hero */}
            <div className="absolute top-[10%] left-[5%] w-24 h-24 glass-card rounded-2xl flex items-center justify-center rotate-[-12deg] animate-float-delayed hidden lg:flex">
              <span className="material-symbols-outlined text-4xl text-primary">database</span>
            </div>
            <div className="absolute top-[20%] right-[5%] w-20 h-20 glass-card rounded-2xl flex items-center justify-center rotate-[12deg] animate-float hidden lg:flex">
              <span className="material-symbols-outlined text-4xl text-[#49A7D3]">lock</span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 md:px-8 relative">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[#1F2937] text-3xl md:text-4xl font-bold mb-4">Liquid Workflow</h2>
              <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">From abstract idea to concrete technical specification in three seamless steps.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 group">
                <div className="size-14 rounded-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center shadow-sm border border-white">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">check_circle</span>
                </div>
                <div>
                  <h3 className="text-[#1F2937] text-xl font-bold mb-2">1. Choose Features</h3>
                  <p className="text-[#6B7280] leading-relaxed">Select from our library of pre-configured modules like Auth, Payments, and Database with a simple click.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 group md:mt-8">
                <div className="size-14 rounded-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center shadow-sm border border-white">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">smart_toy</span>
                </div>
                <div>
                  <h3 className="text-[#1F2937] text-xl font-bold mb-2">2. Generate Architecture</h3>
                  <p className="text-[#6B7280] leading-relaxed">Our AI analyzes your selections and structures them into a coherent technical specification document.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="glass-card rounded-2xl p-8 flex flex-col items-start gap-4 group md:mt-16">
                <div className="size-14 rounded-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center shadow-sm border border-white">
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300">terminal</span>
                </div>
                <div>
                  <h3 className="text-[#1F2937] text-xl font-bold mb-2">3. Build Instantly</h3>
                  <p className="text-[#6B7280] leading-relaxed">Export a ready-to-code prompt optimized for LLMs like GPT-4 or Claude to start coding immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features & Preview Split */}
        <section className="pt-20 pb-12 px-4 md:px-8">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Feature Selection */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-[#1F2937] text-3xl md:text-4xl font-bold mb-4">Stack Your Capabilities</h2>
                <p className="text-[#6B7280] text-lg">Click to add modular components to your stack. Watch as the prompt generates in real-time.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {/* Active Chip */}
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 bg-white/70 border-primary/30 ring-2 ring-primary/10 transition-all">
                  <span className="material-symbols-outlined text-primary text-xl">fingerprint</span>
                  <span className="font-bold text-[#1F2937]">User Auth</span>
                  <span className="material-symbols-outlined text-primary text-sm ml-1">check</span>
                </button>
                {/* Inactive Chips */}
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-white/60 cursor-pointer group transition-all">
                  <span className="material-symbols-outlined text-[#6B7280] group-hover:text-primary transition-colors text-xl">payments</span>
                  <span className="font-semibold text-[#6B7280] group-hover:text-[#1F2937] transition-colors">Stripe Payments</span>
                </button>
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-white/60 cursor-pointer group transition-all">
                  <span className="material-symbols-outlined text-[#6B7280] group-hover:text-primary transition-colors text-xl">database</span>
                  <span className="font-semibold text-[#6B7280] group-hover:text-[#1F2937] transition-colors">PostgreSQL</span>
                </button>
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 bg-white/70 border-primary/30 ring-2 ring-primary/10 transition-all">
                  <span className="material-symbols-outlined text-primary text-xl">api</span>
                  <span className="font-bold text-[#1F2937]">REST API</span>
                  <span className="material-symbols-outlined text-primary text-sm ml-1">check</span>
                </button>
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-white/60 cursor-pointer group transition-all">
                  <span className="material-symbols-outlined text-[#6B7280] group-hover:text-primary transition-colors text-xl">notifications</span>
                  <span className="font-semibold text-[#6B7280] group-hover:text-[#1F2937] transition-colors">Push Notifs</span>
                </button>
                <button className="glass-card px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-white/60 cursor-pointer group transition-all">
                  <span className="material-symbols-outlined text-[#6B7280] group-hover:text-primary transition-colors text-xl">cloud_upload</span>
                  <span className="font-semibold text-[#6B7280] group-hover:text-[#1F2937] transition-colors">S3 Storage</span>
                </button>
              </div>
              <div className="mt-4">
                <a className="text-primary font-bold inline-flex items-center hover:underline" href="#">
                  Explore all 50+ modules
                  <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* Right: Code Output Preview */}
            <div className="relative">
              {/* Decorative blurred circle behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-[#49A7D3]/30 blur-3xl rounded-full transform scale-90"></div>
              <div className="glass-panel rounded-xl overflow-hidden border border-white/40 shadow-2xl relative z-10 transition-transform hover:scale-[1.02] duration-500">
                {/* Window Controls */}
                <div className="bg-white/40 backdrop-blur-md px-4 py-3 flex items-center gap-2 border-b border-white/30">
                  <div className="size-3 rounded-full bg-red-400"></div>
                  <div className="size-3 rounded-full bg-yellow-400"></div>
                  <div className="size-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs font-mono text-[#6B7280] opacity-70">build_spec.md</div>
                </div>
                {/* Code Editor Content */}
                <div className="p-6 font-mono text-sm leading-relaxed text-[#1F2937] bg-white/20 backdrop-blur-sm h-[320px] overflow-hidden relative shadow-inner">
                  {/* Code Lines */}
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">1</div>
                    <div className="flex-1"><span className="text-purple-600 font-bold"># Technical Specification</span></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">2</div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">3</div>
                    <div className="flex-1"><span className="text-blue-600 font-bold">## Core Stack</span></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">4</div>
                    <div className="flex-1">- <span className="text-pink-600">Frontend:</span> React + Tailwind CSS</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">5</div>
                    <div className="flex-1">- <span className="text-pink-600">Backend:</span> Node.js (Express)</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">6</div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">7</div>
                    <div className="flex-1"><span className="text-blue-600 font-bold">## Module Configuration: Auth</span></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">8</div>
                    <div className="flex-1">Implement <span className="text-green-700 bg-green-100/50 px-1 rounded">JWT authentication</span> flow with:</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">9</div>
                    <div className="flex-1">  - Refresh token rotation</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">10</div>
                    <div className="flex-1">  - Secure HttpOnly cookies</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">11</div>
                    <div className="flex-1">  - Role-based access control (RBAC)</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">12</div>
                    <div className="flex-1"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">13</div>
                    <div className="flex-1"><span className="text-blue-600 font-bold">## API Endpoints</span></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-[#6B7280]/50 select-none text-right w-6">14</div>
                    <div className="flex-1">POST <span className="text-orange-600">/api/v1/auth/login</span></div>
                  </div>
                  {/* Fade out at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <AppFooter />
    </div>
  )
}

export default Landing;
