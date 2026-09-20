import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button className="faq-button" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <div className="faq-icon-toggle">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
