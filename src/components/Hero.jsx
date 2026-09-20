import React from 'react';
import { Button } from './common/Button';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-particles-pattern" style={{
      padding: '4rem 1rem 6rem 1rem',
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      <div className="container-custom" style={{ maxWidth: '960px' }}>
        {/* Trust Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(229, 231, 235, 0.9)',
          boxShadow: 'var(--shadow-sm)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.4rem 1rem',
          fontSize: '0.8125rem',
          fontWeight: '600',
          color: 'var(--color-text-secondary)',
          marginBottom: '2.5rem'
        }}>
          <ShieldCheck size={16} color="#84D400" />
          <span>Trusted by 500+ ambitious students & growing startups</span>
        </div>

        {/* Primary Requested Headline: Build Your Future Beyond Campus */}
        <h1 style={{
          fontSize: 'clamp(3.2rem, 7.5vw, 6rem)',
          fontWeight: '900',
          lineHeight: '1.08',
          letterSpacing: '-0.03em',
          marginBottom: '1.75rem',
          color: '#111827'
        }}>
          Build Your <span style={{ color: '#84D400' }}>Future</span>
          <br />
          Beyond Campus
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          fontWeight: '500',
          color: 'var(--color-text-secondary)',
          maxWidth: '680px',
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.6'
        }}>
          Trusted by ambitious students, communities, and growing startups. Join campaigns, lead initiatives, and earn rewards while gaining real-world industry experience.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button
            className="btn-pill-gradient"
            onClick={() => navigate('/signup')}
            style={{
              padding: '0.875rem 2.25rem',
              fontSize: '1.0625rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem'
            }}
          >
            <span>Get Started Now</span>
            <ArrowRight size={18} />
          </button>

          <Button
            variant="secondary"
            onClick={() => navigate('/explore')}
            icon={Compass}
            style={{
              borderRadius: 'var(--radius-pill)',
              padding: '0.875rem 1.75rem',
              fontSize: '1rem',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            Explore Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};
