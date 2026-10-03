# Matías Torres — Software Engineering Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-10B981?logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Portafolio profesional desarrollado con **React 19**, **Tailwind CSS v4** y **Vite**, diseñado específicamente bajo una estética **High-Tech / Terminal Dark Mode** orientada a reclutadores IT, tech leads y perfiles de ingeniería de software.

---

## ⚡ Filosofía de Diseño y Arquitectura

El proyecto prioriza la ingeniería de software fundamentada, la accesibilidad de primer nivel y un rendimiento óptimo en producción:

- **Estética Terminal & Dark Mode:** Inspirada en interfaces modernas para desarrolladores (Linear, Raycast, Vercel), combinando fondos oscuros profundos (`#030712`), acentos verde esmeralda neón (`#10b981`), fuentes monoespaciadas (`JetBrains Mono`) y micro-interacciones sutiles.
- **Separación de Responsabilidades (SoC):** La capa de presentación está completamente desacoplada de la información. Todo el contenido y las métricas se gestionan desde una fuente única de verdad (`src/data/portfolioData.js`), evitando re-renders innecesarios y facilitando el mantenimiento.
- **Tokens Nativos con Tailwind CSS v4:** Implementación de la directiva `@theme` en CSS puro para definir paleta cromática, fuentes tipográficas y efectos de resplandor (*glow effects*) sin configuraciones dispersas.
- **Cero Dependencias Huérfanas de Iconos:** Sistema de iconos vectoriales SVG nativos optimizados (`Icons.jsx`) con atributos `aria-hidden="true"`, asegurando cero impacto de sobrepeso en el bundle.
- **Accesibilidad Integral (a11y):**
  - Enlace de salto accesible (*Skip to content*) para navegación por teclado.
  - Anillos de enfoque visibles con `:focus-visible` en todos los controles interactivos.
  - Jerarquía semántica estricta (`<h1>` $\rightarrow$ `<h2>` $\rightarrow$ `<h3>`) y etiquetado ARIA (`aria-labelledby`, `role="region"`).
  - Cumplimiento de ratios de contraste WCAG AA/AAA contra fondos oscuros.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Arquitectura modular de componentes e interfaces reactivas. |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) | Utilidades atómicas de última generación y tokens de diseño `@theme`. |
| **Bundler** | [Vite 8](https://vitejs.dev/) | Entorno de desarrollo ultrarrápido y compilaciones optimizadas. |
| **Tipografía** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) & [Inter](https://fonts.google.com/specimen/Inter) | Identidad visual para código/terminal y alta legibilidad de lectura. |
| **Calidad** | [ESLint](https://eslint.org/) | Control estático de código sin advertencias ni errores. |

---

## 📂 Estructura del Proyecto

```text
mi-portafolio/
├── public/
│   ├── favicon.svg            # Favicon tecnológico
│   └── icons.svg
├── src/
│   ├── assets/                # Recursos estáticos
│   ├── components/            # Componentes modulares de vista
│   │   ├── ui/                # Primitivas reutilizables de UI
│   │   │   ├── Icons.jsx          # Iconos SVG nativos y accesibles
│   │   │   ├── SectionHeader.jsx  # Encabezados de sección semánticos
│   │   │   └── TerminalWindow.jsx # Contenedor con estética de terminal Unix
│   │   ├── About.jsx          # Narrativa técnica y stack de habilidades
│   │   ├── Contact.jsx        # Módulo de contacto con copiado rápido de email
│   │   ├── Footer.jsx         # Pie de página y telemetría del sistema
│   │   ├── Hero.jsx           # Presentación técnica y terminal interactiva
│   │   ├── Navbar.jsx         # Navegación fija, skip link y badge en vivo
│   │   └── Projects.jsx       # Casos de estudio y métricas de rendimiento
│   ├── data/
│   │   └── portfolioData.js   # Fuente única de verdad (perfil, proyectos, skills)
│   ├── App.jsx                # Layout principal y landmarks semánticos
│   ├── index.css              # Tokens @theme de Tailwind v4 y efectos globales
│   └── main.jsx               # Punto de entrada de la aplicación
├── index.html                 # Metadatos SEO, OpenGraph y preconnect de fuentes
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación y Uso Local

### Prerrequisitos

- **Node.js** v18 o superior
- **npm**, **pnpm** o **yarn**

### Pasos

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Matute0512/portafolio-dev.git
   cd mi-portafolio
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

4. **Ejecutar el linter de código:**

   ```bash
   npm run lint
   ```

5. **Generar la compilación para producción:**

   ```bash
   npm run build
   ```

---

## ⚙️ Personalización del Contenido

Para actualizar la información del portafolio (proyectos, enlaces, habilidades o datos de contacto), solo edita el archivo:

👉 **`src/data/portfolioData.js`**

- `PERSONAL_INFO`: Datos biográficos, rol, disponibilidad y redes sociales.
- `SKILL_CATEGORIES`: Tecnologías agrupadas por categorías (Lenguajes, Frameworks, Sistemas) con nivel y notas técnicas.
- `PROJECTS`: Casos de estudio con métricas cuantificadas, etiquetas y enlaces al repositorio/demo.

---

## 👤 Autor

**Matías Torres**
*Estudiante de Ingeniería Informática & Desarrollador de Software*
- **Email:** [matiastorres678@gmail.com](mailto:matiastorres678@gmail.com)
- **GitHub:** [github.com/Matute0512](https://github.com/Matute0512)
- **LinkedIn:** [linkedin.com](www.linkedin.com/in/matiastorres0512)

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia [MIT](LICENSE).
