import React from 'react';
import { Inbox } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon = Inbox,
  title = 'No items found',
  description = 'There is no data to display right now.',
  actionText,
  onAction
}) => {
  return (
    <div style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#FFFFFF',
      border: '1px dashed var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-bg-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-muted)',
        marginBottom: '1rem'
      }}>
        <Icon size={28} />
      </div>

      <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
        {title}
      </h4>

      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', maxWidth: '400px', marginBottom: '1.5rem' }}>
        {description}
      </p>

      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
