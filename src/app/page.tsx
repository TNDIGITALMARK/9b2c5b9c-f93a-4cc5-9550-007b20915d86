'use client';

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Globe, BarChart3, CheckCircle2, Users, Award, Zap, Shield, Target, Rocket } from 'lucide-react';

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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5E8] via-[#F5F5F7] to-[#FFE5E8] animate-gradient" />

        {/* Orbiting Shape Layers - Creates mesmerizing motion */}
        <div className="absolute top-[10%] left-[15%] w-80 h-80 rounded-full bg-[hsl(var(--pink-accent))] opacity-50 blur-3xl animate-orbit-1" />
        <div className="absolute top-[30%] right-[20%] w-96 h-96 rounded-full bg-[hsl(var(--brand-red))]/20 blur-3xl animate-orbit-2" />
        <div className="absolute bottom-[15%] left-[25%] w-64 h-64 rounded-full bg-[hsl(var(--pink-accent))] opacity-40 blur-3xl animate-orbit-3" />

        {/* Pulsing Glow Effects */}
        <div className="absolute top-[20%] right-[10%] w-48 h-48 rounded-full bg-[hsl(var(--brand-red))]/15 blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-[25%] right-[30%] w-56 h-56 rounded-full bg-[hsl(var(--pink-accent))] opacity-35 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Expanding Circles - Subtle depth effect */}
        <div className="absolute top-[50%] left-[50%] w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[hsl(var(--brand-red))]/10 animate-expand-contract" />
        <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[hsl(var(--pink-accent))]/20 animate-expand-contract" style={{ animationDelay: '5s' }} />

        {/* Shimmer overlay for subtle light effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Hero Text - Centered */}
            <div className="space-y-8 animate-fade-in max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[hsl(var(--black))]">
                GLOBAL REACH.
                <br />
                UNLOCKING POTENTIAL
                <br />
                WORLDWIDE.
              </h1>

              <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
                We transform ambitious businesses into global market leaders through strategic marketing excellence.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[hsl(var(--brand-red))] px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg group btn-red-text"
              >
                START YOUR GLOBAL EXPANSION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Stats Counters - Centered */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Successful Campaigns
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Countries Reached
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--brand-red))]">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-xs text-[hsl(var(--gray-text))] uppercase tracking-wider mt-1">
                    Client Retention
                  </div>
                </div>
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

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              OUR APPROACH
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              We follow a proven methodology that combines strategic thinking with creative execution to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                  Discovery
                </h3>
                <p className="text-[hsl(var(--gray-text))]">
                  Deep dive into your business, market, and goals to understand your unique challenges and opportunities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                  Strategy
                </h3>
                <p className="text-[hsl(var(--gray-text))]">
                  Develop comprehensive strategies backed by market research, competitive analysis, and data insights.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                  Execution
                </h3>
                <p className="text-[hsl(var(--gray-text))]">
                  Launch campaigns with precision, leveraging best-in-class tools and proven methodologies.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-[hsl(var(--pink-accent))] rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                  Optimization
                </h3>
                <p className="text-[hsl(var(--gray-text))]">
                  Continuously monitor, analyze, and optimize performance to maximize ROI and drive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 px-6 bg-[hsl(var(--background))]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              WHAT SETS US APART
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              We combine global expertise with local market knowledge to deliver campaigns that resonate across borders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Expert Team
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                Our team of seasoned professionals brings decades of combined experience in global marketing, brand strategy, and digital innovation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Proven Track Record
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                With 500+ successful campaigns across 50+ countries, we&apos;ve helped businesses of all sizes achieve remarkable growth.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Agile Methodology
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                We adapt quickly to market changes and pivot strategies based on real-time data to ensure optimal performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Trusted Partner
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                We build long-term relationships with our clients, becoming an extension of your team and investing in your success.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Results-Focused
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                Every strategy and campaign is designed with clear KPIs and measurable outcomes to demonstrate tangible business impact.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-[hsl(var(--brand-red))] flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--black))] mb-3 uppercase">
                Innovation First
              </h3>
              <p className="text-[hsl(var(--gray-text))] leading-relaxed">
                We stay ahead of marketing trends and leverage cutting-edge technologies to give your brand a competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--black))] mb-4 uppercase">
              INDUSTRY EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--brand-red))] mx-auto mb-6" />
            <p className="text-lg text-[hsl(var(--gray-text))] max-w-2xl mx-auto">
              Deep expertise across multiple sectors, from startups to Fortune 500 companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Technology</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">E-Commerce</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Finance</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Healthcare</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Consumer Goods</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Manufacturing</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Professional Services</h3>
            </div>
            <div className="bg-[hsl(var(--pink-accent))] rounded-lg p-6 text-center">
              <h3 className="font-bold text-[hsl(var(--black))] uppercase">Hospitality</h3>
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
                Let&apos;s build something extraordinary together. Our global marketing expertise combined with local market insights will help you expand into new markets with confidence.
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
                    Cutting-edge strategies tailored to your business goals, leveraging the latest marketing technologies and methodologies.
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
                    Your success is our priority. We listen, adapt, and deliver personalized solutions that align with your vision.
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
                    Data-driven insights that prove ROI and drive growth with transparent reporting and continuous optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--brand-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[hsl(var(--black))] mb-1 uppercase">
                    Global Network
                  </h4>
                  <p className="text-[hsl(var(--gray-text))]">
                    Access to international markets through our extensive network of partners and local experts in 50+ countries.
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