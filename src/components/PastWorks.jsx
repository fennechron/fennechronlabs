import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'strikers',
    num: '01',
    title: 'Sports Academy Website',
    subtitle: 'Modern platform for athlete enrollment and training management',
    description:
      'A professional website developed for a sports academy featuring online registrations, training schedules, coach profiles, gallery management, and performance updates.',
    industry: 'Sports & Fitness',
    tech: ['React', 'Next.js', 'Tailwind', 'Firebase'],
    mockup: (
      <div className="w-full h-full bg-[#050505] p-6 font-mono text-[10px] flex flex-col justify-between overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,0,0.12),transparent_60%)]" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 z-10">
          <span className="text-gray-500 tracking-widest">STRIKERS_ACADEMY</span>
          <span className="text-orange-400 tracking-widest">LIVE_SESSIONS: 24</span>
        </div>

        {/* Main */}
        <div className="grid grid-cols-3 gap-4 my-4 flex-grow z-10">
          <div className="col-span-2 border border-white/5 rounded-lg p-4 bg-white/[0.02] flex flex-col justify-between">
            <div className="flex justify-between text-[9px] text-gray-500 tracking-widest">
              <span>ATHLETE_PROGRESS</span>
              <span className="text-emerald-400">+18%</span>
            </div>

            <div className="flex items-end gap-2 h-20">
              {[20, 35, 40, 55, 70, 90, 75].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-orange-400/80 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="border border-white/5 rounded-lg p-4 bg-white/[0.02] flex flex-col justify-center items-center">
            <span className="text-gray-500 text-[8px] tracking-widest">ACTIVE_TEAMS</span>
            <span className="text-4xl text-orange-400 font-light">12</span>
            <span className="text-emerald-400 text-[8px] tracking-widest">ONLINE</span>
          </div>
        </div>
      </div>
    )
  },

  {
    id: 'nova',
    num: '02',
    title: 'Restaurant Ordering System',
    subtitle: 'Digital dining experience with seamless online ordering',
    description:
      'A modern ordering platform for a premium restaurant with real-time menu management, table reservations, payment integration, and customer analytics.',
    industry: 'Food & Hospitality',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    mockup: (
      <div className="w-full h-full bg-[#050505] p-6 font-mono text-[10px] flex flex-col justify-between overflow-hidden relative">
        <div className="absolute inset-0 bg-red-500/5 blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 z-10">
          <span className="text-gray-500 tracking-widest">NOVA_DINE</span>
          <span className="text-red-400 tracking-widest">TABLES: 48</span>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-2 gap-4 my-4 flex-grow z-10">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border border-white/5 rounded-lg bg-white/[0.02] p-3 flex flex-col justify-between"
            >
              <div className="h-10 rounded bg-red-400/10 border border-red-400/20 mb-2" />
              <div className="flex justify-between text-[8px] tracking-widest text-gray-500">
                <span>ORDER_ITEM</span>
                <span className="text-red-400">READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },

  {
    id: 'pulse',
    num: '03',
    title: 'Healthcare Appointment Platform',
    subtitle: 'Smart patient booking and clinic management system',
    description:
      'A healthcare web application enabling patients to book appointments, access digital prescriptions, and manage consultations through an intuitive interface.',
    industry: 'Healthcare Technology',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
    mockup: (
      <div className="w-full h-full bg-[#050505] p-6 font-mono text-[10px] flex flex-col justify-between overflow-hidden relative">
        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-3 z-10">
          <span className="text-gray-500 tracking-widest">PULSE_HEALTH</span>
          <span className="text-emerald-400 tracking-widest">DOCTORS: 32</span>
        </div>

        {/* Dashboard */}
        <div className="my-4 flex-grow flex flex-col gap-4 z-10">
          <div className="border border-white/5 rounded-lg p-4 bg-white/[0.02]">
            <div className="flex justify-between text-[8px] tracking-widest text-gray-500 mb-2">
              <span>APPOINTMENTS</span>
              <span className="text-emerald-400">TODAY</span>
            </div>

            <div className="space-y-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-2 rounded-full bg-emerald-400/20 overflow-hidden"
                >
                  <div
                    className="h-full bg-emerald-400 rounded-full"
                    style={{ width: `${60 + item * 10}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/5 rounded-lg p-4 bg-white/[0.02] text-center">
              <span className="text-gray-500 text-[8px] tracking-widest">
                PATIENTS
              </span>
              <div className="text-3xl text-emerald-400 font-light mt-2">
                1.2K
              </div>
            </div>

            <div className="border border-white/5 rounded-lg p-4 bg-white/[0.02] text-center">
              <span className="text-gray-500 text-[8px] tracking-widest">
                SUCCESS_RATE
              </span>
              <div className="text-3xl text-emerald-400 font-light mt-2">
                98%
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function PastWorks() {
  return (
    <section 
      id="works"
      className="relative w-full bg-brand-black z-10 py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-orange-600/2 blur-[150px] pointer-events-none" />

      {/* Section Title */}
      <div className="w-full max-w-7xl mx-auto mb-24 text-center z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-brand-gold" />
          <span className="text-xs font-sans tracking-[0.4em] uppercase text-brand-gold font-bold">
            Past Works
          </span>
          <span className="w-8 h-[1px] bg-brand-gold" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-brand-white tracking-wide">
          Our <span className="italic font-normal gold-gradient-text">Projects</span>.
        </h2>
      </div>

      {/* Asymmetrical Editorial List */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-32 lg:gap-48 z-10">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={project.id}
              className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Massive Background Number */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-0 lg:-left-20' : 'right-0 lg:-right-20'} text-[30vw] lg:text-[20vw] font-serif font-bold text-transparent stroke-2 opacity-[0.03] select-none pointer-events-none z-0`}
                style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 1)' }}
              >
                {project.num}
              </div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-5/12 flex flex-col z-10"
              >
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold font-bold mb-4">
                  {project.industry}
                </span>
                
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-white mb-3">
                  {project.title}
                </h3>
                
                <span className="text-sm md:text-base font-sans text-gray-400 uppercase tracking-widest mb-8 block">
                  {project.subtitle}
                </span>

                <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed mb-10 max-w-md">
                  {project.description}
                </p>



                {/* Action CTA */}
                <div>
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-4 text-xs font-sans tracking-widest text-brand-white uppercase hover:text-brand-gold transition-colors duration-300 font-bold"
                  >
                    View Case Study
                    <span className="w-10 h-[1px] bg-brand-white group-hover:bg-brand-gold group-hover:w-16 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>

              {/* Mockup Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-full lg:w-7/12 relative z-10"
              >
                {/* Stunning floating glassmorphic frame */}
                <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden p-2 md:p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-md group hover:border-brand-gold/30 transition-colors duration-700">
                  <div className="w-full h-full rounded-xl md:rounded-2xl overflow-hidden relative border border-white/5 bg-brand-black">
                    {project.mockup}
                  </div>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
