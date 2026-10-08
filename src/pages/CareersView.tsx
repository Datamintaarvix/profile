import React, { useState } from 'react';
import { ArrowRight, MapPin, Briefcase, Clock, Sparkles, CheckCircle2, UploadCloud } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { CareerApplicationModal } from '../components/CareerApplicationModal';
import { careers, CareerOpening } from '../data/siteData';
import { sendAdminNotification } from '../services/formService';

export const CareersView: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Application Form State
  const [openAppForm, setOpenAppForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [openAppFile, setOpenAppFile] = useState<File | null>(null);
  const [openAppStatus, setOpenAppStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleApply = (job: CareerOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleOpenAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!openAppForm.firstName || !openAppForm.lastName || !openAppForm.email) return;
    
    setOpenAppStatus('submitting');
    try {
      await sendAdminNotification({
        formType: 'Careers - Open Application',
        sourcePage: window.location.href,
        data: {
          name: `${openAppForm.firstName} ${openAppForm.lastName}`,
          email: openAppForm.email,
        },
        file: openAppFile
      });
      setOpenAppStatus('success');
      setOpenAppForm({ firstName: '', lastName: '', email: '' });
      setOpenAppFile(null);
    } catch (err) {
      setOpenAppStatus('error');
    }
  };

  const perks = [
    { title: 'Flexible Hybrid & Remote', desc: 'Work from our Bangalore tech office or collaborate remotely with flexible hours.' },
    { title: 'Cutting-Edge Tooling', desc: 'Modern hardware, AI dev assistants, and high-performance cloud developer environments.' },
    { title: 'Continuous Learning', desc: 'Dedicated annual budget for technical certifications, conferences, and books.' },
    { title: 'High-Impact Ownership', desc: 'Work directly on enterprise software architectures with significant architectural autonomy.' },
  ];

  return (
    <div className="pt-32 sm:pt-40 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* 1. Hero Section - Centered */}
      <section className="text-center mb-16 sm:mb-24">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4">
          Careers
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400 font-mono uppercase tracking-widest">
          <span>Home</span>
          <span className="text-cyan-brand">&gt;</span>
          <span className="text-white font-semibold">Careers</span>
        </div>
      </section>

      {/* 2. Team Section */}
      <section className="mb-24 sm:mb-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-lg leading-tight">
            Meet the team working behind our success
          </h2>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm sm:text-base">
            Our team consists of a group of talents. We solve complex engineering problems with precision. All of our team members are highly skilled and driven.
          </p>
        </div>
        
        {/* Large Team Image */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative glass-panel border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
            alt="Engineering Team" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent mix-blend-multiply" />
        </div>
      </section>

      {/* 3. Open Positions - 2 Column Grid */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Currently open positions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {careers.map((job) => (
            <div
              key={job.id}
              onClick={() => handleApply(job)}
              className="group cursor-pointer glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-brand/40 hover:bg-white/[0.03] transition-all duration-300 flex flex-col h-full"
            >
              {/* Header: Title & Arrow */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-brand transition-colors">
                  {job.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-cyan-brand group-hover:text-navy-950 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Type/Department */}
              <div className="text-xs font-mono text-slate-500 mb-6">
                {job.type} • {job.department}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                {job.description}
              </p>

              {/* Footer: Location & Salary placeholder */}
              <div className="flex items-center gap-6 text-xs font-mono text-slate-300 pt-6 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-brand" /> 
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Briefcase className="w-3.5 h-3.5" />
                  Competitive
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. General Application - Premium Unboxed Form */}
      <section className="relative w-full overflow-hidden rounded-3xl bg-navy-950 border border-white/10 p-8 sm:p-16 md:p-20">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-navy-950/0 to-navy-950/0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950/0 to-navy-950/0 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Form Context */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest mb-6">
              General Submission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Don't see a <br/>perfect fit?
            </h2>
            <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base max-w-md">
              We are constantly scouting for elite engineering and design talent. Submit your credentials, and if a role opens up that matches your expertise, our talent team will reach out directly.
            </p>
          </div>

          {/* Minimalist Form */}
          <form className="space-y-8" onSubmit={handleOpenAppSubmit}>
            {openAppStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm text-center">
                Application submitted successfully! We'll be in touch.
              </div>
            )}
            {openAppStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative">
                <input type="text" id="firstName" required value={openAppForm.firstName} onChange={(e) => setOpenAppForm({...openAppForm, firstName: e.target.value})} className="peer w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-cyan-brand focus:ring-0 transition-colors placeholder-transparent" placeholder="First Name" />
                <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-brand">First Name</label>
              </div>
              <div className="relative">
                <input type="text" id="lastName" required value={openAppForm.lastName} onChange={(e) => setOpenAppForm({...openAppForm, lastName: e.target.value})} className="peer w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-cyan-brand focus:ring-0 transition-colors placeholder-transparent" placeholder="Last Name" />
                <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-brand">Last Name</label>
              </div>
            </div>

            <div className="relative">
              <input type="email" id="email" required value={openAppForm.email} onChange={(e) => setOpenAppForm({...openAppForm, email: e.target.value})} className="peer w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-cyan-brand focus:ring-0 transition-colors placeholder-transparent" placeholder="Email Address" />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-mono text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-cyan-brand">Email Address</label>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-4">Resume / CV (PDF, DOCX)</label>
              <label className="w-full group cursor-pointer flex items-center gap-6 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-brand/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-brand group-hover:scale-110 transition-transform shrink-0">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white mb-1 group-hover:text-cyan-brand transition-colors">
                    {openAppFile ? openAppFile.name : 'Select file to upload'}
                  </span>
                  <span className="block text-xs font-mono text-slate-500">Max size: 5MB</span>
                </div>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setOpenAppFile(e.target.files[0]);
                  }
                }} />
              </label>
            </div>

            <button type="submit" disabled={openAppStatus === 'submitting'} className="btn-primary w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 mt-6 disabled:opacity-70">
              <span>{openAppStatus === 'submitting' ? 'Submitting...' : 'Submit Profile'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Modal */}
      <CareerApplicationModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
