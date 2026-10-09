import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { ValuesCoverflow } from '../components/ValuesCoverflow';
import { Compass, Lightbulb, Cpu, Target, ArrowRight, Mail } from 'lucide-react';

interface AboutViewProps {
  onOpenQuote: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenQuote, onNavigate }) => {
  const beliefs = [
    { title: 'Simple', desc: 'Eliminating unnecessary complexity in code and interface design.' },
    { title: 'Reliable', desc: 'Predictable uptime, rock-solid security, and resilient database architectures.' },
    { title: 'Scalable', desc: 'Software engineered to expand seamlessly as user volume multiplies.' },
    { title: 'Useful', desc: 'Digital capabilities aligned with tangible business utility and ROI.' },
    { title: 'Accessible', desc: 'Inclusive experiences meeting international accessibility guidelines (WCAG).' },
  ];

  return (
    <div className="pt-40 md:pt-48 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HERO */}
      <section className="relative text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
          <span>ABOUT DATAMINT ARVIX</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
          We build{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 dark:from-cyan-brand dark:to-electric-500 bg-clip-text text-transparent">
            what's next.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          DATAMINT ARVIX is an engineering and digital product studio. We partner with forward-thinking enterprises to design, architect, and deploy reliable digital software solutions.
        </p>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeader
            eyebrow="FOUNDATION"
            heading="Who We Are."
            className="mb-4"
          />
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              We are a team of dedicated technology professionals focused on building practical digital products and software solutions. Rather than applying generic templates, we take the time to dissect the core challenges of our clients and build clean, maintainable systems that yield measurable competitive advantages.
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Our engineering foundation is rooted in modern web standards, resilient cloud architectures, and thoughtful UI/UX principles. We prioritize long-term software health over short-term shortcuts.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('services')}
              className="btn-secondary px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Explore Capabilities
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass-panel p-4 rounded-3xl border border-slate-200 dark:border-white/15">
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-white/90 dark:bg-navy-900/80 border border-slate-200 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand backdrop-blur-md shadow-sm">
                  WHO WE ARE
                </span>
              </div>
              <img src="/about/hero.png" alt="About Culture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      <div className="glowing-divider" />

      {/* 3. WHAT WE BELIEVE */}
      <section>
        <SectionHeader
          align="center"
          eyebrow="CORE VALUES"
          heading="What We Believe."
          subtitle="Good technology should serve human intent and business longevity."
        />

        <div className="mt-12">
          <ValuesCoverflow beliefs={beliefs} />
        </div>
      </section>

      <div className="glowing-divider" />

      {/* 4. OUR APPROACH */}
      {/* 4. OUR APPROACH */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-4 space-y-8 pr-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              METHODOLOGY
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15]">
              Our Approach.
            </h2>
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Successful digital platforms cannot be built in silos. Beautiful UI without clean code results in fragile systems, while advanced backends without intuitive interfaces fail to engage users. We unite three vital disciplines to create lasting change.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-900/20"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Content - 3 Image Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1 */}
          <div className="relative h-[450px] lg:h-[520px] rounded-3xl overflow-hidden group">
            {/* Background Image */}
            <img src="/about/businessunderstanding.png" alt="Business Understanding" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03101D] via-[#03101D]/60 to-transparent"></div>
            
            {/* Content positioned at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start z-10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-lg text-slate-800">
                <Compass className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">Business Understanding</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                We study your commercial model and customer lifecycles before writing a line of code.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative h-[450px] lg:h-[520px] rounded-3xl overflow-hidden group">
            {/* Background Image */}
            <img src="/about/humancentricdesign.png" alt="Human-Centric Design" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03101D] via-[#03101D]/60 to-transparent"></div>
            
            {/* Content positioned at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start z-10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-lg text-slate-800">
                <Lightbulb className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">Human-Centric Design</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                We design interfaces that respect cognitive load and make complex workflows feel effortless.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative h-[450px] lg:h-[520px] rounded-3xl overflow-hidden group">
            {/* Background Image */}
            <img src="/about/rigorousengineering.png" alt="Rigorous Engineering" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03101D] via-[#03101D]/60 to-transparent"></div>
            
            {/* Content positioned at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start z-10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-lg text-slate-800">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">Rigorous Engineering</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                We follow strict typing, automated deployments, and continuous security audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="glowing-divider" />

      {/* 5. LEADERSHIP */}
      <section>
        <SectionHeader
          align="center"
          eyebrow="LEADERSHIP"
          heading="Meet the Founders."
          subtitle="The visionaries steering DATAMINT AARVIX towards the future."
        />

        <div className="mt-12 max-w-5xl mx-auto glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 dark:border-white/15 relative overflow-hidden group">
          {/* Ambient Background Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Founder 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
                <span className="text-xl font-bold text-white font-mono tracking-tighter">VG</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">Vigneshwaran G</h3>
              <p className="text-cyan-600 dark:text-cyan-brand font-mono text-xs tracking-widest uppercase font-bold mb-4">Founder & CEO</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                Driving the strategic vision, enterprise partnerships, and overarching technical architecture at Datamint Aarvix.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
                <span className="text-xl font-bold text-white font-mono tracking-tighter">DK</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">Dinesh Kumar R</h3>
              <p className="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase font-bold mb-4">Co-Founder</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                Leading product operations, engineering execution, and ensuring delivery excellence across all client projects.
              </p>
            </div>
          </div>

          {/* Unified Contact Box */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-white/[0.02] -mx-8 sm:-mx-12 -mb-8 sm:-mb-12 p-8 sm:p-12">
            <div className="text-center sm:text-left">
              <p className="text-base font-bold text-slate-900 dark:text-white mb-1">Connect with Leadership</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Direct channel to the executive team.</p>
            </div>
            <a href="mailto:ceo@datamintaarvix.com" className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 gap-3 text-sm font-bold">
              <Mail className="w-4 h-4" />
              ceo@datamintaarvix.com
            </a>
          </div>
        </div>
      </section>

      <div className="glowing-divider" />

      {/* 6. OUR VISION */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-brand/10 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest font-semibold">
          <Target className="w-3.5 h-3.5" />
          <span>LONG-TERM HORIZON</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Our Vision
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          To build technology solutions that help businesses adapt, operate and grow in a digital-first world. We aim to become the trusted technology partner that leaders rely on for high-stakes digital initiatives.
        </p>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('careers')}
            className="btn-primary px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
          >
            Work With Us →
          </button>
        </div>
      </section>
    </div>
  );
};
