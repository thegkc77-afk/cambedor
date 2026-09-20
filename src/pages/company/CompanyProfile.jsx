import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export const CompanyProfile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Company Profile
        </h1>
      </div>

      <Card padding="2rem" style={{ maxWidth: '700px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
            {user?.logo || '⚡'}
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>{user?.name || 'TechPulse Labs'}</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{user?.industry || 'AI & Developer Tools'}</p>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Badge status="verified">Verified Company ✓</Badge>
          </div>
        </div>

        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
          TechPulse Labs builds next-generation developer tooling and AI productivity platforms. We actively partner with top campus ambassadors worldwide to empower student software developers.
        </p>
      </Card>
    </DashboardLayout>
  );
};
