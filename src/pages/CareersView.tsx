import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, MapPin, Briefcase, Clock, CheckCircle2, UploadCloud, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { careers } from '../data/siteData';
import { sendAdminNotification } from '../services/formService';

const CustomSelect: React.FC<{
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}> = ({ options, value, onChange, placeholder, label }) => {
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
      {label && <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">{label}</label>}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#050914]/50 border ${
          isOpen ? 'border-cyan-brand' : 'border-white/10'
        } rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none transition-all cursor-pointer flex justify-between items-center`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-[#050914] border border-white/10 rounded-lg shadow-xl max-h-60 overflow-auto focus:outline-none py-1 custom-scrollbar">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`px-4 py-3 text-sm cursor-pointer transition-colors ${
                value === option
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-white/10'
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

export const CareersView: React.FC = () => {
  const formRef = useRef<HTMLElement>(null);
  const openPositionsRef = useRef<HTMLElement>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: careers.length > 0 ? careers[0].title : '',
    experience: 'Fresher (0-1 Years)',
    location: '',
    linkedin: '',
    portfolio: '',
    message: '',
    consent: false,
  });

  const experienceOptions = [
    'Fresher (0-1 Years)',
    '1-3 Years',
    '3-5 Years',
    '5+ Years'
  ];

  const positionOptions = careers.map(c => c.title);

  const [openAppFile, setOpenAppFile] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [appStatus, setAppStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleApply = (jobTitle: string) => {
    setApplicationForm(prev => ({ ...prev, position: jobTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setAppStatus('error');
        setErrorMessage('Please upload a PDF file.');
        setOpenAppFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setAppStatus('error');
        setErrorMessage('File size must be less than 5MB.');
        setOpenAppFile(null);
        return;
      }
      setOpenAppFile(file);
      if(appStatus === 'error') setAppStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationForm.consent) {
      setAppStatus('error');
      setErrorMessage('You must agree to the processing of your application information.');
      return;
    }
    if (!openAppFile) {
      setAppStatus('error');
      setErrorMessage('Please upload your resume (PDF).');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(applicationForm.email.trim())) {
      setAppStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    setAppStatus('submitting');
    setErrorMessage('');
    try {
      await sendAdminNotification({
        formType: 'Careers',
        sourcePage: window.location.href,
        data: {
          name: applicationForm.fullName.trim(),
          email: applicationForm.email.trim(),
          phone: applicationForm.phone.trim(),
          position: applicationForm.position,
          role: applicationForm.position,
          experience: applicationForm.experience,
          location: applicationForm.location.trim(),
          linkedin: applicationForm.linkedin.trim(),
          portfolio: applicationForm.portfolio.trim(),
          message: applicationForm.message.trim(),
          _honeypot: honeypot,
        },
        file: openAppFile
      });
      setAppStatus('success');
      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        position: careers.length > 0 ? careers[0].title : '',
        experience: 'Fresher (0-1 Years)',
        location: '',
        linkedin: '',
        portfolio: '',
        message: '',
        consent: false,
      });
      setOpenAppFile(null);
    } catch (err: any) {
      setAppStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="font-sans text-slate-300">
      
      {/* 1. Hero Section (Text left, Image right) */}
      <section className="pt-40 sm:pt-48 md:pt-56 pb-20 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono uppercase tracking-widest mb-8">
              Careers at Datamint Aarvix
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Build What<br className="hidden sm:block" /> Comes Next.
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 max-w-xl">
              Join a team creating modern digital experiences, scalable software, and technology solutions that solve real business problems.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => openPositionsRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                className="btn-primary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Explore Open Positions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[5/4] border border-white/10 w-full">
            <img 
              src="/carear/c3.png" 
              alt="Professional workplace and collaborative team" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* 2. Introduction - Our Approach (Image left, Text right) */}
      <section className="py-20 sm:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
              <img 
                src="/carear/c2.png" 
                alt="Developers working together" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-brand uppercase tracking-widest mb-4">Why Datamint Aarvix</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Work on Ideas<br className="hidden sm:block" /> That Matter.</h2>
              <p className="text-slate-400 leading-relaxed mb-12 text-base sm:text-lg">
                At DATAMINT AARVIX, we bring together technology, design, and problem-solving to build digital solutions for modern businesses. We value clear thinking, continuous learning, ownership, and collaboration.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cyan-brand font-mono text-xs">01</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1.5">Real-world projects</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Build software that directly impacts business operations and enterprise growth.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cyan-brand font-mono text-xs">02</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1.5">Collaborative problem-solving</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Work alongside experts across engineering, design, and strategy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cyan-brand font-mono text-xs">03</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1.5">Continuous skill development</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Stay ahead with modern tooling, best practices, and learning opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cyan-brand font-mono text-xs">04</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1.5">Opportunities to contribute ideas</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">Your voice matters. We encourage innovative approaches and architectural improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Work Culture (Text left, Image right) */}
      <section className="py-20 sm:py-32 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-xs font-mono text-cyan-brand uppercase tracking-widest mb-4">Our Culture</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">A Place to Learn,<br className="hidden sm:block" /> Create, and Grow.</h2>
              <p className="text-slate-400 leading-relaxed mb-12 text-base sm:text-lg">
                We believe good work comes from curiosity, accountability, and people who enjoy solving meaningful problems together.
              </p>
              
              <div className="space-y-10 border-l border-white/10 pl-6 md:pl-8">
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-brand" />
                  <div className="text-xs font-mono text-slate-500 mb-1 tracking-widest">PRINCIPLE 01</div>
                  <h4 className="text-white font-semibold text-lg mb-2">Ownership</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Take responsibility for your work and contribute ideas actively to shape the product's direction.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-brand" />
                  <div className="text-xs font-mono text-slate-500 mb-1 tracking-widest">PRINCIPLE 02</div>
                  <h4 className="text-white font-semibold text-lg mb-2">Collaboration</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Work closely with teammates across design, development, and delivery to achieve shared goals.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-brand" />
                  <div className="text-xs font-mono text-slate-500 mb-1 tracking-widest">PRINCIPLE 03</div>
                  <h4 className="text-white font-semibold text-lg mb-2">Continuous Learning</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Explore new tools, strengthen your skills, and improve constantly through practical experience.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
              <img 
                src="/carear/c1.png" 
                alt="Team discussion and design review" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Can Work On */}
      <section className="py-20 sm:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono text-cyan-brand uppercase tracking-widest mb-4">Opportunities</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Find Your Place<br className="hidden sm:block" /> on the Team.</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              Explore opportunities across development, design, and emerging technology. Select a role below to view its details and begin your application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">Frontend and full-stack development</h4>
                <p className="text-sm text-slate-400">Build high-performance, accessible, and responsive user interfaces using modern frameworks.</p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">Backend systems and API development</h4>
                <p className="text-sm text-slate-400">Architect scalable databases, secure microservices, and robust data pipelines.</p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">UI/UX and digital product design</h4>
                <p className="text-sm text-slate-400">Craft intuitive user journeys, wireframes, and premium digital design systems.</p>
              </div>
            </div>
            
            {/* Right Column content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">AI and machine learning</h4>
                <p className="text-sm text-slate-400">Develop intelligent agents, automation pipelines, and integrate foundational LLMs.</p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">Digital marketing and content</h4>
                <p className="text-sm text-slate-400">Drive engagement, conceptualize campaigns, and manage brand voice.</p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-brand/30 transition-colors">
                <h4 className="text-white font-bold text-lg mb-2">Other emerging roles</h4>
                <p className="text-sm text-slate-400">Roles across project management, operations, and specialized engineering disciplines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Positions - Interactive Section */}
      <section ref={openPositionsRef} className="py-20 sm:py-32 border-t border-white/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-mono text-cyan-brand uppercase tracking-widest mb-4">Open Positions</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Explore Available Roles.</h2>
            <p className="text-slate-400 text-lg">Find an opportunity that matches your interests and experience.</p>
          </div>
          
          <div className="border-t border-white/10">
            {careers.map(job => (
              <div key={job.id} className="group border-b border-white/10 transition-colors duration-300">
                <div 
                  onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                  className="cursor-pointer py-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.02] px-4 -mx-4 rounded-2xl transition-all"
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-brand transition-colors mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-cyan-brand" /> {job.department}</span>
                      {job.type && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.type}</span>}
                      {job.location && <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>}
                    </div>
                    {job.description && (
                      <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
                        {job.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-6 md:mt-0 md:ml-8 flex items-center self-start md:self-center">
                    <div className={`w-10 h-10 rounded-full border ${expandedJobId === job.id ? 'border-cyan-brand bg-cyan-brand/10 text-cyan-brand' : 'border-white/10 text-slate-400'} flex items-center justify-center group-hover:border-cyan-brand group-hover:text-cyan-brand transition-all duration-300`}>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${expandedJobId === job.id ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </div>
                
                {/* Expandable Role Details */}
                {expandedJobId === job.id && (
                  <div className="py-8 px-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2 text-slate-300 text-sm leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      <div>
                        <h4 className="text-white font-bold mb-5 tracking-wide text-base">Responsibilities</h4>
                        <ul className="space-y-4">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-brand mt-2 shrink-0"/>
                              <span className="text-slate-400">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-5 tracking-wide text-base">Required Skills & Experience</h4>
                        <ul className="space-y-4">
                          {job.requirements.map((r, i) => (
                            <li key={i} className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-brand mt-2 shrink-0"/>
                              <span className="text-slate-400">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={() => handleApply(job.title)}
                      className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/10 hover:bg-cyan-brand hover:text-navy-950 text-white rounded-xl font-bold uppercase tracking-widest transition-all text-xs"
                    >
                      Apply for This Role <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Single Application Form */}
      <section ref={formRef} className="py-24 sm:py-32 border-t border-white/10 relative overflow-hidden bg-white/[0.01] scroll-mt-24">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-navy-950/0 to-navy-950/0 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-4">
              <div className="text-xs font-mono text-cyan-brand uppercase tracking-widest mb-4">Your Next Opportunity</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Let's Build<br className="hidden lg:block"/> Something<br className="hidden lg:block"/> Together.
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-base">
                Select an available role from the dropdown and submit your details. Our HR team reviews every application carefully and will reach out if there's a strong fit.
              </p>
              
              {applicationForm.position && (
                <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">Selected Role</div>
                  <div className="text-white font-bold text-lg">{applicationForm.position}</div>
                </div>
              )}
              
              <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-900/50">
                <div className="text-xs font-mono text-cyan-brand mb-2 uppercase tracking-widest">HR Contact</div>
                <a href="mailto:hr@datamintaarvix.com" className="text-white hover:text-cyan-brand transition-colors text-base font-medium">hr@datamintaarvix.com</a>
              </div>
            </div>
            
            {/* Right Column: Form */}
            <div className="lg:col-span-8 bg-[#050914]/80 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 sm:p-10 md:p-14">
              {appStatus === 'success' ? (
                <div className="text-center py-16 px-4 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Application Submitted</h3>
                  <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto">
                    Thank you for your interest in DATAMINT AARVIX. Our HR team will review your application and contact you directly.
                  </p>
                  <div className="pt-8">
                    <button
                      onClick={() => setAppStatus('idle')}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white hover:text-navy-950 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot Spam Protection Field */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {appStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicationForm.fullName}
                        onChange={(e) => setApplicationForm({...applicationForm, fullName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Current Location *</label>
                      <input
                        type="text"
                        required
                        value={applicationForm.location}
                        onChange={(e) => setApplicationForm({...applicationForm, location: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="e.g. Bangalore, India"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <CustomSelect
                        label="Position Applying For *"
                        options={positionOptions}
                        value={applicationForm.position}
                        onChange={(val) => setApplicationForm({...applicationForm, position: val})}
                      />
                    </div>

                    <CustomSelect
                      label="Experience Level *"
                      options={experienceOptions}
                      value={applicationForm.experience}
                      onChange={(val) => setApplicationForm({...applicationForm, experience: val})}
                    />

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={applicationForm.linkedin}
                        onChange={(e) => setApplicationForm({...applicationForm, linkedin: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Portfolio / GitHub URL</label>
                      <input
                        type="url"
                        value={applicationForm.portfolio}
                        onChange={(e) => setApplicationForm({...applicationForm, portfolio: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Cover Letter / Message</label>
                    <textarea
                      rows={4}
                      value={applicationForm.message}
                      onChange={(e) => setApplicationForm({...applicationForm, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-brand transition-colors resize-y"
                      placeholder="Tell us why you'd be a great fit for the team..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Resume / CV (PDF Only) *</label>
                    <label className="w-full group cursor-pointer flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl border border-dashed border-white/20 bg-white/[0.01] hover:bg-white/[0.03] hover:border-cyan-brand/50 transition-all text-center sm:text-left">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-300 group-hover:bg-cyan-brand/10 group-hover:text-cyan-brand transition-colors shrink-0">
                        <UploadCloud className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="block text-base font-semibold text-white mb-1.5 group-hover:text-cyan-brand transition-colors">
                          {openAppFile ? openAppFile.name : 'Click to select PDF file'}
                        </span>
                        <span className="block text-sm text-slate-500">Maximum file size: 5MB. PDF format only.</span>
                      </div>
                      {openAppFile && (
                        <div className="sm:ml-auto mt-4 sm:mt-0">
                          <span className="text-xs text-cyan-brand font-mono uppercase tracking-widest border border-cyan-brand/30 px-3 py-1.5 rounded-full bg-cyan-brand/10">Selected</span>
                        </div>
                      )}
                      <input type="file" className="hidden" accept=".pdf,application/pdf" onChange={handleFileChange} />
                    </label>
                  </div>

                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={applicationForm.consent}
                      onChange={(e) => setApplicationForm({...applicationForm, consent: e.target.checked})}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-brand focus:ring-cyan-brand focus:ring-offset-[#050914] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-400 leading-relaxed cursor-pointer select-none">
                      I agree to the processing of my application information and understand that my data will be securely stored and reviewed by the DATAMINT AARVIX HR team. *
                    </label>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={appStatus === 'submitting'}
                      className="btn-primary w-full py-4 sm:py-5 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {appStatus === 'submitting' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-24 sm:py-32 border-t border-white/10 text-center relative overflow-hidden bg-[#050914]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/50 to-transparent opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">Your Next Chapter<br className="hidden sm:block"/> Starts Here.</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Explore opportunities to contribute, learn, and help build digital products that make a difference.
          </p>
          <button 
            onClick={() => openPositionsRef.current?.scrollIntoView({ behavior: 'smooth' })} 
            className="btn-primary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 mx-auto transition-transform hover:-translate-y-1"
          >
            View Open Positions <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
