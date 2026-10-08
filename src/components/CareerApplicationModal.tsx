import React, { useState } from 'react';
import { X, CheckCircle2, Send, Mail, Phone, User, FileText, Globe } from 'lucide-react';
import { CareerOpening } from '../data/siteData';
import { PhoneInput } from './PhoneInput';
import { sendAdminNotification } from '../services/formService';

interface CareerApplicationModalProps {
  job: CareerOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CareerApplicationModal: React.FC<CareerApplicationModalProps> = ({
  job,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    resumeNote: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Resume file must be less than 5MB.');
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    // Validate type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      setErrorMsg('Invalid file type. Please upload a PDF or DOC/DOCX.');
      setResumeFile(null);
      e.target.value = '';
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address containing "@".');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendAdminNotification({
        formType: 'Careers',
        sourcePage: window.location.href,
        data: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          position: job.title,
          experience: 'Not specified',
          location: job.location,
          portfolio: formData.portfolioUrl,
          coverLetter: formData.resumeNote,
        },
        file: resumeFile,
      });
      setIsSuccess(true);
    } catch (error) {
      setErrorMsg('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMsg('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      portfolioUrl: '',
      resumeNote: '',
    });
    setResumeFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/60 dark:bg-navy-950/80 backdrop-blur-xl animate-fadeIn" />

      <div className="relative w-full max-w-lg rounded-2xl glass-panel p-6 sm:p-8 z-10 my-auto animate-scaleUp border border-slate-200 dark:border-white/15 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-brand font-semibold block mb-1">
                Candidate Application
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {job.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {job.department} • {job.location} • {job.type}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Email <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <input
                      type="email"
                      required
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      title="Must contain a valid email address with @"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Phone <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                  </label>
                  <PhoneInput 
                    value={formData.phone}
                    onChange={(val) => setFormData({ ...formData, phone: val })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Resume (PDF, DOC) <span className="text-cyan-600 dark:text-cyan-brand">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                  onChange={handleFileChange}
                  className="w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-cyan-50 dark:file:bg-cyan-900/30 file:text-cyan-700 dark:file:text-cyan-brand hover:file:bg-cyan-100 dark:hover:file:bg-cyan-900/50 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Summary / Brief Cover Note
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <textarea
                    rows={3}
                    value={formData.resumeNote}
                    onChange={(e) => setFormData({ ...formData, resumeNote: e.target.value })}
                    placeholder="Highlight your relevant experience, technical stack, or project achievements..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-cyan-mint/15 border border-emerald-300 dark:border-cyan-mint/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-cyan-mint">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Application Received</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Thank you for applying. Our HR team will review your application and get back to you if your profile matches an available opportunity.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="btn-secondary px-6 py-2.5 rounded-xl text-xs uppercase font-mono tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
