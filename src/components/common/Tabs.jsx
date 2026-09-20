import React from 'react';

export const Tabs = ({ tabs = [], activeTab, onChange }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      borderBottom: '1px solid var(--color-border)',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem',
      overflowX: 'auto'
    }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              backgroundColor: isActive ? 'var(--color-soft-green)' : 'transparent',
              color: isActive ? '#2D6A00' : 'var(--color-text-secondary)',
              fontWeight: isActive ? '700' : '500',
              fontSize: '0.875rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label} {tab.count !== undefined && `(${tab.count})`}
          </button>
        );
      })}
    </div>
  );
};
