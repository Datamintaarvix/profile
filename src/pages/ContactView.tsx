import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { companyInfo } from '../data/siteData';

export const ContactView: React.FC = () => {
  return (
    <div className="pt-40 md:pt-48 pb-0 font-sans">
      
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
              In tempus nisl turpis, at ultricies dui eleifend a. Quisque et quam vel nunc consectetur pharetra euismod et elit. Morbi nibh tortor, ullamcorper id purus eu, rhoncus consequat velit.
            </p>

            <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white hover:border-cyan-brand transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Phone Number</h4>
                <p className="text-sm text-slate-400">
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-cyan-brand transition-colors">{companyInfo.phone}</a>
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white hover:border-cyan-brand transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Email Address</h4>
                <p className="text-sm text-slate-400">
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-cyan-brand transition-colors">{companyInfo.email}</a>
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white hover:border-cyan-brand transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Whatsapp</h4>
                <p className="text-sm text-slate-400">
                  <a href="#" className="hover:text-cyan-brand transition-colors">082-245-7253</a>
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 text-white hover:border-cyan-brand transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Our Office</h4>
                <p className="text-sm text-slate-400">
                  {companyInfo.location}
                </p>
              </div>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed" />
        <div className="absolute inset-0 bg-navy-950/60" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="text-white font-mono text-sm tracking-widest block mb-4">
            Hire Us Now
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-10">
            We Are Always Ready To Take A Perfect Shot
          </h2>
          <button className="bg-white text-navy-950 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-cyan-brand transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};
