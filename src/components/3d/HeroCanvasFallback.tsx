import React from 'react';

export const HeroCanvasFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center overflow-hidden">
      {/* Warm Ambient Halo */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-red/10 blur-[80px] animate-pulse-subtle" />
      
      {/* Concentric Glass Rings */}
      <div className="relative flex items-center justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-brand-red/25 animate-spin" style={{ animationDuration: '45s' }}>
          <div className="w-3.5 h-3.5 rounded-full bg-brand-red shadow-liquid-red absolute -top-1.5 left-1/2 -translate-x-1/2" />
        </div>
        
        <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-graphite/10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-graphite shadow-sm absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>

        {/* Central Liquid Glass Emblem */}
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-3xl liquid-glass-nav rotate-45 flex items-center justify-center shadow-liquid-lg">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-red-deep via-brand-red to-brand-red-light shadow-liquid-red flex items-center justify-center">
            <span className="font-mono text-xs font-black text-white tracking-widest">JL</span>
          </div>
        </div>
      </div>

      {/* Floating Micro Specks */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
        <span className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-graphite/40" />
        <span className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-brand-red/60" />
      </div>
    </div>
  );
};
