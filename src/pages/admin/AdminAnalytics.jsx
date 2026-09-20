import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/common/Card';
import { StatCard } from '../../components/common/StatCard';
import { Filter } from '../../components/common/Filter';
import { Users, Building2, Briefcase, TrendingUp } from 'lucide-react';

export const AdminAnalytics = () => {
  const [timeframe, setTimeframe] = useState('30days');

  return (
    <DashboardLayout>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
            Ecosystem Analytics
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Student growth, startup onboarding, and participation metrics.
          </p>
        </div>

        <Filter
          label="Time Range"
          value={timeframe}
          onChange={setTimeframe}
          options={[
            { label: '7 Days', value: '7days' },
            { label: '30 Days', value: '30days' },
            { label: '3 Months', value: '3months' },
            { label: '1 Year', value: '1year' }
          ]}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <StatCard title="Student Growth" value="+142" subtext="New signups" icon={Users} />
        <StatCard title="Company Onboarding" value="+8" subtext="New verified startups" icon={Building2} />
        <StatCard title="Campaign Growth" value="+12" subtext="New campaigns live" icon={Briefcase} />
        <StatCard title="Participation Rate" value="88%" subtext="Active enrollment" icon={TrendingUp} />
      </div>

      <Card padding="1.5rem">
        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.25rem' }}>Ecosystem Platform Volume</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          {[
            { label: 'Week 1', height: 40 },
            { label: 'Week 2', height: 60 },
            { label: 'Week 3', height: 75 },
            { label: 'Week 4', height: 95 }
          ].map((bar, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: '48px', height: `${bar.height}%`, backgroundColor: 'var(--color-primary-green)', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>{bar.label}</span>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};
