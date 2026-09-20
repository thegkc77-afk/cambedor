import React from 'react';
import { Award, Zap, Shield, CheckCircle } from 'lucide-react';

export const Mission = () => {
  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', color: '#2D6A00', textTransform: 'uppercase' }}>
              OUR MISSION
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              Empowering Students with Real Industry Exposure
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              We believe classroom knowledge combined with hands-on company execution accelerates career trajectories far beyond traditional resumes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                'Verified campaign certificates & performance recommendation letters',
                'Direct engagement with startup founders & marketing leads',
                'Transparent milestone tracking & proof of work submission',
                'Fair financial stipends and exclusive product rewards'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="var(--color-primary-green)" />
                  <span style={{ fontSize: '0.9375rem', fontWeight: '500', color: 'var(--color-text-primary)' }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--color-deep-navy)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--color-primary-green)' }}>
              Built for Growth & Impact
            </h3>
            <p style={{ fontSize: '0.9375rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              "Cambedor is designed so students don't just add lines to a resume — they gain actual ownership, lead campus projects, and build lifelong networks."
            </p>

            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '700', color: '#FFFFFF' }}>Cambedor Leadership</p>
                <p style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Palo Alto, CA</p>
              </div>
              <div style={{ fontSize: '1.5rem' }}>⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
