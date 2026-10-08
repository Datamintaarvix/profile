import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SolutionCard } from '../components/SolutionCard';
import { solutions } from '../data/siteData';

interface SolutionsViewProps {
  onOpenQuote: (solutionTitle?: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-40 md:pt-48 pb-24 space-y-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />

      {/* Header */}
      <section className="flex flex-col lg:flex-row justify-between lg:items-end gap-10 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
            <span>03 / DIGITAL SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Solutions built for <br className="hidden sm:block" /> different <span className="text-cyan-400">business needs.</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Pre-architected digital foundations and enterprise software frameworks customized to accelerate operational time-to-market.
          </p>
        </div>
        
        <div className="lg:w-72 shrink-0 border-l-2 border-slate-800 pl-6 mb-2">
          <h4 className="text-white font-bold mb-2">From idea to impact</h4>
          <p className="text-xs text-slate-400 leading-relaxed">Modular, scalable and future-ready solutions to help businesses grow faster in the digital world.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
        {solutions.map((solution) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            onExplore={(s) => onOpenQuote(s.title)}
          />
        ))}
      </section>

      {/* Custom Solution Callout */}
      <section className="glass-panel rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[inset_0_0_80px_rgba(34,211,238,0.05)] bg-[#0a0f1d] mt-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 pointer-events-none" />

        <div className="p-8 sm:p-12 md:p-16 flex-1 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-[10px] font-bold font-mono uppercase tracking-widest mb-5">
            <span>BESPOKE ENGINEERING</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a proprietary or <br className="hidden sm:block" /> <span className="text-cyan-400">unique challenge?</span>
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-10 leading-relaxed">
            Our engineering architects work with you to craft custom system architectures, database schemas, and integration pipelines tailored to your exact workflows.
          </p>

          <button
            onClick={() => onOpenQuote('Custom Solution')}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3.5 rounded-full text-sm font-bold tracking-wider flex items-center justify-center sm:justify-start gap-3 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer w-full sm:w-auto"
          >
            <span>Consult an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Abstract Cubes Visual placeholder (CSS art matching the screenshot vibe) */}
        <div className="hidden md:flex w-[40%] relative z-10 items-center justify-center p-10 h-full min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0f1d] z-20 pointer-events-none" />
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Decorative CSS Cubes */}
            <div className="w-40 h-40 border border-cyan-500/40 bg-cyan-500/10 rounded-xl backdrop-blur-sm rotate-12 absolute z-10 shadow-[0_0_50px_rgba(34,211,238,0.2)] right-10"></div>
            <div className="w-32 h-32 border border-purple-500/40 bg-purple-500/10 rounded-xl backdrop-blur-sm -rotate-12 absolute -translate-x-12 translate-y-12 z-0"></div>
            <div className="w-24 h-24 border border-blue-500/40 bg-blue-500/10 rounded-xl backdrop-blur-sm rotate-45 absolute translate-x-4 -translate-y-16 z-20"></div>
            <div className="w-48 h-48 border border-white/5 bg-white/[0.02] rounded-xl backdrop-blur-md -rotate-6 absolute left-0 bottom-0 z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
