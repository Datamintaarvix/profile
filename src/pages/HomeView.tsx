import React, { useState, useRef } from 'react';
import { 
  ArrowRight, ArrowLeft, ShieldCheck, Terminal, Play, Briefcase, 
  Users, Code2, Palette, Cloud, Layers, CheckCircle2, 
  Building2, KeyRound, ShoppingBag, Binary, Smartphone, 
  LayoutDashboard, Bot, Workflow, ChevronLeft, ChevronRight, Globe
} from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ServicesCoverflow } from '../components/ServicesCoverflow';
import {
  companyInfo,
  statistics,
  services,
  valuePillars,
  processSteps,
  solutions,
  projects,
  type Service
} from '../data/siteData';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onOpenQuote: (service?: string, packageName?: string) => void;
  onSelectService?: (service: Service) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectService,
}) => {
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const methodologyCarouselRef = useRef<HTMLDivElement>(null);
  const scrollMethodology = (direction: 'left' | 'right') => {
    if (methodologyCarouselRef.current) {
      const scrollAmount = 344;
      methodologyCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePillarClick = (idx: number) => {
    setActivePillarIdx(idx);
    if (carouselRef.current) {
      const child = carouselRef.current.children[idx] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const nextPillar = () => {
    if (activePillarIdx < valuePillars.length - 1) {
      handlePillarClick(activePillarIdx + 1);
    }
  };

  const prevPillar = () => {
    if (activePillarIdx > 0) {
      handlePillarClick(activePillarIdx - 1);
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    let closestIdx = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childRect = (child as HTMLElement).getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const childCenter = childRect.left + childRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activePillarIdx) {
      setActivePillarIdx(closestIdx);
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24 bg-[#03101D] text-slate-100 min-h-screen relative overflow-hidden font-sans">
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,184,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,184,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-0 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* 02. HERO SECTION */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 z-10 w-full">
        {/* Edge-to-edge Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              ABOUT / DATAMINT ARVIX
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-extrabold tracking-tight text-white leading-[1.05]">
              BUILDING DIGITAL <br/>
              SOLUTIONS FOR <br/>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                WHAT'S NEXT.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#8EA3B8] font-normal leading-relaxed max-w-lg">
              {companyInfo.subheadline}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('solutions')}
                className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                <span>Explore Solutions</span>
              </button>
            </div>
            
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#8EA3B8] font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Security & NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Modern Engineering Standards</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 03. STATISTICS */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 -mt-8 md:-mt-12">
        <div className="bg-[#061525]/60 backdrop-blur-xl rounded-2xl border border-[rgba(0,180,255,0.18)] p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {statistics.map((stat, idx) => (
              <div key={idx} className={`flex flex-col ${idx !== 0 ? 'pl-8' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                  {stat.trend && (
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full border border-cyan-400/20">
                      {stat.trend}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{stat.label}</h4>
                <p className="text-xs text-[#8EA3B8] leading-relaxed pr-4">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. ABOUT / INTRODUCTION */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              ABOUT DATAMINT ARVIX
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Technology designed around <br/> real business needs.
            </h2>
            <div className="space-y-4 text-base text-[#8EA3B8] leading-relaxed max-w-lg">
              <p>
                <strong className="text-white font-semibold">DATAMINT ARVIX</strong> is a technology and digital solutions company focused on creating reliable, scalable and user-focused digital experiences.
              </p>
              <p>
                We combine design, engineering and modern technology to transform ideas and business requirements into practical digital products. Our pragmatic approach bridges business objectives with resilient software architectures.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              {['Intuitive User Psychology', 'Clean, Scalable Code', 'Clear Business Impact'].map((tag, i) => (
                <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {tag}
                </div>
              ))}
            </div>

            <button
                onClick={() => onNavigate('about')}
                className="mt-4 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <span>Discover Our Company</span>
                <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative bg-[#061525]/80 backdrop-blur-xl border border-[rgba(0,180,255,0.18)] rounded-[24px] p-6 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center">
               <div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-400 tracking-wider">
                 [ ABOUT / CULTURE ]
               </div>
               <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 cursor-pointer hover:scale-105 transition-transform z-10">
                  <Play className="w-6 h-6 text-cyan-400 ml-1" />
               </div>
               <ImagePlaceholder
                  label="HOLOGRAPHIC INTERFACE"
                  sublabel="Corporate technology workflow"
                  aspectRatio="video"
                  className="opacity-50 absolute inset-0 w-full h-full mix-blend-screen"
                />
            </div>
          </div>
        </div>
      </section>

      {/* 05. EXPERTISE / SERVICES */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            OUR EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What we build.
          </h2>
          <p className="text-[#8EA3B8] max-w-2xl mx-auto">
            Modern technology solutions designed to solve real business challenges.
          </p>
        </div>

        <ServicesCoverflow onExplore={(title) => onOpenQuote(title)} />
      </section>

      {/* 06. ENGINEERING PHILOSOPHY (RESTYLED) */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Built with purpose.<br />Engineered for growth.
            </h2>
          </div>
          <div className="max-w-md flex flex-col items-start md:items-end gap-6 md:text-right">
            <p className="text-[#8EA3B8] text-base md:text-lg leading-relaxed text-left md:text-right">
              We focus on long-term architecture rather than quick superficial fixes.
            </p>
            <div className="flex gap-4">
              <button onClick={prevPillar} className="text-slate-500 hover:text-white transition-colors cursor-pointer">
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button onClick={nextPillar} className="text-white hover:text-slate-400 transition-colors cursor-pointer">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {valuePillars.map((pillar, idx) => (
              <div 
                key={pillar.number} 
                onClick={() => handlePillarClick(idx)}
                className={`text-base md:text-lg font-semibold cursor-pointer transition-colors whitespace-nowrap lg:whitespace-normal shrink-0 ${
                  activePillarIdx === idx ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {pillar.title}
              </div>
            ))}
          </div>

          {/* Right Carousel Cards */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="lg:col-span-9 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {valuePillars.map((pillar, idx) => {
              const images = [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
              ];
              return (
                <div 
                  key={pillar.number} 
                  className="min-w-[200px] md:min-w-[240px] h-[300px] md:h-[340px] rounded-tl-[48px] rounded-br-[48px] rounded-tr-xl rounded-bl-xl overflow-hidden relative shadow-[0_10px_30px_rgba(0,180,255,0.1)] snap-center group shrink-0 border border-[rgba(0,180,255,0.1)]"
                >
                  <img 
                    src={images[idx % images.length]} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03101D]/90 via-[#03101D]/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{pillar.title}</h3>
                    <p className="text-cyan-100/70 text-xs leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07. METHODOLOGY */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide text-white mb-8 hover:bg-white/5 transition-colors cursor-pointer uppercase">
                <span>Methodology</span>
                <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8">
                From idea to launch <ArrowRight className="inline-block w-8 h-8 ml-1 rotate-45 text-white/50" />
              </h2>
            </div>
            
            <div className="mt-8 lg:mt-32 space-y-12">
              <p className="text-[#8EA3B8] text-sm max-w-xs leading-relaxed font-medium">
                A structured, transparent delivery pipeline ensuring quality at every milestone. Design, Develop And Run Any Business Software You Need.
              </p>
              
              <div className="flex gap-4">
                <button onClick={() => scrollMethodology('left')} className="text-slate-500 hover:text-white transition-colors cursor-pointer focus:outline-none">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button onClick={() => scrollMethodology('right')} className="text-slate-500 hover:text-white transition-colors cursor-pointer focus:outline-none">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column: Cards Carousel */}
          <div 
            ref={methodologyCarouselRef}
            className="lg:col-span-8 flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {processSteps.map((step, idx) => (
              <div 
                key={step.number} 
                className="snap-start shrink-0 w-[280px] sm:w-[340px] bg-white/70 backdrop-blur-xl border border-white/50 rounded-[20px] p-6 flex flex-col min-h-[380px] shadow-2xl relative overflow-hidden group cursor-pointer hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Image Header Block for ALL cards */}
                <div className="absolute top-0 left-0 right-0 h-56 rounded-t-3xl z-0 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${[
                        'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?auto=format&fit=crop&w=800&q=80',
                      ][idx % 5]})` 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-cyan-400/40 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent opacity-100"></div>
                  <div className="absolute bottom-6 left-6 text-slate-900 text-2xl md:text-[26px] font-bold leading-tight z-10 w-[85%] drop-shadow-sm">
                    {idx === 0 ? "Building Your Business Your Way" : step.title}
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full mt-48 pt-6">
                  
                  <div className="w-8 h-[2px] bg-slate-300 mb-6 group-hover:bg-cyan-500/80 transition-colors"></div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="w-7 h-7 rounded-lg bg-white/80 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-600 group-hover:border-cyan-500/30 transition-all shadow-sm">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. DIGITAL SOLUTIONS */}
      <section className="relative w-full pt-32 pb-32">
        {/* Using a tech-focused image for solutions for the whole section */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-navy-950/10" />
        
        {/* Banner Header Text */}
        <div className="relative w-full flex flex-col items-center justify-center text-center mb-16 z-10 px-4">
          <span className="text-white font-mono text-sm tracking-widest block mb-4 uppercase">
            Digital Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Solutions built for different business needs.
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Tailored digital architectures addressing specific organizational challenges.
          </p>
          <button
            onClick={() => onNavigate('solutions')}
            className="bg-white text-navy-950 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-cyan-brand transition-colors duration-300 cursor-pointer"
          >
            Browse All Solutions
          </button>
        </div>

        {/* Grid Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.slice(0, 4).map((solution) => (
            <div key={solution.id} className="bg-white/5 backdrop-blur-xl rounded-[20px] p-6 border border-white/20 hover:bg-white/10 transition-colors flex flex-col h-full shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-sm text-[#8EA3B8] leading-relaxed mb-6 flex-1">
                {solution.description}
              </p>
              <ul className="space-y-2 mb-6">
                {solution.keyDeliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#8EA3B8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onOpenQuote(solution.title)}
                className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Explore Architecture
              </button>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 09. SELECTED WORK / PORTFOLIO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              PORTFOLIO & CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Selected work.
            </h2>
            <p className="text-[#8EA3B8]">
              Sample technological solutions and software architectures developed for forward-thinking businesses.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-cyan-400 text-xs font-mono uppercase tracking-widest hover:text-white flex items-center gap-2 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <div key={project.id} className="group relative bg-[#03101D] rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl border border-white/10 overflow-hidden hover:border-[rgba(0,180,255,0.3)] transition-all">
              <div className="aspect-square w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#03101D] via-transparent to-transparent z-10 opacity-80" />
                 <ImagePlaceholder
                    label={project.title.toUpperCase()}
                    aspectRatio="video"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                 <div className="absolute top-3 left-3 z-20">
                    <span className="text-[10px] font-mono text-cyan-400 bg-[#061525]/80 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                      {project.category}
                    </span>
                 </div>
              </div>
              <div className="p-5 relative z-20 -mt-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-xs text-[#8EA3B8] line-clamp-2 mb-4">{project.shortDesc}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] text-white/50 font-mono">{project.year}</span>
                  <button 
                    onClick={() => onNavigate('projects')}
                    className="text-xs font-semibold text-cyan-400 flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    View Project <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
