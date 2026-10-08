import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/siteData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Pricing', 'Engineering', 'Support', 'Legal'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category.toLowerCase() === selectedCategory.toLowerCase());

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cyan-500/20 dark:bg-cyan-brand/20 border border-cyan-500/40 dark:border-cyan-brand/40 text-cyan-700 dark:text-cyan-brand font-semibold shadow-sm'
                : 'bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'glass-panel border-cyan-500/40 dark:border-cyan-brand/30 shadow-md'
                  : 'glass-card border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-cyan-600 dark:text-cyan-brand' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/10 dark:bg-cyan-brand/10 border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-600 dark:text-cyan-brand' : 'text-slate-500 dark:text-slate-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
