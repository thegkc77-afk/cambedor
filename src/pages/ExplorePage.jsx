import React, { useState } from 'react';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function ExplorePage() {
  const [filter, setFilter] = useState('All');

  const campaigns = [
    {
      id: 1,
      category: 'Campaigns',
      title: 'AI Product Growth Advocate Campaign',
      company: 'NeuroTech Labs',
      location: 'Remote / Campus Wide',
      members: '120+ Students Joined',
      deadline: 'Apply by Oct 15',
      badge: 'High Priority',
      desc: 'Lead product onboarding, organize campus workshops, and gain direct mentorship from AI startup founders.'
    },
    {
      id: 2,
      category: 'Communities',
      title: 'Pan-India Student Web3 Builders Club',
      company: 'Cambedor Network',
      location: 'Online / 25 Campuses',
      members: '450+ Members',
      deadline: 'Open Enrolment',
      badge: 'Community',
      desc: 'Collaborate with peer developers, participate in hackathons, and ship real-world decentralized apps.'
    },
    {
      id: 3,
      category: 'Startup Briefs',
      title: 'UI/UX Design Challenge: FinTech App Redesign',
      company: 'PayFlow India',
      location: 'Remote Brief',
      members: '35 Submissions',
      deadline: 'Oct 10',
      badge: 'Stipend Included',
      desc: 'Redesign payment flow screens for Gen-Z users. Top 3 submissions receive cash awards and interview invites.'
    },
    {
      id: 4,
      category: 'Campaigns',
      title: 'Campus Ambassador Lead Program 2026',
      company: 'Cambedor Core',
      location: '30+ Top IITs & NITs',
      members: '80+ Campus Leads',
      deadline: 'Rolling Basis',
      badge: 'Leadership',
      desc: 'Represent Cambedor at your institution, host tech meetups, and build your leadership credentials.'
    },
    {
      id: 5,
      category: 'Startup Briefs',
      title: 'Content Marketing & Creator Fellowship',
      company: 'SkillCraft',
      location: 'Hybrid',
      members: '20 Openings',
      deadline: 'Oct 20',
      badge: 'Certificate',
      desc: 'Create engaging short-form video content and technical blogs for an edtech startup audience.'
    },
    {
      id: 6,
      category: 'Communities',
      title: 'Female Founders & Tech Leaders Guild',
      company: 'Cambedor Women in Tech',
      location: 'National Network',
      members: '300+ Members',
      deadline: 'Always Open',
      badge: 'Mentorship',
      desc: 'Connecting aspiring female tech enthusiasts with women CTOs and venture partners across India.'
    }
  ];

  const filteredItems = filter === 'All'
    ? campaigns
    : campaigns.filter(c => c.category === filter);

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">EXPLORE OPPORTUNITIES</span>
          <h1 className="page-banner-title">Explore Active Initiatives</h1>
          <p className="page-banner-desc">
            Find active campaigns, join student communities, and work on real startup briefs to elevate your portfolio.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          {/* Filters */}
          <div className="explore-filters">
            {['All', 'Campaigns', 'Communities', 'Startup Briefs'].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="features-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="feature-card" style={{ justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="eyebrow" style={{ marginBottom: 0, fontSize: '0.75rem' }}>{item.category}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#84D400', backgroundColor: '#eaf7d3', padding: '0.25rem 0.6rem', borderRadius: '99px' }}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="feature-title" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#11182B', marginBottom: '0.75rem' }}>
                    by {item.company}
                  </p>
                  <p className="feature-description" style={{ marginBottom: '1.5rem' }}>{item.desc}</p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#64748B', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} /> {item.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={14} /> {item.members}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={14} /> {item.deadline}
                    </div>
                  </div>

                  <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'space-between' }}>
                    View Initiative <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
