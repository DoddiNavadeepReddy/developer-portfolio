import React from 'react';
import { GraduationCap, MapPin, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Tracker & Heading */}
        <div className="mb-12">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 01. ABOUT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Text */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            {PERSONAL_INFO.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Interest Badges */}
            <div className="pt-4">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                Core Interests & Technical Domains
              </p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Snapshot Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center gap-3 text-white mb-2">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold">Education</h3>
              </div>
              <p className="text-sm text-zinc-300 font-medium">Computer Science & Engineering</p>
              <p className="text-xs text-zinc-500 mt-0.5">REVA University, Bengaluru</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center gap-3 text-white mb-2">
                <Target className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold">Current Focus</h3>
              </div>
              <p className="text-sm text-zinc-300">Undergraduate Student Developer</p>
              <p className="text-xs text-zinc-500 mt-0.5">Active engineering projects & DSA practice</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm">
              <div className="flex items-center gap-3 text-white mb-2">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold">Location</h3>
              </div>
              <p className="text-sm text-zinc-300">Bengaluru, India</p>
              <p className="text-xs text-zinc-500 mt-0.5">Academic & Technology Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
