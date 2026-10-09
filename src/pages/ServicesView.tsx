import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Globe, Code2, Palette, Smartphone, ShoppingBag, Cpu, Cloud, Layers, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ServicesCoverflow } from '../components/ServicesCoverflow';
import { services, addOnServices, type Service } from '../data/siteData';

interface ServicesViewProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onNavigate: (tabId: string) => void;
  selectedServiceInit?: Service | null;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenQuote,
  onNavigate,
<<<<<<< HEAD
=======
  selectedServiceInit,
>>>>>>> 50b981a (Update website)
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeServiceId, setActiveServiceId] = useState<string>(selectedServiceInit?.id || services[0].id);

  useEffect(() => {
    if (selectedServiceInit) {
      setActiveServiceId(selectedServiceInit.id);
      setActiveCategory('All'); // Reset category so the service is visible
    }
  }, [selectedServiceInit]);

  const categories = ['All', 'Engineering', 'Design', 'Mobile', 'Commerce', 'Intelligence', 'Infrastructure', 'Consulting'];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  // Update active service if the current one is filtered out
  useEffect(() => {
    if (filteredServices.length > 0 && !filteredServices.find(s => s.id === activeServiceId)) {
      setActiveServiceId(filteredServices[0].id);
    }
  }, [activeCategory, filteredServices, activeServiceId]);

  const activeService = filteredServices.find(s => s.id === activeServiceId) || filteredServices[0];

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-cyan-600 dark:text-cyan-brand" };
    switch (iconName) {
      case 'Globe': return <Globe {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'web-development': return '/service/webdevelopment.png';
      case 'software-development': return '/service/softwaredevelopment.png';
      case 'ui-ux-design': return '/service/uiux.png';
      case 'mobile-app-development': return '/service/mobileappdevelopment.png';
      case 'ecommerce-solutions': return '/service/ecom.png';
      case 'ai-automation': return '/service/ai.png';
      case 'cloud-deployment': return '/service/cloud-deployment.png';
      case 'custom-solutions': return '/service/customsolutions.png';
      case 'data-analytics': return '/service/dataanalytics.png';
      case 'social-media-management': return '/service/socialmedia.png';
      default: return '/service/softwaredevelopment.png';
    }
  };

  return (
    <div id="services" className="pt-40 md:pt-48 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
          <span>02 / OUR EXPERTISE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          What we build.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Modern technology solutions engineered to solve real business challenges. From enterprise software platforms to intelligent AI automation workflows.
        </p>
      </section>

      {/* 3D Showcase Carousel Section */}
      <section className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-brand font-semibold">
            Interactive 3D Portfolio
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Click cards or use arrows to navigate
          </span>
        </div>

        <ServicesCoverflow onExplore={() => onNavigate('packages')} />
      </section>

      <div className="glowing-divider" />

      {/* Filter Pills & Detailed Section */}
      <section className="relative w-full py-12 space-y-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Detailed Specifications
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore our technical capabilities, specialized workflows, and exact deliverables for each engineering domain. Select a category to filter services.
            </p>
          </div>

<<<<<<< HEAD
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
=======
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto hide-scrollbar items-center gap-2 sm:gap-3 pb-2 sm:pb-0">
>>>>>>> 50b981a (Update website)
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
<<<<<<< HEAD
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
=======
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
>>>>>>> 50b981a (Update website)
                  activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20 border border-cyan-500'
                    : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Sidebar: Service List */}
          <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-32 max-h-[60vh] lg:max-h-[75vh] overflow-y-auto custom-scrollbar pr-2">
            {filteredServices.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 border shrink-0 ${
                    isActive
                      ? 'bg-white dark:bg-gradient-to-br dark:from-navy-900 dark:to-[#050914] border-cyan-500/50 shadow-xl relative overflow-hidden'
                      : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
                  )}
                  
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 border ${
                      isActive 
                        ? 'bg-cyan-50 dark:bg-cyan-500/20 border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400' 
                        : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-brand'
                    }`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1">
                      <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1 ${isActive ? 'text-cyan-600 dark:text-cyan-400 font-bold' : 'text-slate-500'}`}>
                        {service.category}
                      </span>
                      <h4 className={`text-base font-bold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'}`}>
                        {service.title}
                      </h4>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-cyan-600 dark:text-cyan-400 opacity-100' : 'text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Area: Active Service Content */}
          <div className="lg:col-span-8 h-full">
            <div className="relative bg-white dark:bg-[#050914] rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl h-full flex flex-col">
              
              {/* Top Banner Image */}
              <div className="relative w-full h-64 sm:h-80 shrink-0 group overflow-hidden bg-slate-100 dark:bg-navy-950">
                <img 
                  key={activeService.id}
                  src={getServiceImage(activeService.id)} 
                  alt={activeService.title}
                  className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/40 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-widest shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                    Service {activeService.number}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 sm:p-12 relative flex-1 flex flex-col justify-between -mt-16 sm:-mt-24 z-10">
                <div className="animate-fade-in">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-cyan-500/20 border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center shadow-md">
                      {getServiceIcon(activeService.icon)}
                    </div>
                    <span className="text-cyan-700 dark:text-cyan-400 font-mono text-sm tracking-widest uppercase font-bold bg-white/50 dark:bg-transparent px-3 py-1 rounded-full border border-white/50 dark:border-transparent backdrop-blur-sm">
                      {activeService.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                    {activeService.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl font-medium">
                    {activeService.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
                    {activeService.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase tracking-widest mb-1">
                      Ready to build this?
                    </p>
                    <p className="text-slate-900 dark:text-white text-sm font-semibold">
                      Schedule a technical consultation.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-xl shadow-cyan-900/20"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glowing-divider" />

      {/* Add-On Services List */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Side: Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
          <SectionHeader
            eyebrow="EXTENDED SERVICES"
            heading="Add-On & Infrastructure Services."
            subtitle="Modular enhancements that can be integrated into any custom technology package."
            className="mb-0 text-left"
          />
          <div className="hidden lg:block pt-4">
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Enhance your core platform with powerful infrastructure add-ons. From advanced analytics and monitoring to scalable cloud pipelines and security audits, we provide the tools you need to grow seamlessly.
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable List */}
        <div className="lg:col-span-7 h-[500px] overflow-y-auto pr-2 md:pr-4 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
          {addOnServices.map((addon, idx) => (
            <a href="#contact" key={idx} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center justify-between gap-6 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all cursor-pointer group block">
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-2 font-semibold">
                  {addon.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{addon.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{addon.description}</p>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all shadow-sm">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
