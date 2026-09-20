import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatCard } from '../../components/common/StatCard';
import { CampaignCard } from '../../components/campaign/CampaignCard';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Briefcase, Zap, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

export const StudentDashboard = () => {
  const { user } = useAuth();
  const { campaigns, applications } = useData();
  const navigate = useNavigate();

  const joinedAppIds = applications
    .filter(a => a.studentId === user.id || a.studentEmail === user.email)
    .map(a => a.campaignId);

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Good morning, {user?.name || 'Student'} 👋
        </h1>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
          Here's what's happening with your Cambedor journey.
        </p>
      </div>

      {/* Statistics 4-column Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem'
      }}>
        <StatCard title="Campaigns Joined" value={joinedAppIds.length || 4} subtext="Total applications" icon={Briefcase} />
        <StatCard title="Active Campaigns" value="2" subtext="In-progress milestones" icon={Zap} />
        <StatCard title="Completed" value="8" subtext="Verified certificates" icon={CheckCircle2} />
        <StatCard title="Achievements" value="5" subtext="Badges unlocked" icon={Award} />
      </div>

      {/* Recommended For You */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
              Recommended for You
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
              Handpicked campaigns based on your skills & interests
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate('/student/opportunities')} icon={ArrowRight}>
            View All Opportunities
          </Button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {campaigns.slice(0, 3).map(campaign => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              isJoined={joinedAppIds.includes(campaign.id)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
