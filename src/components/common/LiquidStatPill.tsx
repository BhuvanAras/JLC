import React from 'react';

interface LiquidStatPillProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
}

export const LiquidStatPill: React.FC<LiquidStatPillProps> = ({
  value,
  label,
  subtext,
  className = ''
}) => {
  return (
    <div className={`relative px-5 py-3 rounded-2xl liquid-glass-chip border border-white/95 shadow-liquid-sm flex items-center gap-3.5 group hover:shadow-liquid-md transition-all duration-300 ${className}`}>
      {/* Laser Red Pulse Dot */}
      <div className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-black text-graphite group-hover:text-brand-red transition-colors">
            {value}
          </span>
          <span className="text-[11px] font-mono font-bold text-body-muted uppercase tracking-wider">
            {label}
          </span>
        </div>
        {subtext && (
          <span className="text-[10px] font-sans text-body-muted">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};
