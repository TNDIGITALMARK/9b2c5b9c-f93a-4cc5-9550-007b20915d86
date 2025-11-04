'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase hero-text-dark">
              Let&apos;s Connect
            </h1>
            <p className="text-xl hero-subtext-dark">
              Start your journey to global market leadership. We&apos;re ready to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-6 uppercase">
                  Get in Touch
                </h2>
                <p className="text-lg text-[hsl(var(--gray-text))] leading-relaxed mb-8">
                  Ready to take your business to the next level? Our team of experts is here to help you craft a winning strategy for global success.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[hsl(var(--border))] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                      Email Us
                    </h3>
                    <p className="text-[hsl(var(--gray-text))]">
                      info@marketglobal.com
                    </p>
                    <p className="text-[hsl(var(--gray-text))]">
                      support@marketglobal.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[hsl(var(--border))] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                      Call Us
                    </h3>
                    <p className="text-[hsl(var(--gray-text))]">
                      +1 (555) 123-4567 (US)
                    </p>
                    <p className="text-[hsl(var(--gray-text))]">
                      +44 20 1234 5678 (UK)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[hsl(var(--border))] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                      Visit Us
                    </h3>
                    <p className="text-[hsl(var(--gray-text))]">
                      123 Marketing Street
                      <br />
                      New York, NY 10001, USA
                    </p>
                    <p className="text-[hsl(var(--gray-text))] mt-2">
                      45 Business Avenue
                      <br />
                      London EC1A 1BB, UK
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
                  Why Work With Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                    <span className="text-[hsl(var(--gray-text))]">98% client retention rate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                    <span className="text-[hsl(var(--gray-text))]">500+ successful campaigns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                    <span className="text-[hsl(var(--gray-text))]">Global presence in 50+ countries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0" />
                    <span className="text-[hsl(var(--gray-text))]">24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 border border-[hsl(var(--border))] shadow-md">
              <h2 className="text-2xl font-bold text-[hsl(var(--black))] mb-6 uppercase">
                Send Us a Message
              </h2>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="strategy">Digital Strategy & Planning</option>
                      <option value="international">International Market Entry</option>
                      <option value="branding">Brand Development</option>
                      <option value="campaigns">Multi-Channel Campaigns</option>
                      <option value="analytics">Performance Analytics</option>
                      <option value="social">Social Media Management</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors"
                    >
                      <option value="">Select a range</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[hsl(var(--black))] mb-2 uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-lg focus:border-[hsl(var(--brand-red))] focus:ring-2 focus:ring-[hsl(var(--brand-red))]/20 transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--brand-red))] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg flex items-center justify-center gap-2 group btn-red-text"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
