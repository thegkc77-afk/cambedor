import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const AdminCompanies = () => {
  const { companies, approveCompany, rejectCompany } = useData();

  const columns = [
    {
      header: 'Company Name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span style={{ fontSize: '1.25rem' }}>{row.logo || '🏢'}</span>
          <div>
            <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.name}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.email}</p>
          </div>
        </div>
      )
    },
    { header: 'Industry', accessor: 'industry' },
    { header: 'Campaigns', accessor: 'campaignsCount' },
    { header: 'Students Enrolled', accessor: 'totalStudents' },
    {
      header: 'Verification Status',
      render: (row) => <Badge status={row.status}>{row.status}</Badge>
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          {row.status === 'pending' ? (
            <>
              <Button variant="primary" size="sm" onClick={() => approveCompany(row.id)}>
                Approve
              </Button>
              <Button variant="danger" size="sm" onClick={() => rejectCompany(row.id)}>
                Reject
              </Button>
            </>
          ) : (
            <Button variant="danger" size="sm" onClick={() => rejectCompany(row.id)}>
              Suspend
            </Button>
          )}
        </div>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Company Verification Management
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Approve, reject, or suspend participating company accounts on Cambedor.
        </p>
      </div>

      <DataTable columns={columns} data={companies} />
    </DashboardLayout>
  );
};
