import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const StudentSettings = () => {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [saved, setSaved] = useState(false);

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Settings
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
          Manage your account preferences and notifications.
        </p>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '600px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Notification Preferences</h3>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Email Digest for New Campaigns</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Receive weekly opportunities matching your college profile</p>
          </div>
          <input
            type="checkbox"
            checked={emailNotifs}
            onChange={(e) => setEmailNotifs(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
        </div>

        {saved && (
          <p style={{ fontSize: '0.8125rem', color: '#2D6A00', fontWeight: '700', marginBottom: '1rem' }}>Settings updated successfully! ✓</p>
        )}

        <Button variant="primary" onClick={() => setSaved(true)}>Save Settings</Button>
      </Card>
    </DashboardLayout>
  );
};
