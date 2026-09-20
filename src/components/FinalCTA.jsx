import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-container">
        <h2 className="final-cta-heading">
          Your future doesn't start after college.
          <br />
          It starts now.
        </h2>
        <p className="final-cta-subtext">
          Join a growing community of ambitious students, startups, and communities building meaningful opportunities.
        </p>
        <div className="hero-ctas">
          <Link to="/signup" className="btn btn-primary">
            Get Started Now <ArrowRight size={18} />
          </Link>
          <Link to="/explore" className="btn btn-secondary">
            Explore Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}
