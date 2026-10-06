import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Tracker & Heading with Gold Accent */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 01. ABOUT ME
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            About <span className="gold-gradient-text">Me</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
            {PERSONAL_INFO.course} • {PERSONAL_INFO.university}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Text */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-[#A5A5A5] text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I’m a 2nd-year Computer Science and Engineering student at REVA University. I enjoy learning technology by building projects, solving programming problems, and experimenting with different development tools.
            </p>
            <p>
              My current learning journey includes Python, Java, web development, algorithms, Git/GitHub, networking, cybersecurity, and IoT. I’m particularly interested in understanding how software and technology can be used to solve practical real-world problems.
            </p>
            <p>
              I believe in learning through implementation rather than only studying theory. My portfolio showcases my coding practice, academic projects, GitHub work, and continuous learning journey.
            </p>

            {/* Profile Highlights Tags */}
            <div className="pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Profile Highlights</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.profileHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#F4D77D] bg-[#0D0D0D] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 transition-all duration-200"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Interests Tags */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                <span>Primary Technical Interests</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {PERSONAL_INFO.primaryInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Snapshot Cards with Subtle Gold Borders */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/25 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/50 transition-all">
              <div className="flex items-center gap-3 text-white mb-2">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F4D77D]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Course & University</h3>
                  <span className="text-[11px] font-mono text-[#D4AF37]">Academic Status</span>
                </div>
              </div>
              <p className="text-sm text-[#F5F5F5] font-medium">{PERSONAL_INFO.course}</p>
              <p className="text-xs text-zinc-400 mt-1">{PERSONAL_INFO.university}</p>
              <p className="text-xs font-mono text-[#F4D77D] mt-1 bg-[#D4AF37]/10 px-2 py-0.5 rounded w-fit">
                {PERSONAL_INFO.currentLevel} • {PERSONAL_INFO.semester}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all">
              <div className="flex items-center gap-3 text-white mb-2">
                <div className="p-2 rounded-lg bg-white/[0.04] text-zinc-300">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Focus & Approach</h3>
                  <span className="text-[11px] font-mono text-zinc-500">Methodology</span>
                </div>
              </div>
              <p className="text-sm text-zinc-300">Hands-on Implementation</p>
              <p className="text-xs text-[#A5A5A5] mt-1">
                Coursework projects, Python & Java development, cybersecurity exploration, and LeetCode / HackerRank problem solving.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] backdrop-blur-sm hover:border-[#D4AF37]/30 transition-all">
              <div className="flex items-center gap-3 text-white mb-2">
                <div className="p-2 rounded-lg bg-white/[0.04] text-zinc-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Location</h3>
                  <span className="text-[11px] font-mono text-zinc-500">Karnataka, India</span>
                </div>
              </div>
              <p className="text-sm text-zinc-300">{PERSONAL_INFO.location}</p>
              <p className="text-xs text-zinc-500 mt-1">India's Leading Technology & Innovation Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
