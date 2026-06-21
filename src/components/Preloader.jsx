import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playBeep, playSuccess } from '../utils/audio';

// Custom illustrated Pikachu SVG
const PikachuSVG = () => (
  <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-[0_0_15px_rgba(244,210,60,0.6)]">
    {/* Ears */}
    <path d="M 30 35 L 12 5 C 7 0 14 5 22 20 L 30 35 Z" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />
    <path d="M 12 5 C 7 0 10 2 15 10 L 20 8 Z" fill="#1A1A2E" />
    
    <path d="M 70 35 L 88 5 C 93 0 86 5 78 20 L 70 35 Z" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />
    <path d="M 88 5 C 93 0 90 2 85 10 L 80 8 Z" fill="#1A1A2E" />
    
    {/* Tail */}
    <path d="M 20 70 L 5 60 L 10 50 L 0 45 L 12 35 L 25 50 Z" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />
    <path d="M 20 70 L 15 67 L 17 70 Z" fill="#A0522D" />

    {/* Body */}
    <ellipse cx="50" cy="65" rx="22" ry="24" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />

    {/* Head */}
    <circle cx="50" cy="42" r="18" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />

    {/* Eyes */}
    <circle cx="43" cy="38" r="2.5" fill="#1A1A2E" />
    <circle cx="42.2" cy="37.2" r="0.8" fill="#FFFFFF" />
    
    <circle cx="57" cy="38" r="2.5" fill="#1A1A2E" />
    <circle cx="56.2" cy="37.2" r="0.8" fill="#FFFFFF" />

    {/* Cheeks */}
    <circle cx="36" cy="46" r="3.5" fill="#E91E8C" />
    <circle cx="64" cy="46" r="3.5" fill="#E91E8C" />

    {/* Nose */}
    <polygon points="49,43 51,43 50,44.5" fill="#1A1A2E" />

    {/* Mouth */}
    <path d="M 46.5 47 Q 48.25 48.5 50 47 Q 51.75 48.5 53.5 47" fill="none" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Feet */}
    <ellipse cx="38" cy="87" rx="5" ry="3" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />
    <ellipse cx="62" cy="87" rx="5" ry="3" fill="#F4D23C" stroke="#1A1A2E" strokeWidth="2.5" />
    
    {/* Arms */}
    <path d="M 33 60 C 27 60 27 68 35 68" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
    <path d="M 67 60 C 73 60 73 68 65 68" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Lightning bolt SVGs that crackle around Pikachu
const LightningBolt = ({ style, delay }) => (
  <motion.svg
    viewBox="0 0 24 24"
    className="absolute w-8 h-8 text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_8px_#FFD700]"
    style={style}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0.6, 1.2, 0.7, 1.1, 0.8],
      opacity: [0.2, 1, 0.4, 1, 0.3],
      rotate: [0, 15, -15, 10, 0]
    }}
    transition={{
      duration: 0.6,
      delay: delay,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </motion.svg>
);

export function Preloader({ onComplete }) {
  const [stage, setStage] = useState('wiggle'); // wiggle -> burst -> pika
  const [showFlash, setShowFlash] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // 1. Shaking sound trigger
    playBeep(260, 0.15, 'sine');
    
    // 2. Shake -> Burst sequence
    const burstTimeout = setTimeout(() => {
      setStage('burst');
      setShowFlash(true);
      // Burst thunder slide beep
      playBeep(330, 0.6, 'sawtooth', 880);
    }, 1100);

    // 3. Show Pikachu details
    const pikaTimeout = setTimeout(() => {
      setStage('pika');
      setShowFlash(false);
      // Happy Pikachu arpeggio success beep
      playSuccess();
    }, 1350);

    // 4. Slide open / End Preload
    const endTimeout = setTimeout(() => {
      setIsOpened(true);
      document.body.style.overflow = 'unset';
      
      const completeTimeout = setTimeout(() => {
        onComplete();
      }, 700);
      return () => clearTimeout(completeTimeout);
    }, 3200);

    // Lock page scroll during intro
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(burstTimeout);
      clearTimeout(pikaTimeout);
      clearTimeout(endTimeout);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#FFFBF5] scanlines"
        >
          {/* Diagnostic status background text */}
          <div className="absolute top-8 left-8 font-mono-tech text-[10px] text-gray-400 select-none text-left uppercase leading-relaxed hidden md:block">
            <span>[ SYSTEM: INITIALIZING PIKACHU ENGINE ]</span><br />
            <span>[ GFX: GENERATING CORE ACCENTS ]</span><br />
            <span>[ NET: PORTFOLIO LOCAL CONNECT ]</span>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            
            {/* Shaking Poké Ball */}
            {stage === 'wiggle' && (
              <motion.div
                animate={{
                  rotate: [0, -12, 12, -12, 12, -8, 8, -4, 4, 0],
                  y: [0, -4, 0, -4, 0, -2, 0]
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
                }}
                className="w-36 h-36"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_8px_16px_rgba(26,26,46,0.15)]">
                  {/* White bottom half */}
                  <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#1A1A2E" strokeWidth="4.5" />
                  {/* Red top half */}
                  <path d="M 4 50 A 46 46 0 0 1 96 50 Z" fill="#E6332A" stroke="#1A1A2E" strokeWidth="4.5" />
                  {/* Horizontal line belt */}
                  <line x1="4" y1="50" x2="96" y2="50" stroke="#1A1A2E" strokeWidth="4.5" />
                  {/* Center release button */}
                  <circle cx="50" cy="50" r="13" fill="#1A1A2E" />
                  <circle cx="50" cy="50" r="8" fill="#FFFFFF" stroke="#1A1A2E" strokeWidth="2" />
                  <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" className="animate-pulse" />
                </svg>
              </motion.div>
            )}

            {/* Flash Overlay Effect */}
            {showFlash && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 30 }}
                transition={{ duration: 0.25 }}
                className="absolute w-6 h-6 rounded-full bg-white z-40"
              />
            )}

            {/* Pikachu SVG + Crackling Lightning sparks */}
            {stage === 'pika' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 180, damping: 15 }}
                className="relative flex flex-col items-center"
              >
                {/* Crackling sparks offset positions */}
                <LightningBolt style={{ top: '-30px', left: '-25px' }} delay={0} />
                <LightningBolt style={{ top: '-15px', right: '-35px' }} delay={0.15} />
                <LightningBolt style={{ bottom: '15px', left: '-40px' }} delay={0.3} />
                <LightningBolt style={{ bottom: '30px', right: '-25px' }} delay={0.08} />

                {/* Pikachu Character */}
                <PikachuSVG />

                {/* Text indicator */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-center"
                >
                  <h3 className="font-orbitron font-extrabold text-xl text-charcoal tracking-widest uppercase flex items-center justify-center gap-1.5">
                    Pikachu Engine
                  </h3>
                  <p className="font-mono-tech text-[10px] text-electric-cyan uppercase tracking-widest mt-1">
                    Connecting to terminal console...
                  </p>
                </motion.div>
              </motion.div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
