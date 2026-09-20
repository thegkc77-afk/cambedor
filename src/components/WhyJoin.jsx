import React from 'react';
import { Card } from './common/Card';
import { Award, Zap, TrendingUp, ShieldCheck, DollarSign, Globe } from 'lucide-react';

export const WhyJoin = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Verified Proof of Work',
      desc: 'Build an authenticated portfolio of completed startup campaigns verified by company founders.'
    },
    {
      icon: DollarSign,
      title: 'Stipends & Rewards',
      desc: 'Earn performance stipends, cash bonuses, and exclusive swags for completed campaign milestones.'
    },
    {
      icon: TrendingUp,
      title: 'Career Trajectory',
      desc: 'Get fast-tracked for internships, full-time roles, and recommendation letters from tech leaders.'
    },
    {
      icon: Globe,
      title: 'Campus Leadership',
      desc: 'Become the primary point of contact for top startups on your university campus.'
    },
    {
      icon: Zap,
      title: 'Real Skill Building',
      desc: 'Develop practical marketing, event management, product research, and leadership skills.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Platform',
      desc: 'Clear campaign deliverables, real-time activity timelines, and prompt reward payouts.'
    }
  ];

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
            Why Join Cambedor?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            Transform your college experience by working directly on high-impact campaigns with growing companies.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <Card key={idx} hover padding="1.5rem">
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-soft-green)',
                  color: '#2D6A00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                  {b.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
