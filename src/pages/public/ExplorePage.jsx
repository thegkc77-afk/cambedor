import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useData } from '../../context/DataContext';
import { CampaignCard } from '../../components/campaign/CampaignCard';
import { SearchBar } from '../../components/common/SearchBar';
import { Filter } from '../../components/common/Filter';

export const ExplorePage = () => {
  const { campaigns } = useData();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredCampaigns = campaigns.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
                          c.companyName.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || c.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '3rem 0', backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
              Explore Campaigns
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
              Discover active campus ambassador programs, social campaigns, and startup projects.
            </p>
          </div>

          {/* Controls Bar */}
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
            <SearchBar value={search} onChange={setSearch} placeholder="Search campaigns or startups..." />
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
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
