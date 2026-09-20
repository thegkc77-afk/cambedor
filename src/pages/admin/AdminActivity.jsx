import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Tabs } from '../../components/common/Tabs';

export const AdminActivity = () => {
  const { activities } = useData();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Platform Activity Audit Log
        </h1>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activities.map(act => (
            <div key={act.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
              <span style={{ fontSize: '1.25rem' }}>📌</span>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                  {act.actor} <span style={{ fontWeight: '400', color: 'var(--color-text-secondary)' }}>{act.description}</span>
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.timestamp} • {act.campaign}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
