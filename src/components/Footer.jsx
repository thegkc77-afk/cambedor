import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './common/Logo';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0F172A',
      color: '#94A3B8',
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '0.875rem'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Logo size={36} showText={true} />
            </div>
            <p style={{ color: '#94A3B8', lineHeight: '1.6', maxWidth: '340px' }}>
              Student opportunity and startup engagement platform connecting ambitious college talent with real-world industry campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#FFFFFF', uppercase: 'uppercase', marginBottom: '1rem' }}>
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Link to="/about" style={{ color: '#94A3B8' }}>About Us</Link>
              <Link to="/why-join" style={{ color: '#94A3B8' }}>Why Join</Link>
              <Link to="/student-voices" style={{ color: '#94A3B8' }}>Student Voices</Link>
              <Link to="/explore" style={{ color: '#94A3B8' }}>Explore Campaigns</Link>
            </div>
          </div>

          {/* Panels */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#FFFFFF', uppercase: 'uppercase', marginBottom: '1rem' }}>
              Panels
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Link to="/login" style={{ color: '#94A3B8' }}>Student Panel</Link>
              <Link to="/login" style={{ color: '#94A3B8' }}>Company Panel</Link>
              <Link to="/login" style={{ color: '#94A3B8' }}>Admin Panel</Link>
              <Link to="/contact" style={{ color: '#94A3B8' }}>Support & Help</Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem'
        }}>
          <p>© {new Date().getFullYear()} Cambedor Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#94A3B8' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94A3B8' }}>Terms of Service</a>
            <a href="#" style={{ color: '#94A3B8' }}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
