import React from 'react';
import { GitBranch, Terminal, Users, Award } from 'lucide-react';
import { ACTIVITIES } from '../../data/portfolioData';

export const Activities: React.FC = () => {
  const icons = [Terminal, GitBranch, Users, Award];

  return (
    <section id="activities" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 05. COURSEWORK ACTIVITIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Academic & Portfolio <span className="gold-gradient-text">Activities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
            Documented coursework milestones, version-control practices, and collaborative tool setup.
          </p>
        </div>

        {/* 4 Clean Activity Cards with Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={activity.number}
                className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between gap-4 group hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#F4D77D] px-2.5 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/25">
                      Activity {activity.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-1 group-hover:text-[#F4D77D] transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-xs text-[#D4AF37] font-mono mb-3">
                    {activity.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed font-normal">
                    {activity.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {activity.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-300 bg-[#050505] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
