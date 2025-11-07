'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import { ArrowRight, Target, Users, Globe2, Award, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your growth. Every strategy is designed to deliver measurable, sustainable results.'
  },
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your success is our success. We become an extension of your team, dedicated to achieving your goals.'
  },
  {
    icon: Globe2,
    title: 'Global Expertise',
    description: 'With presence in 50+ countries, we understand local nuances and global trends.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never settle for good enough. Every campaign, every strategy is crafted to perfection.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent communication, honest feedback, and ethical practices define everything we do.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of market trends, constantly innovating to give you a competitive edge.'
  }
];

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    bio: '15+ years leading global marketing transformations'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief Strategy Officer',
    bio: 'Former Fortune 500 marketing executive'
  },
  {
    name: 'Emily Watson',
    role: 'Head of Creative',
    bio: 'Award-winning brand strategist'
  },
  {
    name: 'David Kim',
    role: 'Director of Analytics',
    bio: 'Data science expert with PhD from MIT'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase hero-text-dark">
              ABOUT US
            </h1>
            <p className="text-xl hero-subtext-dark">
              We&apos;re a team of marketing experts dedicated to transforming ambitious businesses into global market leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-6 uppercase">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mb-6" />
              <p className="text-lg text-[hsl(var(--gray-text))] leading-relaxed mb-6">
                At Milah's Global, we empower businesses worldwide to unlock their full potential in the global marketplace. Our mission is to deliver exceptional marketing expertise that transforms ambitious companies into international market leaders, regardless of their size or starting point.
              </p>
              <p className="text-lg text-[hsl(var(--gray-text))] leading-relaxed">
                Since our founding, we've partnered with over 200 companies across 50+ countries, helping them navigate complex international markets, scale their operations, and achieve sustainable growth that exceeds industry standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8">
                <div className="text-4xl font-bold text-[hsl(var(--brand-red))] mb-2">
                  200+
                </div>
                <div className="text-sm text-[hsl(var(--black))] font-semibold uppercase">
                  Global Clients
                </div>
              </div>
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8">
                <div className="text-4xl font-bold text-[hsl(var(--brand-red))] mb-2">
                  50+
                </div>
                <div className="text-sm text-[hsl(var(--black))] font-semibold uppercase">
                  Countries
                </div>
              </div>
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8">
                <div className="text-4xl font-bold text-[hsl(var(--brand-red))] mb-2">
                  500+
                </div>
                <div className="text-sm text-[hsl(var(--black))] font-semibold uppercase">
                  Campaigns
                </div>
              </div>
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8">
                <div className="text-4xl font-bold text-[hsl(var(--brand-red))] mb-2">
                  98%
                </div>
                <div className="text-sm text-[hsl(var(--black))] font-semibold uppercase">
                  Retention Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[hsl(var(--background))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              The principles that guide every decision we make and every campaign we execute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Meet the experts leading our global operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--background))] rounded-xl p-8 text-center hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-[hsl(var(--brand-red))] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--black))] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[hsl(var(--brand-red))] font-semibold mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-sm text-[hsl(var(--gray-text))]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[hsl(var(--black))]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase hero-text-dark">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto hero-subtext-dark">
            Join the 200+ companies that trust us to accelerate their global growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-10 py-5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
