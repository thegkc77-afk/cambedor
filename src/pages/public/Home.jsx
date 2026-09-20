import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Stats } from '../../components/Stats';
import { About } from '../../components/About';
import { Mission } from '../../components/Mission';
import { WhyJoin } from '../../components/WhyJoin';
import { FAQ } from '../../components/FAQ';
import { FinalCTA } from '../../components/FinalCTA';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Stats />
        <About />
        <Mission />
        <WhyJoin />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};
