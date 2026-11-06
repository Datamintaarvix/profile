import React from 'react';
import { Layers } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';
import { DynamicIcon } from './DynamicIcon';

interface ProjectDeliverablesProps {
  data: CaseStudyData;
}

export const ProjectDeliverables: React.FC<ProjectDeliverablesProps> = ({ data }) => {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
          <Layers className="w-4 h-4" />
          <span>Project Deliverables</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Complete Project Deliverables
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Explore the complete breakdown of interfaces, functional modules, digital experiences, and engineering capabilities delivered as part of this project.
        </p>
      </div>

      {/* Deliverable Groups */}
      <div className="space-y-8">
        {data.deliverableGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            {/* Group Label */}
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/5 pb-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>{group.groupName}</span>
              </h3>
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                {group.groupTag}
              </span>
            </div>

            {/* 2-Column Responsive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group p-5 rounded-2xl bg-white dark:bg-white/[0.025] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
                >
                  {/* Cyan Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-brand flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={item.iconName} className="w-5 h-5" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

