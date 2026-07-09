import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight, Monitor } from 'lucide-react';


export default function ContactForm() {
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web-dev',
    budget: '$10k - $25k',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSftMUSMauNmiia6y1_fXmLHzphn0CKeG1aEbN2cPXpIe965Tg/formResponse";
    
    const data = new FormData();
    data.append("entry.1040997170", formData.name);
    data.append("entry.2131720010", formData.email);
    data.append("entry.392805212", formData.company);
    data.append("entry.1042122459", formData.projectType);
    // Budget is not captured in UI currently, skipping
    data.append("entry.153725664", formData.message);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data
      });
      
      // Delay slightly for premium feel even after network finishes
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            projectType: 'web-dev',
            budget: '$10k - $25k',
            message: ''
          });
        }, 5000);
      }, 500);

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-between bg-brand-black z-10 px-6 md:px-12 lg:px-20 pt-24 pb-8 overflow-hidden"
    >
      {/* Background massive outlined word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="font-sans text-[20vw] font-bold text-transparent stroke-2 tracking-[0.2em] uppercase opacity-[0.02] select-none" style={{ WebkitTextStroke: '2px rgba(199, 168, 109, 0.4)' }}>
          Connect
        </span>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-brand-gold/2 blur-[110px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-orange-500/2 blur-[90px]" />
      </div>

      {/* Main Grid Content */}
      <div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start flex-grow mb-16 z-10"
      >

        {/* Left Column: Contact details & Info */}
        <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-bold">
                Get in Touch
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-brand-white tracking-wide mb-6">
              Let’s Build <br />
              <span className="italic font-normal gold-gradient-text">Something Exceptional</span>.
            </h2>

            <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              Whether you're launching a new product, scaling an existing platform, or refining your user experience — we’d love to hear about your vision.
            </p>


          </div>

          {/* Quick contact channels */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 bg-brand-gray/30 text-gray-400 group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-all duration-300">
                <Mail size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-sans tracking-widest text-gray-500 uppercase">Email</span>
                <a href="mailto:contact@fennechron.com" className="text-xs font-sans text-brand-white hover:text-brand-gold transition-colors duration-300">
                  contact@fennechron.com
                </a>
              </div>
            </div>

            
          </div>

          {/* Decorative Contact Image */}
          
        </div>

        {/* Right Column: Glassmorphic Form */}
        <div className="lg:col-span-7 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full glass-card p-8 sm:p-10 rounded-3xl border border-white/5 relative"
          >
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="E.g. alex@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Project Category</label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold transition-all duration-300"
                      >
                        <option value="web-dev" className="bg-brand-black text-brand-white">Web Platform</option>
                        <option value="mobile-dev" className="bg-brand-black text-brand-white">Mobile Application</option>
                        <option value="design-sys" className="bg-brand-black text-brand-white">UI/UX Design System</option>
                        <option value="other" className="bg-brand-black text-brand-white">Other</option> 
                      </select>
                    </div>
                  </div>
                   

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Project Overview</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about the digital solution you want to deploy..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 py-4 rounded-xl bg-brand-gold text-brand-black font-sans text-xs font-bold tracking-widest uppercase hover:bg-brand-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group/submit disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight size={14} className="transform group-hover/submit:translate-x-1.5 transition-transform duration-300" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center font-sans"
                >
                  {/* Glowing success ring */}
                  <div className="w-16 h-16 rounded-full border border-brand-gold bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-[0_0_20px_rgba(199,168,109,0.2)] mb-6 animate-pulse">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl text-brand-white font-light mb-2">
                    Message Sent
                  </h3>
                  <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-brand-gold mb-6 block">
                    We have received your message
                  </span>
                  <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed">
                    Thank you for reaching out. We will review your project details and get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full mt-24 border-t border-white/5 pt-12 pb-8 z-10">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/Fennechron_Logo.png" alt="Fennechron Labs Logo" loading="lazy" decoding="async" className="w-12 h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold tracking-[0.3em] text-brand-white uppercase">
                Fennechron
              </span>
              <span className="font-sans text-[9px] font-light tracking-[0.5em] text-brand-gold uppercase">
                Labs
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-brand-gold/30" />

          {/* Details */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-[10px] font-sans tracking-[0.2em] uppercase text-gray-500">
            <span>© {new Date().getFullYear()} Fennechron Labs. All Rights Reserved.</span>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Protocol</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
