import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Tabs } from '../../components/common/Tabs';
import { CheckCircle2, FileText, UserPlus, Clock } from 'lucide-react';

export const CompanyActivity = () => {
  const { activities } = useData();
  const [activeTab, setActiveTab] = useState('all');

  const filteredActivities = activities.filter(act => {
    if (activeTab === 'all') return true;
    return act.category?.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Campaign Activity Stream
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Real-time activity logs for student participation and task submissions.
        </p>
      </div>

      <Tabs
        activeTab={activeTab}
        onChange={setActiveTab}
        tabs={[
          { id: 'all', label: 'All Activity' },
          { id: 'joined', label: 'Joined' },
          { id: 'tasks', label: 'Tasks' },
          { id: 'submissions', label: 'Submissions' },
          { id: 'completed', label: 'Completed' }
        ]}
      />

      <Card padding="1.5rem" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredActivities.map((act) => (
            <div key={act.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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
                🟢
              </div>

              <div style={{ flex: 1, borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <p style={{ fontSize: '0.9375rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                    {act.actor} <span style={{ fontWeight: '400', color: 'var(--color-text-secondary)' }}>{act.description}</span>
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.timestamp}</span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2D6A00' }}>
                  {act.campaign}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
