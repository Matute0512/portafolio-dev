import { PERSONAL_INFO } from '../data/portfolioData';
import TerminalWindow from './ui/TerminalWindow';
import { ArrowRightIcon, MailIcon, GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Hero() {
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
            <span>init --role="Software Engineer"</span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse ml-1" aria-hidden="true"></span>
          </div>

          <div className="space-y-2">
            <p className="text-emerald-400 font-mono text-sm tracking-wide">
              Hola, reclutadores y equipo técnico 👋
            </p>
            <h1 
              id="hero-name" 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              {PERSONAL_INFO.name}.
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-400 tracking-tight">
              Construyo software sólido y algoritmos eficientes.
            </h2>
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Estudiante de 2° año de Ingeniería Informática con enfoque en{' '}
            <strong className="text-emerald-400 font-semibold font-mono">complejidad algorítmica</strong>,{' '}
            arquitectura de software y soluciones desacopladas. Desde sistemas en{' '}
            <span className="text-gray-100 font-medium">Java, Python y Rust</span> hasta aplicaciones móviles reactivas con{' '}
            <span className="text-gray-100 font-medium">Flutter</span> y web moderna con{' '}
            <span className="text-gray-100 font-medium">React 19</span>.
          </p>

          {/* Quick Metrics / Key Value Props for Recruiters */}
          <div className="flex flex-wrap gap-2.5 pt-1 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-gray-800 text-gray-300">
              ⚡ Fundamentos CS & Big-O
            </span>
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-gray-800 text-gray-300">
              🛠️ Clean Architecture
            </span>
            <span className="px-3 py-1 rounded bg-gray-900/80 border border-gray-800 text-gray-300">
              🚀 Buscando Rol Trainee / Junior
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
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-gray-900/90 hover:bg-gray-800/90 border border-gray-800 hover:border-gray-700 text-gray-200 font-mono text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MailIcon className="w-4 h-4 text-emerald-400" />
              <span>Contactar Candidato</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 ml-2">
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

        {/* Right Column: High-Tech Interactive Terminal Presentation */}
        <div className="lg:col-span-5">
          <TerminalWindow title="matias@dev-box: ~/profile (zsh)">
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-200">whoami --verbose</span>
              </div>
              <p className="text-gray-300 pl-4 border-l-2 border-emerald-500/40">
                Matías Torres // Software Engineer Trainee
                <br />
                <span className="text-gray-400 text-xs">
                  Educación: Ingeniería Informática (2° Año)
                </span>
              </p>

              <div className="flex items-center gap-2 text-gray-400 pt-2">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-200">cat capabilities.json</span>
              </div>
              <pre className="text-emerald-300/90 text-xs bg-black/40 p-3 rounded-md border border-gray-800/80 overflow-x-auto leading-relaxed">
{`{
  "languages": ["Java", "Python", "Rust", "Dart"],
  "focus": "Algoritmia & Sistemas de Alto Rendimiento",
  "frontend": ["Flutter SDK", "React 19", "Tailwind v4"],
  "recruiter_ready": true
}`}
              </pre>

              <div className="flex items-center gap-2 text-gray-400 pt-1">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-200">git status</span>
              </div>
              <p className="text-xs text-cyan-300/90 pl-4">
                On branch main • 0 uncommitted bugs • Ready for technical challenges.
              </p>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}