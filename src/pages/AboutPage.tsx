import React, { useState } from 'react';
import { Shield, Target, Compass, Award, MapPin, CheckCircle2, ArrowUpRight, Sparkles, Terminal, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { LiquidCard } from '../components/common/LiquidCard';
import { LiquidStatPill } from '../components/common/LiquidStatPill';
import { COMPANY_DATA } from '../data/company';
import { PROCESS_DATA } from '../data/process';

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  return (
    <div className="pt-32 pb-24 bg-ivory overflow-hidden relative canvas-soft-lines">
      {/* Liquid Red Ambient Floating Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 -right-32 w-[420px] h-[420px] bg-brand-red/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <SectionHeader
          badgeText="ABOUT JL CORP // CORPORATE PROFILE"
          title="Architecting Future-Proof Systems for"
          titleHighlight="Ambitious Enterprises."
          description="Headquartered in Bengaluru, JL Corp is an elite software engineering firm delivering custom web applications, mobile ecosystems, enterprise CRM, and strategic IT advisory with mathematical rigor."
        />

        {/* Floating Liquid Stat Capsules */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <LiquidStatPill value="100%" label="Delivery" subtext="Verified SLA commitment" />
          <LiquidStatPill value="6+" label="Practices" subtext="Full-spectrum engineering" />
          <LiquidStatPill value="Zero" label="Tech Debt" subtext="Strict clean-code standards" />
          <LiquidStatPill value="BLR" label="Bengaluru" subtext="Karnataka, 560079 HQ" />
        </div>
      </div>

      {/* Interactive Liquid Glass Philosophy Console */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="liquid-glass-card p-8 sm:p-12 rounded-3xl border border-white/95 shadow-liquid-md">
          {/* Console Tab Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-softgrey">
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'vision'
                  ? 'bg-brand-red text-white shadow-liquid-red'
                  : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
              }`}
            >
              Corporate Vision
            </button>

            <button
              onClick={() => setActiveTab('mission')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'mission'
                  ? 'bg-brand-red text-white shadow-liquid-red'
                  : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
              }`}
            >
              Strategic Mission
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'values'
                  ? 'bg-brand-red text-white shadow-liquid-red'
                  : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white'
              }`}
            >
              Engineering Values
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {activeTab === 'vision' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-graphite">
                    To Be the Standard for Dependable Software Engineering
                  </h3>
                  <p className="text-base text-body-text leading-relaxed">
                    {COMPANY_DATA.vision}
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-graphite">
                    Relentless Technical Execution and Uncompromising Speed
                  </h3>
                  <p className="text-base text-body-text leading-relaxed">
                    {COMPANY_DATA.mission}
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-graphite">
                    Four Non-Negotiable Engineering Pillars
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white border border-softgrey text-xs text-body-text">
                      <strong className="text-graphite block mb-1">1. Strict Type Safety</strong>
                      No any types, no blind assumptions.
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-softgrey text-xs text-body-text">
                      <strong className="text-graphite block mb-1">2. Zero Fluff Architecture</strong>
                      Code written for speed and readability.
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-softgrey text-xs text-body-text">
                      <strong className="text-graphite block mb-1">3. Transparent Milestones</strong>
                      Real-time delivery progress.
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-softgrey text-xs text-body-text">
                      <strong className="text-graphite block mb-1">4. IP Confidentiality</strong>
                      100% intellectual property protection.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Telemetry Capsule */}
            <div className="lg:col-span-4 bg-white/80 p-6 rounded-2xl border border-softgrey shadow-sm">
              <span className="text-[10px] font-mono font-bold text-body-muted uppercase tracking-widest block mb-3">
                Headquarters Telemetry
              </span>
              <div className="space-y-3 text-xs font-mono text-body-text">
                <div className="flex justify-between border-b border-softgrey/60 pb-2">
                  <span className="text-body-muted">City / Region:</span>
                  <span className="font-bold text-graphite">Bengaluru, IN</span>
                </div>
                <div className="flex justify-between border-b border-softgrey/60 pb-2">
                  <span className="text-body-muted">Postal Code:</span>
                  <span className="font-bold text-graphite">560079</span>
                </div>
                <div className="flex justify-between border-b border-softgrey/60 pb-2">
                  <span className="text-body-muted">Direct Email:</span>
                  <span className="font-bold text-brand-red">lakshman@jlcorp.in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body-muted">Direct Line:</span>
                  <span className="font-bold text-graphite">+91 89709 79689</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified 5-Stage Engineering Lifecycle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <SectionHeader
          badgeText="DELIVERY ARCHITECTURE"
          title="The Standard 5-Stage"
          titleHighlight="Lifecycle."
          description="How we maintain zero technical debt and 100% on-time milestone delivery from business strategy to cloud cutover."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_DATA.map((p) => (
            <LiquidCard key={p.step} className="p-6">
              <span className="font-mono text-xs font-bold text-brand-red px-2 py-0.5 rounded bg-brand-red/10 inline-block">
                {p.step}
              </span>
              <h4 className="font-display text-base font-bold text-graphite mt-3 mb-2">{p.title}</h4>
              <p className="text-xs text-body-text leading-relaxed">{p.description}</p>
            </LiquidCard>
          ))}
        </div>
      </div>

      {/* Physical Coordinates Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
