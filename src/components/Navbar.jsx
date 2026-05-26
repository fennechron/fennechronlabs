import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between ${
          isScrolled 
            ? 'bg-brand-black/90 backdrop-blur-xl border-b border-brand-gold/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Brand Logo - Fennechron Labs */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 font-sans group"
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
            <img src="/Fennechron_Logo.png" alt="Fennechron Labs Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base font-bold tracking-[0.25em] text-brand-white uppercase group-hover:text-brand-gold transition-colors duration-300 leading-none">
              Fennechron
            </span>
            <span className="font-sans text-[9px] font-light tracking-[0.4em] text-gray-500 uppercase leading-none mt-1">
              Labs
            </span>
          </div>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 bg-brand-gray/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-sans tracking-widest uppercase text-gray-400 hover:text-brand-gold transition-colors duration-300 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-transparent text-brand-white font-sans text-xs font-medium tracking-widest uppercase border border-brand-gold/30 hover:border-brand-gold overflow-hidden group transition-all duration-300"
          >
            {/* Background hover transition */}
            <span className="absolute inset-0 w-full h-full bg-brand-gold/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            {/* Tiny hover glow shadow */}
            <span className="absolute inset-0 w-full h-full group-hover:shadow-[0_0_15px_rgba(199,168,109,0.15)] pointer-events-none transition-shadow duration-300" />
            
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-white hover:text-brand-gold p-1 focus:outline-none transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[64px] left-0 w-full bg-brand-black/95 backdrop-blur-2xl border-b border-brand-gold/10 py-8 px-6 flex flex-col gap-8 lg:hidden z-40 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans tracking-widest uppercase text-gray-300 hover:text-brand-gold transition-colors duration-300 py-1 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full border border-brand-gold/40 text-brand-gold font-sans text-xs tracking-widest uppercase hover:bg-brand-gold/5 active:scale-[0.98] transition-all duration-300 text-center block font-medium"
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
