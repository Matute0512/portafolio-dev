import { useState, useEffect } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';
import { MenuIcon, CloseIcon, TerminalIcon, DownloadIcon } from './ui/Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll detection for background blur and ScrollSpy for active nav item
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic: detect which section is currently centered/visible
      const sections = NAV_LINKS.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Content for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-emerald-400 focus:text-gray-950 focus:font-mono focus:font-bold focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all"
      >
        Saltar al contenido principal
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand / Terminal Prompt */}
          <a
            href="#"
            className="flex items-center gap-2.5 group font-mono text-sm tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            aria-label="Ir al inicio - Matías Torres Portafolio"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-all duration-200 shadow-sm shadow-emerald-500/10">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-200 font-semibold group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.terminalBadge}
              </span>
              <span className="text-[10px] text-gray-500 hidden sm:inline">
                software.engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation with ScrollSpy */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 font-mono text-xs"
          >
            <ul className="flex items-center gap-5 text-gray-400">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`py-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded ${
                        isActive
                          ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400'
                          : 'hover:text-gray-200'
                      }`}
                    >
                      <span className={`${isActive ? 'text-emerald-300' : 'text-emerald-500/70'} mr-1`}>
                        {link.label.split(' ')[0]}
                      </span>{' '}
                      {link.label.split(' ').slice(1).join(' ')}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Recruiter 1-Click CV Download Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="CV-Matias-Torres.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-900 hover:bg-gray-800 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 text-xs font-mono font-medium transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Descargar Curriculum Vitae en PDF"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV.pdf</span>
            </a>

            {/* Live Recruiter Availability Badge */}
            <div 
              className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono shadow-sm"
              title={PERSONAL_INFO.availability}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden lg:inline text-gray-400">Status:</span> Open
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden bg-[#030712]/98 border-b border-gray-800 px-6 py-6 font-mono text-sm space-y-4 backdrop-blur-xl animate-in fade-in duration-200"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 border-b border-gray-900 transition-colors ${
                        isActive ? 'text-emerald-400 font-bold' : 'text-gray-300 hover:text-emerald-400'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="CV-Matias-Torres.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium"
              >
                <DownloadIcon className="w-4 h-4 text-emerald-400" />
                <span>Descargar CV en PDF</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {PERSONAL_INFO.status}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
