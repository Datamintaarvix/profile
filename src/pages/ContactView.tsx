import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { companyInfo } from '../data/siteData';

export const ContactView: React.FC = () => {
  return (
    <div id="contact" className="pt-40 md:pt-48 pb-0 font-sans">

      {/* 1. Hero Section - Standard Style */}
      <section className="relative text-left px-4 sm:px-6 lg:px-8 mb-16 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-brand/10 border border-cyan-500/30 dark:border-cyan-brand/30 text-cyan-700 dark:text-cyan-brand text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
          <span>CONTACT DATAMINT AARVIX</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl">
          Get in touch with our team.
        </h1>
      </section>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left Column: Contact Form */}
          <div className="lg:pr-4">
            <ContactForm />
          </div>

          {/* Right Column: Text, Grid & Map */}
          <div className="space-y-12 pt-4">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Whether you're looking to discuss a new project, require technical support, or want to explore partnership opportunities, our team is ready to assist. Reach out to us directly through any of the channels below, and we'll connect you with the right experts to move your ideas forward.
            </p>

<<<<<<< HEAD
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center sm:text-left">
=======
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 text-center sm:text-left">
>>>>>>> 50b981a (Update website)
              <a href={`tel:${companyInfo.phone.replace(/[\s-]/g, '')}`} className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white group-hover:border-cyan-brand group-hover:text-cyan-brand transition-all shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Phone Number</h4>
                <p className="text-sm text-slate-400 group-hover:text-cyan-brand transition-colors">
                  {companyInfo.phone}
                </p>
              </a>

              <a href={`mailto:${companyInfo.email}`} className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white group-hover:border-cyan-brand group-hover:text-cyan-brand transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Email Address</h4>
                <p className="text-sm text-slate-400 group-hover:text-cyan-brand transition-colors">
                  {companyInfo.email}
                </p>
              </a>

              <a href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white group-hover:border-cyan-brand group-hover:text-cyan-brand transition-all shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Whatsapp</h4>
                <p className="text-sm text-slate-400 group-hover:text-cyan-brand transition-colors">
                  {companyInfo.phone}
                </p>
              </a>

              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.location)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white group-hover:border-cyan-brand group-hover:text-cyan-brand transition-all shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Our Office</h4>
                <p className="text-sm text-slate-400 group-hover:text-cyan-brand transition-colors">
                  {companyInfo.location}
                </p>
              </a>
            </div>

            {/* Map Block (Contained within right column) */}
            <div className="w-full h-[250px] sm:h-[300px] rounded-2xl overflow-hidden glass-panel border border-white/10 relative transition-all duration-700 mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124406.87784381393!2d77.50289196504245!3d12.98971485303723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Banner Section */}
      <section className="relative w-full py-24 sm:py-32 mt-12 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/contact.png')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-navy-950/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-white font-mono text-sm tracking-widest block mb-4">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or looking for the right digital solution? Let’s turn your ideas into impactful digital experiences.
          </p>
        </div>
      </section>
    </div>
  );
};
