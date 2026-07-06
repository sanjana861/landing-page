import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/landingData';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Web App', 'UI/UX Design', 'Branding'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      
      {/* Header and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="space-y-4 max-w-xl">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit block">
            Case Work
          </span>
          <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-heading">
            Selected Product Deliveries
          </h2>
        </div>
        
        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2 text-xs font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div 
            key={proj.title} 
            className="group bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="h-56 overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
              <img 
                src={proj.img} 
                alt={proj.title} 
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold rounded-full text-slate-800 dark:text-slate-250 border border-slate-200/30 dark:border-slate-800/50">
                {proj.category}
              </div>
            </div>

            {/* Description Body */}
            <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-xl leading-snug">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {proj.desc}
                </p>
              </div>

              {/* Card Footer Interaction */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex justify-between items-center mt-auto">
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Performance-optimized
                </span>
                <div className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-indigo-650 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
