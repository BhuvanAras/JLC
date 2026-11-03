import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { LiquidCard } from '../common/LiquidCard';
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
    <section id="services-preview" className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeText="04 // CAPABILITIES"
            title="Six Core Disciplines"
            titleHighlight="Engineered to Outperform."
            description="Explore our specialized software engineering practices, purpose-built to accelerate your digital infrastructure with zero architectural compromises."
          />

          <Link
            to="/services"
            className="self-start md:self-end shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold uppercase tracking-wider text-graphite hover:text-brand-red shadow-liquid-sm hover:shadow-liquid-md transition-all"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Interactive Liquid Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            const primaryMetric = service.metrics[0];

            return (
              <LiquidCard
                key={service.id}
                className="p-8 sm:p-9 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 group-hover:bg-brand-red group-hover:border-brand-red flex items-center justify-center text-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-xs text-body-muted font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-graphite group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-body-text leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-black/[0.03] text-graphite border border-softgrey"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-mono bg-black/[0.03] text-body-muted border border-softgrey">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer: Metric & Link */}
                <div className="mt-8 pt-5 border-t border-softgrey flex items-center justify-between">
                  {primaryMetric && (
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-mono text-body-muted tracking-wider">
                        {primaryMetric.label}
                      </span>
                      <span className="font-display text-sm font-bold text-brand-red">
                        {primaryMetric.value}
                      </span>
                    </div>
                  )}

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-200"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </LiquidCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
