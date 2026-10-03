/**
 * Portfolio Data Model - Single Source of Truth
 * High-Performance Data Architecture for Production
 * Real Finished Repositories from Matute0512 GitHub
 */

export const PERSONAL_INFO = {
  name: "Matías Torres",
  role: "Software Engineer & Systems Developer",
  shortRole: "Ingeniería Informática // 2° Año",
  email: "matiastorres678@gmail.com",
  location: "Santiago, Chile / Remote",
  status: "Open to Trainee / Junior Roles",
  availability: "Disponible para incorporación inmediata",
  github: "https://github.com/Matute0512",
  linkedin: "https://www.linkedin.com/in/matiastorres0512",
  resumeUrl: "/cv-matias-torres.pdf",
  terminalBadge: "mt@system:~$",
  englishLevel: "B2 / Técnico (Lectura fluida de documentación técnica, RFCs y comunicación técnica)",
  education: "2° año de Ingeniería Informática • Énfasis en Algoritmia, Concurrencia y Clean Architecture",
  summary:
    "Estudiante de 2° año de Ingeniería Informática con sólida base en matemáticas discretas, algoritmia y arquitectura de software. Me especializo en construir software robusto aplicando Clean Architecture, TDD y patrones concurrentes: desde simuladores astrofísicos y colas de mensajes en Python hasta aplicaciones móviles reactivas con Flutter y Firebase.",
};

export const TERMINAL_TABS = [
  {
    id: "profile",
    fileName: "profile.json",
    badge: "JSON",
    code: `{
  "engineer": "Matías Torres",
  "status": "Available for Trainee / Junior Roles",
  "focus": [
    "Clean Architecture & DDD Principles",
    "Concurrent Systems & Backpressure",
    "Test-Driven Development (TDD)",
    "Cross-Platform Mobile (Flutter & Dart)"
  ],
  "english_level": "B2 - Technical Fluency"
}`
  },
  {
    id: "architecture",
    fileName: "architecture.sh",
    badge: "BASH",
    code: `#!/usr/bin/env bash
# Engineering Mindset & Principles
echo ">> Verifying system integrity..."
test_layers "domain -> app -> infra"
enforce_tdd --coverage="100%"
check_concurrency --backpressure="enabled"
validate_math --tolerance="1e-6 AU"`
  },
  {
    id: "metrics",
    fileName: "metrics.log",
    badge: "TELEMETRY",
    code: `[STATUS] CI Pipelines: Passing (Backend CI, Quality)
[TESTS]  Sliding Puzzle: 28 unit & widget tests
[COVERAGE] Message Queue: 100% test coverage (Pytest)
[ACCURACY] Solar Simulator: JPL DE440s < 1e-6 AU
[A11Y]   WCAG 2.1 AA compliant • Strict contrast`
  }
];

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
      { name: "Python", level: "Avanzado", note: "Clean Architecture, Concurrencia, FastAPI, uv, Pytest" },
      { name: "Dart", level: "Avanzado", note: "Flutter SDK, Asincronía, Tipado estático, Audio SoLoud" },
      { name: "Java", level: "Intermedio / Académico", note: "POO sólida, Colecciones, Concurrencia, JavaFX" },
      { name: "Rust", level: "En formación activa", note: "Memory Safety, Ownership model, CLI tooling" },
      { name: "TypeScript / JavaScript", level: "Intermedio", note: "ESNext, React 19, NestJS, async/await" },
    ]
  },
  {
    category: "Frameworks & Ecosistema",
    icon: "device",
    skills: [
      { name: "Flutter (Android / Web)", level: "Avanzado", note: "State Management, Firebase, WCAG AA, Animaciones" },
      { name: "FastAPI", level: "Avanzado", note: "Pydantic v2, Clean Architecture, REST APIs, OpenAPI" },
      { name: "React 19", level: "Intermedio", note: "Hooks modernos, Component-Driven, Tailwind CSS v4" },
      { name: "NestJS / Prisma", level: "Intermedio", note: "Monorepos, APIs modulares, PostgreSQL / PostGIS" },
    ]
  },
  {
    category: "Sistemas & Metodologías",
    icon: "server",
    skills: [
      { name: "Clean Architecture & SOLID", level: "Estricto", note: "Desacoplamiento domain/app/infra, puertos y adaptadores" },
      { name: "Test-Driven Development (TDD)", level: "Aplicado", note: "Pytest, 100% coverage, pruebas de regresión" },
      { name: "Docker & Linux", level: "Diario", note: "Docker Compose, multi-stage builds, bash scripting, POSIX" },
      { name: "Git Flow & CI/CD", level: "Avanzado", note: "Conventional Commits, GitHub Actions workflows" },
    ]
  }
];

export const PROJECT_FILTERS = [
  { id: "all", label: "Todos los Proyectos" },
  { id: "systems", label: "Clean Architecture & Sistemas" },
  { id: "mobile", label: "Mobile & UI (Flutter)" },
  { id: "data", label: "Data, Astrofísica & Concurrencia" },
];

export const PROJECTS = [
  {
    id: "solar-system-simulator",
    code: "PRJ-001 // CLEAN-ARCH",
    category: "systems",
    title: "Solar System Simulator",
    subtitle: "Motor astrofísico en Clean Architecture validado con efemérides JPL Horizons",
    description:
      "Simulador astronómico desacoplado con backend en Python/FastAPI. Calcula las posiciones tridimensionales exactas de los planetas respecto al Sol para cualquier fecha mediante el kernel DE440s de JPL (Skyfield). Diseñado con Clean Architecture estricta (Domain, Application, Infrastructure, Presentation) y documentado con 6 ADRs formales.",
    tecnologias: ["Python 3.10", "FastAPI", "Clean Architecture", "JPL DE440s", "Docker", "Mypy Strict", "Pytest"],
    metric: "Validación vs JPL Horizons (tolerancia < 1e-6 AU) • ADRs formales • CI en GitHub Actions",
    github: "https://github.com/Matute0512/solar-system-simulator",
    demo: "",
    badge: "Clean Architecture & Python"
  },
  {
    id: "sliding-puzzle",
    code: "PRJ-002 // MOBILE-GAME",
    category: "mobile",
    title: "Sliding Puzzle 15-Engine",
    subtitle: "Rompecabezas reactivo con verificación matemática de solvabilidad y Firebase",
    description:
      "Aplicación multiplataforma en Flutter/Dart (v2.2.1). Implementa el Teorema de Paridad de Inversiones Matemáticas en O(N) para asegurar que todo tablero generado sea resoluble. Incluye ranking global con Cloud Firestore y autenticación anónima, motor de audio SoLoud, modo desafío determinista (20 niveles) y soporte completo de accesibilidad WCAG AA.",
    tecnologias: ["Flutter", "Dart", "Cloud Firestore", "Firebase Auth", "SoLoud Audio", "Provider", "WCAG AA"],
    metric: "28 tests unitarios y de widgets • Solvabilidad matemática O(N) • 60 FPS estables",
    github: "https://github.com/Matute0512/sliding-puzzle",
    demo: "",
    badge: "Mobile & Flutter"
  },
  {
    id: "stellar-analyzer",
    code: "PRJ-003 // DATA-PIPELINE",
    category: "data",
    title: "Stellar Analyzer",
    subtitle: "Pipeline analítico de curvas de luz de la NASA con análisis espectral y Machine Learning",
    description:
      "Sistema de astrofísica observacional que consume datos de misiones TESS y Kepler vía la API de MAST (lightkurve). Aplica limpieza de series temporales, detección de períodos espectrales con el algoritmo Lomb-Scargle (astropy), phase folding, detección de alias P/2P y clasificación de estrellas variables con Random Forest (scikit-learn).",
    tecnologias: ["Python", "Astropy", "Lightkurve (NASA)", "Lomb-Scargle", "Scikit-Learn", "SQLite", "Plotly"],
    metric: "Pipeline automatizado de fotometría • Clasificación ML con Random Forest • CI Pipeline",
    github: "https://github.com/Matute0512/stellar-analyzer",
    demo: "",
    badge: "Data Science & Astro"
  },
  {
    id: "message-queue-simulator",
    code: "PRJ-004 // CONCURRENCY",
    category: "systems",
    title: "Message Queue Simulator",
    subtitle: "Simulador concurrente multihilo con manejo de contrapresión (Backpressure) y TDD",
    description:
      "Motor concurrente implementado en Python 3.14+ aplicando el patrón Productor-Consumidor. Gestiona colas de prioridad seguras para subprocesos (thread-safe) preservando el orden FIFO por nivel. Maneja contrapresión elegante mediante QueueFullError y QueueEmptyError para prevenir sobrecarga de memoria.",
    tecnologias: ["Python 3.14", "Multithreading", "TDD", "Backpressure", "Pytest", "Poetry", "Ruff"],
    metric: "100% de cobertura en tests (TDD estricto) • Control de memoria bajo contrapresión",
    github: "https://github.com/Matute0512/message-queue-simulator",
    demo: "",
    badge: "Concurrencia & TDD"
  },
  {
    id: "pesca-app",
    code: "PRJ-005 // FULLSTACK-GEO",
    category: "mobile",
    title: "PescaBA (Monorepo Geoespacial)",
    subtitle: "Monorepo pnpm para descubrimiento geoespacial con NestJS, PostGIS y React Native Expo",
    description:
      "Plataforma completa de información geográfica estructurada en monorepo pnpm workspaces. Backend modular en NestJS con PostgreSQL/PostGIS para consultas espaciales indexadas, colas en segundo plano con Redis BullMQ, panel de administración en React + Vite + MapLibre y app móvil en Expo (React Native).",
    tecnologias: ["TypeScript", "NestJS", "PostgreSQL / PostGIS", "Prisma", "Redis / BullMQ", "Expo", "React"],
    metric: "Monorepo pnpm con TypeScript estricto • Consultas geoespaciales indexadas en PostGIS",
    github: "https://github.com/Matute0512/pesca-app",
    demo: "",
    badge: "Fullstack & Geo"
  }
];
