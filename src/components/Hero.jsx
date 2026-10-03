import { useState } from 'react';
import { PERSONAL_INFO, TERMINAL_TABS } from '../data/portfolioData';
import { ArrowRightIcon, MailIcon, GithubIcon, LinkedinIcon, DownloadIcon, CopyIcon, CheckIcon } from './ui/Icons';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(TERMINAL_TABS[0].id);
  const [copied, setCopied] = useState(false);

  const currentTab = TERMINAL_TABS.find(t => t.id === activeTab) || TERMINAL_TABS[0];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section 
      id="inicio"
      aria-labelledby="hero-name"
      className="min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Technical Pitch */}
        <div className="lg:col-span-7 space-y-6">
          {/* Terminal Command Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-gray-900/90 border border-gray-800 font-mono text-xs text-gray-300">
            <span className="text-emerald-400 font-semibold" aria-hidden="true">$</span>
            <span>init --role="Software Engineer" --clean-architecture</span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse ml-1" aria-hidden="true"></span>
          </div>

          <div className="space-y-2">
            <p className="text-emerald-400 font-mono text-sm tracking-wide">
              Hola, reclutadores y equipo de ingeniería 👋
            </p>
            <h1 
              id="hero-name" 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              {PERSONAL_INFO.name}.
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-400 tracking-tight">
              Clean Architecture, Concurrencia y Software Robusto.
            </h2>
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Estudiante de 2° año de Ingeniería Informática enfocado en{' '}
            <strong className="text-emerald-400 font-semibold font-mono">desacoplamiento arquitectónico</strong>,{' '}
            concurrencia y optimización algorítmica. Cuento con proyectos validados en{' '}
            <span className="text-gray-100 font-medium">Python (FastAPI, JPL Ephemeris, TDD)</span>,{' '}
            aplicaciones móviles multiplataforma en{' '}
            <span className="text-gray-100 font-medium">Flutter/Dart</span> y monorepos geoespaciales con{' '}
            <span className="text-gray-100 font-medium">NestJS y PostGIS</span>.
          </p>

          {/* Quick Metrics / Key Value Props for Recruiters */}
          <div className="flex flex-wrap gap-2.5 pt-1 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-emerald-500/20 text-emerald-300">
              ⚡ Clean Architecture & TDD
            </span>
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-gray-800 text-gray-300">
              🧵 Patrones Concurrentes & Backpressure
            </span>
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-cyan-500/20 text-cyan-300">
              🌐 Inglés B2 (Técnico Fluido)
            </span>
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-mono text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <span>Explorar Casos de Estudio</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="CV-Matias-Torres.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-gray-900/90 hover:bg-gray-800/90 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 font-mono text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <DownloadIcon className="w-4 h-4 text-emerald-400" />
              <span>Descargar CV</span>
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-gray-900/60 hover:bg-gray-800/60 border border-gray-800 hover:border-gray-700 text-gray-300 font-mono text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MailIcon className="w-4 h-4 text-gray-400" />
              <span>Contacto</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Ver perfil de GitHub de Matías Torres"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 border border-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Ver perfil de LinkedIn de Matías Torres"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Multi-Tab Terminal Window */}
        <div className="lg:col-span-5">
          <div 
            className="rounded-xl border border-gray-800/90 bg-[#090d16]/95 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
            role="region"
            aria-label="Ventana de terminal interactiva con pestañas de arquitectura y métricas"
          >
            {/* Terminal Title Bar & Window Dots */}
            <div className="bg-[#0d131f] border-b border-gray-800/80 px-4 py-3 flex items-center justify-between select-none">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block shadow-sm"></span>
              </div>
              
              {/* Tab Switcher */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-md border border-gray-800/60 font-mono text-[11px]">
                {TERMINAL_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-gray-800 text-emerald-300 font-semibold shadow-sm'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {tab.fileName}
                  </button>
                ))}
              </div>

              {/* Copy snippet button */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="text-gray-400 hover:text-emerald-400 p-1 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 cursor-pointer"
                title="Copiar código de la terminal"
                aria-label="Copiar contenido de la terminal al portapapeles"
              >
                {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Terminal Tab Body */}
            <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto">
              <div className="flex items-center gap-2 text-gray-500 mb-2 select-none">
                <span className="text-emerald-400">$</span>
                <span>cat {currentTab.fileName}</span>
                <span className="text-[10px] text-gray-600 bg-gray-900 px-1.5 py-0.2 rounded border border-gray-800 ml-auto">
                  {currentTab.badge}
                </span>
              </div>
              <pre className="text-gray-200 leading-relaxed font-mono whitespace-pre bg-black/50 p-3.5 rounded-lg border border-gray-800/60">
                {currentTab.code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}