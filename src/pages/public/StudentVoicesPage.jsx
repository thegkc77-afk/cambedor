import React from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '4rem 0', backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="container-custom">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}
            >
              Student <span style={{ color: '#84D400' }}>Voices</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)' }}
            >
              Hear directly from students who transformed their careers on Cambedor.
            </motion.p>
          </motion.div>

          {/* Testimonial Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
                <Card padding="1.75rem">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
