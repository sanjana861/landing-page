import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/landingData';

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block">
          Expertise
        </span>
        <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          High-Impact Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-650 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Frameworks</span>
        </h2>
        <p className="text-slate-650 dark:text-slate-400 text-base leading-relaxed">
          Every technical choice we deploy is engineered to align with clear audience behavioral optimization benchmarks.
        </p>
      </div>

      {/* Grid of Services (3x2 Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv, idx) => (
          <div 
            key={idx} 
            className="bg-white dark:bg-slate-900/55 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-300 dark:hover:border-indigo-900/40 hover:shadow-lg dark:hover:shadow-glow/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Icon Container */}
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-455 w-fit mb-6 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white transition-colors duration-300">
                <srv.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{srv.title}</h3>
              <p className="text-slate-600 dark:text-slate-450 text-sm leading-relaxed mb-6">{srv.desc}</p>
            </div>
            <a 
              href="#contact" 
              className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-755 dark:hover:text-indigo-300 inline-flex items-center gap-1.5 group/link"
            >
              Learn metrics 
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
