import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon-container">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}
