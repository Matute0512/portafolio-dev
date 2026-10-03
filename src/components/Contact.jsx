import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MailIcon, CopyIcon, CheckIcon, GithubIcon, LinkedinIcon, DownloadIcon } from './ui/Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section 
      id="contacto" 
      aria-labelledby="contact-heading" 
      className="py-16 md:py-24 px-6 sm:px-8 max-w-4xl mx-auto"
    >
      <SectionHeader 
        id="contact-heading"
        number="03." 
        title="Contacto & Disponibilidad" 
        fileTag="// handshake.sh" 
      />

      <div className="rounded-2xl bg-[#090d16] border border-gray-800/90 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Terminal Ambient Background Glow */}
        <div 
          className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 font-mono text-xs text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Estado: {PERSONAL_INFO.status}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Buscando un perfil técnico con base sólida?
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Estoy buscando activamente mi primera oportunidad formal en desarrollo de software como{' '}
            <strong className="text-emerald-400 font-semibold">Trainee / Junior</strong>.
            Cuento con sólida disciplina en Clean Architecture, TDD y algoritmos, además de entusiasmo por aportar valor inmediato al equipo.
          </p>

          {/* Interactive Email Bar with Copy to Clipboard */}
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2 rounded-xl bg-gray-950 border border-gray-800 font-mono text-sm max-w-md mx-auto">
              <span className="text-gray-300 px-3 py-1 truncate select-all">
                {PERSONAL_INFO.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-200 hover:text-emerald-400 transition-colors text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
                aria-label="Copiar dirección de correo electrónico al portapapeles"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-gray-400" />
                    <span>Copiar Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action CTAs: Direct Mail & Resume Download */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Oportunidad%20Laboral%20-%20Ingenier%C3%ADa%20de%20Software`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-mono text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <MailIcon className="w-4 h-4" />
              <span>Abrir Cliente de Correo</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="CV-Matias-Torres.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-gray-900 hover:bg-gray-800 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 font-mono text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <DownloadIcon className="w-4 h-4 text-emerald-400" />
              <span>Descargar CV (PDF)</span>
            </a>
          </div>

          {/* Network Links */}
          <div className="pt-8 border-t border-gray-800/80 flex items-center justify-center gap-6 font-mono text-xs text-gray-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded p-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com</span>
            </a>
            <span className="text-gray-700" aria-hidden="true">•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded p-1"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>linkedin.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}