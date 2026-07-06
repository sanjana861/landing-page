import React from 'react';
import { FEATURES } from '../data/landingData';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-100/50 dark:bg-slate-900/10 border-y border-slate-200/50 dark:border-slate-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block">
            Core Specifications
          </span>
          <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-450 dark:to-violet-400">Enterprise Metrics</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            We don't build standard marketing templates. Our products are engineered with robust security, search-index indexing, and speed optimized architectures.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-glow/5 hover:border-indigo-300 dark:hover:border-indigo-900/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-450 w-fit">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>Production Standard Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
