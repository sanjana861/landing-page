import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIdx((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1)),
      8000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-850/50 py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Quote Accent Background Decor */}
        <Quote className="w-24 h-24 absolute -top-8 -left-2 text-indigo-50/70 dark:text-slate-900/40 pointer-events-none select-none -z-0" />

        <div className="relative z-10 text-center space-y-8">
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-850/50 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit mx-auto block select-none">
            Validation
          </span>

          {/* Carousel slide container */}
          <div className="min-h-[220px] flex items-center justify-center">
            {TESTIMONIALS.map((test, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-500 ease-in-out space-y-6 ${
                  idx === activeIdx 
                    ? 'opacity-100 scale-100 block' 
                    : 'opacity-0 scale-95 hidden'
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xl md:text-2xl font-medium tracking-tight text-slate-850 dark:text-slate-200 italic leading-relaxed max-w-3xl mx-auto">
                  "{test.quote}"
                </p>

                {/* User Bio */}
                <div className="flex items-center justify-center gap-3.5 pt-4">
                  <img 
                    src={test.avatar} 
                    alt={test.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-indigo-950/70 shadow-sm"
                  />
                  <div className="text-left">
                    <p className="font-bold text-slate-900 dark:text-white text-base leading-tight">{test.author}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex justify-center items-center gap-8 pt-4 select-none">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-400 transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Slide bullet indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIdx 
                      ? 'w-6 bg-indigo-650 dark:bg-indigo-500' 
                      : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-850 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-400 transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
