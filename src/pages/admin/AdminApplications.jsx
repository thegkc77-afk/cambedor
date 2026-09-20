import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';

export const AdminApplications = () => {
  const { applications } = useData();

  const columns = [
    {
      header: 'Student',
      render: (r) => (
        <div>
          <p style={{ fontWeight: '700' }}>{r.studentName}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{r.studentEmail}</p>
        </div>
      )
    },
    { header: 'Campaign', accessor: 'campaignTitle' },
    { header: 'Company', accessor: 'companyName' },
    { header: 'Applied Date', accessor: 'appliedDate' },
    {
      header: 'Status',
      render: (r) => <Badge status={r.status}>{r.status}</Badge>
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          All Applications Audit
        </h1>
      </div>
      <DataTable columns={columns} data={applications} />
    </DashboardLayout>
  );
};
