'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { toast } from 'react-hot-toast';

export default function CheckoutPage() {
  const router = useRouter();
  
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  
  
const { cart, totalPrice, clearCart } = useCart() as {
  cart: any[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;  
  totalPrice: number;
};

  

  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty!</h1>
        <button onClick={() => router.push('/all-tiles')} className="btn btn-primary">
          Go Shopping
        </button>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Order Placed:', {
        customer: formData,
        items: cart,
        total: totalPrice
      });

    
      clearCart();
      
    
      toast.success('Order placed successfully! 🎉');
      
    
      router.push('/');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout </h1>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Checkout Form */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Shipping Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Full Name *</span></label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  className="input input-bordered w-full"
                  placeholder="John Doe"
              value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Phone Number *</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  className="input input-bordered w-full"
                  placeholder="01712345678"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Address *</span></label>
                <textarea 
                  name="address"
                  required
                  className="textarea textarea-bordered h-24"
                  placeholder="House 123, Road 45, Area..."
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">City *</span></label>
                <input 
                  type="text" 
                  name="city"
                  required
                  className="input input-bordered w-full"
                  placeholder="Dhaka"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary btn-block mt-6 text-lg"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  `Pay $${totalPrice.toFixed(2)} & Place Order`
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card bg-base-200 shadow-xl sticky top-4">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Order Summary</h2>
              
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {cart.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-base-300 pb-2">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-base-content/60">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="divider my-4"></div>
              
              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount:</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}