import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects, Project } from '../data/siteData';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  Zap,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectsViewProps {
  onOpenQuote: (serviceCategory?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenQuote, onNavigate }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener('resize', checkScrollState);
    return () => window.removeEventListener('resize', checkScrollState);
  }, []);

  const scrollSide = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -280 : 280;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScrollState, 350);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      checkScrollState();
    }
  };

  const categories = [
    'All', 
    'Web Development', 
    'Software Development', 
    'UI/UX Design', 
    'Mobile App Development', 
    'E-Commerce', 
    'AI & Automation', 
    'Cloud & Deployment', 
    'Custom Solutions', 
    'Data Analytics', 
    'Social Media Management'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const getProjectImage = (id: string) => {
    switch (id) {
      case 'project-01': return '/service/softwaredevelopment.png';
      case 'project-02': return '/service/webdevelopment.png';
      case 'project-03': return '/service/ecom.png';
      case 'project-04': return '/service/ai.png';
      case 'project-05': return '/service/mobileappdevelopment.png';
      case 'project-06': return '/service/customsolutions.png';
      case 'project-07': return '/service/uiux.png';
      case 'project-08': return '/service/cloud-deployment.png';
      case 'project-09': return '/service/dataanalytics.png';
      case 'project-10': return '/service/socialmedia.png';
      case 'project-11': return '/project/businessdashboardworkspace.png';
      case 'project-12': return '/project/onlinestorefulfillmentworkspace.png';
      case 'project-13': return '/project/ai.png';
      case 'project-14': return '/project/Industrialfieldworkdeskbytheplant.png';
      case 'project-15': return '/project/moderncorporateworkspacewebsiteshowcase.png';
      case 'project-16': return '/project/moderncustomerportalworkspace.png';
      case 'project-17': return '/home/businessmanagementdashboardinterface.png';
      case 'project-18': return '/dataanalyst_project/grokal/grokal_main_dashboard.png';
      default: return '/service/webdevelopment.png';
    }
  };

  // Studio canvas backdrop tint classes (matching the pastel/duotone studio styles in screenshot)
  const getCanvasTint = (idx: number) => {
    const tints = [
      'bg-gradient-to-br from-[#FAF3EA] to-[#F2E8DC] dark:from-[#181412] dark:to-[#0F0C0A]', // Warm Sand
      'bg-gradient-to-br from-[#EEF4F8] to-[#E0EBF2] dark:from-[#0E1724] dark:to-[#090F18]', // Soft Arctic Blue
      'bg-gradient-to-br from-[#EFF7F2] to-[#DFEEE4] dark:from-[#0F1C14] dark:to-[#08120D]', // Pale Sage Green
      'bg-gradient-to-br from-[#F8EFF5] to-[#EDE0E8] dark:from-[#1B1119] dark:to-[#110A10]', // Soft Rose
      'bg-gradient-to-br from-[#EBF5F8] to-[#DCEEF2] dark:from-[#0C181D] dark:to-[#081014]', // Pale Cyan
      'bg-gradient-to-br from-[#F5F2EE] to-[#E8E2DA] dark:from-[#161514] dark:to-[#0E0D0C]', // Muted Stone
    ];
    return tints[idx % tints.length];
  };

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
  };

  return (
    <div className="pt-36 sm:pt-40 md:pt-48 lg:pt-52 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* 01. SECTION HEADER (CHANGED NAME TO PORTFOLIO) */}
      <section className="relative text-left w-full space-y-6">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-brand animate-pulse" />
            <span>03 / PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Selected work & portfolio<span className="text-cyan-600 dark:text-cyan-brand">.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A curated showcase of web portals, custom software suites, commerce engines, mobile applications, and enterprise cloud systems engineered by DATAMINT AARVIX.
          </p>

          {/* Confidentiality Notice & Tech-Agnostic Guarantee */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand shrink-0" />
              <span>NDA Protected Sample Cases</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/20 dark:border-cyan-brand/20 text-xs text-cyan-700 dark:text-cyan-brand font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Full Technology Agnostic: All Modern Stacks & Cloud Infrastructures</span>
            </div>
          </div>
        </div>

        {/* Filter Pills with Top Arrow Controls & Counts */}
        <div className="space-y-3 pt-2">
          
          {/* Top Control Bar with Category Indicator and Navigation Arrows */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-brand" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-semibold">
                Filter by Service Category
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
                ({categories.length - 1} domains)
              </span>
            </div>

            {/* Small Navigation Arrows on Top to move on sides */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollSide('left')}
                disabled={!canScrollLeft}
                title="Scroll categories left"
                aria-label="Scroll categories left"
                className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                  canScrollLeft
                    ? 'bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-cyan-500/10 dark:hover:bg-cyan-brand/10 hover:border-cyan-500 dark:hover:border-cyan-brand hover:text-cyan-600 dark:hover:text-cyan-brand shadow-sm active:scale-95'
                    : 'bg-slate-100 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollSide('right')}
                disabled={!canScrollRight}
                title="Scroll categories right"
                aria-label="Scroll categories right"
                className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                  canScrollRight
                    ? 'bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-cyan-500/10 dark:hover:bg-cyan-brand/10 hover:border-cyan-500 dark:hover:border-cyan-brand hover:text-cyan-600 dark:hover:text-cyan-brand shadow-sm active:scale-95'
                    : 'bg-slate-100 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Filter Strip with Wheel & Arrow navigation */}
          <div className="relative">
            {/* Left fade indicator */}
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-8 bg-gradient-to-r from-slate-50 dark:from-[#050914] to-transparent z-10" />
            )}

            {/* Right fade indicator */}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-slate-50 dark:from-[#050914] to-transparent z-10" />
            )}

            <div
              ref={scrollContainerRef}
              onScroll={checkScrollState}
              onWheel={handleWheel}
              className="flex items-center gap-2 overflow-x-auto flex-nowrap hide-scrollbar pb-2 w-full scroll-smooth"
            >
              {categories.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? 'bg-slate-900 dark:bg-cyan-brand text-white dark:text-navy-950 font-bold shadow-md shadow-slate-900/20 dark:shadow-glow-cyan'
                        : 'bg-white/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/30'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-white/20 dark:bg-black/20 text-white dark:text-navy-950' 
                        : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
            <span>Showing {filteredProjects.length} sample delivery {filteredProjects.length === 1 ? 'case' : 'cases'}</span>
            <span className="hidden sm:inline">Click any project to inspect full deliverables & blueprint</span>
          </div>
        </div>
      </section>

      {/* 02. 4-COLUMN STUDIO CARD GALLERY GRID (EXACTLY MATCHING SCREENSHOT) */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => navigate(`/portfolio/${project.id}`)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col aspect-[3/4.2]"
            >
              {/* Studio Canvas Backdrop with delicate tint */}
              <div className={`relative w-full h-full p-4 sm:p-5 pb-20 overflow-hidden flex items-center justify-center transition-colors duration-300 ${getCanvasTint(idx)}`}>
                
                {/* Visual Mockup Spread */}
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  <img
                    src={getProjectImage(project.id)}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg border border-black/5 dark:border-white/10"
                  />
                  
                  {/* Subtle top badge for release year */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                      PROJ {project.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pinned Bottom Label Card / Floating Pill (Matches screenshot structure exactly) */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-[#071120]/95 backdrop-blur-md rounded-xl p-3 border border-slate-200/90 dark:border-white/10 shadow-md group-hover:border-cyan-500/40 dark:group-hover:border-cyan-brand/40 transition-all flex items-center justify-between gap-2.5 z-10">
                <div className="overflow-hidden min-w-0 pr-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate mt-0.5">
                    {project.category}
                  </p>
                </div>

                {/* Square External Link Icon Button */}
                <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-brand group-hover:text-white dark:group-hover:text-navy-950 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if filtering yields no results */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-3xl glass-panel border border-slate-200 dark:border-white/10 space-y-4">
            <p className="text-slate-500 dark:text-slate-400 font-mono text-sm">
              No sample cases found in the selected category.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-5 py-2 rounded-full bg-cyan-600 dark:bg-cyan-brand text-white dark:text-navy-950 font-mono text-xs font-bold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>

      {/* 03. CALL TO ACTION / ARCHITECTURE ENGAGEMENT */}
      <section className="glass-panel p-8 sm:p-12 lg:p-14 rounded-[2.5rem] border border-slate-200 dark:border-white/15 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-cyan-500/10 dark:bg-cyan-brand/10 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>PRODUCTION-READY DELIVERY</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Want a similar platform engineered for your business?
        </h3>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          We bring senior full-stack discipline, predictable sprint milestones, and enterprise security standards to every engagement.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-full bg-cyan-600 dark:bg-cyan-brand text-white dark:text-navy-950 text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-lg shadow-cyan-600/20 dark:shadow-glow-cyan flex items-center gap-2 hover:opacity-95 transition-all"
          >
            <span>Contact Us / Request Scoping</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Speak With Engineering</span>
          </button>
        </div>
      </section>

    </div>
  );
};
