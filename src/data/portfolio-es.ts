import { sharedNavigation, sharedProfile, sharedProjects } from "@/data/portfolio-shared";
import type { PortfolioData } from "@/data/portfolio-types";

export const portfolioDataEs: PortfolioData = {
  seo: {
    title: "Gustavo Fogliati | Estudiante de Ingeniería de Software",
    description:
      "Portafolio de Gustavo Barreto Fogliati enfocado en desarrollo web, interfaces modernas y cloud.",
    keywords: [
      "Gustavo Fogliati",
      "desarrollador",
      "ingeniería de software",
      "portafolio",
      "Next.js",
      "React",
      "TypeScript",
    ],
  },
  routeSeo: {
    home: {
      title: "Inicio | Gustavo Fogliati",
      description: "Portafolio profesional con visión general, proyectos y contacto.",
    },
    about: {
      title: "Sobre mí | Gustavo Fogliati",
      description: "Conoce la trayectoria y la visión profesional de Gustavo Fogliati.",
    },
    stacks: {
      title: "Stacks | Gustavo Fogliati",
      description: "Lenguajes, frameworks y herramientas del repertorio técnico.",
    },
    skills: {
      title: "Skills | Gustavo Fogliati",
      description: "Competencias técnicas, organización y comunicación.",
    },
    education: {
      title: "Educación | Gustavo Fogliati",
      description: "Formación académica en Ingeniería de Software en UNINTER.",
    },
    experience: {
      title: "Experiencia | Gustavo Fogliati",
      description: "Experiencia en automatización de procesos y software.",
    },
    projects: {
      title: "Proyectos | Gustavo Fogliati",
      description: "Proyectos que demuestran ejecución técnica y resolución de problemas.",
    },
    contact: {
      title: "Contacto | Gustavo Fogliati",
      description: "Contacto para prácticas, trabajos freelance y colaboraciones.",
    },
  },
  profile: {
    ...sharedProfile,
    role: "Estudiante de Ingeniería de Software",
  },
  navigation: sharedNavigation.map((item) => ({
    ...item,
    label: {
      home: "Inicio",
      about: "Sobre mí",
      stacks: "Stacks",
      skills: "Skills",
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    }[item.key],
  })),
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/4sofa",
      ariaLabel: "Abrir perfil de GitHub en una nueva pestaña",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gustavo-barreto-fogliati-46732b23b",
      ariaLabel: "Abrir perfil de LinkedIn en una nueva pestaña",
    },
    {
      label: "Email",
      href: "mailto:gustavofogliati@gmail.com",
      ariaLabel: "Enviar correo a gustavofogliati@gmail.com",
    },
  ],
  hero: {
    eyebrow: "Estudiante de Ingeniería de Software",
    title: "Construyo soluciones que unen código y propósito.",
    highlightedText: "Código limpio. Diseño funcional. Resultado.",
    highlightedPhrases: ["Código limpio.", "Diseño funcional.", "Resultado."],
    description:
      "Estudiante de Ingeniería de Software enfocado en desarrollo web y cloud, con experiencia en automatización de procesos y soluciones de alto rendimiento en Next.js.",
    primaryCta: { label: "Ver proyectos", href: "/projects" },
    secondaryCta: { label: "Entrar en contacto", href: "/contact" },
  },
  about: {
    title: "Sobre mí",
    lead:
      "Me impulsa la curiosidad técnica y la búsqueda de transformar problemas complejos en interfaces simples y eficientes.",
    paragraphs: [
      "Comencé como autodidacta, apasionado por entender los bastidores de la tecnología. Actualmente estudio Ingeniería de Software en UNINTER y busco aplicar Python, JavaScript y Cloud Computing para crear productos reales que generen valor.",
      "Mi experiencia en el sector público me dio una base sólida en gestión de datos, automatización de tareas y atención al usuario, competencias que hoy llevo al desarrollo técnico de software.",
    ],
    metrics: [
      { label: "Sector público", value: "1 año" },
      { label: "Enfoque actual", value: "Next.js / Cloud" },
      { label: "Formación", value: "Ing. Software" },
    ],
  },
  stacks: [
    {
      title: "Lenguajes",
      items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks y cloud",
      items: ["Next.js", "React", "Google Cloud", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Herramientas",
      items: ["Git", "GitHub", "Figma", "Excel Avanzado", "Google Sheets"],
    },
  ],
  skills: [
    {
      title: "Cloud y desarrollo",
      items: [
        "Google Cloud Platform Basics",
        "CyberSecurity (Cisco)",
        "Automatización con Python",
        "Next.js App Router",
      ],
    },
    {
      title: "Madurez profesional",
      items: [
        "Gestión de datos administrativos",
        "Tributación municipal básica",
        "Comunicación interpersonal",
        "Enfoque en soluciones",
      ],
    },
  ],
  experience: [
    {
      period: "Oct/2024 - Dic/2025",
      role: "Practicante / Asistente Administrativo",
      company: "Prefeitura Municipal de Cachoeirinha (Deuda Activa)",
      description:
        "Foco en automatización de procesos internos y gestión de datos administrativos, optimizando el flujo de trabajo del sector.",
      skills: ["Automatización", "Excel", "Gestión de Datos", "SQL"],
    },
  ],
  education: [
    {
      period: "2025 - 2030 (previsto)",
      degree: "Licenciatura en Ingeniería de Software",
      institution: "UNINTER - Centro Universitario Internacional",
      description:
        "Enfocada en desarrollo de software a escala, arquitectura cloud y fundamentos de ingeniería.",
    },
    {
      period: "2022 - 2025",
      degree: "Educación secundaria",
      institution: "Colegio Estatal Rodrigues Alves",
      description: "Concluida con enfoque académico.",
    },
  ],
  projects: [
    {
      ...sharedProjects[0],
      summary:
        "Sitio de alquiler de cabañas con listado de propiedades, información detallada e interfaz responsiva para facilitar reservas.",
    },
    {
      ...sharedProjects[1],
      summary:
        "Clon de soundpad para reproducir efectos sonoros y memes durante conversaciones o streams, con búsqueda de audios de MyInstants.",
    },
  ],
  contact: {
    title: "Contacto",
    description:
      "Estoy abierto a oportunidades, proyectos freelance y conexiones profesionales. Si algo de mi trabajo llamó tu atención, ponte en contacto.",
    availability:
      "Disponible para prácticas, proyectos freelance y colaboraciones.",
    email: sharedProfile.email,
  },
  pageIntros: {
    about: {
      eyebrow: "Sobre mí",
      title: "Quién soy, qué hago y cómo pienso sobre tecnología.",
      description: "Una visión más profunda de mi trayectoria, competencias y forma de trabajar.",
      badge: "Perfil profesional y narrativa de carrera",
      highlights: ["Contexto de trayectoria", "Resumen estratégico del perfil", "Indicadores y diferenciales"],
    },
    stacks: {
      eyebrow: "Stacks",
      title: "Tecnologías y herramientas de mi día a día.",
      description: "Los lenguajes, frameworks y herramientas que uso para construir aplicaciones web modernas.",
      badge: "Mapa técnico del repertorio actual",
      highlights: ["Lenguajes principales", "Frameworks y bibliotecas", "Herramientas de rutina profesional"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Competencias que van más allá del código.",
      description: "Habilidades técnicas y profesionales que me permiten entregar valor real.",
      badge: "Ejecución, organización y pensamiento de producto",
      highlights: ["Habilidades técnicas", "Madurez funcional", "Claridad de comunicación y resolución"],
    },
    education: {
      eyebrow: "Educación",
      title: "Mi formación académica.",
      description: "Base teórica en Ingeniería de Software con foco en escalabilidad y fundamentos.",
      badge: "Formación y evolución técnica",
      highlights: ["Graduación en curso", "Fundamentos de ingeniería", "Evolución continua"],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Dónde construí base práctica y visión de proceso.",
      description: "Mi trayectoria profesional mezcla actuación en el sector público con la transición hacia software.",
      badge: "Experiencia profesional y contexto operativo",
      highlights: ["Automatización de procesos", "Gestión de datos", "Transición a software"],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos que muestran cómo pienso y resuelvo problemas.",
      description: "Cada proyecto es una vitrina técnica con contexto de rol, stack y enlaces.",
      badge: "Casos seleccionados y entregas relevantes",
      highlights: ["Proyectos destacados", "Rol asumido en cada entrega", "Enlaces externos para demo y repositorio"],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Conversamos?",
      description: "Estoy abierto a oportunidades, conexiones profesionales y proyectos interesantes.",
      badge: "Invitación a networking y oportunidades",
      highlights: ["Disponibilidad actual", "Canal principal de contacto", "Redes profesionales y sociales"],
    },
  },
  ui: {
    localeLabel: "Idioma",
    themeToggleLabel: "Cambiar tema",
    openMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
    skipToContentLabel: "Saltar al contenido",
    profileLabel: "Perfil",
    locationLabel: "Ubicación",
    locationFallback: "Por definir",
    resumeLabel: "CV / Resume",
    resumeAvailable: "Disponible",
    resumeSoon: "Próximamente",
    degreeLabel: "Ingeniería de Software",
    degreePeriod: "UNINTER - 2025",
    pageContextLabel: "Contexto de la página",
    pageContextFallback: "Página dedicada de la navegación principal",
    aboutEyebrow: "Perfil",
    aboutDirectionTitle: "Dirección",
    aboutDirectionText:
      "Búsqueda constante por entender el producto como un todo, no solo el código, sino el motivo detrás de cada decisión técnica.",
    projectsEyebrow: "Proyectos seleccionados",
    projectsTitle: "Proyectos seleccionados que demuestran enfoque técnico y resolución de problemas.",
    projectsDescription: "Cada proyecto representa un desafío diferente. La estructura permite evolución continua.",
    featuredProjectLabel: "Proyecto destacado",
    projectLabel: "Proyecto",
    roleLabel: "Rol",
    stackLabel: "Stack",
    demoLabel: "Demo",
    repositoryLabel: "GitHub",
    stacksEyebrow: "Stack técnico",
    stacksTitle: "Lenguajes, frameworks y herramientas de mi repertorio técnico.",
    stacksDescription: "Organizado en bloques independientes para lectura rápida y directa.",
    currentFocusLabel: "Enfoque actual",
    currentFocusTitle: "Web full-stack con foco en frontend moderno.",
    currentFocusDescription: "Next.js, React y TypeScript forman el centro de mi desarrollo diario.",
    skillsEyebrow: "Competencias profesionales",
    skillsTitle: "Competencias profesionales que complementan la ejecución técnica.",
    skillsDescription: "Habilidades que van más allá del código, comunicación, organización y pensamiento de producto.",
    mindsetLabel: "Mentalidad",
    mindsetText:
      "Cada proyecto es una oportunidad para aprender algo nuevo. Priorizo entender el problema antes de escribir la primera línea de código.",
    educationEyebrow: "Educación",
    educationTitle: "Mi trayectoria académica",
    educationDescription: "Base teórica en Ingeniería de Software enfocada en escalabilidad y fundamentos de algoritmos.",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Trayectoria profesional",
    experienceDescription: "Mi trayectoria profesional mezcla actuación en el sector público con la transición hacia ingeniería de software y automatización.",
    contactEyebrow: "Conexión",
    availabilityLabel: "Disponibilidad",
    primaryChannelLabel: "Canal principal",
    formLabel: "Formulario",
    formTitle: "Envía un mensaje directo",
    contactNameLabel: "Nombre",
    contactNamePlaceholder: "Tu nombre",
    contactEmailLabel: "Correo",
    contactEmailPlaceholder: "tu@ejemplo.com",
    contactContextLabel: "Contexto",
    contactMessageLabel: "Mensaje",
    contactMessagePlaceholder: "Cuéntame un poco sobre la oportunidad, proyecto o idea.",
    contactHelperText:
      "Si NEXT_PUBLIC_FORMSPREE_ENDPOINT está configurado, el envío va directo por el formulario. De lo contrario, abrimos tu cliente de correo.",
    submitLabel: "Enviar mensaje",
    submittingLabel: "Enviando...",
    sendFailureMessage: "Fallo en el envío",
    sendSuccessMessage: "Mensaje enviado con éxito. Responderé pronto.",
    sendFallbackMessage: "Tu cliente de correo se abrió con el mensaje listo para enviar.",
    sendErrorMessage: "No fue posible enviar ahora. Inténtalo de nuevo o usa los enlaces sociales abajo.",
    directoryEyebrow: "Mapa del sitio",
    directoryTitle: "Cada área del portafolio ahora vive en una página dedicada.",
    directoryDescription:
      "La navegación central asume un papel más visual y transforma las páginas en destinos con identidad propia.",
    directoryOpenLabel: "Abrir página",
    directoryFallbackDescription: "Página dedicada del portafolio.",
    directoryDescriptions: {
      "/about": "Trayectoria, visión de trabajo y posicionamiento profesional.",
      "/stacks": "Tecnologías, frameworks y herramientas que forman la base técnica.",
      "/skills": "Competencias funcionales y diferenciales de ejecución.",
      "/education": "Formación académica presentada en formato de timeline editorial.",
      "/experience": "Trayectoria profesional y experiencia en automatización de procesos.",
      "/projects": "Vitrina técnica con proyectos, roles y enlaces externos.",
      "/contact": "Canales de contacto y llamada final para conexión profesional.",
    },
    localeNames: { pt: "PT", en: "EN", es: "ES" },
    contactOptions: [
      { value: "internship", label: "Práctica / oportunidad" },
      { value: "freelance", label: "Proyecto freelance" },
      { value: "networking", label: "Asociación / networking" },
      { value: "other", label: "Otro asunto" },
    ],
  },
};
