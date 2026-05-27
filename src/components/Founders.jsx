import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const founders = [
  {
    name: "S Sree Lekshmi",
    role: "Co-Founder",
    portfolio: "https://my-portfolio-pearl-phi-54.vercel.app/",
    instagram: "https://www.instagram.com/_t_he_ph_il_o_ca_li_st_",
    linkedin: "https://www.linkedin.com/in/sree-lekshmi-65b757255/"
  },
  {
    name: "Jithu Girish",
    role: "Co-Founder",
    portfolio: "https://www.jithu.me/",
    instagram: "https://instagram.com/jithu_girish_",
    linkedin: "https://linkedin.com/in/jithugirish1"
  }
];

export default function Founders() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-32 z-10 bg-brand-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Eyebrow */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center gap-4 mb-16 relative z-10"
      >
        <span className="w-12 h-[1px] bg-brand-gold/60" />
        <span className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase text-brand-gold font-bold">
          Leadership
        </span>
        <span className="w-12 h-[1px] bg-brand-gold/60" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="font-serif text-5xl md:text-7xl font-light text-brand-white mb-6">
          Meet The <span className="italic gold-gradient-text">Founders</span>
        </h2>
        <p className="font-sans text-gray-400 font-light max-w-xl mx-auto text-lg">
          The visionaries driving innovation and crafting unparalleled digital experiences.
        </p>
      </motion.div>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-5xl relative z-10">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
            className="group flex flex-col items-center md:items-start"
          >
            <div className="w-full flex flex-col items-center md:items-start mb-8">
              <h3 className="font-serif text-4xl md:text-5xl font-light text-brand-white mb-3 group-hover:text-brand-gold transition-colors duration-500 text-center md:text-left">
                {founder.name}
              </h3>
              <p className="font-sans text-brand-gold/80 tracking-widest uppercase text-xs font-semibold mb-6">
                {founder.role}
              </p>
              <div className="w-16 h-[1px] bg-brand-white/20 group-hover:bg-brand-gold/50 transition-colors duration-500" />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <a 
                href={founder.portfolio} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center gap-2 bg-brand-gold/10 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 group/link shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                aria-label={`${founder.name} Portfolio`}
              >
                <Globe size={18} strokeWidth={2} className="group-hover/link:scale-110 transition-transform duration-300" />
                <span className="font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">Portfolio</span>
              </a>
              <a 
                href={founder.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300 group/link"
                aria-label={`${founder.name} Instagram`}
              >
                <InstagramIcon size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href={founder.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300 group/link"
                aria-label={`${founder.name} LinkedIn`}
              >
                <LinkedinIcon size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
