import React from 'react';
import { Card } from './common/Card';
import { Target, Users, Building2 } from 'lucide-react';

export const About = () => {
  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #F1F5F9', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '800',
            color: '#15803D',
            backgroundColor: '#F0FDF4',
            border: '1px solid #DCFCE7',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Platform Overview
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            What is Cambedor?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.65', fontWeight: '400' }}>
            Cambedor bridges the gap between ambitious college talent and fast-growing companies through hands-on campaign opportunities, campus ambassadorships, and real-world projects.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '0.85rem',
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              border: '1px solid #BBF7D0'
            }}>
              <Users size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.65rem' }}>
              For Students
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: '1.65' }}>
              Discover real startup campaigns, complete activity reports, earn rewards, build a verified portfolio, and stand out to future recruiters.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '0.85rem',
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              border: '1px solid #BBF7D0'
            }}>
              <Building2 size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.65rem' }}>
              For Companies
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: '1.65' }}>
              Launch student campaigns, recruit top campus ambassadors, track live participant milestones, and amplify brand growth across campuses.
            </p>
          </div>

          <div style={{
            backgroundColor: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)',
            transition: 'all 0.25s ease'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '0.85rem',
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              border: '1px solid #BBF7D0'
            }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.65rem' }}>
              For Ecosystem
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: '1.65' }}>
              Transparent admin monitoring, activity tracking, verification pipelines, and verified accomplishment badging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
