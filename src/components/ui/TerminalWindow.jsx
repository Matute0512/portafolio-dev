/**
 * TerminalWindow Component
 * Wraps content in a realistic, dark mode developer terminal window
 */
export default function TerminalWindow({ title = "bash - 80x24", children, className = "" }) {
  return (
    <div 
      className={`rounded-xl border border-gray-800/90 bg-[#090d16]/95 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 ${className}`}
      role="region"
      aria-label={`Ventana de terminal: ${title}`}
    >
      {/* Terminal Title Bar */}
      <div className="bg-[#0d131f] border-b border-gray-800/80 px-4 py-3 flex items-center justify-between select-none">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block shadow-sm"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block shadow-sm"></span>
        </div>
        <div className="text-xs font-mono text-gray-400 font-medium tracking-wide flex items-center gap-1.5">
          <span className="text-emerald-400/80">λ</span>
          <span>{title}</span>
        </div>
        <div className="w-12 text-right">
          <span className="text-[10px] font-mono text-gray-600 bg-gray-900/60 px-1.5 py-0.5 rounded border border-gray-800">
            UTF-8
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 md:p-6 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
