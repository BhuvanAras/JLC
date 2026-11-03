import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hi JL Corp, I would like to discuss a custom software engineering project with your team.");
  const phoneFormatted = COMPANY_DATA.contact.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneFormatted}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full liquid-glass-chip border border-white/95 shadow-liquid-md hover:shadow-liquid-lg hover:border-emerald-500/40 bg-white/85 hover:bg-white transition-all duration-300"
        title="Direct WhatsApp Consultation"
      >
        {/* Pulsing Emerald Active Ping */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>

        <span className="font-mono text-xs font-bold text-graphite group-hover:text-emerald-700 transition-colors">
          Direct WhatsApp
        </span>

        <span className="hidden sm:inline text-[10px] font-mono text-body-muted group-hover:text-graphite transition-colors">
          // {COMPANY_DATA.contact.displayPhone}
        </span>

        <ArrowUpRight className="w-3.5 h-3.5 text-body-muted group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
};
