'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: '#0f172a', 
      color: '#e2e8f0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
 
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #14b8a6, transparent)',
        opacity: '0.5'
      }}></div>
      
      <div style={{ 
        position: 'absolute', 
        bottom: '20%', 
        right: '10%', 
        width: '400px', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 40px', position: 'relative', zIndex: 10 }}>
        
        {/* Top Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px', 
          marginBottom: '60px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          
        
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                }}>
                  <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '22px' }}>T</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: '#f1f5f9', letterSpacing: '-0.5px' }}>TILES</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#14b8a6' }}>GALLERY</span>
                </div>
              </div>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
              Transforming spaces with premium quality tiles since 2020. Quality meets elegance.
            </p>
            
           
            <div style={{ display: 'flex', gap: '12px' }}>
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(148, 163, 184, 0.1)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#14b8a6';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 184, 166, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(148, 163, 184, 0.1)';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
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

     
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['All Tiles', 'About Us', 'Contact', 'My Profile'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'All Tiles' ? '/all-tiles' : link === 'About Us' ? '/about' : link === 'Contact' ? '/contact' : '/my-profile'}
                    style={{ 
                      color: '#94a3b8', 
                      textDecoration: 'none', 
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#14b8a6';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    → {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Get in Touch</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#94a3b8', fontSize: '15px' }}>
                <span style={{ color: '#14b8a6', fontSize: '18px' }}>📍</span>
                <span>123 Tile Street, Ceramic Avenue<br />Dhaka, Bangladesh</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '15px' }}>
                <span style={{ color: '#14b8a6' }}>📞</span>
                <span>+880 1234 567890</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '15px' }}>
                <span style={{ color: '#14b8a6' }}>✉️</span>
                <span>info@tilesgallery.com</span>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#f1f5f9', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Newsletter</h3>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '20px', lineHeight: '1.6' }}>
              Subscribe for exclusive deals and new arrivals.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  color: '#f1f5f9',
                  fontSize: '14px',
                  outline: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#14b8a6';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(20, 184, 166, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button 
                type="submit"
                style={{
                  padding: '12px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(20, 184, 166, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(20, 184, 166, 0.3)';
                }}
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

     
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '30px'
        }}>
          <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
            © {currentYear} TilesGallery. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link 
                key={item}
                href="#"
                style={{ 
                  color: '#64748b', 
                  fontSize: '14px', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#14b8a6'}
                onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}