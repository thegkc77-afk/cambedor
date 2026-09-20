import React from 'react';

export const Filter = ({ label, options = [], value, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {label && (
        <span style={{ fontSize: '0.8125rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
          {label}:
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '0.5rem 0.75rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.875rem',
          color: 'var(--color-text-primary)',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
