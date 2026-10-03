import { useState, useEffect } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';
import { MenuIcon, CloseIcon, TerminalIcon } from './ui/Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
            ? 'bg-[#030712]/85 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/30 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand / Terminal Prompt */}
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-sm tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-1"
            aria-label="Ir al inicio - Matías Torres Portafolio"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-all duration-200">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-200 font-semibold group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.terminalBadge}
              </span>
              <span className="text-[10px] text-gray-500 hidden sm:inline">
                systems.engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8 font-mono text-xs"
          >
            <ul className="flex items-center gap-6 text-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                  >
                    <span className="text-emerald-400 mr-1 opacity-70">
                      {link.label.split(' ')[0]}
                    </span>{' '}
                    {link.label.split(' ').slice(1).join(' ')}
                  </a>
                </li>
              ))}
            </ul>

            {/* Live Recruiter Availability Badge */}
            <div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono shadow-sm"
              title={PERSONAL_INFO.availability}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden lg:inline">Status:</span> Open for Roles
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
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-200 hover:text-emerald-400 transition-colors py-2 border-b border-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {PERSONAL_INFO.status}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
