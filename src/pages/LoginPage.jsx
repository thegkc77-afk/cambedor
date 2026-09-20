import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${role}: ${email}`);
  };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '4rem 0', backgroundColor: '#F8FAF7' }}>
      <div className="container">
        <div className="form-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="eyebrow">WELCOME BACK</span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#11182B' }}>Login to Cambedor</h1>
            <p style={{ fontSize: '0.95rem', color: '#64748B', marginTop: '0.5rem' }}>
              Access your student dashboard, campaigns, and startup briefs.
            </p>
          </div>

          {/* Role Toggle Tabs */}
          <div className="explore-filters" style={{ marginBottom: '1.75rem' }}>
            <button
              className={`filter-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
              style={{ flex: 1 }}
            >
              Student Portal
            </button>
            <button
              className={`filter-btn ${role === 'startup' ? 'active' : ''}`}
              onClick={() => setRole('startup')}
              style={{ flex: 1 }}
            >
              Startup / Community
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">{role === 'student' ? 'Student Email' : 'Work Email'}</label>
              <input
                type="email"
                required
                className="form-input"
                placeholder={role === 'student' ? 'student@college.edu.in' : 'founder@startup.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="form-label">Password</label>
                <a href="#forgot" style={{ fontSize: '0.8rem', color: '#84D400', fontWeight: 600 }}>Forgot?</a>
              </div>
              <input
                type="password"
                required
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Log In <LogIn size={16} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.9rem', color: '#64748B' }}>
            Don't have an account yet?{' '}
            <Link to="/signup" style={{ color: '#11182B', fontWeight: 700 }}>
              Sign Up Now <ArrowRight size={14} style={{ display: 'inline' }} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
