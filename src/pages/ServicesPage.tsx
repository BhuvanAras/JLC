import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { SERVICES_DATA } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
  Users,
  Compass
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-ivory">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeader
          badgeText="SERVICES DIRECTORY"
          title="Enterprise Engineering Practices"
          titleHighlight="Designed for Scale."
          description="We deliver full-lifecycle engineering across six specialized practices. Each service operates with dedicated domain expertise, production-grade security, and transparent milestones."
        />
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_DATA.map((service, index) => {
          const Icon = iconMap[service.iconName] || Globe;

          return (
            <div
              key={service.id}
              className="liquid-glass-card p-8 sm:p-12 rounded-3xl border border-white/90 shadow-liquid-sm hover:border-brand-red/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-body-muted">0{index + 1} // PRACTICE</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-graphite">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-body-text leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-body-text">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold uppercase tracking-wider shadow-liquid-red transition-all"
                    >
                      <span>View Service Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold text-graphite hover:text-brand-red border border-softgrey transition-all"
                    >
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>

                {/* Right: Deliverables & Tech Specs (5 Cols) */}
                <div className="lg:col-span-5 bg-white/70 p-7 sm:p-8 rounded-2xl border border-softgrey space-y-6">
                  <div>
                    <h5 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider mb-3">
                      Core Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-black/[0.03] text-graphite border border-softgrey">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-softgrey">
                    <h5 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider mb-3">
                      Performance Metrics
                    </h5>
                    <div className="grid grid-cols-3 gap-3">
                      {service.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-xl bg-ivory border border-softgrey text-center">
                          <span className="text-[10px] font-mono text-body-muted block">{m.label}</span>
                          <span className="font-display text-base font-bold text-brand-red block mt-1">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
