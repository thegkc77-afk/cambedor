import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { MapPin, Users, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const CampaignCard = ({ campaign, isJoined = false, onJoin }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'student';

  const handleCardClick = () => {
    if (role === 'student') {
      navigate(`/student/campaigns/${campaign.id}`);
    } else if (role === 'company') {
      navigate(`/company/campaigns/${campaign.id}`);
    } else if (role === 'admin') {
      navigate(`/admin/campaigns`);
    }
  };

  return (
    <Card hover padding="1.25rem" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-soft)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            flexShrink: 0
          }}>
            {campaign.companyLogo || '🏢'}
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-text-primary)', lineHeight: 1.3 }}>
              {campaign.title}
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
              {campaign.companyName}
            </p>
          </div>
        </div>

        <Badge status={campaign.approval || campaign.status}>
          {campaign.category}
        </Badge>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.5',
        marginBottom: '1rem',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {campaign.description}
      </p>

      {/* Skills tags */}
      {campaign.skills && campaign.skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
          {campaign.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                backgroundColor: 'var(--color-bg-soft)',
                border: '1px solid var(--color-border-light)',
                padding: '0.15rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-secondary)'
              }}
            >
              {skill}
            </span>
          ))}
          {campaign.skills.length > 3 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', padding: '0.15rem 0.25rem' }}>
              +{campaign.skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Info Pills */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '0.875rem',
        borderTop: '1px solid var(--color-border-light)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.5rem',
        fontSize: '0.75rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <MapPin size={14} color="var(--color-text-muted)" />
          <span>{campaign.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Users size={14} color="var(--color-text-muted)" />
          <span>{campaign.participants} Participants</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Calendar size={14} color="var(--color-text-muted)" />
          <span>Deadline: {campaign.deadline}</span>
        </div>
        <div style={{ fontWeight: '700', color: '#2D6A00' }}>
          🎁 {campaign.reward}
        </div>
      </div>

      {/* CTA Button */}
      {isJoined ? (
        <Button variant="secondary" size="sm" onClick={handleCardClick} icon={CheckCircle2} style={{ width: '100%', justifyContent: 'center' }}>
          Joined ✓
        </Button>
      ) : (
        <Button variant="primary" size="sm" onClick={handleCardClick} icon={ArrowRight} style={{ width: '100%', justifyContent: 'center' }}>
          View Details & Join
        </Button>
      )}
    </Card>
  );
};
