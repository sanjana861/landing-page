import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledFromTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        setProgress((scrolledFromTop / docHeight) * 100);
      }
      
      if (scrolledFromTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circle calculations for 100px circumference (r=15.915)
  // Circumference = 2 * pi * r = 100
  const strokeDashoffset = 100 - progress;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-2.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Progress Circle Border */}
      <svg className="w-10 h-10 absolute rotate-[-90deg] pointer-events-none" viewBox="0 0 36 36">
        <path
          className="text-white/20"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-white"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="100, 100"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <ChevronUp className="w-5 h-5 z-10" />
    </button>
  );
}
