import React from 'react';
import { expertiseData } from '@/data/expertise';
import { Cpu, Satellite, Waves, BarChart3, Globe, Plane, CheckCircle2 } from 'lucide-react';

export function ExpertiseMatrix() {
  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'domain-a':
        return <Satellite className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'domain-b':
        return <Cpu className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'domain-c':
        return <Waves className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'domain-d':
        return <BarChart3 className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'domain-e':
        return <Globe className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'domain-f':
        return <Plane className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
    }
  };

  return (
    <section id="expertise" className="py-20 sm:py-24 border-b border-[#E5E5E7] dark:border-[#292D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-2">
            <Cpu className="w-4 h-4" />
            <span>SECTION 07 · APPLIED CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Where Geospatial Science Meets Software Engineering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#86868B] leading-relaxed">
            Organized across six core pillars—grounded in physical mechanics, satellite sensor optics, and full-stack spatial software engineering.
          </p>
        </div>

        {/* 6-Domain Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((domain) => (
            <div
              key={domain.id}
              className="p-6 sm:p-7 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#111318] flex flex-col justify-between hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#191C22]">
                    {getDomainIcon(domain.id)}
                  </div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#0071E3] dark:text-[#5AC8FA] font-semibold">
                    {domain.code}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                  {domain.title}
                </h3>

                <p className="text-xs text-[#86868B] leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Applied Evidence Callout */}
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#191C22] border border-gray-100 dark:border-gray-800/80 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0071E3] dark:text-[#5AC8FA] block mb-1">
                    APPLIED EVIDENCE:
                  </span>
                  <p className="text-[11px] text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                    {domain.appliedEvidence}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] block">
                    Core Engineering Competencies:
                  </span>
                  {domain.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[11px] text-[#424245] dark:text-[#D2D2D7]">
                      <span className="text-[#0071E3] dark:text-[#5AC8FA]">•</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap gap-1.5">
                  {domain.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-black/40 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

