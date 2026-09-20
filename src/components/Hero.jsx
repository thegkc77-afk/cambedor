import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <h1 className="hero-heading">
          Build Your<span className="cursor-line"></span> <span className="text-green">Future</span>
          <br />
          Beyond Campus
        </h1>

        <p className="hero-description">
          Trusted by ambitious students, communities, and growing startups.
          Join campaigns, lead initiatives, and earn rewards while gaining{' '}
          <strong>real-world industry experience.</strong>
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
