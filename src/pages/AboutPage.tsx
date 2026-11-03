import React from 'react';
import { Shield, Target, Compass, Award, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { COMPANY_DATA } from '../data/company';
import { PROCESS_DATA } from '../data/process';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-ivory">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeader
          badgeText="ABOUT JL CORP"
          title="Architecting Future-Proof Systems for"
          titleHighlight="Global Enterprises."
          description="Headquartered in Bengaluru, JL Corp is a specialized digital engineering firm delivering custom web applications, mobile ecosystems, enterprise CRM, and strategic IT advisory."
        />
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-liquid-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-6 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-graphite mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-body-text leading-relaxed">
              {COMPANY_DATA.vision}
            </p>
          </div>

          <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-liquid-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-6 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-graphite mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-body-text leading-relaxed">
              {COMPANY_DATA.mission}
            </p>
          </div>
        </div>
      </div>

      {/* Verified Process Lifecycle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeader
          badgeText="METHODOLOGY"
          title="The Standard 5-Stage"
          titleHighlight="Lifecycle."
          description="How we maintain zero technical debt and 100% on-time milestone delivery."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_DATA.map((p) => (
            <div key={p.step} className="liquid-glass-chip p-6 rounded-2xl border border-softgrey shadow-sm">
              <span className="font-mono text-xs font-bold text-brand-red">{p.step}</span>
              <h4 className="font-display text-base font-bold text-graphite mt-2 mb-2">{p.title}</h4>
              <p className="text-xs text-body-text leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Physical Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-graphite text-ivory border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-red-light uppercase tracking-wider font-bold">Physical Headquarters</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Bengaluru, Karnataka, India
              </h3>
              <p className="text-sm text-white/70">
                {COMPANY_DATA.contact.address}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/60 pt-2">
                <span>Phone: {COMPANY_DATA.contact.displayPhone}</span>
                <span>•</span>
                <span>Email: {COMPANY_DATA.contact.email}</span>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-sm shadow-liquid-red transition-all"
            >
              <span>Contact Engineering HQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
