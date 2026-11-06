import React from 'react';
import { Sparkles } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';
import { DynamicIcon } from './DynamicIcon';

interface ProjectFeaturesProps {
  data: CaseStudyData;
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ data }) => {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
          <Sparkles className="w-4 h-4" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Core Features & Capabilities
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Engineered to solve real business challenges, streamline digital workflows, and provide an extraordinary user journey.
        </p>
      </div>

      {/* Feature Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-brand/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-brand flex items-center justify-center group-hover:scale-105 transition-transform">
                  <DynamicIcon name={feature.iconName} className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                  {feature.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-brand font-semibold">
              <span>Production Validated</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

