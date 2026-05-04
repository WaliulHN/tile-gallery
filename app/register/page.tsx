'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    try {
      
      const { error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });

      if (error) {
        toast.error(error.message || 'Registration failed. Please try again.');
      } else {
        toast.success('Account created successfully! Welcome aboard! 🎉');
        router.push('/'); 
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fff'
    }}>
      
      
      <div style={{ 
        display: 'none', 
        flex: '1',
        backgroundColor: '#111',
        backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px'
      }} className="hidden md:flex">
        
        
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: '#f97316', filter: 'blur(100px)', opacity: '0.3', borderRadius: '50%' }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, color: '#fff', maxWidth: '400px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>
            Elevate Your Space <span style={{ color: '#f97316' }}>.</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '32px' }}>
            Join TilesGallery to access exclusive collections, track your orders, and get personalized recommendations for your dream interior.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, gap: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '24px', height: '24px', background: '#f97316', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</span>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>Exclusive Member Pricing</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '24px', height: '24px', background: '#f97316', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</span>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>Fast Order Tracking</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '24px', height: '24px', background: '#f97316', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</span>
              <span style={{ fontSize: '16px', fontWeight: '500' }}>24/7 Expert Support</span>
            </li>
          </ul>
        </div>
      </div>

      
      <div style={{ 
        flex: '1', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '40px 20px',
        backgroundColor: '#ffffff'
      }}>
        <div style={{ width: '100%', maxWidth: '450px' }}>
          
      
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#111', marginBottom: '8px' }}>Create Account</h1>
            <p style={{ color: '#6b7280' }}>Enter your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#f97316'; e.target.style.backgroundColor = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.backgroundColor = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#f97316'; e.target.style.backgroundColor = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.backgroundColor = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Password</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Min 8 characters"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#f97316'; e.target.style.backgroundColor = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.backgroundColor = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  backgroundColor: '#f9fafb',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#f97316'; e.target.style.backgroundColor = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.backgroundColor = '#f9fafb'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: isLoading ? '#9ca3af' : '#111', // Dark button for contrast
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                marginTop: '12px'
              }}
              onMouseOver={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#333'; }}
              onMouseOut={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#111'; }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '15px', color: '#6b7280' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '600' }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}