'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectCaseStudy } from '@/data/projects';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { ProjectVideoPlayer } from '@/components/ui/ProjectVideoPlayer';

export function ProjectCard({
  project,
  index,
}: {
  project: ProjectCaseStudy;
  index: number;
}) {
  const getVideoSrc = (slug: string) => {
    switch (slug) {
      case 'deluge-3d':
        return { src: '/videos/Deluge3D.mp4', title: 'DELUGE 3D Simulation' };
      case 'satvision':
        return { src: '/videos/SATVision.mp4', title: 'SATVision Orbital Intelligence' };
      case 'swat-weather-generator':
        return { src: '/videos/SWAT.mp4', title: 'SWAT Weather Data Generator' };
      default:
        return null;
    }
  };

  const video = getVideoSrc(project.slug);

  return (
    <article
      id={`project-${project.slug}`}
      className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#111318] shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-8">
        
        {/* Project Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E7] dark:border-[#292D35]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-1">
              <span>PROJECT 0{index + 1}</span>
              <span>·</span>
              <span>{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-normal text-[#86868B] mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#08090B] hover:opacity-90 transition-opacity"
            >
              <span>Full Engineering Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Embedded Actual Video Recording */}
        {video && (
          <div className="w-full">
            <ProjectVideoPlayer src={video.src} title={video.title} badge="ACTUAL PLATFORM RUN" />
          </div>
        )}

        {/* Technical Architecture & Contribution Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          
          {/* Problem & Solution */}
          <div className="space-y-2.5 p-4 rounded-2xl bg-gray-50/70 dark:bg-[#191C22]/70 border border-gray-100 dark:border-gray-800">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#5AC8FA] font-semibold block">
              Core Problem &amp; Scientific Solution
            </span>
            <p className="text-xs text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
              <strong className="text-[#1D1D1F] dark:text-white">Challenge: </strong>
              {project.problemStatement}
            </p>
            <p className="text-xs text-[#424245] dark:text-[#D2D2D7] leading-relaxed pt-1">
              <strong className="text-[#1D1D1F] dark:text-white">Solution: </strong>
              {project.solution}
            </p>
          </div>

          {/* Architecture & Engineering Focus */}
          <div className="space-y-2.5 p-4 rounded-2xl bg-gray-50/70 dark:bg-[#191C22]/70 border border-gray-100 dark:border-gray-800">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#5AC8FA] font-semibold block">
              Individual Architecture Contribution
            </span>
            <p className="text-xs text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
              {project.individualContribution}
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono text-[#86868B] block mb-1">KEY TECHNICAL CHALLENGE:</span>
              <p className="text-[11px] text-[#424245] dark:text-[#D2D2D7] font-medium leading-tight">
                {project.engineeringChallenges[0]}
              </p>
            </div>
          </div>

          {/* Verified Metrics & Tech Stack */}
          <div className="space-y-3 p-4 rounded-2xl bg-gray-50/70 dark:bg-[#191C22]/70 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#5AC8FA] font-semibold block mb-2">
                Verified Technical Metrics
              </span>
              <div className="space-y-2">
                {project.metrics?.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-xs">
                    <span className="text-[#86868B] text-[11px]">{m.label}:</span>
                    <span className="font-mono font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <span className="text-[10px] font-mono text-[#86868B] block mb-1.5 uppercase">
                Core Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}

