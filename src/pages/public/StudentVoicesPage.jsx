import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/common/Card';
import { Avatar } from '../../components/common/Avatar';
import { Star } from 'lucide-react';

export const StudentVoicesPage = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      college: "Stanford University",
      campaign: "TechPulse Campus Ambassador",
      quote: "Leading the TechPulse ambassador program helped me land 3 internship offers. The proof of work portfolio on Cambedor was my secret weapon!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Priya Singh",
      college: "Delhi University",
      campaign: "Aura Health Social Advocacy",
      quote: "Creating social media content for Aura Health allowed me to earn $400/mo while studying full time. Highly recommend Cambedor!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Rahul Kumar",
      college: "IIT Bombay",
      campaign: "FinTech Product Research",
      quote: "Conducting user interviews for FinFlow was an incredible hands-on product research experience. The team treated us like real team members.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '4rem 0', backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
              Student Voices
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)' }}>
              Hear directly from students who transformed their careers on Cambedor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, idx) => (
              <Card key={idx} padding="1.75rem">
                <div style={{ display: 'flex', gap: '0.25rem', color: '#F59E0B', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <Avatar src={t.avatar} name={t.name} size={42} />
                  <div>
                    <p style={{ fontSize: '0.9375rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{t.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.college}</p>
                    <p style={{ fontSize: '0.75rem', fontWeight: '600', color: '#2D6A00' }}>{t.campaign}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
