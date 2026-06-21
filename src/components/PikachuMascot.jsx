import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick } from '../utils/audio';

export function PikachuMascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSparking, setIsSparking] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    playClick();
    setIsSparking(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Spark effect timeout
    setTimeout(() => {
      setIsSparking(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <AnimatePresence>
        {isSparking && (
          // Electric Sparks on click
          <>
            {[...Array(6)].map((_, i) => {
              const angle = (i * Math.PI) / 3;
              const distance = 45;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1.5, x: x, y: y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute w-2 h-2 bg-amber-glow rounded-full shadow-[0_0_8px_#FF9F1C] pointer-events-none"
                  style={{ top: '24px', left: '24px' }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={handleClick}
            whileHover={{ 
              rotate: 360,
              y: -8,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 50 }}
            className="relative group focus:outline-none cursor-pointer"
            title="Go to Top"
          >
            {/* Glowing red aura */}
            <div className="absolute inset-0 bg-psychic-pink/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Poké Ball Custom Vector */}
            <div className="w-14 h-14 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_8px_rgba(26,26,46,0.15)]">
                {/* White bottom half */}
                <circle cx="50" cy="50" r="44" fill="white" stroke="#1A1A2E" strokeWidth="5.5" />
                {/* Red top half */}
                <path d="M 6 50 A 44 44 0 0 1 94 50 Z" fill="#E91E8C" stroke="#1A1A2E" strokeWidth="5.5" />
                {/* Center line */}
                <line x1="6" y1="50" x2="94" y2="50" stroke="#1A1A2E" strokeWidth="5.5" />
                {/* Center button outer circle */}
                <circle cx="50" cy="50" r="14" fill="white" stroke="#1A1A2E" strokeWidth="5.5" />
                {/* Center button inner circle */}
                <circle cx="50" cy="50" r="7" fill="white" stroke="#1A1A2E" strokeWidth="2.5" />
              </svg>
              
              {/* Scroll text bubble peeking on hover */}
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-charcoal text-white font-orbitron text-[8px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded shadow whitespace-nowrap">
                Go Up!
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
