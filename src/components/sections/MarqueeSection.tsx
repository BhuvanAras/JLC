import React from 'react';

const TECH_PARTNERS = [
  { name: "React Ecosystem", category: "Frontend Framework", code: "REACT // TS" },
  { name: "Node.js Platform", category: "Backend Runtime", code: "NODE.JS" },
  { name: "PostgreSQL Database", category: "Relational DB", code: "POSTGRES" },
  { name: "Amazon Web Services", category: "Cloud Infrastructure", code: "AWS CLOUD" },
  { name: "Google Cloud Platform", category: "Compute & AI", code: "GCP ENTERPRISE" },
  { name: "Docker & Kubernetes", category: "Containerization", code: "K8S // CONTAINERS" },
  { name: "Three.js / WebGL", category: "3D Visualization", code: "THREE.JS // R3F" },
  { name: "Tailwind CSS", category: "Design Tokens", code: "TAILWIND CSS" },
  { name: "Twilio Telephony", category: "Communications API", code: "TWILIO // CRM" },
  { name: "GraphQL Systems", category: "Data Contract", code: "GRAPHQL" }
];

export const MarqueeSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-dark-base border-t border-b border-dark-border overflow-hidden">
      {/* Top Red Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-mono text-light-dim uppercase tracking-widest">
          Integrated Technologies & Enterprise Architecture Stack
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 items-center gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused]">
          {TECH_PARTNERS.concat(TECH_PARTNERS).map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-dark-surface1 border border-dark-border hover:border-brand-red/40 hover:bg-dark-surface2 transition-all duration-300 group shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-brand-red/50 group-hover:bg-brand-red group-hover:shadow-red-sm transition-all" />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-light-secondary group-hover:text-white transition-colors">
                  {partner.code}
                </span>
                <span className="text-[10px] font-sans text-light-dim">
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

