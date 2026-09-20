import React from 'react';
import { Target, Check } from 'lucide-react';

export default function Mission() {
  const missionBullets = [
    "Discover real-world opportunities",
    "Join student campaigns",
    "Connect with growing startups",
    "Build meaningful communities",
    "Earn practical experience",
    "Showcase your skills",
    "Grow your professional network"
  ];

  return (
    <section className="section-padding bg-soft">
      <div className="container mission-container">
        {/* Header */}
        <div className="mission-header">
          <span className="eyebrow">OUR MISSION</span>
          <h2 className="section-title">
            Create opportunities. Build communities. Grow together.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We empower students to step out of textbook theory and step into real-world action, connecting campus potential with startup innovation.
          </p>
        </div>

        {/* Card */}
        <div className="mission-card">
          <div className="mission-card-header">
            <div className="mission-icon-badge">
              <Target size={24} />
            </div>
            <h3 className="mission-card-title">Why Cambedor?</h3>
          </div>

          <ul className="mission-bullets">
            {missionBullets.map((bullet, idx) => (
              <li key={idx} className="mission-bullet-item">
                <div className="mission-bullet-icon">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
