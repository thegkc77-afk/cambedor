import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Mission from '../components/Mission';
import WhyJoin from '../components/WhyJoin';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Mission />
      <WhyJoin />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
