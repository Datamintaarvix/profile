import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'tall' | 'custom';
  className?: string;
  heightClass?: string;
  badge?: string;
  variant?: 'hero' | 'project' | 'card' | 'feature' | 'subtle';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'IMAGE PLACEHOLDER',
  sublabel = 'Replace with company image',
  aspectRatio = 'video',
  className = '',
  heightClass = '',
  badge,
  variant = 'card',
}) => {
  let aspectStyle = 'aspect-[16/10]';
  if (aspectRatio === 'square') aspectStyle = 'aspect-square';
  else if (aspectRatio === 'wide') aspectStyle = 'aspect-[21/9]';
  else if (aspectRatio === 'tall') aspectStyle = 'aspect-[3/4]';
  else if (aspectRatio === 'video') aspectStyle = 'aspect-video';
  else if (aspectRatio === 'custom') aspectStyle = '';

  const isHero = variant === 'hero';

  return (
    <div
      className={`relative group overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 transition-all duration-300 ${
        isHero
          ? 'bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/50 dark:from-navy-850/80 dark:via-navy-800/60 dark:to-navy-900/90 shadow-xl backdrop-blur-xl border-cyan-500/30 dark:border-cyan-brand/20'
          : 'bg-slate-100/80 dark:bg-white/[0.025] hover:bg-slate-200/80 dark:hover:bg-white/[0.045] backdrop-blur-md'
      } ${aspectStyle} ${heightClass} ${className}`}
    >
      {/* Subtle tech grid background inside placeholder */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative ambient light within the placeholder */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-brand/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 dark:group-hover:bg-cyan-brand/15 transition-all duration-500" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 dark:bg-electric-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/15 dark:group-hover:bg-electric-500/15 transition-all duration-500" />

      {/* Corner Tech Marks */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-300 dark:border-white/25 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-300 dark:border-white/25 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-300 dark:border-white/25 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-300 dark:border-white/25 pointer-events-none" />

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-white/90 dark:bg-navy-900/80 border border-slate-200 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand backdrop-blur-md shadow-sm">
            {badge}
          </span>
        </div>
      )}

      {/* Center Placeholder Box */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-3 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-brand group-hover:border-cyan-500/30 dark:group-hover:border-cyan-brand/30 transition-all duration-300 group-hover:scale-105 shadow-sm">
          <ImageIcon className="w-5 h-5 transition-transform duration-300" />
        </div>

        <div className="space-y-1 max-w-[260px]">
          <div className="text-[12px] font-mono tracking-widest font-semibold uppercase text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            [ {label} ]
          </div>
          <div className="text-[11px] text-slate-500 font-sans tracking-tight">
            {sublabel}
          </div>
        </div>
      </div>
    </div>
  );
};
