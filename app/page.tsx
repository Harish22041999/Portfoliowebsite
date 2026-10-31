'use client';

import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { SelectedWorkSection } from '@/components/work/SelectedWorkSection';
import { ResearchStorySection } from '@/components/research/ResearchStorySection';
import { PublicationsSection } from '@/components/publications/PublicationsSection';
import { AboutSection } from '@/components/about/AboutSection';
import { RecognitionStrip } from '@/components/recognition/RecognitionStrip';
import { ContactMinimal } from '@/components/contact/ContactMinimal';

export default function HomePage() {
  return (
    <div className="relative">
      {/* SECTION 01 — CINEMATIC INTRODUCTION */}
      <HeroSection />

      {/* SECTION 02 — SELECTED WORK (3 Flagship Systems) */}
      <SelectedWorkSection />

      {/* SECTION 03 — RESEARCH AS VISUAL STORYTELLING (Doctoral & Master's) */}
      <ResearchStorySection />

      {/* PUBLICATIONS SECTION (Peer-Reviewed Articles & Submitted Manuscripts) */}
      <PublicationsSection />

      {/* SECTION 04 — ABOUT & EXPERTISE (Scientist by Training. Engineer by Practice.) */}
      <AboutSection />

      {/* SECTION 05 — RECOGNITION & CREDENTIALS (Minimal Strip) */}
      <RecognitionStrip />

      {/* SECTION 06 — CONTACT (Let's Build What's Next.) */}
      <ContactMinimal />
    </div>
  );
}
