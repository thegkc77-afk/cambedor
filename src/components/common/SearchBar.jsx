import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, placeholder = 'Search...', onClear }) => {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: '400px'
    }}>
      <Search
        size={18}
        style={{
          position: 'absolute',
          left: '12px',
          color: 'var(--color-text-muted)',
          pointerEvents: 'none'
        }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.5rem 2.25rem 0.5rem 2.5rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.875rem',
          color: 'var(--color-text-primary)',
          outline: 'none',
          transition: 'border-color 0.15s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-green)'}
        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
      />
      {value && (
        <button
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          style={{
            position: 'absolute',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
