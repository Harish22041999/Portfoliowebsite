'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, ExternalLink, FileText, CheckCircle2, Clock } from 'lucide-react';
import { publishedArticles, submittedManuscripts } from '@/data/publications';

export function PublicationsSection() {
  const [activeTab, setActiveTab] = useState<'published' | 'submitted'>('published');
  const [showSubmitted, setShowSubmitted] = useState(false);

  return (
    <section id="publications" className="py-24 sm:py-32 border-b border-[#E5E5E7] dark:border-[#292D35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block mb-3">
              SCHOLARLY OUTPUT
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
              Publications.
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#86868B] leading-relaxed">
              Peer-reviewed scientific contributions in remote sensing, hydrology, and spatial AI.
            </p>
          </div>

          {/* Toggle between Published and All/Submitted */}
          <div className="flex items-center space-x-2 p-1 rounded-xl bg-gray-100 dark:bg-[#181B22] border border-gray-200 dark:border-gray-800 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab('published')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'published'
                  ? 'bg-white dark:bg-[#101217] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-xs font-semibold'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              Published Articles ({publishedArticles.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('submitted')}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'submitted'
                  ? 'bg-white dark:bg-[#101217] text-[#1D1D1F] dark:text-[#F5F5F7] shadow-xs font-semibold'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]'
              }`}
            >
              Submitted Manuscripts ({submittedManuscripts.length})
            </button>
          </div>
        </div>

        {/* ELEGANT HORIZONTAL PUBLICATION ROWS */}
        {activeTab === 'published' ? (
          <div className="divide-y divide-[#E5E5E7] dark:divide-[#292D35] border-y border-[#E5E5E7] dark:border-[#292D35]">
            {publishedArticles.map((article) => (
              <div
                key={article.id}
                className="py-7 sm:py-8 group transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  
                  {/* Left: Year & Journal Badge */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-1">
                    <span className="text-xs font-mono font-bold text-[#0071E3] dark:text-[#57C7F7]">
                      {article.year}
                    </span>
                    <span className="text-xs font-heading font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {article.journal}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B]">
                      {article.category}
                    </span>
                  </div>

                  {/* Center: Title & Authors */}
                  <div className="lg:col-span-7 space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug group-hover:text-[#0071E3] dark:group-hover:text-[#57C7F7] transition-colors">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      {article.authors}
                    </p>
                    <div className="text-[11px] font-mono text-[#86868B] pt-0.5">
                      DOI: <span className="text-gray-700 dark:text-gray-300">{article.doi}</span>
                    </div>
                  </div>

                  {/* Right: Subtle "Read Paper" action */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 bg-white dark:bg-[#181B22] text-[#1D1D1F] dark:text-[#F5F5F7] transition-all group-hover:border-[#0071E3] dark:group-hover:border-[#57C7F7]"
                    >
                      <span>Read Paper</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#57C7F7]" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* SUBMITTED MANUSCRIPTS VIEW (Clearly Distinguishing Work Under Review) */
          <div className="divide-y divide-[#E5E5E7] dark:divide-[#292D35] border-y border-[#E5E5E7] dark:border-[#292D35]">
            <div className="py-4 px-2 text-xs font-mono text-[#86868B] flex items-center space-x-2 bg-amber-500/5 rounded-t-xl">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>The following manuscripts are actively undergoing scholarly peer review:</span>
            </div>

            {submittedManuscripts.map((manuscript) => (
              <div
                key={manuscript.id}
                className="py-7 sm:py-8 group transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.015]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  
                  {/* Left: Status & Target Venue */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-semibold">
                      Under Review
                    </span>
                    <span className="text-xs font-heading font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] pt-1">
                      {manuscript.journal}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B]">
                      {manuscript.category}
                    </span>
                  </div>

                  {/* Center: Title & Authors */}
                  <div className="lg:col-span-7 space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug">
                      {manuscript.title}
                    </h3>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      {manuscript.authors}
                    </p>
                    <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 pt-0.5">
                      Status: Submitted · Double-Blind Peer Review
                    </div>
                  </div>

                  {/* Right: In-Review Indicator */}
                  <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <span className="text-xs font-mono text-[#86868B] px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                      Pre-Publication
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Utility Bar: Link to Full Scholar Profile & Resume */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#86868B] font-mono text-xs">
            * All published articles verified with permanent Crossref / DOI identifiers.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#57C7F7] transition-colors"
            >
              <span>Google Scholar Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-gray-300 dark:text-gray-700">·</span>

            <Link
              href="/resume"
              className="inline-flex items-center space-x-1.5 font-semibold text-[#0071E3] dark:text-[#57C7F7] hover:underline"
            >
              <span>View All Research in CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
