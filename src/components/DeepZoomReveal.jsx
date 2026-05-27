import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DeepZoomReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Image zooms from 1x to 15x
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 15]);
  
  // 2. Image fades out between 15% and 25% scroll (when monitor fills screen)
  const imageOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);

  // 3. Crisp SVG text scales infinitely alongside the image
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 60]);
  
  // 4. SVG text fades IN right as the pixelated image fades OUT
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  // 5. Final fade out to transition to the contact section
  const sectionOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[400vh] bg-[#0c0c0e] z-20" // Matches the dark monitor screen
    >
      <motion.div 
        className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#0c0c0e]"
        style={{ opacity: sectionOpacity }}
      >
        
        {/* RASTER IMAGE LAYER (Fades out to hide pixelation) */}
        <motion.div 
          className="w-full h-full absolute inset-0 flex items-center justify-center"
          style={{ 
            scale: imageScale,
            opacity: imageOpacity,
            transformOrigin: "50% 46%" 
          }}
        >
          <img 
            src="/workplace.png" 
            alt="Fennechron Workspace" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
          />
        </motion.div>

        {/* VECTOR SVG LAYER (Fades in, scales infinitely with zero quality loss) */}
        <motion.div 
          className="absolute w-full flex justify-center items-center pointer-events-none"
          style={{ 
            top: '46%', // Perfectly aligned with the monitor text
            left: '50%',
            x: '-50%',
            y: '-50%',
            scale: textScale, 
            opacity: textOpacity,
            transformOrigin: "center center"
          }}
        >
          {/* This SVG recreates the glowing terminal text exactly */}
          <svg viewBox="0 0 1000 150" className="w-[14%] overflow-visible">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="monospace" fontSize="65" fontWeight="600" letterSpacing="2">
              <tspan fill="#a855f7">Fennechon</tspan> <tspan fill="#ffffff">labs</tspan> <tspan fill="#ffffff" className="animate-pulse">|</tspan>
            </text>
          </svg>
        </motion.div>

        {/* Ambient overlay to enhance the cinematic feel initially */}
        <motion.div 
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0.5, 0]) }}
        />

      </motion.div>
    </section>
  );
}
