import React from 'react';
import { Shield, Zap, Terminal, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_DATA } from '../../data/company';

export const IntroSection: React.FC = () => {
  return (
    <section id="company-intro" className="relative py-28 sm:py-36 bg-graphite text-ivory overflow-hidden">
      {/* Background radial accent glow inside dark chamber */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle top & bottom transition lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Split: Bold Editorial Thesis (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-ivory uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>03 // THE CONTRAST CHAMBER</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              We Do Not Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light via-brand-red to-white">
                Disposable Software.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed">
              In an era dominated by fragile copy-paste boilerplates and generic AI templates, JL Corp stands for mathematical precision, clean-code architecture, and linear scalability.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-red-light">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    Uncompromising Security & OWASP Hardening
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed">
                    Zero-trust APIs, role-based multi-tenancy, and end-to-end encrypted sessions built for high-throughput enterprise operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-red-light">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    Mathematical Lifecycle Governance
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed">
                    From initial architecture mapping to zero-downtime cutover, our 5-stage framework ensures 100% on-time milestone precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300"
              >
                <span>Read Corporate Manifesto</span>
                <ArrowUpRight className="w-4 h-4 text-brand-red" />
              </a>
            </div>
          </div>

          {/* Right Split: High-Tech Telemetry Terminal (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-graphite-deep/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* Subtle top rim light */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red shadow-sm" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-xs font-mono text-white/60 ml-2">jl-corp-engine // telemetry</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-[10px] font-mono text-brand-red-light uppercase font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                  Live System
                </span>
              </div>

              {/* Code / Command View */}
              <div className="mt-6 space-y-4 font-mono text-xs text-white/80">
                <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
                  <div className="text-brand-red-light font-bold">$ jl-corp --verify architecture</div>
                  <div className="text-white/60 pl-2 leading-relaxed">
                    [OK] React 18 + Vite + TypeScript Frontend<br />
                    [OK] Three.js Red Liquid-Glass Centerpiece<br />
                    [OK] Mouse-Velocity Physics Engine (120 FPS)<br />
                    [OK] cPanel Static Deployment: 100% SPA Safe
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/50 uppercase tracking-widest block font-mono">Headquarters</span>
                    <span className="font-display text-base font-bold text-white block mt-1">Bengaluru, IN</span>
                    <span className="text-[11px] text-brand-red-light font-mono block mt-0.5">PIN 560079</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/50 uppercase tracking-widest block font-mono">Reliability Target</span>
                    <span className="font-display text-base font-bold text-white block mt-1">100% Delivery</span>
                    <span className="text-[11px] text-emerald-400 font-mono block mt-0.5">SLA Guaranteed</span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px] text-white/40 border-t border-white/10">
                  <span>Executive: lakshman@jlcorp.in</span>
                  <span className="text-brand-red-light font-mono">+91 89709 79689</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
