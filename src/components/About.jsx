import SectionHeader from './ui/SectionHeader';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
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
            Mi aproximación a la ingeniería de software está basada en comprender a profundidad los fundamentos: 
            complejidad algorítmica <span className="text-emerald-400 font-mono font-medium">Big-O</span>, estructuras de datos en memoria, 
            y arquitectura desacoplada antes de escribir la primera línea de código.
          </p>
          <p>
            Actualmente curso el <strong className="text-white font-medium">2° año de Ingeniería Informática</strong>, 
            donde profundizo en matemáticas discretas, concurrencia, teoría de sistemas y diseño orientado a objetos. 
            Me caracterizo por aplicar metodologías formales como <strong className="text-emerald-400 font-medium">Clean Architecture</strong>, 
            <strong className="text-emerald-400 font-medium"> TDD</strong> (Test-Driven Development) y registros formales de decisiones de arquitectura (ADRs).
          </p>
          <p>
            Mi experiencia práctica abarca desde sistemas de cálculo astrofísico en <span className="text-gray-100 font-medium">Python y FastAPI</span> y 
            simuladores concurrentes multihilo con control de contrapresión, hasta aplicaciones móviles completas en <span className="text-gray-100 font-medium">Flutter y Dart</span> con 
            persistencia offline y sincronización en la nube vía <span className="text-gray-100 font-medium">Firebase</span>.
          </p>

          {/* Education & Language Badges for Recruiters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-lg bg-gray-900/80 border border-gray-800 font-mono text-xs">
              <span className="text-emerald-400 font-semibold block mb-1">🎓 Formación Universitaria:</span>
              <span className="text-gray-300">{PERSONAL_INFO.education}</span>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-900/80 border border-gray-800 font-mono text-xs">
              <span className="text-cyan-400 font-semibold block mb-1">🌐 Nivel de Inglés:</span>
              <span className="text-gray-300">{PERSONAL_INFO.englishLevel}</span>
            </div>
          </div>

          {/* Technical Principles */}
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800/80 font-mono text-xs text-gray-400 space-y-2 mt-4">
            <div className="text-emerald-400 font-semibold flex items-center gap-2">
              <span aria-hidden="true">⚙️</span>
              <span>Pilares de Ingeniería:</span>
            </div>
            <ul className="space-y-1.5 pl-2">
              <li>• Desacoplamiento estricto: Reglas de negocio independientes de frameworks.</li>
              <li>• Cobertura rigurosa mediante pruebas unitarias y de integración.</li>
              <li>• Observabilidad y manejo defensivo de errores y contrapresión.</li>
            </ul>
          </div>
        </div>

        {/* Categorized Tech Stack Grid */}
        <div id="habilidades" className="lg:col-span-6 space-y-6">
          <div className="bg-[#090d16] border border-gray-800/90 rounded-xl p-5 md:p-6 shadow-xl">
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>// Stack Técnico & Capacidades</span>
              <span className="text-gray-500 font-normal">v3.0.0</span>
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