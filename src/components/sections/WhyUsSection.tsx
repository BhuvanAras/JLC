import React from 'react';
import { ShieldCheck, CheckCircle2, Cpu, Zap } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { DIFFERENTIATORS_DATA } from '../../data/differentiators';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap
};

export const WhyUsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badgeText="04 // THE JL CORP ADVANTAGE"
          title="Why Forward-Thinking Enterprises"
          titleHighlight="Choose JL Corp."
          description="In an era of disposable digital agency work, we deliver engineered durability, operational transparency, and unmatched execution speed."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DIFFERENTIATORS_DATA.map((diff) => {
            const Icon = iconMap[diff.icon] || ShieldCheck;

            return (
              <Card
                key={diff.number}
                className="p-8 flex flex-col justify-between group hover:border-brand-red/50 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-black text-brand-red">
                      {diff.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-dark-surface2 border border-dark-border group-hover:border-brand-red/40 group-hover:bg-brand-red/10 flex items-center justify-center text-light-secondary group-hover:text-brand-red transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-light-primary group-hover:text-white transition-colors">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-light-muted leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="mt-8 pt-4 border-t border-dark-border flex items-center justify-between text-[11px] font-mono text-light-dim">
                  <span>Standard Standard</span>
                  <span className="text-brand-red-light font-bold">100% Adherence</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

