import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ExternalLink, 
  Globe, 
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';

interface ProjectPreviewProps {
  data: CaseStudyData;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ data }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [key, setKey] = useState<number>(0);
  const [showScreenshotFallback, setShowScreenshotFallback] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleReload = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  // Device container styling based on selection
  const getContainerWidth = () => {
    switch (device) {
      case 'mobile': return 'max-w-[400px] aspect-[9/18]';
      case 'tablet': return 'max-w-[768px] aspect-[4/3]';
      case 'desktop':
      default: return 'w-full aspect-[16/10]';
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-brand">
            <Globe className="w-4 h-4" />
            <span>Interactive Live Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {data.previewTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {data.previewDescription}
          </p>
        </div>

        {/* External Link Direct Button */}
        <a
          href={data.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-600 dark:bg-cyan-brand text-white dark:text-navy-950 text-xs font-mono font-bold tracking-wider uppercase hover:shadow-lg hover:shadow-cyan-500/25 transition-all shrink-0 cursor-pointer"
        >
          <span>Open Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Interactive Browser Chrome Shell */}
      <div className="rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 dark:border-white/15 shadow-2xl flex flex-col">
        {/* Browser Top Navigation Bar */}
        <div className="p-3 sm:p-4 bg-slate-950 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          {/* Mac-style traffic lights & URL pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 max-w-xs md:max-w-md truncate">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{data.liveUrl}</span>
            </div>
          </div>

          {/* Device Switcher Controls */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-mono text-xs transition-all cursor-pointer ${
                device === 'desktop'
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View (100% width)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setDevice('tablet')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-mono text-xs transition-all cursor-pointer ${
                device === 'tablet'
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View (768px width)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              type="button"
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-mono text-xs transition-all cursor-pointer ${
                device === 'mobile'
                  ? 'bg-cyan-500 text-navy-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View (390px width)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Action Tools: Reload & Mode Switch */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowScreenshotFallback(!showScreenshotFallback)}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 border border-white/10 cursor-pointer"
              title="Toggle Live Iframe / Static Capture"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">{showScreenshotFallback ? 'Switch to Live Iframe' : 'View Static Capture'}</span>
            </button>

            <button
              type="button"
              onClick={handleReload}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
              title="Reload Preview"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
              title="Open in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Viewport Staging Area */}
        <div className="relative bg-[#020617] p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-[500px]">
          <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-white/15 ${getContainerWidth()} mx-auto bg-black`}>
            
            {showScreenshotFallback ? (
              /* Fallback Screenshot Mode */
              <div className="relative w-full h-full flex flex-col">
                <img
                  src={device === 'mobile' ? (data.gallery.find(g => g.category === 'Mobile First' || g.category === 'Mobile Touch')?.image || data.fallbackImage) : data.fallbackImage}
                  alt={`${data.title} Screenshot View`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/20">
                  STATIC CAPTURE MODE
                </div>
              </div>
            ) : (
              /* Live Embed Iframe */
              <div className="relative w-full h-full min-h-[550px] sm:min-h-[650px] bg-white">
                {isLoading && (
                  <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center gap-3 z-10 text-white font-mono text-xs">
                    <RotateCw className="w-6 h-6 animate-spin text-cyan-400" />
                    <span>Connecting to {new URL(data.liveUrl).hostname}...</span>
                  </div>
                )}
                <iframe
                  key={key}
                  src={data.liveUrl}
                  title={`${data.title} Live Interactive Experience`}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-full min-h-[550px] sm:min-h-[650px] border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 py-2 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>Interactive Viewport: {device.toUpperCase()} MODE</span>
          </span>
          <span className="hidden sm:inline">If iframe interactions are restricted by browser policy, use the "Open Live Site" button above</span>
        </div>
      </div>
    </section>
  );
};

