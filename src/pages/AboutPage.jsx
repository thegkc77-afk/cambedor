import React from 'react';
import About from '../components/About';
import FinalCTA from '../components/FinalCTA';

export default function AboutPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">OUR VISION</span>
          <h1 className="page-banner-title">About Cambedor</h1>
          <p className="page-banner-desc">
            Bridging the gap between academic education and industry execution for ambitious students across India.
          </p>
        </div>
      </div>
      <About />
      <FinalCTA />
    </main>
  );
}
