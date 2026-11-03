import React from 'react';
import { Shield, Zap, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { COMPANY_DATA } from '../../data/company';

export const IntroSection: React.FC = () => {
  return (
    <section id="company-intro" className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Split: Thesis & Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badgeText="01 // ARCHITECTURAL THESIS"
              title="We Engineer Resilient Digital Assets,"
              titleHighlight="Not Just Lines of Code."
              description="At JL Corp, we reject disposable software patterns. Whether architecting an enterprise cloud platform, a real-time CRM workflow engine, or a multi-platform mobile application, our systems are built from first principles for durability, high concurrency, and measurable enterprise value."
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-dark-surface2 border border-dark-border flex items-center justify-center shrink-0 mt-1 text-brand-red">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-light-primary">
                    Zero-Compromise Security & Performance
                  </h4>
                  <p className="text-xs sm:text-sm text-light-muted mt-1 leading-relaxed">
                    Every deployment adheres to rigorous OWASP standards, automated integration tests, and audited Core Web Vitals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-dark-surface2 border border-dark-border flex items-center justify-center shrink-0 mt-1 text-brand-red">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-light-primary">
                    Transparent 5-Stage Engineering Lifecycle
                  </h4>
                  <p className="text-xs sm:text-sm text-light-muted mt-1 leading-relaxed">
                    Strategy ➔ Architecture ➔ Design ➔ Development ➔ Delivery. Every milestone has strict validation criteria.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button to="/about" variant="secondary" size="md" showArrow={true}>
                Read Our Story & Methodology
              </Button>
            </div>
          </div>

          {/* Right Split: High-Tech Telemetry Visual (6 cols) */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 bg-dark-surface1/90 backdrop-blur-xl border-dark-border">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-xs font-mono text-light-muted ml-2">jl-corp-core // runtime-status</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-[10px] font-mono text-brand-red-light uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Live System
                </span>
              </div>

              {/* Code / Telemetry Log View */}
              <div className="mt-6 space-y-4 font-mono text-xs text-light-secondary">
                <div className="p-3.5 rounded-lg bg-dark-base border border-dark-border">
                  <span className="text-brand-red font-bold">$ jl-corp --inspect architecture</span>
                  <p className="text-light-muted mt-1.5">
                    → Verified Framework: React + Vite + TypeScript<br />
                    → 3D Engine: Three.js / React Three Fiber<br />
                    → Latency Tolerance: &lt; 50ms distributed<br />
                    → cPanel Static Compatibility: 100% SPA Safe
                  </p>
                </div>

                {/* Metric Indicators */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-dark-surface2 border border-dark-border">
                    <span className="text-[11px] text-light-dim uppercase tracking-wider block">Headquarters</span>
                    <span className="font-display text-sm font-bold text-light-primary block mt-1">Bengaluru, IN</span>
                    <span className="text-[10px] text-brand-red block mt-0.5">560079 Karnataka</span>
                  </div>

                  <div className="p-4 rounded-xl bg-dark-surface2 border border-dark-border">
                    <span className="text-[11px] text-light-dim uppercase tracking-wider block">Delivery Reliability</span>
                    <span className="font-display text-sm font-bold text-light-primary block mt-1">100% Commitment</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">SLA Guaranteed</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-light-dim border-t border-dark-border">
                  <span>Direct Communication: lakshman@jlcorp.in</span>
                  <span className="text-brand-red-light font-mono">+91 8970979689</span>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

