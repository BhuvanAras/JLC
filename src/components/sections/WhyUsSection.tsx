import React from 'react';
import { ShieldCheck, CheckCircle2, Cpu, Zap } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { DIFFERENTIATORS_DATA } from '../../data/differentiators';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap
};

export const WhyUsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badgeText="06 // THE JL CORP ADVANTAGE"
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
              <div
                key={diff.number}
                className="liquid-glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-red/40 shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-black text-brand-red">
                      {diff.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-brand-red/10 border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center text-brand-red transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-graphite group-hover:text-brand-red transition-colors">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-body-text leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-8 pt-4 border-t border-softgrey flex items-center justify-between text-[11px] font-mono text-body-muted">
                  <span>Standard Standard</span>
                  <span className="text-brand-red font-bold">100% Adherence</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
