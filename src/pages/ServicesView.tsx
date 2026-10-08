import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Globe, Code2, Palette, Smartphone, ShoppingBag, Cpu, Cloud, Layers, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ServicesCoverflow } from '../components/ServicesCoverflow';
import { services, addOnServices, type Service } from '../data/siteData';

interface ServicesViewProps {
  onOpenQuote: (serviceTitle?: string) => void;
  selectedServiceInit?: Service | null;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);

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
      case 'web-development': return '/service/web_development.jpg';
      case 'software-development': return '/service/software_development.jpg';
      case 'ui-ux-design': return '/service/ui_ux_design.jpg';
      case 'mobile-app-development': return '/service/mobile_app_development.jpg';
      case 'ecommerce-solutions': return '/service/e-commerce.jpg';
      case 'ai-automation': return '/service/ai_and_automation.jpg';
      case 'cloud-deployment': return '/service/cloud_and_deployment.jpg';
      case 'custom-solutions': return '/service/data_analytics.jpg';
      default: return '/service/software_development.jpg';
    }
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <ServicesCoverflow onExplore={(title) => onOpenQuote(title)} />
      </section>

      <div className="glowing-divider" />

      {/* Filter Pills & Detailed Section */}
      <section className="space-y-12">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Detailed Specifications
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore technical capabilities and deliverables for each domain.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 dark:bg-cyan-brand text-white dark:text-navy-950 font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Vertical Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar: Service List */}
          <div className="services-tabs-container lg:col-span-4 space-y-2 lg:space-y-2 lg:sticky lg:top-32 h-auto lg:max-h-[70vh] overflow-y-auto pr-2 hide-scrollbar">
            {filteredServices.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    isActive
                      ? 'bg-white/10 dark:bg-white/[0.08] border border-slate-300 dark:border-white/20 shadow-sm'
                      : 'bg-white/5 dark:bg-white/[0.02] border border-transparent hover:bg-white/10 dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Subtle active indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-600 dark:bg-cyan-brand rounded-r-full"></div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors border ${
                      isActive 
                        ? 'bg-slate-50 dark:bg-white/10 border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-brand' 
                        : 'bg-slate-100 dark:bg-white/5 border-transparent text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono tracking-widest uppercase block mb-0.5 ${isActive ? 'text-cyan-700 dark:text-cyan-brand font-bold' : 'text-slate-500 dark:text-slate-500'}`}>
                        {service.category}
                      </span>
                      <h4 className={`text-sm font-bold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-300'}`}>
                        {service.title}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-600 dark:text-cyan-brand opacity-100 translate-x-1' : 'text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Area: Active Service Content */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-500">
              
              {/* Feature Image with Overlay */}
              <div className="w-full h-[250px] sm:h-[350px] rounded-2xl overflow-hidden relative mb-8 border border-white/10 shadow-lg group">
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none"></div>
                
                <img 
                  key={activeService.id} // Forces re-render/animation on image change
                  src={getServiceImage(activeService.id)} 
                  alt={activeService.title}
                  className="w-full h-full object-cover animate-fade-in group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-widest mb-3 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      SERVICE {activeService.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                      {activeService.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description & Capabilities */}
              <div className="space-y-8 animate-fade-in">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed sm:text-lg">
                  {activeService.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {activeService.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-cyan-mint shrink-0 mt-0.5 drop-shadow-sm" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <button
                    onClick={() => onOpenQuote(activeService.title)}
                    className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest cursor-pointer shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal for {activeService.title}</span>
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
