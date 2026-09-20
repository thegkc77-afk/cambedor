import React from 'react';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function StudentVoicesPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">COMMUNITY STORIES</span>
          <h1 className="page-banner-title">Student Voices</h1>
          <p className="page-banner-desc">
            Hear directly from student builders, leaders, and founders transforming their college journeys.
          </p>
        </div>
      </div>
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
