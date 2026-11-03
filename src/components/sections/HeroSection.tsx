import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Shield, Cpu, Layers } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { COMPANY_DATA } from '../../data/company';

export const HeroSection: React.FC = () => {
  const scrollToEcosystem = () => {
    const el = document.getElementById('tech-ecosystem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 overflow-hidden canvas-soft-lines">
      {/* Background radial ambient warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-brand-red-tint via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Category / Authority Pill */}
            <div className="inline-flex justify-center lg:justify-start">
              <div className="liquid-glass-chip px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-liquid-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-graphite uppercase">
                  JL CORP // ENTERPRISE ARCHITECTURE FLAGSHIP
                </span>
              </div>
            </div>

            {/* Headline: Beyond Digital. Beyond Ordinary. */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-graphite leading-[1.04]">
              Beyond Digital.{' '}
              <br className="hidden sm:inline" />
              <span className="text-gradient-pure-red">
                Beyond Ordinary.
              </span>
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-body-text font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Architecting bespoke software ecosystems, high-concurrency web platforms, and intelligent CRM pipelines with uncompromising engineering elegance.
            </p>

            {/* Luxury Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services-preview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-sm font-bold tracking-wide shadow-liquid-red hover:shadow-soft-glow transition-all duration-300 active:scale-[0.98]"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#tech-ecosystem"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl liquid-glass-chip hover:bg-white text-graphite text-sm font-semibold tracking-wide shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300"
              >
                <Layers className="w-4 h-4 text-brand-red" />
                <span>Interactive Ecosystem</span>
              </a>
            </div>

            {/* Fast Engineering Metrics Bar */}
            <div className="pt-8 border-t border-softgrey grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-graphite block">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-body-muted font-mono uppercase tracking-wider block mt-0.5">
                  Delivery Rigor
                </span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-graphite block">
                  6+
                </span>
                <span className="text-[11px] sm:text-xs text-body-muted font-mono uppercase tracking-wider block mt-0.5">
                  Core Disciplines
                </span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-brand-red block">
                  Zero
                </span>
                <span className="text-[11px] sm:text-xs text-body-muted font-mono uppercase tracking-wider block mt-0.5">
                  Technical Debt
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero 3D Centerpiece (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroCanvas />
          </div>

        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-10">
        <button
          onClick={scrollToEcosystem}
          className="group inline-flex flex-col items-center gap-2 text-xs font-mono text-body-muted hover:text-brand-red transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to technology ecosystem"
        >
          <span className="tracking-widest uppercase text-[10px] font-bold">Discover Ecosystem</span>
          <div className="w-5 h-8 rounded-full border border-graphite/20 group-hover:border-brand-red flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-brand-red animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
