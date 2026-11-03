import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
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
    <div className="pt-28 pb-24">
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
            <Card
              key={service.id}
              className="p-8 sm:p-12 bg-dark-surface1 border-dark-border hover:border-brand-red/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left (7 Cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-light-dim">0{index + 1} // PRACTICE</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-light-primary">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-light-muted leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-light-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button
                      to={`/services/${service.slug}`}
                      variant="primary"
                      size="md"
                      showArrow={true}
                    >
                      View Service Architecture
                    </Button>
                    <Button
                      to="/contact"
                      variant="outline"
                      size="md"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>

                {/* Right: Deliverables & Tech Specs (5 Cols) */}
                <div className="lg:col-span-5 bg-dark-base/80 p-6 sm:p-8 rounded-2xl border border-dark-border space-y-6">
                  <div>
                    <h5 className="font-mono text-xs font-bold text-light-secondary uppercase tracking-wider mb-3">
                      Core Technology Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-surface2 text-light-primary border border-dark-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dark-border">
                    <h5 className="font-mono text-xs font-bold text-light-secondary uppercase tracking-wider mb-3">
                      Performance Metrics
                    </h5>
                    <div className="grid grid-cols-3 gap-3">
                      {service.metrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-lg bg-dark-surface2 border border-dark-border text-center">
                          <span className="text-[10px] font-mono text-light-dim block">{m.label}</span>
                          <span className="font-display text-sm font-bold text-brand-red-light block mt-1">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

