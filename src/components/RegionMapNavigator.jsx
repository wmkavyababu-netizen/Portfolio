import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function RegionMapNavigator() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home', town: 'Pallet Town' },
    { id: 'about-education', name: 'About & Education', town: 'Pewter City' },
    { id: 'skills-projects', name: 'Skills & Projects', town: 'Cerulean City' },
    { id: 'experience', name: 'Experience', town: 'Vermilion City' },
    { id: 'achievements', name: 'Achievements', town: 'Celadon City' },
    { id: 'certificates', name: 'Certificates', town: 'Fuchsia City' },
    { id: 'contact', name: 'Contact', town: 'Indigo Plateau' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial execution
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-40 bg-[#FFFBF5]/90 border border-charcoal/15 py-6 px-3 rounded-full shadow-lg select-none">
      {/* Dotted connective Route line */}
      <div className="absolute top-8 bottom-8 w-[2px] border-l-2 border-dotted border-charcoal/30 pointer-events-none" />

      <div className="flex flex-col gap-8 relative z-10">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div key={sec.id} className="relative flex items-center justify-center group">
              {/* Dot Navigation trigger */}
              <button
                onClick={() => handleClick(sec.id)}
                className="focus:outline-none cursor-pointer relative flex items-center justify-center"
                aria-label={`Navigate to ${sec.name}`}
              >
                {isActive ? (
                  // Active dot: mini Poké Ball
                  <motion.div 
                    layoutId="activeMapDot"
                    className="w-4.5 h-4.5 rounded-full border-2 border-charcoal bg-white flex items-center justify-center shadow-[0_0_8px_rgba(233,30,140,0.4)] relative"
                  >
                    <div className="w-full h-1/2 bg-psychic-pink absolute top-0 rounded-t-full border-b border-charcoal" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white border border-charcoal z-10" />
                  </motion.div>
                ) : (
                  // Inactive dot: map node
                  <div className="w-2.5 h-2.5 rounded-full bg-charcoal/30 border border-charcoal/40 hover:bg-psychic-pink/50 hover:border-psychic-pink transition-all duration-300 scale-100 hover:scale-125" />
                )}
              </button>

              {/* Tooltip Route speech bubble */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 origin-right transition-transform duration-200 bg-white border border-charcoal px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap text-left z-50">
                {/* speech bubble arrow pointer */}
                <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-r border-t border-charcoal rotate-45" />
                <div className="text-[10px] font-orbitron font-extrabold text-charcoal">{sec.name}</div>
                <div className="text-[8px] font-mono-tech text-gray-500 uppercase tracking-widest mt-0.5">Route: {sec.town}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
