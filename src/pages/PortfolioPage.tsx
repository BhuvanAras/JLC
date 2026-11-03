import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, X, Layers, Shield, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { LiquidCard } from '../components/common/LiquidCard';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectItem } from '../types';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'crm', label: 'CRM & Automation' },
    { id: 'cloud', label: 'Cloud & IoT' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-ivory overflow-hidden relative canvas-soft-lines">
      {/* Background ambient liquid glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-red/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <SectionHeader
          badgeText="ENGINEERED SYSTEMS // PORTFOLIO"
          title="Our Work & Production"
          titleHighlight="Architectures."
          description="Explore our delivered systems across web platforms, mobile solutions, CRM engines, and IoT telemetry architectures. All client confidentiality is strictly honored."
        />

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-liquid-red'
                  : 'liquid-glass-chip border-softgrey text-graphite hover:bg-white shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Liquid Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <LiquidCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col justify-between group overflow-hidden border border-softgrey hover:border-brand-red/40 cursor-pointer"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-softgrey">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                      project.status === 'Verified Active'
                        ? 'bg-emerald-500/20 text-emerald-100 border-emerald-400/40'
                        : 'bg-brand-red/20 text-white border-brand-red/40'
                    }`}>
                      {project.status === 'Verified Active' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                      ) : (
                        <Clock className="w-3 h-3 text-white" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-white bg-black/60 backdrop-blur-sm border border-white/20">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-brand-red font-bold block mb-2">
                    {project.client}
                  </span>

                  <h3 className="font-display text-xl font-bold text-graphite group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-body-text leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-black/[0.03] text-graphite border border-softgrey"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-7 pt-0 border-t border-softgrey/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-body-muted uppercase block">Metric Target</span>
                  <span className="font-mono text-xs font-bold text-graphite block mt-0.5">
                    {project.metrics}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite group-hover:text-brand-red transition-colors">
                  <span>Inspect Case</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </div>
              </div>
            </LiquidCard>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-16 p-6 rounded-2xl liquid-glass-chip border border-softgrey text-center">
          <p className="text-xs text-body-muted font-mono">
            * Note on Client Confidentiality: Select enterprise systems and high-throughput financial architectures are omitted or anonymized in compliance with mutual nondisclosure agreements.
          </p>
        </div>
      </div>

      {/* Interactive Liquid Glass Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl liquid-glass-card bg-white/95 rounded-3xl p-8 sm:p-10 border border-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full liquid-glass-chip hover:bg-black/5 text-graphite transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest block mb-2">
              {selectedProject.client} // {selectedProject.year}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-graphite mb-4">
              {selectedProject.title}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-softgrey">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm sm:text-base text-body-text leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-2xl bg-ivory border border-softgrey mb-6 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-body-muted uppercase">Verified Metric:</span>
              <span className="font-display text-base font-bold text-brand-red">{selectedProject.metrics}</span>
            </div>

            <h5 className="font-mono text-xs font-bold text-graphite uppercase tracking-wider mb-3">
              Technologies Utilized:
            </h5>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-xl text-xs font-mono bg-black/[0.04] text-graphite border border-softgrey">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="w-full text-center py-3.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-sm shadow-liquid-red transition-all"
              >
                Inquire About Similar Architecture
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
