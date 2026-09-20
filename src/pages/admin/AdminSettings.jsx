import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const AdminSettings = () => {
  const [autoVerify, setAutoVerify] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-deep-navy)' }}>
          Platform Settings
        </h1>
      </div>

      <Card padding="1.5rem" style={{ maxWidth: '600px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem' }}>Ecosystem Security</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Require Admin Approval for All Campaigns</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>All new company campaigns must be reviewed before public listing</p>
          </div>
          <input type="checkbox" checked={!autoVerify} onChange={(e) => setAutoVerify(!e.target.checked)} style={{ width: '18px', height: '18px' }} />
        </div>
        {saved && <p style={{ fontSize: '0.8125rem', color: '#2D6A00', fontWeight: '700', marginBottom: '1rem' }}>Platform settings updated!</p>}
        <Button variant="primary" onClick={() => setSaved(true)}>Save Configuration</Button>
      </Card>
    </DashboardLayout>
  );
};
