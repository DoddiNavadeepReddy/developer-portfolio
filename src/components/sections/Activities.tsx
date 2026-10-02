import React from 'react';
import { GitBranch, Terminal, Users, Award } from 'lucide-react';
import { ACTIVITIES } from '../../data/portfolioData';

export const Activities: React.FC = () => {
  const icons = [Terminal, GitBranch, Users, Award];

  return (
    <section id="activities" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 04. ACTIVITIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Academic & Portfolio Activities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Documented coursework milestones, version-control practices, and collaborative tool setup.
          </p>
        </div>

        {/* 4 Clean Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={activity.number}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                      Activity {activity.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-zinc-500" />
                  </div>

                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {activity.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-medium mb-3">
                    {activity.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {activity.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {activity.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/5"
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
