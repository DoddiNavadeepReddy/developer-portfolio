import React from 'react';
import { Code2, Award, BookOpen, ArrowUpRight, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../icons/SocialIcons';
import { CONNECT_CARDS } from '../../data/portfolioData';

export const PortfolioSnapshot: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Github: <GithubIcon className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
    Linkedin: <LinkedinIcon className="w-5 h-5" />,
    Instagram: <InstagramIcon className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
  };

  return (
    <section id="snapshot" className="py-20 px-4 sm:px-6 border-t border-[#D4AF37]/15 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Faculty Review Badge & Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="uppercase tracking-wider">Faculty & Evaluator Quick Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Portfolio <span className="gold-gradient-text">Snapshot</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl mx-auto">
            One place to explore my coding, projects, learning journey, and professional presence.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {CONNECT_CARDS.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-200 flex flex-col justify-between text-center group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]"
            >
              <div className="flex flex-col items-center">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#F4D77D] border border-[#D4AF37]/20 mb-3 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#F4D77D] transition-colors mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[#A5A5A5] line-clamp-2 leading-snug">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/[0.06]">
                {item.isConfigured ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-[11px] font-mono text-[#F4D77D] hover:underline"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-500">
                    Configurable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
