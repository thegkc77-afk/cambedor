import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { UserCheck, Building2, Shield, ArrowRight } from 'lucide-react';

export const LoginPage = () => {
  const { login, loginAsDemo } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const demoUser = loginAsDemo(role);
    navigate(`/${demoUser.role}/dashboard`);
  };

  const handleDemoClick = (targetRole) => {
    const user = loginAsDemo(targetRole);
    navigate(`/${user.role}/dashboard`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-soft)' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
        <Card padding="2rem" style={{ maxWidth: '460px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-deep-navy)',
              color: 'var(--color-primary-green)',
              fontWeight: '800',
              fontSize: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.75rem'
            }}>
              C
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
              Welcome Back
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              Select your role or sign in to your Cambedor account
            </p>
          </div>

          {/* Quick Demo Login Triggers */}
          <div style={{
            backgroundColor: 'var(--color-soft-green)',
            border: '1px solid rgba(132, 212, 0, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginBottom: '1.5rem'
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#2D6A00', marginBottom: '0.75rem' }}>
              ⚡ Quick Demo One-Click Login:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
              <Button variant="primary" size="sm" onClick={() => handleDemoClick('student')}>
                Student
              </Button>
              <Button variant="dark" size="sm" onClick={() => handleDemoClick('company')}>
                Company
              </Button>
              <Button variant="secondary" size="sm" onClick={() => handleDemoClick('admin')}>
                Admin
              </Button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.25rem 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>OR LOGIN WITH FORM</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
          </div>

          {/* Regular Login Form */}
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem', color: 'var(--color-text-primary)' }}>
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  backgroundColor: '#FFFFFF',
                  outline: 'none'
                }}
              >
                <option value="student">Student Panel</option>
                <option value="company">Company Panel</option>
                <option value="admin">Admin Panel</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem', color: 'var(--color-text-primary)' }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@university.edu or company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem', color: 'var(--color-text-primary)' }}>
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  outline: 'none'
                }}
              />
            </div>

            <Button type="submit" variant="primary" size="lg" style={{ width: '100%', marginTop: '0.5rem' }} icon={ArrowRight}>
              Sign In
            </Button>
          </form>

          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', textAlign: 'center', marginTop: '1.5rem' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ fontWeight: '700', color: '#2D6A00' }}>
              Sign up here
            </Link>
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};
