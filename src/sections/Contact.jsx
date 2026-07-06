import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import LeafletMap from '../components/LeafletMap';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$5k - $15k',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState('');

  // Client validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!form.message.trim()) errs.message = 'Project brief cannot be empty';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    // Simulate network delay for premium user experience
    setTimeout(() => {
      setStatus('success');
      setStatusMsg('Your inquiry has been logged successfully. An engineer will follow up within 24 hours.');
      setForm({
        name: '',
        email: '',
        projectType: 'Web Development',
        budget: '$5k - $15k',
        message: ''
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start scroll-mt-20">
      
      {/* Left Column: Contact details & Interactive Map */}
      <div className="lg:col-span-5 space-y-6">
        <span className="px-3 py-1 bg-indigo-50 border border-indigo-200/50 dark:bg-indigo-950/30 dark:border-indigo-900/40 rounded-full text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider w-fit block select-none">
          Connection
        </span>
        <h2 className="text-3.5xl md:text-4.5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] font-heading">
          Initiate your platform scaling cycle
        </h2>
        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
          Fill out the tracking specifications layout. An architecture engineer will follow up within one business cycle.
        </p>
        
        {/* Simple details */}
        <div className="space-y-4 pt-4">
          <div className="flex gap-3.5 items-center text-slate-650 dark:text-slate-450 text-sm">
            <Mail className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400 shrink-0" /> 
            <a href="mailto:info@vertexagency.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">info@vertexagency.com</a>
          </div>
          <div className="flex gap-3.5 items-center text-slate-655 dark:text-slate-450 text-sm">
            <Phone className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400 shrink-0" /> 
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex gap-3.5 items-center text-slate-655 dark:text-slate-455 text-sm">
            <MapPin className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400 shrink-0" /> 
            <span>500 Innovation Way, Suite 100, San Francisco</span>
          </div>
        </div>

        {/* Dynamic Leaflet Map */}
        <div className="w-full h-56 pt-2">
          <LeafletMap />
        </div>
      </div>

      {/* Right Column: Inquiry Form Card */}
      <div className="lg:col-span-7 bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm shadow-slate-100 dark:shadow-none">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400 mb-2 select-none">Full Name</label>
              <input 
                type="text" 
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 border rounded-xl text-sm bg-slate-50/50 dark:bg-slate-950/40 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition ${
                  errors.name ? 'border-rose-450 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-600 dark:focus:border-indigo-500'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400 mb-2 select-none">Email Address</label>
              <input 
                type="email" 
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 border rounded-xl text-sm bg-slate-50/50 dark:bg-slate-950/40 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition ${
                  errors.email ? 'border-rose-455 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-600 dark:focus:border-indigo-500'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Project Type and Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400 mb-2 select-none">Project Type</label>
              <select 
                value={form.projectType}
                onChange={e => setForm({...form, projectType: e.target.value})}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm bg-slate-50/50 dark:bg-slate-950/40 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition text-slate-700 dark:text-slate-300"
              >
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Branding">Branding</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400 mb-2 select-none">Budget Range</label>
              <select 
                value={form.budget}
                onChange={e => setForm({...form, budget: e.target.value})}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-sm bg-slate-50/50 dark:bg-slate-950/40 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition text-slate-700 dark:text-slate-300"
              >
                <option value="<$5k">&lt; $5k</option>
                <option value="$5k - $15k">$5k - $15k</option>
                <option value="$15k - $30k">$15k - $30k</option>
                <option value="$30k+">$30k+</option>
              </select>
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-455 dark:text-slate-400 mb-2 select-none">Project Brief</label>
            <textarea 
              rows="4"
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              disabled={status === 'loading'}
              className={`w-full px-4 py-3 border rounded-xl text-sm bg-slate-50/50 dark:bg-slate-950/40 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 transition ${
                errors.message ? 'border-rose-455 dark:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-600 dark:focus:border-indigo-500'
              }`}
              placeholder="Tell us about the scope, timeline, and primary objectives..."
            />
            {errors.message && <p className="text-rose-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl text-sm shadow-md shadow-indigo-600/10 dark:shadow-none transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Submit Inbound Strategy Form'
            )}
          </button>

          {/* Alert Success / Error */}
          {status === 'success' && (
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-250 dark:border-emerald-900/50 rounded-xl text-emerald-800 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-250 dark:border-rose-900/50 rounded-xl text-rose-800 dark:text-rose-400 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

        </form>
      </div>

    </section>
  );
}
