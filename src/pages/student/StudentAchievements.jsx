import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const StudentAchievements = () => {
  const { achievements } = useData();

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Achievements & Badges
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Earn verified accomplishment badges by reaching campaign participation milestones.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {achievements.map((ach) => (
          <Card key={ach.id} padding="1.5rem">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-soft-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem'
              }}>
                {ach.icon}
              </div>
              <Badge status={ach.status === 'earned' ? 'active' : 'pending'}>
                {ach.status === 'earned' ? 'Unlocked ✓' : 'In Progress'}
              </Badge>
            </div>

            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.375rem' }}>
              {ach.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
              {ach.description}
            </p>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.375rem' }}>
                <span>Milestone Progress</span>
                <span>{ach.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ width: `${ach.progress}%`, height: '100%', backgroundColor: 'var(--color-primary-green)' }} />
              </div>
              {ach.earnedDate && (
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  Earned on {ach.earnedDate}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};
