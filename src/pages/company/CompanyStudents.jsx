import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const CompanyStudents = () => {
  const { applications, students } = useData();

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
    { header: 'Joined Date', accessor: 'appliedDate' },
    {
      header: 'Progress',
      render: (row) => (
        <div style={{ width: '120px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.25rem' }}>{row.progress}%</div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-full)' }}>
            <div style={{ width: `${row.progress}%`, height: '100%', backgroundColor: 'var(--color-primary-green)' }} />
          </div>
        </div>
      )
    },
    {
      header: 'Status',
      render: (row) => <Badge status={row.status}>{row.status}</Badge>
    },
    {
      header: 'Action',
      render: (row) => (
        <Button variant="outline" size="sm">
          View Activity
        </Button>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Participating Students
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Monitor enrolled students across your company's campaigns.
        </p>
      </div>

      <DataTable columns={columns} data={applications} />
    </DashboardLayout>
  );
};
