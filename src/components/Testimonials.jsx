import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section-padding bg-soft" id="student-voices">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow">STUDENT STORIES</span>
          <h2 className="section-title">Voices of Cambedor</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real experiences from students building something beyond the classroom.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              author={item.author}
              role={item.role}
              initials={item.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
