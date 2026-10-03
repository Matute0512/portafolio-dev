import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { PROJECTS, PROJECT_FILTERS } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon } from './ui/Icons';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section 
      id="proyectos" 
      aria-labelledby="projects-heading" 
      className="py-16 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      <SectionHeader 
        id="projects-heading"
        number="02." 
        title="Casos de Estudio & Proyectos Finalizados" 
        fileTag="// production_code.log" 
      />

      {/* Category Filter Tabs */}
      <div 
        className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs"
        role="tablist"
        aria-label="Filtrar proyectos por categoría"
      >
        {PROJECT_FILTERS.map((filter) => {
          const isSelected = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold shadow-sm shadow-emerald-500/10'
                  : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between rounded-xl bg-[#090d16] border border-gray-800/80 hover:border-emerald-500/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50"
          >
            <div>
              {/* Project Card Terminal Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-800/60">
                <span className="font-mono text-[11px] text-emerald-400/90 font-semibold tracking-wider">
                  {project.code}
                </span>
                <span className="font-mono text-[10px] text-gray-400 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
                  {project.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-1 mb-3">
                {project.subtitle}
              </p>

              {/* Technical Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
            </div>

            <div>
              {/* Quantified Metric / Engineering Highlight */}
              <div className="mb-5 p-2.5 rounded-lg bg-gray-950 border border-emerald-500/20 font-mono text-[11px] text-emerald-300/90 flex items-start gap-2">
                <span className="text-emerald-400 shrink-0" aria-hidden="true">⚡</span>
                <span className="leading-snug">{project.metric}</span>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Tecnologías utilizadas">
                {project.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions & Links */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-800/60 font-mono text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-300 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded py-1"
                  aria-label={`Ver código fuente del proyecto ${project.title} en GitHub`}
                >
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                  <span>Ver Repositorio</span>
                </a>

                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded py-1"
                    aria-label={`Ver demo interactiva o documentación de ${project.title}`}
                  >
                    <span>Detalles</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}