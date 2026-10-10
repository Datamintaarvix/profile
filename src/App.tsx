import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import { Service, services } from './data/siteData';
import { ThemeProvider } from './context/ThemeContext';
import { SEOHead } from './components/SEOHead';
import './App.css';

function MainLayout() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServicePrefill, setQuoteServicePrefill] = useState<string | undefined>(undefined);
  const [quotePackagePrefill, setQuotePackagePrefill] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [activeSubId, setActiveSubId] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Extract current tab from path
  const currentTab = location.pathname.substring(1) || 'home';

  // Scroll to top whenever the tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (tabId: string, subId?: string) => {
    setActiveSubId(subId || null);
    navigate(tabId === 'home' ? '/' : `/${tabId}`);
  };

  const handleOpenQuote = (service?: string, packageName?: string) => {
    setQuoteServicePrefill(service);
    setQuotePackagePrefill(packageName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromHome = (service: Service) => {
    handleNavigate('services', service.id);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#050914] text-slate-800 dark:text-slate-100 flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 transition-colors duration-300">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-70 dark:opacity-60" />
        <div className="absolute inset-0 bg-radial-gradient-top pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient-mid pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient-bottom pointer-events-none" />
      </div>

      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <SEOHead 
                title="DATAMINT AARVIX | Digital Technology & Software Solutions" 
                description="DATAMINT AARVIX builds modern websites, software platforms, mobile applications, AI solutions and digital experiences for growing businesses." 
                url="https://datamintaarvix.com/" 
              />
              <HomeView
                onNavigate={handleNavigate}
                onOpenQuote={handleOpenQuote}
                onSelectService={handleSelectServiceFromHome}
              />
            </>
          } />
          
          <Route path="/about" element={
            <>
              <SEOHead 
                title="About Us - DATAMINT AARVIX" 
                description="Learn about DATAMINT AARVIX, our mission to build cutting-edge digital solutions, and our expert team." 
                url="https://datamintaarvix.com/about" 
              />
              <AboutView
                onOpenQuote={() => handleOpenQuote()}
                onNavigate={handleNavigate}
              />
            </>
          } />

          <Route path="/services" element={
            <>
              <SEOHead 
                title="Our Services - DATAMINT AARVIX" 
                description="Explore our wide range of services including Web Development, Mobile Apps, AI Automation, and Cloud Solutions." 
                url="https://datamintaarvix.com/services" 
              />
              <ServicesView
                onOpenQuote={handleOpenQuote}
                onNavigate={handleNavigate}
                selectedServiceInit={activeSubId ? services.find(s => s.id === activeSubId) || null : null}
              />
            </>
          } />

          <Route path="/solutions" element={
            <>
              <SEOHead 
                title="Solutions - DATAMINT AARVIX" 
                description="Discover customized enterprise technology solutions to scale and secure your business operations." 
                url="https://datamintaarvix.com/solutions" 
              />
              <SolutionsView
                onOpenQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            </>
          } />

          <Route path="/packages" element={
            <>
              <SEOHead 
                title="Pricing Packages - DATAMINT AARVIX" 
                description="Transparent and scalable pricing packages for websites, software platforms, and mobile applications." 
                url="https://datamintaarvix.com/packages" 
              />
              <PackagesView
                onSelectPlan={(plan) => handleOpenQuote(undefined, plan)}
                onNavigate={handleNavigate}
              />
            </>
          } />

          <Route path="/projects" element={
            <>
              <SEOHead 
                title="Our Projects - DATAMINT AARVIX" 
                description="View our portfolio of successful projects and digital experiences built for growing businesses." 
                url="https://datamintaarvix.com/projects" 
              />
              <ProjectsView
                onOpenQuote={handleOpenQuote}
                onNavigate={handleNavigate}
              />
            </>
          } />

          <Route path="/careers" element={
            <>
              <SEOHead 
                title="Careers - DATAMINT AARVIX" 
                description="Join our team of passionate engineers, designers, and innovators at DATAMINT AARVIX." 
                url="https://datamintaarvix.com/careers" 
              />
              <CareersView />
            </>
          } />

          <Route path="/contact" element={
            <>
              <SEOHead 
                title="Contact Us - DATAMINT AARVIX" 
                description="Get in touch with DATAMINT AARVIX. We'd love to discuss your next big idea." 
                url="https://datamintaarvix.com/contact" 
              />
              <ContactView />
            </>
          } />

          <Route path="/quote" element={
            <>
              <SEOHead 
                title="Get a Quote - DATAMINT AARVIX" 
                description="Request a free quote for your custom software, web, or mobile app project." 
                url="https://datamintaarvix.com/quote" 
              />
              <QuoteView
                initialService={quoteServicePrefill}
                initialPackage={quotePackagePrefill}
              />
            </>
          } />

          <Route path="*" element={
            <>
              <SEOHead title="Page Not Found - DATAMINT AARVIX" description="The page you are looking for does not exist." />
              <HomeView
                onNavigate={handleNavigate}
                onOpenQuote={handleOpenQuote}
                onSelectService={handleSelectServiceFromHome}
              />
            </>
          } />
        </Routes>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quoteServicePrefill}
        initialPackage={quotePackagePrefill}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
