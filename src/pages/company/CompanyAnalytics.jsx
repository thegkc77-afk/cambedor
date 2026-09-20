import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/common/Card';
import { StatCard } from '../../components/common/StatCard';
import { Users, TrendingUp, Award, Activity } from 'lucide-react';

export const CompanyAnalytics = () => {
  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Campaign Analytics
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Participant growth trends, completion rates, and campaign engagement metrics.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <StatCard title="Total Enrolled" value="245" subtext="+18% this month" icon={Users} />
        <StatCard title="Avg Engagement" value="84%" subtext="+5% higher vs target" icon={Activity} />
        <StatCard title="Completion Rate" value="76%" subtext="96 completed campaigns" icon={Award} />
        <StatCard title="Growth Rate" value="3.2x" subtext="Quarter-over-quarter" icon={TrendingUp} />
      </div>

      {/* Visual Analytics Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Bar Chart Card */}
        <Card padding="1.5rem">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.25rem' }}>Participant Growth (Last 6 Months)</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', gap: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--color-border)' }}>
            {[
              { month: 'Oct', value: 35 },
              { month: 'Nov', value: 65 },
              { month: 'Dec', value: 90 },
              { month: 'Jan', value: 130 },
              { month: 'Feb', value: 185 },
              { month: 'Mar', value: 245 }
            ].map((bar, idx) => (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{
                  width: '100%',
                  maxWidth: '36px',
                  height: `${(bar.value / 250) * 100}%`,
                  backgroundColor: idx === 5 ? 'var(--color-primary-green)' : 'var(--color-deep-navy)',
                  borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                  transition: 'height 0.3s ease'
                }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>{bar.month}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Completion Rate Gauge */}
        <Card padding="1.5rem">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.25rem' }}>Campaign Deliverables Completion</h3>
          <div style={{ display: 'flex', flexColumn: 'column', gap: '1rem' }}>
            {[
              { label: 'Campus Ambassador Program', pct: 82 },
              { label: 'Social Media Campaign', pct: 95 },
              { label: 'FinTech Product Research', pct: 60 }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                  <span>{item.label}</span>
                  <span>{item.pct}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: 'var(--color-primary-green)' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
