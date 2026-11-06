import React from 'react';
import { FileCode2, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectDocumentationProps {
  data: CaseStudyData;
}

export const ProjectDocumentation: React.FC<ProjectDocumentationProps> = ({ data }) => {
  const specs = data.scopeOfWork.technicalSpecifications;

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="space-y-2 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
          <FileCode2 className="w-4 h-4" />
          <span>Scope & Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Scope of Work & Technical Documentation
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Detailed breakdown of delivered design artifacts, production software components, and validated technical architecture specifications.
        </p>
      </div>

      {/* Two Large Side-by-Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT CARD: Delivered Artifacts & Assets */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-brand flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Delivered Artifacts & Assets
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Verified Production Assets
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                100% COMPLETE
              </span>
            </div>

            <ul className="space-y-3 pt-2">
              {data.scopeOfWork.artifacts.map((artifact, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-brand shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{artifact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Handover Documentation</span>
            <span className="text-cyan-600 dark:text-cyan-brand font-bold">Client Archive Verified</span>
          </div>
        </div>

        {/* RIGHT CARD: System Architecture & Technical Specifications */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    System Architecture & Tech Specs
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Engineered Production Stack
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20 font-bold">
                VALIDATED
              </span>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                  Frontend Architecture
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{specs.frontend}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                  Styling & UI Tokens
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{specs.stylingEngine}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                  Routing & Deep Links
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{specs.routingArchitecture}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                  Hosting & Edge Topology
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{specs.hostingTopology}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                  Performance & Core Web Vitals
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{specs.performanceAndSEO}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Security Protocols Active</span>
            </span>
            <span className="text-purple-600 dark:text-purple-300 font-bold">Zero Known Vulnerabilities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

