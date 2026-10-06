import React, { useState } from 'react';
import { ArrowUpRight, Code2, Sparkles, CheckCircle2, Shield, Award, X, Cpu } from 'lucide-react';
import { PROJECTS, isConfiguredUrl } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'iot' | 'algorithms'>('all');
  const [selectedProjectModal, setSelectedProjectModal] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT & Systems' },
    { id: 'algorithms', label: 'Algorithms & Problem Solving' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const activeModalProject = PROJECTS.find((p) => p.id === selectedProjectModal);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 border-t border-[#D4AF37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            // 03. FEATURED PROJECTS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Featured <span className="gold-gradient-text">Projects</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A5A5A5] mt-2 max-w-xl">
                Hardware microcontroller prototypes, algorithmic solution portfolios, and documented repositories.
              </p>
            </div>

            {/* Filter Pills with Gold Active Indicator */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-[#0D0D0D] border border-white/10 w-fit">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#D4AF37]/20 text-[#F4D77D] border border-[#D4AF37]/40 shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Showcase List */}
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.isFeatured;

            return (
              <div
                key={project.id}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-300 flex flex-col gap-6 ${
                  isFeatured
                    ? 'bg-[#0D0D0D] border-2 border-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]'
                    : 'bg-[#0D0D0D] border border-white/[0.08] hover:border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Header Meta: Number, Featured Badge, Title, Category */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-md shrink-0 mt-0.5 ${
                        isFeatured
                          ? 'text-[#F4D77D] bg-[#D4AF37]/15 border border-[#D4AF37]/30'
                          : 'text-zinc-500 bg-white/[0.03] border border-white/5'
                      }`}
                    >
                      {project.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-[#D4AF37] to-[#F4D77D] text-black shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                            <Sparkles className="w-2.5 h-2.5" />
                            FEATURED PROJECT
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-[#D4AF37]">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10">
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#A5A5A5] text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Specific Highlight Banner (CrimeShield Privacy Highlight) */}
                {project.highlight && (
                  <div className="p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-start gap-3 text-xs sm:text-sm text-[#F4D77D]">
                    <Shield className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Design Highlight: </strong>
                      {project.highlight}
                    </span>
                  </div>
                )}

                {/* Solved Problems List (HackerRank Portfolio) */}
                {project.problems && (
                  <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08]">
                    <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Verified Algorithmic Solutions in Python:</span>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {project.problems.map((problemName, idx) => (
                        <div
                          key={problemName}
                          className="px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-300"
                        >
                          <span className="text-[#D4AF37]">0{idx + 1}.</span>
                          <span className="truncate">{problemName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Highlights bullets */}
                {project.highlights && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Technical Architecture & Focus:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#A5A5A5]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies and Action Buttons Footer */}
                <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {/* CrimeShield Specific Buttons */}
                    {project.id === 'crimeshield' && (
                      <>
                        <button
                          type="button"
                          onClick={() => setSelectedProjectModal(project.id)}
                          className="px-4 py-2 rounded-full text-xs font-semibold gold-gradient-btn flex items-center gap-1.5 cursor-pointer"
                        >
                          <Cpu className="w-3.5 h-3.5 text-black" />
                          <span>View Project</span>
                        </button>

                        {isConfiguredUrl(project.repoUrl) ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#0D0D0D] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
                          >
                            <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setSelectedProjectModal(project.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 cursor-pointer"
                            title="Coursework repository in development / internal review"
                          >
                            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                            <span>GitHub (Coursework Repo)</span>
                          </button>
                        )}
                      </>
                    )}

                    {/* HackerRank Portfolio Buttons */}
                    {project.id === 'hackerrank-portfolio' && (
                      <>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold gold-gradient-btn"
                          >
                            <Code2 className="w-3.5 h-3.5 text-black" />
                            <span>View Repository</span>
                            <ArrowUpRight className="w-3 h-3 text-black" />
                          </a>
                        )}
                        {project.hackerrankUrl && (
                          <a
                            href={project.hackerrankUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#0D0D0D] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors"
                          >
                            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>HackerRank Profile</span>
                            <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                          </a>
                        )}
                      </>
                    )}

                    {/* LeetCode Solutions Buttons */}
                    {project.id === 'leetcode-solutions' && (
                      <>
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold gold-gradient-btn"
                          >
                            <Code2 className="w-3.5 h-3.5 text-black" />
                            <span>View Repository</span>
                            <ArrowUpRight className="w-3 h-3 text-black" />
                          </a>
                        )}
                        {isConfiguredUrl(project.leetcodeUrl) ? (
                          <a
                            href={project.leetcodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#0D0D0D] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 transition-colors"
                          >
                            <span>LeetCode</span>
                            <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                "LeetCode URL placeholder in portfolioData.ts. You can set LEETCODE_URL to your profile link."
                              )
                            }
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 cursor-pointer"
                          >
                            <span>LeetCode Profile</span>
                            <span className="text-[10px] text-[#D4AF37]">(Configurable)</span>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Project Modal for CrimeShield */}
      {selectedProjectModal && activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.2)] max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-gradient-to-r from-[#D4AF37] to-[#F4D77D] text-black mb-3">
              <Sparkles className="w-3 h-3" />
              {activeModalProject.badge || 'PROJECT SPECIFICATION'}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {activeModalProject.title}
            </h3>
            <p className="text-xs font-mono text-[#D4AF37] mb-4">
              {activeModalProject.type}
            </p>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
              <h4 className="text-xs font-mono text-[#F4D77D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                Privacy-Conscious Telemetry
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeModalProject.highlight}
              </p>
            </div>

            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
              System Modules & Technologies
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeModalProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-[#F4D77D] bg-[#050505] border border-[#D4AF37]/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Coursework IoT Engineering Project
              </span>
              <button
                type="button"
                onClick={() => setSelectedProjectModal(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold gold-gradient-btn cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
