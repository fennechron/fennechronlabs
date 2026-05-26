import React, { useRef, useEffect } from 'react';

const lines = [
  "We don't build generic templates.",
  "We build long-term digital products.",
  "Quality is our standard.",
  "We build for speed and scalability.",
  "We focus on clean user experiences."
];

export default function CinematicText() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Access global GSAP from CDN
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create a timeline linked to the scroll of this container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1, // Smooth scrubbing
        }
      });

      // Set initial states for all lines
      gsap.set(textRefs.current, { opacity: 0, y: 30, filter: "blur(10px)" });

      // Build the sequential crossfade timeline
      textRefs.current.forEach((text, i) => {
        // Fade in
        tl.to(text, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 2.5,
          ease: "expo.out"
        })
        // Fade out
        .to(text, {
          opacity: 0,
          y: -30,
          filter: "blur(10px)",
          duration: 2.5,
          ease: "expo.in"
        });
      });
    }, containerRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-brand-black z-10"
      // Tall container so there is plenty of scroll distance to scrub the timeline
      style={{ height: `${lines.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Brand visual header */}
        <div className="absolute top-[20%] flex flex-col items-center mb-8">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-brand-gold mb-4" />
          <span className="text-[9px] font-sans tracking-[0.5em] uppercase text-brand-gold font-bold">
            Our Core Focus
          </span>
        </div>

        {/* Cinematic Line Area */}
        <div className="w-full max-w-5xl flex items-center justify-center relative h-64">
          {lines.map((line, idx) => (
            <div
              key={idx}
              ref={el => textRefs.current[idx] = el}
              className="absolute w-full text-center select-none"
            >
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
                {idx % 2 === 1 ? (
                  <span className="italic font-normal gold-gradient-text">{line}</span>
                ) : (
                  <span className="text-brand-white">{line}</span>
                )}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-[5%] top-[10%] w-[150px] h-[150px] rounded-full bg-brand-gold/2 blur-[80px] pointer-events-none" />
        <div className="absolute left-[5%] bottom-[10%] w-[200px] h-[200px] rounded-full bg-brand-gold/1 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
