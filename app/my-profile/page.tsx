'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function MyProfilePage() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      if (!data) {
        router.push('/login');
        return;
      }
      setSession(data);
      setIsLoading(false);
    };
    fetchSession();
  }, [router]);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success('Logged out successfully!');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div style={{ minHeight: '80vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '50px', height: '50px', border: '3px solid #1e293b', borderTop: '3px solid #14b8a6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>My Profile</h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>Manage your account settings and preferences</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Profile Card */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '24px', 
            padding: '40px', 
            border: '1px solid #1e293b',
            textAlign: 'center'
          }}>
            {/* Profile Image */}
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              backgroundColor: '#1e293b', 
              margin: '0 auto 24px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid #14b8a6'
            }}>
              {session.user.image ? (
                <img 
                  src={session.user.image} 
                  alt={session.user.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ fontSize: '64px', color: '#14b8a6' }}>
                  {session.user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
              {session.user.name}
            </h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '32px' }}>
              {session.user.email}
            </p>

            <button 
              onClick={handleLogout}
              style={{ 
                width: '100%',
                padding: '14px', 
                backgroundColor: 'transparent', 
                color: '#ef4444', 
                border: '1px solid #ef4444', 
                borderRadius: '12px', 
                fontSize: '15px', 
                fontWeight: '600', 
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Logout
            </button>
          </div>

          {/* Profile Details */}
          <div>
            {/* Personal Information */}
            <div style={{ 
              backgroundColor: '#111', 
              borderRadius: '24px', 
              padding: '40px', 
              border: '1px solid #1e293b',
              marginBottom: '32px'
            }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '32px' }}>
                Personal Information
              </h3>

              <div style={{ display: 'grid', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Full Name
                  </label>
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#0a0a0a', 
                    borderRadius: '12px', 
                    border: '1px solid #1e293b',
                    color: '#e2e8f0',
                    fontSize: '15px'
                  }}>
                    {session.user.name}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Email Address
                  </label>
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#0a0a0a', 
                    borderRadius: '12px', 
                    border: '1px solid #1e293b',
                    color: '#e2e8f0',
                    fontSize: '15px'
                  }}>
                    {session.user.email}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Profile Image URL
                  </label>
                  <div style={{ 
                    padding: '16px', 
                    backgroundColor: '#0a0a0a', 
                    borderRadius: '12px', 
                    border: '1px solid #1e293b',
                    color: '#94a3b8',
                    fontSize: '14px',
                    wordBreak: 'break-all'
                  }}>
                    {session.user.image || 'Not set'}
                  </div>
                </div>
              </div>

              <Link 
                href="/my-profile/update"
                style={{ 
                  display: 'inline-block',
                  marginTop: '32px',
                  padding: '16px 32px', 
                  backgroundColor: '#14b8a6', 
                  color: '#fff', 
                  borderRadius: '12px', 
                  textDecoration: 'none', 
                  fontSize: '16px', 
                  fontWeight: '700',
                  transition: 'all 0.3s ease'
                }}
              >
                Update Information →
              </Link>
            </div>

            {/* Account Stats */}
            <div style={{ 
              backgroundColor: '#111', 
              borderRadius: '24px', 
              padding: '40px', 
              border: '1px solid #1e293b'
            }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '32px' }}>
                Account Activity
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ padding: '24px', backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: '#14b8a6', marginBottom: '8px' }}>0</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>Orders Placed</div>
                </div>
                <div style={{ padding: '24px', backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: '#14b8a6', marginBottom: '8px' }}>0</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>Reviews Written</div>
                </div>
              </div>
            </div>
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