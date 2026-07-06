import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Features', id: 'features' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Process', id: 'process' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 flex items-center gap-2 select-none">
          <Layers className="w-6 h-6" /> Vertex
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`text-sm font-medium transition-all duration-200 nav-link ${
                activeSection === item.id 
                  ? 'text-indigo-650 dark:text-indigo-400 nav-link-active font-semibold' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle />
            <a 
              href="#contact" 
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-750 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition duration-300 shadow-sm hover:scale-[1.02] cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile menu toggle & ThemeToggle */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-slate-700 dark:text-slate-350 p-1" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-850 px-6 py-6 flex flex-col gap-4 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition duration-200 shadow-sm"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
