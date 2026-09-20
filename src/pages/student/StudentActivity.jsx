import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { CheckCircle2, Clock, PlusCircle, Award } from 'lucide-react';

export const StudentActivity = () => {
  const { activities } = useData();

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Activity Log
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Timeline of your campaign milestone submissions, task approvals, and achievements.
        </p>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {activities.map((act, idx) => (
            <div key={act.id || idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-soft-green)',
                color: '#2D6A00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CheckCircle2 size={18} />
              </div>

              <div style={{ flex: 1, borderBottom: idx === activities.length - 1 ? 'none' : '1px solid var(--color-border-light)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                    {act.actor} <span style={{ fontWeight: '400', color: 'var(--color-text-secondary)' }}>{act.description}</span>
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.timestamp}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#2D6A00', fontWeight: '600' }}>
                  {act.campaign}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
