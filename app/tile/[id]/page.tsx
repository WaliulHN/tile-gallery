'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { toast } from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';  

const DUMMY_TILES = [
  { id: 1, name: "Marble White Classic", price: 45, category: "Marble", image: "/images/marble-white.jpg", dimensions: "60x60cm, 80x80cm, 120x120cm", finish: "Polished", usage: "Floor, Wall", rating: 4.8, reviews: 124 },
  { id: 2, name: "Slate Dark Grey", price: 35, category: "Slate", image: "/images/slate-grey.jpg", dimensions: "45x45cm, 60x60cm", finish: "Matte", usage: "Outdoor, Floor", rating: 4.6, reviews: 89 },
  { id: 3, name: "Terracotta Rustic", price: 28, category: "Ceramic", image: "/images/terracotta.jpg", dimensions: "30x30cm, 45x45cm", finish: "Textured", usage: "Wall, Decor", rating: 4.5, reviews: 67 },
  { id: 4, name: "Ceramic Blue Ocean", price: 50, category: "Ceramic", image: "/images/ceramic-blue.jpg", dimensions: "20x20cm, 30x30cm", finish: "Glossy", usage: "Bathroom, Wall", rating: 4.7, reviews: 156 },
  { id: 5, name: "Wood Oak Finish", price: 65, category: "Wood", image: "/images/wood-oak.jpg", dimensions: "15x90cm, 20x120cm", finish: "Matte Wood", usage: "Bedroom, Living", rating: 4.9, reviews: 203 },
  { id: 6, name: "Granite Speckled", price: 80, category: "Granite", image: "/images/granite-speckled.jpg", dimensions: "60x60cm, 80x80cm", finish: "Flamed", usage: "Kitchen, Countertop", rating: 4.8, reviews: 178 },
];

export default function TileDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart() as {
  addToCart: (item: any) => void;
  cart: any[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
};
  const [tile, setTile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

useEffect(() => {
  const checkAuthAndLoadTile = async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const result = await authClient.getSession();
    
    // BetterAuth returns data in result.data
    const session = result.data?.session;
    const user = result.data?.user;
    
    if (!session || !user) {
      toast.error("Please log in to view tile details 🔒");
      router.push("/login");
      return;
    }

    const found = DUMMY_TILES.find(t => t.id === Number(params.id));
    if (!found) {
      router.push('/all-tiles');
      return;
    }
    
    setTile(found);
    setIsLoading(false);
  };

  checkAuthAndLoadTile();
}, [params.id, router]);

const handleAddToCart = async () => {
  try {
    const result = await authClient.getSession();
    const session = result.data?.session;
    
    if (!session) {
      toast.error("Please log in to add items to cart 🔒");
      router.push("/login");
      return;
    }

    if (!tile) return;
    
    addToCart({
      id: tile.id,
      name: tile.name,
      price: tile.price,
      image: tile.image,
      quantity: quantity
    });
    
    toast.success(`${tile.name} added to cart! 🛒`);
  } catch (err) {
    console.error('Cart error:', err);
    toast.error("Please login to continue");
    router.push("/login");
  }
};
  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '50px', height: '50px', border: '3px solid #1e293b', borderTop: '3px solid #14b8a6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      </div>
    );
  }

  if (!tile) return null;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e2e8f0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} 
                onMouseOver={(e) => e.currentTarget.style.color = '#14b8a6'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>Home</Link>
          <span>/</span>
          <Link href="/all-tiles" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#14b8a6'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>All Tiles</Link>
          <span>/</span>
          <span style={{ color: '#14b8a6', fontWeight: '600' }}>{tile.name}</span>
        </div>
      </div>

      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left: Image Gallery */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              backgroundColor: '#111',
              border: '1px solid #1e293b',
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={tile.image} 
                alt={tile.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x800/1e293b/94a3b8?text=Tile+Image';
                }}
              />
            </div>
            
          
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: i === 1 ? '2px solid #14b8a6' : '2px solid #1e293b',
                  cursor: 'pointer',
                  opacity: i === 1 ? 1 : 0.6,
                  transition: 'all 0.2s'
                }}>
                  <img src={tile.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

         
          <div>
            
            <span style={{ 
              display: 'inline-block', 
              padding: '6px 16px', 
              backgroundColor: 'rgba(20, 184, 166, 0.1)', 
              color: '#14b8a6', 
              borderRadius: '50px', 
              fontSize: '12px', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              {tile.category}
            </span>

          
            <h1 style={{ 
              fontSize: '42px', 
              fontWeight: '800', 
              color: '#fff', 
              lineHeight: '1.1', 
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              {tile.name}
            </h1>

           
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="18" height="18" fill={star <= Math.floor(tile.rating) ? '#14b8a6' : '#334155'} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ color: '#94a3b8', fontSize: '14px' }}>{tile.rating} ({tile.reviews} reviews)</span>
            </div>

       
            <div style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid #1e293b' }}>
              <span style={{ fontSize: '48px', fontWeight: '800', color: '#14b8a6' }}>${tile.price}</span>
              <span style={{ fontSize: '20px', color: '#64748b', marginLeft: '8px' }}>/ sqft</span>
            </div>

  
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#94a3b8', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quantity (sqft)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={decrementQty}
                  style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#111', color: '#fff', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#14b8a6'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#334155'}
                >
                  -
                </button>
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#fff', minWidth: '40px', textAlign: 'center' }}>{quantity}</span>
                <button 
                  onClick={incrementQty}
                  style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#111', color: '#fff', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#14b8a6'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#334155'}
                >
                  +
                </button>
              </div>
            </div>

            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              <button 
                onClick={handleAddToCart}
                style={{ 
                  flex: 1, 
                  padding: '18px 32px', 
                  borderRadius: '12px', 
                  border: 'none', 
                  background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
                  color: '#fff', 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(20, 184, 166, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(20, 184, 166, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(20, 184, 166, 0.3)';
                }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                Add to Cart
              </button>
              <button style={{ 
                padding: '18px 24px', 
                borderRadius: '12px', 
                border: '1px solid #334155', 
                backgroundColor: 'transparent', 
                color: '#94a3b8', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#14b8a6';
                e.currentTarget.style.color = '#14b8a6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.color = '#94a3b8';
              }}
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>

            {/* Specifications */}
            <div style={{ backgroundColor: '#111', borderRadius: '16px', padding: '24px', border: '1px solid #1e293b' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '4px', textTransform: 'uppercase' }}>Dimensions</span>
                  <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>{tile.dimensions}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '4px', textTransform: 'uppercase' }}>Finish</span>
                  <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>{tile.finish}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '4px', textTransform: 'uppercase' }}>Usage</span>
                  <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>{tile.usage}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '12px', color: '#64748b', marginBottom: '4px', textTransform: 'uppercase' }}>Material</span>
                  <span style={{ fontSize: '14px', color: '#e2e8f0', fontWeight: '500' }}>{tile.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <div style={{ marginTop: '80px' }}>
          <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #1e293b', marginBottom: '32px' }}>
            {['description', 'features', 'reviews'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  padding: '16px 0', 
                  background: 'none', 
                  border: 'none', 
                  color: activeTab === tab ? '#14b8a6' : '#64748b', 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  borderBottom: activeTab === tab ? '2px solid #14b8a6' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ maxWidth: '800px' }}>
            {activeTab === 'description' && (
              <div>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#94a3b8' }}>
                  Premium quality {tile.category.toLowerCase()} tile perfect for residential and commercial spaces. 
                  Durable, stylish, and easy to maintain. Available in multiple sizes and finishes. 
                  Crafted with precision to ensure consistency in color and texture. Ideal for creating 
                  elegant interiors that stand the test of time.
                </p>
              </div>
            )}
            {activeTab === 'features' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {['High durability & scratch resistant', 'Waterproof & stain resistant', 'Easy to clean & maintain', 'Available in multiple sizes', 'Eco-friendly materials', 'Anti-slip surface'].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1e293b' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(20, 184, 166, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14b8a6', fontSize: '14px' }}>✓</div>
                    <span style={{ color: '#e2e8f0', fontSize: '14px' }}>{feature}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { name: 'Sarah M.', rating: 5, text: 'Absolutely stunning tiles! The quality is exceptional and the color matches perfectly.', date: '2 weeks ago' },
                  { name: 'James K.', rating: 4, text: 'Great product, fast delivery. Would recommend for anyone renovating their bathroom.', date: '1 month ago' },
                ].map((review, i) => (
                  <div key={i} style={{ padding: '24px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1e293b' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14b8a6', fontWeight: '700' }}>{review.name[0]}</div>
                        <div>
                          <span style={{ display: 'block', color: '#fff', fontWeight: '600', fontSize: '14px' }}>{review.name}</span>
                          <span style={{ color: '#64748b', fontSize: '12px' }}>{review.date}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} width="16" height="16" fill={star <= review.rating ? '#14b8a6' : '#334155'} viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>{review.text}</p> 
                  </div>
                ))}
              </div>
            )}
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