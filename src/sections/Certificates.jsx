import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShieldCheck, Filter } from 'lucide-react';
import { playClick } from '../utils/audio';

export function Certificates() {
  const [filter, setFilter] = useState('All');

  const categories = [
    { key: 'All', label: 'All Logs' },
    { key: 'Hackathons', label: 'Hackathons' },
    { key: 'Technical Events', label: 'Technical Events' },
    { key: 'Symposiums', label: 'Symposiums' },
    { key: 'Certifications', label: 'Certifications' }
  ];

  const certificates = [
    // HACKATHONS
    {
      category: 'Hackathons',
      title: 'Smart India Hackathon (SIH 2025) – Internal Shortlisted',
      issuer: 'SVCE / SIH Committee',
      date: '2025',
      downloadUrl: 'https://drive.google.com/file/d/10fQ350KpulVijgEIjda8LduHi7-MNEFu/view?usp=sharing'
    },
    {
      category: 'Hackathons',
      title: "HACK'HERTHON (2025)",
      issuer: 'Women Empowerment Cell & Fixel, SVCE',
      date: 'February 2025',
      downloadUrl: 'https://drive.google.com/file/d/1-803VKTzo53pv2Tjng4OtQVWBIi2JXnt/view?usp=sharing'
    },
    {
      category: 'Hackathons',
      title: "HACK'HERTHON (2026)",
      issuer: 'Women Empowerment Cell & Fixel, SVCE',
      date: '12–13 March 2026',
      downloadUrl: 'https://drive.google.com/file/d/14dH2dcrIhqvQm1s1dJFFPCARZP7ScNEb/view?usp=sharing'
    },
    {
      category: 'Hackathons',
      title: 'ETE 2026 Hackathon',
      issuer: 'Forum of Data Science Engineers, Dept. of CSE, SVCE',
      date: '16–17 March 2025',
      downloadUrl: 'https://drive.google.com/file/d/16DgCLXbIYR4ImEP2P9IPiIrDpSksC5iK/view?usp=sharing'
    },
    {
      category: 'Hackathons',
      title: 'Makeathon 2025',
      issuer: 'ECE Association in association with IETE Forum & Robotics Club, SVCE',
      date: '29–30 April 2025',
      downloadUrl: 'https://drive.google.com/file/d/1yt6pESFpXalzEcYlRZHXv3YhisVcKnnm/view?usp=sharing'
    },

    // TECHNICAL EVENTS
    {
      category: 'Technical Events',
      title: 'QuizzUp',
      issuer: 'Computer Society of India (CSI), SVCE Student Chapter',
      date: '15 April 2026',
      downloadUrl: 'https://drive.google.com/file/d/13OEJ7072Gu7Gic64OOYHMhVQyNMJZHla/view?usp=sharing'
    },
    {
      category: 'Technical Events',
      title: 'CSI App Development Event',
      issuer: 'Computer Society of India (CSI), SVCE Student Chapter',
      date: '22 August 2025',
      downloadUrl: 'https://drive.google.com/file/d/186fAE6doEdkG192Zo4n3zrjYCtQCQG9L/view?usp=sharing'
    },
    {
      category: 'Technical Events',
      title: 'User Un-Friendly',
      issuer: 'Association of Computer Engineers (ACE), SVCE',
      date: '2025',
      downloadUrl: 'https://drive.google.com/file/d/1PXTtzUcUwwNTN-Jx8ziy8xu9uLcKI7WH/view?usp=sharing'
    },
    {
      category: 'Technical Events',
      title: 'December of Algorithms (DOA 2025) – Silver Standard',
      issuer: 'SVCE ACM Student Chapter',
      date: '2025',
      downloadUrl: 'https://drive.google.com/file/d/15c2Y0oF6wqWXnROkjkPcZam3cJUAgObp/view?usp=sharing'
    },

    // SYMPOSIUMS
    {
      category: 'Symposiums',
      title: 'Interrupt 2025 Symposium',
      issuer: 'ACE, SVCE',
      date: '19 March 2025',
      downloadUrl: 'https://drive.google.com/file/d/1cxlAP167RGtawHj2AT8TgDRDBh5NTRWV/view?usp=sharing'
    },
    {
      category: 'Symposiums',
      title: 'Interrupt 2026 Symposium',
      issuer: 'Dept. of CSE, SVCE',
      date: '20 April 2026',
      downloadUrl: 'https://drive.google.com/file/d/1Olc46Obu8crfZAKByDcarjvWLGmhtnko/view?usp=sharing'
    },
    {
      category: 'Symposiums',
      title: 'Innovates 2026 Symposium',
      issuer: 'Dept. of CSE, SVCE',
      date: '23 March 2026',
      downloadUrl: 'https://drive.google.com/file/d/1GM-um9p-2jTlTF7wSIiMpPZK_sryMeFy/view?usp=sharing'
    },
    {
      category: 'Symposiums',
      title: "Full Stack Web Development Workshop – Prayatna'25",
      issuer: 'Association of Computer Technologists, MIT, Anna University',
      date: '5–6 April 2025',
      downloadUrl: 'https://drive.google.com/file/d/1TF_ZfLwNjDRmwu7dYeDlq3EzyPAnRSlq/view?usp=sharing'
    },
    {
      category: 'Symposiums',
      title: 'CodePulse',
      issuer: 'ACM, VIT Chennai',
      date: '2025',
      downloadUrl: 'https://drive.google.com/file/d/1brpwHIXzaNkvOEndkrPKxHjdjCxdPb5c/view?usp=sharing'
    },
    {
      category: 'Symposiums',
      title: 'National Level Technical Symposium',
      issuer: 'Dept. of CSE, Chennai Institute of Technology (CIT)',
      date: 'February 2025',
      downloadUrl: 'https://drive.google.com/file/d/1OP1M0PGkEUshZt8514wewQ_noBEwu0rY/view?usp=sharing'
    },

    // CERTIFICATIONS & LICENSES
    {
      category: 'Certifications',
      title: 'Foundations of Deep Learning: Concepts and Applications',
      issuer: 'NPTEL',
      date: '2026',
      downloadUrl: 'https://drive.google.com/file/d/1NHazz8eca5yXgdx_DP5PV6WHpXrFjqFm/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'MongoDB Basics',
      issuer: 'MongoDB Academy',
      date: '25 June 2025',
      downloadUrl: 'https://drive.google.com/file/d/1xa0fwi3FLAs6Ijdu0OHanbR5brx76sw-/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'MongoDB Schema Design',
      issuer: 'MongoDB Academy',
      date: '25 June 2025',
      downloadUrl: 'https://drive.google.com/file/d/1OG0Gf9_n2UQBREEGOgyod55Nzc8DkAli/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'JavaScript Course',
      issuer: 'MindLuster',
      date: '07 May 2025',
      downloadUrl: 'https://drive.google.com/file/d/1JW6KsgUp12cQ1o4GD_PCawKscVqWPAZj/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'Pin Diagram of Microprocessor 8086',
      issuer: 'MindLuster',
      date: '10 June 2025',
      downloadUrl: 'https://drive.google.com/file/d/1vIo5-2wem_Sx2SXDuejZibunypwLgHki/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'Reinforcement Learning',
      issuer: 'MindLuster',
      date: '25 November 2025',
      downloadUrl: 'https://drive.google.com/file/d/1t7vIFaRSMtiJZKzX-yEieIO1UqXGFXRh/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'Programming in C',
      issuer: 'Infosys Springboard',
      date: '26 November 2024',
      downloadUrl: 'https://drive.google.com/file/d/12iqnkOrtdw-lD9gpB6cU-zHkLoBwZ_bW/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'C Programming Course',
      issuer: 'Infosys Springboard',
      date: '2025',
      downloadUrl: 'https://drive.google.com/file/d/1UoV-3-EcTF5kVTtq5iXzew90LPgFkR6R/view?usp=sharing'
    },
    {
      category: 'Certifications',
      title: 'C++ Fundamentals',
      issuer: 'Infosys Springboard',
      date: '05 May 2025',
      downloadUrl: 'https://drive.google.com/file/d/1aZ3YVwRasUUoxxmWbN31fTncM68CclES/view?usp=sharing'
    }
  ];

  // Map theme styles based on category
  const themeMap = {
    'Hackathons': {
      border: 'border-psychic-pink/20 hover:border-psychic-pink/50 hover:shadow-[0_0_15px_rgba(255,47,208,0.15)] text-psychic-pink',
      badge: 'bg-psychic-pink/10 border-psychic-pink/30 text-psychic-pink'
    },
    'Technical Events': {
      border: 'border-electric-cyan/20 hover:border-electric-cyan/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-electric-cyan',
      badge: 'bg-electric-cyan/10 border-electric-cyan/30 text-electric-cyan'
    },
    'Symposiums': {
      border: 'border-grass-green/20 hover:border-grass-green/50 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] text-grass-green',
      badge: 'bg-grass-green/10 border-grass-green/30 text-grass-green'
    },
    'Certifications': {
      border: 'border-poison-purple/20 hover:border-poison-purple/50 hover:shadow-[0_0_15px_rgba(191,85,236,0.15)] text-poison-purple',
      badge: 'bg-poison-purple/10 border-poison-purple/30 text-poison-purple'
    }
  };

  // Filter items and inject the index relative to its category
  const filteredCertificates = certificates
    .filter((c) => filter === 'All' || c.category === filter)
    .map((cert) => {
      // Find index within its category group
      const categoryGroup = certificates.filter((c) => c.category === cert.category);
      const localIdx = categoryGroup.findIndex((c) => c.title === cert.title) + 1;
      // Pad with leading zero
      const paddedIdx = String(localIdx).padStart(2, '0');
      return { ...cert, indexTag: paddedIdx };
    });

  return (
    <section id="certificates" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FFFBF5]">
      
      {/* Visual wireframes */}
      <div className="absolute top-1/3 left-0 w-24 h-[1px] bg-gradient-to-r from-poison-purple/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-24 h-[1px] bg-gradient-to-l from-grass-green/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-poison-purple">★ VERIFIED SKILLS CERTIFICATES</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-1 tracking-wider uppercase">
            Certificates &amp; Licenses
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-poison-purple via-grass-green to-electric-cyan mt-3 rounded-full" />
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-start pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500 mr-2 uppercase font-mono-tech select-none mb-2 md:mb-0">
            <Filter size={14} /> Filter logs:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { playClick(); setFilter(cat.key); }}
              className={`px-4 py-1.5 border rounded font-orbitron text-xs tracking-wider cursor-pointer uppercase transition-all duration-300 ${
                filter === cat.key
                  ? 'bg-white border-electric-cyan text-electric-cyan shadow-[0_0_12px_rgba(0,229,255,0.15)] font-bold'
                  : 'border-gray-200 text-gray-500 hover:text-charcoal hover:border-gray-400 bg-white/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => {
              const theme = themeMap[cert.category];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cert.title}
                  className={`glassmorphism border p-5 rounded-xl flex flex-col justify-between items-stretch text-left relative overflow-hidden transition-all duration-300 ${theme.border}`}
                >
                  {/* Number Badge */}
                  <span className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-orbitron font-extrabold border-b border-l rounded-bl-xl ${theme.badge}`}>
                    #{cert.indexTag}
                  </span>

                  <div className="space-y-3 pr-8">
                    <span className="text-[9px] font-mono-tech uppercase tracking-widest text-gray-500 block">
                      {cert.category}
                    </span>
                    <h4 className="font-orbitron font-bold text-sm text-charcoal tracking-wide line-clamp-2 min-h-[40px] leading-relaxed">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-end">
                    <div className="space-y-0.5 text-left">
                      <p className="text-[10px] text-gray-500 font-sans leading-tight line-clamp-1 max-w-[150px]">
                        {cert.issuer}
                      </p>
                      <p className="text-[9px] text-gray-400 font-mono-tech uppercase">
                        {cert.date}
                      </p>
                    </div>

                    <a
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClick}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border rounded font-orbitron text-[9px] font-bold uppercase tracking-wider bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all cursor-pointer ${theme.border}`}
                    >
                      <ShieldCheck size={12} />
                      Download
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
