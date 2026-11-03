import React from 'react';

export const HeroCanvasFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden">
      {/* Ambient Red Aura */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-red/20 blur-[80px] animate-pulse-slow" />
      
      {/* Geometric Concentric Rings */}
      <div className="relative flex items-center justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-brand-red/30 animate-spin" style={{ animationDuration: '40s' }}>
          <div className="w-3 h-3 rounded-full bg-brand-red shadow-red-md absolute -top-1.5 left-1/2 -translate-x-1/2" />
        </div>
        
        <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm absolute -bottom-1 left-1/2 -translate-x-1/2" />
        </div>

        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border border-brand-red/40 rotate-45 animate-pulse-slow flex items-center justify-center bg-dark-surface1/60 backdrop-blur-md">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-brand-red-dark via-brand-red to-brand-red-light shadow-red-lg flex items-center justify-center">
            <span className="font-mono text-xs font-extrabold text-white">JL</span>
          </div>
        </div>
      </div>

      {/* Floating Micro Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
        <span className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-white opacity-60" />
        <span className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-brand-red/80" />
      </div>
    </div>
  );
};

