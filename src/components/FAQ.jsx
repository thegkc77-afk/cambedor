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
    <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-custom" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
            Everything you need to know about Cambedor platform and campaigns.
          </p>
        </div>

        <Accordion items={faqList} />
      </div>
    </section>
  );
};
