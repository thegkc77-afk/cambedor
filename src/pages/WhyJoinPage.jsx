import React from 'react';
import WhyJoin from '../components/WhyJoin';
import FinalCTA from '../components/FinalCTA';

export default function WhyJoinPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">STUDENT ADVANTAGE</span>
          <h1 className="page-banner-title">Why Join Cambedor?</h1>
          <p className="page-banner-desc">
            Discover how Cambedor equips you with real-world exposure, startup connections, and industry credentials.
          </p>
        </div>
      </div>
      <WhyJoin />
      <FinalCTA />
    </main>
  );
}
