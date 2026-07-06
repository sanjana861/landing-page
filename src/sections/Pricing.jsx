import React from 'react';
import { CheckCircle } from 'lucide-react';
import { PRICING } from '../data/landingData';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
        <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block">
          Investment Plans
        </span>
        <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-heading">
          Predictable Flat-Rate Structures
        </h2>
        <p className="text-slate-650 dark:text-slate-400 text-base leading-relaxed">
          Transparent development retainers with clear milestones. No hidden licensing, no surprises.
        </p>
      </div>

      {/* Grid of Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING.map((plan) => (
          <div 
            key={plan.name} 
            className={`p-8 bg-white dark:bg-slate-900/50 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
              plan.popular 
                ? 'border-indigo-600 dark:border-indigo-500 shadow-md shadow-indigo-650/5 dark:shadow-glow/5 ring-1 ring-indigo-600 dark:ring-indigo-500 scale-102 z-10' 
                : 'border-slate-200/60 dark:border-slate-800/60'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 right-6 bg-indigo-600 dark:bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                Most Active
              </span>
            )}
            
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 select-none">
                <span className="text-4.5xl font-black text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                <span className="text-slate-500 dark:text-slate-450 text-sm font-medium">{plan.period}</span>
              </div>

              {/* Feature list */}
              <ul className="space-y-3.5 border-t border-slate-100 dark:border-slate-850 pt-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-slate-650 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" /> 
                    <span className="leading-normal">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <div className="pt-8 mt-auto">
              <a 
                href="#contact" 
                className={`w-full block text-center py-3.5 font-semibold rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  plan.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-sm' 
                    : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800'
                }`}
              >
                Select Tier Plan
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
