import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

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
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 07. CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            I am always open to discussing technology, collaborating on student projects, or connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
                Location & Status
              </p>
              <div className="flex items-center gap-3 text-sm text-zinc-300 mb-3">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="font-mono text-xs text-zinc-400">{PERSONAL_INFO.emailPlaceholder}</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                External Profile
              </p>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-normal">
                For complete project code, documentation, and active repositories, check my public GitHub.
              </p>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-zinc-300 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>github.com/DoddiNavadeepReddy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder={PERSONAL_INFO.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Your message or collaboration idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been prepared.</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 w-full py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
