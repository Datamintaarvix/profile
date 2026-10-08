import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PackagePlan } from '../data/siteData';

interface PackageCardProps {
  plan: PackagePlan;
  onSelectPlan: (planName: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  plan,
  onSelectPlan,
}) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`group relative h-full rounded-[2rem] flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 ${
        isPopular 
          ? 'bg-slate-900/60 backdrop-blur-2xl border-2 border-cyan-500/50 hover:border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.3)]' 
          : 'bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
      }`}
    >
      {/* Dynamic Hover Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Featured Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 rounded-full" />
            <span className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg">
              Most Selected
            </span>
          </div>
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Package Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-extrabold tracking-tight ${isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400' : 'text-white'}`}>
              {plan.name}
            </h3>
            <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
              Tier {['Starter', 'Growth', 'Scale', 'Enterprise'].indexOf(plan.name) + 1 || '*'}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed min-h-[44px] font-medium">
            {plan.tagline}
          </p>
        </div>

        {/* Pricing Notice */}
        <div className={`mb-8 p-5 rounded-2xl border ${isPopular ? 'bg-cyan-950/30 border-cyan-500/20' : 'bg-white/[0.02] border-white/5'}`}>
          <div className="text-3xl font-black text-white tracking-tight flex items-baseline gap-2 drop-shadow-sm">
            <span>{plan.priceNote}</span>
          </div>
          <span className="text-xs text-slate-500 block mt-2 font-medium">
            Tailored to exact architecture & scope
          </span>
        </div>

        {/* Ideal for note */}
        <div className="mb-8 pb-8 border-b border-white/10 text-sm">
          <span className="font-mono uppercase text-slate-500 text-[10px] font-bold tracking-widest block mb-2">
            Best suited for
          </span>
          <span className="text-slate-300 font-medium leading-relaxed block">{plan.idealFor}</span>
        </div>

        {/* Features Checklist */}
        <div className="space-y-4 mb-10 flex-1">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-4">
            Core Inclusions
          </span>
          <ul className="space-y-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                <div className={`mt-0.5 rounded-full p-1 shrink-0 ${isPopular ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.3)]' : 'bg-white/10 text-cyan-400'}`}>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="leading-snug font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Package Action Button */}
      <button
        onClick={() => onSelectPlan(plan.name)}
        className={`relative z-10 w-full py-4 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 cursor-pointer ${
          isPopular
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02]'
            : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-300'
        }`}
      >
        <span className="relative z-10">{plan.ctaText}</span>
        <ArrowRight className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isPopular ? 'group-hover:translate-x-1.5' : 'group-hover:translate-x-1'}`} />
        
        {/* Shine effect on popular button */}
        {isPopular && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </button>
    </div>
  );
};
