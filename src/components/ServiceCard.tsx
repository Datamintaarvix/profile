import React from 'react';
import { ArrowUpRight, Globe, Code2, Palette, Smartphone, ShoppingBag, Cpu, Cloud, Layers, Megaphone } from 'lucide-react';
import { Service } from '../data/siteData';

interface ServiceCardProps {
  service: Service;
  onSelect?: (service: Service) => void;
  onAction?: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onAction,
}) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-600 dark:text-cyan-brand transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Megaphone': return <Megaphone {...props} />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className="group relative p-7 rounded-2xl glass-card flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Subtle hover gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-blue-500/[0.05] dark:from-cyan-brand/[0.04] dark:to-electric-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Top Row: Number & Arrow */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-cyan-500/40 dark:group-hover:border-cyan-brand/40 group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-brand/10 transition-colors duration-300">
              {getIcon(service.icon)}
            </div>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
              {service.number}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-brand group-hover:border-cyan-500/40 dark:group-hover:border-cyan-brand/40 group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-brand/10 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors duration-200 mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>
      </div>

      {/* Card Footer: Features preview & Learn More */}
      <div className="pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs">
        <span className="font-mono text-slate-500 dark:text-slate-500">
          {service.category}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onAction) onAction(service.title);
            else if (onSelect) onSelect(service);
          }}
          className="text-cyan-600 dark:text-cyan-brand font-semibold group-hover:text-cyan-700 dark:group-hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
