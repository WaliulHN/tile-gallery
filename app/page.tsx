import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      position: 'relative', 
      overflow: 'hidden', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      
      
     backgroundImage: "url('/images/hero-bg.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      
    
      <div style={{ 
        position: 'absolute', 
        top: 0, left: 0, right: 0, bottom: 0, 
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)',
        zIndex: 1
      }}></div>

     
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
        
        
        <div style={{ 
          backgroundColor: 'rgba(249, 115, 22, 0.2)', 
          border: '1px solid rgba(249, 115, 22, 0.5)', 
          borderRadius: '100px', 
          padding: '8px 16px', 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: '32px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#f97316', borderRadius: '50%' }}></span>
          <span style={{ color: '#fdba74', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>NEW COLLECTION 2026</span>
        </div>

        
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          fontWeight: '900', 
          color: '#ffffff', 
          lineHeight: '1.1', 
          marginBottom: '24px', 
          letterSpacing: '-2px',
          maxWidth: '900px'
        }}>
          Redefine Your Space <br />
          <span style={{ 
            background: 'linear-gradient(to right, #f97316, #ea580c, #f97316)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            backgroundSize: '200% auto',
            animation: 'shine 3s linear infinite'
          }}>
            With Premium Tiles
          </span>
        </h1>

        
        <p style={{ 
          fontSize: '18px', 
          color: '#d4d4d4', 
          maxWidth: '600px', 
          lineHeight: '1.6', 
          marginBottom: '48px' 
        }}>
          Discover the finest collection of ceramic, porcelain, and marble tiles. 
          Transform your home with elegance and durability.
        </p>

        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <Link 
            href="/all-tiles" 
            style={{ 
              backgroundColor: '#f97316', 
              color: '#ffffff', 
              padding: '16px 36px', 
              borderRadius: '8px', 
              fontSize: '16px', 
              fontWeight: '700', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)'
            }}
          >
            Explore Collection 
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          
          <Link 
            href="/register" 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#ffffff', 
              padding: '16px 36px', 
              borderRadius: '8px', 
              fontSize: '16px', 
              fontWeight: '700', 
              textDecoration: 'none', 
              border: '1px solid rgba(255,255,255,0.3)', 
              backdropFilter: 'blur(5px)',
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
          >
            Join Now
          </Link>
        </div>

        
        <div style={{ 
          marginTop: '80px', 
          display: 'flex', 
          gap: '40px', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { label: 'Premium Tiles', value: '500+' },
            { label: 'Happy Clients', value: '10k+' },
            { label: 'Showrooms', value: '12' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>{stat.value}</h3>
              <p style={{ fontSize: '14px', color: '#888', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      
      <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </main>
  );
}