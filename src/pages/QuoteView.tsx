import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendAdminNotification } from '../services/formService';

interface QuoteViewProps {
  initialService?: string;
  initialPackage?: string;
}

export const QuoteView: React.FC<QuoteViewProps> = ({
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
    packageTier: initialPackage || '',
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

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendAdminNotification({
        formType: formData.packageTier ? 'Package Enquiry' : 'Get a Quote',
        sourcePage: window.location.href,
        data: {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          package: formData.packageTier,
          budget: formData.budget,
          message: formData.description,
        }
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#0066FF', '#00E5BE', '#FFFFFF'],
        });
      } catch (err) {}
    } catch (error) {
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-brand/10 border border-cyan-brand/30 text-cyan-brand text-xs font-mono uppercase tracking-widest">
          <span>PROJECT ESTIMATION</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tell us what you want to build.
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Complete this quick specification. Our technical leads will outline project architecture, technical scope, and provide a fixed quote.
        </p>
      </div>

      {/* Main Multi-Step Glass Panel */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-brand/10 blur-3xl pointer-events-none" />

        {!isSuccess ? (
          <div>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span className="text-cyan-brand font-semibold">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-electric-500 to-cyan-brand transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="min-h-[260px] flex flex-col justify-between">
              <div className="py-2">
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 1 • Your Full Name
                    </label>
                    <input
                      type="text"
                      autoFocus
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Thorne"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-lg focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                    />
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 2 • Company / Business Name
                    </label>
                    <input
                      type="text"
                      autoFocus
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Dynamics Ltd (or Individual)"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-lg focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                    />
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 3 • Business Email Address
                    </label>
                    <input
                      type="email"
                      autoFocus
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@apexdynamics.com"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-lg focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                    />
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 4 • Direct Contact Phone
                    </label>
                    <input
                      type="tel"
                      autoFocus
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 90000 00000"
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-lg focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                    />
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 5 • Select Required Service
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {serviceOptions.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                            formData.service === srv
                              ? 'bg-cyan-brand/20 border-cyan-brand text-cyan-brand shadow-glow-cyan'
                              : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 6 • Project Description
                    </label>
                    <textarea
                      rows={5}
                      autoFocus
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Outline target user base, functionality, platform requirements, or technical constraints..."
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand resize-none"
                    />
                  </div>
                )}

                {currentStep === 7 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 7 • Estimated Budget
                    </label>
                    <div className="space-y-2.5">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`w-full p-4 rounded-xl border flex items-center justify-between text-sm font-semibold transition-all ${
                            formData.budget === b
                              ? 'bg-cyan-brand/20 border-cyan-brand text-cyan-brand shadow-glow-cyan'
                              : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                          }`}
                        >
                          <span>{b}</span>
                          {formData.budget === b && <CheckCircle2 className="w-5 h-5 text-cyan-brand" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 8 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-lg font-bold text-white">
                      Step 8 • Review & Submit Quote Request
                    </label>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-sm text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Contact Person:</span>
                        <span className="font-semibold text-white">{formData.name || 'Not provided'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Company / Entity:</span>
                        <span className="font-semibold text-white">{formData.company || 'Direct'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Email Address:</span>
                        <span className="text-cyan-brand">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Selected Service:</span>
                        <span className="text-cyan-mint font-semibold">{formData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Budget Range:</span>
                        <span className="font-mono text-cyan-brand">{formData.budget}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Step Navigation Buttons */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-secondary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary px-8 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-12 px-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-cyan-brand/15 border border-cyan-brand/30 flex items-center justify-center mx-auto text-cyan-brand shadow-glow-cyan">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-extrabold text-white">
              Quote Request Submitted
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              We have received your requirements for <strong className="text-cyan-brand">{formData.service}</strong>. A dedicated engineering architect will follow up with technical recommendations.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setIsSuccess(false);
                }}
                className="btn-primary px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
