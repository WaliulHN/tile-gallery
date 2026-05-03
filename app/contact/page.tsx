'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      toast.success('Message sent successfully! We will contact you soon. 📩');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        padding: '100px 24px 60px', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ 
            display: 'inline-block', 
            padding: '8px 20px', 
            backgroundColor: 'rgba(20, 184, 166, 0.1)', 
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '50px', 
            color: '#14b8a6', 
            fontSize: '14px', 
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '24px'
          }}>
            Get in Touch
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 6vw, 56px)', 
            fontWeight: '800', 
            color: '#fff', 
            lineHeight: '1.1', 
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Let's Start a <span style={{ color: '#14b8a6' }}>Conversation</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', lineHeight: '1.7' }}>
            Have a question about our tiles? Need design advice? We're here to help you create beautiful spaces.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>
          
          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '32px' }}>
              Contact Information
            </h2>
            
            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
              {[
                { icon: '📍', title: 'Visit Us', detail: '123 Tile Street, Ceramic Avenue\nDhaka, Bangladesh', link: '#' },
                { icon: '', title: 'Call Us', detail: '+880 1234 567890\nMon-Sat, 9am-6pm', link: 'tel:+8801234567890' },
                { icon: '✉️', title: 'Email Us', detail: 'info@tilesgallery.com\nsupport@tilesgallery.com', link: 'mailto:info@tilesgallery.com' },
              ].map((info, i) => (
                <a 
                  key={i}
                  href={info.link}
                  style={{ 
                    textDecoration: 'none',
                    padding: '24px', 
                    backgroundColor: '#111', 
                    borderRadius: '16px', 
                    border: '1px solid #1e293b',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease',
                    color: 'inherit'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#14b8a6';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#1e293b';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{info.title}</h3>
                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{info.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#111',
                      border: '1px solid #1e293b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#14b8a6';
                      e.currentTarget.style.borderColor = '#14b8a6';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#111';
                      e.currentTarget.style.borderColor = '#1e293b';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
                      {social === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
                      {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
                      {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '24px', 
            padding: '48px', 
            border: '1px solid #1e293b'
          }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
              Send Us a Message
            </h2>
            <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '40px' }}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Name & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '15px',
                      border: '1px solid #1e293b',
                      borderRadius: '12px',
                      backgroundColor: '#0a0a0a',
                      color: '#fff',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#14b8a6';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#1e293b';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '15px',
                      border: '1px solid #1e293b',
                      borderRadius: '12px',
                      backgroundColor: '#0a0a0a',
                      color: '#fff',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#14b8a6';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#1e293b';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>
                  Subject
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about tiles..."
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '15px',
                    border: '1px solid #1e293b',
                    borderRadius: '12px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#14b8a6';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#1e293b';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '15px',
                    border: '1px solid #1e293b',
                    borderRadius: '12px',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#14b8a6';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#1e293b';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  padding: '18px', 
                  backgroundColor: isSubmitting ? '#0d9488' : '#14b8a6', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginTop: '8px'
                }}
                onMouseOver={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#0d9488'; }}
                onMouseOut={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#14b8a6'; }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}