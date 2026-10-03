import SectionHeader from './ui/SectionHeader';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CodeIcon, CpuIcon, LayersIcon } from './ui/Icons';

export default function About() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <CodeIcon className="w-4 h-4 text-emerald-400" />;
      case 'device':
        return <LayersIcon className="w-4 h-4 text-cyan-400" />;
      case 'server':
        return <CpuIcon className="w-4 h-4 text-purple-400" />;
      default:
        return <CodeIcon className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section 
      id="sobre-mi" 
      aria-labelledby="about-heading" 
      className="py-16 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      <SectionHeader 
        id="about-heading"
        number="01." 
        title="Sobre Mí" 
        fileTag="// engineer_profile.md" 
      />

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Engineering Narrative */}
        <div className="lg:col-span-6 space-y-5 text-gray-300 text-base leading-relaxed">
          <p>
            Mi aproximación a la programación comenzó con el interés por comprender cómo funcionan las cosas por debajo del capó: 
            resolver acertijos lógicos y analizar la eficiencia temporal y espacial de cada algoritmo.
          </p>
          <p>
            Actualmente curso el <strong className="text-white font-medium">2° año de Ingeniería Informática</strong>, 
            donde fortalezco mi base teórica en estructuras de datos, matemáticas discretas, concurrencia y arquitectura de computadores.
          </p>
          <p>
            No me limito a un único framework; priorizo la ingeniería de software fundamentada. Ya sea escribiendo lógica de sistemas en{' '}
            <span className="text-emerald-400 font-mono font-medium">Java / Rust</span>, automatizando flujos en{' '}
            <span className="text-emerald-400 font-mono font-medium">Python</span> o construyendo interfaces móviles reactivas y fluidas en{' '}
            <span className="text-emerald-400 font-mono font-medium">Flutter</span>, me enfoco en escribir código limpio, legible y escalable.
          </p>

          {/* Philosophy Card */}
          <div className="p-4 rounded-lg bg-gray-900/70 border border-gray-800 font-mono text-xs text-gray-400 space-y-2 mt-6">
            <div className="text-emerald-400 font-semibold flex items-center gap-2">
              <span aria-hidden="true">⚙️</span>
              <span>Principios de Desarrollo:</span>
            </div>
            <ul className="space-y-1.5 pl-2">
              <li>• Código autodocumentado y arquitectura desacoplada.</li>
              <li>• Comprensión de la complejidad Big-O antes de codear.</li>
              <li>• Mentalidad de aprendizaje continuo y adaptación rápida.</li>
            </ul>
          </div>
        </div>

        {/* Categorized Tech Stack Grid */}
        <div id="habilidades" className="lg:col-span-6 space-y-6">
          <div className="bg-[#090d16] border border-gray-800/90 rounded-xl p-5 md:p-6 shadow-xl">
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>// Stack Técnico & Capacidades</span>
              <span className="text-gray-500 font-normal">v2.4.0</span>
            </h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.category} className="space-y-2.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-200">
                    {getCategoryIcon(category.icon)}
                    <h4>{category.category}</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-gray-900/60 hover:bg-gray-800/60 border border-gray-800/60 hover:border-gray-700 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-medium text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}