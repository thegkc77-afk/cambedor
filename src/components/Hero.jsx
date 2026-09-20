import React from 'react';
import { Button } from './common/Button';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-grid-pattern" style={{
      padding: '5rem 0 4rem 0',
      borderBottom: '1px solid var(--color-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-custom" style={{ textAlign: 'center', maxWidth: '860px' }}>
        {/* Trust Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--color-soft-green)',
          border: '1px solid rgba(132, 212, 0, 0.4)',
          borderRadius: 'var(--radius-full)',
          padding: '0.35rem 0.875rem',
          fontSize: '0.8125rem',
          fontWeight: '600',
          color: '#2D6A00',
          marginBottom: '1.5rem'
        }}>
          <ShieldCheck size={16} />
          <span>Trusted by 500+ ambitious students & growing startups</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          lineHeight: '1.15',
          letterSpacing: '-0.03em',
          color: 'var(--color-deep-navy)',
          marginBottom: '1.25rem'
        }}>
          Build Your <span style={{ color: 'var(--color-primary-green)' }}>Future</span> Beyond Campus
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          fontWeight: '500',
          color: 'var(--color-text-secondary)',
          lineHeight: '1.5',
          marginBottom: '0.75rem'
        }}>
          Trusted by ambitious students, communities, and growing startups.
        </p>

        {/* Additional paragraph */}
        <p style={{
          fontSize: '1rem',
          color: 'var(--color-text-muted)',
          maxWidth: '640px',
          margin: '0 auto 2.25rem auto',
          lineHeight: '1.6'
        }}>
          Join campaigns, lead initiatives, and earn rewards while gaining real-world industry experience.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={() => navigate('/signup')} icon={ArrowRight}>
            Get Started Now
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/explore')} icon={Compass}>
            Explore Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};
