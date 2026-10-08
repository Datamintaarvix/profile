import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { navigationItems, companyInfo } from '../data/siteData';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)] py-3'
            : 'bg-white/80 backdrop-blur-md py-4 md:py-5 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center focus:outline-none group text-left cursor-pointer"
              aria-label="DATAMINT AARVIX Home"
            >
              <Logo variant="light" height={isScrolled ? 70 : 90} useImg={true} />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-100/80 border border-slate-200/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
              {navigationItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-cyan-700 bg-white shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">

              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex btn-primary px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs md:text-sm font-semibold group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 hover:border-cyan-500/30 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-white/95 backdrop-blur-2xl border-b border-slate-200 pt-24 pb-8 px-6 animate-fadeIn">
          {/* Subtle Background Glows */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10 overflow-y-auto max-h-[60vh] py-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 mb-2">
              Menu Navigation
            </div>
            {navigationItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-600" />}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-4 relative z-10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full btn-primary py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="text-center">
              <span className="text-xs text-slate-500">
                Direct Inquiries:{' '}
                <a href={`mailto:${companyInfo.email}`} className="text-cyan-600 hover:underline font-medium">
                  {companyInfo.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
