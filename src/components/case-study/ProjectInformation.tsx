import React from 'react';
import { Info, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectInformationProps {
  data: CaseStudyData;
}

export const ProjectInformation: React.FC<ProjectInformationProps> = ({ data }) => {
  const info = data.projectInfo;

  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-200/90 dark:border-white/10 shadow-xl text-white space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
          <Info className="w-4 h-4" />
          <span>Project Specifications & Metadata</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>Verified Engagement Overview</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
        {/* Project Name */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Project Name
          </span>
          <span className="font-bold text-white text-base">{info.projectName}</span>
        </div>

        {/* Industry */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Industry
          </span>
          <span className="font-semibold text-slate-200">{info.industry}</span>
        </div>

        {/* Category */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Category
          </span>
          <span className="font-semibold text-slate-200">{info.projectCategory}</span>
        </div>

        {/* Website URL */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Live Website URL
          </span>
          <a
            href={info.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold font-mono transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="truncate max-w-[180px]">{new URL(info.websiteUrl).hostname}</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>

        {/* Services Delivered */}
        <div className="space-y-1.5 sm:col-span-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Services Delivered
          </span>
          <div className="flex flex-wrap gap-1.5">
            {info.servicesDelivered.map((srv, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 text-xs font-mono border border-white/10"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Engagement Status
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            {info.projectStatus}
          </span>
        </div>

        {/* Core Technologies */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
            Core Technologies
          </span>
          <div className="flex flex-wrap gap-1">
            {info.technologiesUsed.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[11px] font-mono border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

