import React from 'react';

export const StatCard = ({ title, value, subtext, icon: Icon, color = 'green' }) => {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      <div>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--color-text-muted)',
          marginBottom: '0.25rem'
        }}>
          {title}
        </p>
        <p style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          color: 'var(--color-text-primary)',
          lineHeight: 1.2
        }}>
          {value}
        </p>
        {subtext && (
          <p style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-secondary)',
            marginTop: '0.375rem'
          }}>
            {subtext}
          </p>
        )}
      </div>

      {Icon && (
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-soft-green)',
          color: '#2D6A00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Icon size={22} />
        </div>
      )}
    </div>
  );
};
