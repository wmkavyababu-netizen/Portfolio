import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { playClick } from '../utils/audio';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About & Education', href: '#about-education', id: 'about-education' },
    { label: 'Skills & Projects', href: '#skills-projects', id: 'skills-projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // IDs to spy on (without hash)
  const spyIds = navItems.map((item) => `#${item.id}`);
  const activeId = useScrollSpy(spyIds);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    playClick();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 glassmorphism border-b border-electric-cyan/20 px-4 md:px-8 py-3.5 flex justify-between items-center transition-all duration-300">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          {/* Detailed Illustrated Poké Ball */}
          <div className="relative w-8 h-8 rounded-full border-2 border-[#1A1A2E] flex items-center justify-center bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_10px_rgba(0,184,217,0.35)] transition-all overflow-hidden">
            {/* Top Half Red */}
            <div className="absolute top-0 left-0 w-full h-[50%] bg-[#E6332A]" />
            {/* Belt Line */}
            <div className="absolute top-[50%] left-0 w-full h-[3px] bg-[#1A1A2E] transform -translate-y-1/2" />
            {/* Center release button */}
            <div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 rounded-full bg-[#1A1A2E] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
          <span className="font-orbitron font-bold tracking-wider text-sm md:text-base bg-gradient-to-r from-electric-cyan to-psychic-pink bg-clip-text text-transparent group-hover:brightness-110 transition-all">
            KAVIYA.B
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative font-orbitron text-[11px] xl:text-xs uppercase tracking-wider py-1.5 transition-colors duration-300 ${
                  isActive ? 'text-electric-cyan font-bold' : 'text-gray-700 hover:text-charcoal'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-electric-cyan shadow-[0_0_8px_#00B8D9]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => { playClick(); setIsOpen(!isOpen); }}
          className="lg:hidden text-gray-700 hover:text-electric-cyan focus:outline-none transition-colors cursor-pointer p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[260px] max-w-full h-full z-50 bg-[#FFFBF5] border-l border-electric-cyan/20 p-6 flex flex-col justify-between lg:hidden scanlines"
            >
              <div className="flex flex-col gap-8">
                {/* Header inside drawer */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="font-orbitron font-extrabold tracking-widest text-charcoal text-sm">
                    POKÉDEX MENU
                  </span>
                  <button
                    onClick={() => { playClick(); setIsOpen(false); }}
                    className="text-gray-500 hover:text-psychic-pink transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`font-orbitron text-xs uppercase tracking-wider py-2 px-3 rounded border transition-all ${
                          isActive
                            ? 'text-electric-cyan border-electric-cyan/30 bg-electric-cyan/5 font-bold shadow-[0_2px_8px_rgba(0,184,217,0.1)]'
                            : 'text-gray-600 border-transparent hover:text-charcoal hover:bg-gray-100'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Status footer inside drawer */}
              <div className="border-t border-gray-200 pt-4 text-center">
                <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-electric-cyan rounded-full animate-ping" />
                  CONSOLE ONLINE
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
