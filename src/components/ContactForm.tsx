import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Building, Mail, Phone, User, DollarSign, MessageSquare } from 'lucide-react';
import { services } from '../data/siteData';
import { PhoneInput } from './PhoneInput';
import { sendAdminNotification } from '../services/formService';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

const CustomSelect: React.FC<{
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}> = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/50 dark:bg-[#050914] border ${
          isOpen ? 'border-cyan-500 dark:border-cyan-brand' : 'border-slate-300 dark:border-white/10'
        } rounded-lg px-4 py-3 text-slate-900 dark:text-white text-sm focus:outline-none transition-all cursor-pointer flex justify-between items-center`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          className={`fill-current h-4 w-4 transition-transform text-slate-500 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white dark:bg-[#050914] border border-slate-300 dark:border-white/10 rounded-lg shadow-xl max-h-60 overflow-auto focus:outline-none py-1 custom-scrollbar">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                value === option
                  ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                  : 'text-slate-900 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: initialService || services[0]?.title || 'Web Development',
    projectBudget: '₹50,000 – ₹1,00,000',
    projectDetails: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000+',
    'Not decided / Consult First',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Phone, Details).');
      return;
    }

    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address containing "@".');
      return;
    }

    setStatus('submitting');

    try {
      await sendAdminNotification({
        formType: 'Service Request',
        sourcePage: window.location.href,
        data: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          service: formData.serviceRequired,
          budget: formData.projectBudget,
          message: formData.projectDetails,
        }
      });
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send enquiry. Please try again later.');
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden h-full">
      {status === 'success' ? (
        <div className="text-center py-12 px-4 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-cyan-mint/10 border border-emerald-300 dark:border-cyan-mint/30 flex items-center justify-center mx-auto text-emerald-600 dark:text-cyan-mint">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Thank you for contacting DATAMINT AARVIX. Our team will review your enquiry and get back to you shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  companyName: '',
                  serviceRequired: services[0]?.title || 'Web Development',
                  projectBudget: '₹50,000 – ₹1,00,000',
                  projectDetails: '',
                });
              }}
              className="btn-secondary px-6 py-2.5 rounded-xl text-xs uppercase font-mono tracking-wider cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div>
            <span className="text-slate-400 font-mono text-sm tracking-wider block mb-2">
              Service Request
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Start Your Project
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your Name..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@yourmail.com"
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company (Optional)"
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Service Required *</label>
                <CustomSelect
                  options={[...services.map((s) => s.title), 'Others']}
                  value={formData.serviceRequired}
                  onChange={(val) => setFormData((prev) => ({ ...prev, serviceRequired: val }))}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Expected Budget *</label>
                <CustomSelect
                  options={budgetOptions}
                  value={formData.projectBudget}
                  onChange={(val) => setFormData((prev) => ({ ...prev, projectBudget: val }))}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Project Details *</label>
                <textarea
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all resize-y"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-transparent border border-slate-900 dark:border-white text-slate-900 dark:text-white py-3.5 rounded-full text-xs font-semibold tracking-wide flex justify-center items-center gap-2 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-navy-950 transition-colors disabled:opacity-70 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Now</span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
