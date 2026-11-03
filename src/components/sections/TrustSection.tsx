import React from 'react';
import { Shield, FileCheck, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { COMPANY_DATA } from '../../data/company';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-dark-base border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <SectionHeader
              badgeText="06 // CLIENT COMMITMENT"
              title="Verified Results &"
              titleHighlight="Strict Engineering NDA Compliance."
              description="Most of our high-scale software and CRM systems operate under strict enterprise non-disclosure agreements (NDAs). We respect our partners' proprietary code and commercial privacy with zero compromise."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-dark-surface1 border border-dark-border">
                <Lock className="w-5 h-5 text-brand-red mb-2" />
                <h4 className="font-display text-sm font-bold text-light-primary">Proprietary IP Protection</h4>
                <p className="text-xs text-light-muted mt-1 leading-relaxed">
                  100% intellectual property ownership transferred to client upon final milestone delivery.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-surface1 border border-dark-border">
                <FileCheck className="w-5 h-5 text-brand-red mb-2" />
                <h4 className="font-display text-sm font-bold text-light-primary">Direct Verified References</h4>
                <p className="text-xs text-light-muted mt-1 leading-relaxed">
                  Enterprise client references and code audits available to qualified prospects upon mutual NDA.
                </p>
              </div>
            </div>
          </div>

          {/* Right Verification Card (5 Cols) */}
          <div className="lg:col-span-5">
            <Card className="p-8 bg-dark-surface1 border-brand-red/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/40 flex items-center justify-center text-brand-red">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-light-primary">
                    JL Corp Quality Charter
                  </h4>
                  <span className="text-[10px] font-mono text-light-dim uppercase">
                    Bengaluru Engineering Standards
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-light-muted leading-relaxed mb-6">
                "We hold ourselves to mathematical engineering standards. No exaggerated marketing claims, no fabricated testimonials. We build software that works, scales, and stands up to peak traffic."
              </p>

              <div className="pt-4 border-t border-dark-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-light-primary block">
                    {COMPANY_DATA.name} Leadership
                  </span>
                  <span className="text-[10px] font-mono text-light-dim block">
                    {COMPANY_DATA.contact.email}
                  </span>
                </div>

                <Button
                  to="/contact"
                  variant="outline"
                  size="sm"
                  icon={ArrowUpRight}
                  iconPosition="right"
                  className="text-xs"
                >
                  Request Audit
                </Button>
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

