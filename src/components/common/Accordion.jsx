import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const AccordionItem = ({ title, content, isOpenInitial = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);

  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      marginBottom: '0.75rem',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '1rem',
          fontWeight: '600',
          color: 'var(--color-text-primary)'
        }}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} color="var(--color-text-muted)" /> : <ChevronDown size={20} color="var(--color-text-muted)" />}
      </button>

      {isOpen && (
        <div style={{
          padding: '0 1.5rem 1.25rem 1.5rem',
          color: 'var(--color-text-secondary)',
          fontSize: '0.9375rem',
          lineHeight: '1.6',
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: '1rem'
        }}>
          {content}
        </div>
      )}
    </div>
  );
};

export const Accordion = ({ items = [] }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title || item.question} content={item.content || item.answer} isOpenInitial={index === 0} />
      ))}
    </div>
  );
};
