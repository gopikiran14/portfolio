/**
 * INTERACTIVE PARTICLE CONSTELLATION CANVAS
 * High-performance fluid particle system with mouse interaction and theme reactive colors.
 */

class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.theme = 'cosmic';
    this.animationFrameId = null;
    
    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  getThemeColors() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'cosmic';
    switch (currentTheme) {
      case 'matrix':
        return {
          particle: 'rgba(0, 255, 136, 0.6)',
          line: 'rgba(0, 255, 136, 0.12)',
          accent: '#00ff88'
        };
      case 'cyber':
        return {
          particle: 'rgba(255, 0, 128, 0.6)',
          line: 'rgba(0, 240, 255, 0.15)',
          accent: '#ff0080'
        };
      case 'light':
        return {
          particle: 'rgba(79, 70, 229, 0.35)',
          line: 'rgba(79, 70, 229, 0.08)',
          accent: '#4f46e5'
        };
      case 'cosmic':
      default:
        return {
          particle: 'rgba(0, 242, 254, 0.65)',
          line: 'rgba(127, 90, 240, 0.14)',
          accent: '#00f2fe'
        };
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const count = Math.min(Math.floor((this.width * this.height) / 14000), 100);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 2 + 1,
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const colors = this.getThemeColors();

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Update positions
      p.x += p.vx;
      p.y += p.vy;

      // Bounce on edges
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 3;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
          p.radius = p.baseRadius * 1.6;
        } else {
          p.radius = p.baseRadius;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = colors.particle;
      this.ctx.fill();

      // Connect particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = colors.line;
          this.ctx.lineWidth = (1 - dist / 110) * 1.2;
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.particleSystem = new ParticleCanvas('particle-canvas');
});
