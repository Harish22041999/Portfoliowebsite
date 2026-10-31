'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2, ShieldCheck, FileBadge2 } from 'lucide-react';
import { personalData } from '@/data/personal';
import { experienceData } from '@/data/experience';
import { expertiseData } from '@/data/expertise';
import { publicationsData } from '@/data/publications';

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Print Action Header */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#0071E3] dark:bg-[#5AC8FA] text-white dark:text-black hover:opacity-90 transition-opacity"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* Formal Document Sheet */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#111318] print:border-none print:p-0 shadow-sm space-y-10">
          
          {/* Header Block */}
          <div className="border-b border-[#E5E5E7] dark:border-[#292D35] pb-8 space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#1D1D1F] dark:text-[#F5F5F7]">
                {personalData.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#0071E3] dark:text-[#5AC8FA] mt-1">
                {personalData.headline}
              </p>
            </div>

            {/* Contact Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#86868B] font-mono">
              <span className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#5AC8FA]" />
                <a href={`mailto:${personalData.email}`} className="hover:underline">
                  {personalData.email}
                </a>
              </span>
              <span className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#5AC8FA]" />
                <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="hover:underline">
                  {personalData.phone}
                </a>
              </span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#5AC8FA]" />
                <span>{personalData.location}</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#424245] dark:text-[#D2D2D7] leading-relaxed pt-2">
              {personalData.heroBiography}
            </p>
          </div>

          {/* Key Credentials & Licensure */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Key Credentials &amp; Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#191C22]">
                <strong className="block text-[#1D1D1F] dark:text-white">PhD in Remote Sensing &amp; GIS</strong>
                <span className="text-[#86868B]">Tamil Nadu Agricultural University (TNAU)</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#191C22]">
                <strong className="block text-[#1D1D1F] dark:text-white">DGCA Commercial Drone Pilot (Rotorcraft Small)</strong>
                <span className="text-[#86868B]">Govt. of India · Valid through 2034</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#191C22]">
                <strong className="block text-[#1D1D1F] dark:text-white">Registered Software Copyright: SW-17836/2026-CO</strong>
                <span className="text-[#86868B]">SWAT Weather Data Generator Platform</span>
              </div>
              <div className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#191C22]">
                <strong className="block text-[#1D1D1F] dark:text-white">Sakura Science Fellow</strong>
                <span className="text-[#86868B]">Hirosaki University &amp; JST, Japan</span>
              </div>
            </div>
          </section>

          {/* Professional Work Experience */}
          <section className="space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <h3 className="text-sm font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {exp.role} — <span className="font-medium text-[#0071E3] dark:text-[#5AC8FA]">{exp.organization}</span>
                      </h3>
                      <span className="text-[#86868B]">{exp.location}</span>
                    </div>
                    <span className="font-mono text-[#86868B] text-[11px] mt-0.5 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {exp.contributions.map((c, i) => (
                      <li key={i} className="text-xs text-[#424245] dark:text-[#D2D2D7] flex items-start space-x-2">
                        <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Academic Rigor */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Education
            </h2>
            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between items-baseline font-bold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <span>Doctor of Philosophy (PhD) in Remote Sensing &amp; GIS</span>
                  <span className="font-mono font-normal text-xs text-[#86868B]">Doctoral Degree</span>
                </div>
                <div className="text-[#0071E3] dark:text-[#5AC8FA] font-medium">
                  Tamil Nadu Agricultural University (TNAU)
                </div>
                <p className="text-xs text-[#424245] dark:text-[#D2D2D7]">
                  Dissertation: <em>Assessing Impact of Climate Change on Groundwater Resources and Mapping Potential Recharge Zones using Geospatial Tools.</em> Coupled SWAT-MODFLOW-6, SUFI-2 calibration, and deep learning infiltration.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-baseline font-bold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <span>Master of Science (M.Sc.)</span>
                  <span className="font-mono font-normal text-xs text-[#86868B]">Master&apos;s Degree</span>
                </div>
                <div className="text-[#0071E3] dark:text-[#5AC8FA] font-medium">
                  Tamil Nadu Agricultural University (TNAU)
                </div>
                <p className="text-xs text-[#424245] dark:text-[#D2D2D7]">
                  Research: <em>Machine Learning &amp; Object-Based Image Analysis for Mango Plantation Mapping.</em> 3m PlanetScope satellite data, Random Forest classifier, 87.3% accuracy, 0.70 Kappa coefficient.
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-baseline font-bold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <span>Bachelor of Science (B.Sc.)</span>
                  <span className="font-mono font-normal text-xs text-[#86868B]">Undergraduate Degree</span>
                </div>
                <div className="text-[#0071E3] dark:text-[#5AC8FA] font-medium">
                  Tamil Nadu Agricultural University (TNAU)
                </div>
                <p className="text-xs text-[#424245] dark:text-[#D2D2D7]">
                  Plant tissue micropropagation, sterile culture protocols, foundational experimental design and agro-ecological science.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Competencies Matrix */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {expertiseData.map((domain) => (
                <div key={domain.id} className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#191C22]">
                  <strong className="block text-[#1D1D1F] dark:text-white mb-1">
                    {domain.title}
                  </strong>
                  <div className="flex flex-wrap gap-1">
                    {domain.technologies.slice(0, 6).map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications & Registered IP */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Intellectual Property &amp; Scholarly Record
            </h2>
            <div className="space-y-3 text-xs">
              {publicationsData.map((pub) => (
                <div key={pub.id} className="border-l-2 border-[#0071E3] dark:border-[#5AC8FA] pl-3 py-0.5 space-y-0.5">
                  <div className="font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">{pub.title}</div>
                  <div className="text-[11px] text-[#0071E3] dark:text-[#5AC8FA]">{pub.venueOrIssuer} · {pub.yearOrRef}</div>
                  <p className="text-[11px] text-[#86868B]">{pub.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Honors & Leadership */}
          <section className="space-y-3 pt-2">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] font-bold">
              Leadership &amp; Distinctions
            </h2>
            <ul className="space-y-1.5 text-xs text-[#424245] dark:text-[#D2D2D7]">
              <li className="flex items-center space-x-2">
                <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                <span><strong>Student Secretary:</strong> 10th Agricultural Students Graduate Conference (ASGC 2025).</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                <span><strong>Shooting Gold Medalist:</strong> State-level marksmanship competition.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                <span><strong>National Cadet Corps (NCC):</strong> &apos;B&apos; and &apos;C&apos; Certificate Holder, Ministry of Defence.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#0071E3] dark:text-[#5AC8FA] font-bold">•</span>
                <span><strong>Peer Reviewer:</strong> International Earth Observation and Remote Sensing Journals.</span>
              </li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
}

