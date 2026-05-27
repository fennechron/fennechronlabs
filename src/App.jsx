import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CinematicText from './components/CinematicText';
import PastWorks from './components/PastWorks';
import Workflow from './components/Workflow';
import WhyChooseUs from './components/WhyChooseUs';
import CodeEditorAnim from './components/CodeEditorAnim';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import DeepZoomReveal from './components/DeepZoomReveal';
import ContactForm from './components/ContactForm';
import Welcome from './components/Welcome';
const StackSection = ({ children, index }) => {
  const [top, setTop] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const updateTop = () => {
      const height = ref.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      // Only apply negative top if on desktop (>= 768px) and height > windowHeight
      if (window.innerWidth >= 768 && height > windowHeight) {
        setTop(windowHeight - height);
      } else {
        setTop(0);
      }
    };

    updateTop();
    window.addEventListener('resize', updateTop);
    
    const observer = new ResizeObserver(updateTop);
    observer.observe(ref.current);

    return () => {
      window.removeEventListener('resize', updateTop);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`w-full bg-brand-black md:sticky relative ${index > 0 ? 'md:shadow-[0_-30px_50px_rgba(0,0,0,0.8)] md:border-t md:border-brand-gold/10' : ''}`}
      style={{ 
        top: `${top}px`, 
        zIndex: index * 10 
      }}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    // Access global Lenis from CDN
    const Lenis = window.Lenis;
    if (!Lenis) return;

    // Initialize smooth scrolling with premium easing
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    // Synchronize with GSAP
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    let gsapTickerCallback;

    if (gsap && ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      
      gsapTickerCallback = (time) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(gsapTickerCallback);
      gsap.ticker.lagSmoothing(0);
    } else {
      // Fallback RAF loop if GSAP isn't loaded yet
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    return () => {
      lenis.destroy();
      if (gsap && gsapTickerCallback) {
        gsap.ticker.remove(gsapTickerCallback);
      }
    };
  }, []);

  const sections = [
    <Hero />,
    <Services />,
    <CinematicText />,
    <PastWorks />,
    <Workflow />,
    <WhyChooseUs />,
    <Philosophy />,
    <Welcome />,
    <Testimonials />,
    <ContactForm />
  ];

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-gold/25 selection:text-brand-white">
      {/* 1. Global Ambient Particle System */}
      <ParticlesBackground />

      {/* 2. Floating Luxury Navbar */}
      <Navbar />

      {/* 3. Stacking Cinematic Sections */}
      <main className="w-full relative">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <StackSection index={index}>
              {section}
            </StackSection>
            {/* The spacer creates a scroll delay where the current section remains stuck before the next section appears */}
            {index < sections.length - 1 && <div className="hidden md:block" style={{ height: '75vh' }} />}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
