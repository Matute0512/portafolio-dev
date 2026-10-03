/**
 * Portfolio Data Model - Single Source of Truth
 * Designed for High-Performance Rendering & Maintainability
 */

export const PERSONAL_INFO = {
  name: "Matías Torres",
  role: "Software Engineer & Systems Developer",
  shortRole: "Ingeniería Informática // 2° Año",
  email: "matiastorres678@gmail.com",
  location: "Santiago, Chile",
  status: "Open to Trainee / Junior Roles",
  availability: "Disponible para incorporación inmediata",
  github: "https://github.com/Matute0512",
  linkedin: "https://www.linkedin.com/in/matiastorres0512",
  terminalBadge: "mt@system:~$",
  summary:
    "Estudiante de 2° año de Ingeniería Informática con sólida base en matemáticas discretas, algoritmia y arquitectura de software. Me especializo en transformar problemas computacionales complejos en soluciones eficientes y escalables, desde sistemas de bajo/medio nivel en Java, Python y Rust hasta aplicaciones móviles y web reactivas con Flutter y React.",
};

export const TERMINAL_SNIPPET = {
  command: "cat developer_profile.json",
  output: {
    engineer: "Matías Torres",
    academic_status: "2nd Year CS Student",
    core_competencies: [
      "Algorithmic Optimization & Big-O Analysis",
      "Clean Architecture & Design Patterns",
      "Cross-Platform Mobile Development (Flutter/Dart)",
      "Systems Logic (Java / Python / Rust)"
    ],
    operational_mindset: "Performance-first, decoupled code, continuous learning"
  }
};

export const NAV_LINKS = [
  { id: "sobre-mi", label: "01. // Sobre Mí", href: "#sobre-mi" },
  { id: "habilidades", label: "02. // Stack Técnico", href: "#habilidades" },
  { id: "proyectos", label: "03. // Casos de Estudio", href: "#proyectos" },
  { id: "contacto", label: "04. // Contacto", href: "#contacto" },
];

export const SKILL_CATEGORIES = [
  {
    category: "Lenguajes Core",
    icon: "code",
    skills: [
      { name: "Java", level: "Avanzado / Académico", note: "POO, Colecciones, Concurrencia básica" },
      { name: "Python", level: "Intermedio / Avanzado", note: "Estructuras de datos, APIs, Automatización" },
      { name: "Rust", level: "En formación activa", note: "Memory Safety, Ownership, CLI tooling" },
      { name: "Dart", level: "Intermedio / Avanzado", note: "Asincronía, Tipado estático, Flutter SDK" },
      { name: "JavaScript / TypeScript", level: "Intermedio", note: "ESNext, React 19, async/await" },
    ]
  },
  {
    category: "Frameworks & UI",
    icon: "device",
    skills: [
      { name: "Flutter", level: "Avanzado", note: "Mobile & Web, State Management, Custom Painters" },
      { name: "React 19", level: "Intermedio", note: "Hooks modernos, Component Driven, Tailwind CSS v4" },
      { name: "Tailwind CSS v4", level: "Avanzado", note: "Tokens de diseño, Responsive layouts, Dark UI" },
    ]
  },
  {
    category: "Sistemas & Infraestructura",
    icon: "server",
    skills: [
      { name: "Linux (Debian / Ubuntu)", level: "Diario", note: "Bash scripting, gestión de procesos, POSIX" },
      { name: "Git & GitHub", level: "Avanzado", note: "Git Flow, Pull Requests, Conventional Commits" },
      { name: "REST APIs & JSON", level: "Avanzado", note: "Consumo eficiente, manejo de errores, serialización" },
      { name: "Estructuras de Datos", level: "Fundamentos Sólidos", note: "Grafos, Árboles, HashMaps, Búsqueda A*" },
    ]
  }
];

export const PROJECTS = [
  {
    id: "sliding-puzzle-engine",
    code: "PRJ-001 // ENGINE",
    title: "Sliding Puzzle Engine",
    subtitle: "Motor reactivo con validación de solvabilidad matemática y búsqueda A*",
    description:
      "Desarrollo de un motor de juego de rompecabezas deslizante (15-puzzle) en Flutter/Dart. Resuelve el problema clásico de estados iniciales irresolubles implementando el Teorema de Paridad de Inversiones Matemáticas en O(N), garantizando tableros 100% jugables. Arquitectura desacoplada entre el motor matemático y la capa de presentación a 60 FPS.",
    tecnologias: ["Flutter", "Dart", "Algoritmia A*", "State Management", "Discrete Math"],
    metric: "Solvabilidad O(N) garantizada • 60 FPS estables",
    github: "https://github.com",
    demo: "#",
    badge: "Algoritmia & Mobile"
  },
  {
    id: "f1-telemetry-engine",
    code: "PRJ-002 // DATA-PIPELINE",
    title: "F1 Telemetry & Analytics Engine",
    subtitle: "Extracción y análisis de telemetría de alta frecuencia en tiempo real",
    description:
      "Pipeline de análisis de datos deportivos que consume APIs de telemetría de Fórmula 1. Procesa coordenadas GPS, telemetría de aceleración/frenado, marchas y deltas por micro-sector. Utiliza estructuras de datos optimizadas en memoria para correlacionar vueltas rápidas con latencia mínima de procesamiento.",
    tecnologias: ["Python", "FastF1 API", "Data Structures", "Time-Series", "Visualización"],
    metric: "Procesamiento sub-50ms • Normalización multi-sesión",
    github: "https://github.com",
    demo: "#",
    badge: "Data & Systems"
  },
  {
    id: "algorithms-benchmark-suite",
    code: "PRJ-003 // CS-BENCHMARK",
    title: "Data Structures & Benchmark Suite",
    subtitle: "Implementación bare-metal de estructuras de datos y análisis de complejidad",
    description:
      "Suite de estructuras de datos canónicas (Árboles AVL autobalanceados, Grafos dirigidos ponderados con Dijkstra, Min/Max Heaps y HashMaps) desarrolladas desde cero sin dependencias externas en Java y Rust. Incluye suite automatizada de pruebas unitarias y medición de perfiles de memoria.",
    tecnologias: ["Java", "Rust", "AVL Trees", "Dijkstra", "Unit Testing", "Big-O Analysis"],
    metric: "Cero dependencias externas • Cobertura 95%+",
    github: "https://github.com",
    demo: "#",
    badge: "CS Core"
  }
];
