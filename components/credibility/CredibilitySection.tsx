import { personalData } from '@/data/personal';
import { Award, ShieldCheck, CheckCircle2, BookmarkCheck, FileBadge2 } from 'lucide-react';

export function CredibilitySection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'phd':
        return <Award className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'senior-analyst':
        return <ShieldCheck className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'drone-pilot':
        return <CheckCircle2 className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'copyright':
        return <FileBadge2 className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      case 'peer-reviewer':
        return <BookmarkCheck className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#0071E3] dark:text-[#5AC8FA]" />;
    }
  };

  return (
    <section className="py-12 border-y border-[#E5E5E7] dark:border-[#292D35] bg-[#F5F5F7]/60 dark:bg-[#111318]/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0071E3] dark:text-[#5AC8FA] block">
              VERIFIED PROFESSIONAL RECORD
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mt-0.5">
              Authentic Credentials &amp; Certifications
            </h2>
          </div>
          <p className="text-xs text-[#86868B] max-w-sm mt-2 sm:mt-0 font-normal">
            Backed by accredited academic doctoral research, government licensure, and registered intellectual property.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {personalData.credentials.map((cred) => (
            <div
              key={cred.id}
              className="p-4 rounded-xl bg-white dark:bg-[#191C22] border border-[#E5E5E7] dark:border-[#292D35] flex flex-col justify-between hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#111318]">
                    {getIcon(cred.id)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-gray-50 dark:bg-[#111318] text-[#86868B] border border-gray-200 dark:border-gray-800">
                    {cred.badge}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1 line-clamp-2">
                  {cred.title}
                </h3>
                <p className="text-xs font-medium text-[#0071E3] dark:text-[#5AC8FA] mb-2">
                  {cred.issuer}
                </p>
                <p className="text-[11px] text-[#424245] dark:text-[#D2D2D7] leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#86868B]">STATUS / REF</span>
                <span className="text-[10px] font-mono font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {cred.dateOrValidity}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

