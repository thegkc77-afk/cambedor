import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatCard } from '../../components/common/StatCard';
import { Card } from '../../components/common/Card';
import { useData } from '../../context/DataContext';
import { Users, Building2, Briefcase, Activity, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const { students, companies, campaigns, activities } = useData();
  const navigate = useNavigate();

  const pendingCompanies = companies.filter(c => c.status === 'pending');
  const pendingCampaigns = campaigns.filter(c => c.approval === 'pending');

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Admin Platform Dashboard
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
          Manage students, companies, campaign approvals, and system-wide activities.
        </p>
      </div>

      {/* Statistics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        <StatCard title="Total Students" value="500+" subtext="Registered across 40+ universities" icon={Users} />
        <StatCard title="Companies" value="30+" subtext="Verified startup partners" icon={Building2} />
        <StatCard title="Active Campaigns" value="20+" subtext="Live on platform" icon={Briefcase} />
        <StatCard title="Total Activities" value="1,240+" subtext="Milestone transactions" icon={Activity} />
      </div>

      {/* Pending Approvals Alert Banner */}
      {(pendingCompanies.length > 0 || pendingCampaigns.length > 0) && (
        <Card padding="1.25rem" style={{ backgroundColor: 'var(--color-warning-bg)', border: '1px solid rgba(245, 158, 11, 0.4)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#B45309' }}>
                ⚠️ Action Required: Pending Approvals Queue
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#B45309', marginTop: '0.25rem' }}>
                {pendingCompanies.length} pending companies and {pendingCampaigns.length} campaign proposals await verification.
              </p>
            </div>
            <Button variant="dark" size="sm" onClick={() => navigate('/admin/approvals')}>
              Go to Approval Center →
            </Button>
          </div>
        </Card>
      )}

      {/* Recent Platform Activity */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
          Platform Activity Feed
        </h3>

        <Card padding="1.5rem">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activities.slice(0, 6).map((act) => (
              <div key={act.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-primary-green)" />
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                      {act.actor} <span style={{ fontWeight: '400', color: 'var(--color-text-secondary)' }}>{act.description}</span>
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.campaign}</p>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{act.timestamp}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};
