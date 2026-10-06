import React from 'react';
import { ShieldCheck, Network, Code2, Cpu, Binary, Sparkles } from 'lucide-react';
import { LEARNING_AREAS } from '../../data/portfolioData';

export const LearningAreas: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
    Network: <Network className="w-5 h-5 text-[#D4AF37]" />,
    Code2: <Code2 className="w-5 h-5 text-[#D4AF37]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#D4AF37]" />,
    Binary: <Binary className="w-5 h-5 text-[#D4AF37]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
  };

  return (
    <section id="learning-areas" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 07. LEARNING AREAS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            What I'm <span className="gold-gradient-text">Exploring</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
            Key domains in Computer Science where I am actively strengthening practical skills and theoretical concepts.
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEARNING_AREAS.map((area, idx) => (
            <div
              key={area.title}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(212,175,55,0.1)] hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#F4D77D] group-hover:scale-105 transition-transform">
                    {iconMap[area.icon] || <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#F4D77D] transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-[#D4AF37]">
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                <span>Active Study & Implementation</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
