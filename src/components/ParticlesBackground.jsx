import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticlesBackground() {
  const [embers, setEmbers] = useState([]);

  useEffect(() => {
    // Generate distinct amber/gold embers
    const generated = Array.from({ length: 30 }).map((_, idx) => ({
      id: idx,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() < 0.2 ? 'w-2 h-2' : 'w-1 h-1',
      delay: Math.random() * 8,
      duration: 2.5 + Math.random() * 15,
      yOffset: [0, -100 - Math.random() * 150, 0],
      xOffset: [0, (Math.random() - 0.5) * 60, 0]
    }));
    setEmbers(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-brand-black">
      {/* 1. Deep Matte Black Backdrop overlay */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* 2. Soft Gold & Amber Radial Ambient Glows */}
      {/* Top right gold glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-radial from-[rgba(199,168,109,0.06)] via-[rgba(199,168,109,0.01)] to-transparent blur-3xl animate-pulse-slow" />
      
      {/* Bottom left amber glow */}
      <div className="absolute bottom-[-15%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-radial from-[rgba(238,155,0,0.04)] via-[rgba(0,0,0,0)] to-transparent blur-3xl" />
      
      {/* Central subtle gold accent */}
      <div className="absolute top-[35%] left-[25%] w-[30vw] h-[30vw] rounded-full bg-radial from-[rgba(199,168,109,0.03)] via-transparent to-transparent blur-3xl" />

      {/* 3. Floating Gold/Amber Embers (using Framer Motion for elegant drifts) */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: ember.top,
            left: ember.left,
          }}
          animate={{
            y: ember.yOffset,
            x: ember.xOffset,
            opacity: [0.1, 0.7, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          {/* Glowing dot */}
          <div className={`rounded-full bg-brand-gold/60 shadow-[0_0_8px_#C7A86D] ${ember.size}`} />
        </motion.div>
      ))}

      {/* 4. Fine Grain Overlay for cinematic texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
