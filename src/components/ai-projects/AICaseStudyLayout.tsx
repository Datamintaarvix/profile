import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, CheckCircle2, 
  Activity, Zap, BarChart3, Building2, Cpu, Server, Database, 
  AlertTriangle, Leaf, Layers, Settings, Users, Smartphone, Globe, 
  FileText, Sliders, Download, Lock, RefreshCw, Monitor, Tablet, 
  Maximize2, X, ChevronRight, LayoutDashboard, Coins, Flame, Info,
  Camera, FileCheck, History, Mail, ShieldAlert
} from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { AIProjectData } from '../../data/aiProjectsData';

interface AICaseStudyLayoutProps {
  data: AIProjectData;
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const AICaseStudyLayout: React.FC<AICaseStudyLayoutProps> = ({ data, onOpenQuote, onNavigate }) => {
  const navigate = useNavigate();
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);
  const [showStaticFallback, setShowStaticFallback] = useState<boolean>(false);
  const [activeGalleryCat, setActiveGalleryCat] = useState<string>('All');
  const [lightbox, setLightbox] = useState<{ url: string; title: string; caption?: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data.meta.slug]);

  const d = data;

  const getViewportWidth = () => {
    switch (selectedDevice) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[768px]';
      case 'desktop': default: return 'max-w-full';
    }
  };

  const getViewportHeight = () => {
    switch (selectedDevice) {
      case 'mobile': return 'h-[667px]';
      case 'tablet': return 'h-[800px]';
      case 'desktop': default: return 'h-[750px]';
    }
  };

  // Extract unique gallery categories from screenshots
  const galleryCategories = ['All', ...Array.from(new Set(d.screenshots.map(s => s.category)))];

  const filteredScreenshots = activeGalleryCat === 'All'
    ? d.screenshots
    : d.screenshots.filter(s => s.category.toLowerCase() === activeGalleryCat.toLowerCase());

  const handleOpenContact = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="pt-28 sm:pt-36 md:pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* 00. Dynamic SEO Metadata */}
      <SEOHead
        title={d.meta.seoTitle}
        description={d.meta.seoDescription}
        url={`https://datamintaarvix.com/portfolio/${d.meta.slug}`}
      />

      {/* =========================================================================
          SECTION 01 – PROJECT HERO
      ========================================================================= */}
      <section className="relative space-y-8 text-left">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>PORTFOLIO / AI & AUTOMATION / CASE STUDY</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{d.meta.status}</span>
          </div>
        </div>

        {/* Hero Title and Description */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              PROJ {d.meta.projectNumber}
            </span>
            <span>{d.meta.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            {d.meta.title}
          </h1>
          <p className="text-sm font-mono text-cyan-400">
            {d.meta.aiClassification}
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {d.overview.introduction}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {d.meta.liveUrl && (
            <a
              href={d.meta.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-xs tracking-wider uppercase inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <a
            href={d.meta.pdfDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold tracking-wider uppercase border border-white/20 inline-flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Official Technical PDF</span>
          </a>

          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold tracking-wider uppercase border border-slate-300 dark:border-white/10 transition-all cursor-pointer"
          >
            ← Back to Directory
          </button>
        </div>

        {/* Hero Screenshot Frame with Glowing Border */}
        <div className="relative group rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-950 border border-cyan-500/40 shadow-2xl shadow-cyan-500/10">
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
            {/* Top Bar Chrome */}
            <div className="h-10 bg-slate-900/90 border-b border-white/10 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 hidden sm:inline">
                  {d.meta.brandName} • {d.meta.tagline}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightbox({
                  url: d.meta.heroImage,
                  title: d.meta.title,
                  caption: d.overview.valueProposition
                })}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer"
              >
                <Maximize2 className="w-3 h-3" />
                <span>Expand Fullscreen</span>
              </button>
            </div>

            <img
              src={d.meta.heroImage}
              alt={d.meta.title}
              className="w-full h-auto object-cover object-top max-h-[640px] cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
              onClick={() => setLightbox({
                url: d.meta.heroImage,
                title: d.meta.title,
                caption: d.overview.valueProposition
              })}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 – PROJECT OVERVIEW
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            02 // PROJECT CONTEXT & SCOPE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Project Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main context & problem statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>Industry Background & Context</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {d.overview.introduction}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <h3 className="text-base font-bold text-rose-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Business Problem & Operational Challenge</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {d.overview.businessProblem}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 space-y-3">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>The Engineered AI Solution</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {d.overview.proposedSolution}
              </p>
            </div>
          </div>

          {/* Objectives, Target Audience & Scope */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Core AI Objectives</span>
              </h3>
              <ul className="space-y-3">
                {d.overview.aiObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Target Users & Operators</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {d.overview.targetAudience.map((usr, i) => (
                  <span key={i} className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300">
                    {usr}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/60 border border-cyan-500/30 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                CORE VALUE PROPOSITION
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {d.overview.valueProposition}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 – AI SYSTEM ARCHITECTURE & ENGINEERING
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            03 // TECHNICAL BLUEPRINT & AI PIPELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            AI Architecture & System Engineering
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {d.architecture.description}
          </p>
        </div>

        {/* Layer Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {d.architecture.layers.map((layer, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    TIER {layer.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {layer.role}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {layer.name}
                </h3>
                <div className="text-xs font-mono text-cyan-300 bg-black/40 px-2.5 py-1.5 rounded-lg border border-white/5 truncate">
                  {layer.tech}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {layer.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Steps Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-white/10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>End-to-End Neural Processing Pipeline</span>
            </h3>
            <span className="text-xs font-mono text-cyan-400">{d.architecture.pattern}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {d.architecture.pipelineSteps.map((ps, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 relative">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
                    {ps.step}
                  </span>
                  {i < d.architecture.pipelineSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-slate-600 hidden lg:inline" />
                  )}
                </div>
                <div className="text-xs font-bold text-white">{ps.title}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{ps.desc}</p>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 inline-block">
                  {ps.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 – COMPLETE PROJECT DELIVERABLES
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            04 // SYSTEM DELIVERABLES & MODULES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Complete Project Deliverables
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            All documented AI subsystems, user interfaces, automation workflows, and persistence engines delivered in this solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.deliverables.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-2 border-b border-slate-200 dark:border-white/10 pb-4">
                <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-400 font-bold">
                  GROUP {idx + 1} // {group.groupTag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {group.groupName}
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 – CORE AI & AUTOMATION MODULES
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            05 // FUNCTIONAL BREAKDOWN
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Core AI & Automation Modules
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Detailed inspection of each major functional module, its AI processing mechanism, and user interaction workflow.
          </p>
        </div>

        <div className="space-y-10">
          {d.modules.map((mod) => (
            <div
              key={mod.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Module Text Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                  {mod.badge}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {mod.name}
                </h3>

                <p className="text-xs text-cyan-300 font-mono leading-relaxed">
                  <span className="font-bold uppercase">Purpose:</span> {mod.purpose}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {mod.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Input / Output Flow:
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {mod.inputOutput}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                      AI / Automation Mechanism:
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {mod.aiProcess}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                    Verified Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.keyFeatures.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module Screenshot */}
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group cursor-pointer relative bg-black/50"
                  onClick={() => setLightbox({
                    url: mod.image,
                    title: mod.name,
                    caption: mod.description
                  })}
                >
                  <img
                    src={mod.image}
                    alt={mod.name}
                    className="w-full h-auto object-cover max-h-[360px] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" /> Inspect Screenshot in Lightbox
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 – AI WORKFLOW & DATA PIPELINE
      ========================================================================= */}
      <section className="space-y-8 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            06 // DATA JOURNEY & EXECUTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Intelligent Workflow & Data Processing
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {d.workflow.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.workflow.stages.map((stg) => (
            <div key={stg.stageNumber} className="p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  STAGE {stg.stageNumber}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">PIPELINE</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {stg.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {stg.action}
              </p>
              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Generated Output:</span>
                <span className="text-xs font-mono text-cyan-300 font-semibold">{stg.output}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 – PROJECT SCREENSHOT GALLERY & LIGHTBOX
      ========================================================================= */}
      <section className="space-y-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              07 // VISUAL VERIFICATION GALLERY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Inside the Project
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Every production screen and diagnostic interface captured directly from the project documentation. Click any visual to inspect in the full-resolution lightbox.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveGalleryCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  activeGalleryCat === cat
                    ? 'bg-cyan-500 text-navy-950 shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map(screen => (
            <div
              key={screen.id}
              onClick={() => setLightbox({ url: screen.image, title: screen.title, caption: screen.caption })}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all shadow-md hover:shadow-2xl cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={screen.image}
                  alt={screen.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                    {screen.aspectBadge}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    {screen.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {screen.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 pt-1 font-normal">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 – TECHNOLOGY STACK & ENGINEERING
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            08 // VERIFIED TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Technology Stack & Engineering
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Technologies extracted from the official project documentation and verified against the implementation files.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.techStack.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                  {cat.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {cat.technologies.length} Verified
                </span>
              </div>

              <div className="space-y-3">
                {cat.technologies.map((t, ti) => (
                  <div key={ti} className="p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{t.name}</span>
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {t.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 – API & INTEGRATION DOCUMENTATION
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            09 // API INTERFACES & SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            API & Integration Documentation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {d.apiAndIntegration.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Endpoints */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Core Application Endpoints</span>
            </h3>

            {d.apiAndIntegration.endpoints.map((ep, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    ep.method === 'POST' ? 'bg-amber-500/20 text-amber-300' : 'bg-cyan-500/20 text-cyan-300'
                  }`}>
                    {ep.method}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white truncate">
                    {ep.path}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {ep.desc}
                </p>
              </div>
            ))}
          </div>

          {/* External Integrations */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>External Service Bridges</span>
            </h3>

            {d.apiAndIntegration.integrations.map((integ, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{integ.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                    {integ.purpose}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {integ.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 & 13 – SECURITY & TESTING
      ========================================================================= */}
      <section className="space-y-10 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            10 & 13 // RELIABILITY & QUALITY ASSURANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Security & Quality Assurance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Documented operational safeguards and empirical test results validated during project implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Security Safeguards */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Operational Security Safeguards</span>
            </h3>

            <div className="space-y-3.5">
              {d.security.measures.map((sec, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-cyan-300 block">{sec.title}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{sec.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QA & Testing Verification */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Documented Quality Verification</span>
            </h3>

            <div className="space-y-3.5">
              {d.testing.documentedQualityAssurance.map((qa, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300">{qa.area}</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">VERIFIED</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{qa.tests}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14 – PROJECT INFORMATION
      ========================================================================= */}
      <section className="space-y-6 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            14 // VERIFIED SPECIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Project Information
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10">
            <div className="p-5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">PROJECT NAME</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{d.projectInfo.projectName}</p>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">INDUSTRY</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{d.projectInfo.industry}</p>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">CATEGORY</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">{d.projectInfo.category}</p>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">PROJECT STATUS</span>
              <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {d.projectInfo.projectStatus}
              </p>
            </div>
          </div>
          <div className="p-5 border-t border-slate-200 dark:divide-white/10 bg-slate-50 dark:bg-black/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Verified AI Models:</span>
              {d.projectInfo.verifiedAiTechnologies.map((t, i) => (
                <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={d.meta.pdfDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download System Spec PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15 – RELATED PROJECTS
      ========================================================================= */}
      <section className="space-y-6 text-left pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              15 // EXPLORE RELATED CASE STUDIES
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Related Artificial Intelligence & Software Platforms
            </h3>
          </div>
          <button
            type="button"
            onClick={() => navigate('/portfolio')}
            className="text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {d.relatedProjects.map((rel, i) => (
            <div
              key={i}
              onClick={() => navigate(`/portfolio/${rel.slug}`)}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 p-4 space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{rel.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 16 – FINAL CTA
      ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-[#030712] border-2 border-cyan-500/30 p-8 sm:p-14 md:p-16 text-center shadow-2xl space-y-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARTIFICIAL INTELLIGENCE & AUTOMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Build Your Next Intelligent Solution?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            From AI-powered applications to intelligent automation systems, DATAMINT AARVIX helps businesses transform ideas into scalable digital solutions.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Start Your AI Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold tracking-wider uppercase border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Contact Our Engineering Team</span>
          </button>
        </div>

        <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise SLA Guaranteed</span>
          </span>
          <span>•</span>
          <span>Edge & Cloud AI Model Optimization</span>
          <span>•</span>
          <span>Full IP & Source Code Ownership</span>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/90">
              <div className="min-w-0 pr-4">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {lightbox.title}
                </h4>
                {lightbox.caption && (
                  <p className="text-xs font-mono text-cyan-400 mt-0.5 truncate">
                    {lightbox.caption}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-black/60">
              <img
                src={lightbox.url}
                alt={lightbox.title}
                className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

