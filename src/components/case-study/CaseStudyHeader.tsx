import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface CaseStudyHeaderProps {
  data: CaseStudyData;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section className="space-y-8">
      {/* Top Navigation Row: Back to Portfolio & Quick Links */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <button
          type="button"
          onClick={() => navigate('/portfolio')}
          className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-brand transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-slate-300">
            CASE STUDY <strong className="text-cyan-600 dark:text-cyan-brand">{data.caseStudyNumber}</strong> OF {data.totalCount}
          </span>
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-all font-bold"
          >
            <span>Live Experience</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="space-y-6">
        {/* Category & Verified Production Deployment Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-slate-900 text-white dark:bg-white/10 dark:text-cyan-300 border border-black/10 dark:border-white/15">
            {data.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{data.deploymentStatus}</span>
          </span>
        </div>

        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          {data.title}
        </h1>

        {/* Professional Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed font-normal">
          {data.shortDesc}
        </p>

        {/* Highlights & Scope Badges */}
        <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand shrink-0" />
            <span className="font-semibold">{data.highlights}</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Scope: {data.deliveryClassification}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

