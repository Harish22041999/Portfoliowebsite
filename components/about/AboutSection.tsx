'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Satellite, Cpu, Waves, Sparkles, Plane } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: <Satellite className="w-5 h-5 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: 'Earth Observation',
      summary: 'Sentinel-1/2, PlanetScope, Landsat, SAR interferometry, and multispectral analysis.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: 'Spatial Software Engineering',
      summary: 'TypeScript, Python, WebGL/Three.js, MapLibre GL, and high-performance WebGIS platforms.',
    },
    {
      icon: <Waves className="w-5 h-5 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: 'Hydrological Modeling',
      summary: 'SWAT, MODFLOW-6, 2D shallow water hydrodynamic computation, and SUFI-2 calibration.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: 'Geospatial AI',
      summary: 'Spatial machine learning, Object-Based Image Analysis (OBIA), and automated data pipelines.',
    },
    {
      icon: <Plane className="w-5 h-5 text-[#0071E3] dark:text-[#57C7F7]" />,
      title: 'UAV & Field Intelligence',
      summary: 'DGCA-licensed drone pilot (valid 2034), aerial photogrammetry, and RTK GPS ground control.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E5E5E7] dark:border-[#292D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#57C7F7] font-semibold block">
              CAREER NARRATIVE
            </span>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight">
              Scientist by Training. Engineer by Practice.
            </h2>

            {/* Concise biography under 100 words */}
            <p className="text-base sm:text-lg text-[#424245] dark:text-[#D2D2D7] font-normal leading-relaxed pt-2">
              My work bridges Earth science and modern software engineering. With a PhD in Remote Sensing &amp; GIS from Tamil Nadu Agricultural University, my journey evolved from agricultural physics and field ground-truthing to hydrodynamic digital twins, commercial UAV photogrammetry, and cloud-native spatial computing. Today, as Senior GIS Analyst at Dronix Technologies, I architect the spatial algorithms and interactive web graphics that transform planetary data into real-world decisions.
            </p>

            {/* Career Arc Flow */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="text-[10px] font-mono uppercase text-[#86868B] block mb-2 font-semibold">
                EVOLUTIONARY TRAJECTORY
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#86868B]">
                <span className="text-[#1D1D1F] dark:text-[#F5F5F7]">Agro-Science</span>
                <span>→</span>
                <span className="text-[#1D1D1F] dark:text-[#F5F5F7]">Remote Sensing</span>
                <span>→</span>
                <span className="text-[#1D1D1F] dark:text-[#F5F5F7]">Hydrological Physics</span>
                <span>→</span>
                <span className="text-[#1D1D1F] dark:text-[#F5F5F7]">Geospatial Engineering</span>
                <span>→</span>
                <span className="text-[#0071E3] dark:text-[#57C7F7] font-bold">Spatial AI Software</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#0071E3] dark:text-[#57C7F7] hover:underline"
              >
                <span>View Full Career Experience &amp; Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Compact Elegant Pillars */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#86868B] block mb-4 font-semibold">
              CORE DOMAIN CAPABILITIES
            </span>

            <div className="space-y-3">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#181B22] flex items-start space-x-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#101217] shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <Link
                href="/resume"
                className="inline-flex items-center space-x-1 text-xs font-mono text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]"
              >
                <span>View Full Technical Skill Matrix</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

