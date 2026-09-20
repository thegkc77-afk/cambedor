import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const CompanyApplications = () => {
  const { applications, updateApplicationStatus } = useData();

  const columns = [
    {
      header: 'Student',
      render: (row) => (
        <div>
          <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.studentName}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.studentEmail}</p>
        </div>
      )
    },
    { header: 'Campaign', accessor: 'campaignTitle' },
    { header: 'Applied Date', accessor: 'appliedDate' },
    {
      header: 'Status',
      render: (row) => <Badge status={row.status}>{row.status}</Badge>
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary" size="sm" onClick={() => updateApplicationStatus(row.id, 'Accepted')}>
            Accept
          </Button>
          <Button variant="danger" size="sm" onClick={() => updateApplicationStatus(row.id, 'Rejected')}>
            Reject
          </Button>
        </div>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Student Applications
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Review and approve incoming student applications for your campaigns.
        </p>
      </div>

      <DataTable columns={columns} data={applications} />
    </DashboardLayout>
  );
};
