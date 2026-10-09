import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SolutionCard } from '../components/SolutionCard';
import { solutions } from '../data/siteData';

interface SolutionsViewProps {
  onOpenQuote: (solutionTitle?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onOpenQuote, onNavigate }) => {
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
            onExplore={() => onNavigate('contact')}
          />
        ))}
      </section>

      {/* Custom Solution Callout */}
      <section className="glass-panel rounded-3xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-[inset_0_0_80px_rgba(34,211,238,0.05)] bg-[#0a0f1d] mt-12 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10 pointer-events-none" />

        <div className="p-8 sm:p-12 md:p-16 relative z-10 text-left md:max-w-[65%] w-full">
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
            onClick={() => onNavigate('contact')}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3.5 rounded-full text-sm font-bold tracking-wider flex items-center justify-center sm:justify-start gap-3 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-pointer w-full sm:w-auto"
          >
            <span>Consult an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Custom Visual Image with Seamless Fade */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[55%] z-0 pointer-events-none overflow-hidden rounded-r-3xl items-center justify-end">
          {/* Left edge fade to prevent any hard lines */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0a0f1d] to-transparent z-20" />
          
          <img 
            src="/solution/fa.png" 
            alt="Bespoke Engineering Challenge" 
            className="relative z-10 w-full h-[120%] object-contain object-right opacity-90 mix-blend-screen translate-x-8" 
          />
        </div>
      </section>
    </div>
  );
};
