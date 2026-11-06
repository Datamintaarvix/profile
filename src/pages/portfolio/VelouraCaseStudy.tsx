import React from 'react';
import { caseStudies } from '../../data/caseStudyData';
import { CaseStudyLayout } from '../../components/case-study/CaseStudyLayout';

interface CaseStudyPageProps {
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const VelouraCaseStudy: React.FC<CaseStudyPageProps> = ({ onOpenQuote, onNavigate }) => {
  const data = caseStudies['veloura'];
  return <CaseStudyLayout data={data} onOpenQuote={onOpenQuote} onNavigate={onNavigate} />;
};

