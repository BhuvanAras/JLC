import React, { useRef, useState } from 'react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  className = '',
  tilt = true,
  glowColor = 'rgba(224, 0, 0, 0.12)',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rX = ((y - centerY) / centerY) * -6; // 6 deg max tilt
      const rY = ((x - centerX) / centerX) * 6;
      setRotation({ x: rX, y: rY });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tilt && isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-6px)`
          : 'none',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`relative rounded-3xl liquid-glass-card overflow-hidden transition-all duration-300 will-change-transform ${className}`}
    >
      {/* Specular Edge Rim Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 z-20 pointer-events-none" />

      {/* Dynamic Liquid Mouse Spotlight Glare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`
          }}
        />
      )}

      {/* Internal Content Container */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
};

