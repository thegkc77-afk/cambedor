import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Bell } from 'lucide-react';

export const StudentNotifications = () => {
  const { notifications } = useData();
  const myNotifs = notifications.filter(n => n.role === 'student' || n.role === 'all');

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Notifications
        </h1>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '700px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {myNotifs.map(n => (
            <div key={n.id} style={{ display: 'flex', gap: '0.875rem', padding: '0.875rem', backgroundColor: n.read ? '#FFFFFF' : 'var(--color-soft-green)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <Bell size={20} color="#84D400" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{n.title}</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', margin: '0.25rem 0' }}>{n.message}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{n.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
