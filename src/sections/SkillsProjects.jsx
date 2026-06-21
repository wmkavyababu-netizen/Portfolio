import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Lock, Cpu, Sparkles, FolderDot, Zap, Swords, Flame, Droplets, Leaf, Shield } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { playClick } from '../utils/audio';

// Custom Poké Ball status icon
const PokeBallIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#1A1A2E" strokeWidth="2.5" fill="white" />
    {filled ? (
      <path d="M2 12a10 10 0 0 1 20 0H2z" transform="rotate(180 12 12)" fill="#E91E8C" stroke="#1A1A2E" strokeWidth="2.5" />
    ) : (
      <path d="M2 12a10 10 0 0 1 20 0H2z" transform="rotate(180 12 12)" fill="#BDC3C7" stroke="#1A1A2E" strokeWidth="2.5" />
    )}
    <line x1="2" y1="12" x2="22" y2="12" stroke="#1A1A2E" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="3.5" fill="white" stroke="#1A1A2E" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="1.2" fill={filled ? '#E91E8C' : '#95A5A6'} />
  </svg>
);

// Reusable Stacked Full-Width Project Card
function ProjectCard({ project, idx }) {
  const isCompleted = project.status === 'Completed';

  // Distinct glowing border colors on hover
  const glowColors = [
    'hover:border-electric-cyan/50 hover:shadow-[0_4px_20px_rgba(0,184,217,0.12)]',
    'hover:border-psychic-pink/50 hover:shadow-[0_4px_20px_rgba(233,30,140,0.12)]',
    'hover:border-grass-green/5 hover:shadow-[0_4px_20px_rgba(46,204,113,0.12)]',
    'hover:border-amber-glow/50 hover:shadow-[0_4px_20px_rgba(255,159,28,0.12)]',
    'hover:border-poison-purple/50 hover:shadow-[0_4px_20px_rgba(155,93,229,0.12)]',
    'hover:border-electric-cyan/50 hover:shadow-[0_4px_20px_rgba(0,184,217,0.12)]',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      whileHover={{ y: -4 }}
      className={`bg-white border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start text-left transition-all duration-300 relative group overflow-hidden ${glowColors[idx % glowColors.length]}`}
    >
      {/* Top visual divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Left Core Info */}
      <div className="flex-1 space-y-3.5 w-full">
        <div className="flex justify-between items-center w-full">
          <span className="text-[10px] font-mono-tech text-gray-400 font-bold uppercase tracking-widest">
            PROJECT CORE DATA
          </span>
          
          {/* Poké Ball caught status badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-[10px] font-mono-tech font-bold uppercase select-none">
            <PokeBallIcon filled={isCompleted} />
            <span className={isCompleted ? 'text-grass-green' : 'text-amber-glow'}>
              {isCompleted ? 'CAUGHT' : 'WILD'}
            </span>
          </div>
        </div>

        {/* Title styled with Pokédex corner/badge number */}
        <h4 className="font-orbitron font-extrabold text-xl md:text-2xl text-charcoal group-hover:text-electric-cyan transition-colors flex items-center flex-wrap gap-2.5">
          <span className="text-[10px] font-mono-tech font-bold text-white bg-psychic-pink px-2.5 py-0.5 rounded shadow-[0_2px_4px_rgba(233,30,140,0.2)] border border-psychic-pink/30 select-none">
            No. 00{idx + 1}
          </span>
          <span>{project.title}</span>
        </h4>

        {/* Awards/Nominations Badges */}
        {project.achievement && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-psychic-pink/30 bg-psychic-pink/5 text-[10px] font-orbitron text-psychic-pink font-bold uppercase tracking-wider max-w-full text-wrap leading-normal">
            <Sparkles size={10} className="fill-current shrink-0" />
            <span>{project.achievement}</span>
          </div>
        )}

        {/* Description paragraph */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sans font-light max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Right Tags & Deployed Link Controls */}
      <div className="w-full md:w-60 shrink-0 md:self-stretch flex flex-col justify-between items-start md:items-end gap-6 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-8">
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 md:justify-end">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded bg-gray-50 border border-gray-200/60 text-[10px] font-mono-tech text-gray-700">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3.5 w-full md:w-auto justify-start md:justify-end items-center h-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-xs font-orbitron font-bold uppercase text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              title="View GitHub Repository"
            >
              <GithubIcon size={14} />
              <span>Repository</span>
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-electric-cyan rounded text-xs font-orbitron font-bold uppercase text-electric-cyan bg-white hover:bg-electric-cyan/5 transition-colors cursor-pointer"
              title="View Live Demonstration"
            >
              <Globe size={14} />
              <span>Live Demo</span>
            </a>
          )}
          
          {!project.github && !project.live && (
            <span className="text-[9px] font-mono-tech text-gray-400 flex items-center gap-1 uppercase select-none font-bold">
              <Lock size={10} /> Secure Module
            </span>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export function SkillsProjects() {
  // Skill Categories styled like authentic Pokémon "type chips"
  const skillCategories = [
    {
      category: 'Languages',
      typeLabel: 'Fighting',
      badgeStyle: 'border-[#C0392B] text-white bg-[#D35400] shadow-[0_2px_4px_rgba(211,84,0,0.2)] font-semibold',
      icon: <Swords size={12} className="stroke-white" />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      category: 'Frontend Development',
      typeLabel: 'Fire',
      badgeStyle: 'border-[#E74C3C] text-white bg-[#E67E22] shadow-[0_2px_4px_rgba(230,126,34,0.2)] font-semibold',
      icon: <Flame size={12} className="stroke-white" />,
      skills: ['HTML', 'CSS', 'ES6+', 'React.js']
    },
    {
      category: 'Backend Architecture',
      typeLabel: 'Water',
      badgeStyle: 'border-[#2980B9] text-white bg-[#3498DB] shadow-[0_2px_4px_rgba(52,152,219,0.2)] font-semibold',
      icon: <Droplets size={12} className="stroke-white" />,
      skills: ['Node.js', 'REST API', 'API Integration', 'AWS']
    },
    {
      category: 'Databases & Storage',
      typeLabel: 'Psychic',
      badgeStyle: 'border-[#8E44AD] text-white bg-[#9B5DE5] shadow-[0_2px_4px_rgba(155,93,229,0.2)] font-semibold',
      icon: <Sparkles size={12} className="stroke-white fill-white/20" />,
      skills: ['PostgreSQL', 'Supabase']
    },
    {
      category: 'Libraries & Machine Learning',
      typeLabel: 'Grass',
      badgeStyle: 'border-[#27AE60] text-white bg-[#2ECC71] shadow-[0_2px_4px_rgba(46,204,113,0.2)] font-semibold',
      icon: <Leaf size={12} className="stroke-white" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Deep Learning Basics']
    },
    {
      category: 'Core Computer Science',
      typeLabel: 'Electric',
      badgeStyle: 'border-[#F1C40F] text-[#1A1A2E] bg-[#FFDE00] shadow-[0_2px_4px_rgba(255,222,0,0.2)] font-bold',
      icon: <Zap size={12} className="stroke-[#1A1A2E] fill-[#1A1A2E]" />,
      skills: ['OOPs', 'DSA', 'DBMS', 'Operating Systems']
    },
    {
      category: 'Development Tools',
      typeLabel: 'Steel',
      badgeStyle: 'border-[#7F8C8D] text-white bg-[#95A5A6] shadow-[0_2px_4px_rgba(149,165,166,0.2)] font-semibold',
      icon: <Shield size={12} className="stroke-white" />,
      skills: ['Git', 'GitHub', 'VS Code', 'CMake', 'Figma', 'Canva']
    }
  ];

  const projects = [
    {
      title: 'Maternal Health Monitoring System',
      status: 'In Progress',
      achievement: 'Research Paper Upcoming',
      description: 'Multi-parameter diagnostic tool for postpartum mothers, detecting jaundice, anaemia, cardiovascular issues, and depression — available in bilingual language support. Extended to cover pregnancy and child health tracking.',
      tech: ['EfficientNet', 'XGBoost', 'PPG Tech', 'Supabase', 'Python'],
      github: null,
      live: null
    },
    {
      title: 'JalGarbha – Smart RWH Ecosystem',
      status: 'Completed',
      achievement: 'Internal SIH (Smart India Hackathon) 2025 — Top 5 among 80 teams, Sri Venkateswara College of Engineering. Team: Hydro Techies. Role: Team Leader.',
      description: 'Translates geospatial data into automated feasibility reports for rainwater harvesting. Designed a single-window digital approval workflow replacing manual multi-document water management procedures.',
      tech: ['React.js', 'TypeScript', 'CNN', 'XGBoost', 'API'],
      github: null,
      live: null
    },
    {
      title: 'PRAVEEN Bank – Web Banking App',
      status: 'Completed',
      description: 'Full-featured banking application with secure user authentication, account management, deposits, withdrawals, loans, and an admin dashboard. Secured with token-based REST APIs and efficient file-based (.dat) data storage.',
      tech: ['C++', 'Crow Framework', 'JavaScript', 'HTML/CSS', 'CMake'],
      github: 'https://github.com/wmkavyababu-netizen/Praveen_Bank',
      live: 'https://praveen-bank.onrender.com/'
    },
    {
      title: 'Interface2007',
      status: 'Completed',
      description: 'A comprehensive student platform that integrates coding assessments, programming challenges, multiple-choice evaluations, academic resources, and development tools within a unified dashboard to enhance learning, practice, and technical skill development.',
      tech: ['React.js', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/wmkavyababu-netizen/Interface2007',
      live: 'https://interface2007.onrender.com'
    },
    {
      title: 'DSC Grading Portal',
      status: 'Completed',
      description: 'A web-based grading platform developed for Blueprint 2026 to streamline hackathon evaluations, enabling judges to assess teams using predefined criteria with secure role-based access and centralized score management.',
      tech: ['React.js', 'Supabase', 'JavaScript'],
      github: 'https://github.com/wmkavyababu-netizen/dsc',
      live: 'https://wmkavyababu-netizen.github.io/dsc/#login'
    },
    {
      title: 'Package Management System',
      status: 'Completed',
      description: 'A business management application that simplifies order processing, package calculations, inventory tracking, and quantity management through an intuitive and centralized dashboard.',
      tech: ['React.js', 'JavaScript'],
      github: 'https://github.com/wmkavyababu-netizen/Packages',
      live: 'https://wmkavyababu-netizen.github.io/Packages/'
    }
  ];

  return (
    <section id="skills-projects" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FFFBF5]">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-32 h-[1px] bg-gradient-to-l from-electric-cyan/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-psychic-pink/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-orbitron text-xs font-black uppercase tracking-widest text-psychic-pink flex items-center gap-1.5">
            <Zap size={14} className="text-amber-500 fill-amber-500 animate-bounce" /> Skills &amp; Projects
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-2 tracking-wider uppercase">
            Technical Matrix &amp; Deployed Releases
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-psychic-pink via-electric-cyan to-grass-green mt-3 rounded-full" />
        </div>

        {/* SKILLS SUBSECTION */}
        <div className="mb-24 text-left">
          <h3 className="font-orbitron font-extrabold text-base text-electric-cyan tracking-wider uppercase mb-10 flex items-center gap-2">
            <Cpu size={18} className="text-electric-cyan" />
            Skills Inventory
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {skillCategories.map((categoryObj) => (
              <div key={categoryObj.category} className="space-y-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-[0_4px_12px_rgba(0,184,217,0.06)] transition-shadow flex flex-col justify-between">
                <h4 className="font-orbitron font-bold text-sm text-charcoal uppercase tracking-wider flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Zap size={12} className="text-amber-500 fill-amber-500" />
                    {categoryObj.category}
                  </span>
                  <span className="text-[9px] font-mono-tech px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-bold uppercase tracking-wider">
                    {categoryObj.typeLabel}-type
                  </span>
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {categoryObj.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                      className={`px-3.5 py-1 border rounded-full font-orbitron text-xs tracking-wider select-none cursor-default font-medium flex items-center gap-1.5 ${categoryObj.badgeStyle}`}
                    >
                      {categoryObj.icon}
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS SUBSECTION */}
        <div className="text-left">
          <h3 className="font-orbitron font-extrabold text-base text-psychic-pink tracking-wider uppercase mb-10 flex items-center gap-2">
            <FolderDot size={18} className="text-psychic-pink" />
            Application Releases
          </h3>

          {/* Single-Column Stacked Cards */}
          <div className="flex flex-col gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
