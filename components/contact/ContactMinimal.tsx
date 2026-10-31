'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Copy, CheckCircle2, ArrowUpRight, FileText } from 'lucide-react';
import { personalData } from '@/data/personal';

export function ContactMinimal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 relative overflow-hidden">
      
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 dark:bg-[#57C7F7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block">
          INITIATE A CONVERSATION
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
          Let&apos;s Build What&apos;s Next.
        </h2>

        <p className="text-lg sm:text-2xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed">
          Interested in spatial computing, geospatial AI, or Earth observation? Let&apos;s connect.
        </p>

        {/* Primary Contact CTA Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalData.email}?subject=Geospatial%20Engineering%20Inquiry`}
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] dark:bg-[#57C7F7] dark:hover:bg-[#4bbbe8] text-white dark:text-[#08090B] shadow-lg shadow-blue-500/15 transition-all transform active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Email Dr. Harish</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-full text-sm font-medium border border-[#E5E5E7] dark:border-[#292D35] bg-white/70 dark:bg-[#181B22]/70 text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-mono text-xs">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#86868B]" />
                <span className="font-mono text-xs">{personalData.email}</span>
              </>
            )}
          </button>

          <Link
            href="/resume"
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-full text-sm font-medium border border-[#E5E5E7] dark:border-[#292D35] bg-white/70 dark:bg-[#181B22]/70 text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            <FileText className="w-4 h-4 text-[#86868B]" />
            <span>View Full Resume</span>
          </Link>
        </div>

        {/* Minimal Social & Location Meta */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-[#86868B]">
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#57C7F7]" />
            <span>Chennai &amp; Erode, India</span>
          </span>

          <span className="flex items-center space-x-1.5">
            <Phone className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#57C7F7]" />
            <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="hover:underline">
              {personalData.phone}
            </a>
          </span>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] flex items-center space-x-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] flex items-center space-x-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] flex items-center space-x-1"
          >
            <span>Google Scholar</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}

