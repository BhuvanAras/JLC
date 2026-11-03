import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Globe, Layers, Smartphone, TrendingUp, Users, Compass, ArrowLeft, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
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

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.iconName] || Globe;

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono text-light-muted hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono text-brand-red-light uppercase">
              <Icon className="w-3.5 h-3.5" />
              <span>JL CORP CORE PRACTICE // {service.title.toUpperCase()}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-light-primary tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-light-muted leading-relaxed font-sans max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button to="/contact" variant="glow" size="lg">
                Initiate Project Consultation
              </Button>
              <Button to="/work" variant="outline" size="lg">
                View Related Architectures
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-8 bg-dark-surface1 border-brand-red/30">
              <h4 className="font-mono text-xs font-bold text-light-dim uppercase tracking-wider mb-4">
                Service Performance Targets
              </h4>
              <div className="space-y-4">
                {service.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-dark-surface2 border border-dark-border flex items-center justify-between">
                    <span className="text-xs text-light-muted">{m.label}</span>
                    <span className="font-display text-base font-bold text-brand-red-light">{m.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Capabilities Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 sm:p-10 bg-dark-surface1 border-dark-border">
            <h3 className="font-display text-xl font-bold text-light-primary mb-6 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
              <span>Architectural Features</span>
            </h3>
            <ul className="space-y-3.5">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-light-secondary leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 sm:p-10 bg-dark-surface1 border-dark-border">
            <h3 className="font-display text-xl font-bold text-light-primary mb-6 flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-brand-red" />
              <span>Deliverables & Code Handover</span>
            </h3>
            <ul className="space-y-3.5">
              {service.deliverables.map((del) => (
                <li key={del} className="flex items-start gap-3 text-sm text-light-secondary leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="p-8 sm:p-12 bg-dark-surface2 border-dark-border mb-16">
          <h3 className="font-display text-xl font-bold text-light-primary mb-4">
            Specialized Tooling & Technologies
          </h3>
          <p className="text-sm text-light-muted mb-6 max-w-2xl">
            We employ modern, audited enterprise technologies ensuring your system is resilient, secure, and easily maintained.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-dark-surface1 border border-dark-border text-light-primary hover:border-brand-red/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center p-12 rounded-3xl bg-dark-surface1 border border-brand-red/40">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-light-primary mb-3">
            Ready to Engineer {service.title}?
          </h2>
          <p className="text-sm text-light-muted max-w-md mx-auto mb-6">
            Speak directly with our senior software architects in Bengaluru.
          </p>
          <Button to="/contact" variant="glow" size="lg">
            Schedule Technical Consultation
          </Button>
        </div>

      </div>
    </div>
  );
};

