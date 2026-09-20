import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../data/features';

export default function WhyJoin() {
  return (
    <section className="section-padding bg-white" id="why-join">
      <div className="container">
        <div className="why-join-header">
          <span className="eyebrow">WHY JOIN CAMBEDOR</span>
          <h2 className="section-title">Why Join Cambedor</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to move beyond campus and into the real world.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
