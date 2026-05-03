'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { toast } from 'react-hot-toast';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    toast.success('Proceeding to checkout! 🚀');
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-base-content/70 mb-8">
          Looks like you haven't added any tiles yet.
        </p>
        <Link href="/all-tiles" className="btn btn-primary">
          Browse All Tiles
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item: any) => (
            <div key={item.id} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-primary font-semibold">${item.price}/sqft</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="btn btn-sm btn-circle"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="btn btn-sm btn-circle"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => {
                        removeFromCart(item.id);
                        toast.success('Item removed from cart');
                      }}
                      className="btn btn-sm btn-error mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              clearCart();
              toast.success('Cart cleared!');
            }}
            className="btn btn-outline btn-error"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card bg-base-200 shadow-xl sticky top-4">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Order Summary</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Items:</span>
                  <span className="font-semibold">{cart.length}</span>
                </div>
                <div className="divider my-2"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn btn-primary btn-block mt-6"
              >
                Proceed to Checkout →
              </button>

              <Link href="/all-tiles" className="btn btn-ghost btn-block mt-2">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}