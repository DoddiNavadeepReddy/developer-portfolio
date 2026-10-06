import React from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Working Knowledge':
        return 'border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F4D77D] shadow-[0_0_8px_rgba(212,175,55,0.1)]';
      case 'Learning':
        return 'border-white/15 bg-white/[0.04] text-zinc-200';
      case 'Exploring':
      default:
        return 'border-zinc-700/60 bg-zinc-900/40 text-zinc-400';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 02. TECHNICAL SKILLS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Technical <span className="gold-gradient-text">Skills</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
                Grouped competencies practiced in coursework, personal projects, and continuous problem-solving.
              </p>
            </div>

            {/* Proficiency Level Legend */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono p-2 rounded-xl bg-[#0D0D0D] border border-white/10 w-fit shrink-0">
              <span className="text-zinc-500 mr-1">Status:</span>
              <span className="px-2 py-0.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#F4D77D]">
                Working Knowledge
              </span>
              <span className="px-2 py-0.5 rounded-full border border-white/15 bg-white/[0.04] text-zinc-300">
                Learning
              </span>
              <span className="px-2 py-0.5 rounded-full border border-zinc-700/60 bg-zinc-900/40 text-zinc-400">
                Exploring
              </span>
            </div>
          </div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="flex flex-col gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              {/* Category Name */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.05]">
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-[#D4AF37] rounded-sm" />
                  <span>{group.category}</span>
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Badges with Label Indicators */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 hover:-translate-y-0.5 ${getBadgeStyle(
                      skill.level
                    )}`}
                  >
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-[10px] opacity-75 font-sans px-1.5 py-0.2 rounded bg-black/40">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
