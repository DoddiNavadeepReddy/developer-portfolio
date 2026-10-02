import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Activities } from './components/sections/Activities';
import { GitHubSection } from './components/sections/GitHubSection';
import { CurrentGoal } from './components/sections/CurrentGoal';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'activities', 'github', 'goal', 'contact'];
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
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans antialiased selection:bg-white/20 selection:text-white">
      {/* Floating Pill Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Single-Page Content */}
      <main>
        {/* 01 HERO */}
        <Hero />

        {/* 02 ABOUT */}
        <About />

        {/* 03 PROJECTS */}
        <Projects />

        {/* 04 SKILLS */}
        <Skills />

        {/* 05 ACTIVITIES */}
        <Activities />

        {/* 06 GITHUB */}
        <GitHubSection />

        {/* 07 CURRENT GOAL */}
        <CurrentGoal />

        {/* 08 CONTACT */}
        <Contact />
      </main>

      {/* 09 FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
