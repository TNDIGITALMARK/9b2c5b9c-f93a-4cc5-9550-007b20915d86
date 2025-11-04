'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span className="text-[hsl(var(--black))] font-bold text-sm tracking-wider uppercase">
              MARKET GLOBAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--brand-red))] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--brand-red))] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--brand-red))] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[hsl(var(--brand-red))] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Contact Button (Desktop) */}
          <Link
            href="/contact"
            className="hidden md:block bg-[hsl(var(--brand-red))] text-white px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red hover:shadow-lg"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[hsl(var(--border))] shadow-lg animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[hsl(var(--black))] hover:text-[hsl(var(--brand-red))] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[hsl(var(--brand-red))] text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[hsl(var(--brand-red-dark))] transition-all shadow-red text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
