import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Student',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="page-banner-title">Contact Cambedor</h1>
          <p className="page-banner-desc">
            Have questions about partnering with us, joining a campus initiative, or launching a startup brief? Reach out below.
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="form-container">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={54} color="#84D400" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Message Received!</h3>
                <p style={{ color: '#64748B', marginBottom: '1.75rem' }}>
                  Thank you for reaching out. A Cambedor team member will get back to you within 24 hours.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Aarav Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="aarav@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">I am a</label>
                  <select
                    className="form-select"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="Student">Student / Campus Ambassador</option>
                    <option value="Startup">Startup Founder / hiring Team</option>
                    <option value="Community">College Community Leader</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about your campus, startup, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
