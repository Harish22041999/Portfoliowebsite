'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectVideoPlayer } from '@/components/ui/ProjectVideoPlayer';

export function SelectedWorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 border-b border-[#E5E5E7] dark:border-[#292D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block mb-3">
            FLAGSHIP SYSTEMS
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
            Selected Work.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#86868B] leading-relaxed">
            Turning complex Earth science into intelligent software.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          
          {/* PROJECT 01 — DELUGE 3D */}
          <article className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E7] dark:border-[#292D35]">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono text-[#0071E3] dark:text-[#57C7F7] uppercase tracking-wider font-semibold">
                  01 · 3D HYDRODYNAMIC MODELING
                </div>
                <h3 className="text-3xl sm:text-5xl font-heading font-black text-[#1D1D1F] dark:text-[#F5F5F7]">
                  DELUGE 3D
                </h3>
                <div className="text-lg sm:text-xl font-heading text-[#86868B]">
                  Understanding Floods Before They Happen.
                </div>
                <p className="text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] pt-1">
                  A spatial flood simulation platform combining hydrodynamic modeling, terrain intelligence, and interactive 3D visualization.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-4 shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Hydrodynamics', 'MapLibre GL', 'Three.js'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-[#181B22] text-[#424245] dark:text-[#D2D2D7] border border-gray-200 dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work/deluge-3d"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#08090B] hover:opacity-90 transition-opacity"
                >
                  <span>Explore DELUGE 3D</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Centerpiece: Actual Recorded Platform Footage */}
            <div className="w-full">
              <ProjectVideoPlayer
                src="/videos/Deluge3D.mp4"
                title="DELUGE 3D · Coastal Flood & Hydrodynamic Simulation"
                badge="ACTUAL PLATFORM RUN"
              />
            </div>
          </article>

          {/* PROJECT 02 — SATVision */}
          <article className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E7] dark:border-[#292D35]">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono text-[#0071E3] dark:text-[#57C7F7] uppercase tracking-wider font-semibold">
                  02 · ORBITAL ASTRODYNAMICS
                </div>
                <h3 className="text-3xl sm:text-5xl font-heading font-black text-[#1D1D1F] dark:text-[#F5F5F7]">
                  SATVision
                </h3>
                <div className="text-lg sm:text-xl font-heading text-[#86868B]">
                  See the Earth from Orbit.
                </div>
                <p className="text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] pt-1">
                  An orbital intelligence platform that predicts satellite overpasses using SGP4 propagation and Earth observation data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-4 shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {['JavaScript', 'satellite.js', 'SGP4', 'Cloudflare Workers'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-[#181B22] text-[#424245] dark:text-[#D2D2D7] border border-gray-200 dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work/satvision"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#08090B] hover:opacity-90 transition-opacity"
                >
                  <span>Explore SATVision</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Centerpiece: Actual Recorded Platform Footage */}
            <div className="w-full">
              <ProjectVideoPlayer
                src="/videos/SATVision.mp4"
                title="SATVision · Satellite Orbit & Overpass Intelligence"
                badge="ACTUAL PLATFORM RUN"
              />
            </div>
          </article>

          {/* PROJECT 03 — SWAT Weather Data Generator */}
          <article className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E7] dark:border-[#292D35]">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#0071E3] dark:text-[#57C7F7] uppercase tracking-wider font-semibold">
                  <span>03 · SCIENTIFIC SOFTWARE &amp; HYDROLOGY</span>
                  <span>·</span>
                  <span className="text-green-600 dark:text-green-400">SW-17836/2026-CO</span>
                </div>
                <h3 className="text-3xl sm:text-5xl font-heading font-black text-[#1D1D1F] dark:text-[#F5F5F7]">
                  SWAT Weather Data Generator
                </h3>
                <div className="text-lg sm:text-xl font-heading text-[#86868B]">
                  Climate Data, Ready for Science.
                </div>
                <p className="text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] pt-1">
                  Automating meteorological data preparation for hydrological and climate research with registered copyright protection.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-end gap-4 shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'NASA POWER', 'ERA5-Land', 'Registered Copyright'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-gray-100 dark:bg-[#181B22] text-[#424245] dark:text-[#D2D2D7] border border-gray-200 dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work/swat-weather-generator"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#08090B] hover:opacity-90 transition-opacity"
                >
                  <span>Explore the Software</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Centerpiece: Actual Recorded Software Demonstration */}
            <div className="w-full">
              <ProjectVideoPlayer
                src="/videos/SWAT.mp4"
                title="SWAT Weather Data Generator · Official Software Demonstration"
                badge="OFFICIAL SOFTWARE RUN"
              />
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
