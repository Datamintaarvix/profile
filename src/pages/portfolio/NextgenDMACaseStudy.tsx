import React from 'react';
import { caseStudies } from '../../data/caseStudyData';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout';

interface CaseStudyPageProps {
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const NextgenDMACaseStudy: React.FC<CaseStudyPageProps> = ({ onOpenQuote, onNavigate }) => {
  const data = caseStudies['nextgen-dma'];
  return <CaseStudyLayout data={data} onOpenQuote={onOpenQuote} onNavigate={onNavigate} />;
};

