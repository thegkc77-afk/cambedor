import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Avatar } from '../../components/common/Avatar';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { MapPin, GraduationCap, Award, Briefcase, Edit3, CheckCircle2 } from 'lucide-react';

export const StudentProfile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [name, setName] = useState(user?.name || '');
  const [college, setCollege] = useState(user?.college || '');
  const [course, setCourse] = useState(user?.course || 'B.S. Computer Science');
  const [bio, setBio] = useState(user?.bio || 'Passionate student ambassador pushing tech innovation on campus.');

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ name, college, course, bio });
    setIsEditOpen(false);
  };

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Student Profile
        </h1>
      </div>

      {/* Header Banner */}
      <Card padding="2rem" style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Avatar src={user?.avatar} name={user?.name} size={72} />
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
                {user?.name}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <GraduationCap size={16} /> {user?.college || 'Stanford University'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={16} /> Palo Alto, CA
                </span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#2D6A00', fontWeight: '700', marginTop: '0.25rem' }}>
                {user?.course || 'B.S. Computer Science'}
              </p>
            </div>
          </div>

          <Button variant="outline" icon={Edit3} onClick={() => setIsEditOpen(true)}>
            Edit Profile
          </Button>
        </div>
      </Card>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <Card padding="1.5rem">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem' }}>About Me</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            {user?.bio || 'Passionate computer science student looking for campus ambassador and product research opportunities in AI and Web Tech.'}
          </p>

          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Skills & Expertise</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'Community Management', 'Public Speaking', 'Growth Hacking', 'Event Planning'].map((skill, idx) => (
              <span key={idx} style={{ fontSize: '0.8125rem', fontWeight: '600', backgroundColor: 'var(--color-soft-green)', color: '#2D6A00', padding: '0.25rem 0.625rem', borderRadius: 'var(--radius-full)' }}>
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <Card padding="1.5rem">
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Campaign Portfolio</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { title: 'TechPulse Campus Ambassador', status: 'Active (75%)' },
              { title: 'Aura Health Social Advocate', status: 'Completed ✓' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'var(--color-bg-soft)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{item.title}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2D6A00' }}>{item.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Student Profile">
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.25rem' }}>Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.25rem' }}>University / College</label>
            <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.25rem' }}>Course / Major</label>
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.25rem' }}>Bio</label>
            <textarea rows={3} value={bio} onChange={(e) => setBio(e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit' }} />
          </div>
          <Button type="submit" variant="primary">Save Changes</Button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
