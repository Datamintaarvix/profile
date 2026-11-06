import React from 'react';
import { Maximize2, ExternalLink, Code2 } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectHeroImageProps {
  data: CaseStudyData;
  onExpand: (url: string, title: string, subtitle?: string) => void;
}

export const ProjectHeroImage: React.FC<ProjectHeroImageProps> = ({ data, onExpand }) => {
  return (
    <section className="space-y-3">
      {/* Visual Frame Container */}
      <div
        onClick={() => onExpand(data.heroImage, data.title, data.heroCaption)}
        className="group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200/90 dark:border-white/15 p-2 sm:p-4 shadow-2xl hover:border-cyan-500/60 dark:hover:border-cyan-brand/60 transition-all duration-300 cursor-pointer"
        title="Click to view full-resolution production screenshot"
      >
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center aspect-[16/10]">
          <img
            src={data.heroImage}
            alt={`${data.title} Production Interface`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

          {/* Interactive Zoom Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono font-bold flex items-center gap-2 shadow-2xl border border-white/20">
              <Maximize2 className="w-4 h-4 text-cyan-400" />
              <span>Expand Production Screenshot</span>
            </div>
          </div>

          {/* Top Left Status Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-sm">
              PRODUCTION INTERFACE // {data.caseStudyNumber}
            </span>
          </div>

          {/* Top Right Live Preview Quick Link */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-navy-950 transition-all flex items-center justify-center border border-white/20 shadow-sm"
              title="Open Live Website in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Left Project Caption & Bottom Right Project Number */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-white">
            <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold truncate max-w-xs sm:max-w-md">{data.heroCaption}</span>
            </div>
            <div className="bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 font-bold text-cyan-300">
              PROJ // {data.caseStudyNumber}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
        <span>Verified live capture from {new URL(data.liveUrl).hostname}</span>
        <span>Click image to zoom</span>
      </div>
    </section>
  );
};

