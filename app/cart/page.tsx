'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { toast } from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';

export default function CartPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
 
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalPrice 
  } = useCart() as {
    cart: any[];
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);


useEffect(() => {
  const checkAuth = async () => {
    try {
      // Try to get session, but catch the error if it fails
      const result = await authClient.getSession().catch(() => null);
      
      if (result?.session) {
        setSession(result.session);
      }
    } catch (error) {
      console.error("Cart auth check failed:", error);
      // Keep going even if auth fails
    }
  };

  checkAuth();
}, []);

  const cartItems = Array.isArray(cart) ? cart : [];

  const handleCheckout = () => {
    toast.success('Proceeding to checkout! 🚀');
  };
if (!cart || (cart as any[]).length === 0) {
    return (
      <div style={{
        minHeight: '80vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e2e8f0',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          backgroundColor: '#111', 
          border: '2px solid #1e293b', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '40px',
          marginBottom: '32px'
        }}>🛒</div>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>Your Cart is Empty</h1>
        <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px', maxWidth: '400px', textAlign: 'center' }}>
          Looks like you haven't added any tiles yet. Browse our premium collection to find the perfect match.
        </p>
        <Link 
          href="/all-tiles" 
          style={{ 
            padding: '16px 40px', 
            backgroundColor: '#14b8a6', 
            color: '#fff', 
            borderRadius: '12px', 
            textDecoration: 'none', 
            fontSize: '16px', 
            fontWeight: '700',
            transition: 'all 0.3s ease'
          }}
        >
          Browse All Tiles
        </Link>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#e2e8f0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '60px 24px 100px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>Shopping Cart</h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>
            You have <span style={{ color: '#14b8a6', fontWeight: '600' }}>{cartItems.length}</span> {cartItems.length === 1 ? 'item' : 'items'} in your cart.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Cart Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {cartItems.map((item: any) => (
              <div 
                key={item.id} 
                style={{ 
                  backgroundColor: '#111', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  border: '1px solid #1e293b',
                  display: 'flex', 
                  gap: '24px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = '#14b8a6'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = '#1e293b'}
              >
                {/* Image */}
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  backgroundColor: '#1e293b',
                  flexShrink: 0
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/150x150/1e293b/94a3b8?text=Tile'; }}
                  />
                </div>

               
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Link 
                      href={`/tile/${item.id}`} 
                      style={{ color: '#fff', textDecoration: 'none', fontSize: '20px', fontWeight: '700' }}
                    >
                      {item.name}
                    </Link>
                    <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Premium {item.category || 'Tile'} Collection</p>
                    <p style={{ color: '#14b8a6', fontSize: '18px', fontWeight: '600', marginTop: '8px' }}>${item.price} <span style={{ fontSize: '14px', color: '#64748b' }}>/ sqft</span></p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        style={{ 
                          width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #334155', 
                          backgroundColor: 'transparent', color: '#e2e8f0', fontSize: '18px', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          opacity: item.quantity <= 1 ? 0.5 : 1
                        }}
                      >−</button>
                      <span style={{ fontSize: '16px', fontWeight: '600', minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ 
                          width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #334155', 
                          backgroundColor: 'transparent', color: '#e2e8f0', fontSize: '18px', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                      >+</button>
                    </div>

                  
                    <button 
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success('Item removed from cart');
                      }}
                      style={{ 
                        background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', 
                        fontSize: '14px', fontWeight: '600', textDecoration: 'underline'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button 
              onClick={() => {
                clearCart();
                toast.success('Cart cleared!');
              }}
              style={{ 
                alignSelf: 'flex-start',
                padding: '12px 24px', 
                backgroundColor: 'transparent', 
                color: '#94a3b8', 
                border: '1px solid #334155', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '16px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#ef4444';
                e.currentTarget.style.color = '#ef4444';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{ 
              backgroundColor: '#111', 
              borderRadius: '16px', 
              padding: '32px', 
              border: '1px solid #1e293b'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '32px' }}>Order Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '16px' }}>
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '16px' }}>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#1e293b', margin: '8px 0' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '20px', fontWeight: '700' }}>
                  <span>Total</span>
                  <span style={{ color: '#14b8a6' }}>${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                style={{ 
                  width: '100%', 
                  padding: '18px', 
                  backgroundColor: '#14b8a6', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '12px', 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  cursor: 'pointer',
                  marginBottom: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0d9488'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#14b8a6'}
              >
                Proceed to Checkout →
              </button>

              <Link 
                href="/all-tiles" 
                style={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  color: '#94a3b8', 
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  fontWeight: '600'
                }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}