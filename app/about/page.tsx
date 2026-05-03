'use client';

import Link from 'next/link';

export default function AboutPage() {
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
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
        
        
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          right: '10%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '40px', maxWidth: '900px' }}>
          <span style={{ 
            display: 'inline-block', 
            padding: '8px 20px', 
            backgroundColor: 'rgba(20, 184, 166, 0.1)', 
            border: '1px solid rgba(20, 184, 166, 0.3)',
            borderRadius: '50px', 
            color: '#14b8a6', 
            fontSize: '14px', 
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '24px'
          }}>
            About Us
          </span>
          <h1 style={{ 
            fontSize: 'clamp(36px, 6vw, 64px)', 
            fontWeight: '800', 
            color: '#fff', 
            lineHeight: '1.1', 
            marginBottom: '20px',
            letterSpacing: '-2px'
          }}>
            Crafting Beautiful Spaces<br />
            <span style={{ color: '#14b8a6' }}>Since 2020</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            Premium quality tiles for every space in your home. We bring elegance and durability to Bangladesh.
          </p>
        </div>
      </div>

      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span style={{ 
              display: 'inline-block', 
              color: '#14b8a6', 
              fontSize: '14px', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              marginBottom: '16px'
            }}>
              Our Story
            </span>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: '#fff', 
              lineHeight: '1.2', 
              marginBottom: '24px',
              letterSpacing: '-1px'
            }}>
              Every Floor Tells a Story
            </h2>
            <div style={{ space: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#94a3b8' }}>
                At TilesGallery, we believe that every floor tells a story. Since 2020, we have been dedicated to bringing the finest selection of tiles to Bangladesh. From elegant marble to durable ceramics, our collection is curated to elevate your interior design.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#94a3b8' }}>
                We work directly with top manufacturers to ensure you get the best prices and quality. Whether you are renovating your kitchen or building a new home, we are your partner in creating beautiful spaces.
              </p>
            </div>
            
            <div style={{ marginTop: '40px', display: 'flex', gap: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#14b8a6', lineHeight: '1' }}>5+</div>
                <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>Years Experience</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#1e293b' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#14b8a6', lineHeight: '1' }}>500+</div>
                <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>Tile Designs</div>
              </div>
              <div style={{ width: '1px', backgroundColor: '#1e293b' }}></div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#14b8a6', lineHeight: '1' }}>10k+</div>
                <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              backgroundColor: '#1e293b',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #334155'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                alt="Our Showroom"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              left: '-30px', 
              width: '200px', 
              height: '200px', 
              backgroundColor: '#14b8a6', 
              borderRadius: '24px', 
              opacity: '0.1',
              zIndex: -1
            }}></div>
          </div>
        </div>
      </div>

    
      <div style={{ backgroundColor: '#0f172a', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ 
              color: '#14b8a6', 
              fontSize: '14px', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '2px'
            }}>
              Why Choose Us
            </span>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: '#fff', 
              marginTop: '12px',
              letterSpacing: '-1px'
            }}>
              Our Core Values
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { icon: '🏆', title: 'Premium Quality', desc: 'We source only the finest materials from trusted manufacturers worldwide.' },
              { icon: '💰', title: 'Best Prices', desc: 'Direct relationships with suppliers mean better prices for you.' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Quick and reliable delivery service across Bangladesh.' },
              { icon: '🎨', title: 'Expert Design', desc: 'Our team provides expert consultation for your design needs.' },
              { icon: '✓', title: 'Quality Assurance', desc: 'Every tile is inspected to ensure it meets our high standards.' },
              { icon: '🤝', title: 'Customer First', desc: 'Your satisfaction is our top priority, always.' },
            ].map((value, i) => (
              <div key={i} style={{ 
                padding: '32px', 
                backgroundColor: '#111', 
                borderRadius: '16px', 
                border: '1px solid #1e293b',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#14b8a6';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(20, 184, 166, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div style={{ 
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.1) 1px, transparent 0)',
          backgroundSize: '30px 30px',
          opacity: 0.5
        }}></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: '#fff',
              letterSpacing: '-1px'
            }}>
              Our Impact in Numbers
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { number: '5,000+', label: 'Happy Customers', suffix: '' },
              { number: '200+', label: 'Tile Designs', suffix: '' },
              { number: '5+', label: 'Years Experience', suffix: '' },
              { number: '10', label: 'Awards Won', suffix: '' },
              { number: '50+', label: 'Expert Staff', suffix: '' },
              { number: '100%', label: 'Satisfaction', suffix: '' },
            ].map((stat, i) => (
              <div key={i} style={{ 
                textAlign: 'center', 
                padding: '40px 24px',
                backgroundColor: 'rgba(17, 17, 17, 0.6)',
                borderRadius: '16px',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '56px', fontWeight: '800', color: '#14b8a6', lineHeight: '1', marginBottom: '12px' }}>
                  {stat.number}{stat.suffix}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '16px', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div style={{ 
        padding: '120px 24px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            color: '#fff', 
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Ready to Transform Your Space?
          </h2>
          <p style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', lineHeight: '1.7' }}>
            Explore our premium collection of tiles and find the perfect match for your dream home.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/all-tiles"
              style={{ 
                padding: '18px 40px', 
                backgroundColor: '#fff', 
                color: '#0d9488', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontSize: '16px', 
                fontWeight: '700',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              Explore Collection
            </Link>
            <Link 
              href="/contact"
              style={{ 
                padding: '18px 40px', 
                backgroundColor: 'transparent', 
                color: '#fff', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                fontSize: '16px', 
                fontWeight: '700',
                border: '2px solid rgba(255,255,255,0.3)',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}