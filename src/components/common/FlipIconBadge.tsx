import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FlipIconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FlipIconBadge: React.FC<FlipIconBadgeProps> = ({
  icon: Icon,
  className = '',
  size = 'md'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  const sizeClasses = {
    sm: 'w-9 h-9 rounded-xl',
    md: 'w-12 h-12 rounded-2xl',
    lg: 'w-14 h-14 rounded-2xl'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleMouseEnter = () => {
    // Add 360 deg every time mouse sweeps over it
    setRotationDegree((prev) => prev + 360);
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ perspective: '800px' }}
      title="Interactive 3D Icon"
    >
      {/* Ambient Red Glow on Flip */}
      <div
        className={`absolute -inset-1.5 rounded-full bg-brand-red opacity-0 blur-md transition-opacity duration-500 ${
          isFlipped ? 'opacity-40' : 'group-hover:opacity-25'
        }`}
      />

      {/* 3D Flipping Body */}
      <div
        className={`relative flex items-center justify-center transition-all duration-700 ease-out will-change-transform shadow-sm group-hover:shadow-liquid-red ${sizeClasses[size]} ${
          isFlipped
            ? 'bg-brand-red text-white border-transparent scale-110 shadow-liquid-red'
            : 'bg-brand-red/10 border border-brand-red/20 text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:scale-105'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotationDegree}deg) rotateZ(${isFlipped ? '8deg' : '0deg'})`
        }}
      >
        <Icon className={`${iconSizes[size]} transition-transform duration-300 drop-shadow-sm`} />
      </div>
    </div>
  );
};

