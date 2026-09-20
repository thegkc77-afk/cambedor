import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Users, Award, Send, FileText } from 'lucide-react';

export const StudentCampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { campaigns, applications, joinCampaign } = useData();
  const { user } = useAuth();

  const [taskSubmitted, setTaskSubmitted] = useState(false);
  const [taskNote, setTaskNote] = useState('');

  const campaign = campaigns.find(c => c.id === id) || campaigns[0];

  const app = applications.find(a => a.campaignId === campaign.id && (a.studentId === user.id || a.studentEmail === user.email));
  const isJoined = !!app;

  const handleJoinClick = () => {
    joinCampaign(campaign.id, user);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTaskSubmitted(true);
    setTaskNote('');
  };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-secondary)',
            fontSize: '0.875rem',
            cursor: 'pointer',
            marginBottom: '0.75rem'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Opportunities</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {campaign.companyLogo || '🏢'}
              </div>
              <div>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
                  {campaign.title}
                </h1>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)' }}>
                  Hosted by <strong>{campaign.companyName}</strong>
                </p>
              </div>
            </div>
          </div>

          <div>
            {isJoined ? (
              <Button variant="secondary" size="lg" icon={CheckCircle2} disabled>
                Joined ✓
              </Button>
            ) : (
              <Button variant="primary" size="lg" onClick={handleJoinClick}>
                Join Campaign Now →
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Main Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: 'span 2' }}>
          {/* Overview */}
          <Card padding="1.5rem">
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
              Campaign Overview
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {campaign.description}
            </p>
          </Card>

          {/* Objectives & Responsibilities */}
          <Card padding="1.5rem">
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.875rem', color: 'var(--color-text-primary)' }}>
              Objectives & Deliverables
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
              {(campaign.objectives || []).map((obj, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--color-primary-green)" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.875rem', color: 'var(--color-text-primary)' }}>
              Required Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {(campaign.skills || []).map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    backgroundColor: 'var(--color-soft-green)',
                    color: '#2D6A00',
                    border: '1px solid rgba(132, 212, 0, 0.4)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* If Joined: Task Submission Workspace */}
          {isJoined && (
            <Card padding="1.5rem" style={{ border: '2px solid var(--color-primary-green)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>
                🚀 Campaign Task Workspace
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                Track progress and submit your activity reports directly to {campaign.companyName}.
              </p>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '0.375rem' }}>
                  <span>Campaign Progress</span>
                  <span>{app?.progress || 50}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div style={{ width: `${app?.progress || 50}%`, height: '100%', backgroundColor: 'var(--color-primary-green)' }} />
                </div>
              </div>

              {taskSubmitted ? (
                <div style={{ padding: '1rem', backgroundColor: 'var(--color-soft-green)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '700', color: '#2D6A00' }}>Task Report Submitted Successfully! ✓</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Company administrators will review your submission shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleTaskSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                    Submit Task Report / Proof Link
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Paste your report URL, Google Drive link, or summary of deliverables..."
                    value={taskNote}
                    onChange={(e) => setTaskNote(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.625rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                  <Button type="submit" variant="primary" size="sm" icon={Send}>
                    Submit Task Report
                  </Button>
                </form>
              )}
            </Card>
          )}
        </div>

        {/* Sidebar Info Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card padding="1.5rem">
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
              Campaign Details
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--color-text-muted)" />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Location</p>
                  <p style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{campaign.location}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Users size={18} color="var(--color-text-muted)" />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Participants</p>
                  <p style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{campaign.participants} Enrolled</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Calendar size={18} color="var(--color-text-muted)" />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Application Deadline</p>
                  <p style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{campaign.deadline}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={18} color="#84D400" />
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Rewards & Compensation</p>
                  <p style={{ fontWeight: '700', color: '#2D6A00' }}>{campaign.reward}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};
