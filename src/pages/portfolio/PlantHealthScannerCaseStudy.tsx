import React from 'react';
import { plantHealthScannerData } from '../../data/aiProjectsData';
import { AICaseStudyLayout } from '../../components/ai-projects/AICaseStudyLayout';

interface CaseStudyPageProps {
  onOpenQuote?: () => void;
  onNavigate?: (tabId: string) => void;
}

export const PlantHealthScannerCaseStudy: React.FC<CaseStudyPageProps> = ({ onOpenQuote, onNavigate }) => {
  return <AICaseStudyLayout data={plantHealthScannerData} onOpenQuote={onOpenQuote} onNavigate={onNavigate} />;
};

