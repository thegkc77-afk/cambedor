import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '4rem 0', backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
              Have questions about student ambassadorships or company partnerships? Reach out!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <Card padding="2rem">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                Send Us a Message
              </h3>

              {submitted ? (
                <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-soft-green)', borderRadius: 'var(--radius-md)' }}>
                  <p style={{ fontSize: '1rem', fontWeight: '700', color: '#2D6A00' }}>Thank you for reaching out!</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Your Name</label>
                    <input type="text" required placeholder="Alex Johnson" style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Email Address</label>
                    <input type="email" required placeholder="alex@university.edu" style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '600', marginBottom: '0.375rem' }}>Message</label>
                    <textarea required rows={4} placeholder="How can we help you?" style={{ width: '100%', padding: '0.625rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <Button type="submit" variant="primary" icon={Send} style={{ width: '100%' }}>Send Message</Button>
                </form>
              )}
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Card padding="1.5rem">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mail size={24} color="#84D400" />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Email Support</p>
                    <p style={{ fontSize: '0.9375rem', fontWeight: '600' }}>support@cambedor.com</p>
                  </div>
                </div>
              </Card>

              <Card padding="1.5rem">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <MapPin size={24} color="#84D400" />
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Headquarters</p>
                    <p style={{ fontSize: '0.9375rem', fontWeight: '600' }}>Palo Alto, California, USA</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
