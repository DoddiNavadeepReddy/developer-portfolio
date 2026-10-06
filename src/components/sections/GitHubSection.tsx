import React from 'react';
import { ArrowUpRight, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../icons/SocialIcons';
import { EXTERNAL_LINKS, isConfiguredUrl } from '../../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const hasCrimeShieldRepo = isConfiguredUrl(EXTERNAL_LINKS.CRIMESHIELD_REPO_URL);

  return (
    <section id="github" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 05. GITHUB PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            MY CODE. MY PROJECTS.{' '}
            <span className="gold-gradient-text drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)]">
              MY JOURNEY.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-2xl">
            My GitHub is where my projects, algorithm solutions, experiments, and development journey come together.
          </p>
        </div>

        {/* Central Hub Profile Card (Large & Prominent) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border-2 border-[#D4AF37]/40 shadow-[0_0_35px_rgba(212,175,55,0.1)] hover:border-[#D4AF37] transition-all duration-300 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F4D77D] shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/30 mb-2">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Central Coding Hub</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                DoddiNavadeepReddy
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#D4AF37] mt-0.5">
                github.com/DoddiNavadeepReddy
              </p>
              <p className="text-xs sm:text-sm text-[#A5A5A5] mt-2.5 max-w-xl leading-relaxed">
                My GitHub contains my programming practice, academic projects, algorithm solutions, experiments, and ongoing development work.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-col gap-2.5 w-full md:w-auto shrink-0">
            <a
              href={EXTERNAL_LINKS.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold gold-gradient-btn shadow-md text-center"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
            <a
              href={`${EXTERNAL_LINKS.GITHUB_URL}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium text-white bg-[#050505] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all text-center"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>View Repositories</span>
            </a>
          </div>
        </div>

        {/* Featured Repositories Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>Featured Repositories</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Verified active repositories maintained on GitHub
            </p>
          </div>
          <span className="text-xs font-mono text-[#D4AF37]">
            Active Coursework & DSA
          </span>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Repo 1: HackerRank-3rdSem-Algorithm-Portfolio */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between gap-5 group hover:shadow-[0_0_25px_rgba(212,175,55,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-mono text-[#D4AF37]">Public Repository</span>
                </div>
                {/* Visual Gold Star Accent */}
                <div className="flex items-center gap-1 text-[#F4D77D] text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Featured</span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F4D77D] transition-colors break-words">
                HackerRank-3rdSem-Algorithm-Portfolio
              </h4>
              <p className="text-xs font-mono text-zinc-500 mt-0.5">
                DoddiNavadeepReddy / HackerRank-3rdSem-Algorithm-Portfolio
              </p>

              <p className="text-xs sm:text-sm text-[#A5A5A5] mt-3 leading-relaxed">
                A structured coding portfolio containing solutions to algorithmic programming problems completed using Python, with complexity analysis and submission evidence.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Python', 'Algorithms', 'Problem Solving', 'PEP-8'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Python • 3rd Sem</span>
              <a
                href={EXTERNAL_LINKS.HACKERRANK_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-black bg-[#D4AF37] hover:bg-[#F4D77D] transition-colors font-sans"
              >
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Repo 2: leetcode-solutions */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37]/70 transition-all duration-300 flex flex-col justify-between gap-5 group hover:shadow-[0_0_25px_rgba(212,175,55,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-mono text-[#D4AF37]">Public Repository</span>
                </div>
                <div className="flex items-center gap-1 text-[#F4D77D] text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Featured</span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F4D77D] transition-colors break-words">
                leetcode-solutions
              </h4>
              <p className="text-xs font-mono text-zinc-500 mt-0.5">
                DoddiNavadeepReddy / leetcode-solutions
              </p>

              <p className="text-xs sm:text-sm text-[#A5A5A5] mt-3 leading-relaxed">
                A growing collection of programming solutions created while practicing data structures, algorithms, arrays, strings, linked lists, stacks, and other core concepts.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Data Structures', 'Algorithms', 'Python', 'Problem Solving'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">DSA & Algorithms</span>
              <a
                href={EXTERNAL_LINKS.LEETCODE_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-black bg-[#D4AF37] hover:bg-[#F4D77D] transition-colors font-sans"
              >
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Repo 3: CrimeShield ONLY if repository URL is available in configuration */}
          {hasCrimeShieldRepo && (
            <div className="md:col-span-2 p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between gap-5 group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs font-mono text-[#D4AF37]">Hardware & Software Repository</span>
                  </div>
                  <span className="text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full">
                    CrimeShield
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F4D77D] transition-colors">
                  CrimeShield – Smart Emergency Response System Repository
                </h4>
                <p className="text-xs sm:text-sm text-[#A5A5A5] mt-2 leading-relaxed">
                  Repository containing microcontroller firmware for ESP32-CAM, GPS telemetry routines, and web dashboard services.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">IoT & Emergency Response</span>
                <a
                  href={EXTERNAL_LINKS.CRIMESHIELD_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-black bg-[#D4AF37] hover:bg-[#F4D77D] transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
