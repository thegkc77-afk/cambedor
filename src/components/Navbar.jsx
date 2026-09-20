import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Why Join', path: '/why-join' },
    { label: 'Student Voices', path: '/student-voices' },
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? 'var(--color-deep-navy)' : 'var(--color-text-secondary)',
                    transition: 'color 0.15s ease'
                  }}
                >
                  {link.label}
                </Link>
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
              <>
                <Button variant="outline" size="sm" style={{ borderRadius: 'var(--radius-pill)', padding: '0.4rem 1rem' }} onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button className="btn-pill-gradient" size="sm" style={{ padding: '0.45rem 1.25rem' }} onClick={() => navigate('/signup')}>
                  Get Started →
                </Button>
              </>
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
            <Button variant="outline" onClick={() => { setMobileOpen(false); navigate('/login'); }}>Login</Button>
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
