import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { LiquidCard } from '../common/LiquidCard';
import { PROJECTS_DATA } from '../../data/projects';

export const ProjectsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalProjects = PROJECTS_DATA.length;

  const scrollToIndex = (index: number) => {
    const targetIndex = Math.max(0, Math.min(totalProjects - 1, index));
    setActiveIndex(targetIndex);

    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 450;
      scrollContainerRef.current.scrollTo({
        left: targetIndex * (cardWidth + 32),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => scrollToIndex(activeIndex + 1);
  const handlePrev = () => scrollToIndex(activeIndex - 1);

  return (
    <section id="featured-work" className="relative py-28 sm:py-36 bg-ivory border-t border-softgrey overflow-hidden canvas-soft-lines">
      {/* Background ambient liquid glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-red/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Horizontal Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badgeText="05 // FEATURED PORTFOLIO"
            title="Engineered Systems:"
            titleHighlight="Horizontal Showcase."
            description="Explore our flagship software architectures. Swipe, scroll, or navigate through verified enterprise web apps, IoT telemetries, and CRM engines."
          />

          {/* Liquid Slider Controls */}
          <div className="flex items-center gap-4 self-start md:self-end shrink-0">
            {/* Index Counter Pill */}
            <div className="liquid-glass-chip px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-mono font-bold text-graphite shadow-liquid-sm">
              <span className="text-brand-red">0{activeIndex + 1}</span>
              <span className="text-body-muted">/</span>
              <span>0{totalProjects}</span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="w-11 h-11 rounded-2xl liquid-glass-chip hover:bg-white flex items-center justify-center text-graphite hover:text-brand-red transition-all shadow-liquid-sm disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous Project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === totalProjects - 1}
                className="w-11 h-11 rounded-2xl liquid-glass-chip hover:bg-white flex items-center justify-center text-graphite hover:text-brand-red transition-all shadow-liquid-sm disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Next Project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Liquid Progress Bar */}
        <div className="w-full h-1 bg-softgrey rounded-full mb-10 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-brand-red to-brand-red-light transition-all duration-500 ease-out"
            style={{ width: `${((activeIndex + 1) / totalProjects) * 100}%` }}
          />
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="min-w-[320px] sm:min-w-[440px] lg:min-w-[480px] shrink-0 snap-start"
            >
              <LiquidCard className="h-full flex flex-col justify-between group overflow-hidden border border-softgrey hover:border-brand-red/40 shadow-liquid-sm hover:shadow-liquid-md transition-all duration-300">
                <div>
                  {/* Project Image Frame */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-softgrey">
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

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-graphite group-hover:text-brand-red transition-colors">
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
                    <span className="text-[10px] font-mono text-body-muted uppercase block">Engineering Target</span>
                    <span className="font-mono text-xs font-bold text-graphite block mt-0.5">
                      {project.metrics}
                    </span>
                  </div>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl liquid-glass-chip hover:bg-white text-xs font-mono font-bold text-graphite hover:text-brand-red transition-all"
                  >
                    <span>Inspect System</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  </Link>
                </div>
              </LiquidCard>
            </div>
          ))}
        </div>

        {/* Bottom Full Directory Link */}
        <div className="mt-8 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-graphite hover:text-brand-red transition-colors group"
          >
            <span>View All Enterprise Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-red" />
          </Link>
        </div>

      </div>
    </section>
  );
};
