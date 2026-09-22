import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './common/Logo';

const InstagramIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer-container" style={{
      backgroundColor: '#FFFFFF',
      color: '#334155',
      borderRadius: '60px 60px 0 0',
      padding: '70px 40px 30px 40px',
      marginTop: 'auto',
      borderTop: '1px solid #E2E8F0',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Main 4-Column Grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Column 1 — Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size={36} showText={true} textColor="#0F172A" />
            </div>
            <p style={{
              color: '#334155',
              fontSize: '16px',
              lineHeight: '1.6',
              maxWidth: '430px',
              margin: 0,
              fontWeight: '500'
            }}>
              Student opportunity and startup engagement platform connecting ambitious college talent with real-world industry campaigns.
            </p>
          </div>

          {/* Column 2 — Platform */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1.25rem',
              marginTop: 0
            }}>
              Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/why-join" className="footer-link">Why Join</Link>
              <Link to="/student-voices" className="footer-link">Student Voices</Link>
              <Link to="/explore" className="footer-link">Explore Campaigns</Link>
            </div>
          </div>

          {/* Column 3 — Panels */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1.25rem',
              marginTop: 0
            }}>
              Panels
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <Link to="/login" className="footer-link">Student Panel</Link>
              <Link to="/login" className="footer-link">Company Panel</Link>
              <Link to="/login" className="footer-link">Admin Panel</Link>
              <Link to="/contact" className="footer-link">Support & Help</Link>
            </div>
          </div>

          {/* Column 4 — Follow Us */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '1.25rem',
              marginTop: 0
            }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#" className="footer-social-link">
                <InstagramIcon />
                <span>cambedor</span>
              </a>
              <a href="#" className="footer-social-link">
                <TwitterIcon />
                <span>cambedor</span>
              </a>
              <a href="#" className="footer-social-link">
                <LinkedinIcon />
                <span>cambedor</span>
              </a>
              <a href="#" className="footer-social-link">
                <YoutubeIcon />
                <span>cambedor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section Divider & Legal Links */}
        <div className="footer-bottom-bar" style={{
          borderTop: '1px solid rgba(15, 23, 42, 0.14)',
          marginTop: '50px',
          paddingTop: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '15px',
          color: '#475569'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            © {new Date().getFullYear()} Cambedor Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <span style={{ color: '#475569', opacity: 0.6, userSelect: 'none' }}>•</span>
            <a href="#" className="footer-legal-link">Terms of Service</a>
            <span style={{ color: '#475569', opacity: 0.6, userSelect: 'none' }}>•</span>
            <a href="#" className="footer-legal-link">Security</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #334155;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .footer-link:hover {
          color: #15803D;
        }
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #334155;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .footer-social-link:hover {
          color: #15803D;
        }
        .footer-legal-link {
          color: #475569;
          font-weight: 500;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .footer-legal-link:hover {
          color: #15803D;
        }
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .footer-container {
            border-radius: 35px 35px 0 0 !important;
            padding: 50px 28px 30px 28px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-top: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
