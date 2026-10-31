import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ArrowLeft, CheckCircle2, Cpu, Database, Layers, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { ProjectVideoPlayer } from '@/components/ui/ProjectVideoPlayer';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const getVideoData = (slug: string) => {
    switch (slug) {
      case 'deluge-3d':
        return {
          src: '/videos/Deluge3D.mp4',
          title: 'DELUGE 3D · Coastal Flood & Hydrodynamic Simulation',
          badge: 'ACTUAL PLATFORM RUN',
        };
      case 'satvision':
        return {
          src: '/videos/SATVision.mp4',
          title: 'SATVision · Satellite Orbit & Overpass Intelligence',
          badge: 'ACTUAL PLATFORM RUN',
        };
      case 'swat-weather-generator':
        return {
          src: '/videos/SWAT.mp4',
          title: 'SWAT Weather Data Generator · Official Software Demonstration',
          badge: 'OFFICIAL SOFTWARE RUN',
        };
      default:
        return null;
    }
  };

  const videoData = getVideoData(project.slug);

  return (
    <article className="pt-28 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-4 pb-10 border-b border-[#E5E5E7] dark:border-[#292D35]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-[#0071E3] dark:text-[#57C7F7] border border-blue-200/60 dark:border-blue-900/40 font-medium">
              {project.category}
            </span>
            {project.copyrightOrRef && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                {project.copyrightOrRef}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl font-heading text-[#86868B] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#181B22] border border-[#E5E5E7] dark:border-[#292D35]"
                >
                  <span className="text-[11px] font-mono text-[#86868B] block uppercase">{m.label}</span>
                  <span className="text-sm sm:text-base font-mono font-bold text-[#1D1D1F] dark:text-[#F5F5F7] block mt-0.5">
                    {m.value}
                  </span>
                  {m.note && <span className="text-[10px] text-gray-500 block mt-0.5">{m.note}</span>}
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Platform Video Demonstration Viewport */}
        {videoData && (
          <section className="my-12">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#57C7F7] font-semibold">
                Platform Demonstration &amp; Screen Recording
              </h2>
              <span className="text-[11px] font-mono text-[#86868B]">60 FPS Video Capture</span>
            </div>
            <ProjectVideoPlayer
              src={videoData.src}
              title={videoData.title}
              badge={videoData.badge}
            />
          </section>
        )}

        {/* Detailed Case Study Sections */}
        <div className="space-y-12">
          
          {/* 1. Real-World Problem */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              1. The Real-World Problem
            </h2>
            <p className="text-sm sm:text-base text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* 2. Technical Architecture & Constraints */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              2. Technical Architecture &amp; System Design
            </h2>
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-[#181B22] border border-[#E5E5E7] dark:border-[#292D35] space-y-3 font-mono text-xs text-[#424245] dark:text-[#D2D2D7] whitespace-pre-line leading-relaxed">
              {project.architectureOverview}
            </div>
          </section>

          {/* 3. Data Sources & Scientific Ingestion */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              3. Data Sources &amp; Preprocessing
            </h2>
            <ul className="space-y-2">
              {project.dataSourcesAndProcessing.map((src, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7]">
                  <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#57C7F7] mt-0.5 shrink-0" />
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Numerical Algorithms & Approach */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              4. Algorithms &amp; Numerical Formulations
            </h2>
            <ul className="space-y-2">
              {project.algorithmsAndApproach.map((algo, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7]">
                  <span className="font-mono text-xs text-[#0071E3] dark:text-[#57C7F7] font-bold mt-0.5 shrink-0">
                    [{i + 1}]
                  </span>
                  <span>{algo}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Implementation Challenges */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              5. Core Engineering Challenges Overcome
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {project.engineeringChallenges.map((challenge, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-50/80 dark:bg-[#181B22] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7] leading-relaxed"
                >
                  {challenge}
                </div>
              ))}
            </div>
          </section>

          {/* 6. Results and Validation */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
              6. Results &amp; Scientific Validation
            </h2>
            <p className="text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
              {project.resultsAndValidation}
            </p>
          </section>

          {/* 7. Lessons Learned & Future Roadmap */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E7] dark:border-[#292D35]">
            <div className="space-y-3">
              <h3 className="text-base font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                Key Engineering Lessons Learned
              </h3>
              <ul className="space-y-2">
                {project.lessonsLearned.map((lesson, i) => (
                  <li key={i} className="text-xs text-[#86868B] dark:text-[#86868B] leading-relaxed">
                    • {lesson}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                Future Technical Roadmap
              </h3>
              <ul className="space-y-2">
                {project.futureRoadmap.map((item, i) => (
                  <li key={i} className="text-xs text-[#86868B] dark:text-[#86868B] leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technologies Used Grid */}
          <section className="pt-8 border-t border-[#E5E5E7] dark:border-[#292D35]">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#86868B] mb-3">
              Complete Technologies &amp; Standards
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-100 dark:bg-[#181B22] border border-gray-200 dark:border-gray-800 text-[#1D1D1F] dark:text-[#F5F5F7]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="pt-8 flex items-center justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#0071E3] dark:text-[#57C7F7] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1D1D1F] dark:bg-[#F5F5F7] text-white dark:text-[#08090B]"
            >
              <span>Discuss this architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </article>
  );
}

