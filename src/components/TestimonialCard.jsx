import React from 'react';

export default function TestimonialCard({ quote, author, role, initials }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{initials}</div>
        <div className="author-info">
          <h4>{author}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}
