import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Laptop, Calendar, MapPin } from 'lucide-react';

// Custom Poké Ball bullet icon
const PokeBallBullet = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 mt-1 select-none animate-pulse" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#1A1A2E" strokeWidth="2.5" fill="white" />
    <path d="M2 12a10 10 0 0 1 20 0H2z" transform="rotate(180 12 12)" fill="#E91E8C" stroke="#1A1A2E" strokeWidth="2.5" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#1A1A2E" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="3.5" fill="white" stroke="#1A1A2E" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="#E91E8C" />
  </svg>
);

export function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Resilio Lab',
      location: 'Chennai, India',
      duration: '15 June 2026 – Present',
      current: true,
      icon: <Briefcase size={18} className="text-electric-cyan" />,
      themeColor: 'border-electric-cyan/20 text-electric-cyan hover:border-electric-cyan/50',
      glowColor: 'shadow-neon-cyan',
      bulletPoints: [
        'Collaborating on full-stack web products, building responsive and high-performance user interfaces using React and modular CSS architectures.',
        'Integrating secure back-end API microservices and configuring token-based authorization frameworks.',
        'Assisting in developing testing environments to validate features before staging deployments.'
      ]
    },
    {
      role: 'Executive Member',
      company: 'Association for Computing Machinery (ACM), SVCE Student Chapter',
      location: 'Sriperumbudur, Tamil Nadu',
      duration: '2025 – 2026',
      current: false,
      icon: <Users size={18} className="text-psychic-pink" />,
      themeColor: 'border-psychic-pink/20 text-psychic-pink hover:border-psychic-pink/50',
      glowColor: 'shadow-neon-pink',
      bulletPoints: [
        'Organized December of Algorithms (DOA), a university-wide competitive programming event.',
        'Mentored 50+ student participants during the December of Algorithms technical challenge.',
        'Designed and managed event platforms for university-wide competitive programming initiatives.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Developer Student Community (DSC), SVCE Chapter',
      location: 'Sriperumbudur, Tamil Nadu',
      duration: '2025 – 2026',
      current: false,
      icon: <Laptop size={18} className="text-grass-green" />,
      themeColor: 'border-grass-green/20 text-grass-green hover:border-grass-green/50',
      glowColor: 'shadow-neon-green',
      bulletPoints: [
        'Organized Blueprint 2026, a web development-focused community event.',
        'Built accessible, responsive web elements with cross-browser compatibility testing.',
        'Implemented centralized data handling using Supabase backend integration.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FFFBF5]">
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-20 h-[1px] bg-gradient-to-r from-grass-green/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-20 h-[1px] bg-gradient-to-l from-electric-cyan/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-orbitron text-xs font-black uppercase tracking-widest text-grass-green flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-500 stroke-amber-500 animate-bounce" xmlns="http://www.w3.org/2000/svg">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
            </svg>
            Work Experience
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-2 tracking-wider uppercase">
            Professional Timeline Records
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-grass-green to-electric-cyan mt-3 rounded-full" />
        </div>

        {/* Experience Cards Stack (Scrapped Timeline) */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-white border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start text-left transition-all duration-300 relative group overflow-hidden shadow-sm ${exp.themeColor} ${exp.glowColor.split(' ')[0]}`}
            >
              {/* Top visual divider */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              {/* Left Side: Icon and Timeline Date */}
              <div className="w-full md:w-48 shrink-0 space-y-3.5 select-none">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 shrink-0 w-fit">
                  {exp.icon}
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase bg-gray-50 border border-gray-200 text-gray-700 inline-flex items-center gap-1 w-fit">
                    <Calendar size={10} /> {exp.duration}
                  </span>
                  
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-grass-green/10 border border-grass-green/30 text-[9px] font-orbitron font-extrabold text-grass-green uppercase w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-grass-green animate-ping shadow-[0_0_8px_#2ECC71]" />
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side: Role & Achievements */}
              <div className="flex-1 space-y-3.5">
                <div>
                  <h4 className="font-orbitron font-extrabold text-xl text-charcoal group-hover:text-electric-cyan transition-colors leading-snug">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-gray-800 font-sans mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 font-mono-tech flex items-center gap-1 mt-1">
                    <MapPin size={12} className="text-gray-400" /> {exp.location}
                  </p>
                </div>

                {/* Achievements bullets with Poké Ball icons */}
                <ul className="mt-4 space-y-2.5 text-sm text-gray-700 font-sans leading-relaxed list-none">
                  {exp.bulletPoints.map((bp, bidx) => (
                    <li key={bidx} className="flex gap-2.5 items-start">
                      <PokeBallBullet />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
