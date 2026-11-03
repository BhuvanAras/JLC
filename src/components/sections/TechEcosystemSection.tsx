import React, { useEffect, useRef } from 'react';
import { SectionHeader } from '../common/SectionHeader';

interface TechChip {
  id: string;
  name: string;
  category: string;
  code: string;
  pillColor: string;
  accent: string;
}

const VERIFIED_TECHNOLOGIES: TechChip[] = [
  { id: 'react', name: 'React', category: 'Reactive UI Engine', code: 'REACT 18+', pillColor: 'border-cyan-500/30 text-cyan-600', accent: '#06B6D4' },
  { id: 'javascript', name: 'JavaScript', category: 'ECMAScript Core', code: 'ES6+ / V8', pillColor: 'border-amber-500/30 text-amber-600', accent: '#F59E0B' },
  { id: 'nextjs', name: 'Next.js', category: 'SSR & Hybrid Framework', code: 'NEXT.JS', pillColor: 'border-neutral-700/30 text-neutral-800', accent: '#171717' },
  { id: 'typescript', name: 'TypeScript', category: 'Type-Safe Architecture', code: 'TS 5.0+', pillColor: 'border-blue-500/30 text-blue-600', accent: '#3B82F6' },
  { id: 'nodejs', name: 'Node.js', category: 'Asynchronous Runtime', code: 'NODE.JS', pillColor: 'border-emerald-500/30 text-emerald-600', accent: '#10B981' },
  { id: 'python', name: 'Python', category: 'Data & Automation', code: 'PYTHON 3', pillColor: 'border-indigo-500/30 text-indigo-600', accent: '#6366F1' },
  { id: 'mysql', name: 'MySQL', category: 'Relational Database', code: 'MYSQL DB', pillColor: 'border-sky-600/30 text-sky-700', accent: '#0284C7' },
  { id: 'threejs', name: 'Three.js', category: 'WebGL 3D Graphics', code: 'THREE / R3F', pillColor: 'border-rose-500/30 text-brand-red', accent: '#E00000' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Design Token Engine', code: 'TAILWIND', pillColor: 'border-teal-500/30 text-teal-600', accent: '#14B8A6' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Enterprise Storage', code: 'POSTGRES', pillColor: 'border-blue-600/30 text-blue-700', accent: '#2563EB' },
  { id: 'docker', name: 'Docker', category: 'Container Platform', code: 'CONTAINERS', pillColor: 'border-blue-400/30 text-blue-500', accent: '#38BDF8' },
  { id: 'websockets', name: 'WebSockets', category: 'Real-Time Telemetry', code: 'WS STREAM', pillColor: 'border-orange-500/30 text-orange-600', accent: '#F97316' }
];

export const TechEcosystemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chipsState = VERIFIED_TECHNOLOGIES.map((_, i) => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rx: 0,
      ry: 0,
      phase: i * 0.52
    }));

    let mouseX = -9999;
    let mouseY = -9999;
    let prevMouseX = -9999;
    let prevMouseY = -9999;
    let smoothedSpeed = 0;
    let isInside = false;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (prevMouseX === -9999) {
        prevMouseX = currentX;
        prevMouseY = currentY;
      }

      const vx = currentX - prevMouseX;
      const vy = currentY - prevMouseY;
      const instantSpeed = Math.hypot(vx, vy);

      smoothedSpeed = smoothedSpeed * 0.75 + instantSpeed * 0.25;

      mouseX = currentX;
      mouseY = currentY;
      prevMouseX = currentX;
      prevMouseY = currentY;
      isInside = true;
    };

    const handleMouseLeave = () => {
      isInside = false;
      mouseX = -9999;
      mouseY = -9999;
      prevMouseX = -9999;
      prevMouseY = -9999;
      smoothedSpeed = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let lastTime = performance.now();

    const tick = (now: number) => {
      lastTime = now;
      const t = now * 0.001;
      smoothedSpeed *= 0.94;

      chipsState.forEach((state, i) => {
        const el = chipRefs.current[i];
        if (!el) return;

        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const chipCenterX = (elRect.left - containerRect.left) + elRect.width / 2;
        const chipCenterY = (elRect.top - containerRect.top) + elRect.height / 2;

        let fx = 0;
        let fy = 0;

        if (isInside && mouseX !== -9999) {
          const dx = chipCenterX - mouseX;
          const dy = chipCenterY - mouseY;
          const dist = Math.hypot(dx, dy) || 1;

          const baseRadius = 140;
          const dynamicRadius = baseRadius + Math.min(smoothedSpeed * 5, 200);

          if (dist < dynamicRadius) {
            const nx = dx / dist;
            const ny = dy / dist;
            const proximity = 1 - (dist / dynamicRadius);

            const velocityMultiplier = Math.min(smoothedSpeed * 0.8, 30);
            const forceMagnitude = (proximity * 8) + (proximity * proximity * velocityMultiplier * 1.8);

            fx += nx * forceMagnitude * 12;
            fy += ny * forceMagnitude * 12;

            state.rx = -ny * proximity * 18;
            state.ry = nx * proximity * 18;
          }
        }

        const springK = 0.06;
        const damping = 0.85;

        if (!isInside || smoothedSpeed < 2) {
          const driftX = Math.sin(t * 1.2 + state.phase) * 6;
          const driftY = Math.cos(t * 0.9 + state.phase) * 6;
          fx += (driftX - state.x) * 0.02;
          fy += (driftY - state.y) * 0.02;
        }

        fx += -springK * state.x;
        fy += -springK * state.y;

        state.vx = (state.vx + fx) * damping;
        state.vy = (state.vy + fy) * damping;

        state.x += state.vx;
        state.y += state.vy;

        state.rx *= 0.9;
        state.ry *= 0.9;

        el.style.transform = `translate3d(${state.x.toFixed(2)}px, ${state.y.toFixed(2)}px, 0px) rotateX(${state.rx.toFixed(2)}deg) rotateY(${state.ry.toFixed(2)}deg)`;
      });

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section id="tech-ecosystem" className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-r from-transparent via-brand-red-tint to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            badgeText="02 // INTERACTIVE ECOSYSTEM"
            title="The Technology Core:"
            titleHighlight="Powered by Mouse-Velocity Physics."
            description="Interact with JL Corp’s verified technology stack below. Move your cursor gently for slow drift, or sweep rapidly across the field to unleash elastic repulsion waves."
          />
        </div>

        {/* The Physics Playground Container */}
        <div
          ref={containerRef}
          className="relative min-h-[460px] sm:min-h-[520px] rounded-3xl p-6 sm:p-12 liquid-glass-card border border-white/80 shadow-liquid-md flex flex-wrap items-center justify-center gap-5 sm:gap-7 select-none overflow-hidden cursor-crosshair"
          style={{ perspective: '1200px' }}
        >
          {/* Subtle grid pattern inside playground */}
          <div className="absolute inset-0 canvas-dot-grid opacity-60 pointer-events-none" />

          {/* Technology Chips */}
          {VERIFIED_TECHNOLOGIES.map((tech, idx) => (
            <div
              key={tech.id}
              ref={(el) => (chipRefs.current[idx] = el)}
              className="relative liquid-glass-chip px-5 py-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col gap-2 min-w-[150px] sm:min-w-[185px] border border-white/95 shadow-liquid-sm hover:shadow-liquid-md transition-shadow will-change-transform group cursor-pointer"
            >
              {/* Subtle top reflective rim highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-base sm:text-lg font-bold text-graphite group-hover:text-brand-red transition-colors">
                  {tech.name}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${tech.pillColor} bg-white/70`}>
                  {tech.code}
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-sans text-body-muted pt-1 border-t border-black/[0.04]">
                <span>{tech.category}</span>
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: tech.accent }}
                />
              </div>
            </div>
          ))}

          {/* Bottom subtle instructions badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="px-3 py-1 rounded-full bg-white/80 border border-softgrey text-[10px] font-mono text-body-muted tracking-wider uppercase backdrop-blur-sm shadow-sm">
              * Move pointer dynamically to trigger spring repulsion waves
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
