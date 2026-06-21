import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Award } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: 'Budding Bright Engineer Award',
      issuer: 'Sri Venkateswara College of Engineering',
      image: '/images/achievements/budding-engineer.jpg',
      description: 'Recognizes students demonstrating outstanding academic performance and technical excellence in their field. Awarded by Sri Venkateswara College of Engineering.',
      icon: <Award className="text-electric-cyan" size={18} />,
      colorClass: 'border-electric-cyan/30 text-electric-cyan bg-electric-cyan/5'
    },
    {
      title: 'Internal SIH (Smart India Hackathon) 2025',
      issuer: 'Sri Venkateswara College of Engineering',
      image: '/images/achievements/sih-certificate.jpg',
      description: 'Internal SIH (Smart India Hackathon) 2025 — Top 5 among 80 teams, Sri Venkateswara College of Engineering. Team: Hydro Techies. Role: Team Leader.',
      icon: <Trophy className="text-psychic-pink" size={18} />,
      colorClass: 'border-psychic-pink/30 text-psychic-pink bg-psychic-pink/5'
    },
    {
      title: 'Paper Presentation — 1st Prize',
      issuer: 'Association of Computer Engineers (ACE), SVCE',
      image: '/images/achievements/paper-presentation.jpg',
      description: 'Awarded first place for research on Maternal Health Monitoring postpartum diagnostics, utilizing EfficientNet neural networks, PPG tech interfaces, and Supabase database architectures.',
      icon: <Sparkles className="text-grass-green" size={18} />,
      colorClass: 'border-grass-green/30 text-grass-green bg-grass-green/5'
    }
  ];

  return (
    <section id="achievements" className="relative py-24 px-6 border-b border-gray-200 scroll-mt-16 bg-[#FAF7F2]">
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-psychic-pink/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-electric-cyan/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-psychic-pink">★ HALL OF FAME LOGS</span>
          <h2 className="font-orbitron font-extrabold text-3xl md:text-4xl text-charcoal mt-1 tracking-wider uppercase">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-psychic-pink to-electric-cyan mt-3 rounded-full" />
        </div>

        {/* Vertical Stack of Cards */}
        <div className="flex flex-col gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center md:items-start text-left transition-all duration-300 relative group overflow-hidden hover:border-psychic-pink/50 hover:shadow-[0_4px_20px_rgba(233,30,140,0.12)]"
            >
              {/* Gym Badge in the corner */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full text-[9px] font-orbitron font-extrabold text-amber-500 uppercase z-10 shadow-sm">
                <Award size={10} className="fill-amber-500 animate-bounce" />
                Gym Badge
              </div>

              {/* Rare Candy Unlock Shine Animation Sweep Overlay */}
              <motion.div
                initial={{ x: '-100%', opacity: 0.7 }}
                whileInView={{ x: '100%', opacity: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-20 skew-x-12"
              />

              {/* Top visual divider */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              {/* Left Column: Image with Gym Badge frame */}
              <div className="w-44 h-44 md:w-48 md:h-48 shrink-0 flex justify-center items-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-tr from-electric-cyan via-psychic-pink to-grass-green opacity-70" />
                  <div className="absolute inset-[3px] bg-gray-50 rounded-[13px] overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `
                          <div class="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-400 font-mono-tech p-4 text-center">
                            <span class="text-xs uppercase text-electric-cyan mb-2">// LOG IMAGE</span>
                            <span class="text-[9px] uppercase tracking-wider text-gray-500">${achievement.image.split('/').pop()}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 space-y-3.5 pr-8 mt-4 md:mt-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-orbitron font-semibold uppercase tracking-wider ${achievement.colorClass}`}>
                    {achievement.icon}
                    <span>Trophy Module</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono-tech text-gray-500 uppercase tracking-wider">
                    ISSUED BY: {achievement.issuer}
                  </span>
                </div>

                <h3 className="font-orbitron font-extrabold text-xl text-charcoal group-hover:text-psychic-pink transition-colors uppercase tracking-wider leading-snug">
                  {achievement.title}
                </h3>

                {achievement.description && (
                  <p className="text-sm md:text-base text-gray-700 font-sans leading-relaxed font-normal">
                    {achievement.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
