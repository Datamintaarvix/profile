import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { Project } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ProjectCardProps {
  project: Project;
  onView?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onView,
}) => {
  return (
    <div
      onClick={() => onView && onView(project)}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      {/* Image Container with Glass Overlay */}
      <div className="relative p-3 pb-0">
        <div className="overflow-hidden rounded-xl">
          <ImagePlaceholder
            label={`PROJECT ${project.number}`}
            sublabel={project.title}
            aspectRatio="video"
            variant="project"
            className="transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase bg-white/90 dark:bg-navy-950/85 backdrop-blur-md border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-brand shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            {project.year} • Project {project.number}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-cyan-mint bg-emerald-50 dark:bg-cyan-mint/10 border border-emerald-200 dark:border-cyan-mint/20 px-2.5 py-0.5 rounded-full font-semibold">
            <TrendingUp className="w-3 h-3" />
            <span>{project.metrics}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
            Case Study & Architecture
          </span>
          <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-brand group-hover:bg-cyan-600 dark:group-hover:bg-cyan-brand group-hover:text-white dark:group-hover:text-navy-950 transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
