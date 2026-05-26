import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout } from 'lucide-react';

const services = [
  {
    id: 'web-dev',
    title: 'Web Platforms',
    subtitle: 'Fast, scalable, and built for growth',
    description: 'We develop modern web applications engineered for performance, reliability, and maintainability — designed to scale seamlessly as your product and user base evolve.',
    icon: Code,
    details: ['React & Next.js', 'API Architecture', 'Performance Optimization'],
    videoSrc: 'videos/website.mp4',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Applications',
    subtitle: 'Seamless experiences across every device',
    description: 'We create polished cross-platform mobile applications that feel fast, intuitive, and native on both iOS and Android.',
    icon: Smartphone,
    details: ['Cross-Platform Development', 'Fluid Animations', 'Offline-First Support'],
    videoSrc: 'videos/app.mp4',
  },
  {
    id: 'uiux',
    title: 'UI/UX Systems',
    subtitle: 'Interfaces designed for clarity and trust',
    description: 'We design thoughtful digital experiences that simplify complexity, strengthen brand perception, and make products effortless to use.',
    icon: Layout,
    details: ['Design Systems', 'User Experience Research', 'Scalable UI Libraries'],
    videoSrc: 'videos/design.mp4',
  },
];

const ServiceItem = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const IconComponent = service.icon;
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 w-full mb-32 last:mb-0`}>
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-5/12 flex flex-col"
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-brand-gold/30 bg-brand-gold/10 text-brand-gold mb-8 shadow-[0_0_30px_rgba(199,168,109,0.15)]">
          <IconComponent size={24} strokeWidth={1.5} />
        </div>
        
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold mb-3 font-bold block">
          {service.subtitle}
        </span>
        
        <h3 className="font-serif text-4xl md:text-5xl font-light text-brand-white mb-6">
          {service.title}
        </h3>
        
        <p className="font-sans text-base md:text-lg text-gray-400 font-light leading-relaxed mb-10">
          {service.description}
        </p>
        
        <div className="flex flex-col gap-4">
          {service.details.map((detail, dIdx) => (
            <div key={dIdx} className="flex items-center gap-4 text-sm md:text-base font-sans tracking-wide text-gray-300">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-brand-gold/30 bg-brand-gold/10">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              </span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Video Screen */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-7/12"
      >
        <div className="w-full aspect-[4/3] md:aspect-video lg:aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-gray/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative group">
          {/* Fallback pattern while video loads */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-black to-brand-black opacity-50" />
          
          <video
            src={service.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute scale-[1.12] inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
          {/* Decorative overlay border */}
          <div className="absolute inset-0 border border-brand-gold/20 rounded-3xl pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <section 
      id="services"
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 pt-24 pb-32 bg-brand-black z-10 overflow-hidden"
    >
      {/* Background massive outlined word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-sans text-[20vw] font-bold text-transparent stroke-2 tracking-[0.2em] uppercase opacity-[0.02] select-none" style={{ WebkitTextStroke: '2px rgba(199, 168, 109, 0.4)' }}>
          Studio
        </span>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-brand-gold/3 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/2 blur-[140px]" />
      </div>

      {/* Header section */}
      <div className="w-full flex flex-col items-start mb-24 text-left max-w-7xl z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-brand-gold" />
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium">
            What We Build
          </span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-white tracking-wide">
          What We <span className="italic font-normal gold-gradient-text">Build</span>.
        </h2>
        <p className="font-sans text-base md:text-lg text-gray-400 font-light max-w-2xl mt-6 leading-relaxed">
          From concept to deployment, we partner with startups and growing businesses to craft scalable software products with exceptional user experiences and solid engineering foundations.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto flex flex-col z-10 relative">
        {services.map((service, index) => (
          <ServiceItem 
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
