import { imgSrc } from "../assets";

// Text shown in both languages goes as { en, es }; see localize() in src/i18n
export default [
  {
    role: { en: "Front-End Developer", es: "Desarrollador Front-End" },
    organization: "Banhcafe",
    // Intern from Feb to May 2024, then full-time; shown as one entry
    startDate: { en: "Feb, 2024", es: "Feb 2024" },
    endDate: { en: "Present", es: "Actualidad" },
    experiences: [
      {
        en: "Core contributor to Aurora, a 240+ screen banking platform across 20 departments and 80+ programs: 220+ merged pull requests, about 40% of all commits.",
        es: "Contribuidor principal de Aurora, una plataforma bancaria de 240+ pantallas en 20 departamentos y 80+ programas: 220+ pull requests integrados, cerca del 40% de los commits.",
      },
      {
        en: "Migrated legacy JavaScript to TypeScript, improving performance by 40%.",
        es: "Migré código heredado de JavaScript a TypeScript, mejorando el rendimiento en un 40%.",
      },
      {
        en: "Built a 6-step account-opening app and a bank-wide workflow manager (see Projects).",
        es: "Construí una app de apertura de cuentas de 6 pasos y un gestor de flujos para todo el banco (ver Proyectos).",
      },
      {
        en: "Started as an intern: 20+ CRUD screens and a login-enabled app on banking APIs.",
        es: "Empecé como pasante: 20+ pantallas CRUD y una app con inicio de sesión sobre APIs bancarias.",
      },
    ],
    imageSrc: imgSrc("history/banhcafe"),
    // Opened with "See more"; shown in the same modal as the projects
    details: {
      cover: false,
      eyebrow: { en: "Feb 2024 – Present · Honduras", es: "Feb 2024 – Actualidad · Honduras" },
      subtitle: {
        en: "Frontend developer on the bank's internal platforms, from intern to the leading contributor of Aurora.",
        es: "Desarrollador frontend en las plataformas internas del banco, de pasante a principal contribuidor de Aurora.",
      },
      stats: [
        { value: "240+", label: { en: "Screens on Aurora, across 20 departments", es: "Pantallas en Aurora, en 20 departamentos" } },
        // Counted on 2026-11-15 across the bank's Azure DevOps repos plus AgriTech on GitHub (main branches)
        {
          value: "270+",
          label: { en: "Merged pull requests across the bank's repositories", es: "Pull requests integrados en los repositorios del banco" },
        },
        {
          value: "4,200+",
          label: { en: "Commits across 8 repositories, ~40% of Aurora's history", es: "Commits en 8 repositorios, ~40% del historial de Aurora" },
        },
        { value: "40%", label: { en: "Performance gain after the TypeScript migration", es: "Mejora de rendimiento tras migrar a TypeScript" } },
      ],
      overview: [
        {
          en: "Banhcafe has financed Honduras's productive sector since 1981. I joined as an intern in February 2024 and moved to full time three months later.",
          es: "Banhcafe financia al sector productivo de Honduras desde 1981. Entré como pasante en febrero de 2024 y pasé a tiempo completo tres meses después.",
        },
        {
          en: "Most of my work is on Aurora, the bank's internal platform, plus standalone apps for branches and customers.",
          es: "La mayor parte de mi trabajo está en Aurora, la plataforma interna del banco, además de apps independientes para agencias y clientes.",
        },
      ],
      highlightsLabel: { en: "What I did", es: "Lo que hice" },
      highlights: [
        {
          en: "Contributed to Aurora, a large-scale internal banking platform spanning 240+ screens, 20 departments, and 80+ programs; migrated legacy JavaScript code to TypeScript, improving application performance by 40%.",
          es: "Contribuí al desarrollo de Aurora, una plataforma bancaria interna de gran escala con 240+ pantallas, 20 departamentos y 80+ programas; migré código heredado de JavaScript a TypeScript, mejorando el rendimiento de la aplicación en un 40%.",
        },
        {
          en: "Delivered 220+ merged pull requests and 3,800+ commits, accounting for approximately 40% of Aurora's repository commit history, becoming its leading contributor.",
          es: "Realicé 220+ pull requests integrados y 3,800+ commits, representando aproximadamente el 40% del historial de commits del repositorio de Aurora, convirtiéndome en su principal contribuidor.",
        },
        {
          en: "Developed features for a 6-step customer onboarding application enabling branch executives to open new bank accounts, integrating government identity and credit checks (RNP/CNBS), 3-photo biometric validation, tax verification (SAR), contact verification, banking product configuration, and digital signatures.",
          es: "Desarrollé funcionalidades para una aplicación de onboarding de clientes de 6 pasos, que permite a los ejecutivos de agencia abrir cuentas bancarias mediante integraciones con consultas de identidad y crédito (RNP/CNBS), validación biométrica con 3 fotografías, verificación tributaria (SAR), validación de contactos, configuración de productos bancarios y firma digital.",
        },
        {
          en: "Built an enterprise-wide workflow management system with multi-level nested tasks, dynamic role-based access, and secure inter-branch document management; optimized hierarchical data rendering to under 1 second using Redux Toolkit and RTK Query.",
          es: "Desarrollé un gestor de requerimientos y flujos de trabajo para todo el banco, con tareas anidadas multinivel, roles dinámicos y gestión segura de documentos entre agencias; optimicé el renderizado de estructuras jerárquicas a menos de 1 segundo utilizando Redux Toolkit y RTK Query.",
        },
        {
          en: "Developed interactive dashboards, internal tools from scratch, and a marketplace; initially built 20+ CRUD screens and an authentication-enabled application integrated with banking APIs during the internship.",
          es: "Desarrollé tableros interactivos, herramientas internas desde cero y un marketplace; inicialmente construí 20+ pantallas CRUD y una aplicación con autenticación integrada a APIs bancarias durante mi pasantía.",
        },
      ],
      stack: [
        "React",
        "TypeScript",
        "JavaScript",
        "Redux Toolkit",
        "RTK Query",
        "Zustand",
        "React Router",
        "React Hook Form",
        "DevExtreme",
        "Tailwind CSS",
        "Styled Components",
        "Shadcn/ui",
        "Radix UI",
        "Zod",
        "Axios",
        "TanStack Start",
        "Astro",
        "Vite",
        "Oxlint",
        "Strapi",
        "Supabase",
      ],
    },
  },
  // Pittsburgh Knights: hidden for now, uncomment to show it again
  // {
  //   role: { en: "Freelance Front-End Developer", es: "Desarrollador Front-End Freelance" },
  //   organization: "Pittsburgh Knights",
  //   startDate: { en: "Jun, 2022", es: "Jun 2022" },
  //   endDate: { en: "May, 2024", es: "May 2024" },
  //   experiences: [
  //     {
  //       en: "Built and maintained real-time data systems and automated tournament platforms with React and JavaScript",
  //       es: "Construí y mantuve sistemas de datos en tiempo real y plataformas automatizadas de torneos con React y JavaScript",
  //     },
  //     {
  //       en: "Kept the platforms highly available during live events",
  //       es: "Mantuve las plataformas con alta disponibilidad durante eventos en vivo",
  //     },
  //     {
  //       en: "Worked with partners like Riot Games, optimizing frontend performance for large-scale traffic.",
  //       es: "Trabajé con aliados como Riot Games, optimizando el rendimiento del frontend para tráfico a gran escala.",
  //     },
  //   ],
  //   imageSrc: imgSrc("history/pittsburghKnights"),
  // },
  {
    role: { en: "Technical Support Agent", es: "Agente de Soporte Técnico" },
    organization: "EarthLink",
    startDate: { en: "Aug, 2021", es: "Ago 2021" },
    endDate: { en: "Nov, 2021", es: "Nov 2021" },
    experiences: [
      {
        en: "Bilingual technical support for customers of 3 major U.S. internet providers.",
        es: "Soporte técnico bilingüe para clientes de 3 grandes proveedores de internet de EE. UU.",
      },
      {
        en: "Remote connectivity troubleshooting and field technician dispatch.",
        es: "Diagnóstico remoto de conexión y envío de técnicos de campo.",
      },
      {
        en: "Daily English with U.S. customers and real-time interpretation between teams.",
        es: "Inglés diario con clientes de EE. UU. e interpretación en tiempo real entre equipos.",
      },
    ],
    imageSrc: imgSrc("history/earthlink"),
    details: {
      cover: false,
      eyebrow: { en: "Aug 2021 – Nov 2021", es: "Ago 2021 – Nov 2021" },
      subtitle: {
        en: "Bilingual technical support for U.S. internet customers, where I built my working English.",
        es: "Soporte técnico bilingüe para clientes de internet en EE. UU., donde consolidé mi inglés de trabajo.",
      },
      stats: [
        { value: "3", label: { en: "Major U.S. internet providers: AT&T, CenturyLink and Frontier", es: "Grandes proveedores de internet de EE. UU.: AT&T, CenturyLink y Frontier" } },
        { value: "2", label: { en: "Languages every day: English and Spanish", es: "Idiomas a diario: inglés y español" } },
      ],
      highlightsLabel: { en: "What I did", es: "Lo que hice" },
      highlights: [
        {
          en: "Provided bilingual technical support in English and Spanish to customers of 3 major U.S. internet providers: AT&T, CenturyLink, and Frontier.",
          es: "Brindé soporte técnico bilingüe en inglés y español a clientes de 3 importantes proveedores de internet de EE. UU.: AT&T, CenturyLink y Frontier.",
        },
        {
          en: "Diagnosed connectivity issues remotely, guided customers through equipment troubleshooting, and coordinated on-site technician dispatches.",
          es: "Diagnostiqué problemas de conectividad de forma remota, guié a clientes en la resolución de problemas con sus equipos y coordiné el envío de técnicos de campo.",
        },
        {
          en: "Communicated daily with U.S. customers and provided real-time interpretation between teams to facilitate technical issue resolution.",
          es: "Mantuve comunicación diaria con clientes estadounidenses y realicé interpretación en tiempo real entre equipos para facilitar la resolución de problemas técnicos.",
        },
      ],
      stackLabel: { en: "Skills", es: "Habilidades" },
      stack: [
        { en: "Technical support", es: "Soporte técnico" },
        { en: "Network troubleshooting", es: "Diagnóstico de redes" },
        { en: "English (C1)", es: "Inglés (C1)" },
        { en: "Interpretation", es: "Interpretación" },
      ],
    },
  },
];
