import React from 'react';

export const Avatar = ({ src, name = 'User', size = 40, logo = null }) => {
  const getInitials = (n) => {
    if (!n) return 'U';
    const parts = n.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return parts[0][0].toUpperCase();
  };

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'var(--color-soft-green)',
        color: '#2D6A00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: `${size * 0.4}px`,
        overflow: 'hidden',
        border: '1px solid rgba(132, 212, 0, 0.4)',
        flexShrink: 0
      }}
    >
      {logo ? (
        <span>{logo}</span>
      ) : src ? (
        <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};
