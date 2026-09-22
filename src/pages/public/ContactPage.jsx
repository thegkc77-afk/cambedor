import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Mail, Phone, MapPin, ChevronRight, User, MessageSquare, Send, MessageCircle, ArrowRight, Lock, Eye, EyeOff, Clock, Building, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InstagramIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export const ContactPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#DDEFCA', color: '#0F172A', position: 'relative', overflowX: 'hidden' }}>
      <Navbar />

      {/* Subtle Ambient Radial Glows */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(132, 212, 0, 0.2) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <main style={{ flex: 1, padding: '2.5rem 1rem 5rem 1rem', position: 'relative', zIndex: 1 }}>
        <div className="container-custom" style={{ maxWidth: '1140px', margin: '0 auto' }}>

          {/* Top Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '1rem' }}
          >
            <span style={{
              backgroundColor: '#FFFFFF',
              color: '#15803D',
              border: '1px solid #BBF7D0',
              fontSize: '0.8125rem',
              fontWeight: '800',
              padding: '0.45rem 1.35rem',
              borderRadius: '999px',
              display: 'inline-block',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)'
            }}>
              Contact Us
            </span>
          </motion.div>

          {/* Main Headline & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#0F172A',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: '1.15'
            }}>
              Let's Start a <span style={{ color: '#15803D' }}>Conversation</span>
            </h1>
            <p style={{
              fontSize: '1.0625rem',
              color: '#334155',
              lineHeight: '1.65',
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: '500'
            }}>
              Have questions about Cambedor? Looking to collaborate or launch campus campaigns? Drop us a message or connect with our team directly.
            </p>
          </motion.div>

          {/* 2-Column Main Layout: Left Form vs Right Address & Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }} className="contact-grid-container">

            {/* LEFT COLUMN: Name, Email, Password & Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1.75rem',
                padding: '2.5rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 20px 45px rgba(15, 23, 42, 0.07)'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0F172A', marginBottom: '0.5rem' }}>
                  Send Us a Message
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: '500' }}>
                  Fill out your details below and we'll respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    backgroundColor: '#F0FDF4',
                    borderRadius: '1.25rem',
                    border: '1px solid #DCFCE7'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#16A34A',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0F172A', marginBottom: '0.5rem' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                    Thank you for reaching out, <strong style={{ color: '#15803D' }}>{formData.name || 'Friend'}</strong>. Our team has received your inquiry and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', password: '', subject: '', message: '' });
                    }}
                    style={{
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      padding: '0.85rem 2rem',
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      boxShadow: '0 8px 20px rgba(15, 23, 42, 0.2)'
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>

                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '800', color: '#1E293B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Full Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} color="#15803D" style={{ position: 'absolute', left: '1.125rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="text"
                        required
                        placeholder="Enter your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 3rem',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '0.875rem',
                          fontSize: '0.95rem',
                          color: '#0F172A',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#16A34A';
                          e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '800', color: '#1E293B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email Address *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={18} color="#15803D" style={{ position: 'absolute', left: '1.125rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 3rem',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '0.875rem',
                          fontSize: '0.95rem',
                          color: '#0F172A',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#16A34A';
                          e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '800', color: '#1E293B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Account Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Lock size={18} color="#15803D" style={{ position: 'absolute', left: '1.125rem', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem 3rem 0.875rem 3rem',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '0.875rem',
                          fontSize: '0.95rem',
                          color: '#0F172A',
                          outline: 'none',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#16A34A';
                          e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '1rem',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          color: '#64748B',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '800', color: '#1E293B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1.125rem',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        borderRadius: '0.875rem',
                        fontSize: '0.95rem',
                        color: '#0F172A',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#16A34A';
                        e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#CBD5E1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '800', color: '#1E293B', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Message *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <MessageSquare size={18} color="#15803D" style={{ position: 'absolute', left: '1.125rem', top: '1rem' }} />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 3rem',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          borderRadius: '0.875rem',
                          fontSize: '0.95rem',
                          color: '#0F172A',
                          outline: 'none',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#16A34A';
                          e.target.style.boxShadow = '0 0 0 3px rgba(22, 163, 74, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#CBD5E1';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Full-width High Contrast Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      backgroundColor: '#0F172A',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '1rem',
                      padding: '1rem 1.5rem',
                      borderRadius: '999px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.625rem',
                      boxShadow: '0 10px 25px rgba(15, 23, 42, 0.25)',
                      marginTop: '0.5rem'
                    }}
                  >
                    <Send size={18} color="#84D400" />
                    <span>Send Message</span>
                  </motion.button>

                </form>
              )}
            </motion.div>

            {/* RIGHT COLUMN: Address, Map Card, Email, Phone, Socials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {/* Main Address Card */}
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '1.75rem',
                  padding: '2rem',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.07)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    backgroundColor: '#DCFCE7',
                    color: '#15803D',
                    border: '1px solid #BBF7D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Building size={26} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#15803D', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Headquarters Address
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#0F172A', marginTop: '0.2rem' }}>
                      Cambedor Universe HQ
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <MapPin size={20} color="#15803D" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <p style={{ fontSize: '0.975rem', color: '#334155', lineHeight: '1.6', fontWeight: '600' }}>
                    2nd Floor, D Mart Building, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033
                  </p>
                </div>

                {/* Map Directions Box */}
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '1rem',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #E2E8F0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={18} color="#64748B" />
                    <div>
                      <p style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Office Hours</p>
                      <p style={{ fontSize: '0.875rem', color: '#0F172A', fontWeight: '800' }}>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Madhapur+Hyderabad+Telangana"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundColor: '#0F172A',
                      color: '#84D400',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      padding: '0.45rem 0.9rem',
                      borderRadius: '999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Map</span>
                    <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Direct Contact Cards (Email & Phone) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-info-subgrid">
                {/* Email Item */}
                <motion.a
                  href="mailto:info@cambedor.com"
                  whileHover={{ y: -4, borderColor: '#16A34A' }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                    borderRadius: '1.25rem',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.75rem',
                    backgroundColor: '#DCFCE7',
                    color: '#15803D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Email Us</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0F172A', marginTop: '0.15rem' }}>info@cambedor.com</p>
                  </div>
                </motion.a>

                {/* Phone Item */}
                <motion.a
                  href="tel:+919160335927"
                  whileHover={{ y: -4, borderColor: '#16A34A' }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                    borderRadius: '1.25rem',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '0.75rem',
                    backgroundColor: '#FFEBF0',
                    color: '#E11D48',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>Call Us</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#0F172A', marginTop: '0.15rem' }}>+91 91603 35927</p>
                  </div>
                </motion.a>
              </div>

              {/* Quick Response Banner */}
              <div style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.15)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#84D400',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Rapid Response Guaranteed</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: '0.2rem 0 0 0', lineHeight: '1.4' }}>
                    We aim to answer all founder & student inquiries within 24 hours.
                  </p>
                </div>
              </div>

              {/* Social Connect Box */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '800', color: '#0F172A' }}>Connect on Social</p>
                  <p style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '500' }}>Follow our student ecosystem</p>
                </div>
                <div style={{ display: 'flex', gap: '0.625rem' }}>
                  {[
                    { icon: InstagramIcon, href: '#' },
                    { icon: LinkedinIcon, href: '#' },
                    { icon: YoutubeIcon, href: '#' }
                  ].map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        whileHover={{ scale: 1.1, backgroundColor: '#0F172A', color: '#84D400' }}
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: '#F1F5F9',
                          color: '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                          textDecoration: 'none'
                        }}
                      >
                        <IconComponent />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

            </motion.div>

          </div>

          {/* Bottom Banner Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: '5rem',
              textAlign: 'center',
              padding: '3.5rem 2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '2rem',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <h2 style={{ fontSize: '1.85rem', fontWeight: '900', color: '#0F172A', marginBottom: '0.75rem' }}>
              Join India's Largest Student Community
            </h2>
            <p style={{ fontSize: '0.975rem', color: '#475569', maxWidth: '540px', margin: '0 auto 2rem auto', lineHeight: '1.65', fontWeight: '500' }}>
              Be part of a vibrant ecosystem across 500+ campuses. Connect with top startups, earn stipends, and build proof-of-work.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/explore')}
                style={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(15, 23, 42, 0.2)'
                }}
              >
                <span>Explore Cambedor</span>
                <ArrowRight size={16} color="#84D400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/signup')}
                style={{
                  backgroundColor: '#F1F5F9',
                  color: '#0F172A',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '999px',
                  border: '1px solid #CBD5E1',
                  cursor: 'pointer'
                }}
              >
                For Brands & Startups
              </motion.button>
            </div>
          </motion.div>

        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .contact-info-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default ContactPage;
