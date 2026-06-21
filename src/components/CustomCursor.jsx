import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for the outer cursor (smooth lag effect)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device or mobile width
    const checkDevice = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect clickable elements hover state
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .interactive-pill'
      );
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add hover listener on clickables (and re-add occasionally on DOM changes)
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 2000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Inner Dot (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#00B8D9] rounded-full pointer-events-none z-50 shadow-[0_0_6px_#00B8D9]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? '#E91E8C' : '#00B8D9',
        }}
        transition={{ type: 'tween', duration: 0.1 }}
      />

      {/* Outer Scanner Reticle (Spring Follower) */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-[#E91E8C] rounded-full pointer-events-none z-50 shadow-[0_0_6px_rgba(233,30,140,0.3)] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          borderColor: isHovered ? '#00B8D9' : '#E91E8C',
          rotate: isHovered ? 180 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Subtle Poké Ball horizontal line crosshairs inside */}
        <div className="absolute w-[80%] h-[1px] bg-[#E91E8C] opacity-40" style={{ borderColor: isHovered ? '#00B8D9' : '#E91E8C' }} />
        <div className="absolute w-[6px] h-[6px] border border-[#E91E8C] rounded-full bg-white opacity-80" style={{ borderColor: isHovered ? '#00B8D9' : '#E91E8C' }} />
      </motion.div>
    </>
  );
}
