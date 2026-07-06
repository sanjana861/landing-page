import React from 'react';
import { MessageSquare, ShieldCheck, Zap, Code } from 'lucide-react';

const VALUES = [
  {
    icon: MessageSquare,
    title: "Direct Collaboration",
    desc: "Talk directly to the software architects and design leads building your platform. No account managers, no game of telephone."
  },
  {
    icon: ShieldCheck,
    title: "100% Code Ownership",
    desc: "We hand over clean, portable code repositories. No vendor lock-in, no proprietary licensing, and complete structural freedom."
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "We engineer systems with speed as a core metric. Fast systems retain users, rank higher on search engines, and convert better."
  },
  {
    icon: Code,
    title: "Modern Engineering DNA",
    desc: "Every component is built using clean, modular React, atomic styles, semantic HTML, and rigorous testing architectures."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading and Story */}
        <div className="lg:col-span-5 space-y-6">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit block">
            Who We Are
          </span>
          <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            We are builders, designers, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-450 dark:to-violet-400">scaling partners</span>.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Vertex was founded by a collective of senior developers and product designers who grew tired of traditional agency bureaucracy. We believe in direct collaboration, high engineering standards, and radical transparency.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Whether we are building a fintech dashboard or migrating a legacy platform to modern React, we focus on delivering speed, security, and measurable business outcomes.
          </p>
          
          <div className="pt-4 flex items-center gap-6">
            <div className="border-r border-slate-200 dark:border-slate-800 pr-6">
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Deployments</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">IP Ownership</p>
            </div>
          </div>
        </div>

        {/* Right Column: Values Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map((val, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-900/40 hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 group"
            >
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-450 w-fit group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white transition-colors duration-300">
                <val.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{val.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
