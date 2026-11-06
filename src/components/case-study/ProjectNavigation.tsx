import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectNavigationProps {
  data: CaseStudyData;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ data }) => {
  const navigate = useNavigate();
  const nav = data.navigation;

  return (
    <section className="pt-6 border-t border-slate-200/80 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Previous Project Card */}
        <button
          type="button"
          onClick={() => navigate(`/portfolio/${nav.prevSlug}`)}
          className="group p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all text-left flex items-center gap-4 shadow-sm hover:shadow-md cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-all shrink-0">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              PREVIOUS CASE STUDY // {nav.prevNumber}
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors truncate block">
              {nav.prevTitle}
            </span>
          </div>
        </button>

        {/* Center: View Full Portfolio Button */}
        <button
          type="button"
          onClick={() => navigate('/portfolio')}
          className="p-4 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-700 dark:text-slate-200 cursor-pointer shadow-sm"
        >
          <Grid className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />
          <span>View Full Portfolio Directory</span>
        </button>

        {/* Next Project Card */}
        <button
          type="button"
          onClick={() => navigate(`/portfolio/${nav.nextSlug}`)}
          className="group p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all text-right flex items-center justify-end gap-4 shadow-sm hover:shadow-md cursor-pointer"
        >
          <div className="min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              NEXT CASE STUDY // {nav.nextNumber}
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors truncate block">
              {nav.nextTitle}
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-all shrink-0">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>
    </section>
  );
};

