import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, FolderGit2, Flame, MapPin, School, BookOpen, Calendar, Zap } from 'lucide-react';
import { CountUp } from '../components/CountUp';

export function About() {
  const stats = [
    { 
      label: 'Projects Built', 
      value: 6, 
      suffix: '+', 
      icon: <FolderGit2 className="text-electric-cyan" size={20} />, 
      color: 'shadow-neon-cyan border-electric-cyan/20 text-electric-cyan',
      max: 10,
      xpPercent: 60,
      xpColor: 'bg-electric-cyan'
    },
    { 
      label: 'Certifications & Events', 
      value: 24, 
      suffix: '', 
      icon: <Award className="text-psychic-pink" size={20} />, 
      color: 'shadow-neon-pink border-psychic-pink/20 text-psychic-pink',
      max: 50,
      xpPercent: 48,
      xpColor: 'bg-psychic-pink'
    },
    { 
      label: 'Academic CGPA', 
      value: 8.8, 
      decimals: 1, 
      suffix: ' / 10', 
      icon: <GraduationCap className="text-grass-green" size={20} />, 
      color: 'shadow-neon-green border-grass-green/20 text-grass-green',
      max: 10,
      xpPercent: 88,
      xpColor: 'bg-grass-green'
    },
    { 
      label: 'Hackathons Joined', 
      value: 5, 
      suffix: '', 
      icon: <Flame className="text-amber-glow" size={20} />, 
      color: 'shadow-neon-cyan border-amber-glow/20 text-amber-glow',
      max: 10,
      xpPercent: 50,
      xpColor: 'bg-amber-glow'
    },
  ];

  const education = [
    {
      type: 'college',
      degree: 'B.E. Computer Science Engineering',
      institution: 'Sri Venkateswara College of Engineering (SVCE)',
      location: 'Sriperumbudur, Tamil Nadu',
      date: '2024 – 2028',
      score: 'CGPA: 8.8',
      stageLabel: 'Evolved Form',
      stageColor: 'bg-electric-cyan/10 border-electric-cyan/30 text-electric-cyan',
      mapUrl: 'https://maps.google.com/maps?q=Sri%20Venkateswara%20College%20of%20Engineering,%20Pennalur,%20Sriperumbudur&t=&z=14&ie=UTF8&iwloc=&output=embed',
      icon: <GraduationCap size={18} className="text-electric-cyan" />
    },
    {
      type: 'diploma',
      degree: 'Honours Diploma in Computer Application (HDCA)',
      institution: 'CSC, T Nagar branch',
      location: 'T Nagar, Chennai',
      date: '2024 – 2025',
      score: 'Grade: A',
      stageLabel: 'Stage 1 Evolution',
      stageColor: 'bg-psychic-pink/10 border-psychic-pink/30 text-psychic-pink',
      mapUrl: 'https://maps.google.com/maps?q=CSC+Computer+Education+T+Nagar+Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed',
      icon: <BookOpen size={18} className="text-psychic-pink" />
    },
    {
      type: 'school',
      degree: 'Higher Secondary Schooling (MPC + Computer Science)',
      institution: 'Sri Sitaram Vidyalaya Matriculation Higher Secondary School',
      location: 'Ramakrishnapuram 1st Street, West Mambalam, Chennai, Tamil Nadu 600033',
      date: 'Completed 2024',
      score: 'HSC Core Science Stream',
      stageLabel: 'Basic Form',
      stageColor: 'bg-gray-100 border-gray-200 text-gray-500',
      mapUrl: 'https://maps.google.com/maps?q=Sri+Sitaram+Vidyalaya+Matriculation+Higher+Secondary+School+Ramakrishnapuram+1st+Street+West+Mambalam+Chennai+Tamil+Nadu+600033&t=&z=14&ie=UTF8&iwloc=&output=embed',
      icon: <School size={18} className="text-grass-green" />,
      rankBadges: [
        { title: '12th: 93%', rank: 'Group Topper', color: 'border-grass-green/30 text-grass-green bg-grass-green/5' },
        { title: '11th: 96%', rank: 'School First', color: 'border-psychic-pink/30 text-psychic-pink bg-psychic-pink/5' },
        { title: '10th: 97%', rank: 'School First', color: 'border-electric-cyan/30 text-electric-cyan bg-electric-cyan/5' }
      ]
    }
  ];

  return (
    <section id="about-education" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FFFBF5]">
      {/* Background decoration elements */}
      <div className="absolute top-1/3 left-0 w-24 h-[1px] bg-gradient-to-r from-electric-cyan/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-24 h-[1px] bg-gradient-to-l from-psychic-pink/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-orbitron text-xs font-black uppercase tracking-widest text-electric-cyan flex items-center gap-1.5">
            <Zap size={14} className="text-amber-500 fill-amber-500 animate-bounce" /> About Me &amp; Education
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-2 tracking-wider uppercase">
            Profile Logs &amp; Academic Timeline
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-cyan to-psychic-pink mt-3 rounded-full" />
        </div>

        {/* Narrative & Stats layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Narrative Column wrapped as a Pokémon Trainer ID Card */}
          <div className="lg:col-span-7 text-left bg-white border-4 border-double border-charcoal rounded-3xl p-6 relative overflow-hidden shadow-lg ring-8 ring-charcoal/5">
            
            {/* Trainer Card Header bar */}
            <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-charcoal select-none">
              <span className="font-orbitron font-extrabold text-xs uppercase tracking-widest text-charcoal flex items-center gap-1">
                ★ TRAINER CARD ID: #02028
              </span>
              <span className="font-orbitron font-black text-[10px] px-2.5 py-0.5 bg-[#FFDE00] text-charcoal border-2 border-charcoal rounded-full uppercase animate-pulse">
                LV. 3
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Profile Photo inside a Trainer Badge frame */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-charcoal bg-white">
                <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-tr from-electric-cyan to-psychic-pink opacity-80" />
                <div className="absolute inset-[3px] bg-[#FFFBF5] rounded-[10px] overflow-hidden">
                  <img
                    src="/images/achievements/profile.jpg"
                    alt="Kaviya B Profile"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full bg-white flex flex-col items-center justify-center text-gray-500 font-mono-tech p-2 text-center border border-gray-100">
                          <span class="text-[9px] uppercase text-electric-cyan mb-1">// PROFILE</span>
                          <span class="text-[7px] uppercase tracking-wider text-gray-600">profile.jpg</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>

              {/* Biographical Details */}
              <div className="space-y-3 flex-1">
                <h3 className="font-orbitron font-extrabold text-base text-charcoal tracking-wider uppercase flex items-center gap-1.5">
                  Biographical Summary
                </h3>
                <p className="text-gray-700 leading-relaxed font-sans text-sm md:text-base font-medium">
                  I am a motivated and analytical Full Stack Developer with a strong focus on engineering intelligent, customer-centric web applications and exploring Machine Learning pipelines. With hands-on proficiency across C++, OOPs, DBMS, and modern React stacks, I thrive on translating system requirements into clean, efficient code.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed font-sans text-sm md:text-base font-light mt-4">
              Through hackathons and building diverse, secure architectures — ranging from real-time maternal health monitoring tools to robust web banking applications — I have gained deep practical experience. I am always eager to connect with innovative minds, explore emerging technologies, and build solutions that drive efficiency and enhance user experiences.
            </p>
            
            <div className="pt-4 mt-2 border-t border-gray-100 flex gap-4 text-xs md:text-sm font-orbitron font-semibold text-gray-600 select-none">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-psychic-pink" /> Chennai, India</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-electric-cyan" /> CSE Class of 2028</span>
            </div>
          </div>

          {/* Stats Column with XP-Bar overlays */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glassmorphism bg-white border border-gray-200 p-4 rounded-xl flex flex-col justify-between items-start h-36 text-left relative overflow-hidden shadow-sm group ${stat.color.split(' ')[0]}`}
              >
                {/* Background scanning line */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gray-150 group-hover:bg-gray-200 transition-colors" />
                <div className="flex justify-between items-center w-full mb-1 select-none">
                  <div className="p-1.5 bg-gray-50 rounded border border-gray-150">
                    {stat.icon}
                  </div>
                  <span className="text-[9px] font-mono-tech text-gray-400 font-bold uppercase tracking-widest">ST-0{index+1}</span>
                </div>
                
                <div className="w-full">
                  <div className="font-orbitron font-extrabold text-lg md:text-xl text-charcoal flex items-baseline gap-0.5">
                    <CountUp end={stat.value} decimals={stat.decimals || 0} duration={1.5} />
                    <span className="text-xs font-semibold">{stat.suffix}</span>
                  </div>

                  {/* Horizontal XP Bar meter */}
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1.5 border border-gray-200 select-none">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.xpPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`h-full ${stat.xpColor}`}
                    />
                  </div>
                  <div className="flex justify-between text-[7px] font-mono-tech text-gray-400 mt-0.5 uppercase tracking-wider select-none">
                    <span>XP: {stat.value}</span>
                    <span>MAX: {stat.max}</span>
                  </div>

                  <p className="text-[9px] text-gray-500 uppercase tracking-wider font-orbitron font-bold mt-2 select-none">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Cards Stack (Scrapped Timeline) */}
        <div className="text-left mt-16">
          <h3 className="font-orbitron font-black text-lg text-charcoal tracking-wider select-none mb-10 uppercase flex items-center gap-2">
            <Zap size={16} className="text-amber-500 fill-amber-500" /> Academic Credentials
          </h3>

          <div className="flex flex-col gap-6">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-gray-200 hover:border-electric-cyan/40 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-[0_4px_20px_rgba(0,184,217,0.08)] relative overflow-hidden transition-all duration-300 group text-left"
              >
                {/* Top visual divider */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* Left part: text details */}
                <div className={`${item.mapUrl ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-3.5`}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase bg-gray-50 border border-gray-200 text-gray-700">
                      {item.date}
                    </span>
                    <span className="font-orbitron font-extrabold text-xs text-psychic-pink">
                      {item.score}
                    </span>
                    
                    {/* Evolution stage badge details */}
                    <span className={`px-2 py-0.5 border rounded text-[9px] font-orbitron font-extrabold uppercase tracking-wider ${item.stageColor}`}>
                      {item.stageLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 text-gray-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-orbitron font-extrabold text-base md:text-lg text-charcoal group-hover:text-electric-cyan transition-colors leading-snug">
                        {item.degree}
                      </h4>
                      <p className="text-sm text-gray-800 font-semibold font-sans mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 font-mono-tech flex items-center gap-1">
                    <MapPin size={12} className="text-gray-400" /> {item.location}
                  </p>

                  {/* School distinctions badges */}
                  {item.rankBadges && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.rankBadges.map((badge, bidx) => (
                        <div key={bidx} className={`px-2 py-0.5 border rounded text-[9px] font-orbitron font-bold uppercase tracking-wider flex items-center gap-1 ${badge.color}`}>
                          <Zap size={8} className="fill-current" />
                          <span>{badge.title} — {badge.rank}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right part: map iframe */}
                {item.mapUrl && (
                  <div className="lg:col-span-5 w-full h-[140px] rounded-xl overflow-hidden border border-gray-200 shadow-inner relative mt-4 lg:mt-0">
                    <iframe
                      src={item.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(10%) hue-rotate(180deg) brightness(1.05) contrast(0.95) saturate(0.8)' }}
                      allowFullScreen=""
                      loading="lazy"
                      title={`${item.institution} Location Map`}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-electric-cyan/15 rounded-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
