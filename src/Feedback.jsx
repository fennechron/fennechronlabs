import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rating: 5,
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUxixPPotxmIHHsRTYLkHWkhKbVhIHFvuPor_KfhQtSwkI-Q/formResponse";
    
    const data = new FormData();
    data.append("entry.1655329318", formData.name);
    data.append("entry.1839775992", formData.email);
    data.append("entry.16139828", formData.company);
    data.append("entry.1173947614", formData.rating.toString());
    data.append("entry.413364473", formData.message);

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
        
        // Reset form after a delay
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', company: '', rating: 5, message: '' });
        }, 6000);
      }, 500);

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      // Even if there's an error, we might still want to show success since no-cors hides response details,
      // but if fetch completely fails (e.g. no network), we handle it.
      alert("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-gold/25 selection:text-brand-white">
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-24 min-h-screen flex flex-col">
        {/* Back Link */}
        <a 
          href="/"
          className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-gray-500 hover:text-brand-gold transition-colors duration-300 w-fit mb-8 group"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </a>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-bold">
              Client Feedback
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-brand-white tracking-wide">
            Help Us <span className="italic font-normal gold-gradient-text">Improve</span>.
          </h1>
          <p className="mt-4 font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl">
            We value your experience with Fennechron Labs. Please take a moment to fill out the form below to help us understand how we can serve you better in the future.
          </p>
        </div>

        {/* Custom Feedback Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full glass-card p-8 sm:p-10 rounded-3xl border border-white/5 relative shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
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
                      placeholder="e.g. alex@aether.io"
                    />
                  </div>
                </div>

                {/* Company (Optional) */}
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="company" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300"
                    placeholder="e.g. Acme Corp"
                  />
                </div>

                {/* Rating */}
                <div className="flex flex-col gap-3 mt-2">
                  <label className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Overall Experience Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none group"
                      >
                        <Star 
                          size={28} 
                          className={`transition-all duration-300 ${formData.rating >= star ? 'text-brand-gold fill-brand-gold drop-shadow-[0_0_8px_rgba(199,168,109,0.5)]' : 'text-white/20 group-hover:text-white/40'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="message" className="text-[10px] font-sans tracking-widest uppercase text-gray-400">Your Feedback</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-brand-gray/20 border border-white/5 rounded-xl px-4 py-3 text-xs text-brand-white font-sans focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about what went well and how we can improve..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 py-4 rounded-xl bg-brand-gold text-brand-black font-sans text-xs font-bold tracking-widest uppercase hover:bg-brand-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group/submit disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
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
                  Feedback Received
                </h3>
                <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-brand-gold mb-6 block">
                  Thank you for your insights
                </span>
                <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed">
                  Your feedback is vital in helping us continually elevate the Fennechron Labs experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="w-full border-t border-white/5 pt-12 pb-8 z-10 relative bg-brand-black mt-auto">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/Fennechron_Logo.png" alt="Fennechron Labs Logo" className="w-12 h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold tracking-[0.3em] text-brand-white uppercase">
                Fennechron
              </span>
              <span className="font-sans text-[9px] font-light tracking-[0.5em] text-brand-gold uppercase">
                Labs
              </span>
            </div>
          </div>
          <div className="w-12 h-[1px] bg-brand-gold/30" />
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-[10px] font-sans tracking-[0.2em] uppercase text-gray-500">
            <span>© {new Date().getFullYear()} Fennechron Labs. All Rights Reserved.</span>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Privacy Protocol</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
