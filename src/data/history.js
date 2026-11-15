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
        en: "Migrated legacy codebase to TypeScript, boosting performance by 40% in Aurora, a 240+ screen banking platform spanning 20 departments and 80+ programs",
        es: "Migré código heredado a TypeScript, mejorando el rendimiento en un 40% en Aurora, una plataforma bancaria de más de 240 pantallas que abarca 20 departamentos y más de 80 programas",
      },
      {
        en: "Top contributor to Aurora: authored 220+ merged pull requests and 3,800+ commits, about 40% of the repository's history",
        es: "Principal contribuidor de Aurora: más de 220 pull requests integrados y más de 3,800 commits, cerca del 40% del historial del repositorio",
      },
      {
        en: "Built interactive dashboards and charts for large-scale banking and demand systems",
        es: "Construí tableros y gráficas interactivas para sistemas bancarios y de demandas a gran escala",
      },
      {
        en: "Developed internal tools from scratch, including a request manager and marketplace app.",
        es: "Desarrollé herramientas internas desde cero, entre ellas un gestor de solicitudes y una app de marketplace.",
      },
      {
        en: "Started as an intern (Feb to May 2024): delivered 20+ internal CRUD screens and a secure, login-enabled site integrated with banking APIs.",
        es: "Empecé como pasante (febrero a mayo de 2024): entregué más de 20 pantallas internas de CRUD y un sitio seguro con inicio de sesión integrado con APIs bancarias.",
      },
    ],
    imageSrc: imgSrc("history/banhcafe"),
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
        en: "Provided bilingual technical support for customers of 3 major U.S. internet providers: AT&T, CenturyLink, and Frontier",
        es: "Brindé soporte técnico bilingüe a clientes de 3 grandes proveedores de internet de EE. UU.: AT&T, CenturyLink y Frontier",
      },
      {
        en: "Troubleshot connectivity issues remotely, guiding customers through diagnostics and equipment resets, and dispatched field technicians when on-site repair was needed",
        es: "Diagnostiqué fallas de conexión a distancia, guiando a los clientes en pruebas y reinicios de equipos, y envié técnicos de campo cuando se necesitaba reparación en sitio",
      },
      {
        en: "Worked daily in English with U.S. customers and interpreted in real time between English- and Spanish-speaking teams",
        es: "Trabajé a diario en inglés con clientes de EE. UU. e interpreté en tiempo real entre equipos de habla inglesa y española",
      },
    ],
    imageSrc: imgSrc("history/earthlink"),
  },
];
