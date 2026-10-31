import React from 'react';
import { researchData } from '@/data/research';
import { GraduationCap, BookOpen, Layers, CheckCircle2, Award, ExternalLink } from 'lucide-react';

export function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-24 border-b border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/30 dark:bg-[#111318]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>SECTION 06 · SCIENTIFIC RESEARCH &amp; CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Research That Connects Earth Science and Computation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#86868B] leading-relaxed">
            Bridging physical process-based hydrological modeling, satellite canopy segmentation, and machine learning to address groundwater resilience and agricultural intelligence.
          </p>
        </div>

        {/* Research Cards */}
        <div className="space-y-10">
          {researchData.map((res) => (
            <div
              key={res.id}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#191C22] shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#0071E3] dark:text-[#5AC8FA]">
                    <span className="font-semibold uppercase tracking-wider">{res.degreeLevel} RESEARCH</span>
                    <span>·</span>
                    <span>{res.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    {res.title}
                  </h3>
                  <p className="text-sm font-medium text-[#86868B]">
                    {res.institution}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-[#0071E3] dark:text-[#5AC8FA] border border-blue-200/60 dark:border-blue-900/40">
                    {res.degreeLevel === 'PhD' ? 'Doctoral Dissertation' : `${res.degreeLevel} Investigation`}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="py-4 text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                {res.summary}
              </p>

              {/* Metrics (if available, e.g. 87.3% accuracy, 0.7 Kappa) */}
              {res.resultsAndMetrics && res.resultsAndMetrics.length > 0 && (
                <div className="my-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {res.resultsAndMetrics.map((met) => (
                    <div
                      key={met.label}
                      className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#111318] border border-gray-200/80 dark:border-gray-800"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] block">
                        {met.label}
                      </span>
                      <span className="text-xl font-mono font-bold text-[#0071E3] dark:text-[#5AC8FA] block mt-0.5">
                        {met.value}
                      </span>
                      <span className="text-[11px] text-[#424245] dark:text-[#86868B] block mt-1">
                        {met.context}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Grid: Methods & Key Scientific Contributions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                
                {/* Methodologies */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold block">
                    Research Methods &amp; Mathematical Frameworks
                  </span>
                  <ul className="space-y-1.5">
                    {res.methods.map((m, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-[#424245] dark:text-[#D2D2D7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#5AC8FA] mt-0.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Contributions */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1D1D1F] dark:text-[#F5F5F7] font-semibold block">
                    Scientific &amp; Spatial Impact
                  </span>
                  <ul className="space-y-1.5">
                    {res.keyContributions.map((c, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-[#424245] dark:text-[#D2D2D7]">
                        <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies / Tools Badge */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-[#86868B] uppercase">Stack:</span>
                {res.technologiesUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-black/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

