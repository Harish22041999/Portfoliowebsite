'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ArrowUpRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalData } from '@/data/personal';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Engineering Collaboration',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct, reliable mailto fallback ensuring the user's message is never lost
    const subject = encodeURIComponent(`[${formData.topic}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-b border-[#E5E5E7] dark:border-[#292D35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] block mb-2">
            SECTION 11 · DIRECT INQUIRIES &amp; ENGAGEMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Let&apos;s Build Technology That Understands Our Planet.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] dark:text-[#86868B] leading-relaxed">
            Open to meaningful conversations around geospatial engineering, Earth observation, spatial AI, climate technology, and research collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#111318] space-y-6">
              
              {/* Email */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B]">
                  Direct Email
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#5AC8FA] transition-colors"
                  >
                    {personalData.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B]">
                  Direct Phone / Signal
                </span>
                <div>
                  <a
                    href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-[#0071E3] dark:hover:text-[#5AC8FA]"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868B]">
                  Primary Bases &amp; Node
                </span>
                <div className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-[#0071E3] dark:text-[#5AC8FA] shrink-0" />
                  <span>{personalData.location}</span>
                </div>
                <div className="text-[11px] font-mono text-[#86868B]">
                  13.0827° N, 80.2707° E · IST (UTC+5:30)
                </div>
              </div>

            </div>

            {/* Academic & Professional Profiles */}
            <div className="p-6 rounded-2xl border border-[#E5E5E7] dark:border-[#292D35] bg-gray-50/50 dark:bg-[#111318]/50 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868B] block">
                Scholarly &amp; Engineering Networks
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#191C22] flex items-center justify-between text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a
                  href="https://www.researchgate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#191C22] flex items-center justify-between text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400"
                >
                  <span>ResearchGate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#191C22] flex items-center justify-between text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#191C22] flex items-center justify-between text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-gray-400"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Refined Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-[#E5E5E7] dark:border-[#292D35] bg-white dark:bg-[#111318] shadow-xs space-y-5"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-heading font-bold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#86868B]">
                  Your message will directly open your preferred email client with all technical fields pre-formatted.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-[#86868B] block">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Elena Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#191C22] text-[#1D1D1F] dark:text-white focus:border-[#0071E3] dark:focus:border-[#5AC8FA] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-[#86868B] block">
                    YOUR WORK EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#191C22] text-[#1D1D1F] dark:text-white focus:border-[#0071E3] dark:focus:border-[#5AC8FA] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="org" className="text-xs font-mono text-[#86868B] block">
                    ORGANIZATION / TEAM
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apple, Google Earth, Esri"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#191C22] text-[#1D1D1F] dark:text-white focus:border-[#0071E3] dark:focus:border-[#5AC8FA] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="topic" className="text-xs font-mono text-[#86868B] block">
                    DISCUSSION TOPIC
                  </label>
                  <select
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#191C22] text-[#1D1D1F] dark:text-white focus:border-[#0071E3] dark:focus:border-[#5AC8FA] focus:outline-hidden"
                  >
                    <option value="Senior Engineering Role">Senior Engineering / Leadership Role</option>
                    <option value="Research Collaboration">Research / Doctoral Collaboration</option>
                    <option value="Hydrodynamic Consultation">DELUGE 3D / Hydrodynamic Consultation</option>
                    <option value="Spatial AI Development">Spatial AI / Earth Observation Development</option>
                    <option value="Other">General Discussion</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="msg" className="text-xs font-mono text-[#86868B] block">
                  PROJECT CONTEXT &amp; MESSAGE *
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your engineering initiative, research challenge, or role details..."
                  className="w-full p-3.5 rounded-xl text-xs border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#191C22] text-[#1D1D1F] dark:text-white focus:border-[#0071E3] dark:focus:border-[#5AC8FA] focus:outline-hidden resize-none leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-[#86868B]">
                  * Direct dispatch to harish.merode@gmail.com
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#0071E3] hover:bg-[#0077ED] dark:bg-[#5AC8FA] dark:hover:bg-[#4bbbe8] text-white dark:text-[#08090B] transition-all transform active:scale-95"
                >
                  <span>Dispatch Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Email client opened. If it didn&apos;t trigger automatically, please email harish.merode@gmail.com directly.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

