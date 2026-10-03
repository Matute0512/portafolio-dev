import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 bg-[#02050c] py-12 px-6 sm:px-8 font-mono text-xs text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Author & Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-gray-400 font-medium">
            © {currentYear} {PERSONAL_INFO.name}.
          </span>
          <span className="hidden sm:inline text-gray-800" aria-hidden="true">|</span>
          <span>
            Diseñado & desarrollado con <span className="text-emerald-400">React 19</span> + <span className="text-emerald-400">Tailwind CSS v4</span>
          </span>
        </div>

        {/* Telemetry / Node Info */}
        <div className="flex items-center gap-3 text-[11px] text-gray-600">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>All systems nominal</span>
          </span>
          <span className="text-gray-800" aria-hidden="true">•</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </footer>
  );
}
