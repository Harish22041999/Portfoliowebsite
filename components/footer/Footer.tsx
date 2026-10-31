'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalData } from '@/data/personal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#08090B] text-xs text-[#86868B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100 dark:border-gray-900">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-heading font-bold text-sm sm:text-base text-[#1D1D1F] dark:text-[#F5F5F7]">
              {personalData.name}
            </div>
            <div className="text-xs text-[#86868B]">
              Geospatial Engineering · Earth Observation · Spatial AI
            </div>
          </div>

          {/* Quick Footer Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <Link href="/#work" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              Work
            </Link>
            <Link href="/#research" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              Research
            </Link>
            <Link href="/#publications" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              Publications
            </Link>
            <Link href="/#about" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              About
            </Link>
            <Link href="/resume" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              Resume
            </Link>
            <Link href="/#contact" className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Return to top */}
          <div>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#86868B]">
          <div>
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved. Registered Software Copyright: SW-17836/2026-CO.
          </div>
          <div className="font-mono text-[10px] text-gray-400 dark:text-gray-500">
            ENGINEERED WITH NEXT.JS · TYPESCRIPT · THREE.JS · TAILWIND CSS
          </div>
        </div>

      </div>
    </footer>
  );
}

