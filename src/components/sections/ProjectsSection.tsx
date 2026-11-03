import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { PROJECTS_DATA } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <section id="featured-work" className="relative py-24 sm:py-32 bg-dark-base border-t border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeText="03 // PROVEN ARCHITECTURES"
            title="Featured Work & Systems"
            titleHighlight="In Production."
            description="A curated selection of software applications, IoT platforms, and CRM engines delivered with verified engineering rigor."
          />

          <Button
            to="/work"
            variant="outline"
            size="md"
            showArrow={true}
            className="self-start md:self-end shrink-0"
          >
            View Complete Portfolio
          </Button>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between group overflow-hidden border-dark-border"
            >
              <div>
                {/* Project Image Frame with Reveal Hover */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-dark-surface2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface1 via-transparent to-transparent opacity-90" />
                  
                  {/* Status Tag */}
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

                  {/* Year Tag */}
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

                  <p className="mt-3 text-xs sm:text-sm text-light-muted leading-relaxed line-clamp-3">
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

              {/* Project Card Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-dark-border/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-light-dim uppercase block">Highlight</span>
                  <span className="font-mono text-xs font-semibold text-light-primary block mt-0.5">
                    {project.metrics}
                  </span>
                </div>

                <Button
                  to="/work"
                  variant="ghost"
                  size="sm"
                  icon={ArrowUpRight}
                  iconPosition="right"
                  className="text-xs text-light-secondary group-hover:text-brand-red"
                >
                  Inspect
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

