import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../icons/SocialIcons';
import { PERSONAL_INFO, EXTERNAL_LINKS } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = PERSONAL_INFO.hero.dynamicTitles;
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 28 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle developer grid ambient background with very faint gold radial glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Education & Status Pill with Gold Border */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-[#0D0D0D] border border-[#D4AF37]/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.08)]">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#F4D77D] font-medium">{PERSONAL_INFO.currentLevel}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">{PERSONAL_INFO.semester}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">{PERSONAL_INFO.university}</span>
        </div>

        {/* Name Title */}
        <h2 className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
          {PERSONAL_INFO.name}
        </h2>

        {/* Main Heading: "BUILD. SOLVE. CREATE." with Gold Highlights & Subtle Glow Underneath */}
        <div className="relative mb-5">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-display">
            <span className="gold-gradient-text drop-shadow-[0_2px_18px_rgba(212,175,55,0.25)]">BUILD.</span>{' '}
            <span className="gold-gradient-text drop-shadow-[0_2px_18px_rgba(212,175,55,0.25)]">SOLVE.</span>{' '}
            <span className="gold-gradient-text drop-shadow-[0_2px_18px_rgba(212,175,55,0.25)]">CREATE.</span>
          </h1>
          {/* Subtle gold decorative accent line underneath */}
          <div className="mt-4 mx-auto w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_#D4AF37]" />
        </div>

        {/* Dynamic Typing Subheading */}
        <div className="h-9 sm:h-11 flex items-center justify-center gap-1.5 mb-3">
          <span className="text-base sm:text-xl font-medium text-zinc-300 font-mono">
            {displayedText}
          </span>
          <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-6 bg-[#D4AF37] animate-pulse" />
        </div>

        {/* Subheading text */}
        <p className="text-xs sm:text-sm font-mono text-[#D4AF37]/90 tracking-wide mb-5">
          {PERSONAL_INFO.hero.subheading}
        </p>

        {/* Supporting text */}
        <p className="text-[#A5A5A5] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {PERSONAL_INFO.hero.supportingText}
        </p>

        {/* Action Buttons: Gold Primary, Gold-Border Secondary, Minimal Tertiary */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 rounded-full text-sm font-semibold gold-gradient-btn flex items-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 text-black" />
          </button>

          <a
            href={EXTERNAL_LINKS.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-medium text-white bg-[#0D0D0D] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-[#F4D77D]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>

          <button
            type="button"
            onClick={() => scrollTo('connect')}
            className="px-6 py-3 rounded-full text-sm font-medium text-zinc-400 hover:text-[#F4D77D] hover:bg-white/[0.04] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]/70" />
            <span>Connect With Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};
