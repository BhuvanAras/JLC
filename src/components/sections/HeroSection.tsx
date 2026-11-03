import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, Shield, Cpu } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { HeroCanvas } from '../3d/HeroCanvas';
import { COMPANY_DATA } from '../../data/company';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('company-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden tech-grid">
      {/* Dynamic atmospheric radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-radial-red pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Category / Authority Badge */}
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="glow" pulse={true} className="text-[11px] sm:text-xs">
                <span>JL CORP // NEXT-GEN SOFTWARE ARCHITECTURE</span>
              </Badge>
            </div>

            {/* Headline: Engineering Tomorrow. Today. */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-primary leading-[1.08]">
              Engineering <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-light to-white">
                Tomorrow.
              </span>{' '}
              Today.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-xl text-light-muted font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {COMPANY_DATA.heroSubtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                to="/services"
                variant="glow"
                size="lg"
                showArrow={true}
                className="w-full sm:w-auto font-bold tracking-wide shadow-red-md"
              >
                Explore Services
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Schedule Technical Review
              </Button>
            </div>

            {/* Fast Engineering Metrics Bar */}
            <div className="pt-6 border-t border-dark-border grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="font-display text-xl sm:text-2xl font-extrabold text-light-primary block">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-light-muted font-mono uppercase tracking-wider block mt-0.5">
                  Delivery Rigor
                </span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-extrabold text-light-primary block">
                  6+
                </span>
                <span className="text-[11px] sm:text-xs text-light-muted font-mono uppercase tracking-wider block mt-0.5">
                  Core Practices
                </span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl font-extrabold text-brand-red-light block">
                  Zero
                </span>
                <span className="text-[11px] sm:text-xs text-light-muted font-mono uppercase tracking-wider block mt-0.5">
                  Tech Debt Focus
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero 3D Abstract Sculpture (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroCanvas />
          </div>

        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-8">
        <button
          onClick={scrollToNext}
          className="group inline-flex flex-col items-center gap-2 text-xs font-mono text-light-dim hover:text-brand-red transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to introduction"
        >
          <span className="tracking-widest uppercase text-[10px]">Explore Ecosystem</span>
          <div className="w-5 h-8 rounded-full border border-dark-border group-hover:border-brand-red/60 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-brand-red animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

