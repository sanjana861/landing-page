import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none animate-float-slower"></div>

      {/* Left Text Column */}
      <div className="lg:col-span-7 flex flex-col items-start space-y-6 relative z-10">
        <span className="px-3.5 py-1.5 bg-indigo-50 border border-indigo-200/60 dark:bg-indigo-950/40 dark:border-indigo-900/40 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider select-none">
          Next Generation Web Engineering
        </span>
        <h1 className="text-4.5xl sm:text-5.5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] font-heading">
          We engineer premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-650 to-violet-600 dark:from-indigo-400 dark:to-violet-400">digital experiences</span> that convert.
        </h1>
        <p className="text-lg text-slate-650 dark:text-slate-400 max-w-xl font-normal leading-relaxed">
          Minimal, secure, and production-optimized platforms calibrated to scale with your business's primary performance metrics.
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-2">
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-755 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md shadow-indigo-600/15 hover:scale-[1.02] cursor-pointer"
          >
            Start Project <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#services" 
            className="flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-55 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            Our Capabilities
          </a>
        </div>
      </div>

      {/* Right Mockup Graphic */}
      <div className="lg:col-span-5 relative w-full h-80 sm:h-96 lg:h-[450px] bg-gradient-to-br from-indigo-150/40 to-violet-150/40 dark:from-indigo-950/20 dark:to-violet-950/20 rounded-3xl border border-slate-200/60 dark:border-slate-850/60 overflow-hidden shadow-inner flex items-center justify-center p-4">
        {/* Grid Overlay background */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:opacity-20"></div>
        
        {/* Glassmorphic console container */}
        <div className="w-full h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/50 dark:border-slate-800/60 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden">
          {/* Header Bar */}
          <div className="flex justify-between items-center bg-slate-100/60 dark:bg-slate-950/40 border-b border-slate-200/50 dark:border-slate-800/50 px-4 py-3 select-none">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-450 dark:bg-rose-400"></span>
              <span className="w-3 h-3 rounded-full bg-amber-450 dark:bg-amber-400"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-450 dark:bg-emerald-400"></span>
            </div>
            <div className="h-4 w-40 bg-slate-200/80 dark:bg-slate-800/80 rounded flex items-center justify-center text-[10px] font-mono text-slate-500">
              vertex-project-brief.config
            </div>
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Body Content */}
          <div className="p-6 flex-1 font-mono text-xs text-slate-650 dark:text-slate-350 space-y-4 overflow-y-auto leading-relaxed select-text">
            <div>
              <span className="text-indigo-650 dark:text-indigo-400">const</span> project = &#123;
              <div className="pl-4">
                name: <span className="text-emerald-650 dark:text-emerald-400">"Vertex Next Gen"</span>,
                architecture: <span className="text-violet-650 dark:text-violet-400">"React / Vite / Tailwind"</span>,
                lighthouseScore: <span className="text-amber-600 dark:text-amber-400">100</span>,
                speedIndex: <span className="text-rose-500">"sub-second"</span>,
                seoIndexing: <span className="text-indigo-500">true</span>,
                ownership: <span className="text-emerald-500">"100% IP Client"</span>
              </div>
              &#125;;
            </div>
            <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-3">
              <span className="text-indigo-650 dark:text-indigo-400">function</span> <span className="text-indigo-700 dark:text-indigo-300">initScaling</span>() &#123;
              <div className="pl-4 text-slate-500">
                // Calibrating CDN performance...
                <br />
                // Enforcing security compliance headers...
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">return</span> <span className="text-emerald-600 dark:text-emerald-400">"Deployment Ready"</span>;
              </div>
              &#125;
            </div>
          </div>
          
          {/* Footer Bar */}
          <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border-t border-slate-200/50 dark:border-slate-800/50 px-4 py-3 flex justify-between items-center text-[10px] font-mono text-slate-500 select-none">
            <span>Status: Operational</span>
            <span className="text-emerald-600 dark:text-emerald-400">● Live Preview Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
