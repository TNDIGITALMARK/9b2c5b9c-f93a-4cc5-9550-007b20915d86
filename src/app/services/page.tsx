'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target,
  Globe2,
  Palette,
  Megaphone,
  BarChart,
  Share2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Digital Strategy and Planning',
    description: 'Comprehensive digital roadmaps tailored to your market position and business objectives.'
  },
  {
    icon: Globe2,
    title: 'International Market Entry',
    description: 'Expert guidance for expanding your business into new global markets with confidence.'
  },
  {
    icon: Palette,
    title: 'Brand Development and Positioning',
    description: 'Create powerful brand identities that resonate with your target audience worldwide.'
  },
  {
    icon: Megaphone,
    title: 'Multi-Channel Campaign Management',
    description: 'Coordinated campaigns across digital, social, and traditional media channels.'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics and Optimization',
    description: 'Data-driven insights and continuous optimization to maximize your marketing ROI.'
  },
  {
    icon: Share2,
    title: 'Global Social Media Management',
    description: 'Build and engage audiences across international social media platforms.'
  }
];

const portfolioItems = [
  {
    image: '/generated/portfolio-retail.png',
    title: 'Retail Expansion Project',
    category: 'E-Commerce',
    result: 'Successfully entered 12 new markets',
    metrics: ['400% revenue growth', '12 countries', '50K+ new customers']
  },
  {
    image: '/generated/portfolio-branding.png',
    title: 'Brand Repositioning Campaign',
    category: 'Brand Strategy',
    result: 'Increased brand recognition by 400%',
    metrics: ['400% brand lift', '2M+ impressions', '98% positive sentiment']
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase">
              SERVICES & PORTFOLIO
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive marketing solutions designed to accelerate your global growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              A complete suite of marketing services to help you dominate your market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--black))] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-[hsl(var(--background))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Portfolio Showcase
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Real results from real clients. See how we&apos;ve helped businesses achieve extraordinary growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-red))] text-white text-xs font-semibold uppercase tracking-wider rounded mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-xl font-bold text-[hsl(var(--brand-red))] mb-4">
                    {item.result}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[hsl(var(--brand-red))] rounded-full" />
                        <span className="text-[hsl(var(--gray-text))]">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-[hsl(var(--brand-red))] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our proven strategies can accelerate your global growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] text-white px-10 py-5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
