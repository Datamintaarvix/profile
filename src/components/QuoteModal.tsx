import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PhoneInput } from './PhoneInput';
import { sendAdminNotification } from '../services/formService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialPackage,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialService || 'Web Development',
    selectedPackage: initialPackage || '',
    description: '',
    budget: '₹50,000 – ₹1,00,000',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    'Web Development',
    'Software Development',
    'Mobile App',
    'UI/UX',
    'E-Commerce',
    'AI & Automation',
    'Cloud',
    'Custom Solution',
  ];

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000+',
    'Not decided',
  ];

  if (!isOpen) return null;

  const handleNext = () => {
    // Step validation before advancing
    if (currentStep === 1 && !formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (currentStep === 3 && (!formData.email.trim() || !formData.email.includes('@'))) {
      alert("Please enter a valid email address containing '@'.");
      return;
    }
    if (currentStep === 4 && !formData.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }
    if (currentStep === 6 && !formData.description.trim()) {
      alert("Please provide a brief description.");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendAdminNotification({
        formType: formData.selectedPackage ? 'Package Enquiry' : 'Get a Quote (Modal)',
        sourcePage: window.location.href,
        data: {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          package: formData.selectedPackage,
          budget: formData.budget,
          message: formData.description,
        }
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#0066FF', '#00E5BE', '#FFFFFF'],
        });
      } catch (err) {
        // Safe fallback
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 dark:bg-navy-950/80 backdrop-blur-xl transition-opacity animate-fadeIn"
      />

      {/* Layered Glass Panel Container */}
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200 dark:border-white/15 my-auto z-10 animate-scaleUp">
        {/* Ambient Backlight */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header info */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-600 dark:text-cyan-brand tracking-widest uppercase font-semibold">
                <span>Custom Proposal Builder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Tell us what you want to build.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Configure your project requirements. Receive a bespoke technical scope & timeline.
              </p>

              {/* Progress Bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span className="text-cyan-600 dark:text-cyan-brand font-semibold">{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-electric-500 dark:to-cyan-brand transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Multi-step Form Content */}
            <form onSubmit={handleSubmit} className="min-h-[220px] flex flex-col justify-between">
              <div className="py-2">
                {currentStep === 1 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 1 • What is your full name? <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                    </label>
                    <input
                      type="text"
                      autoFocus
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rachel Adams"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 2 • What is your company or organization name?
                    </label>
                    <input
                      type="text"
                      autoFocus
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Quantum Analytics Pvt Ltd (or Personal)"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 3 • What is your primary work email address? <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                    </label>
                    <input
                      type="email"
                      autoFocus
                      required
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      title="Must contain a valid email address with @"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rachel@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 4 • What phone number can we reach you at? <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                    </label>
                    <PhoneInput 
                      value={formData.phone}
                      onChange={(val) => setFormData({ ...formData, phone: val })}
                      required
                    />
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 5 • Select the primary service you require:
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-h-[240px] overflow-y-auto pr-1">
                      {serviceOptions.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                            formData.service === srv
                              ? 'bg-cyan-500/15 dark:bg-cyan-brand/15 border-cyan-500 dark:border-cyan-brand text-cyan-700 dark:text-cyan-brand font-semibold shadow-sm'
                              : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 6 • Provide a brief description of the project:
                    </label>
                    <textarea
                      rows={4}
                      autoFocus
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Outline target features, intended users, platform requirements, or existing systems to integrate..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>
                )}

                {currentStep === 7 && (
                  <div className="space-y-3 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 7 • What is your estimated investment budget?
                    </label>
                    <div className="space-y-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm font-medium transition-all ${
                            formData.budget === b
                              ? 'bg-cyan-500/15 dark:bg-cyan-brand/15 border-cyan-500 dark:border-cyan-brand text-cyan-700 dark:text-cyan-brand font-semibold shadow-sm'
                              : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          <span>{b}</span>
                          {formData.budget === b && <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-brand" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 8 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white">
                      Step 8 • Review & Submit Quote Request
                    </label>
                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs space-y-2 text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contact:</span>
                        <span className="font-semibold text-slate-900 dark:text-white">{formData.name || 'Not provided'} ({formData.email})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Organization:</span>
                        <span>{formData.company || 'Direct Client'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Selected Service:</span>
                        <span className="text-cyan-700 dark:text-cyan-brand font-semibold">{formData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Budget Range:</span>
                        <span className="text-emerald-600 dark:text-cyan-mint font-mono">{formData.budget}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-brand shrink-0" />
                      <span>Zero-obligation technical scoping. Non-disclosure agreement guaranteed.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-secondary px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Specification...</span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 px-2 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-cyan-500/15 dark:bg-cyan-brand/15 border border-cyan-500/40 dark:border-cyan-brand/40 flex items-center justify-center mx-auto text-cyan-600 dark:text-cyan-brand shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quote Request Submitted
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for your interest in DATAMINT ARVIX. We have received your project details for{' '}
                <span className="text-cyan-700 dark:text-cyan-brand font-semibold">{formData.service}</span>. Our engineering architect will prepare a formal proposal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 max-w-sm mx-auto text-xs text-slate-500 dark:text-slate-400">
              <span>Confirmation sent to: </span>
              <strong className="text-slate-900 dark:text-white block mt-0.5">{formData.email}</strong>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
