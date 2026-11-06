import React from 'react';
import { visionQInspectionData } from '../../data/aiProjectsData';
import { AICaseStudyLayout } from '../../components/ai-projects/AICaseStudyLayout';

interface CaseStudyPageProps {
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const VisionQInspectionCaseStudy: React.FC<CaseStudyPageProps> = ({ onOpenQuote, onNavigate }) => {
  return <AICaseStudyLayout data={visionQInspectionData} onOpenQuote={onOpenQuote} onNavigate={onNavigate} />;
};

