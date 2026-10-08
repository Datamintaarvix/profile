import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { companyInfo } from '../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-slate-900/60 dark:bg-navy-950/80 backdrop-blur-xl animate-fadeIn" />

      <div className="relative w-full max-w-2xl rounded-2xl glass-panel p-6 sm:p-8 z-10 my-auto animate-scaleUp border border-slate-200 dark:border-white/15 max-h-[85vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-brand" />
            ) : (
              <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-brand" />
            )}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 pr-2">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{companyInfo.name}</strong>, we respect your privacy and are committed to safeguarding any technical data or personal contact credentials you share through our portal.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">1. Information Collection</h4>
              <p>
                We only collect information voluntarily submitted via project enquiry forms, quote builders, and career submissions (e.g. name, email, phone, and project briefs).
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">2. Non-Disclosure & Security</h4>
              <p>
                All project requirements, business logic, and code assets remain strictly confidential under mutual NDA standards. We never sell, lease, or distribute information to third-party ad networks.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">3. Contact</h4>
              <p>
                For privacy compliance inquiries, contact our data officer at <a href={`mailto:${companyInfo.email}`} className="text-cyan-600 dark:text-cyan-brand underline">{companyInfo.email}</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{companyInfo.name}</strong>. By accessing this corporate website or initiating project engagements, you acknowledge and agree to the following terms.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">1. Engagement & Quotes</h4>
              <p>
                All estimates, quotes, and delivery roadmaps provided via this website represent preliminary technical estimates subject to final Statement of Work (SOW) execution.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">2. Intellectual Property</h4>
              <p>
                Upon final project delivery and financial settlement according to contracted milestones, 100% of custom-developed codebase and client assets transfer to the client organization.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">3. Governing Law</h4>
              <p>
                Agreements are governed in accordance with the corporate jurisdiction of Bangalore, Karnataka, India.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-white/10 shrink-0 text-right">
          <button
            onClick={onClose}
            className="btn-primary px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
