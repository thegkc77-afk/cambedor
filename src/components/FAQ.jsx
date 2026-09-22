import React from 'react';
import { Accordion } from './common/Accordion';

export const FAQ = () => {
  const faqList = [
    {
      question: "How do I apply for a campaign on Cambedor?",
      answer: "Create a free student account, complete your profile details and skills, explore live opportunities, and click 'Join Campaign'. You will immediately be added to the campaign workspace."
    },
    {
      question: "Is Cambedor free for students?",
      answer: "Yes, 100% free! Students never pay to join Cambedor or participate in any campaigns."
    },
    {
      question: "How do companies post campaigns?",
      answer: "Companies can sign up for a Company account, fill in their company profile, and click 'Create Campaign'. Once verified by Cambedor admins, the campaign goes live for student discovery."
    },
    {
      question: "What kind of rewards can students earn?",
      answer: "Rewards vary by campaign and include monthly stipends ($150-$500/mo), performance bonuses, official certificates, free software subscriptions, recommendation letters, and exclusive startup merchandise."
    },
    {
      question: "How does Cambedor verify activity and tasks?",
      answer: "Students submit proof of completed tasks (links, screenshots, reports) directly through their Student Panel. Companies and admins review and approve these submissions."
    }
  ];

  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid #F1F5F9' }}>
      <div className="container-custom" style={{ maxWidth: '840px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: '800',
            color: '#15803D',
            backgroundColor: '#F0FDF4',
            border: '1px solid #DCFCE7',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            marginBottom: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Got Questions?
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', fontWeight: '400' }}>
            Everything you need to know about the Cambedor platform and campaigns.
          </p>
        </div>

        <Accordion items={faqList} />
      </div>
    </section>
  );
};
