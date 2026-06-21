import { useState, useEffect } from 'react';

export function useScrollSpy(selectors, options = { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = selectors.map(selector => document.querySelector(selector)).filter(Boolean);
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selectors, options.rootMargin, options.threshold]);

  return activeId;
}
