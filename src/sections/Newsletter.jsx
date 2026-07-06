import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.trim()) return;

    setStatus('loading');
    
    // Simulate network delay for premium visual feedback
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setMessage('Thank you for subscribing! Welcome to Vertex briefs.');
    }, 1200);
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl dark:shadow-glow/5 border border-slate-800">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 px-8 py-12 md:p-16 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            System Performance Briefs
          </h2>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Get zero-fluff engineering optimization workflows, technical case studies, and modern frontend tutorials sent straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="w-full max-w-md pt-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-slate-800/80 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 flex-1 placeholder:text-slate-500"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-indigo-600/10"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-3 bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 rounded-xl text-xs flex items-center gap-2 animate-fadeIn justify-center">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-3 bg-rose-950/40 border border-rose-900/50 text-rose-400 rounded-xl text-xs flex items-center gap-2 animate-fadeIn justify-center">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{message}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
