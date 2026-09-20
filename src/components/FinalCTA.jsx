import React from 'react';
import { Button } from './common/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: 'var(--color-deep-navy)',
      color: '#FFFFFF',
      textAlign: 'center'
    }}>
      <div className="container-custom" style={{ maxWidth: '750px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: '#FFFFFF'
        }}>
          Ready to Elevate Your Campus Journey?
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: '#94A3B8',
          marginBottom: '2.25rem',
          lineHeight: '1.6'
        }}>
          Join hundreds of students and growing startups building real-world campaigns together on Cambedor.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={() => navigate('/signup')} icon={ArrowRight}>
            Get Started Now
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/login')}>
            Login to Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};
