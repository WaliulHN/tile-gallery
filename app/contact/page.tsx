'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Simulate sending
    toast.success('Message sent successfully! We will contact you soon.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-base-content/70">Have a question about our tiles? Send us a message!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Our Location</h2>
              <p className="text-base-content/70">123 Tile Street, Ceramic Avenue, Dhaka, Bangladesh</p>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Contact Info</h2>
              <p className="text-base-content/70">📞 +880 1234 567890</p>
              <p className="text-base-content/70">✉️ info@tilesgallery.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Name *</span></label>
                <input 
                  type="text" 
                  name="name"
                  className="input input-bordered"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Email *</span></label>
                <input 
                  type="email" 
                  name="email"
                  className="input input-bordered"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Subject</span></label>
                <input 
                  type="text" 
                  name="subject"
                  className="input input-bordered"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about..."
                />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Message *</span></label>
                <textarea 
                  name="message"
                  className="textarea textarea-bordered h-32"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}