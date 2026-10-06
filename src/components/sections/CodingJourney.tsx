import React from 'react';
import { Award, Code2, GitBranch, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';
import { CODING_JOURNEY, EXTERNAL_LINKS, isConfiguredUrl } from '../../data/portfolioData';

export const CodingJourney: React.FC = () => {
  return (
    <section id="coding" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 04. PROBLEM SOLVING JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Problem Solving <span className="gold-gradient-text">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
            Verified algorithmic submissions, consistent data structure study, and transparent version control.
          </p>
        </div>

        {/* 3 Visual Progress Cards (No fake stats, verified qualitative progress) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: GOLD CODING ACHIEVEMENT — HackerRank (Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border-2 border-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.14)] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between gap-6">
            <div>
              {/* Gold Label & Achievement Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] to-[#F4D77D] text-black shadow-[0_0_15px_rgba(212,175,55,0.35)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  CODING ACHIEVEMENT
                </span>

                {/* Premium Gold Badge-Style Visual Element */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F4D77D] text-xs font-mono shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-semibold">{CODING_JOURNEY.hackerRank.badgeText}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {CODING_JOURNEY.hackerRank.title}
              </h3>
              <p className="text-xs font-mono text-[#D4AF37] mt-1 mb-4">
                {CODING_JOURNEY.hackerRank.subtitle} • 5 Algorithmic Problems
              </p>

              {/* Progress Bullet Points */}
              <div className="flex flex-col gap-2.5 my-5">
                {CODING_JOURNEY.hackerRank.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Verified Problems Pill Showcase */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#D4AF37]/20 mb-2">
                <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-2">
                  Completed Challenge Submissions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Mini-Max Sum',
                    'Birthday Cake Candles',
                    'Insertion Sort – Part 1',
                    'Binary Search',
                    'Mark and Toys'
                  ].map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/25"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Verified on HackerRank
              </span>
              <a
                href={EXTERNAL_LINKS.HACKERRANK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold gold-gradient-btn shadow-sm"
              >
                <span>View HackerRank Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          </div>

          {/* Cards 2 & 3: LeetCode & GitHub (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* LeetCode Card */}
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between flex-1 gap-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#F4D77D] border border-[#D4AF37]/25">
                    <Code2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10">
                    DSA Practice
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {CODING_JOURNEY.leetCode.title}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mt-0.5 mb-3">
                  {CODING_JOURNEY.leetCode.subtitle}
                </p>

                <div className="flex flex-col gap-2">
                  {CODING_JOURNEY.leetCode.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#A5A5A5]">
                      <span className="text-[#D4AF37] font-mono">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={EXTERNAL_LINKS.LEETCODE_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-[#F4D77D] transition-colors inline-flex items-center gap-1"
                >
                  <span>DSA Repo</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>

                {isConfiguredUrl(EXTERNAL_LINKS.LEETCODE_URL) ? (
                  <a
                    href={EXTERNAL_LINKS.LEETCODE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <span>LeetCode</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500">
                    Configurable Profile
                  </span>
                )}
              </div>
            </div>

            {/* GitHub Public Practice Card */}
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between flex-1 gap-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#F4D77D] border border-[#D4AF37]/25">
                    <GitBranch className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10">
                    Version Control
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {CODING_JOURNEY.gitHub.title}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] mt-0.5 mb-3">
                  {CODING_JOURNEY.gitHub.subtitle}
                </p>

                <div className="flex flex-col gap-2">
                  {CODING_JOURNEY.gitHub.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#A5A5A5]">
                      <span className="text-[#D4AF37] font-mono">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  @DoddiNavadeepReddy
                </span>
                <a
                  href={EXTERNAL_LINKS.GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-[#D4AF37]/15 hover:text-[#F4D77D] transition-colors"
                >
                  <span>Explore GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
