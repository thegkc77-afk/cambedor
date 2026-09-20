import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Avatar } from '../../components/common/Avatar';
import { MessageSquare, Users } from 'lucide-react';

export const StudentCommunity = () => {
  const { students } = useData();

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Student Community
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Connect with fellow campus ambassadors and project leaders across universities.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {students.map(std => (
          <Card key={std.id} padding="1.5rem">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Avatar src={std.avatar} name={std.name} size={48} />
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{std.name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{std.college}</p>
                <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#2D6A00' }}>{std.course}</p>
              </div>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>
              {std.bio}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {(std.skills || []).slice(0, 3).map((s, i) => (
                <span key={i} style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-bg-soft)', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};
