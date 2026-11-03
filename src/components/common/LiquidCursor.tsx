import React, { useEffect, useState, useRef } from 'react';

export const LiquidCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorHaloRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let haloX = -100;
    let haloY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable / glass elements
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, [role="button"], .liquid-glass-card, .liquid-glass-chip, input, select, textarea')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Smooth lerp for halo
      haloX += (mouseX - haloX) * 0.18;
      haloY += (mouseY - haloY) * 0.18;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (cursorHaloRef.current) {
        cursorHaloRef.current.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Liquid Glass Refraction Halo */}
      <div
        ref={cursorHaloRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,border-color] duration-300 ease-out will-change-transform ${
          isHovered
            ? 'w-12 h-12 bg-brand-red/10 border border-brand-red/40 backdrop-blur-[2px] shadow-soft-glow'
            : 'w-8 h-8 bg-black/[0.03] border border-black/10'
        }`}
      />

      {/* Center Precise Red Laser Pin */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red transition-transform duration-150 will-change-transform shadow-sm ${
          isHovered ? 'w-2 h-2 scale-125' : 'w-1.5 h-1.5'
        }`}
      />
    </div>
  );
};
