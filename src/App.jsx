import React, { useState, useEffect } from 'react';

// Reusable Components
import ScrollToTop from './components/ScrollToTop';

// Landing Page Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Features from './sections/Features';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import Statistics from './sections/Statistics';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

// Static Data imports
import { CLIENTS } from './data/landingData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Spy for Navbar highlight
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'services', 'features', 'why-us', 'process', 'portfolio', 'pricing', 'faq', 'contact'];
      const scrollPos = window.scrollY + 160; // Offset for spy sensitivity

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, no need to track it further
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px' // Reveal shortly before crossing boundary
    });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => revealObserver.observe(el));

    return () => {
      hiddenElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-indigo-650 selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trusted By Clients Strip */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-850/60 py-12 relative z-25">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
            Trusted by Forward-Thinking Global Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 dark:opacity-40 hover:opacity-80 dark:hover:opacity-70 transition-opacity duration-300 select-none">
            {CLIENTS.map((client) => (
              <span key={client} className="text-lg md:text-xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Main Page Body (Revealed on Scroll) */}
      <main className="relative">
        <div className="reveal-on-scroll">
          <About />
        </div>

        <div className="reveal-on-scroll">
          <Services />
        </div>

        <div className="reveal-on-scroll">
          <Features />
        </div>

        <div className="reveal-on-scroll">
          <WhyChooseUs />
        </div>

        <div className="reveal-on-scroll">
          <Process />
        </div>

        <Statistics />

        <div className="reveal-on-scroll">
          <Portfolio />
        </div>

        <div className="reveal-on-scroll">
          <Testimonials />
        </div>

        <div className="reveal-on-scroll">
          <Pricing />
        </div>

        <div className="reveal-on-scroll">
          <FAQ />
        </div>

        <div className="reveal-on-scroll">
          <Contact />
        </div>

        <div className="reveal-on-scroll">
          <Newsletter />
        </div>
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Scroll to Top Action Button */}
      <ScrollToTop />

    </div>
  );
}