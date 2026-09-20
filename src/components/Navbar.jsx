import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './common/Button';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={{
      height: '72px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--color-border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container-custom" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-deep-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary-green)',
            fontWeight: '800',
            fontSize: '1.2rem'
          }}>
            C
          </div>
          <span style={{ fontSize: '1.35rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--color-deep-navy)' }}>
            CAMBEDOR
          </span>
        </Link>

        {/* Center Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav-links">
          <Link to="/about" style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>About</Link>
          <Link to="/why-join" style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Why Join</Link>
          <Link to="/student-voices" style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Student Voices</Link>
          <Link to="/explore" style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Explore</Link>
          <Link to="/contact" style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>Contact</Link>
        </div>

        {/* Right CTA / Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="desktop-auth-btns">
          {isAuthenticated ? (
            <Button variant="dark" onClick={() => navigate(`/${user.role}/dashboard`)}>
              Go to Dashboard ({user.role})
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button variant="primary" onClick={() => navigate('/signup')}>
                Get Started →
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
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
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#FFFFFF',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          zIndex: 99
        }}>
          <Link to="/about" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.125rem', fontWeight: '600' }}>About</Link>
          <Link to="/why-join" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.125rem', fontWeight: '600' }}>Why Join</Link>
          <Link to="/student-voices" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.125rem', fontWeight: '600' }}>Student Voices</Link>
          <Link to="/explore" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.125rem', fontWeight: '600' }}>Explore</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.125rem', fontWeight: '600' }}>Contact</Link>
          
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Button variant="secondary" style={{ width: '100%' }} onClick={() => { setMobileOpen(false); navigate('/login'); }}>Login</Button>
            <Button variant="primary" style={{ width: '100%' }} onClick={() => { setMobileOpen(false); navigate('/signup'); }}>Get Started Now →</Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav-links, .desktop-auth-btns {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};
