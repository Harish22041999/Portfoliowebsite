'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Work', href: '/#work' },
  { label: 'Research', href: '/#research' },
  { label: 'Publications', href: '/#publications' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090B]/85 backdrop-blur-md border-b border-[#292D35] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2 group focus-visible:outline-hidden"
          >
            <span className="font-heading font-black tracking-wider text-sm sm:text-base text-[#F5F5F7]">
              HARISH <span className="text-[#57C7F7]">/</span> GEOAI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium tracking-wide text-[#86868B] hover:text-[#F5F5F7] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/resume"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#292D35] bg-[#181B22]/50 text-[#D2D2D7] hover:border-gray-600 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#57C7F7]" />
              <span>Resume</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-1 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F5F5F7] text-[#08090B] hover:opacity-90 transition-opacity"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#08090B] border-b border-[#292D35] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium py-2 border-b border-gray-800/50 text-[#D2D2D7]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg text-xs font-medium border border-[#292D35] bg-[#181B22] text-[#D2D2D7]"
              >
                <FileText className="w-4 h-4 text-[#57C7F7]" />
                <span>View Full Resume</span>
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-lg text-xs font-semibold bg-[#57C7F7] text-[#08090B]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
