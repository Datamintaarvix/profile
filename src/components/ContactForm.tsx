import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building, Mail, Phone, User, DollarSign, MessageSquare } from 'lucide-react';
import { services } from '../data/siteData';
import { PhoneInput } from './PhoneInput';
import { sendAdminNotification } from '../services/formService';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

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
        formType: 'Contact',
        sourcePage: window.location.href,
        data: {
          name: formData.fullName,
          email: formData.email,
          subject: formData.phone, // the form labels 'phone' as 'Subject' visually
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
              Contact Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your Name..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@yourmail.com"
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Title..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Message</label>
                <textarea
                  name="projectDetails"
                  rows={5}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  placeholder="Type Here..."
                  className="w-full bg-white/50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-brand transition-all resize-y"
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
