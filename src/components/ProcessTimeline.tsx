import React, { useState } from 'react';
import { processSteps } from '../data/siteData';
import { CheckCircle } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      {/* Desktop Horizontal / Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {processSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.number}
              onMouseEnter={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'glass-card-featured border-cyan-500/40 dark:border-cyan-brand/40 shadow-md'
                  : 'glass-card hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {/* Top Row: Glowing Node & Number */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    {/* Glowing Node */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 rounded-full ${isSelected ? 'bg-cyan-600 dark:bg-cyan-brand shadow-sm animate-pulse' : 'bg-slate-300 dark:bg-slate-600'}`} />
                      {isSelected && (
                        <div className="absolute w-6 h-6 rounded-full bg-cyan-500/20 dark:bg-cyan-brand/20 animate-ping" />
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-cyan-700 dark:text-cyan-brand">
                      PHASE {step.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    Step {idx + 1}/6
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverable badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs">
                <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-600 dark:text-cyan-brand' : 'text-slate-400 dark:text-slate-500'}`} />
                <span className="text-slate-700 dark:text-slate-300 font-mono text-[11px] truncate">
                  {step.deliverable}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
