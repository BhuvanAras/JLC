import React from 'react';

const TECH_PARTNERS = [
  { name: "React Ecosystem", category: "Frontend Core", code: "REACT 18+" },
  { name: "Next.js Platform", category: "Hybrid Framework", code: "NEXT.JS" },
  { name: "Node.js Runtime", category: "Asynchronous Backend", code: "NODE.JS" },
  { name: "PostgreSQL Database", category: "Enterprise DB", code: "POSTGRES" },
  { name: "Three.js WebGL", category: "3D Visualization", code: "THREE.JS" },
  { name: "Amazon Web Services", category: "Cloud Architecture", code: "AWS CLOUD" },
  { name: "Google Cloud Platform", category: "Compute & AI", code: "GCP CLOUD" },
  { name: "Docker Containers", category: "Containerization", code: "DOCKER" },
  { name: "Tailwind CSS", category: "Design System", code: "TAILWIND" },
  { name: "Twilio Platform", category: "Communications API", code: "TWILIO" }
];

export const MarqueeSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-ivory border-t border-b border-softgrey overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono font-bold text-body-muted uppercase tracking-widest">
          Integrated Technologies & Production Architecture Stack
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused]">
          {TECH_PARTNERS.concat(TECH_PARTNERS).map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl liquid-glass-chip border border-white/90 hover:border-brand-red/40 hover:bg-white shadow-liquid-sm transition-all duration-300 group shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-brand-red/50 group-hover:bg-brand-red group-hover:shadow-liquid-red transition-all" />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-graphite group-hover:text-brand-red transition-colors">
                  {partner.code}
                </span>
                <span className="text-[10px] font-sans text-body-muted">
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
