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
      "CyberSecurity",
      "seguridad de la información",
      "análisis de vulnerabilidades",
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
      description: "Lenguajes, cloud y herramientas del repertorio técnico actual.",
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
    title: "Construyo soluciones que unen código y propósito.",
    highlightedText: "Código limpio. Diseño funcional. Resultado.",
    highlightedPhrases: ["Código limpio.", "Diseño funcional.", "Resultado."],
    description:
      "Estudiante de Ingeniería de Software enfocado en CyberSecurity, con experiencia en automatización de procesos e interés creciente en análisis de seguridad, redes y protección de sistemas.",
    primaryCta: { label: "Ver proyectos", href: "/projects" },
    secondaryCta: { label: "Entrar en contacto", href: "/contact" },
  },
  about: {
    title: "Sobre mí",
    lead:
      "Me impulsa la curiosidad técnica y la búsqueda de transformar problemas complejos en interfaces simples y eficientes.",
    paragraphs: [
      "Comencé como autodidacta, buscando entender lo que ocurre detrás de la tecnología. Actualmente estudio Ingeniería de Software en UNINTER y dirijo mi aprendizaje hacia CyberSecurity, con foco en análisis de vulnerabilidades, redes y defensa de sistemas.",
      "Mi experiencia en el sector público me dio una base sólida en gestión de datos, automatización de tareas y atención al usuario, competencias que hoy llevo al desarrollo técnico de software.",
    ],
    metrics: [
      { label: "Sector público", value: "1 año" },
      { label: "Enfoque actual", value: "CyberSecurity" },
      { label: "Formación", value: "Ing. Software" },
    ],
  },
  stacks: [
    {
      title: "Lenguajes",
      items: ["Python", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
  ],
  skills: [
    {
      title: "Cloud y desarrollo",
      items: [
        "Google Cloud Platform Basics",
        "CyberSecurity (Cisco)",
        "Automatización con Python",
        "Análisis de vulnerabilidades",
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
    {
      ...sharedProjects[2],
      summary:
        "Agregador editorial de noticias de TI con servidor Express, reader interno y base compatible con libSQL/Turso.",
    },
    {
      ...sharedProjects[3],
      summary:
        "Servidor Windows que convierte un celular en control virtual via WebSockets/HTTP e inyecta comandos como control de Xbox 360.",
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
      eyebrow: "Perfil",
      title: "Quién soy, qué hago y cómo pienso sobre tecnología.",
      description: "Una visión más profunda de mi trayectoria, competencias y forma de trabajar.",
    },
    stacks: {
      eyebrow: "Stack tecnico",
      title: "Lenguajes, cloud y herramientas.",
      description: "Lenguajes que estoy aprendiendo y utilizando actualmente.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Skills",
      description: "Competencias tecnicas y soft skills.",
    },
    education: {
      eyebrow: "Educación",
      title: "Mi formación académica.",
      description: "Base teórica en Ingeniería de Software con foco en escalabilidad y fundamentos.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Dónde construí base práctica y visión de proceso.",
      description: "Mi trayectoria profesional mezcla actuación en el sector público con la transición hacia software.",
    },
    projects: {
      eyebrow: "Proyectos seleccionados",
      title: "Proyectos seleccionados que demuestran enfoque tecnico y resolucion de problemas.",
      description: "Cada proyecto representa un desafio diferente. La estructura permite evolucion continua.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Conversamos?",
      description: "Estoy abierto a oportunidades, conexiones profesionales y proyectos interesantes.",
    },
  },
  ui: {
    localeLabel: "Idioma",
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
    featuredProjectLabel: "Proyecto destacado",
    projectLabel: "Proyecto",
    roleLabel: "Rol",
    stackLabel: "Stack",
    demoLabel: "Demo",
    repositoryLabel: "GitHub",
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
      "/stacks": "Tecnologías, cloud y herramientas que forman la base técnica actual.",
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
