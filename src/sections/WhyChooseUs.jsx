import React from 'react';
import { Shield, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      desc: "Built using modern security standards that keep your database and forms safe and compliant."
    },
    {
      icon: Zap,
      title: "Blazing Fast Execution",
      desc: "Optimized infrastructure architectures offering sub-second page loads to minimize bounce rates."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-850/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left column: Text */}
        <div className="space-y-6">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit block">
            The Standard
          </span>
          <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-heading">
            Engineered around modern performance barriers
          </h2>
          <p className="text-slate-650 dark:text-slate-400 text-base leading-relaxed">
            We look beyond baseline design templates. Our structures are strategically calibrated for enterprise security, accessibility guidelines, and fast operational load targets.
          </p>
          
          <div className="space-y-6 pt-4">
            {points.map((pt, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-450 shrink-0">
                  <pt.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{pt.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1: 3x Velocity */}
          <div className="p-8 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl flex flex-col justify-center space-y-2 lg:mt-8">
            <span className="text-4xl md:text-5xl font-extrabold text-indigo-650 dark:text-indigo-400">3x</span>
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Conversion Velocity</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Average speed acceleration measured across recent platform migrations.</p>
          </div>

          {/* Card 2: 100% Ownership */}
          <div className="p-8 bg-slate-900 dark:bg-slate-900 text-white dark:text-slate-100 border border-slate-850 dark:border-indigo-950/40 rounded-3xl flex flex-col justify-center space-y-2">
            <span className="text-4xl md:text-5xl font-extrabold text-indigo-400 dark:text-indigo-400">100%</span>
            <h4 className="text-base font-bold text-slate-200">Ownership Retained</h4>
            <p className="text-xs text-slate-450 leading-relaxed">Zero vendor lock-in. Clean, portable codebases ready for internal handoff.</p>
          </div>

          {/* Card 3: Full Width - Clean Architecture */}
          <div className="p-8 bg-indigo-650 dark:bg-indigo-900/60 text-white rounded-3xl flex flex-col justify-center space-y-2 sm:col-span-2 shadow-md shadow-indigo-600/10 dark:shadow-none">
            <h4 className="text-xl font-bold">Clean Software Architecture</h4>
            <p className="text-sm text-indigo-150 leading-relaxed">
              Every workflow is engineered to be fully modular, transparent, and highly scalable. We document our endpoints and layouts so your developers can inherit the product seamlessly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
