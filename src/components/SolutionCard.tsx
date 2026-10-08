import React from 'react';
import { ArrowRight, CheckCircle2, Building2, KeyRound, ShoppingBag, Binary, Smartphone, LayoutDashboard, Bot, Workflow, Sparkles } from 'lucide-react';
import { Solution } from '../data/siteData';
import { ImagePlaceholder } from './ImagePlaceholder';

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
    { text: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(34,211,238,0.15)]' },
    { text: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(129,140,248,0.15)]' },
    { text: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'shadow-[inset_2px_0_15px_rgba(59,130,246,0.15)]' },
    { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(52,211,153,0.15)]' },
    { text: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(192,132,252,0.15)]' },
    { text: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'shadow-[inset_2px_0_15px_rgba(245,158,11,0.15)]' },
    { text: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(45,212,191,0.15)]' },
    { text: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20', glow: 'shadow-[inset_2px_0_15px_rgba(96,165,250,0.15)]' },
  ];
  const theme = themes[idx % themes.length];

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
      {/* Floating Number */}
      <div className={`font-black text-xl lg:text-2xl sm:mt-6 tracking-tighter ${theme.text} drop-shadow-md hidden sm:block w-8 shrink-0 text-right`}>
        {solution.number}
      </div>
      <div className={`font-black text-xl tracking-tighter ${theme.text} drop-shadow-md sm:hidden`}>
        {solution.number}
      </div>

      {/* Card Container */}
      <div className={`flex-1 w-full rounded-2xl bg-[#090e1a]/90 backdrop-blur-xl border border-white/5 ${theme.glow} overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-xl hover:-translate-y-1`}>
        
        {/* Main Content Area */}
        <div className="p-6 sm:p-7 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          
          {/* Left: Icon, Title, Description */}
          <div className="flex-1 flex gap-4 w-full">
            {/* Icon Block */}
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${theme.bg} ${theme.border} border`}>
              <div className={`${theme.text}`}>
                {getIcon(solution.icon)}
              </div>
            </div>
            
            {/* Text Block */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight pr-4">
                {solution.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                {solution.description}
              </p>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="w-full md:w-56 lg:w-64 shrink-0 flex flex-col justify-center space-y-3">
            {solution.keyDeliverables.map((deliv, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${theme.text}`} />
                <span className="text-[11px] text-slate-300 font-medium leading-tight">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-6 sm:px-7 py-3 border-t border-white/5 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
            <span>Solution</span>
            <span className="w-px h-3 bg-slate-700 block"></span>
            <span>{solution.number}</span>
          </div>

          <button 
            onClick={() => onExplore && onExplore(solution)}
            className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer transition-colors hover:${theme.bg} hover:border-transparent group/btn`}
          >
            <ArrowRight className={`w-3.5 h-3.5 ${theme.text} transition-transform group-hover/btn:translate-x-0.5`} />
          </button>
        </div>
      </div>
    </div>
  );
};
