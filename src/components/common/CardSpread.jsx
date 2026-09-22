import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CardSpread = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isSpreadOpen = isContainerHovered || isOpen;

  // Calculate fan rotation angles for React Bits style card spread
  const getFanRotation = (index, total) => {
    const step = 26 / (total - 1 || 1);
    return -13 + index * step;
  };

  // Calculate horizontal fan offsets
  const getFanOffset = (index, total, expanded) => {
    const center = (total - 1) / 2;
    const spacing = expanded ? 165 : 45; // Stacks tightly when closed, spreads open wide when hovered!
    return (index - center) * spacing;
  };

  return (
    <div
      onMouseEnter={() => setIsContainerHovered(true)}
      onMouseLeave={() => {
        setIsContainerHovered(false);
        setHoveredIndex(null);
      }}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        width: '100%',
        minHeight: '520px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2.5rem 0',
        overflowX: 'auto',
        overflowY: 'visible',
        cursor: 'pointer'
      }}
    >
      {/* Interactive Helper Text */}
      <motion.p
        animate={{ opacity: isSpreadOpen ? 0.6 : 0.9, y: isSpreadOpen ? -5 : 0 }}
        style={{
          fontSize: '0.8125rem',
          fontWeight: '700',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#84D400',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}
      >
        {isSpreadOpen ? '✨ Hover any card to inspect' : '👉 Hover or tap deck to spread open'}
      </motion.p>

      <div style={{
        position: 'relative',
        width: '380px',
        height: '420px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === idx;
          const fanOffset = getFanOffset(idx, items.length, isSpreadOpen);
          const fanRotation = getFanRotation(idx, items.length);

          return (
            <motion.div
              key={idx}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setHoveredIndex(idx);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 60, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.15 : (isSpreadOpen ? 1 : 0.94 + idx * 0.01),
                x: isHovered ? fanOffset * 1.08 : fanOffset,
                y: isHovered ? -50 : (isSpreadOpen ? -10 : idx * -4),
                rotate: isHovered ? 0 : (isSpreadOpen ? fanRotation : fanRotation * 0.4),
                zIndex: isHovered ? 100 : idx + 1
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 24,
                mass: 0.8
              }}
              style={{
                position: 'absolute',
                width: '350px',
                minHeight: '280px',
                backgroundColor: '#FFFFFF',
                borderRadius: '1.35rem',
                padding: '2.25rem 2rem',
                border: isHovered ? '2px solid #84D400' : '1px solid rgba(229, 231, 235, 0.9)',
                boxShadow: isHovered
                  ? '0 30px 60px rgba(132, 212, 0, 0.38), 0 14px 32px rgba(0,0,0,0.12)'
                  : '0 14px 32px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                transformOrigin: 'bottom center',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              {/* Top Glow Accent Bar */}
              {isHovered && (
                <motion.div
                  layoutId="hover-glow-bar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    borderTopLeftRadius: '1.35rem',
                    borderTopRightRadius: '1.35rem',
                    background: 'linear-gradient(90deg, #84D400, #3B82F6)'
                  }}
                />
              )}

              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '1.1rem',
                  backgroundColor: isHovered ? '#84D400' : 'var(--color-soft-green)',
                  color: isHovered ? '#111827' : '#2D6A00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.35rem',
                  transition: 'all 0.25s ease'
                }}>
                  <Icon size={26} />
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.625rem',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSpread;
