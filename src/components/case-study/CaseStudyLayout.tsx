import React, { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { CaseStudyData } from '../../data/caseStudyData';
import { SEOHead } from '../SEOHead';
import { CaseStudyHeader } from './CaseStudyHeader';
import { ProjectHeroImage } from './ProjectHeroImage';
import { ProjectDeliverables } from './ProjectDeliverables';
import { ProjectDocumentation } from './ProjectDocumentation';
import { ProjectPreview } from './ProjectPreview';
import { ProjectGallery } from './ProjectGallery';
import { ProjectFeatures } from './ProjectFeatures';
import { TechnologyStack } from './TechnologyStack';
import { ProjectInformation } from './ProjectInformation';
import { ProjectNavigation } from './ProjectNavigation';
import { CaseStudyCTA } from './CaseStudyCTA';

interface CaseStudyLayoutProps {
  data: CaseStudyData;
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ data }) => {
  const [lightbox, setLightbox] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data.slug]);

  const handleExpand = (url: string, title: string, subtitle?: string) => {
    setLightbox({ url, title, subtitle });
  };

  return (
    <div className="pt-28 sm:pt-36 md:pt-40 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
      {/* 00. Dynamic Case Study SEO Head */}
      <SEOHead
        title={data.seoTitle}
        description={data.seoDescription}
        url={`https://datamintaarvix.com/portfolio/${data.slug}`}
      />

      {/* SECTION 01 – CASE STUDY HEADER */}
      <CaseStudyHeader data={data} />

      {/* SECTION 02 – MAIN PROJECT SHOWCASE */}
      <ProjectHeroImage data={data} onExpand={handleExpand} />

      {/* SECTION 03 – COMPLETE PROJECT DELIVERABLES */}
      <ProjectDeliverables data={data} />

      {/* SECTION 04 – SCOPE OF WORK & DOCUMENTATION */}
      <ProjectDocumentation data={data} />

      {/* SECTION 05 – LIVE WEBSITE PREVIEW */}
      <ProjectPreview data={data} />

      {/* SECTION 06 – VISUAL PROJECT GALLERY */}
      <ProjectGallery data={data} onExpand={handleExpand} />

      {/* SECTION 07 – PROJECT FEATURES */}
      <ProjectFeatures data={data} />

      {/* SECTION 08 – TECHNOLOGY & ENGINEERING */}
      <TechnologyStack data={data} />

      {/* SECTION 09 – PROJECT INFORMATION */}
      <ProjectInformation data={data} />

      {/* SECTION 10 – PROJECT NAVIGATION */}
      <ProjectNavigation data={data} />

      {/* SECTION 11 – FINAL CONVERSION SECTION */}
      <CaseStudyCTA />

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] bg-slate-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/90">
              <div className="min-w-0 pr-4">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {lightbox.title}
                </h4>
                {lightbox.subtitle && (
                  <p className="text-xs font-mono text-cyan-400 mt-0.5 truncate">
                    {lightbox.subtitle}
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

            {/* Modal Image Frame */}
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

