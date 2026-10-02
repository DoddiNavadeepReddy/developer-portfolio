import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const TITLES = [
  'Developer',
  'Cybersecurity Enthusiast',
  'Problem Solver',
  'Creative Technologist'
];

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TITLES[currentTitleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
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
      className="relative min-h-[750px] lg:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle developer grid ambient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Education & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{PERSONAL_INFO.role}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">{PERSONAL_INFO.institution}</span>
        </div>

        {/* Name Headline - Clean, Editorial, Impactful */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 font-display">
          {PERSONAL_INFO.name}
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-10 sm:h-12 flex items-center justify-center gap-1.5 mb-8">
          <span className="text-lg sm:text-2xl font-light text-zinc-300 font-mono">
            {displayedText}
          </span>
          <span className="inline-block w-2.5 h-6 bg-white/80 animate-pulse" />
        </div>

        {/* Concise Introduction Bio */}
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {PERSONAL_INFO.heroIntro}
        </p>

        {/* Action Buttons - Cian Goon Design Aesthetic */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="px-6 py-3 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="px-6 py-3 rounded-full text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
