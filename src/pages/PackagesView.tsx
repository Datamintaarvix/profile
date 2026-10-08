import React, { useState } from 'react';
import { packages, addOnServices } from '../data/siteData';
import { 
  ArrowRight, Code2, Layers, MonitorSmartphone, Headset, 
  Globe, LayoutGrid, Smartphone, Building2, Check,
  CalendarClock, ShieldCheck, Search, Cloud, Palette, 
  FileText, Database, Wrench, Shield, BarChart, 
  RefreshCw, Link
} from 'lucide-react';

interface PackagesViewProps {
  onSelectPlan: (planName: string) => void;
}

const tabContent = {
  website: {
    category: 'WEBSITE DEVELOPMENT',
    heading: 'Websites built to grow your business.',
    description: 'High-performance, responsive websites designed around your brand, users and business goals.',
    features: ['Custom UI/UX Design', 'Responsive Development', 'SEO Foundation', 'CMS Integration', 'Analytics & Tracking', 'Performance Optimization'],
    bestFor: 'Businesses • Startups • Portfolios • Landing Pages',
    ctaText: 'Explore Website Packages'
  },
  webapp: {
    category: 'WEB APPLICATION DEVELOPMENT',
    heading: 'Web applications built for real workflows.',
    description: 'Scalable web platforms designed to simplify operations, manage data and deliver powerful digital experiences.',
    features: ['Custom Web App Development', 'Authentication & User Roles', 'Dashboard & Admin Systems', 'API Integrations', 'Database Architecture', 'Analytics & Automation'],
    bestFor: 'SaaS • Business Platforms • Internal Tools • Client Portals',
    ctaText: 'Explore Web App Packages'
  },
  mobile: {
    category: 'MOBILE APP DEVELOPMENT',
    heading: 'Mobile experiences built for every screen.',
    description: 'Reliable iOS and Android applications focused on usability, performance and long-term scalability.',
    features: ['React Native Development', 'iOS & Android Support', 'Push Notifications', 'API Integration', 'Secure Authentication', 'App Deployment'],
    bestFor: 'Startups • Consumer Apps • Business Apps • On-Demand Services',
    ctaText: 'Explore Mobile Packages'
  },
  enterprise: {
    category: 'ENTERPRISE SOLUTIONS',
    heading: 'Digital systems built to scale.',
    description: 'Secure, integrated technology solutions designed for complex business operations and enterprise requirements.',
    features: ['Enterprise Architecture', 'Advanced Integrations', 'Cloud Infrastructure', 'Security & Compliance', 'Automation & AI', 'Dedicated Support'],
    bestFor: 'Large Organizations • Institutions • Multi-Department Operations',
    ctaText: 'Talk to an Enterprise Expert'
  }
};

export const PackagesView: React.FC<PackagesViewProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState('website');
  
  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="font-sans pb-20 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-32 md:pt-48 relative z-10">
        
        {/* 01 - HERO SECTION */}
        <section className="flex flex-col lg:flex-row gap-16 mb-32 relative">
          {/* Left Hero */}
          <div className="flex-1 relative z-10">
            <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
              Engagement Packages
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 to-cyan-500 dark:from-cyan-brand dark:to-blue-500">Packages.</span>
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed mb-8">
              Structured scopes designed for each growth phase. Every tier includes clean engineering, responsive QA, and dedicated post-launch support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
              <button className="group bg-electric-600 hover:bg-electric-500 dark:bg-cyan-brand dark:hover:bg-cyan-brand/80 text-white dark:text-navy-950 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-0.5 flex items-center gap-2">
                Explore Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Capabilities row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              {[
                { icon: Code2, label: 'Clean Code' },
                { icon: Layers, label: 'Scalable Architecture' },
                { icon: MonitorSmartphone, label: 'Responsive Design' },
                { icon: Headset, label: 'Dedicated Support' },
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 group cursor-default">
                  <cap.icon className="w-4 h-4 text-electric-600 dark:text-cyan-brand group-hover:scale-110 transition-transform" /> 
                  <span className="group-hover:text-electric-600 dark:group-hover:text-cyan-brand transition-colors">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero */}
          <div className="flex-1 lg:pl-16 lg:border-l border-slate-200 dark:border-white/10 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 dark:bg-cyan-brand/5 blur-3xl rounded-full pointer-events-none" />
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">
              Built Around Your
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-wide">
              BUSINESS GOALS
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              From simple websites to enterprise platforms, choose a package that fits your vision.
            </p>
          </div>
        </section>

        {/* 02 - CHOOSE A PACKAGE / DYNAMIC CONTENT SWITCHER */}
        <section className="mb-32">
          <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
            Choose a Package
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            What are you building?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10">
            Select the category that best matches your project. Each package is tailored to deliver the right features, technology and support.
          </p>

          <div className="flex flex-wrap items-center gap-4 bg-slate-50 dark:bg-white/[0.02] p-2 rounded-full border border-slate-200 dark:border-white/5 w-fit shadow-sm mb-12">
            {[
              { id: 'website', label: 'Website', icon: Globe },
              { id: 'webapp', label: 'Web Application', icon: LayoutGrid },
              { id: 'mobile', label: 'Mobile Application', icon: Smartphone },
              { id: 'enterprise', label: 'Enterprise', icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-electric-600 dark:bg-cyan-brand text-white dark:text-navy-950 shadow-md shadow-electric-600/20 dark:shadow-cyan-brand/20' 
                      : 'bg-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>

          {/* DYNAMIC CONTENT AREA */}
          <div key={activeTab} className="animate-fade-in-up flex flex-col lg:flex-row gap-12 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2rem] p-8 lg:p-12 shadow-sm">
            {/* Left */}
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4">
                {currentContent.category}
              </p>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                {currentContent.heading}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {currentContent.description}
              </p>
            </div>
            
            {/* Center */}
            <div className="flex-[1.2] lg:border-l border-slate-200 dark:border-white/10 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {currentContent.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-4 h-4 text-electric-600 dark:text-cyan-brand shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right */}
            <div className="flex-[0.8] lg:border-l border-slate-200 dark:border-white/10 lg:pl-12 flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">
                BEST FOR
              </p>
              <p className="text-sm text-slate-900 dark:text-white font-semibold mb-8 leading-relaxed">
                {currentContent.bestFor}
              </p>
              <button className="group bg-electric-600 hover:bg-electric-500 dark:bg-cyan-brand dark:hover:bg-cyan-brand/80 text-white dark:text-navy-950 px-6 py-3 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto">
                {currentContent.ctaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* 03 - PACKAGES */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
                Website Development Packages
              </p>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                Flexible packages for every stage.
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              From simple websites to advanced platforms, choose a plan that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden bg-white/50 dark:bg-transparent backdrop-blur-sm shadow-sm dark:shadow-none">
            {packages.slice(0, 3).map((pkg, idx) => {
              const isPopular = pkg.popular;
              return (
                <div key={pkg.id} className={`group p-8 lg:p-12 relative transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.02] ${idx !== 2 ? 'border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10' : ''}`}>
                  {isPopular && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-600 to-cyan-500 dark:from-cyan-brand dark:to-blue-500" />
                  )}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-electric-600 dark:text-cyan-brand text-sm font-mono font-bold tracking-widest">0{idx + 1}</span>
                    {isPopular && (
                      <span className="text-[10px] bg-electric-100 dark:bg-cyan-brand/10 border border-electric-200 dark:border-cyan-brand/20 text-electric-600 dark:text-cyan-brand px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                        Popular Choice
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-electric-600 dark:group-hover:text-cyan-brand transition-colors">{pkg.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[60px] mb-8 font-medium">{pkg.idealFor}</p>

                  <ul className="space-y-5 mb-12">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4 text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <div className="w-5 h-5 rounded-full bg-electric-50 dark:bg-cyan-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-electric-600 dark:text-cyan-brand" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    isPopular 
                      ? 'bg-electric-600 dark:bg-cyan-brand text-white dark:text-navy-950 hover:bg-electric-700 dark:hover:bg-cyan-brand/90 hover:shadow-lg hover:-translate-y-0.5' 
                      : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-transparent hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                  onClick={() => onSelectPlan(pkg.name)}>
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* 04 - ENTERPRISE */}
        <section className="mb-32 relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-[#08111C] border border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center shadow-lg dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 dark:opacity-10 pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}} />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-slate-200/50 dark:from-black/60 to-transparent pointer-events-none" />

          <div className="flex-1 p-12 lg:p-24 relative z-10">
            <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4">
              04 Enterprise
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Custom solutions for <br className="hidden lg:block"/>complex needs.
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              For large organizations, multi-department institutions and mission-critical systems. Tailored architecture, dedicated teams and long-term support.
            </p>
          </div>

          <div className="flex-1 p-12 lg:p-24 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/5 relative z-10 backdrop-blur-sm bg-white/30 dark:bg-black/20">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
              {[
                'Custom Architecture', 'Advanced Integrations', 
                'Cloud Infrastructure', 'Security & Compliance',
                'Dedicated Support', 'Ongoing Maintenance',
                'Scalable Infrastructure', 'SLA Guarantee'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-semibold tracking-wide">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-600 dark:bg-cyan-brand shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="group bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:shadow-lg flex items-center gap-2 w-fit">
              Talk to an Expert <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 05 - INCLUDED */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
                What's Always Included
              </p>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                Built for long-term success.
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              No matter which package you choose, these core elements are always included.
            </p>
          </div>

          <div className="relative glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10">
            {/* Ambient inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 dark:via-cyan-brand/50 to-transparent opacity-50" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10">
              {[
                { icon: Code2, title: 'Code Ownership', desc: '100% intellectual property and source code handover.' },
                { icon: CalendarClock, title: 'Guaranteed Timelines', desc: 'Milestone-based delivery with regular progress updates.' },
                { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing across devices and browsers before launch.' },
                { icon: Headset, title: 'Dedicated Support', desc: 'Ongoing assistance, updates and technical guidance.' },
              ].map((item, idx) => (
                <div key={idx} className="relative group p-8 lg:p-10 transition-all hover:bg-slate-50/80 dark:hover:bg-white/[0.02]">
                  {/* Subtle top highlight on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500 dark:bg-cyan-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  
                  <item.icon className="w-8 h-8 text-cyan-600 dark:text-cyan-brand mb-6 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 stroke-[1.5]" />
                  
                  <h4 className="text-slate-900 dark:text-white text-base font-bold mb-3 tracking-wide">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 - ADD-ONS */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
                Extend Your Package
              </p>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                Add-on capabilities.
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Add specialized services whenever your business needs them.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-8">
            {[
              { icon: Globe, title: 'Domain & DNS Management' },
              { icon: Cloud, title: 'Cloud Hosting Setup' },
              { icon: Palette, title: 'Brand & Logo Design' },
              { icon: FileText, title: 'Technical Content' },
              { icon: Database, title: 'Catalogue Data Entry' },
              { icon: Wrench, title: 'Monthly Maintenance' },
              { icon: Shield, title: 'Backup & Security' },
              { icon: BarChart, title: 'SEO & Analytics' },
              { icon: RefreshCw, title: 'Website Redesign' },
              { icon: Link, title: 'API Integration' },
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center gap-3 cursor-pointer py-2">
                <item.icon className="w-5 h-5 text-cyan-600/60 dark:text-cyan-brand/60 group-hover:text-cyan-600 dark:group-hover:text-cyan-brand group-hover:scale-110 transition-all duration-300 shrink-0 stroke-[1.5]" />
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 07 - PROCESS */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-electric-600 dark:text-cyan-brand uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-electric-600 dark:bg-cyan-brand"></span>
                Our Process
              </p>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                From idea to impact.
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              A simple, transparent process to bring your vision to life.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-[15px] left-4 w-[calc(100%-2rem)] h-px bg-slate-200 dark:bg-white/10 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Discover', desc: 'Understand your goals and requirements.' },
                { step: '02', title: 'Plan', desc: 'Define scope, features and technology.' },
                { step: '03', title: 'Design', desc: 'Create intuitive and modern interfaces.' },
                { step: '04', title: 'Build', desc: 'Develop, integrate and test.' },
                { step: '05', title: 'Launch', desc: 'Deploy and provide ongoing support.' },
              ].map((item, idx) => (
                <div key={idx} className="relative pt-8 md:pt-0 group">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#050914] border-2 border-slate-300 dark:border-white/20 group-hover:border-electric-500 dark:group-hover:border-cyan-brand flex items-center justify-center text-xs text-slate-600 dark:text-white mb-6 md:mt-0 mt-[-16px] font-bold transition-colors z-10">
                    {item.step}
                  </div>
                  <div className="md:pt-16">
                    <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-2 group-hover:text-electric-600 dark:group-hover:text-cyan-brand transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 - CTA */}
        <section className="relative overflow-hidden bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 dark:bg-cyan-brand/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Have a project <br className="hidden md:block"/>in mind?
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-sm">
              Let's build something that creates real value for your business.
            </p>
          </div>
          <button className="group relative z-10 bg-electric-600 dark:bg-cyan-brand hover:bg-electric-700 dark:hover:bg-cyan-brand/80 text-white dark:text-navy-950 px-8 py-5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
          onClick={() => onSelectPlan('Custom')}
          >
            Get a Custom Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

      </div>
    </div>
  );
};
