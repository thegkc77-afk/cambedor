import React from 'react';

export const Card = ({ children, className = '', hover = false, padding = '1.25rem', style = {}, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding,
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
