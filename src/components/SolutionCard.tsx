import React from 'react';
import { ArrowRight, CheckCircle2, Building2, KeyRound, ShoppingBag, Binary, Smartphone, LayoutDashboard, Bot, Workflow, Sparkles } from 'lucide-react';
import { Solution } from '../data/siteData';

interface SolutionCardProps {
  solution: Solution;
  onExplore?: (solution: Solution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onExplore,
}) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-current" };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'KeyRound': return <KeyRound {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'LayoutDashboard': return <LayoutDashboard {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const idx = parseInt(solution.number) - 1;
  const themes = [
    { text: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', hoverBorder: 'hover:border-cyan-500/40' },
    { text: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20', hoverBorder: 'hover:border-indigo-500/40' },
    { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', hoverBorder: 'hover:border-blue-500/40' },
    { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', hoverBorder: 'hover:border-emerald-500/40' },
    { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20', hoverBorder: 'hover:border-purple-500/40' },
    { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', hoverBorder: 'hover:border-amber-500/40' },
    { text: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20', hoverBorder: 'hover:border-teal-500/40' },
    { text: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/20', hoverBorder: 'hover:border-sky-500/40' },
  ];
  const theme = themes[idx % themes.length];

  return (
    <div 
      onClick={() => onExplore && onExplore(solution)}
      className={`w-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 ${theme.hoverBorder} hover:bg-white/[0.05] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl group relative overflow-hidden cursor-pointer`}
    >
      {/* Top subtle glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      <div>
        {/* Card Header: Icon & Badges */}
        <div className="flex items-center justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${theme.bg} ${theme.border} border ${theme.text} transition-transform duration-300 group-hover:scale-105`}>
            {getIcon(solution.icon)}
          </div>

          <div className="flex items-center gap-2">
            {solution.badge && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                {solution.badge}
              </span>
            )}
            <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest ${theme.text} ${theme.bg} border ${theme.border}`}>
              {solution.number}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5 leading-snug">
          {solution.title}
        </h3>

        <p className="text-sm text-slate-300/90 leading-relaxed mb-5">
          {solution.description}
        </p>

        {/* Target Audience Pill */}
        {solution.targetAudience && (
          <div className="mb-5 px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-xs text-slate-400 leading-relaxed block">
              <span className="text-slate-300 font-semibold font-mono uppercase text-[10px] tracking-wider block sm:inline sm:mr-1">Ideal for:</span>
              {solution.targetAudience}
            </span>
          </div>
        )}

        {/* Deliverables List */}
        <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Deliverables:</p>
          {solution.keyDeliverables.map((deliv, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${theme.text}`} />
              <span className="text-xs text-slate-300 font-medium leading-relaxed">{deliv}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
        <span className="text-xs font-mono text-slate-400 tracking-wider">Enterprise Architecture</span>
        <div className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${theme.text} group-hover:text-white transition-colors`}>
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
