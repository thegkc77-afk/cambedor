import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Check, X, Building2, Briefcase } from 'lucide-react';

export const AdminApprovals = () => {
  const { companies, campaigns, approveCompany, rejectCompany, approveCampaign, rejectCampaign } = useData();

  const pendingCompanies = companies.filter(c => c.status === 'pending');
  const pendingCampaigns = campaigns.filter(c => c.approval === 'pending');

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Approval Center
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Review pending company verifications and campaign publication requests.
        </p>
      </div>

      {/* Pending Companies Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
          Pending Companies ({pendingCompanies.length})
        </h3>
        {pendingCompanies.length === 0 ? (
          <Card padding="1.5rem" style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            No pending company verification requests.
          </Card>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {pendingCompanies.map(co => (
              <Card key={co.id} padding="1.25rem">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>{co.logo || '🏢'}</div>
                  <div>
                    <h4 style={{ fontWeight: '700' }}>{co.name}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{co.industry}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  {co.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button variant="primary" size="sm" icon={Check} onClick={() => approveCompany(co.id)}>
                    Approve
                  </Button>
                  <Button variant="danger" size="sm" icon={X} onClick={() => rejectCompany(co.id)}>
                    Reject
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Pending Campaigns Section */}
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
          Pending Campaign Proposals ({pendingCampaigns.length})
        </h3>
        {pendingCampaigns.length === 0 ? (
          <Card padding="1.5rem" style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            No pending campaign proposals awaiting review.
          </Card>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {pendingCampaigns.map(camp => (
              <Card key={camp.id} padding="1.25rem">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Briefcase size={22} color="var(--color-primary-green)" />
                  <div>
                    <h4 style={{ fontWeight: '700' }}>{camp.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>By {camp.companyName}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  {camp.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Button variant="primary" size="sm" icon={Check} onClick={() => approveCampaign(camp.id)}>
                    Approve Proposal
                  </Button>
                  <Button variant="danger" size="sm" icon={X} onClick={() => rejectCampaign(camp.id)}>
                    Reject
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
