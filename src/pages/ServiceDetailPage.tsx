import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowLeft, CheckCircle2, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { ArchitectureDiagram } from '../components/common/ArchitectureDiagram';
import { SERVICES_DATA } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Smartphone,
  TrendingUp,
  Users,
  Compass
};

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Globe;

  return (
    <div className="pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-body-muted hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs font-mono font-bold text-brand-red uppercase">
              <Icon className="w-3.5 h-3.5" />
              <span>JL CORP CORE PRACTICE // {service.title.toUpperCase()}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-graphite tracking-tight leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-body-text leading-relaxed font-sans max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold uppercase tracking-wider shadow-liquid-red transition-all"
              >
                <span>Initiate Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold text-graphite border border-softgrey transition-all"
              >
                <span>View Related Systems</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="liquid-glass-card p-8 rounded-3xl border border-white/90 shadow-liquid-sm">
              <h4 className="font-mono text-xs font-bold text-body-muted uppercase tracking-wider mb-4">
                Service Performance Targets
              </h4>
              <div className="space-y-4">
                {service.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-2xl bg-white border border-softgrey flex items-center justify-between">
                    <span className="text-xs text-body-muted">{m.label}</span>
                    <span className="font-display text-lg font-bold text-brand-red">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Architecture System Diagram */}
        <ArchitectureDiagram serviceTitle={service.title} />

        {/* Capabilities Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-liquid-sm">
            <h3 className="font-display text-xl font-bold text-graphite mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-red" />
              <span>Architectural Features</span>
            </h3>
            <ul className="space-y-4">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-body-text leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-liquid-sm">
            <h3 className="font-display text-xl font-bold text-graphite mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-brand-red" />
              <span>Deliverables & Code Handover</span>
            </h3>
            <ul className="space-y-4">
              {service.deliverables.map((del) => (
                <li key={del} className="flex items-start gap-3 text-sm text-body-text leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="liquid-glass-card p-8 sm:p-12 rounded-3xl border border-white/90 shadow-liquid-sm mb-16">
          <h3 className="font-display text-xl font-bold text-graphite mb-3">
            Specialized Tooling & Technologies
          </h3>
          <p className="text-sm text-body-text mb-6 max-w-2xl">
            We employ modern, audited enterprise technologies ensuring your system is resilient, secure, and easily maintained.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white border border-softgrey text-graphite hover:border-brand-red/40 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 sm:p-16 rounded-3xl bg-graphite text-white border border-white/10 shadow-2xl">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold mb-3">
            Ready to Engineer {service.title}?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto mb-8">
            Speak directly with our senior software architects in Bengaluru.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold uppercase tracking-wider shadow-liquid-red transition-all"
          >
            <span>Schedule Technical Review</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
