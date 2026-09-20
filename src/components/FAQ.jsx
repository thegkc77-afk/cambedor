import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="eyebrow">COMMON QUESTIONS</span>
          <h2 className="section-title">Got Questions?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Here are some things students often ask.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
