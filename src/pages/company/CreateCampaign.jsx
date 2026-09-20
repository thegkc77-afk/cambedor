import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ArrowLeft, Save, Send } from 'lucide-react';

export const CreateCampaign = () => {
  const navigate = useNavigate();
  const { createCampaign } = useData();
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Ambassador');
  const [skills, setSkills] = useState('Social Media, Public Speaking, Event Planning');
  const [location, setLocation] = useState('Remote');
  const [workType, setWorkType] = useState('Part-Time');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [reward, setReward] = useState('$300 / Month + Certificate & Swags');
  const [objectives, setObjectives] = useState('Onboard campus students, Host 2 tech workshops');

  const handleSubmit = (status) => {
    const campaignData = {
      title: title || 'New Campus Ambassador Campaign',
      description: description || 'Building student engagement across campus tech clubs.',
      category,
      skills: skills.split(',').map(s => s.trim()),
      location,
      workType,
      startDate,
      endDate,
      deadline,
      reward,
      objectives: objectives.split(',').map(o => o.trim()),
      status
    };

    createCampaign(campaignData, user);
    navigate('/company/campaigns');
  };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigate('/company/campaigns')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-secondary)',
            fontSize: '0.875rem',
            cursor: 'pointer',
            marginBottom: '0.5rem'
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Campaigns</span>
        </button>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Create New Campaign
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Fill in campaign details to recruit ambitious campus ambassadors.
        </p>
      </div>

      <Card padding="2rem" style={{ maxWidth: '840px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Campaign Name *</label>
            <input type="text" required placeholder="e.g. Campus Ambassador Program 2026" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Description *</label>
            <textarea rows={4} required placeholder="Detailed description of the campaign role and goals..." value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none', fontFamily: 'inherit' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Campaign Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }}>
                <option value="Ambassador">Ambassador</option>
                <option value="Marketing">Marketing</option>
                <option value="Product Research">Product Research</option>
                <option value="Social Impact">Social Impact</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Location / Type</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }}>
                <option value="Remote">Remote</option>
                <option value="On-Campus">On-Campus</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Skills Required (comma separated)</label>
            <input type="text" placeholder="e.g. Social Media, Public Speaking, Event Planning" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Start Date</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>End Date</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Deadline</label>
              <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Reward & Stipend</label>
            <input type="text" placeholder="e.g. $300 / Month + Certificate" value={reward} onChange={(e) => setReward(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Campaign Objectives (comma separated)</label>
            <textarea rows={2} placeholder="e.g. Host 2 workshops, Onboard 50 students" value={objectives} onChange={(e) => setObjectives(e.target.value)} style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit' }} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button type="button" variant="secondary" icon={Save} onClick={() => handleSubmit('draft')}>
              Save Draft
            </Button>
            <Button type="button" variant="primary" icon={Send} onClick={() => handleSubmit('pending')}>
              Publish Campaign
            </Button>
          </div>
        </form>
      </Card>
    </DashboardLayout>
  );
};
