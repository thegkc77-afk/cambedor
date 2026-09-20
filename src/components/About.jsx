import React from 'react';
import { Card } from './common/Card';
import { Target, Users, Building2 } from 'lucide-react';

export const About = () => {
  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
            What is Cambedor?
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            Cambedor bridges the gap between ambitious college talent and fast-growing companies through hands-on campaign opportunities, campus ambassadorships, and real-world projects.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <Card padding="1.75rem">
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-soft-green)',
              color: '#2D6A00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Users size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              For Students
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Discover real startup campaigns, complete activity reports, earn rewards, build a verified portfolio, and stand out to future recruiters.
            </p>
          </Card>

          <Card padding="1.75rem">
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-soft-green)',
              color: '#2D6A00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Building2 size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              For Companies
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Launch student campaigns, recruit top campus ambassadors, track live participant milestones, and amplify brand growth across campuses.
            </p>
          </Card>

          <Card padding="1.75rem">
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-soft-green)',
              color: '#2D6A00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Target size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              For Ecosystem
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              Transparent admin monitoring, activity tracking, verification pipelines, and verified accomplishment badging.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
