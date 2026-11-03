import React from 'react';
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { COMPANY_DATA } from '../../data/company';

export const ContactCTASection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border overflow-hidden">
      {/* Intense Crimson Ambient Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-dark-surface2 via-dark-surface1 to-dark-base border border-brand-red/40 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle Corner Ambient Line */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial-glow pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-xs font-mono text-brand-red-light uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for Immediate Deployment</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-light-primary tracking-tight leading-[1.1]">
              Ready to Engineer Your Next{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red-light to-white">
                Digital Breakthrough?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-light-muted max-w-xl mx-auto leading-relaxed">
              Connect directly with our engineering team in Bengaluru to discuss system architecture, timelines, and technical feasibility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/contact"
                variant="glow"
                size="lg"
                showArrow={true}
                className="w-full sm:w-auto font-bold tracking-wide shadow-red-lg"
              >
                Start a Conversation
              </Button>

              <a
                href={`tel:${COMPANY_DATA.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-dark-surface2 border border-dark-border hover:border-brand-red text-light-primary hover:text-white transition-all text-sm font-semibold font-mono"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call {COMPANY_DATA.contact.displayPhone}</span>
              </a>
            </div>

            {/* Direct Email Link */}
            <div className="pt-6 border-t border-dark-border/80 flex flex-wrap items-center justify-center gap-6 text-xs text-light-muted font-mono">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <span>Direct: {COMPANY_DATA.contact.email}</span>
              </span>
              <span>•</span>
              <span>Bengaluru, Karnataka 560079</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

