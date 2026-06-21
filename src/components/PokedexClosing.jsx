import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playBeep } from '../utils/audio';

export function PokedexClosing() {
  const [isClosed, setIsClosed] = useState(false);
  const [playedSound, setPlayedSound] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 100) return; // Ignore if not scrollable enough
      
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 15;
      
      if (atBottom) {
        setIsClosed(true);
        if (!playedSound) {
          // Play a power-down descending sweep beep
          playBeep(440, 0.4, 'sine', 110);
          setPlayedSound(true);
        }
      } else {
        setIsClosed(false);
        if (playedSound && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 60) {
          // Reset sound trigger when scrolled up
          setPlayedSound(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [playedSound]);

  return (
    <AnimatePresence>
      {isClosed && (
        <motion.div 
          className="fixed inset-0 z-50 pointer-events-none select-none flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Top panel (Red/Pink) */}
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 22, stiffness: 150 }}
            className="absolute top-0 left-0 w-full h-[50vh] bg-psychic-pink border-b-[6px] border-[#1A1A2E] flex items-end justify-center pointer-events-auto"
          >
            {/* Center Poké Ball upper rim */}
            <div className="w-24 h-12 bg-psychic-pink border-t-[6px] border-l-[6px] border-r-[6px] border-[#1A1A2E] rounded-t-full translate-y-[6px] relative z-10 flex items-end justify-center">
              <div className="w-12 h-6 bg-white border-t-[4px] border-l-[4px] border-r-[4px] border-[#1A1A2E] rounded-t-full translate-y-[2px]" />
            </div>
          </motion.div>

          {/* Bottom panel (White) */}
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 22, stiffness: 150 }}
            className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#FFFBF5] border-t-[6px] border-[#1A1A2E] flex items-start justify-center pointer-events-auto"
          >
            {/* Center Poké Ball lower rim */}
            <div className="w-24 h-12 bg-[#FFFBF5] border-b-[6px] border-l-[6px] border-r-[6px] border-[#1A1A2E] rounded-b-full -translate-y-[6px] relative z-10 flex items-start justify-center">
              <div className="w-12 h-6 bg-white border-b-[4px] border-l-[4px] border-r-[4px] border-[#1A1A2E] rounded-b-full -translate-y-[2px]" />
            </div>
          </motion.div>

          {/* Center Poké Ball Button Detail */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 0.15, type: 'spring', damping: 12 }}
            className="w-10 h-10 rounded-full border-[5px] border-[#1A1A2E] bg-white z-50 flex items-center justify-center pointer-events-auto shadow-md"
          >
            <div className="w-3 h-3 rounded-full bg-psychic-pink animate-pulse" />
          </motion.div>

          {/* Text indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="z-50 mt-24 text-center"
          >
            <span className="font-orbitron font-extrabold text-xs text-charcoal bg-white border-2 border-charcoal px-4 py-2 rounded-full uppercase shadow">
              Session Bookmarked • Scroll up to re-open
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
