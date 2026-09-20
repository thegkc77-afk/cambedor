import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const CompanySettings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Company Settings
        </h1>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '600px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Notification Settings</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Email Alerts for New Applicants</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Get notified instantly when a student joins a campaign</p>
          </div>
          <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} style={{ width: '18px', height: '18px' }} />
        </div>
        {saved && <p style={{ fontSize: '0.8125rem', color: '#2D6A00', fontWeight: '700', marginBottom: '1rem' }}>Saved successfully!</p>}
        <Button variant="primary" onClick={() => setSaved(true)}>Save Settings</Button>
      </Card>
    </DashboardLayout>
  );
};
