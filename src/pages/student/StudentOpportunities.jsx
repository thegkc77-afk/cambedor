import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { CampaignCard } from '../../components/campaign/CampaignCard';
import { SearchBar } from '../../components/common/SearchBar';
import { Filter } from '../../components/common/Filter';

export const StudentOpportunities = () => {
  const { campaigns, applications } = useData();
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const joinedAppIds = applications
    .filter(a => a.studentId === user.id || a.studentEmail === user.email)
    .map(a => a.campaignId);

  const filteredCampaigns = campaigns.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.companyName.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || c.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesLocation = locationFilter === 'all' || c.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Explore Opportunities
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Apply for campus ambassador programs, brand advocate campaigns, and research initiatives.
        </p>
      </div>

      {/* Filters Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem',
        backgroundColor: '#FFFFFF',
        padding: '1rem 1.25rem',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <SearchBar value={search} onChange={setSearch} placeholder="Search by campaign title or company..." />

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Filter
            label="Category"
            value={categoryFilter}
            onChange={setCategoryFilter}
            options={[
              { label: 'All Categories', value: 'all' },
              { label: 'Ambassador', value: 'ambassador' },
              { label: 'Marketing', value: 'marketing' },
              { label: 'Product Research', value: 'product research' },
              { label: 'Social Impact', value: 'social impact' }
            ]}
          />
          <Filter
            label="Location"
            value={locationFilter}
            onChange={setLocationFilter}
            options={[
              { label: 'All Locations', value: 'all' },
              { label: 'Remote', value: 'remote' },
              { label: 'On-Campus', value: 'on-campus' }
            ]}
          />
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredCampaigns.map(campaign => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            isJoined={joinedAppIds.includes(campaign.id)}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};
