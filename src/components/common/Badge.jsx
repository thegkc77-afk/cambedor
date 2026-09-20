import React from 'react';

export const Badge = ({ status = 'active', children }) => {
  const normStatus = (status || '').toLowerCase();
  
  let badgeClass = 'badge-info';
  if (['active', 'completed', 'verified', 'approved', 'accepted'].includes(normStatus)) {
    badgeClass = 'badge-active';
  } else if (['pending', 'draft'].includes(normStatus)) {
    badgeClass = 'badge-pending';
  } else if (['rejected', 'suspended'].includes(normStatus)) {
    badgeClass = 'badge-rejected';
  }

  return (
    <span className={`badge ${badgeClass}`}>
      {children || status}
    </span>
  );
};
