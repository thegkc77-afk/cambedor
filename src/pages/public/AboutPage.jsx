import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';
import { CursorWave } from '../../components/common/CursorWave';

export const AboutPage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <CursorWave style={{ padding: '4.5rem 0 2.5rem 0', backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', textAlign: 'center' }}>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(132, 212, 0, 0.25) 0%, rgba(255,255,255,0) 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />
          <motion.div
            className="container-custom"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.875rem', color: '#FFFFFF' }}
            >
              About <span style={{ color: '#84D400' }}>Cambedor</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.2rem', color: '#94A3B8', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}
            >
              The student opportunity network connecting campus talent with real startup experience.
            </motion.p>
          </motion.div>
        </CursorWave>
        <About />
      </main>
      <Footer />
    </div>
  );
};
