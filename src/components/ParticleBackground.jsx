import React, { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = window.innerWidth < 768 ? 40 : 100;
    const connectionDist = 110;

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates for parallax
    const handleMouseMove = (e) => {
      // Normalize relative to screen center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - centerX) * 0.08;
      mouseRef.current.targetY = (e.clientY - centerY) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles
    class Particle {
      constructor() {
        this.reset();
        // Spurt them randomly across the canvas initially
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        // Accent colors matching CSS variables for light mode: Electric cyan (80%) and Psychic pink (20%)
        this.color = Math.random() > 0.2 ? '0, 184, 217' : '233, 30, 140';
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around borders
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(offsetX, offsetY) {
        ctx.beginPath();
        ctx.arc(this.x + offsetX, this.y + offsetY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgb(${this.color})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for line performance
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Main animation loop
    const animate = () => {
      // Clear canvas so the CSS body light background shines through cleanly
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation for parallax
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(mouse.x, mouse.y);
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDist) {
            const alpha = (1 - distance / connectionDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x + mouse.x, p1.y + mouse.y);
            ctx.lineTo(p2.x + mouse.x, p2.y + mouse.y);
            // Color connection based on particle pairing
            const lineColor = p1.color === p2.color ? p1.color : '0, 184, 217';
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
