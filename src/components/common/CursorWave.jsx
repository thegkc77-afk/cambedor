import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorWave = ({ children, style = {}, className = '' }) => {
  const containerRef = useRef(null);
  const [ripples, setRipples] = useState([]);
  
  // Smooth spring mouse position for cursor glow spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 22 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
    if (!isHovered) setIsHovered(true);

    // Throttle wave ripple creation on cursor movement
    const now = Date.now();
    if (!containerRef.current.lastRipple || now - containerRef.current.lastRipple > 110) {
      containerRef.current.lastRipple = now;
      const id = now + Math.random();
      setRipples((prev) => [...prev.slice(-7), { id, x, y }]);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev.slice(-7), { id, x, y, isClick: true }]);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Interactive Cursor Radial Spotlight */}
      <motion.div
        style={{
          position: 'absolute',
          left: smoothX,
          top: smoothY,
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(132, 212, 0, 0.26) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%)',
          filter: 'blur(22px)',
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
          transition: 'opacity 0.35s ease',
          zIndex: 0
        }}
      />

      {/* Dynamic Cursor Wave Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{
            scale: 0.1,
            opacity: ripple.isClick ? 0.85 : 0.5,
            x: ripple.x - 60,
            y: ripple.y - 60,
          }}
          animate={{
            scale: ripple.isClick ? [0.1, 4.5] : [0.1, 3.2],
            opacity: 0,
          }}
          transition={{
            duration: ripple.isClick ? 1.2 : 0.95,
            ease: 'easeOut',
          }}
          onAnimationComplete={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: ripple.isClick
              ? '2.5px solid rgba(132, 212, 0, 0.9)'
              : '1.5px solid rgba(132, 212, 0, 0.65)',
            boxShadow: '0 0 18px rgba(132, 212, 0, 0.45)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      {/* Child Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};
