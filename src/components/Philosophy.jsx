import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="relative w-full min-h-[110vh] flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-32 z-10 overflow-hidden bg-brand-black">
      
      {/* Immersive Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2560&auto=format&fit=crop")',
          backgroundAttachment: 'fixed' // Creates the premium CSS parallax scroll effect
        }}
      />
      
      {/* Gradient Overlays for Text Readability & Blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-transparent z-0" />

      {/* Foreground Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl text-center relative z-10 flex flex-col items-center"
      >
        {/* Eyebrow Label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-12 h-[1px] bg-brand-gold/60" />
          <span className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase text-brand-gold font-bold">
            Our Philosophy
          </span>
          <span className="w-12 h-[1px] bg-brand-gold/60" />
        </div>

        {/* Massive Typographic Statement */}
        <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-white tracking-wide leading-[1.2] mb-12 drop-shadow-2xl">
          We believe the best software <br className="hidden md:block" />
          <span className="italic font-normal gold-gradient-text">feels effortless</span> <br className="hidden md:block" />
          <span className="italic font-normal">to use</span>.
        </h3>
        
        <p className="font-sans text-base md:text-lg text-gray-300 font-light max-w-2xl leading-relaxed mx-auto drop-shadow-md">
          Our approach combines thoughtful design, scalable engineering, and product-focused decision making to build solutions that stand the test of time.
        </p>

        
      </motion.div>
    </section>
  );
}
