import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { SERVICES_DATA } from '../../data/services';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
  Users,
  Compass
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-preview" className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeText="02 // CAPABILITIES"
            title="Enterprise Software Capabilities"
            titleHighlight="Built to Outperform."
            description="Explore our six core engineering disciplines, purpose-built to accelerate your digital infrastructure with zero architectural compromises."
          />

          <Button
            to="/services"
            variant="outline"
            size="md"
            showArrow={true}
            className="self-start md:self-end shrink-0"
          >
            All Services
          </Button>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            const primaryMetric = service.metrics[0];

            return (
              <Card
                key={service.id}
                className="p-8 flex flex-col justify-between group hover:border-brand-red/50 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Icon + Number Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-dark-surface2 border border-dark-border group-hover:border-brand-red/40 group-hover:bg-brand-red/10 flex items-center justify-center text-brand-red transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs text-light-dim font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-light-primary group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-light-muted leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-surface2 text-light-secondary border border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-dark-surface2 text-light-dim border border-dark-border">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Metric & Route Link */}
                <div className="mt-8 pt-5 border-t border-dark-border/80 flex items-center justify-between">
                  {primaryMetric && (
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono text-light-dim tracking-wider">
                        {primaryMetric.label}
                      </span>
                      <span className="font-display text-sm font-bold text-brand-red-light">
                        {primaryMetric.value}
                      </span>
                    </div>
                  )}

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-light-secondary group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

