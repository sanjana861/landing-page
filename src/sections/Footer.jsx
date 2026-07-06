import React from 'react';
import { Layers, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/60">
        
        {/* Branding Column */}
        <div className="md:col-span-5 space-y-4">
          <a href="#hero" className="text-xl font-bold tracking-tight text-indigo-400 flex items-center gap-2 select-none">
            <Layers className="w-6 h-6" /> Vertex
          </a>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Engineering performance-focused digital foundations. Clean execution. Verifiable business metrics tracking.
          </p>
        </div>

        {/* Links Matrix Column */}
        <div className="md:col-span-7 flex flex-col sm:flex-row justify-between gap-8 sm:pl-12">
          
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Navigation Matrix</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Story</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services Framework</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Active Case Work</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Investment Matrix</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Technical Assets</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Architectural Specs</a></li>
              <li><a href="#process" className="hover:text-indigo-400 transition-colors">Working Workflow</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ Matrix</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Terms & Compliance</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">SLA Provisioning</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Social and Copyright Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Vertex Systems Inc. All architecture ownership provisions valid.</p>
        
        {/* Social icons */}
        <div className="flex gap-4 select-none">
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-slate-800/60 hover:bg-indigo-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Vertex Twitter Account"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-slate-800/60 hover:bg-indigo-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Vertex GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-slate-800/60 hover:bg-indigo-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Vertex LinkedIn Page"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
