import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollStackCard = ({ item, index, total, progress }) => {
  const Icon = item.icon;

  // Calculate dynamic scale, rotation, and opacity for stacked turn & dissolve effect
  const cardScale = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [1, 0.93 - (total - index) * 0.015]
  );

  const cardRotate = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, index % 2 === 0 ? -3 : 3]
  );

  const cardOpacity = useTransform(
    progress,
    [index / total, (index + 0.9) / total],
    [1, 0.65]
  );

  return (
    <div
      style={{
        position: 'sticky',
        top: `calc(100px + ${index * 22}px)`,
        marginBottom: '2.5rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <motion.div
        style={{
          width: '100%',
          maxWidth: '760px',
          backgroundColor: '#FFFFFF',
          borderRadius: '1.5rem',
          padding: '2.5rem 2.25rem',
          border: '1px solid rgba(229, 231, 235, 0.9)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
          scale: cardScale,
          rotate: cardRotate,
          opacity: cardOpacity,
          transformOrigin: 'top center',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.75rem'
        }}
      >
        <div style={{
          width: '58px',
          height: '58px',
          borderRadius: '1.25rem',
          backgroundColor: '#84D400',
          color: '#111827',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 10px 22px rgba(132, 212, 0, 0.35)'
        }}>
          <Icon size={28} />
        </div>

        <div>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '800',
            letterSpacing: '0.1em',
            color: '#84D400',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.35rem'
          }}>
            0{index + 1} • BENEFIT
          </span>
          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: '800',
            color: 'var(--color-text-primary)',
            marginBottom: '0.65rem',
            lineHeight: '1.25'
          }}>
            {item.title}
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.65'
          }}>
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ScrollStack = ({ items }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', paddingBottom: '3rem' }}>
      {items.map((item, idx) => (
        <ScrollStackCard
          key={idx}
          item={item}
          index={idx}
          total={items.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default ScrollStack;
