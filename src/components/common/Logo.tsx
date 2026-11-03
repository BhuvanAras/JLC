import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light' | 'original';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showText = false
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24'
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
      aria-label="JL Corp Home"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle ambient red halo on hover */}
        <div className="absolute -inset-1 rounded-full bg-brand-red opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30" />
        <img 
          src={logoSrc} 
          alt="JL Corp Official Identity" 
          className={`relative w-auto object-contain transition-all duration-300 drop-shadow-sm ${sizeClasses[size]}`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-lg font-extrabold tracking-tight text-light-primary leading-none">
            JL <span className="text-brand-red">CORP</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-light-muted uppercase mt-0.5">
            Software Solutions
          </span>
        </div>
      )}
    </Link>
  );
};

