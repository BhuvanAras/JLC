import React, { useRef, useEffect } from 'react';

const TECH_PARTNERS = [
  { name: "React Ecosystem", category: "Frontend Core", code: "REACT 18+", icon: "⚛️" },
  { name: "Next.js Platform", category: "Hybrid Framework", code: "NEXT.JS 14", icon: "▲" },
  { name: "Node.js Runtime", category: "Asynchronous Backend", code: "NODE.JS", icon: "⬢" },
  { name: "PostgreSQL Database", category: "Enterprise DB", code: "POSTGRES", icon: "🐘" },
  { name: "Three.js WebGL", category: "3D Visualization", code: "THREE.JS", icon: "💎" },
  { name: "Amazon Web Services", category: "Cloud Architecture", code: "AWS CLOUD", icon: "☁️" },
  { name: "Google Cloud Platform", category: "Compute & AI", code: "GCP CLOUD", icon: "🌐" },
  { name: "Docker Containers", category: "Containerization", code: "DOCKER", icon: "🐳" },
  { name: "Tailwind CSS", category: "Design System", code: "TAILWIND", icon: "🎨" },
  { name: "Twilio Platform", category: "Communications API", code: "TWILIO", icon: "📞" },
  { name: "TypeScript Platform", category: "Type Safety", code: "TYPESCRIPT", icon: "🔷" },
  { name: "Python Systems", category: "Data & ML", code: "PYTHON 3", icon: "🐍" }
];

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let offset = 0;
    let baseSpeed = 1.2;
    let targetSpeed = baseSpeed;
    let currentSpeed = baseSpeed;
    let lastMouseX = 0;
    let isHovering = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartOffset = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const normalizedX = (mouseX / rect.width) * 2 - 1;

      const deltaX = e.clientX - lastMouseX;
      lastMouseX = e.clientX;

      // Mouse position and velocity drive target speed
      const impulse = deltaX * 0.45;
      const positionDrive = normalizedX * 4.5;
      targetSpeed = positionDrive + impulse;

      targetSpeed = Math.max(-14, Math.min(14, targetSpeed));
      isHovering = true;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isHovering = true;
      lastMouseX = e.clientX;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetSpeed = baseSpeed;
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartOffset = offset;
      track.style.cursor = 'grabbing';
    };

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const diffX = e.clientX - dragStartX;
      offset = dragStartOffset + diffX;
      targetSpeed = (e.clientX - lastMouseX) * 0.8;
      lastMouseX = e.clientX;
    };

    const handleWindowMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        track.style.cursor = 'grab';
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);

    const render = () => {
      if (!isDragging) {
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;

        if (!isHovering) {
          targetSpeed = baseSpeed;
        }

        offset -= currentSpeed;
      }

      const totalWidth = track.scrollWidth / 2;
      if (totalWidth > 0) {
        if (offset < -totalWidth) {
          offset += totalWidth;
          if (isDragging) dragStartOffset += totalWidth;
        } else if (offset > 0) {
          offset -= totalWidth;
          if (isDragging) dragStartOffset -= totalWidth;
        }
      }

      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  const triplicatedPartners = [...TECH_PARTNERS, ...TECH_PARTNERS, ...TECH_PARTNERS];

  return (
    <section
      ref={containerRef}
      className="relative py-16 bg-ivory border-t border-b border-softgrey overflow-hidden select-none cursor-ew-resize"
    >
      {/* Top red reflection hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Clean Minimal Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono font-bold text-body-muted uppercase tracking-widest block">
          Integrated Technologies & Production Architecture Stack
        </span>
      </div>

      {/* Interactive Drag & Velocity Track */}
      <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          ref={trackRef}
          className="flex shrink-0 items-center gap-6 sm:gap-8 will-change-transform cursor-grab py-4"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {triplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="relative flex items-center gap-3.5 px-6 py-4 rounded-2xl liquid-glass-card border border-white/95 hover:border-brand-red/50 hover:bg-white shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300 group shrink-0 active:scale-95"
            >
              {/* Top ambient glass reflection */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              {/* Glowing Red Dot Indicator */}
              <div className="w-2.5 h-2.5 rounded-full bg-brand-red/50 group-hover:bg-brand-red group-hover:shadow-liquid-red transition-all duration-300 shrink-0" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{partner.icon}</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-graphite group-hover:text-brand-red transition-colors">
                    {partner.code}
                  </span>
                </div>
                <span className="text-[10px] font-sans text-body-muted mt-0.5">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
