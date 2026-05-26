import React, { useRef, useEffect } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 'discovery',
    phase: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your business goals, product vision, and user expectations to define the right technical and product direction.',
    icon: Search,
    metrics: ['Product Discovery', 'Technical Architecture', 'Scope Planning'],
    image: '/step1.png'
  },
  {
    id: 'design',
    phase: '02',
    title: 'Product Design',
    description: 'We translate ideas into intuitive user experiences through structured design systems, interactive prototypes, and refined visual direction.',
    icon: PenTool,
    metrics: ['Wireframing', 'Interface Design', 'Interactive Prototypes'],
    image: '/step2.png'
  },
  {
    id: 'development',
    phase: '03',
    title: 'Engineering',
    description: 'Our development team builds scalable, maintainable systems using modern technologies and engineering best practices.',
    icon: Code,
    metrics: ['Frontend Development', 'Backend Infrastructure', 'Database Engineering'],
    image: '/step3.png'
  },
  {
    id: 'launch',
    phase: '04',
    title: 'Deployment & Growth',
    description: 'We ensure a smooth launch process and continue supporting your product with maintenance, improvements, and future feature development.',
    icon: Rocket,
    metrics: ['Cloud Deployment', 'Monitoring & Optimization', 'Ongoing Support'],
    image: '/step4.png'
  }
];

export default function Workflow() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const cardsRef = useRef([]);
  const nodesRef = useRef([]);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const ctx = gsap.context(() => {
      // 1. Draw the curvy golden road flawlessly using a clip-path wipe
      if (pathRef.current) {
        gsap.fromTo(pathRef.current, 
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1, 
            }
          }
        );
      }

      // 2. Power-up each card when the line reaches it
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0.1, x: i % 2 === 0 ? -30 : 30, filter: "blur(4px) grayscale(100%)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px) grayscale(0%)",
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top center+=150",
              end: "center center",
              scrub: 1,
            }
          }
        );
      });

      // 3. Ignite the nodes
      nodesRef.current.forEach((node, i) => {
        gsap.fromTo(node,
          { borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#050505", scale: 0.8 },
          {
            borderColor: "#C7A86D",
            backgroundColor: "rgba(199, 168, 109, 0.1)",
            scale: 1,
            boxShadow: "0 0 20px rgba(199, 168, 109, 0.4)",
            duration: 0.8,
            scrollTrigger: {
              trigger: node,
              start: "top center+=150",
              end: "center center",
              scrub: 1,
            }
          }
        );
      });

    }, containerRef);

    // Refresh triggers if window resizes
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="process"
      className="relative w-full py-32 bg-brand-black z-10 overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center mb-24 text-center max-w-7xl mx-auto px-6 z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-brand-gold" />
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium">
            How We Work
          </span>
          <span className="w-8 h-[1px] bg-brand-gold" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-white tracking-wide">
          Our <span className="italic font-normal gold-gradient-text">Process</span>.
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-400 font-light max-w-xl mt-6 leading-relaxed">
          A transparent, collaborative process designed to move efficiently from idea to launch — while keeping quality at the center of every stage.
        </p>
      </div>

      {/* Vertical Timeline / Road */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col mt-10 gap-16 md:gap-32 px-6">
        
        {/* Curvey SVG Background Track */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 -translate-x-1/2 w-[150px] md:w-[300px] z-0 pointer-events-none">
          {/* Faded track line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M50,0 C90,15 90,35 50,50 C10,65 10,85 50,100" 
              fill="none" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="2" 
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
          
          {/* Glowing animated laser line */}
          <svg 
            ref={pathRef}
            className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(199,168,109,0.8)]" 
            preserveAspectRatio="none" 
            viewBox="0 0 100 100"
            style={{ clipPath: "inset(0% 0% 100% 0%)" }}
          >
            <path 
              d="M50,0 C90,15 90,35 50,50 C10,65 10,85 50,100" 
              fill="none" 
              stroke="#C7A86D" 
              strokeWidth="2" 
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
        </div>

        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = step.icon;

          return (
            <div 
              key={step.id} 
              className={`relative w-full flex items-center justify-start md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} z-10`}
            >
              {/* Central Node / Mobile Left Node */}
              <div 
                ref={el => nodesRef.current[idx] = el}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-brand-black z-20 transition-colors"
              >
                <Icon size={18} className="text-brand-white" />
              </div>

              {/* Card Side */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                <div 
                  ref={el => cardsRef.current[idx] = el}
                  className="glass-card rounded-2xl w-full max-w-[450px] border border-white/5 text-left relative backdrop-blur-xl flex flex-col"
                >
                  <div className="w-full relative z-20 -mt-6">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-64 translate-y-[-150px] translate-x-30 absolute h-auto object-contain mix-blend-lighten opacity-90 drop-shadow-2xl"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                      }}
                    />
                  </div>
                  <div className="p-6 md:p-10 relative z-10 border-t border-white/5">
                    {/* Phase Marker */}
                    <span className="font-mono text-3xl font-bold tracking-widest text-brand-gold/10 absolute top-4 right-4 pointer-events-none select-none">
                      {step.phase}
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-white font-light mb-4">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-sans text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-8">
                      {step.description}
                    </p>
                    
                    {/* Detail list */}
                    <div className="border-t border-white/5 pt-5 flex flex-col gap-3">
                      {step.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-3 text-[10px] md:text-xs font-sans tracking-wider text-gray-500 uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty Space for desktop alternating balance */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          )
        })}
      </div>
    </section>
  );
}
