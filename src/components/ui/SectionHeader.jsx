/**
 * Accessible Section Header with Terminal Aesthetics
 * Ensures proper H2 semantic level across all sections
 */
export default function SectionHeader({ number, title, fileTag, id }) {
  return (
    <div className="mb-10 md:mb-12">
      <div className="flex items-center gap-3">
        <h2 id={id} className="text-2xl md:text-3xl font-bold tracking-tight text-gray-100 flex items-center flex-wrap gap-2">
          <span className="text-emerald-400 font-mono text-lg md:text-xl font-semibold" aria-hidden="true">
            {number}
          </span>
          <span>{title}</span>
          {fileTag && (
            <span className="text-xs font-mono text-gray-500 bg-gray-900 border border-gray-800 px-2.5 py-0.5 rounded-full ml-1">
              {fileTag}
            </span>
          )}
        </h2>
        <div 
          className="h-px bg-gradient-to-r from-emerald-500/30 via-gray-800 to-transparent flex-1 ml-2 min-w-[30px]" 
          aria-hidden="true" 
        />
      </div>
    </div>
  );
}
