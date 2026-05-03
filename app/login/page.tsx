'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast.error(error.message || 'Login failed. Please try again.');
      } else {
        toast.success('Welcome back! 🎉');
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
      minHeight: 'calc(100vh - 80px)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f9fafb',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ 
        maxWidth: '440px', 
        width: '100%', 
        backgroundColor: '#ffffff', 
        borderRadius: '12px', 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '40px',
        border: '1px solid #e5e7eb'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '12px' }}>
              <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '24px' }}>T</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: '#111', letterSpacing: '-0.5px' }}>TILES</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#f97316' }}>GALLERY</span>
            </div>
          </Link>
        </div>

        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '8px' }}>Welcome Back</h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>Sign in to your account to continue</p>
        </div>

        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#f97316'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '14px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#f97316'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          
          <div style={{ textAlign: 'right' }}>
            <Link href="/forgot-password" style={{ fontSize: '13px', color: '#f97316', textDecoration: 'none', fontWeight: '600' }}>
              Forgot password?
            </Link>
          </div>

          
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: isLoading ? '#fb923c' : '#f97316',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              marginTop: '8px'
            }}
            onMouseOver={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#ea580c'; }}
            onMouseOut={(e) => { if (!isLoading) e.currentTarget.style.backgroundColor = '#f97316'; }}
          >
            {isLoading ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg style={{ animation: 'spin 1s linear infinite' }} width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        
        <div style={{ margin: '24px 0', textAlign: 'center' }}>
          <div style={{ borderTop: '1px solid #e5e7eb', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', padding: '0 12px', fontSize: '13px', color: '#6b7280' }}>
              or continue with
            </span>
          </div>
        </div>

        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ 
            flex: 1, 
            padding: '12px', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            backgroundColor: '#fff', 
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151'
          }}>
            Google
          </button>
          <button style={{ 
            flex: 1, 
            padding: '12px', 
            border: '1px solid #d1d5db', 
            borderRadius: '8px', 
            backgroundColor: '#fff', 
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151'
          }}>
            Facebook
          </button>
        </div>

        
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#6b7280' }}>
          Don't have an account?{' '}
          <Link href="/register" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '600' }}>
            Create an account
          </Link>
        </p>
      </div>

      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}