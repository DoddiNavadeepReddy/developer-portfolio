import React, { useState } from 'react';
import { ArrowUpRight, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'iot' | 'academic' | 'dsa'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT & Systems' },
    { id: 'academic', label: 'System Design' },
    { id: 'dsa', label: 'Problem Solving' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
            // 02. PROJECTS
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
                Practical implementations, academic system designs, and algorithmic problem-solving practice.
              </p>
            </div>

            {/* Filter Pills (Cian Goon Style) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/10 w-fit">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col gap-6"
            >
              {/* Header Meta: Number, Title, Type */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-zinc-500 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 shrink-0 mt-0.5">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {project.type}
                    </p>
                  </div>
                </div>

                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10">
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Architecture Modules (Specific to E-Commerce Project 02) */}
              {project.modules && project.modules.length > 0 && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-zinc-400" />
                    <span>System Architecture Modules:</span>
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {project.modules.map((moduleName, i) => (
                      <div
                        key={moduleName}
                        className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-300"
                      >
                        <span className="text-zinc-600">0{i + 1}.</span>
                        <span>{moduleName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.highlights && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Implementation Architecture & Focus:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies & Action Footer */}
              <div className="pt-2 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white bg-white/10 hover:bg-white/20 transition-colors w-fit self-start sm:self-auto shrink-0"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-zinc-500 italic">
                    Academic Coursework Repository
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
