import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'neutral' | 'glow';
  size?: 'sm' | 'md';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'red',
  size = 'md',
  pulse = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs"
  };

  const variantClasses = {
    red: "bg-brand-red/10 border-brand-red/30 text-light-primary",
    neutral: "bg-white/5 border-white/10 text-light-secondary",
    glow: "bg-brand-red/20 border-brand-red/40 text-white shadow-red-sm"
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border font-mono tracking-wider uppercase font-medium backdrop-blur-sm ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};

