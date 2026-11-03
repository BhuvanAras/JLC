import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Filter } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
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
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          badgeText="ENGINEERED SYSTEMS"
          title="Our Work & Production"
          titleHighlight="Architectures."
          description="Explore our delivered systems across web platforms, mobile solutions, CRM engines, and IoT telemetry architectures. All client confidentiality is strictly honored."
        />

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white shadow-red-sm'
                  : 'bg-dark-surface1 border border-dark-border text-light-muted hover:text-white hover:border-white/20'
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
            <Card
              key={project.id}
              className="flex flex-col justify-between group overflow-hidden border-dark-border hover:border-brand-red/40"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-dark-surface2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface1 via-transparent to-transparent opacity-90" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                      project.status === 'Verified Active'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : 'bg-brand-red/10 text-brand-red-light border-brand-red/30'
                    }`}>
                      {project.status === 'Verified Active' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-light-dim bg-dark-base/80 border border-dark-border backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-brand-red font-semibold block mb-2">
                    {project.client}
                  </span>

                  <h3 className="font-display text-xl font-bold text-light-primary group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-light-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-surface2 text-light-secondary border border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-dark-border/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-light-dim uppercase block">Metric Target</span>
                  <span className="font-mono text-xs font-semibold text-light-primary block mt-0.5">
                    {project.metrics}
                  </span>
                </div>

                <Button
                  to="/contact"
                  variant="outline"
                  size="sm"
                  icon={ArrowUpRight}
                  iconPosition="right"
                  className="text-xs"
                >
                  Consult
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-dark-surface1 border border-dark-border text-center">
          <p className="text-xs text-light-muted font-mono">
            * Note on Client Confidentiality: Select enterprise systems and high-throughput financial architectures are omitted or anonymized in compliance with mutual nondisclosure agreements.
          </p>
        </div>
      </div>
    </div>
  );
};

