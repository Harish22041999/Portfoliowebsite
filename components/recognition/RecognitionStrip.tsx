'use client';

import React from 'react';
import Link from 'next/link';
import { Award, FileBadge2, ShieldCheck, Globe, BookOpen, ArrowUpRight } from 'lucide-react';

export function RecognitionStrip() {
  const recognitions = [
    {
      icon: <Award className="w-4 h-4 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: "Doctor of Philosophy (PhD)",
      ref: "TNAU · Remote Sensing & GIS",
      badge: "Doctorate",
    },
    {
      icon: <FileBadge2 className="w-4 h-4 text-green-600 dark:text-green-400" />,
      title: "Registered Software Copyright",
      ref: "SW-17836/2026-CO · Govt. of India",
      badge: "Official IP",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: "DGCA Commercial Drone Pilot",
      ref: "Rotorcraft Small · Valid 2034",
      badge: "Commercial License",
    },
    {
      icon: <Globe className="w-4 h-4 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: "Sakura Science Fellow",
      ref: "Hirosaki University & JST, Japan",
      badge: "International",
    },
    {
      icon: <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      title: "Scholarly Peer Reviewer",
      ref: "Earth Observation Journals",
      badge: "Academic Service",
    },
  ];

  return (
    <section className="py-20 border-b border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/30 dark:bg-[#101217]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block mb-1">
              RECOGNITION &amp; INTELLECTUAL PROPERTY
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Verified Professional Standing.
            </h2>
          </div>
          <Link
            href="/resume"
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] mt-3 md:mt-0"
          >
            <span>View Full Academic Trajectory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Minimal 5-Item Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {recognitions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#181B22] flex flex-col justify-between space-y-3 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-gray-50 dark:bg-[#101217]">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono uppercase text-[#86868B] px-2 py-0.5 rounded bg-gray-100 dark:bg-black/40">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] font-mono text-[#86868B] mt-1">
                  {item.ref}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

