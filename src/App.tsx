import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './components/sections/Hero';
import { DigitalJourney } from './components/sections/DigitalJourney';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { CodingJourney } from './components/sections/CodingJourney';
import { Activities } from './components/sections/Activities';
import { GitHubSection } from './components/sections/GitHubSection';
import { Education } from './components/sections/Education';
import { LearningAreas } from './components/sections/LearningAreas';
import { CurrentGoal } from './components/sections/CurrentGoal';
import { BlogSection } from './components/sections/BlogSection';
import { PortfolioSnapshot } from './components/sections/PortfolioSnapshot';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const journeyMilestones = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'coding', label: 'Coding' },
    { id: 'education', label: 'Education' },
    { id: 'blog', label: 'Blog' },
    { id: 'connect', label: 'Connect' },
  ];

  useEffect(() => {
    const sectionIds = [
      'home',
      'journey',
      'about',
      'skills',
      'projects',
      'coding',
      'activities',
      'github',
      'education',
      'learning-areas',
      'goal',
      'blog',
      'snapshot',
      'connect'
    ];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToMilestone = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#F4D77D] relative">
      {/* Floating Pill Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Special Gold Detail: Subtle Gold Vertical Progress Journey Indicator (Desktop Right Side) */}
      <aside
        aria-label="Journey Progress Track"
        className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center z-40 pointer-events-auto"
      >
        <div className="relative flex flex-col items-center gap-5">
          {/* Subtle Vertical Gold Connector Line */}
          <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/35 to-transparent pointer-events-none" />

          {journeyMilestones.map((m) => {
            const isActive = activeSection === m.id;
            return (
              <button
                key={m.id}
                onClick={() => scrollToMilestone(m.id)}
                title={`Jump to ${m.label}`}
                className="group relative flex items-center justify-center p-1 cursor-pointer transition-transform duration-200"
              >
                {/* Dot */}
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#F4D77D] shadow-[0_0_12px_#D4AF37] scale-125 border border-white'
                      : 'bg-[#0D0D0D] border border-[#D4AF37]/50 group-hover:border-[#F4D77D]'
                  }`}
                />

                {/* Tooltip Label */}
                <span className="absolute right-6 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase text-black bg-[#F4D77D] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                  {m.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Single-Page Content */}
      <main className="relative">
        {/* 01 HERO SECTION */}
        <Hero />

        {/* 02 FEATURED GOLD SECTION: MY DIGITAL JOURNEY */}
        <DigitalJourney />

        {/* 03 ABOUT ME */}
        <About />

        {/* 04 TECHNICAL SKILLS */}
        <Skills />

        {/* 05 FEATURED PROJECTS (CrimeShield Gold Feature, HackerRank Portfolio, LeetCode) */}
        <Projects />

        {/* 06 CODING JOURNEY (Problem Solving Journey with Gold HackerRank Achievement) */}
        <CodingJourney />

        {/* 07 COURSEWORK ACTIVITIES (Preserved & Enhanced) */}
        <Activities />

        {/* 08 GITHUB PORTFOLIO (Central Hub & Repositories) */}
        <GitHubSection />

        {/* 09 EDUCATION (REVA University Timeline Card) */}
        <Education />

        {/* 10 WHAT I'M EXPLORING (Learning Areas) */}
        <LearningAreas />

        {/* 11 CURRENT GOAL / ROADMAP */}
        <CurrentGoal />

        {/* 12 PERSONAL BLOG (Technical Notes & Learning Journey) */}
        <BlogSection />

        {/* 13 PORTFOLIO SNAPSHOT (Faculty Evaluation Quick Overview) */}
        <PortfolioSnapshot />

        {/* 14 CONNECT WITH ME & CONTACT FORM (6 Gold Destination Cards) */}
        <Contact />
      </main>

      {/* 15 FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
