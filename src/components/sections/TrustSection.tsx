import React from 'react';
import { Shield, FileCheck, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { COMPANY_DATA } from '../../data/company';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <SectionHeader
              badgeText="08 // CLIENT COMMITMENT"
              title="Verified Results &"
              titleHighlight="Strict Commercial Privacy."
              description="Most of our high-scale software applications and CRM engines operate under strict enterprise non-disclosure agreements (NDAs). We respect our partners' commercial privacy with zero compromise."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl liquid-glass-card border border-softgrey">
                <Lock className="w-5 h-5 text-brand-red mb-3" />
                <h4 className="font-display text-sm font-bold text-graphite">100% IP Transfer</h4>
                <p className="text-xs text-body-text mt-1.5 leading-relaxed">
                  Full intellectual property ownership and source repositories transferred directly upon milestone delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl liquid-glass-card border border-softgrey">
                <FileCheck className="w-5 h-5 text-brand-red mb-3" />
                <h4 className="font-display text-sm font-bold text-graphite">Direct References on NDA</h4>
                <p className="text-xs text-body-text mt-1.5 leading-relaxed">
                  Verified client case studies and code walkthroughs available to qualified prospective clients.
                </p>
              </div>
            </div>
          </div>

          {/* Right Verification Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/90 shadow-liquid-md relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-graphite">
                    JL Corp Quality Charter
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-body-muted uppercase tracking-wider">
                    Bengaluru Engineering Standards
                  </span>
                </div>
              </div>

              <p className="text-sm text-body-text leading-relaxed mb-6">
                "We hold ourselves to mathematical engineering standards. No exaggerated marketing claims, no fabricated testimonials. We build software that works, scales, and stands up to peak traffic."
              </p>

              <div className="pt-4 border-t border-softgrey flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-graphite block">
                    {COMPANY_DATA.name} Executive Office
                  </span>
                  <span className="text-[10px] font-mono text-body-muted block mt-0.5">
                    {COMPANY_DATA.contact.email}
                  </span>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold text-graphite hover:text-brand-red transition-all"
                >
                  <span>Request NDA</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
