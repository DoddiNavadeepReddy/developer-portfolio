import React from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 03. SKILLS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Technical Stack
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Technologies, languages, and tools I actively practice and build with in coursework and projects.
          </p>
        </div>

        {/* Cian Goon 2-Column Row Stack Layout */}
        <div className="flex flex-col gap-10">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start pb-8 border-b border-white/[0.04] last:border-b-0"
            >
              {/* Category Name Column */}
              <div className="md:col-span-4">
                <h3 className="text-base sm:text-lg font-medium text-zinc-200 tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skills Badges Column */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
