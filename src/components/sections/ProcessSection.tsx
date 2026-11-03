import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PROCESS_DATA } from '../../data/process';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="engineering-process" className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey overflow-hidden canvas-soft-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badgeText="07 // ENGINEERING LIFECYCLE"
          title="From Concept to High-Scale Deployment:"
          titleHighlight="Our 5-Stage Framework."
          description="Every software release at JL Corp progresses through a verified 5-stage lifecycle engineered to eliminate technical debt and ensure transparent milestones."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Desktop Step Selector Buttons */}
        <div className="hidden lg:grid grid-cols-5 gap-3.5 mb-10">
          {PROCESS_DATA.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-brand-red shadow-liquid-md'
                  : 'liquid-glass-chip border-softgrey hover:border-graphite/30 hover:bg-white/90 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-brand-red' : 'text-body-muted'}`}>
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono text-body-muted">
                  {stage.duration}
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-graphite truncate">
                {stage.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Spotlight (Desktop) */}
        <div className="hidden lg:block">
          <div className="liquid-glass-card p-10 rounded-3xl border border-white/90 shadow-liquid-lg">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs font-mono font-bold text-brand-red">
                  <span>STAGE {PROCESS_DATA[activeStep].step} // {PROCESS_DATA[activeStep].tagline.toUpperCase()}</span>
                </div>
                
                <h3 className="font-display text-3xl font-extrabold text-graphite">
                  {PROCESS_DATA[activeStep].title}
                </h3>

                <p className="text-base text-body-text leading-relaxed">
                  {PROCESS_DATA[activeStep].description}
                </p>
              </div>

              <div className="col-span-6 bg-white/70 p-7 rounded-2xl border border-softgrey">
                <h5 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider mb-4">
                  Core Stage Deliverables & Activities
                </h5>
                <ul className="space-y-3.5">
                  {PROCESS_DATA[activeStep].activities.map((act) => (
                    <li key={act} className="flex items-start gap-3 text-sm text-body-text">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Accordion / Stack View */}
        <div className="lg:hidden space-y-4">
          {PROCESS_DATA.map((stage, idx) => (
            <div
              key={stage.step}
              className={`p-6 rounded-2xl liquid-glass-card transition-all duration-300 ${
                activeStep === idx ? 'border-brand-red bg-white shadow-liquid-md' : 'border-softgrey'
              }`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-red/10 text-brand-red">
                    {stage.step}
                  </span>
                  <h4 className="font-display text-base font-bold text-graphite">
                    {stage.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-body-muted">
                  {stage.duration}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-body-text leading-relaxed">
                {stage.description}
              </p>

              {activeStep === idx && (
                <div className="mt-5 pt-4 border-t border-softgrey space-y-2">
                  {stage.activities.map((act) => (
                    <div key={act} className="flex items-start gap-2.5 text-xs text-body-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
