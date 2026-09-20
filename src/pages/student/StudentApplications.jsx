import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const StudentApplications = () => {
  const { applications } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const myApplications = applications.filter(a => a.studentId === user.id || a.studentEmail === user.email);

  const columns = [
    {
      header: 'Campaign',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span style={{ fontSize: '1.25rem' }}>{row.companyLogo || '📢'}</span>
          <div>
            <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.campaignTitle}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.companyName}</p>
          </div>
        </div>
      )
    },
    {
      header: 'Applied Date',
      accessor: 'appliedDate'
    },
    {
      header: 'Status',
      render: (row) => <Badge status={row.status}>{row.status}</Badge>
    },
    {
      header: 'Progress',
      render: (row) => (
        <div style={{ width: '120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', fontWeight: '600' }}>
            <span>{row.progress}%</span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
            <div style={{ width: `${row.progress}%`, height: '100%', backgroundColor: 'var(--color-primary-green)' }} />
          </div>
        </div>
      )
    },
    {
      header: 'Action',
      render: (row) => (
        <Button variant="outline" size="sm" onClick={() => navigate(`/student/campaigns/${row.campaignId}`)}>
          View Campaign
        </Button>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          My Applications
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Track application statuses, active participation progress, and submitted tasks.
        </p>
      </div>

      <DataTable columns={columns} data={myApplications} emptyMessage="You have not applied to any campaigns yet." />
    </DashboardLayout>
  );
};
