import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, Code2, Terminal, MessageSquare, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { useTypewriter } from '../hooks/useTypewriter';
import { playClick } from '../utils/audio';

export function Hero() {
  const roles = [
    'Full Stack Developer',
    'ML Enthusiast',
    'Software Engineering Intern',
    'CSE Student'
  ];
  
  const currentRole = useTypewriter(roles, 80, 40, 2000);

  const links = [
    {
      name: 'GitHub',
      icon: <GithubIcon size={16} />,
      url: 'https://github.com/wmkavyababu-netizen',
      color: 'border-electric-cyan text-charcoal hover:bg-electric-cyan/10 hover:shadow-[0_0_12px_rgba(0,184,217,0.2)]',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon size={16} />,
      url: 'https://www.linkedin.com/in/kaviya-babu-752063327',
      color: 'border-psychic-pink text-charcoal hover:bg-psychic-pink/10 hover:shadow-[0_0_12px_rgba(233,30,140,0.2)]',
    },
    {
      name: 'GeeksforGeeks',
      icon: <Code2 size={16} />,
      url: 'https://www.geeksforgeeks.org/profile/wmkavye0da',
      color: 'border-grass-green text-charcoal hover:bg-grass-green/10 hover:shadow-[0_0_12px_rgba(46,204,113,0.2)]',
    },
    {
      name: 'HackerRank',
      icon: <Terminal size={16} />,
      url: 'https://www.hackerrank.com/profile/wmkavyababu',
      color: 'border-amber-glow text-charcoal hover:bg-amber-glow/10 hover:shadow-[0_0_12px_rgba(255,159,28,0.2)]',
    },
  ];

  const handleScrollTo = (id) => {
    playClick();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-[#FFFBF5]"
    >
      {/* Background visual Poké Ball arcs */}
      <div className="absolute top-1/4 left-10 w-48 h-48 border-2 border-electric-cyan/10 rounded-full pointer-events-none animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 border-2 border-psychic-pink/10 rounded-full pointer-events-none animate-pulse duration-3000 hidden md:block" />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        
        {/* Pikachu Engine Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/35 bg-electric-cyan/5 text-[10px] md:text-xs font-mono-tech text-charcoal uppercase tracking-widest shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping" />
          PIKACHU ENGINE: ACTIVE
        </motion.div>

        {/* Glitch Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-orbitron font-extrabold text-5xl md:text-8xl tracking-tight text-charcoal mb-4 select-none uppercase"
        >
          <span className="glitch-text flex items-center justify-center gap-2">
            Kaviya B
          </span>
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-10 md:h-12 flex items-center justify-center mb-6 font-mono-tech text-lg md:text-2xl text-psychic-pink font-bold select-none"
        >
          <Zap size={20} className="text-amber-400 fill-amber-400 mr-2 animate-bounce" />
          <span>{currentRole}</span>
          <span className="w-2.5 h-5 md:h-6 bg-psychic-pink ml-1 animate-pulse" />
        </motion.div>

        {/* Tagline text - Enlarged & High contrast */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-base md:text-lg text-gray-700 leading-relaxed mb-10 select-none font-sans font-medium"
        >
          Motivated and analytical Full Stack Developer building intelligent, customer-centric applications — from health diagnostics to secure banking systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 md:gap-5 mb-12"
        >
          <button
            onClick={() => handleScrollTo('#skills-projects')}
            className="px-6 py-3 bg-electric-cyan hover:bg-electric-cyan/90 text-white font-orbitron font-bold text-xs uppercase tracking-wider rounded shadow-[0_4px_12px_rgba(0,184,217,0.3)] transition-all hover:translate-y-[-2px] hover:shadow-[0_4px_16px_rgba(0,184,217,0.45)] active:translate-y-0 cursor-pointer"
          >
            View Projects
          </button>
          
          <a
            href="/resume/Kaviya_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="px-6 py-3 border border-psychic-pink text-psychic-pink font-orbitron font-bold text-xs uppercase tracking-wider rounded bg-white hover:bg-psychic-pink/5 shadow-[0_2px_8px_rgba(233,30,140,0.1)] transition-all hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(233,30,140,0.25)] hover:text-psychic-pink active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <FileText size={14} />
            Download Resume
          </a>

          <button
            onClick={() => handleScrollTo('#contact')}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-orbitron font-bold text-xs uppercase tracking-wider rounded bg-white hover:bg-gray-50 transition-all hover:translate-y-[-2px] active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare size={14} />
            Contact Me
          </button>
        </motion.div>

        {/* Links Hub social pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full border-t border-gray-200 pt-8 max-w-xl"
        >
          <h5 className="text-[10px] text-gray-500 font-mono-tech uppercase tracking-widest mb-4">
            ACCESSIBLE NETWORK INTEGRATIONS
          </h5>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full font-orbitron text-[10px] md:text-xs uppercase tracking-wider bg-white backdrop-blur-sm transition-all duration-300 ${link.color} active:scale-95 cursor-pointer`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bouncing Poké Ball Bouncing Chevron Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none cursor-pointer group"
        onClick={() => handleScrollTo('#about-education')}
      >
        <span className="text-[9px] font-mono-tech text-gray-500 uppercase tracking-widest group-hover:text-electric-cyan transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="relative w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center group-hover:border-electric-cyan transition-colors shadow-inner bg-white overflow-hidden"
        >
          {/* Miniature split Poké Ball */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-[#E6332A]" />
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-white" />
          <div className="absolute w-full h-[1px] bg-[#1A1A2E]" style={{ top: '50%' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-white border border-[#1A1A2E] z-10" />
          <ChevronDown size={12} className="absolute bottom-[-10px] text-gray-500 group-hover:text-electric-cyan transition-colors" />
        </motion.div>
      </motion.div>

    </section>
  );
}
