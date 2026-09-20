import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatCard } from '../../components/common/StatCard';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Briefcase, Users, FileText, CheckCircle2, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CompanyDashboard = () => {
  const { user } = useAuth();
  const { campaigns } = useData();
  const navigate = useNavigate();

  const myCampaigns = campaigns.filter(c => c.companyId === user?.id || c.companyName === user?.name);

  const columns = [
    {
      header: 'Campaign',
      render: (row) => (
        <div>
          <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.title}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.category} • {row.location}</p>
        </div>
      )
    },
    { header: 'Participants', accessor: 'participants' },
    { header: 'Active', accessor: 'activeParticipants' },
    { header: 'Completed', accessor: 'completedParticipants' },
    {
      header: 'Engagement',
      render: () => <span style={{ fontWeight: '700', color: '#2D6A00' }}>78%</span>
    },
    {
      header: 'Status',
      render: (row) => <Badge status={row.approval || row.status}>{row.approval || row.status}</Badge>
    },
    {
      header: 'Action',
      render: (row) => (
        <Button variant="outline" size="sm" onClick={() => navigate(`/company/campaigns/${row.id}`)}>
          View
        </Button>
      )
    }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
            Welcome back, {user?.name || 'Company'} 👋
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
            Track your campaigns and student engagement.
          </p>
        </div>

        <Button variant="primary" size="lg" icon={PlusCircle} onClick={() => navigate('/company/campaigns/create')}>
          Create New Campaign
        </Button>
      </div>

      {/* Statistics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        <StatCard title="Active Campaigns" value={myCampaigns.length || 8} subtext="Live on platform" icon={Briefcase} />
        <StatCard title="Total Participants" value="245" subtext="Enrolled students" icon={Users} />
        <StatCard title="Applications" value="182" subtext="Pending review" icon={FileText} />
        <StatCard title="Completed" value="96" subtext="Successful milestones" icon={CheckCircle2} />
      </div>

      {/* Campaign Performance Table */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
          Campaign Performance
        </h3>
        <DataTable columns={columns} data={myCampaigns.length > 0 ? myCampaigns : campaigns} />
      </div>
    </DashboardLayout>
  );
};
