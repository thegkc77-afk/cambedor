import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const WhyJoin = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Proof of Work',
      subtitle: 'Authenticated Startup Portfolio',
      badge: 'Founder Verified',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500',
      bullets: [
        'Build a verified proof-of-work portfolio authenticated directly by company founders.',
        'Showcase real marketing, event management, and product research achievements.'
      ],
      path: '/signup'
    },
    {
      title: 'Stipends & Rewards',
      subtitle: 'Earn while you learn',
      badge: 'Monetary Rewards',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=500',
      bullets: [
        'Earn monthly performance stipends, milestone cash bonuses, and exclusive swags.',
        'Instant payouts upon verified completion of campaign deliverables.'
      ],
      path: '/signup'
    },
    {
      title: 'Campus Marketing',
      subtitle: 'Reach Gen-Z at scale',
      badge: 'Student Ambassador',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500',
      bullets: [
        'Become the primary point of contact for top startups on your university campus.',
        'Authentic campus marketing through student ambassador networks and viral campaigns.'
      ],
      path: '/explore'
    },
    {
      title: 'Career Trajectory',
      subtitle: 'Fast-track your dream role',
      badge: 'Direct Hiring',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500',
      bullets: [
        'Get fast-tracked for internships, full-time roles, and founder recommendations.',
        'Direct access to Y-Combinator startups and high-growth venture-backed teams.'
      ],
      path: '/signup'
    },
    {
      title: 'Gig Economy',
      subtitle: 'Flexible student tasks',
      badge: 'Active Gigs',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500',
      bullets: [
        'Find 100+ active gigs with quick payouts from 50+ leading brands.',
        'Flexible opportunities that fit your academic schedule and boost your income.'
      ],
      path: '/explore'
    }
  ];

  return (
    <section style={{ padding: '5rem 0 6rem 0', backgroundColor: '#0B0F19', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(132, 212, 0, 0.12) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom">
        {/* Big Banner Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            letterSpacing: '0.08em',
            color: '#FFFFFF',
            display: 'block',
            textTransform: 'uppercase',
            lineHeight: '1'
          }}>
            CAMBEDOR <span style={{ color: '#84D400' }}>UNIVERSE</span>
          </span>
        </div>

        {/* Sticky 2-Column Grid matching Video layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.4fr)',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Pinned Sticky Title & Subtitle */}
          <div style={{
            position: 'sticky',
            top: '120px',
            alignSelf: 'start'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: '#FFFFFF',
              lineHeight: '1.15',
              marginBottom: '1.25rem'
            }}>
              Inside <br />
              <span style={{ color: '#84D400' }}>Cambedor Universe</span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#94A3B8',
              lineHeight: '1.7',
              maxWidth: '380px',
              marginBottom: '2rem'
            }}>
              A collaborative, youth-driven & innovative approach to campus engagement and student community building.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              style={{
                backgroundColor: '#84D400',
                color: '#111827',
                fontWeight: '700',
                fontSize: '0.95rem',
                padding: '0.85rem 1.75rem',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 20px rgba(132, 212, 0, 0.3)'
              }}
            >
              <span>Join Universe Now</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Right Column: Scrolling Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="why-join-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35)',
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#111827',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => navigate(card.path)}
              >
                {/* Header Title & Subtitle */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '900',
                    color: '#0F172A',
                    marginBottom: '0.25rem'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '0.90rem',
                    fontWeight: '600',
                    color: '#64748B'
                  }}>
                    {card.subtitle}
                  </p>
                </div>

                {/* Body Content Grid: Left Image with Badge + Right Bullets */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '170px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center'
                }}>
                  {/* Left Thumbnail Image with Overlay Badge */}
                  <div style={{
                    position: 'relative',
                    height: '140px',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0'
                  }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="why-join-card-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '0.625rem',
                      left: '0.625rem',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      fontSize: '0.70rem',
                      fontWeight: '700',
                      padding: '0.25rem 0.625rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {card.badge}
                    </div>
                  </div>

                  {/* Right Bullet Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {card.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                        <div style={{ color: '#E11D48', marginTop: '0.15rem', flexShrink: 0 }}>
                          <ChevronRight size={18} strokeWidth={3} />
                        </div>
                        <p style={{
                          fontSize: '0.925rem',
                          color: '#334155',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red Round Floating Arrow Action Button at Bottom Right */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#E11D48',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(225, 29, 72, 0.35)'
                  }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-join-card .why-join-card-img {
          transition: transform 500ms ease-out;
          transform: scale(1);
          will-change: transform;
        }
        .why-join-card:hover .why-join-card-img {
          transform: scale(1.1);
        }
        @media (max-width: 860px) {
          div[style*="grid-template-columns: minmax"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 2rem;
          }
          div[style*="grid-template-columns: 170px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyJoin;
