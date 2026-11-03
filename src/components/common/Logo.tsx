import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'original';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showText = false
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  };

  const logoSrc = variant === 'dark'
    ? './logo-dark.png'
    : variant === 'light'
      ? './logo-light.png'
      : './logo.png';

  return (
    <Link 
      to="/" 
      className={`group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="JL Corp Flagship Home"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle red ambient refraction halo */}
        <div className="absolute -inset-1.5 rounded-2xl bg-brand-red opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20" />
        <img 
          src={logoSrc} 
          alt="JL Corp Official Identity" 
          className={`relative w-auto object-contain transition-all duration-300 drop-shadow-sm ${sizeClasses[size]}`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-lg font-extrabold tracking-tight text-graphite leading-none">
            JL <span className="text-brand-red">CORP</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-body-muted uppercase mt-0.5">
            Software Solutions
          </span>
        </div>
      )}
    </Link>
  );
};
