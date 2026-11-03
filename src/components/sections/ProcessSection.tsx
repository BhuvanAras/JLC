import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { PROCESS_DATA } from '../../data/process';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="engineering-process" className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border overflow-hidden tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badgeText="05 // ENGINEERING LIFECYCLE"
          title="From Concept to High-Scale Deployment:"
          titleHighlight="Our 5-Stage Framework."
          description="Every software release at JL Corp progresses through a verified 5-stage lifecycle engineered to eliminate technical debt and ensure transparent milestones."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Desktop Step Selector Buttons */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {PROCESS_DATA.map((stage, idx) => (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-dark-surface2 border-brand-red shadow-red-sm'
                  : 'bg-dark-surface1 border-dark-border hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-brand-red' : 'text-light-dim'}`}>
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono text-light-dim">
                  {stage.duration}
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-light-primary truncate">
                {stage.title}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Spotlight (Desktop) */}
        <div className="hidden lg:block">
          <Card className="p-10 bg-dark-surface1/90 border-brand-red/30 backdrop-blur-xl">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono text-brand-red-light">
                  <span>STAGE {PROCESS_DATA[activeStep].step} // {PROCESS_DATA[activeStep].tagline.toUpperCase()}</span>
                </div>
                
                <h3 className="font-display text-3xl font-extrabold text-light-primary">
                  {PROCESS_DATA[activeStep].title}
                </h3>

                <p className="text-base text-light-muted leading-relaxed">
                  {PROCESS_DATA[activeStep].description}
                </p>
              </div>

              <div className="col-span-6 bg-dark-base/80 p-6 rounded-2xl border border-dark-border">
                <h5 className="font-mono text-xs font-bold text-light-secondary uppercase tracking-wider mb-4">
                  Core Stage Deliverables & Activities
                </h5>
                <ul className="space-y-3">
                  {PROCESS_DATA[activeStep].activities.map((act) => (
                    <li key={act} className="flex items-start gap-3 text-sm text-light-muted">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile / Tablet Accordion / Stack View */}
        <div className="lg:hidden space-y-4">
          {PROCESS_DATA.map((stage, idx) => (
            <Card
              key={stage.step}
              className={`p-6 transition-all duration-300 ${
                activeStep === idx ? 'border-brand-red/50 bg-dark-surface2' : 'border-dark-border'
              }`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-red/20 text-brand-red">
                    {stage.step}
                  </span>
                  <h4 className="font-display text-base font-bold text-light-primary">
                    {stage.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-light-dim">
                  {stage.duration}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-light-muted leading-relaxed">
                {stage.description}
              </p>

              {activeStep === idx && (
                <div className="mt-5 pt-4 border-t border-dark-border space-y-2">
                  {stage.activities.map((act) => (
                    <div key={act} className="flex items-start gap-2.5 text-xs text-light-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

