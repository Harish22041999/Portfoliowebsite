'use client';

import React from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers } from 'lucide-react';

export function FeaturedWorkSection({
  audienceTrack,
}: {
  audienceTrack: 'recruiter' | 'manager' | 'scientist';
}) {
  return (
    <section id="work" className="py-20 sm:py-24 border-b border-[#E5E5E7] dark:border-[#292D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-2">
            <Layers className="w-4 h-4" />
            <span>SECTION 04 · FLAGSHIP ENGINEERING SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Featured Engineering Work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#86868B] leading-relaxed">
            Three production platforms bridging numerical physical models, orbital astrodynamics, and high-performance WebGIS visualization.
          </p>

          {/* Dynamic contextual guidance based on active track */}
          {audienceTrack === 'recruiter' && (
            <div className="mt-4 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-[#0071E3] dark:text-[#5AC8FA]">
              <strong>Recruiter Fast-Scan:</strong> Focus on the verified metrics, core tech stack, and individual architecture contributions in each project card.
            </div>
          )}
          {audienceTrack === 'manager' && (
            <div className="mt-4 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-[#0071E3] dark:text-[#5AC8FA]">
              <strong>Engineering Lead Deep-Dive:</strong> Inspect the live interactive viewports below to test numerical convergence, SGP4 orbital propagation, and client-side WebGL rendering.
            </div>
          )}
          {audienceTrack === 'scientist' && (
            <div className="mt-4 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-[#0071E3] dark:text-[#5AC8FA]">
              <strong>Scientific Review:</strong> Detailed equations (Saint-Venant 2D, SGP4 perturbation physics, and SWAT aerodynamic conversions) are documented inside each full case study.
            </div>
          )}
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

