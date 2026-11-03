import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  showArrow = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group select-none overflow-hidden cursor-pointer";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-bold gap-2.5"
  };

  const variantClasses = {
    primary: "bg-brand-red text-white hover:bg-brand-red-light shadow-red-sm hover:shadow-red-md active:scale-[0.98]",
    secondary: "bg-dark-surface2 text-light-primary border border-dark-border hover:border-brand-red/50 hover:bg-dark-surface3 active:scale-[0.98]",
    outline: "bg-transparent text-light-primary border border-dark-border hover:border-brand-red hover:text-white active:scale-[0.98]",
    ghost: "bg-transparent text-light-secondary hover:text-white hover:bg-white/5",
    glow: "bg-brand-red text-white shadow-red-md hover:shadow-red-lg hover:bg-brand-red-light active:scale-[0.98]"
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

