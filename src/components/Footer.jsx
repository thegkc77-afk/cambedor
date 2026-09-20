import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="logo-link">
              <div className="logo-icon" aria-label="Cambedor Icon">
                <Zap size={20} strokeWidth={2.5} fill="#84D400" />
              </div>
              <span className="logo-text">CAMBEDOR</span>
            </Link>
            <p>Building opportunities beyond campus.</p>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="footer-column-title">Platform</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/why-join" className="footer-link">Why Join</Link></li>
              <li><Link to="/student-voices" className="footer-link">Student Voices</Link></li>
              <li><Link to="/explore" className="footer-link">Explore</Link></li>
            </ul>
          </div>

          {/* For Students Column */}
          <div>
            <h4 className="footer-column-title">For Students</h4>
            <ul className="footer-links">
              <li><Link to="/explore" className="footer-link">Opportunities</Link></li>
              <li><Link to="/explore" className="footer-link">Communities</Link></li>
              <li><Link to="/explore" className="footer-link">Campaigns</Link></li>
              <li><Link to="/login" className="footer-link">Profile</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Cambedor. All rights reserved.</p>
          <p>Empowering the next generation of builders.</p>
        </div>
      </div>
    </footer>
  );
}
