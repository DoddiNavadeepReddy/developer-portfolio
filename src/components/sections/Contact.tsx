import React, { useState } from 'react';
import {
  Code2,
  Award,
  BookOpen,
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../icons/SocialIcons';
import { PERSONAL_INFO, CONNECT_CARDS } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  const iconMap: Record<string, React.ReactNode> = {
    Github: <GithubIcon className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Award: <Award className="w-5 h-5" />,
    Linkedin: <LinkedinIcon className="w-5 h-5" />,
    Instagram: <InstagramIcon className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
  };

  return (
    <section id="connect" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 09. CONNECT WITH ME
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Connect <span className="gold-gradient-text">With Me</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
            Explore my coding journey, projects, professional profile, and technical writing.
          </p>
        </div>

        {/* 6 Premium Gold-Accent Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {CONNECT_CARDS.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between gap-5 group hover:shadow-[0_0_25px_rgba(212,175,55,0.14)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#F4D77D] border border-[#D4AF37]/25 group-hover:scale-105 transition-transform">
                    {iconMap[card.icon] || <Sparkles className="w-5 h-5 text-[#D4AF37]" />}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {card.isConfigured ? 'Available' : 'Configurable'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F4D77D] transition-colors mb-1.5">
                  {card.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                {card.isConfigured ? (
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold gold-gradient-btn shadow-sm"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        `The link for ${card.name} is configurable in src/data/portfolioData.ts. Update ${card.id.toUpperCase()}_URL with your profile URL.`
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 cursor-pointer transition-colors"
                  >
                    <span>Configure {card.name} URL</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact Form & Academic Location Info */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                  Open to discussions regarding student collaborations, academic engineering projects, and software development opportunities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0D0D0D] border border-white/[0.08]">
                <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
                  Academic Location
                </p>
                <div className="flex items-center gap-3 text-sm text-zinc-200 mb-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-mono text-xs text-zinc-300">{PERSONAL_INFO.emailContact}</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/[0.08]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Professor / Peer / Colleague"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your note or collaboration thoughts..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F4D77D] text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                    <span>Thank you! Your message draft has been recorded.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-2 w-full py-3 rounded-full font-semibold text-xs gold-gradient-btn flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-black" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
