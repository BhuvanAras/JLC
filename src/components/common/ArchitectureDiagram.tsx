import React, { useState } from 'react';
import { Cpu, ShieldCheck, Database, Globe, Smartphone, Server, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ArchitectureDiagramProps {
  serviceTitle: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ serviceTitle }) => {
  const [activeNode, setActiveNode] = useState<string>('gateway');

  const nodes = [
    {
      id: 'client',
      title: 'Client Tier',
      subtitle: 'React 18 / iOS / Android',
      spec: 'Sub-50ms render, 120 FPS fluid gestures',
      icon: Globe
    },
    {
      id: 'edge',
      title: 'Edge CDN & Security',
      subtitle: 'Cloudflare / AWS CloudFront',
      spec: 'DDoS mitigation, TLS 1.3, edge caching',
      icon: ShieldCheck
    },
    {
      id: 'gateway',
      title: 'API Gateway & Auth',
      subtitle: 'Node.js / JWT / OAuth 2.0',
      spec: 'Rate limiting, token validation, telemetry',
      icon: Server
    },
    {
      id: 'services',
      title: 'Distributed Compute',
      subtitle: 'Docker / Kubernetes Pods',
      spec: 'Auto-scaling microservices, queue workers',
      icon: Cpu
    },
    {
      id: 'database',
      title: 'Data & Cache Tier',
      subtitle: 'PostgreSQL + Redis Cache',
      spec: 'ACID compliance, sub-5ms cached reads',
      icon: Database
    }
  ];

  return (
    <div className="liquid-glass-card p-8 sm:p-10 rounded-3xl border border-white/95 shadow-liquid-md mb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-softgrey">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-xs font-mono font-bold text-brand-red uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURAL TOPOLOGY</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-graphite">
            System Topology for {serviceTitle}
          </h3>
        </div>

        <span className="text-xs font-mono font-bold text-body-muted">
          * Click any node to inspect telemetry specs
        </span>
      </div>

      {/* Interactive Topology Nodes Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;

          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative ${
                isSelected
                  ? 'bg-white border-brand-red shadow-liquid-md scale-[1.02]'
                  : 'liquid-glass-chip border-softgrey hover:border-graphite/30'
              }`}
            >
              {/* Connector Dot to Next Node */}
              {i < nodes.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-red/20 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                </div>
              )}

              <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-3">
                <Icon className="w-5 h-5" />
              </div>

              <span className="font-mono text-[10px] text-body-muted uppercase tracking-wider block">
                Node 0{i + 1}
              </span>

              <h4 className="font-display text-sm font-bold text-graphite mt-0.5">
                {node.title}
              </h4>

              <span className="text-[11px] text-body-muted font-sans block mt-1">
                {node.subtitle}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Node Deep-Dive Spec Callout */}
      {activeNode && (
        <div className="mt-8 p-6 rounded-2xl bg-white border border-softgrey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-graphite text-white flex items-center justify-center font-mono text-xs font-bold">
              λ
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block">
                {nodes.find((n) => n.id === activeNode)?.title} Architecture Specification:
              </span>
              <p className="text-sm font-semibold text-graphite mt-0.5">
                {nodes.find((n) => n.id === activeNode)?.spec}
              </p>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase shrink-0">
            Audit Passed (OWASP Certified)
          </span>
        </div>
      )}
    </div>
  );
};
