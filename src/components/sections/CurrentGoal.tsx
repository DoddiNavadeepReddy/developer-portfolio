import React from 'react';
import { Compass } from 'lucide-react';
import { CURRENT_GOAL } from '../../data/portfolioData';

export const CurrentGoal: React.FC = () => {
  return (
    <section id="goal" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // CURRENT DIRECTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Learning <span className="gold-gradient-text">Roadmap</span>
          </h2>
        </div>

        {/* Primary Statement Callout Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0D0D] border-2 border-[#D4AF37]/30 backdrop-blur-sm mb-8 shadow-[0_0_25px_rgba(212,175,55,0.08)]">
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>Core Engineering Philosophy</span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-100 font-light leading-relaxed">
            "{CURRENT_GOAL.statement}"
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CURRENT_GOAL.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#D4AF37]">0{i + 1}.</span>
                <span className="text-white font-medium">{pillar.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
