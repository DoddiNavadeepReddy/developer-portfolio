import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/[0.06] bg-black">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-white tracking-wide">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs font-mono text-zinc-500 mt-1">
            {PERSONAL_INFO.role} • {PERSONAL_INFO.institution}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-zinc-500">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <span>github.com/DoddiNavadeepReddy</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>© {CURRENT_YEAR}</span>
        </div>
      </div>
    </footer>
  );
};
