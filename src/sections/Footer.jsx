import React from 'react';
import { Code2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export function Footer() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About & Education', href: '#about-education' },
    { label: 'Skills & Projects', href: '#skills-projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <GithubIcon size={16} />, url: 'https://github.com/wmkavyababu-netizen' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={16} />, url: 'https://www.linkedin.com/in/kaviya-babu-752063327' },
    { name: 'GeeksforGeeks', icon: <Code2 size={16} />, url: 'https://www.geeksforgeeks.org/profile/wmkavye0da' },
    { name: 'HackerRank', icon: <Terminal size={16} />, url: 'https://www.hackerrank.com/profile/wmkavyababu' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-gray-200 py-12 px-6 scanlines">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        
        {/* Nav links repeat */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="font-orbitron text-[10px] md:text-xs uppercase tracking-wider text-gray-500 hover:text-electric-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Icons row */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-gray-500 hover:text-charcoal hover:border-gray-500 hover:shadow-sm transition-all cursor-pointer"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Center Gradient Mantra */}
        <div className="py-2">
          <p className="font-orbitron font-extrabold text-sm md:text-base uppercase tracking-widest bg-gradient-to-r from-electric-cyan via-psychic-pink to-grass-green bg-clip-text text-transparent filter drop-shadow-[0_0_8px_rgba(255,47,208,0.25)] select-none">
            Goal to achieve · Mind to optimise · Life to grow
          </p>
        </div>

        {/* Copyright details */}
        <div className="text-gray-600 font-mono-tech text-[10px] uppercase tracking-widest select-none">
          <p>© 2026 Kaviya B. All rights reserved.</p>
          <p className="text-[8px] text-gray-500 mt-1">Console Code System Engine · V4.0.0</p>
        </div>

      </div>
    </footer>
  );
}
