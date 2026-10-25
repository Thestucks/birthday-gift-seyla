import React, { useEffect, useRef } from 'react';

export default function PetalsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Petal objects
    const petalColors = ['#FFD1DC', '#FFA6C1', '#FF85A1', '#FFE4EC', '#FFB3C6'];
    const petals = [];
    const petalCount = Math.min(35, Math.floor(width / 35));

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        r: Math.random() * 8 + 6,
        d: Math.random() * petalCount,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: Math.random() * 0.05 + 0.02,
        tiltAngle: 0,
        opacity: Math.random() * 0.5 + 0.5,
        speedY: Math.random() * 1.5 + 0.8,
        speedX: Math.random() * 1.2 - 0.6,
      });
    }

    const drawPetal = (petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate((petal.tiltAngle * Math.PI) / 180);
      ctx.globalAlpha = petal.opacity;

      ctx.beginPath();
      ctx.fillStyle = petal.color;
      // Draw smooth petal shape
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-petal.r * 1.2, -petal.r * 1.5, -petal.r * 1.5, petal.r * 1.5, 0, petal.r * 2);
      ctx.bezierCurveTo(petal.r * 1.5, petal.r * 1.5, petal.r * 1.2, -petal.r * 1.5, 0, 0);
      ctx.fill();

      // Subtle center vein
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, petal.r * 1.6);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += p.speedY;
        p.x += Math.sin(p.tiltAngle) * 1.2 + p.speedX;

        // Reset if out of bounds
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="petals-canvas" />;
}
