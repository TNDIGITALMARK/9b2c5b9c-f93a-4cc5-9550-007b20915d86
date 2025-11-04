'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[hsl(var(--border))] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center">
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
            <p className="text-sm text-[hsl(var(--gray-text))] leading-relaxed">
              Transforming ambitious businesses into global market leaders through strategic marketing excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[hsl(var(--black))] uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[hsl(var(--gray-text))] hover:text-[hsl(var(--brand-red))] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[hsl(var(--gray-text))] hover:text-[hsl(var(--brand-red))] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[hsl(var(--gray-text))] hover:text-[hsl(var(--brand-red))] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[hsl(var(--gray-text))] hover:text-[hsl(var(--brand-red))] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-[hsl(var(--black))] uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-[hsl(var(--gray-text))]">
                info@marketglobal.com
              </li>
              <li className="text-sm text-[hsl(var(--gray-text))]">
                +1 (555) 123-4567
              </li>
              <li className="text-sm text-[hsl(var(--gray-text))]">
                New York, NY | London, UK | Global City
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center text-white hover:bg-[hsl(var(--brand-red-dark))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center text-white hover:bg-[hsl(var(--brand-red-dark))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center text-white hover:bg-[hsl(var(--brand-red-dark))] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[hsl(var(--brand-red))] flex items-center justify-center text-white hover:bg-[hsl(var(--brand-red-dark))] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[hsl(var(--border))] pt-8">
          <p className="text-sm text-[hsl(var(--gray-text))] text-center">
            © 2021 MARKET GLOBAL
          </p>
        </div>
      </div>
    </footer>
  );
}
