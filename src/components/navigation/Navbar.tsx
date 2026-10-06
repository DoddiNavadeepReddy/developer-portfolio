import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Coding', href: '#coding' },
    { label: 'Education', href: '#education' },
    { label: 'Blog', href: '#blog' },
    { label: 'Connect', href: '#connect' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-xl border-[#D4AF37]/25 shadow-[0_8px_32px_rgba(0,0,0,0.9)]'
            : 'bg-[#0D0D0D]/75 backdrop-blur-md border-white/10'
        }`}
      >
        {/* Monogram Brand Indicator with Gold Accent */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xs font-mono tracking-widest font-semibold text-white hover:text-[#F4D77D] transition-colors uppercase shrink-0"
        >
          DNR<span className="text-[#D4AF37] font-bold">.dev</span>
        </a>

        {/* Desktop Nav Items with Gold Active State */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Tablet / Medium Desktop Nav (compact) */}
        <div className="hidden md:flex lg:hidden items-center gap-1">
          {navItems.slice(0, 5).map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/40'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* External GitHub Shortcut with subtle gold hover */}
        <div className="hidden sm:flex items-center pl-3 border-l border-white/10">
          <a
            href={EXTERNAL_LINKS.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-[#F4D77D] transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-1.5 text-zinc-400 hover:text-[#F4D77D] transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 bg-[#0D0D0D]/95 border border-[#D4AF37]/30 rounded-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.95)] backdrop-blur-2xl flex flex-col gap-2.5 animate-in fade-in duration-200 z-50">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Navigation Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/30'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href={EXTERNAL_LINKS.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-[#F4D77D]"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>
      )}
    </header>
  );
};
