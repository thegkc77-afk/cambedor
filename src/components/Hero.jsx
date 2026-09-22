import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './common/Button';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CursorWave } from './common/CursorWave';

export const Hero = () => {
  const navigate = useNavigate();

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <CursorWave
      className="bg-particles-pattern"
      style={{
        padding: '4.5rem 1rem 6rem 1rem',
        textAlign: 'center',
      }}
    >
      {/* Dynamic Animated Ambient Glow Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(132, 212, 0, 0.25) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30, 41, 59, 0.12) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <motion.div
        className="container-custom"
        style={{ maxWidth: '960px', position: 'relative', zIndex: 1 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust Pill */}
        <motion.div
          variants={badgeVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(132, 212, 0, 0.25)' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(132, 212, 0, 0.4)',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.5rem 1.25rem',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--color-text-secondary)',
            marginBottom: '2.25rem',
            cursor: 'default',
            backdropFilter: 'blur(8px)'
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldCheck size={18} color="#84D400" />
          </motion.div>
          <span>Trusted by 500+ ambitious students & growing startups</span>
          <Sparkles size={14} color="#84D400" />
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(3.2rem, 7.5vw, 6rem)',
            fontWeight: '900',
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
            color: '#111827'
          }}
        >
          Build Your{' '}
          <motion.span
            style={{
              color: '#84D400',
              display: 'inline-block',
              position: 'relative'
            }}
            whileHover={{ scale: 1.06, rotate: [-1, 1, -1] }}
            transition={{ duration: 0.3 }}
          >
            Future
          </motion.span>
          <br />
          Beyond Campus
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: 'var(--color-text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6'
          }}
        >
          Trusted by ambitious students, communities, and growing startups. Join campaigns, lead initiatives, and earn rewards while gaining real-world industry experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
        >
          <motion.button
            className="btn-pill-gradient"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.06, boxShadow: '0 12px 28px rgba(132, 212, 0, 0.45)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.95rem 2.5rem',
              fontSize: '1.0625rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: 'none'
            }}
          >
            <span>Get Started Now</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Button
              variant="secondary"
              onClick={() => navigate('/explore')}
              icon={Compass}
              style={{
                borderRadius: 'var(--radius-pill)',
                padding: '0.95rem 2.25rem',
                fontSize: '1rem',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-sm)',
                gap: '0.75rem'
              }}
            >
              Explore Campaigns
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </CursorWave>
  );
};

export default Hero;
