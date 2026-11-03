import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeftRight, Sparkles, Navigation } from 'lucide-react';

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

  const [mouseVelocityInfo, setMouseVelocityInfo] = useState({
    direction: 'Autopilot',
    speedRate: '1.0x'
  });

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let offset = 0;
    let baseSpeed = 1.2; // default ambient rightward/leftward crawl
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
      const normalizedX = (mouseX / rect.width) * 2 - 1; // -1 (far left) to +1 (far right)

      // Calculate instantaneous mouse speed
      const deltaX = e.clientX - lastMouseX;
      lastMouseX = e.clientX;

      // Mouse position and velocity drive target speed
      // Moving mouse left (deltaX < 0) pushes track left; moving mouse right pushes track right!
      const impulse = deltaX * 0.45;
      const positionDrive = normalizedX * 4.5;
      
      targetSpeed = positionDrive + impulse;

      // Cap target speed to avoid dizzying jumps
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

    // Pointer Dragging for direct tactile feel
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

    let throttleCounter = 0;

    const render = () => {
      if (!isDragging) {
        // Smoothly interpolate current speed towards target speed with damping
        currentSpeed += (targetSpeed - currentSpeed) * 0.08;

        // If not hovering, gradually restore gentle base speed
        if (!isHovering) {
          targetSpeed = baseSpeed;
        }

        offset -= currentSpeed;
      }

      // Calculate the width of one single full set of partners
      // When offset exceeds half the total duplicated track, wrap around seamlessly
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

      // Update UI Telemetry Badge
      throttleCounter++;
      if (throttleCounter % 8 === 0) {
        const absSpeed = Math.abs(currentSpeed);
        const dir = currentSpeed > 0.5 ? 'Moving Left ←' : currentSpeed < -0.5 ? 'Moving Right →' : 'Cruising';
        const rate = `${(absSpeed / baseSpeed).toFixed(1)}x`;
        setMouseVelocityInfo({ direction: dir, speedRate: rate });
      }

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

  // Triple array to ensure infinite wrapping with zero gaps
  const triplicatedPartners = [...TECH_PARTNERS, ...TECH_PARTNERS, ...TECH_PARTNERS];

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-ivory border-t border-b border-softgrey overflow-hidden select-none cursor-ew-resize"
    >
      {/* Top red reflection hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      {/* Header with Live Mouse Direction HUD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-graphite uppercase tracking-widest block">
            INTEGRATED TECHNOLOGIES & PRODUCTION ARCHITECTURE STACK
          </span>
          <span className="text-[11px] font-sans text-body-muted mt-1 block">
            * Move your cursor left and right across the track to accelerate and shift the stream
          </span>
        </div>

        {/* Live Momentum Pill */}
        <div className="liquid-glass-chip px-4 py-1.5 rounded-full flex items-center gap-2.5 shadow-liquid-sm">
          <ArrowLeftRight className="w-3.5 h-3.5 text-brand-red animate-pulse" />
          <span className="text-xs font-mono font-bold text-graphite">{mouseVelocityInfo.direction}</span>
          <span className="h-3 w-[1px] bg-softgrey" />
          <span className="text-[10px] font-mono font-bold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">
            {mouseVelocityInfo.speedRate}
          </span>
        </div>
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
