'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const isLoading = false;
    const session = null;
  const pathname = usePathname();
   // Temporarily disable loading state

  // ADD THIS FUNCTION
  const handleLogout = async () => {
   await authClient.signOut();
toast.success('Logged out successfully!');
window.location.href = '/';
  };

  // ... rest of your code
useEffect(() => {
  authClient.getSession().catch(() => {
    // Auth check failed, continue anyway
  }).finally(() => {
    setIsLoading(false);
  });
}, []);



  const navLinks = [
    { label: 'PRODUCTS', href: '/all-tiles' },
    { label: 'COMPANY', href: '/about' },
    { label: 'WHERE TO BUY', href: '/cart' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }}>
            <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>T</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#111', letterSpacing: '-0.5px' }}>TILES</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#f97316', marginTop: '1px' }}>GALLERY</span>
          </div>
        </Link>

        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  color: isActive ? '#f97316' : '#333', 
                  textDecoration: 'none', 
                  letterSpacing: '0.5px', 
                  transition: 'color 0.2s',
                  borderBottom: isActive ? '2px solid #f97316' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
                onMouseOver={(e) => { if (!isActive) e.currentTarget.style.color = '#f97316'; }}
                onMouseOut={(e) => { if (!isActive) e.currentTarget.style.color = '#333'; }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
       {session?.user ? (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Link href="/my-profile" style={{ textDecoration: 'none', color: '#333' }}>
        {session.user.name}
      </Link>
      <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: '600' }}>
        Logout
      </button>
    </div>
  </>
) : (
  
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Link 
    href="/login" 
    style={{ 
      textDecoration: 'none', 
      color: '#333',
      fontWeight: '600',
      fontSize: '13px'
    }}
  >
    Login
  </Link>
  <Link 
    href="/register" 
    style={{ 
      background: '#f97316',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '13px'
    }}
  >
    Register
  </Link>
</div>
)}
          
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', padding: '4px' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          
          
        <button style={{ backgroundColor: '#f97316', border: 'none', cursor: 'pointer', padding: '8px 10px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}