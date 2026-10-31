'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowDown, ArrowUpRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { personalData } from '@/data/personal';

function EarthLoadingBar() {
  const [percent, setPercent] = React.useState(18);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 98) {
          clearInterval(timer);
          return 98;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[450px] sm:h-[550px] lg:h-full lg:min-h-[720px] flex items-center justify-center p-4">
      <div className="w-72 max-w-[85vw] p-6 rounded-2xl border border-[#292D35] bg-[#101217]/80 backdrop-blur-sm space-y-3.5 shadow-2xl">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#86868B] uppercase tracking-wider text-[11px]">Loading 3D Earth</span>
          <span className="text-[#57C7F7] font-bold">{percent}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#181B22] rounded-full overflow-hidden border border-[#292D35]">
          <div
            className="h-full bg-gradient-to-r from-[#0071E3] to-[#57C7F7] rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(87,199,247,0.6)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="text-[10px] font-mono text-gray-500 flex justify-between">
          <span>INITIALIZING SPATIAL TWIN</span>
          <span>NASA VISIBLE EARTH</span>
        </div>
      </div>
    </div>
  );
}

const RealisticEarth = dynamic(
  () => import('./RealisticEarth').then((mod) => mod.RealisticEarth),
  {
    ssr: false,
    loading: () => <EarthLoadingBar />,
  }
);

export function HeroSection() {
  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 overflow-hidden bg-[#08090B]">
      
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#57C7F7]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Earth Container: On desktop (lg:), occupies the full right half of the hero screen with smooth left-to-right fade */}
      <div className="hidden lg:flex absolute top-0 right-0 bottom-0 w-[52vw] xl:w-[55vw] h-full z-0 items-center justify-center pointer-events-none overflow-hidden">
        <RealisticEarth />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Striking Apple-Grade Editorial Typography */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-20 pointer-events-auto py-4 sm:py-8">
            
            {/* Small subtle label */}
            <div className="flex items-center space-x-2">
              <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#57C7F7] font-semibold">
                GEOSPATIAL ENGINEER · SPATIAL AI · EARTH OBSERVATION
              </span>
            </div>

            {/* Oversized Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tight text-[#F5F5F7] leading-[1.02]">
                Engineering Intelligence for a Changing Planet.
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#86868B] font-normal leading-relaxed max-w-xl">
              I build intelligent geospatial systems that transform satellite data into real-world decisions.
            </p>

            {/* Display Name & Role */}
            <div className="pt-1 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0071E3] to-[#57C7F7] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md">
                MH
              </div>
              <div>
                <div className="font-heading font-bold text-base sm:text-lg text-[#F5F5F7]">
                  {personalData.name}
                </div>
                <div className="text-xs text-[#86868B] font-mono">
                  PhD in Remote Sensing &amp; GIS · Senior GIS Analyst
                </div>
              </div>
            </div>

            {/* Clean Apple-style CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#work"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#F5F5F7] text-[#08090B] hover:opacity-90 shadow-md transition-all active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-medium border border-[#292D35] bg-transparent hover:bg-white/5 text-[#F5F5F7] transition-all"
              >
                <span>About Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#86868B]" />
              </Link>
            </div>

          </div>

          {/* Mobile / Tablet 3D Earth (< lg): Renders inline below typography */}
          <div className="block lg:hidden relative w-full flex items-center justify-center pointer-events-none z-10">
            <RealisticEarth />
          </div>

          {/* Desktop Spacer: Ensures clean 2-column layout */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

        </div>
      </div>

      {/* Three Small, Elegant Credibility Indicators Below Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-[#292D35]/80 z-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-xs">
          
          <div className="flex items-center space-x-3 text-[#D2D2D7]">
            <div className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-900/40 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-[#57C7F7]" />
            </div>
            <div>
              <span className="block font-bold text-[#F5F5F7]">PhD · Remote Sensing &amp; GIS</span>
              <span className="text-[11px] text-[#86868B]">Tamil Nadu Agricultural University</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-[#D2D2D7]">
            <div className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-900/40 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 text-[#57C7F7]" />
            </div>
            <div>
              <span className="block font-bold text-[#F5F5F7]">Senior GIS Analyst</span>
              <span className="text-[11px] text-[#86868B]">Dronix Technologies (Aero360)</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-[#D2D2D7]">
            <div className="w-8 h-8 rounded-full bg-blue-950/40 border border-blue-900/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#57C7F7]" />
            </div>
            <div>
              <span className="block font-bold text-[#F5F5F7]">DGCA Commercial Drone Pilot</span>
              <span className="text-[11px] text-[#86868B]">Govt. of India · Valid through 2034</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
