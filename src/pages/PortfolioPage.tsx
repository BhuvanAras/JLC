import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Filter } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PROJECTS_DATA } from '../data/projects';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
    <div className="pt-32 pb-24 bg-ivory">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badgeText="ENGINEERED SYSTEMS"
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

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="liquid-glass-card rounded-3xl flex flex-col justify-between group overflow-hidden border border-softgrey hover:border-brand-red/40 shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300"
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

                  <p className="mt-3 text-xs sm:text-sm text-body-text leading-relaxed">
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

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite hover:text-brand-red transition-colors"
                >
                  <span>Request Walkthrough</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-16 p-6 rounded-2xl liquid-glass-card border border-softgrey text-center">
          <p className="text-xs text-body-muted font-mono">
            * Note on Client Confidentiality: Select enterprise systems and high-throughput financial architectures are omitted or anonymized in compliance with mutual nondisclosure agreements.
          </p>
        </div>
      </div>
    </div>
  );
};
