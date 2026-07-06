import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/landingData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-850/50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block select-none">
            Common Questions
          </span>
          <h2 className="text-3.5xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-heading">
            Frequently Inquired Processes
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border border-slate-200/60 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 bg-slate-50/50 dark:bg-slate-900/10 shadow-sm"
              >
                {/* Accordion Trigger */}
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-start gap-4 p-6 text-left font-bold text-slate-850 dark:text-slate-100 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3.5 leading-snug">
                    <HelpCircle className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" /> 
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Accordion Content Grid Slide */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-900 border-t border-slate-100/65 dark:border-slate-850/50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
