import React from 'react';
import { STEPS } from '../data/landingData';

export default function Process() {
  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block">
          Workflow
        </span>
        <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-heading">
          Strategic Implementation Steps
        </h2>
        <p className="text-slate-650 dark:text-slate-400 text-base leading-relaxed">
          How we safely move your project concept from technical design blueprints to live production assets.
        </p>
      </div>

      {/* Steps List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[1px] bg-slate-200 dark:bg-slate-800 z-0"></div>

        {STEPS.map((step, idx) => (
          <div key={idx} className="relative z-10 space-y-4 group">
            {/* Step Number Circle */}
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center text-2xl font-black text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-650 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white transition-all duration-300 group-hover:scale-105 select-none">
              {step.step}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white pt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              {step.title}
            </h3>
            
            <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
