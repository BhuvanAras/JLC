import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PROJECTS_DATA } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <section id="featured-work" className="relative py-24 sm:py-32 bg-ivory border-t border-softgrey overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeText="05 // PROVEN ARCHITECTURES"
            title="Featured Systems"
            titleHighlight="In Active Production."
            description="A curated selection of software applications, IoT platforms, and CRM engines delivered with verified engineering rigor."
          />

          <Link
            to="/work"
            className="self-start md:self-end shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold uppercase tracking-wider text-graphite hover:text-brand-red shadow-liquid-sm hover:shadow-liquid-md transition-all"
          >
            <span>Complete Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="liquid-glass-card rounded-3xl flex flex-col justify-between group overflow-hidden border border-softgrey hover:border-brand-red/40 shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-softgrey">
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

                  {/* Year Tag */}
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

              {/* Project Card Footer */}
              <div className="p-7 pt-0 border-t border-softgrey/60 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-body-muted uppercase block">Highlight</span>
                  <span className="font-mono text-xs font-bold text-graphite block mt-0.5">
                    {project.metrics}
                  </span>
                </div>

                <Link
                  to="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite hover:text-brand-red transition-colors"
                >
                  <span>Inspect Case</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
