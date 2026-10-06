import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 06. EDUCATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Academic <span className="gold-gradient-text">Education</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
            Undergraduate engineering curriculum, foundational computing coursework, and academic milestones.
          </p>
        </div>

        {/* Timeline-Style Education Card */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#D4AF37]/40">
          {/* Glowing Timeline Marker */}
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_#D4AF37]">
            <span className="w-2 h-2 rounded-full bg-[#F4D77D]" />
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border-2 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.08)] hover:border-[#D4AF37]/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/30 mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Undergraduate Degree</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-base font-semibold text-[#D4AF37] mt-0.5">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/25">
                  <Calendar className="w-3.5 h-3.5" />
                  {EDUCATION_DATA.status}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  {EDUCATION_DATA.location}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A5A5A5] leading-relaxed mb-6 font-normal">
              {EDUCATION_DATA.summary}
            </p>

            {/* Core Coursework & Subjects */}
            <div className="pt-4 border-t border-white/[0.08]">
              <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                Key Coursework & Fundamental Subjects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {EDUCATION_DATA.coreSubjects.map((subject, idx) => (
                  <div
                    key={subject}
                    className="p-2.5 rounded-lg bg-[#050505] border border-white/5 flex items-center gap-2 text-xs text-zinc-300"
                  >
                    <span className="font-mono text-[#D4AF37] text-[11px]">0{idx + 1}.</span>
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
