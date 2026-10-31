import React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Shield } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/30 dark:bg-[#111318]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-2">
            <Briefcase className="w-4 h-4" />
            <span>SECTION 08 · CAREER TIMELINE &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Professional Experience &amp; Leadership.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#86868B] leading-relaxed">
            From leading commercial remote sensing initiatives and high-resolution agricultural research to paramilitary discipline and scientific conference organization.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#08090B] ${
                  item.current
                    ? 'bg-[#0071E3] dark:bg-[#5AC8FA] ring-4 ring-blue-500/20 animate-pulse'
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#191C22] shadow-xs">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-gray-100 dark:bg-black/50 text-[#0071E3] dark:text-[#5AC8FA] border border-gray-200 dark:border-gray-800">
                        {item.category}
                      </span>
                      {item.current && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 font-semibold">
                          Active Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-[#0071E3] dark:text-[#5AC8FA]">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#86868B] space-y-1">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="py-4 text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                  {item.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B] block">
                    Core Contributions &amp; Scope:
                  </span>
                  <ul className="space-y-1.5">
                    {item.contributions.map((c, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-[#424245] dark:text-[#D2D2D7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#5AC8FA] mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-50 dark:bg-black/30 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"
                    >
                      {skill}
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

