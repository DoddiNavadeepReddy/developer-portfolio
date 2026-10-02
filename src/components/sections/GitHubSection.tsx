import React from 'react';
import { ArrowUpRight, Code, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 05. GITHUB
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            GitHub Workspace
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Public repositories and daily problem-solving practice maintained openly on GitHub.
          </p>
        </div>

        {/* 2 Focused Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  Public Profile
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight">
                @DoddiNavadeepReddy
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                github.com/DoddiNavadeepReddy
              </p>

              <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-normal">
                Houses active coursework projects, IoT embedded prototypes with the ESP32-CAM, and web systems development repositories.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Repository Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Active Practice
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white tracking-tight">
                leetcode-solutions
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                DoddiNavadeepReddy/leetcode-solutions
              </p>

              <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-normal">
                Curated algorithmic problem solutions organized by pattern (two pointers, trees, graphs, dynamic programming) with complexity notes.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.leetcodeRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-black bg-white hover:bg-zinc-200 transition-colors"
            >
              <span>Explore Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
