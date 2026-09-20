import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { WhyJoin } from '../../components/WhyJoin';
import { FinalCTA } from '../../components/FinalCTA';

export const WhyJoinPage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <div style={{ padding: '3.5rem 0 1rem 0', backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', textAlign: 'center' }}>
          <div className="container-custom">
            <h1 style={{ fontSize: '2.75rem', fontWeight: '800', marginBottom: '0.75rem', color: '#FFFFFF' }}>
              Why Join Cambedor?
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#94A3B8', maxWidth: '640px', margin: '0 auto' }}>
              Everything you gain by participating in real-world startup campaigns.
            </p>
          </div>
        </div>
        <WhyJoin />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};
