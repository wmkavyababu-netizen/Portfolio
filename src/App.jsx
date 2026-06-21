import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { PikachuMascot } from './components/PikachuMascot';
import { PokeBallProgressBar } from './components/PokeBallProgressBar';
import { PokedexClosing } from './components/PokedexClosing';
import { RegionMapNavigator } from './components/RegionMapNavigator';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { SkillsProjects } from './sections/SkillsProjects';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// Pokémon lightning-bolt section divider
const LightningDivider = () => (
  <div className="w-full flex items-center justify-center my-4 overflow-hidden select-none pointer-events-none">
    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFDE00]/30 to-transparent flex-1" />
    <svg viewBox="0 0 100 20" className="w-20 h-5 text-[#FFDE00] fill-[#FFDE00]" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,10 52,2 48,9 60,10 48,18 52,11" />
    </svg>
    <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFDE00]/30 to-transparent flex-1" />
  </div>
);

function App() {
  const [isPreloading, setIsPreloading] = useState(true);
  const [sparks, setSparks] = useState([]);

  // Electric sparks hover effect listener
  useEffect(() => {
    if (isPreloading) return;

    const handleMouseEnter = (e) => {
      const target = e.target.closest('a, button, [role="button"]');
      if (!target) return;
      
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      // Spawn 4 spark particles around the element center
      const newSparks = Array.from({ length: 4 }).map((_, i) => ({
        id: Date.now() + '-' + i + '-' + Math.random(),
        x,
        y,
        angle: (i * 90) + (Math.random() * 30 - 15),
        distance: Math.random() * 20 + 20
      }));
      
      setSparks(prev => [...prev, ...newSparks].slice(-25));
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    return () => document.removeEventListener('mouseenter', handleMouseEnter, true);
  }, [isPreloading]);

  return (
    <>
      {/* 1. Poké Ball progress bar */}
      {!isPreloading && <PokeBallProgressBar />}

      {/* 2. Pokédex Boot splash Preloader */}
      {isPreloading && <Preloader onComplete={() => setIsPreloading(false)} />}

      {/* 3. Global background Canvas nodes network */}
      <ParticleBackground />

      {/* 4. Poké Ball Spring Cursor follower */}
      <CustomCursor />

      {/* 5. Custom Poké Ball scroll-to-top button */}
      <PikachuMascot />

      {/* 6. Pokédex closing animation at absolute bottom */}
      {!isPreloading && <PokedexClosing />}

      {/* 7. Pokémon region-map style section navigator */}
      {!isPreloading && <RegionMapNavigator />}

      {/* Sparks Render Container */}
      {sparks.map(spark => (
        <motion.div
          key={spark.id}
          initial={{ opacity: 1, scale: 0.8, x: spark.x, y: spark.y }}
          animate={{ 
            opacity: 0, 
            scale: 1.4,
            x: spark.x + Math.cos(spark.angle * Math.PI / 180) * spark.distance,
            y: spark.y + Math.sin(spark.angle * Math.PI / 180) * spark.distance
          }}
          onAnimationComplete={() => {
            setSparks(prev => prev.filter(s => s.id !== spark.id));
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed w-1.5 h-1.5 bg-[#FFDE00] rounded-full pointer-events-none z-50 shadow-[0_0_8px_#FFDE00]"
          style={{ left: 0, top: 0 }}
        />
      ))}

      {/* Main Container */}
      <div className={`relative min-h-screen z-10 select-none transition-opacity duration-500 bg-[#FFFBF5] ${
        isPreloading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        
        {/* Sticky Glassmorphism Header */}
        <Navbar />

        {/* Content Layout Sections with Lightning-bolt Dividers */}
        <main className="w-full">
          <Hero />
          <LightningDivider />
          <About />
          <LightningDivider />
          <SkillsProjects />
          <LightningDivider />
          <Experience />
          <LightningDivider />
          <Achievements />
          <LightningDivider />
          <Certificates />
          <LightningDivider />
          <Contact />
        </main>

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}

export default App;
