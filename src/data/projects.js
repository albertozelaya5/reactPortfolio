import { imgSrc } from "../assets";

// Text shown in both languages goes as { en, es }; see localize() in src/i18n
const ROLE = { en: "Role", es: "Rol" };
const CLIENT = { en: "Client", es: "Cliente" };
const YEAR = { en: "Year", es: "Año" };
const TYPE = { en: "Type", es: "Tipo" };
const FRONTEND_DEV = { en: "Frontend Developer", es: "Desarrollador Frontend" };
const BANHCAFE_INTERNAL = { en: "Banhcafe (internal)", es: "Banhcafe (interno)" };

export default [
  //* REAL WORLD PROJECTS
  {
    title: "AgriTech Banhcafe",
    imageSrc: imgSrc("projects/agritech"),
    description: {
      en: "Lead-generation site that connects Honduran smallholder farmers with Banhcafe's climate-smart financing.",
      es: "Sitio de captación que conecta a pequeños productores hondureños con el financiamiento climáticamente inteligente de Banhcafe.",
    },
    skills: ["React", "TypeScript", "TanStack Start", "Tailwind", "Radix UI", "Zod", "Supabase"],
    demo: "https://agritech.banhcafe.hn",
    source: "",
    details: {
      eyebrow: { en: "Case study · In production", es: "Caso de estudio · En producción" },
      subtitle: {
        en: "A digital front door that turns interest in climate-smart financing into leads a Banhcafe advisor can follow up.",
        es: "Una puerta de entrada digital que convierte el interés por el financiamiento climáticamente inteligente en contactos que un asesor de Banhcafe puede atender.",
      },
      meta: [
        { label: ROLE, value: FRONTEND_DEV },
        { label: CLIENT, value: "Banhcafe × IFC" },
        { label: YEAR, value: "2026" },
        { label: TYPE, value: { en: "Landing page · Lead generation", es: "Landing page · Captación de clientes" } },
      ],
      stats: [
        {
          value: { en: "8 days", es: "8 días" },
          label: { en: "From first commit to the version in production", es: "Del primer commit a la versión en producción" },
        },
        {
          value: "99%",
          label: {
            en: "Lighter 3D icons: ~7 MB PNG down to ~8 KB WebP each",
            es: "Íconos 3D más livianos: de ~7 MB en PNG a ~8 KB en WebP cada uno",
          },
        },
        {
          value: "~2 s",
          label: {
            en: "Largest Contentful Paint on a cold desktop load",
            es: "Largest Contentful Paint en una primera carga de escritorio",
          },
        },
        {
          value: "4",
          label: {
            en: "Commodities with live market prices: coffee, soy, corn, wheat",
            es: "Productos con precios de mercado en vivo: café, soya, maíz y trigo",
          },
        },
      ],
      overview: [
        {
          en: "Banhcafe has financed Honduras's productive sector since 1981. With advisory support from the IFC (World Bank Group), the bank is developing climate-smart credit for smallholder farmers, cooperatives and agribusinesses, a rural segment where close to 80% of the workforce is informal and credit is hard to reach.",
          es: "Banhcafe financia al sector productivo de Honduras desde 1981. Con la asesoría de IFC (Grupo Banco Mundial), el banco desarrolla crédito climáticamente inteligente para pequeños productores, cooperativas y agronegocios, un segmento rural donde cerca del 80% del empleo es informal y el crédito es difícil de conseguir.",
        },
        {
          en: "AgriTech Banhcafe is the public face of that program. It explains the offer in plain language, gives producers live prices for their crops, and turns each visit into a contact the bank's team can follow up within 24 hours.",
          es: "AgriTech Banhcafe es la cara pública de ese programa. Explica la oferta en lenguaje sencillo, muestra a los productores precios en vivo de sus cultivos y convierte cada visita en un contacto que el equipo del banco puede atender en menos de 24 horas.",
        },
      ],
      highlights: [
        {
          en: "Producers request a demo with a six-field form, validated with Zod and stored in Supabase, with clear loading, success and error states.",
          es: "Los productores solicitan una demo con un formulario de seis campos, validado con Zod y guardado en Supabase, con estados claros de carga, éxito y error.",
        },
        {
          en: "Live prices for coffee, soy, corn and wheat give farmers a reason to come back.",
          es: "Los precios en vivo de café, soya, maíz y trigo dan a los productores una razón para volver.",
        },
        {
          en: "One-tap WhatsApp contact with a pre-filled message, for people who prefer chat over forms.",
          es: "Contacto por WhatsApp con un toque y mensaje ya escrito, para quienes prefieren chatear antes que llenar formularios.",
        },
        {
          en: "Six portfolio indicators (carbon and water footprint, harvest estimates, satellite monitoring) explained for banks and producers.",
          es: "Seis indicadores de cartera (huella de carbono e hídrica, estimación de cosecha, monitoreo satelital) explicados para bancos y productores.",
        },
        {
          en: "Light enough for rural connections: every image, icon and video was converted to WebP/MP4 before release.",
          es: "Liviano para conexiones rurales: cada imagen, ícono y video se convirtió a WebP/MP4 antes de publicar.",
        },
        {
          en: "Server-rendered pages and a blog with dynamic routes, so the content is indexable by search engines.",
          es: "Páginas renderizadas en el servidor y un blog con rutas dinámicas, para que los buscadores indexen el contenido.",
        },
      ],
      role: {
        en: "Sole developer on the project: 34 commits shipped through 7 pull requests. I turned Banhcafe's brand palette into a Tailwind design system, built every section and its responsive layout, connected the market-data and lead-capture flows, and optimized all media before release.",
        es: "Único desarrollador del proyecto: 34 commits entregados en 7 pull requests. Convertí la paleta de marca de Banhcafe en un sistema de diseño con Tailwind, construí cada sección y su diseño adaptable, conecté los flujos de precios de mercado y de captación de contactos, y optimicé todos los recursos antes de publicar.",
      },
      stack: ["TanStack Start (SSR)", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Zod", "Supabase", "Bun"],
      gallery: [
        {
          src: imgSrc("projects/agritech/prices"),
          alt: { en: "Live commodity prices section", es: "Sección de precios de mercado en vivo" },
        },
        {
          src: imgSrc("projects/agritech/advantages"),
          alt: { en: "System advantages in a bento layout", es: "Ventajas del sistema en una cuadrícula tipo bento" },
        },
        {
          src: imgSrc("projects/agritech/indicators"),
          alt: { en: "Key portfolio indicators section", es: "Sección de indicadores clave de cartera" },
        },
        {
          src: imgSrc("projects/agritech/lead-form"),
          alt: { en: "Demo request form and FAQ", es: "Formulario de solicitud de demo y preguntas frecuentes" },
        },
      ],
    },
  },
  {
    title: {
      en: "Enterprise Requirements & Workflow Manager",
      es: "Gestor Empresarial de Requerimientos y Flujos",
    },
    imageSrc: imgSrc("projects/requirements-program"),
    description: {
      en: "Bank-wide task management system with multi-level nested subtasks and dynamic roles.",
      es: "Sistema de gestión de tareas para todo el banco, con subtareas anidadas en varios niveles y roles dinámicos.",
    },
    skills: ["React", "Typescript", "RTK Query", "Redux Toolkit", "DevExtreme", "Styled Components"],
    demo: "",
    source: "",
    details: {
      eyebrow: { en: "Case study · Internal tool", es: "Caso de estudio · Herramienta interna" },
      subtitle: {
        en: "One place for every department to request, approve and track changes to the bank's systems.",
        es: "Un solo lugar para que cada departamento solicite, apruebe y dé seguimiento a los cambios en los sistemas del banco.",
      },
      meta: [
        { label: ROLE, value: FRONTEND_DEV },
        { label: CLIENT, value: BANHCAFE_INTERNAL },
        { label: YEAR, value: "2025" },
        { label: TYPE, value: { en: "Workflow platform", es: "Plataforma de flujos de trabajo" } },
      ],
      stats: [
        {
          value: "8",
          label: {
            en: "Workflow states, from new request to moved to production",
            es: "Estados del flujo, desde nueva solicitud hasta trasladado a producción",
          },
        },
        {
          value: "5",
          label: {
            en: "Role groups with their own permissions: committee, admin, developer, QA and certifying user",
            es: "Grupos de rol con permisos propios: comité, administrador, desarrollador, QA y usuario certificador",
          },
        },
        {
          value: "4",
          label: {
            en: "Rounds of stakeholder review turned into shipped fixes",
            es: "Rondas de revisión con los usuarios convertidas en mejoras entregadas",
          },
        },
      ],
      overview: [
        {
          en: "Requests for new features and fixes used to reach IT from every department with no shared view of who approved them, who was working on them or how late they were.",
          es: "Las solicitudes de nuevas funciones y correcciones llegaban a IT desde todos los departamentos, sin una vista compartida de quién las aprobó, quién las estaba trabajando o cuánto atraso tenían.",
        },
        {
          en: "This module of the bank's back office gives each requirement a single page: its details, requisites, documents, comments, evaluation and a planning board, with a timeline of every state it has gone through.",
          es: "Este módulo del back office del banco le da a cada requerimiento una sola página: sus detalles, requisitos, documentos, comentarios, evaluación y un tablero de planificación, con una línea de tiempo de cada estado por el que ha pasado.",
        },
      ],
      highlights: [
        {
          en: "Any department files a request; a committee approves or rejects it before it reaches development.",
          es: "Cualquier departamento registra una solicitud; un comité la aprueba o la rechaza antes de que llegue a desarrollo.",
        },
        {
          en: "A planning board splits each requirement into tasks and nested subtasks, with owners, dependencies and progress.",
          es: "Un tablero de planificación divide cada requerimiento en tareas y subtareas anidadas, con responsables, dependencias y avance.",
        },
        {
          en: "A requirement cannot move to certification while it still has pending tasks.",
          es: "Un requerimiento no puede pasar a certificación mientras tenga tareas pendientes.",
        },
        {
          en: "Projects show days remaining or days overdue, so late work is visible on the cards.",
          es: "Los proyectos muestran días restantes o días de atraso, así el trabajo retrasado se ve en las tarjetas.",
        },
        {
          en: "What each person can see and edit depends on their role, the tab and the current state.",
          es: "Lo que cada persona puede ver y editar depende de su rol, de la pestaña y del estado actual.",
        },
        {
          en: "Documents and comments stay attached to the requirement, and owners manage only what they uploaded.",
          es: "Los documentos y comentarios quedan adjuntos al requerimiento, y cada dueño administra solo lo que subió.",
        },
      ],
      role: {
        en: "Frontend developer, paired with a backend developer. I built the screens, the state and caching layer with RTK Query, and the permission logic on the client, then worked through four rounds of feedback from the committee and the users.",
        es: "Desarrollador frontend, en pareja con un desarrollador backend. Construí las pantallas, la capa de estado y caché con RTK Query y la lógica de permisos en el cliente, y luego atendí cuatro rondas de observaciones del comité y de los usuarios.",
      },
      stack: ["React", "TypeScript", "RTK Query", "Redux Toolkit", "DevExtreme", "Styled Components"],
    },
  },
  {
    title: {
      en: "Legal Portfolio & Analytics System",
      es: "Sistema de Cartera Legal y Analítica",
    },
    imageSrc: imgSrc("projects/demands-program"),
    description: {
      en: "Tracks multi-stage legal lawsuits and visualizes recovery metrics by branch.",
      es: "Da seguimiento a demandas legales de varias etapas y muestra las métricas de recuperación por agencia.",
    },
    skills: ["React", "DevExtreme", "Styled Components", "React Hook Form", "JavaScript"],
    demo: "",
    source: "",
    details: {
      eyebrow: { en: "Case study · Internal tool", es: "Caso de estudio · Herramienta interna" },
      subtitle: {
        en: "Follows every lawsuit from filing to recovery and shows where the money stands by status, month and branch.",
        es: "Sigue cada demanda desde su presentación hasta la recuperación y muestra cómo va el dinero por estado, mes y agencia.",
      },
      meta: [
        { label: ROLE, value: FRONTEND_DEV },
        { label: CLIENT, value: BANHCAFE_INTERNAL },
        { label: TYPE, value: { en: "Case tracking · Analytics", es: "Seguimiento de casos · Analítica" } },
        { label: { en: "Access", es: "Acceso" }, value: { en: "Role-based", es: "Por roles" } },
      ],
      overview: [
        {
          en: "The bank's legal team follows hundreds of lawsuits that move through many stages, across every branch. Answering how much has been claimed and how much has been recovered meant collecting the data by hand.",
          es: "El equipo legal del banco da seguimiento a cientos de demandas que pasan por muchas etapas, en todas las agencias. Saber cuánto se ha demandado y cuánto se ha recuperado implicaba reunir los datos a mano.",
        },
        {
          en: "This system keeps each lawsuit and its stage in one place and turns the portfolio into dashboards that the team can filter by date range.",
          es: "Este sistema guarda cada demanda y su etapa en un solo lugar y convierte la cartera en tableros que el equipo puede filtrar por rango de fechas.",
        },
      ],
      highlights: [
        {
          en: "Amount claimed versus amount recovered, month by month.",
          es: "Monto demandado frente a monto recuperado, mes a mes.",
        },
        {
          en: "Number of lawsuits in each of the ten legal stages, from active to paid or auctioned.",
          es: "Cantidad de demandas en cada una de las diez etapas legales, desde activa hasta pagada o rematada.",
        },
        {
          en: "Lawsuits per branch, to see where the portfolio concentrates.",
          es: "Demandas por agencia, para ver dónde se concentra la cartera.",
        },
        {
          en: "A date-range filter that updates every chart at once.",
          es: "Un filtro por rango de fechas que actualiza todas las gráficas a la vez.",
        },
        {
          en: "Screens and actions limited by role and permission.",
          es: "Pantallas y acciones limitadas por rol y permiso.",
        },
        { en: "Light and dark themes.", es: "Temas claro y oscuro." },
      ],
      role: {
        en: "Frontend developer. I built the tracking screens and the dashboards, and later reworked the module's permissions.",
        es: "Desarrollador frontend. Construí las pantallas de seguimiento y los tableros, y después rehice los permisos del módulo.",
      },
      stack: ["React", "JavaScript", "DevExtreme", "Styled Components", "React Hook Form"],
    },
  },
  {
    title: {
      en: "Banhcafe Open API Portal",
      es: "Portal de APIs Abiertas de Banhcafe",
    },
    imageSrc: imgSrc("projects/developerSite"),
    description: {
      en: "Accelerates fintech integration by securely exposing and documenting internal banking APIs.",
      es: "Acelera la integración con fintechs al exponer y documentar de forma segura las APIs bancarias internas.",
    },
    skills: ["React", "Vite", "Shadcn/Ui", "Tailwind", "Zustand", "Axios"],
    demo: "",
    source: "https://github.com/albertozelaya5/developerSite",
    details: {
      eyebrow: { en: "Case study · Developer portal", es: "Caso de estudio · Portal para desarrolladores" },
      subtitle: {
        en: "A catalog where fintechs discover, read about and request access to Banhcafe's banking APIs.",
        es: "Un catálogo donde las fintechs descubren las APIs bancarias de Banhcafe, leen su documentación y solicitan acceso.",
      },
      meta: [
        { label: ROLE, value: FRONTEND_DEV },
        { label: CLIENT, value: "Banhcafe" },
        { label: YEAR, value: "2024" },
        { label: TYPE, value: { en: "Developer portal", es: "Portal para desarrolladores" } },
      ],
      stats: [
        {
          value: { en: "10 weeks", es: "10 semanas" },
          label: { en: "From first commit to version 1", es: "Del primer commit a la versión 1" },
        },
        {
          value: "81%",
          label: {
            en: "Of the commits in a four-person team (48 of 59)",
            es: "De los commits en un equipo de cuatro personas (48 de 59)",
          },
        },
      ],
      overview: [
        {
          en: "Partners that wanted to integrate with the bank had no public place to see which APIs existed or how to ask for access, so every integration started with emails and meetings.",
          es: "Los aliados que querían integrarse con el banco no tenían un lugar público para ver qué APIs existían ni cómo pedir acceso, así que cada integración empezaba con correos y reuniones.",
        },
        {
          en: "The portal presents each API as a product, with its documentation and a direct way to contact the bank. The content lives in a CMS, so the bank's team publishes new APIs without a deploy.",
          es: "El portal presenta cada API como un producto, con su documentación y una forma directa de contactar al banco. El contenido vive en un CMS, así el equipo del banco publica nuevas APIs sin necesidad de un despliegue.",
        },
      ],
      highlights: [
        {
          en: "API catalog with category filters, such as financial services or security and verification.",
          es: "Catálogo de APIs con filtros por categoría, como servicios financieros o seguridad y verificación.",
        },
        {
          en: "Documentation written in Markdown and rendered with syntax-highlighted code samples.",
          es: "Documentación escrita en Markdown y mostrada con ejemplos de código resaltados.",
        },
        {
          en: "Content managed in Strapi: pages, APIs and solutions are edited by the bank's team.",
          es: "Contenido administrado en Strapi: el equipo del banco edita las páginas, las APIs y las soluciones.",
        },
        {
          en: "Login and protected routes for partner-only documentation.",
          es: "Inicio de sesión y rutas protegidas para la documentación exclusiva de aliados.",
        },
        {
          en: "Contact form validated with React Hook Form and Zod, with multi-select for the APIs of interest.",
          es: "Formulario de contacto validado con React Hook Form y Zod, con selección múltiple de las APIs de interés.",
        },
        {
          en: "Responsive layout, dark mode, skeletons and lazy-loaded images.",
          es: "Diseño adaptable, modo oscuro, esqueletos de carga e imágenes con carga diferida.",
        },
      ],
      role: {
        en: "Main frontend developer during my internship. I built the landing page, the API catalog, the documentation reader, the login flow and the contact form, and connected them to the Strapi backend.",
        es: "Desarrollador frontend principal durante mi pasantía. Construí la página de inicio, el catálogo de APIs, el lector de documentación, el inicio de sesión y el formulario de contacto, y los conecté al backend de Strapi.",
      },
      stack: ["React", "Vite", "Shadcn/ui", "Tailwind CSS", "Zustand", "Redux Toolkit", "Axios", "Zod", "Strapi"],
    },
  },
];
