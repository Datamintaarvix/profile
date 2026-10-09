import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects, Project } from '../data/siteData';
import { ArrowRight, Sparkles, Code2, ChevronDown, FileText } from 'lucide-react';

interface ProjectsViewProps {
  onOpenQuote: (serviceCategory?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuote, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'Web Development', 'Software Development', 'E-Commerce', 'AI & Automation', 'Mobile Development', 'Web Application'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const getProjectImage = (id: string) => {
    switch (id) {
      case 'project-01': return '/project/businessdashboardworkspace.png';
      case 'project-02': return '/project/moderncorporateworkspacewebsiteshowcase.png';
      case 'project-03': return '/project/onlinestorefulfillmentworkspace.png';
      case 'project-04': return '/project/ai.png';
      case 'project-05': return '/project/Industrialfieldworkdeskbytheplant.png';
      case 'project-06': return '/project/moderncustomerportalworkspace.png';
      default: return '/project/businessdashboardworkspace.png';
    }
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-left w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-brand/10 border border-cyan-brand/30 text-cyan-brand text-xs font-mono uppercase tracking-widest mb-4">
            <span>PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Selected work.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Case studies in engineering scalable web platforms, high-throughput enterprise backends, and practical AI tools.
          </p>
          <p className="mt-3 text-sm text-cyan-brand font-mono tracking-wide">
            * Please note: The following are only curated samples. Many of our enterprise projects are protected under strict NDAs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-8 overflow-x-auto flex-nowrap hide-scrollbar pb-2 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-cyan-brand text-navy-950 font-bold shadow-glow-cyan'
                  : 'bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Horizontal Carousel */}
      <section className="mt-12 mb-32 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 sm:px-6 lg:px-8 gap-6 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group snap-center shrink-0 w-[85vw] sm:w-[450px] lg:w-[550px] rounded-[2rem] overflow-hidden glass-panel border border-white/10 flex flex-col relative"
            >
              {/* Image / Header Area */}
              <div className="relative h-48 sm:h-64 w-full bg-navy-950 overflow-hidden shrink-0">
                {/* Project Image */}
                <img 
                  src={getProjectImage(project.id)} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Background abstract effect for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Large watermark number */}
                <div className="absolute -right-8 -bottom-8 text-[150px] font-black font-mono text-white/5 leading-none z-0 rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                  {project.number}
                </div>

                {/* Floating Badges */}
                <div className="absolute top-5 left-5 z-20 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                    {project.category}
                  </span>
                </div>

                {/* Project Header Text overlayed on image area */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div className="flex items-center gap-2 text-cyan-brand text-[10px] sm:text-xs font-mono font-semibold mb-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    PROJ {project.number}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1 bg-white/[0.02]">
                <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
                  {project.shortDesc}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 max-w-sm">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-1 rounded bg-white/[0.03] text-slate-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Call to action & Metrics */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-cyan-mint bg-cyan-mint/10 border border-cyan-mint/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full hidden sm:flex">
                      <span>{project.metrics}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator hint */}
        <div className="flex justify-center items-center gap-2 mt-4 text-slate-500 text-xs font-mono animate-pulse">
          <ArrowRight className="w-3 h-3 rotate-180" />
          <span>Scroll to explore</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </section>

      {/* Project CTA Callout */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 text-center max-w-3xl mx-auto space-y-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to build your next digital platform?
        </h3>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          We bring senior engineering discipline, transparent progress updates, and reliable delivery to every engagement.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            <span>Start a Project Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
