import React from 'react';
import { Compass } from 'lucide-react';
import { CURRENT_GOAL } from '../../data/portfolioData';

export const CurrentGoal: React.FC = () => {
  return (
    <section id="goal" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 06. CURRENT GOAL
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Current Direction
          </h2>
        </div>

        {/* Primary Statement Callout Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm mb-8">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-zinc-400" />
            <span>Learning Roadmap & Philosophy</span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-light leading-relaxed">
            "{CURRENT_GOAL.statement}"
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CURRENT_GOAL.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.06] flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span>0{i + 1}.</span>
                <span className="text-zinc-300 font-medium">{pillar.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
