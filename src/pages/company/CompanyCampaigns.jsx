import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { CampaignCard } from '../../components/campaign/CampaignCard';
import { Button } from '../../components/common/Button';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CompanyCampaigns = () => {
  const { campaigns } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const myCampaigns = campaigns.filter(c => c.companyId === user?.id || c.companyName === user?.name);
  const displayCampaigns = myCampaigns.length > 0 ? myCampaigns : campaigns;

  return (
    <DashboardLayout>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
            My Campaigns
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
            Manage active, pending, and completed ambassador campaigns.
          </p>
        </div>

        <Button variant="primary" icon={PlusCircle} onClick={() => navigate('/company/campaigns/create')}>
          Create Campaign
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {displayCampaigns.map(c => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </DashboardLayout>
  );
};
