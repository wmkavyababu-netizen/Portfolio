import React, { useState, useEffect } from 'react';

export function PokeBallProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollPercent(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercent(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial run
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[6px] bg-white z-50 flex border-b border-charcoal/20 select-none pointer-events-none">
      {/* Red half of Poké Ball */}
      <div 
        className="h-full bg-psychic-pink transition-all duration-75"
        style={{ width: `${scrollPercent}%` }}
      />
      {/* White half of Poké Ball */}
      <div 
        className="h-full bg-white transition-all duration-75"
        style={{ width: `${100 - scrollPercent}%` }}
      />
      
      {/* Black dividing line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#1A1A2E]" />

      {/* Traveling Poké Ball icon */}
      <div 
        className="absolute top-1/2 w-4.5 h-4.5 rounded-full border-2 border-[#1A1A2E] bg-white shadow-md flex items-center justify-center transition-all duration-75"
        style={{ 
          left: `calc(${scrollPercent}% - 9px)`,
          transform: 'translateY(-50%)'
        }}
      >
        {/* Top Red half */}
        <div className="w-full h-1/2 bg-psychic-pink absolute top-0 rounded-t-full border-b border-[#1A1A2E] stroke-[#1A1A2E]" />
        {/* Center circle */}
        <div className="w-1.5 h-1.5 rounded-full border border-[#1A1A2E] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
      </div>
    </div>
  );
}
