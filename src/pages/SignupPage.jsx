import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    password: ''
  });

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.name} as ${role}!`);
  };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '4rem 0', backgroundColor: '#F8FAF7' }}>
      <div className="container">
        <div className="form-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="eyebrow">GET STARTED</span>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#11182B' }}>Join Cambedor</h1>
            <p style={{ fontSize: '0.95rem', color: '#64748B', marginTop: '0.5rem' }}>
              Create your account to start building opportunities beyond campus.
            </p>
          </div>

          {/* Role Toggle Tabs */}
          <div className="explore-filters" style={{ marginBottom: '1.75rem' }}>
            <button
              className={`filter-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
              style={{ flex: 1 }}
            >
              I'm a Student
            </button>
            <button
              className={`filter-btn ${role === 'startup' ? 'active' : ''}`}
              onClick={() => setRole('startup')}
              style={{ flex: 1 }}
            >
              Startup / Community
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="Aarav Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{role === 'student' ? 'College / Student Email' : 'Work Email'}</label>
              <input
                type="email"
                required
                className="form-input"
                placeholder={role === 'student' ? 'aarav@college.edu.in' : 'founder@startup.com'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{role === 'student' ? 'Institution / University Name' : 'Company / Organization Name'}</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder={role === 'student' ? 'IIT Delhi / BITS Pilani / DTU' : 'Acme AI Labs'}
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Create Password</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Create Account <UserPlus size={16} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.9rem', color: '#64748B' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#11182B', fontWeight: 700 }}>
              Log In Here <ArrowRight size={14} style={{ display: 'inline' }} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
