import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, CONNECT_CARDS } from '../../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 px-4 sm:px-6 border-t border-[#D4AF37]/20 bg-[#050505]">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          {/* Student Profile Info */}
          <div>
            <p className="text-base font-bold text-white tracking-wide">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs font-mono text-[#D4AF37] mt-1">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.university}
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-0.5">
              {PERSONAL_INFO.currentLevel} ({PERSONAL_INFO.semester}) • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Six Footer Destination Links (Only valid links navigate, configurable links indicate status) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-xs font-mono">
            {CONNECT_CARDS.map((card) => (
              card.isConfigured ? (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-[#F4D77D] transition-colors"
                >
                  <span>{card.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              ) : (
                <span
                  key={card.id}
                  className="text-zinc-600 cursor-default"
                  title={`${card.name} URL configurable in portfolioData.ts`}
                >
                  {card.name}
                </span>
              )
            ))}
          </div>
        </div>

        {/* Closing Line and Copyright */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <p className="text-zinc-400 italic">
            "{PERSONAL_INFO.hero.supportingText.split('.')[0]}. Building, learning, and sharing my journey in technology."
          </p>
          <span>© {CURRENT_YEAR} Doddi Navadeep Reddy</span>
        </div>
      </div>
    </footer>
  );
};
