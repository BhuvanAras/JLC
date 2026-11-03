import React from 'react';

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  titleHighlight,
  description,
  align = 'left',
  className = '',
  dark = false
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badgeText && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-chip border border-softgrey text-[11px] font-mono font-bold uppercase tracking-wider text-graphite mb-4 shadow-liquid-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          <span>{badgeText}</span>
        </div>
      )}

      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-graphite'}`}>
        {title}{' '}
        {titleHighlight && (
          <span className="text-gradient-pure-red">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed font-sans max-w-2xl ${dark ? 'text-white/70' : 'text-body-text'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
