import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

export const AdminCampaigns = () => {
  const { campaigns, approveCampaign, rejectCampaign } = useData();

  const columns = [
    {
      header: 'Campaign Title',
      render: (row) => (
        <div>
          <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.title}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.companyName}</p>
        </div>
      )
    },
    { header: 'Category', accessor: 'category' },
    { header: 'Participants', accessor: 'participants' },
    { header: 'Deadline', accessor: 'deadline' },
    {
      header: 'Approval Status',
      render: (row) => <Badge status={row.approval}>{row.approval}</Badge>
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          {row.approval === 'pending' ? (
            <>
              <Button variant="primary" size="sm" onClick={() => approveCampaign(row.id)}>
                Approve
              </Button>
              <Button variant="danger" size="sm" onClick={() => rejectCampaign(row.id)}>
                Reject
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm">
              View Details
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
          Campaign Management & Approvals
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Review submitted campaign proposals before they go live to students.
        </p>
      </div>

      <DataTable columns={columns} data={campaigns} />
    </DashboardLayout>
  );
};
