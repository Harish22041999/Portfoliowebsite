'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';

export function ResearchStorySection() {
  return (
    <section id="research" className="py-24 sm:py-32 border-b border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/40 dark:bg-[#101217]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block mb-3">
            SCIENTIFIC RIGOR
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
            Science Behind the Systems.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#86868B] leading-relaxed">
            Where physical process modeling meets satellite observation.
          </p>
        </div>

        {/* 2 Primary Research Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* RESEARCH 01 — DOCTORAL WORK */}
          <div className="rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#181B22] overflow-hidden flex flex-col justify-between hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            
            {/* Real Doctoral Research Imagery */}
            <div className="relative h-64 sm:h-80 bg-[#101217] overflow-hidden group">
              <img
                src="/images/PhD_image.png"
                alt="Doctoral Dissertation Research · TNAU"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181B22] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#57C7F7] border border-white/10 shadow-sm">
                DOCTORAL DISSERTATION · TNAU
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#57C7F7] font-semibold mb-1">
                  PHD RESEARCH
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Climate Change &amp; Groundwater Intelligence
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                  Exploring climate-driven groundwater dynamics through hydrological modeling, machine learning, and geospatial analysis.
                </p>

                {/* Methodologies */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-[11px] font-mono uppercase text-[#86868B] mb-2 font-semibold">
                    Core Methodologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['SWAT–MODFLOW', 'Climate Modeling', 'Spatial AI'].map((m) => (
                      <span
                        key={m}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-[#0071E3] dark:text-[#57C7F7] border border-blue-200/60 dark:border-blue-900/40"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/resume"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0071E3] dark:text-[#57C7F7] hover:underline"
                >
                  <span>Explore Research &amp; Methodology</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* RESEARCH 02 — MASTER'S WORK */}
          <div className="rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#181B22] overflow-hidden flex flex-col justify-between hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            
            {/* Real Master's Research Imagery */}
            <div className="relative h-64 sm:h-80 bg-[#101217] overflow-hidden group">
              <img
                src="/images/MSc_image.png"
                alt="Master's Investigation Research · TNAU"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181B22] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-green-400 border border-white/10 shadow-sm">
                MASTER&apos;S INVESTIGATION · TNAU
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-green-600 dark:text-green-400 font-semibold mb-1">
                  MASTER&apos;S RESEARCH
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Mapping Agriculture from Space
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                  Pioneered high-resolution spatial mapping of tree canopies fusing 3-meter commercial satellite imagery with Object-Based Image Analysis and Random Forest classifiers.
                </p>

                {/* Verified Metrics Callout */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-2xl bg-gray-50 dark:bg-[#101217] border border-gray-100 dark:border-gray-800 text-center">
                      <span className="block text-lg sm:text-xl font-mono font-black text-[#0071E3] dark:text-[#57C7F7]">
                        87.3%
                      </span>
                      <span className="text-[10px] font-mono text-[#86868B] uppercase">Overall Acc</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-gray-50 dark:bg-[#101217] border border-gray-100 dark:border-gray-800 text-center">
                      <span className="block text-lg sm:text-xl font-mono font-black text-[#0071E3] dark:text-[#57C7F7]">
                        0.70
                      </span>
                      <span className="text-[10px] font-mono text-[#86868B] uppercase">Kappa Coeff</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-gray-50 dark:bg-[#101217] border border-gray-100 dark:border-gray-800 text-center">
                      <span className="block text-lg sm:text-xl font-mono font-black text-green-600 dark:text-green-400">
                        3m
                      </span>
                      <span className="text-[10px] font-mono text-[#86868B] uppercase">PlanetScope</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/resume"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0071E3] dark:text-[#57C7F7] hover:underline"
                >
                  <span>Explore Research &amp; Methodology</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

