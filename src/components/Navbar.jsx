import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './common/Button';
import { Logo } from './common/Logo';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Explore', path: '/explore' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <div className="floating-nav-container">
        <header className="floating-nav">
          {/* Left Brand Logo */}
          <Logo size={32} showText={true} />

          {/* Center Links (Desktop) */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.96 }}
                  style={{ position: 'relative', padding: '0.4rem 0.85rem', cursor: 'pointer' }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '0.90rem',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? '#111827' : '#4B5563',
                      transition: 'color 0.2s ease',
                      display: 'block',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {link.label}
                  </Link>

                  {/* Soft Glass Glow Backdrop Pill on Hover */}
                  <motion.span
                    variants={{
                      initial: { opacity: 0, scale: 0.88 },
                      hover: { opacity: 1, scale: 1 }
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(132, 212, 0, 0.12)',
                      borderRadius: 'var(--radius-pill)',
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Animated Glowing Underline Indicator */}
                  <motion.span
                    variants={{
                      initial: { scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 },
                      hover: { scaleX: 1, opacity: 1 }
                    }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '20%',
                      right: '20%',
                      height: '2.5px',
                      background: 'linear-gradient(90deg, #84D400 0%, #3B82F6 100%)',
                      borderRadius: '4px',
                      boxShadow: '0 0 10px rgba(132, 212, 0, 0.6)',
                      transformOrigin: 'center'
                    }}
                  />
                </motion.div>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-auth-btns">
            {isAuthenticated ? (
              <Button variant="dark" size="sm" onClick={() => navigate(`/${user.role}/dashboard`)}>
                Dashboard ({user.role})
              </Button>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="btn-pill-gradient" size="sm" style={{ padding: '0.45rem 1.25rem' }} onClick={() => navigate('/signup')}>
                  Get Started
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)'
            }}
            className="mobile-nav-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>
      </div>

      {/* Spacer to offset fixed floating navbar */}
      <div style={{ height: '90px' }} />

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '90px',
          left: '1rem',
          right: '1rem',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-floating)',
          border: '1px solid var(--color-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-text-primary)' }}
            >
              {link.label}
            </Link>
          ))}

          <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Button className="btn-pill-gradient" onClick={() => { setMobileOpen(false); navigate('/signup'); }}>Get Started Now →</Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links, .desktop-auth-btns {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
