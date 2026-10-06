import React from 'react';
import { BookOpen, ArrowUpRight, Sparkles, Clock, AlertCircle } from 'lucide-react';
import { EXTERNAL_LINKS, isConfiguredUrl, BLOG_CATEGORIES, BLOG_DRAFTS } from '../../data/portfolioData';

export const BlogSection: React.FC = () => {
  const isBlogActive = isConfiguredUrl(EXTERNAL_LINKS.BLOG_URL);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 08. TECHNICAL WRITING
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                My <span className="gold-gradient-text">Blog</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5A5] mt-1">
                Technical Notes & Learning Journey
              </p>
            </div>

            {/* Configured Blog Link or Setup Status */}
            <div>
              {isBlogActive ? (
                <a
                  href={EXTERNAL_LINKS.BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold gold-gradient-btn shadow-md"
                >
                  <span>Visit Technical Blog</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[#F4D77D] bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                  <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Blog URL Configurable in portfolioData.ts</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mb-8 p-4 rounded-xl bg-[#0D0D0D] border border-white/[0.06]">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Article & Technical Writing Topics:</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-md text-xs font-mono text-[#F4D77D] bg-[#050505] border border-[#D4AF37]/20"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Drafts / Planned Articles Preview (Truthful, Configurable) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_DRAFTS.map((draft, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between gap-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/25">
                    {draft.category}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3 h-3" />
                    {draft.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#F4D77D] transition-colors mb-2.5">
                  {draft.title}
                </h3>

                <p className="text-xs text-[#A5A5A5] leading-relaxed">
                  {draft.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-[#F4D77D]/80 flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#D4AF37]" />
                  {draft.status}
                </span>
                <span className="text-zinc-600">Draft Note</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
