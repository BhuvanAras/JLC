import React from 'react';
import { Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';

export const ContactCTASection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-ivory border-t border-softgrey overflow-hidden">
      {/* Intense Ambient Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-graphite via-graphite-deep to-graphite p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl text-white border border-white/10">
          
          {/* Subtle Corner Ambient Line */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-7 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-white uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-red-light" />
              <span>Available for Enterprise Engagements</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Ready to Engineer Your Next{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red-light via-brand-red to-white">
                Digital Breakthrough?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Connect directly with our engineering architects in Bengaluru to discuss system architecture, milestones, and technical feasibility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white text-sm font-bold tracking-wide shadow-liquid-red hover:shadow-soft-glow transition-all duration-300 active:scale-[0.98]"
              >
                <span>Schedule Technical Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_DATA.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all text-sm font-semibold font-mono"
              >
                <Phone className="w-4 h-4 text-brand-red-light" />
                <span>Call {COMPANY_DATA.contact.displayPhone}</span>
              </a>
            </div>

            {/* Direct Email Link */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-mono">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red-light" />
                <span>Executive Office: {COMPANY_DATA.contact.email}</span>
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
