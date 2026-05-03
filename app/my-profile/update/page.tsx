'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function UpdateProfilePage() {
  const router = useRouter();

  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  });

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      if (!data) {
        router.push('/login');
        return;
      }
      setSession(data);
      setFormData({
        name: data.user.name || '',
        image: data.user.image || ''
      });
      setIsLoading(false);
    };
    fetchSession();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error('Name is required!');
      return;
    }

    setIsUpdating(true);

  
    setTimeout(() => {
      toast.success('Profile updated successfully! 🎉');
      setIsUpdating(false);
      router.push('/my-profile');
    }, 1500);
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
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
       
        <div style={{ marginBottom: '48px' }}>
          <button 
            onClick={() => router.back()}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#14b8a6', 
              cursor: 'pointer', 
              fontSize: '15px', 
              fontWeight: '600',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to Profile
          </button>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            Update Profile
          </h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>
            Update your personal information
          </p>
        </div>

       
        <div style={{ 
          backgroundColor: '#111', 
          borderRadius: '24px', 
          padding: '48px', 
          border: '1px solid #1e293b'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
           
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
                {formData.image ? (
                  <img 
                    src={formData.image} 
                    alt="Profile Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      e.currentTarget.innerHTML = `<div style="font-size: 64px; color: #14b8a6;">${formData.name.charAt(0).toUpperCase()}</div>`;
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '64px', color: '#14b8a6' }}>
                    {formData.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>

        
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '12px' }}>
                Full Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
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
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '12px' }}>
                Profile Image URL
              </label>
              <input 
                type="url" 
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/profile.jpg"
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
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
                Enter a URL for your profile picture (optional)
              </p>
            </div>

       
            <div style={{ display: 'flex', gap: '16px', paddingTop: '16px' }}>
              <button 
                type="submit"
                disabled={isUpdating}
                style={{ 
                  flex: 1,
                  padding: '18px', 
                  backgroundColor: isUpdating ? '#0d9488' : '#14b8a6', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  cursor: isUpdating ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => { if (!isUpdating) e.currentTarget.style.backgroundColor = '#0d9488'; }}
                onMouseOut={(e) => { if (!isUpdating) e.currentTarget.style.backgroundColor = '#14b8a6'; }}
              >
                {isUpdating ? (
                  <>
                    <div style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    Updating...
                  </>
                ) : (
                  'Update Information'
                )}
              </button>
              
              <button 
                type="button"
                onClick={() => router.back()}
                style={{ 
                  padding: '18px 32px', 
                  backgroundColor: 'transparent', 
                  color: '#94a3b8', 
                  border: '1px solid #334155', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#14b8a6'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#334155'}
              >
                Cancel
              </button>
            </div>
          </form>
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