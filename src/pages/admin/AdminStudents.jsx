import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { DataTable } from '../../components/common/DataTable';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SearchBar } from '../../components/common/SearchBar';
import { Filter } from '../../components/common/Filter';

export const AdminStudents = () => {
  const { students } = useData();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                          s.email.toLowerCase().includes(search.toLowerCase()) ||
                          s.college.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    {
      header: 'Student Name',
      render: (row) => (
        <div>
          <p style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{row.name}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{row.email}</p>
        </div>
      )
    },
    { header: 'College / University', accessor: 'college' },
    { header: 'Course', accessor: 'course' },
    { header: 'Joined Date', accessor: 'joinedDate' },
    {
      header: 'Campaigns',
      render: (row) => <span style={{ fontWeight: '700' }}>{row.joinedCampaignsCount || 4}</span>
    },
    {
      header: 'Status',
      render: (row) => <Badge status={row.status}>{row.status}</Badge>
    },
    {
      header: 'Actions',
      render: () => (
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          <Button variant="outline" size="sm">View</Button>
          <Button variant="danger" size="sm">Suspend</Button>
        </div>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Student Management
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Monitor registered students, college affiliations, and account statuses.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', backgroundColor: '#FFFFFF', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
        <SearchBar value={search} onChange={setSearch} placeholder="Search student name, email, or college..." />
        <Filter
          label="Status"
          value={statusFilter}
          onChange={setStatusFilter}
          options={[
            { label: 'All Statuses', value: 'all' },
            { label: 'Active', value: 'active' },
            { label: 'Suspended', value: 'suspended' }
          ]}
        />
      </div>

      <DataTable columns={columns} data={filteredStudents} />
    </DashboardLayout>
  );
};
