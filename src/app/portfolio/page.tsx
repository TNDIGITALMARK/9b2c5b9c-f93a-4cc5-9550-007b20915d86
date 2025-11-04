'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Target, Award } from 'lucide-react';

const portfolioProjects = [
  {
    image: '/generated/portfolio-retail.png',
    title: 'Global Retail Expansion',
    category: 'E-Commerce Strategy',
    client: 'Fashion Retailer',
    result: 'Successfully entered 12 new markets across Europe and Asia',
    metrics: [
      { label: 'Revenue Growth', value: '400%' },
      { label: 'New Markets', value: '12' },
      { label: 'New Customers', value: '50K+' }
    ],
    description: 'A comprehensive digital transformation and market entry strategy that helped a US-based fashion retailer expand into international markets with localized campaigns and optimized supply chains.'
  },
  {
    image: '/generated/portfolio-branding.png',
    title: 'Brand Repositioning Campaign',
    category: 'Brand Strategy',
    client: 'Tech Startup',
    result: 'Increased brand recognition by 400% in target markets',
    metrics: [
      { label: 'Brand Lift', value: '400%' },
      { label: 'Impressions', value: '2M+' },
      { label: 'Positive Sentiment', value: '98%' }
    ],
    description: 'Complete brand overhaul including positioning, messaging, and visual identity for a fast-growing technology company targeting enterprise clients.'
  },
  {
    image: '/generated/portfolio-retail.png',
    title: 'Multi-Channel Campaign',
    category: 'Digital Marketing',
    client: 'Healthcare Provider',
    result: 'Generated 300% increase in qualified leads',
    metrics: [
      { label: 'Lead Increase', value: '300%' },
      { label: 'Cost per Lead', value: '-60%' },
      { label: 'Conversion Rate', value: '12%' }
    ],
    description: 'Integrated digital campaign across search, social, and display advertising with sophisticated audience targeting and retargeting strategies.'
  },
  {
    image: '/generated/portfolio-branding.png',
    title: 'Social Media Transformation',
    category: 'Social Strategy',
    client: 'Consumer Goods Brand',
    result: 'Built engaged community of 500K+ followers',
    metrics: [
      { label: 'Followers', value: '500K+' },
      { label: 'Engagement Rate', value: '8.5%' },
      { label: 'UGC Content', value: '1000+' }
    ],
    description: 'Developed and executed comprehensive social media strategy across multiple platforms with focus on community building and user-generated content.'
  }
];

const stats = [
  {
    icon: Target,
    value: '500+',
    label: 'Successful Projects'
  },
  {
    icon: Users,
    value: '200+',
    label: 'Happy Clients'
  },
  {
    icon: TrendingUp,
    value: '300%',
    label: 'Average ROI'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Industry Awards'
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase hero-text-dark">
              OUR PORTFOLIO
            </h1>
            <p className="text-xl hero-subtext-dark">
              Real results from real clients. Explore our track record of driving extraordinary growth for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-b border-[hsl(var(--border))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[hsl(var(--brand-red))] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[hsl(var(--gray-text))] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Featured Case Studies
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Discover how we&apos;ve helped businesses like yours achieve remarkable growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-[hsl(var(--brand-red))] text-xs font-semibold uppercase tracking-wider rounded mb-3 btn-red-text">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-1 hero-text-dark">
                      {project.title}
                    </h3>
                    <p className="text-sm hero-subtext-dark">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <p className="text-xl font-bold text-[hsl(var(--brand-red))] mb-4">
                    {project.result}
                  </p>

                  <p className="text-[hsl(var(--gray-text))] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
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

                  <button className="inline-flex items-center gap-2 text-[hsl(var(--brand-red))] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all group">
                    Read Full Case Study
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase hero-text-dark">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto hero-subtext-dark">
            Let&apos;s create a winning strategy for your business and achieve extraordinary results together
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-10 py-5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
