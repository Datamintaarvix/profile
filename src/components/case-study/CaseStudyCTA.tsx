import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';

export const CaseStudyCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-[#030712] border-2 border-cyan-500/30 dark:border-cyan-brand/30 p-8 sm:p-12 md:p-16 text-center shadow-2xl space-y-8">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>START YOUR PRODUCTION BUILD</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Want a Similar Platform Engineered for Your Business?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
          Tell us about your business requirements and operational workflows. Our team will help you define the right digital solution, establish the technical architecture, and build a scalable platform.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
        >
          <span>Contact Us / Request Scoping</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold tracking-wider uppercase border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>Speak with Engineering</span>
        </button>
      </div>

      <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Enterprise SLA Guaranteed</span>
        </span>
        <span>•</span>
        <span>Dedicated Architecture Team</span>
        <span>•</span>
        <span>Zero-Vendor Lock-in</span>
      </div>
    </section>
  );
};

