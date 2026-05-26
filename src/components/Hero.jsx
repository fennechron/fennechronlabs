import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-8 px-6 md:px-12 lg:px-20 pt-28 pb-12 overflow-hidden z-10 bg-brand-black"
    >
      {/* Background massive outlined word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="font-sans text-[20vw] font-bold text-transparent stroke-2 tracking-[0.2em] uppercase opacity-[0.02] select-none" style={{ WebkitTextStroke: '2px rgba(199, 168, 109, 0.4)' }}>
          Labs
        </span>
      </div>

      {/* Background soft lighting details */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/3 blur-[140px]" />
      </div>

      {/* Left Column: Brand Statement */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left z-10"
      >


        {/* Massive Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-white leading-[1.05] tracking-wide mb-6"
        >
          Engineering products <br />
          that people <span className="gold-gradient-text font-normal italic">love</span> to use.
        </motion.h1>

        {/* Thin Luxury Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl mb-10 pl-1"
        >
          We design and build high-performance web platforms, mobile applications, and intelligent digital experiences engineered for scale, speed, and long-term reliability.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row items-center gap-4 pl-1"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-brand-gold text-brand-black font-sans text-xs font-semibold tracking-widest uppercase hover:bg-brand-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(199,168,109,0.25)]"
          >
            Start a Project
          </a>
          <a
            href="#works"
            className="px-8 py-3.5 rounded-full border border-gray-800 text-brand-white font-sans text-xs font-medium tracking-widest uppercase hover:border-brand-gold hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Explore Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: Hero Video */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-1/2 relative flex items-center justify-start z-10"
      >
        <div className="w-[75%] rounded-3xl overflow-hidden relative group">
          <img src="/header1.png" alt="" className='w-full h-full object-cover' />
          {/* <video src="/videos/header.mp4" autoPlay  muted className=' h-1/2 w-1/2'></video> */}
        </div>
      </motion.div>
    </div>
  );
}
