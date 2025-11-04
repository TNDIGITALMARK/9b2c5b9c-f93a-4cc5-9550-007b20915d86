'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Globe, BarChart3, CheckCircle2 } from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5E8] via-[#F5F5F7] to-[#FFE5E8] animate-gradient" />

        {/* Floating Animated Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--pink-accent))] opacity-40 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-[hsl(var(--pink-accent))] opacity-30 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-40 w-32 h-32 bg-[hsl(var(--pink-accent))] opacity-50 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-40 w-48 h-48 rounded-full bg-[hsl(var(--brand-red))]/10 blur-2xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[hsl(var(--black))]">
                GLOBAL REACH.
                <br />
                UNLOCKING POTENTIAL
                <br />
                WORLDWIDE.
              </h1>

              <p className="text-lg text-[hsl(var(--gray-text))] max-w-xl">
                We transform ambitious businesses into global market leaders through strategic marketing excellence.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
              >
                START YOUR GLOBAL EXPANSION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Successful Campaigns
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Countries Reached
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Client Retention
                  </div>
                </div>
              </div>
            </div>

            {/* World Map Graphic */}
            <div className="relative animate-slide-in">
              <div className="relative w-full aspect-video">
                <Image
                  src="/generated/world-map-red.png"
                  alt="Global Reach Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              OUR EXPERTISE
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white border border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-md transition-all group">
              <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
                Strategy & Consulting
              </h3>
              <p className="text-[hsl(var(--gray-text))] mb-6 leading-relaxed">
                Develop winning strategies with our team and accelerate growth.
              </p>
              <button className="bg-[hsl(var(--black))] text-white px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red))] transition-all">
                Learn More
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white border border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-md transition-all group">
              <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
                Digital Campaigns
              </h3>
              <p className="text-[hsl(var(--gray-text))] mb-6 leading-relaxed">
                Launch big-scale and cross-channel campaigns.
              </p>
              <button className="bg-[hsl(var(--black))] text-white px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red))] transition-all">
                Learn More
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white border border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-md transition-all group">
              <div className="w-16 h-16 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
                Analytics & Insights
              </h3>
              <p className="text-[hsl(var(--gray-text))] mb-6 leading-relaxed">
                Combine analytics and action to gain a holistic view.
              </p>
              <button className="bg-[hsl(var(--black))] text-white px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red))] transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[hsl(var(--background))] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--pink-accent))] opacity-30 rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-6 uppercase">
                WHY CHOOSE US?
              </h2>
              <h3 className="text-2xl font-bold text-[hsl(var(--black))] mb-6">
                READY TO GROW?
              </h3>
              <p className="text-lg text-[hsl(var(--gray-text))] mb-8">
                Let&apos;s build something extraordinary together.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
              >
                GET IN TOUCH
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--brand-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                    Innovative Solutions
                  </h4>
                  <p className="text-[hsl(var(--gray-text))]">
                    Cutting-edge strategies tailored to your business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--brand-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                    Client-Centric Approach
                  </h4>
                  <p className="text-[hsl(var(--gray-text))]">
                    Your success is our priority. We listen, adapt, and deliver.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--brand-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                    Measurable Results
                  </h4>
                  <p className="text-[hsl(var(--gray-text))]">
                    Data-driven insights that prove ROI and drive growth.
                  </p>
                </div>
              </div>

              {/* Decorative Pink Shapes */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="w-full h-24 bg-[hsl(var(--pink-accent))] rounded-lg" />
                <div className="w-full h-24 bg-[hsl(var(--pink-accent))] rounded-lg" />
                <div className="w-full h-24 bg-[hsl(var(--pink-accent))] rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}