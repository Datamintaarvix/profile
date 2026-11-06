import React from 'react';
import { Eye, Maximize2, LayoutGrid } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectGalleryProps {
  data: CaseStudyData;
  onExpand: (url: string, title: string, subtitle?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ data, onExpand }) => {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
          <LayoutGrid className="w-4 h-4" />
          <span>Visual Project Gallery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Inside the Project
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          High-resolution captures showcasing the complete design system across desktop views, mobile viewports, responsive layouts, and interactive modules.
        </p>
      </div>

      {/* 2 to 3 Column Responsive Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.gallery.map((item) => (
          <div
            key={item.id}
            onClick={() => onExpand(item.image, item.title, `${item.category} // ${item.viewportBadge}`)}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Frame */}
            <div className="relative aspect-[16/10] bg-slate-100 dark:bg-navy-950 overflow-hidden flex items-center justify-center p-2 sm:p-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-[1.02] transition-transform duration-500 shadow-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Viewport & Category Pill */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
                <span className="hidden sm:inline px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider bg-cyan-600/80 backdrop-blur-md text-white">
                  {item.viewportBadge}
                </span>
              </div>

              {/* Expand Trigger Button */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-cyan-300" />
              </div>
            </div>

            {/* Caption & Description */}
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Click to inspect full view</span>
                <Eye className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

