import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { services, type Service } from '../data/siteData';

interface ServicesCoverflowProps {
  onSelectService?: (service: Service) => void;
  onExplore?: (serviceTitle: string) => void;
}

export const ServicesCoverflow: React.FC<ServicesCoverflowProps> = ({
  onSelectService,
  onExplore,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = services.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) nextSlide();
    else if (diff < -40) prevSlide();
    setTouchStart(null);
  };

  const getServiceBadge = (service: Service) => {
    switch (service.number) {
      case '01': return '01 • CORE SERVICE';
      case '02': return '02 • ENTERPRISE';
      case '03': return '03 • CREATIVE & UI';
      case '04': return '04 • MOBILE APPS';
      case '05': return '05 • E-COMMERCE';
      case '06': return '06 • AI & AUTOMATION';
      case '07': return '07 • CLOUD INFRA';
      case '08': return '08 • SPECIALIZED';
      default: return `${service.number} • SERVICE`;
    }
  };

  return (
    <div className="relative w-full py-6 select-none overflow-hidden">
      {/* Ambient Backdrop Light behind active card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-blue-500/15 via-cyan-400/20 to-teal-400/15 dark:from-electric-500/20 dark:via-cyan-brand/25 dark:to-cyan-mint/20 rounded-full blur-[130px] pointer-events-none" />

      {/* 3D Curved Coverflow Stage */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative h-[580px] sm:h-[620px] md:h-[640px] w-full flex items-center justify-center overflow-visible"
        style={{ perspective: '1400px' }}
      >
        {services.map((service, index) => {
          let offset = index - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          // Render up to 5 visible items (-2, -1, 0, 1, 2)
          if (absOffset > 2) return null;

          // 3D positioning calculations
          const rotateY = offset * -26;
          const translateX = offset * 320; // card spacing
          const translateZ = -absOffset * 130;
          const scale = isCenter ? 1.05 : 0.88 - absOffset * 0.07;
          const opacity = isCenter ? 1 : Math.max(0.3, 0.72 - absOffset * 0.22);
          const zIndex = 30 - absOffset * 10;

          return (
            <div
              key={service.id}
              onClick={() => {
                if (!isCenter) setActiveIndex(index);
              }}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                transition: 'all 500ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className={`absolute w-[310px] sm:w-[350px] md:w-[380px] h-[520px] sm:h-[550px] md:h-[570px] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all ${
                isCenter
                  ? 'bg-white/95 dark:bg-[#081122]/90 border border-cyan-500/40 dark:border-cyan-brand/50 shadow-[0_25px_70px_-15px_rgba(0,102,255,0.15),0_0_30px_0_rgba(0,200,255,0.12)] dark:shadow-[0_25px_70px_-15px_rgba(0,240,255,0.35),0_0_40px_0_rgba(0,102,255,0.25)] backdrop-blur-2xl'
                  : 'bg-white/80 dark:bg-[#060D19]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {/* Subtle glare highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/[0.02] dark:from-white/[0.08] via-transparent to-transparent rounded-[32px] pointer-events-none" />

              <div>
                {/* Top Row: Brand & Category */}
                <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono">
                  <span className="font-bold tracking-widest text-slate-500 dark:text-slate-300 uppercase text-[11px] sm:text-xs">
                    DATAMINT ARVIX
                  </span>
                  <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-brand font-semibold text-[11px] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-brand animate-pulse" />
                    <span>{getServiceBadge(service)}</span>
                  </div>
                </div>

                {/* Big Bold Service Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-3">
                  {service.title}
                </h3>

                {/* Accent Indicator Dot */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-5 h-5 rounded-full border border-cyan-500/40 dark:border-cyan-brand/40 bg-cyan-500/10 dark:bg-cyan-brand/10 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-brand" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Engineered Solution
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal min-h-[44px]">
                  {service.shortDesc}
                </p>

                {/* Rounded Feature Badges / Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className={`text-[11px] font-mono px-3 py-1 rounded-full border transition-colors ${
                        isCenter
                          ? 'bg-slate-100 dark:bg-white/[0.05] border-slate-200 dark:border-cyan-brand/30 text-slate-800 dark:text-slate-200 shadow-sm'
                          : 'bg-slate-100/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Solid CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onExplore) onExplore(service.title);
                    else if (onSelectService) onSelectService(service);
                  }}
                  className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    isCenter
                      ? 'btn-primary hover:scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                  }`}
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls: Arrows and Dots */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 hover:border-cyan-500 dark:hover:border-cyan-brand/50 hover:bg-slate-200 dark:hover:bg-cyan-brand/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-brand flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer shadow-md backdrop-blur-md"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-9 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-brand dark:to-electric-500 shadow-sm'
                  : 'w-2.5 h-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 hover:border-cyan-500 dark:hover:border-cyan-brand/50 hover:bg-slate-200 dark:hover:bg-cyan-brand/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-brand flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer shadow-md backdrop-blur-md"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Guidance */}
      <div className="text-center mt-3 text-[11px] font-mono text-slate-500">
        Click any side card or use arrow keys / swipe to rotate
      </div>
    </div>
  );
};
