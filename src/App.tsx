import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LegalModal } from './components/LegalModal';
import { HomeView } from './pages/HomeView';
import { AboutView } from './pages/AboutView';
import { ServicesView } from './pages/ServicesView';
import { SolutionsView } from './pages/SolutionsView';
import { PackagesView } from './pages/PackagesView';
import { ProjectsView } from './pages/ProjectsView';
import { CareersView } from './pages/CareersView';
import { ContactView } from './pages/ContactView';
import { QuoteView } from './pages/QuoteView';
import { Service } from './data/siteData';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function MainLayout() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<string | undefined>(undefined);
  const [quotePackagePrefill, setQuotePackagePrefill] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash && ['home', 'about', 'services', 'solutions', 'packages', 'projects', 'careers', 'contact', 'quote'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top whenever the tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    window.location.hash = tabId === 'home' ? '' : tabId;
  };

  const handleOpenQuote = (service?: string, packageName?: string) => {
    setQuoteServicePrefill(service);
    setQuotePackagePrefill(packageName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromHome = (service: Service) => {
    handleNavigate('services');
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#050914] text-slate-800 dark:text-slate-100 flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 transition-colors duration-300">
      {/* ========================================================
          BACKGROUND EFFECTS
          Layer 1: Light/Dark background grid
          Layer 2: Subtle radial gradients
         ======================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-60" />
        <div className="absolute inset-0 bg-radial-gradient-top pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient-mid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient-bottom pointer-events-none" />
      </div>

      {/* Sticky Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Content */}
      <main className="relative z-10 flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onSelectService={handleSelectServiceFromHome}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'solutions' && (
          <SolutionsView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'packages' && (
          <PackagesView
            onSelectPlan={(plan) => handleOpenQuote(undefined, plan)}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsView
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'careers' && (
          <CareersView />
        )}

        {currentTab === 'contact' && (
          <ContactView />
        )}

        {currentTab === 'quote' && (
          <QuoteView
            initialService={quoteServicePrefill}
            initialPackage={quotePackagePrefill}
          />
        )}
      </main>

      {/* Multi-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteServicePrefill}
        initialPackage={quotePackagePrefill}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
