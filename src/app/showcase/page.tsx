'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, TrendingUp, Globe2, Award } from 'lucide-react';

// Different-sized blocks for different price points
const showcaseItems = [
  {
    size: 'premium', // Large featured block
    company: 'TechVision AI',
    logo: '/generated/portfolio-branding.png',
    tagline: 'Revolutionary AI Solutions for Enterprise',
    description: 'Leading the future of artificial intelligence with cutting-edge machine learning platforms that transform business operations.',
    category: 'Technology',
    metrics: [
      { label: 'Global Clients', value: '500+' },
      { label: 'Countries', value: '45' },
      { label: 'Success Rate', value: '99%' }
    ],
    featured: true,
    link: '#'
  },
  {
    size: 'standard', // Medium block
    company: 'GlobalTrade Connect',
    logo: '/generated/portfolio-retail.png',
    tagline: 'Connecting Markets Worldwide',
    description: 'Premier B2B marketplace facilitating international trade connections and supply chain optimization.',
    category: 'E-Commerce',
    featured: false,
    link: '#'
  },
  {
    size: 'standard',
    company: 'FinanceFlow Pro',
    logo: '/generated/portfolio-branding.png',
    tagline: 'Smart Financial Management',
    description: 'Cloud-based financial software helping businesses streamline accounting and financial planning.',
    category: 'Finance',
    featured: false,
    link: '#'
  },
  {
    size: 'compact', // Small block
    company: 'EcoPackaging Solutions',
    logo: '/generated/portfolio-retail.png',
    tagline: 'Sustainable Packaging',
    description: 'Eco-friendly packaging solutions for conscious businesses.',
    category: 'Manufacturing',
    link: '#'
  },
  {
    size: 'compact',
    company: 'HealthHub Digital',
    logo: '/generated/portfolio-branding.png',
    tagline: 'Telemedicine Platform',
    description: 'Connecting patients with healthcare providers globally.',
    category: 'Healthcare',
    link: '#'
  },
  {
    size: 'compact',
    company: 'LearningBridge',
    logo: '/generated/portfolio-retail.png',
    tagline: 'Education Technology',
    description: 'Interactive learning platform for modern education.',
    category: 'Education',
    link: '#'
  }
];

const pricingTiers = [
  {
    name: 'Compact Listing',
    price: '$500/month',
    features: [
      'Small showcase block',
      'Company name & tagline',
      'Brief description',
      'Link to your website',
      'Category badge'
    ]
  },
  {
    name: 'Standard Listing',
    price: '$1,200/month',
    features: [
      'Medium showcase block',
      'Enhanced company profile',
      'Detailed description',
      'Logo & imagery',
      'Contact information',
      'Social media links'
    ],
    popular: true
  },
  {
    name: 'Premium Featured',
    price: '$3,000/month',
    features: [
      'Large featured block',
      'Priority placement',
      'Full company profile',
      'Detailed metrics display',
      'Video content support',
      'Dedicated account manager',
      'Monthly performance reports'
    ]
  }
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase hero-text-dark">
              BUSINESS SHOWCASE
            </h1>
            <p className="text-xl hero-subtext-dark">
              Discover innovative businesses making an impact in the global marketplace
            </p>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Featured Businesses
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Explore leading companies and innovative solutions from around the world
            </p>
          </div>

          {/* Dynamic Grid Layout */}
          <div className="space-y-8">
            {/* Premium Featured Items */}
            {showcaseItems.filter(item => item.size === 'premium').map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border-2 border-[hsl(var(--brand-red))]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden bg-gray-100">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-4 py-2 bg-[hsl(var(--brand-red))] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-12">
                    <span className="inline-block px-3 py-1 bg-[hsl(var(--pink-accent))] text-[hsl(var(--brand-red))] text-xs font-semibold uppercase tracking-wider rounded mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-bold text-[hsl(var(--black))] mb-3">
                      {item.company}
                    </h3>
                    <p className="text-xl text-[hsl(var(--brand-red))] font-semibold mb-6">
                      {item.tagline}
                    </p>
                    <p className="text-[hsl(var(--gray-text))] leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {item.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {item.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-4 bg-[hsl(var(--background))] rounded-lg">
                            <div className="text-2xl font-bold text-[hsl(var(--brand-red))]">
                              {metric.value}
                            </div>
                            <div className="text-xs text-[hsl(var(--gray-text))] mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-8 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Standard Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {showcaseItems.filter(item => item.size === 'standard').map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-[hsl(var(--pink-accent))] text-[hsl(var(--brand-red))] text-xs font-semibold uppercase tracking-wider rounded mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[hsl(var(--black))] mb-2">
                      {item.company}
                    </h3>
                    <p className="text-lg text-[hsl(var(--brand-red))] font-semibold mb-4">
                      {item.tagline}
                    </p>
                    <p className="text-[hsl(var(--gray-text))] leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-[hsl(var(--brand-red))] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                    >
                      Visit Website
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {showcaseItems.filter(item => item.size === 'compact').map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[hsl(var(--border))] rounded-xl p-6 hover:shadow-md transition-all group"
                >
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--pink-accent))] text-[hsl(var(--brand-red))] text-xs font-semibold uppercase tracking-wider rounded mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[hsl(var(--black))] mb-2">
                    {item.company}
                  </h3>
                  <p className="text-sm text-[hsl(var(--brand-red))] font-semibold mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-[hsl(var(--gray-text))] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[hsl(var(--brand-red))] font-semibold text-xs uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Showcase Your Business
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Choose the listing package that best fits your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border-2 transition-all hover:shadow-lg ${
                  tier.popular
                    ? 'border-[hsl(var(--brand-red))] shadow-lg relative'
                    : 'border-[hsl(var(--border))]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-[hsl(var(--brand-red))] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[hsl(var(--brand-red))]">
                    {tier.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-[hsl(var(--brand-red))] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--gray-text))]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${
                    tier.popular
                      ? 'bg-[hsl(var(--brand-red))] hover:bg-[hsl(var(--brand-red-dark))] shadow-red hover:shadow-lg btn-red-text'
                      : 'bg-[hsl(var(--black))] text-white hover:bg-[hsl(var(--brand-red))]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase hero-text-dark">
            Ready to Showcase Your Business?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto hero-subtext-dark">
            Join leading companies in our business showcase and expand your global reach
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-10 py-5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
