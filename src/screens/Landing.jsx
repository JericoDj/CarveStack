import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="relative overflow-x-hidden bg-gradient-to-br from-[#eef2f3] via-[#BFD3D6] to-[#f6f7f8] min-h-screen font-display text-[#1f2937]">
      {/* Decorative Liquid Blobs */}
      <div className="liquid-blob bg-[#49A7D3] w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-40"></div>
      <div className="liquid-blob bg-[#BFD3D6] w-[600px] h-[600px] top-[20%] right-[-150px] opacity-50"></div>
      <div className="liquid-blob bg-[#137fec] w-[400px] h-[400px] bottom-[-50px] left-[20%] opacity-20"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full px-6 py-4">
        <div className="glass-panel mx-auto max-w-[1200px] rounded-[2rem] px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-primary to-[#49A7D3] text-white shadow-lg">
              <span className="material-symbols-outlined text-lg">layers</span>
            </div>
            <h2 className="text-[#1F2937] text-xl font-bold tracking-tight">CarveStack</h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" to="/how-it-works">How it Works</Link>
            <a className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" href="#">Features</a>
            <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" to="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="hidden sm:block text-[#1F2937] text-sm font-semibold hover:text-primary transition-colors" to="/dashboard">Log In</Link>
            <button className="primary-gradient text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>

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
      <section className="py-20 px-4 md:px-8">
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/40 bg-white/30 backdrop-blur-md mt-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-6 rounded bg-primary text-white">
              <span className="material-symbols-outlined text-sm">layers</span>
            </div>
            <span className="text-[#1F2937] font-bold text-lg">CarveStack</span>
          </div>
          <div className="text-[#6B7280] text-sm font-medium">
            © 2024 CarveStack Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a className="text-[#6B7280] hover:text-primary transition-colors" href="#">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </a>
            <a className="text-[#6B7280] hover:text-primary transition-colors" href="#">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing;
