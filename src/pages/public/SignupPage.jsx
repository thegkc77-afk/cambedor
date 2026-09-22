import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowRight } from 'lucide-react';

export const SignupPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeOrIndustry, setCollegeOrIndustry] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = {
      id: `${role === 'student' ? 'std' : 'cmp'}-${Date.now()}`,
      name: name || 'Aarav Sharma',
      email: email || 'aarav.sharma@iitd.ac.in',
      role,
      college: role === 'student' ? collegeOrIndustry || 'IIT Bombay' : undefined,
      industry: role === 'company' ? collegeOrIndustry || 'Technology' : undefined,
      status: 'active'
    };

    login(newUser);
    navigate(`/${role}/dashboard`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-soft)' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
        <Card padding="2rem" style={{ maxWidth: '480px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
              Create Your Account
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
              Join Cambedor as a Student or Startup Company
            </p>
          </div>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Role Selection Segmented Control */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                I am joining as:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  style={{
                    padding: '0.625rem',
                    borderRadius: 'var(--radius-md)',
                    border: role === 'student' ? '2px solid var(--color-primary-green)' : '1px solid var(--color-border)',
                    backgroundColor: role === 'student' ? 'var(--color-soft-green)' : '#FFFFFF',
                    color: role === 'student' ? '#2D6A00' : 'var(--color-text-secondary)',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  🎓 Student
                </button>

                <button
                  type="button"
                  onClick={() => setRole('company')}
                  style={{
                    padding: '0.625rem',
                    borderRadius: 'var(--radius-md)',
                    border: role === 'company' ? '2px solid var(--color-primary-green)' : '1px solid var(--color-border)',
                    backgroundColor: role === 'company' ? 'var(--color-soft-green)' : '#FFFFFF',
                    color: role === 'company' ? '#2D6A00' : 'var(--color-text-secondary)',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  🏢 Company
                </button>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem', color: 'var(--color-text-primary)' }}>
                Full Name :
              </label>
              <input
                type="text"
                required
                placeholder="Aarav Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                Work Email Address :
              </label>
              <input
                type="email"
                required
                placeholder="aarav.sharma@iitd.ac.in"
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
                Password :
              </label>
              <input
                type="password"
                required
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

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem', color: 'var(--color-text-primary)' }}>
                University / College :
              </label>
              <input
                type="text"
                required
                placeholder="IIT Bombay / Delhi University"
                value={collegeOrIndustry}
                onChange={(e) => setCollegeOrIndustry(e.target.value)}
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
              Create Account
            </Button>
          </form>

          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', textAlign: 'center', marginTop: '1.5rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ fontWeight: '700', color: '#2D6A00' }}>
              Login here
            </Link>
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};
