import React from 'react';
import { STATS } from '../data/landingData';

export default function Statistics() {
  return (
    <section className="bg-slate-900 dark:bg-slate-950 text-white py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {STATS.map((stat, idx) => (
          <div key={idx} className="space-y-2 group">
            {/* Value */}
            <p className="text-4xl md:text-5xl font-black tracking-tight text-indigo-400 dark:text-indigo-300 group-hover:scale-105 transition-transform duration-300 select-none">
              {stat.value}
            </p>
            {/* Label */}
            <p className="text-xs md:text-sm text-slate-400 dark:text-slate-400 font-semibold uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
