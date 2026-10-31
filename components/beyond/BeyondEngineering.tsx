import React from 'react';
import { Compass, Target, Mountain, Feather, Eye } from 'lucide-react';

export function BeyondEngineering() {
  const facets = [
    {
      icon: <Target className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />,
      title: "Marksmanship & High-Stress Precision",
      tag: "Discipline",
      desc: "Winning the State Shooting Gold Medal and earning NCC B & C certifications cultivated exceptional breath discipline, micro-adjustment patience, and focus under pressure—attributes that directly carry into debugging complex numerical algorithms.",
    },
    {
      icon: <Mountain className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />,
      title: "Field Ground-Truthing & Aerial Operations",
      tag: "Ground Truth",
      desc: "Believing that models are only as good as empirical verification. From piloting drones in remote agricultural terrain to setting RTK base stations under direct monsoon heat, real-world field intuition anchors every digital line of code.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />,
      title: "Cross-Disciplinary Earth Stewardship",
      tag: "Philosophy",
      desc: "Trained at the intersection of agriculture, hydrology, and computational geometry. Driven by an urgent commitment to ensure spatial computing directly informs water resource sustainability and climate resilience.",
    },
  ];

  return (
    <section className="py-20 border-b border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/30 dark:bg-[#111318]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] mb-2">
            <Feather className="w-4 h-4" />
            <span>SECTION 10 · SCIENTIFIC PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Beyond the Codebase.
          </h2>
          <p className="mt-3 text-base text-[#86868B] dark:text-[#86868B]">
            The discipline, environmental understanding, and physical grounding behind the engineering.
          </p>
        </div>

        {/* Facet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facets.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#191C22] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#111318]">
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase bg-gray-100 dark:bg-black/40 px-2 py-0.5 rounded text-[#86868B]">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

