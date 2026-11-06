import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface TechnologyStackProps {
  data: CaseStudyData;
}

export const TechnologyStack: React.FC<TechnologyStackProps> = ({ data }) => {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
          <Cpu className="w-4 h-4" />
          <span>Technology & Infrastructure</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Technology Stack & Engineering
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Architected on robust, scalable, modern web frameworks engineered for sub-second performance, high availability, and zero security debt.
        </p>
      </div>

      {/* Tech Stack Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.techStack.map((categoryGroup, cIdx) => (
          <div
            key={cIdx}
            className="p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span>{categoryGroup.category}</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3">
                {categoryGroup.technologies.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.025] border border-slate-200/60 dark:border-white/5 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                        {tech.role}
                      </p>
                    </div>

                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>Production Codebase Audited</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

