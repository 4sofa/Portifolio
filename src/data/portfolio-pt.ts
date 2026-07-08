import { sharedNavigation, sharedProfile, sharedProjects } from "@/data/portfolio-shared";
import type { PortfolioData } from "@/data/portfolio-types";

export const portfolioDataPt: PortfolioData = {
  seo: {
    title: "Gustavo Fogliati | Estudante de Engenharia de Software",
    description:
      "Portfolio de Gustavo Barreto Fogliati focado em desenvolvimento web, interfaces modernas e nuvem.",
    keywords: [
      "Gustavo Fogliati",
      "desenvolvedor",
      "engenharia de software",
      "portfolio",
      "CyberSecurity",
      "seguranca da informacao",
      "analise de vulnerabilidades",
    ],
  },
  routeSeo: {
    home: {
      title: "Inicio | Gustavo Fogliati",
      description: "Portfolio profissional com visao geral, projetos e contato.",
    },
    about: {
      title: "Sobre | Gustavo Fogliati",
      description: "Conheca a trajetoria e visao profissional de Gustavo Fogliati.",
    },
    stacks: {
      title: "Stacks | Gustavo Fogliati",
      description: "Linguagens, cloud e ferramentas do repertorio tecnico atual.",
    },
    education: {
      title: "Educacao | Gustavo Fogliati",
      description: "Formacao academica em Engenharia de Software pela UNINTER.",
    },
    experience: {
      title: "Experiencia | Gustavo Fogliati",
      description: "Experiencia em automacao de processos e software.",
    },
    projects: {
      title: "Projetos | Gustavo Fogliati",
      description: "Projetos que demonstram capacidade tecnica e resolucao de problemas.",
    },
    contact: {
      title: "Contato | Gustavo Fogliati",
      description: "Contato para oportunidades, freelas e colaboracoes.",
    },
  },
  profile: {
    ...sharedProfile,
    role: "Estudante de Engenharia de Software",
  },
  navigation: sharedNavigation.map((item) => ({
    ...item,
    label: {
      home: "Home",
      about: "Sobre",
      stacks: "Stacks",
      education: "Educacao",
      experience: "Experiencia",
      projects: "Projetos",
      contact: "Contato",
    }[item.key],
  })),
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/4sofa",
      ariaLabel: "Abrir perfil do GitHub em uma nova aba",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gustavo-barreto-fogliati-46732b23b",
      ariaLabel: "Abrir perfil do LinkedIn em uma nova aba",
    },
    {
      label: "Email",
      href: "mailto:gustavofogliati@gmail.com",
      ariaLabel: "Enviar email para gustavofogliati@gmail.com",
    },
  ],
  hero: {
    title: "Construo solucoes que unem codigo e proposito.",
    highlightedText: "Codigo limpo. Design funcional. Resultado.",
    highlightedPhrases: ["Codigo limpo.", "Design funcional.", "Resultado."],
    description:
      "Estudante de Engenharia de Software focado em CyberSecurity, com experiencia em automacao de processos e interesse em analise de seguranca, redes e protecao de sistemas.",
    primaryCta: { label: "Ver projetos", href: "/projects" },
    secondaryCta: { label: "Entrar em contato", href: "/contact" },
  },
  about: {
    title: "Sobre mim",
    lead:
      "Sou movido pela curiosidade técnica e pela busca em transformar problemas complexos em interfaces simples e eficientes.",
    paragraphs: [
      "Comecei como autodidata, buscando entender os bastidores da tecnologia. Atualmente, curso Engenharia de Software na UNINTER e direciono meus estudos para CyberSecurity, com foco em analise de vulnerabilidades, redes e defesa de sistemas.",
      "Minha experiencia no setor publico me deu uma base solida em gestao de dados, automacao de tarefas e atendimento ao usuario, competencias que trago para o desenvolvimento tecnico de software.",
    ],
    metrics: [
      { label: "Setor publico", value: "1 ano" },
      { label: "Foco atual", value: "CyberSecurity" },
      { label: "Formacao", value: "Eng. Software" },
    ],
  },
  stacks: [
    {
      title: "Linguagens",
      items: ["Python", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
  ],
  skills: [
    {
      title: "Cloud e desenvolvimento",
      items: [
        "Google Cloud Platform Basics",
        "CyberSecurity (Cisco)",
        "Automacao com Python",
        "Analise de vulnerabilidades",
      ],
    },
  ],
  experience: [
    {
      period: "Out/2024 - Dez/2025",
      role: "Estagiario / Assistente Administrativo",
      company: "Prefeitura Municipal de Cachoeirinha (Divida Ativa)",
      description:
        "Foco em automacao de processos internos e gestao de dados administrativos, otimizando o fluxo de trabalho do setor.",
      skills: ["Automacao", "Excel", "Gestao de Dados", "SQL"],
    },
  ],
  education: [
    {
      period: "2025 - 2030 (previsto)",
      degree: "Bacharelado em Engenharia de Software",
      institution: "UNINTER - Centro Universitario Internacional",
      description:
        "Focado em desenvolvimento de software em escala, arquitetura cloud e fundamentos de engenharia.",
    },
    {
      period: "2022 - 2025",
      degree: "Ensino medio",
      institution: "Colegio Estadual Rodrigues Alves",
      description: "Concluido com foco academico.",
    },
  ],
  projects: [
    {
      ...sharedProjects[0],
      summary:
        "Site de aluguel de cabanas com listagem de propriedades, informacoes detalhadas e interface responsiva para facilitar reservas.",
    },
    {
      ...sharedProjects[1],
      summary:
        "Clone de soundpad para reproducao de efeitos sonoros e memes durante conversas ou streams, com busca de audios do MyInstants.",
    },
    {
      ...sharedProjects[2],
      summary:
        "Agregador editorial de noticias de TI com servidor Express, reader interno e banco compativel com libSQL/Turso.",
    },
    {
      ...sharedProjects[3],
      summary:
        "Servidor Windows que transforma um celular em controle virtual via WebSockets/HTTP e injeta comandos como controle de Xbox 360.",
    },
  ],
  contact: {
    title: "Contato",
    description:
      "Estou aberto a oportunidades, projetos freelance e conexoes profissionais. Se algo do meu trabalho chamou sua atencao, entre em contato.",
    availability: "Disponivel para estagios, projetos freelance e colaboracoes.",
    email: sharedProfile.email,
  },
  pageIntros: {
    about: {
      eyebrow: "Perfil",
      title: "Sobre mim",
      description:
        "Sou movido pela curiosidade tecnica e pela busca em transformar problemas complexos em interfaces simples e eficientes.",
    },
    stacks: {
      eyebrow: "Stack tecnico",
      title: "Linguagens, cloud e ferramentas.",
      description: "Linguagens que estou aprendendo e utilizando atualmente.",
    },
    education: {
      eyebrow: "Educacao",
      title: "Minha formacao academica.",
      description: "Base teorica em Engenharia de Software com foco em escalabilidade e fundamentos.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Onde construí base pratica e visao de processo.",
      description: "Minha trajetoria profissional mescla atuacao no setor publico com a transicao para software.",
    },
    projects: {
      eyebrow: "Projetos selecionados",
      title: "Projetos selecionados que demonstram abordagem tecnica e resolucao de problemas.",
      description: "Cada projeto representa um desafio diferente. A estrutura permite evolucao continua.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar?",
      description: "Estou aberto a oportunidades, conexoes profissionais e projetos interessantes.",
    },
  },
  ui: {
    localeLabel: "Idioma",
    openMenuLabel: "Abrir menu",
    closeMenuLabel: "Fechar menu",
    skipToContentLabel: "Pular para o conteudo",
    profileLabel: "Perfil",
    locationLabel: "Localizacao",
    locationFallback: "A definir",
    resumeLabel: "CV / Resume",
    resumeAvailable: "Disponivel",
    resumeSoon: "Em breve",
    resumePageTitle: "CV Gustavo Fogliati",
    resumePageDescription: "Visualize o curriculo diretamente no navegador ou baixe o PDF.",
    resumeDownloadLabel: "Baixar CV",
    resumeOpenLabel: "Abrir PDF",
    degreeLabel: "Engenharia de Software",
    degreePeriod: "UNINTER - 2025",
    featuredProjectLabel: "Projeto em destaque",
    projectLabel: "Projeto",
    roleLabel: "Papel",
    stackLabel: "Stack",
    demoLabel: "Demo",
    repositoryLabel: "GitHub",
    educationEyebrow: "Educacao",
    educationTitle: "Minha trajetoria academica",
    educationDescription: "Base teorica em Engenharia de Software focada em escalabilidade e fundamentos de algoritmos.",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Jornada profissional",
    experienceDescription: "Minha trajetoria profissional mescla atuacao no setor publico com a transicao para engenharia de software e automacao.",
    contactEyebrow: "Conexao",
    availabilityLabel: "Disponibilidade",
    primaryChannelLabel: "Canal principal",
    formLabel: "Formulario",
    formTitle: "Envie uma mensagem direta",
    contactNameLabel: "Nome",
    contactNamePlaceholder: "Seu nome",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "voce@exemplo.com",
    contactContextLabel: "Contexto",
    contactMessageLabel: "Mensagem",
    contactMessagePlaceholder: "Conte um pouco sobre a oportunidade, projeto ou ideia.",
    submitLabel: "Enviar mensagem",
    submittingLabel: "Enviando...",
    sendFailureMessage: "Falha no envio",
    sendSuccessMessage: "Mensagem enviada com sucesso. Retorno em breve.",
    sendFallbackMessage: "Seu cliente de email foi aberto com a mensagem preenchida para envio.",
    sendErrorMessage: "Nao foi possivel enviar agora. Tente novamente ou use os links sociais abaixo.",
    directoryEyebrow: "Mapa do site",
    directoryTitle: "Cada area do portfolio agora vive em uma pagina dedicada.",
    directoryDescription:
      "A navegacao central assume um papel mais visual e transforma as paginas em destinos com identidade propria.",
    directoryOpenLabel: "Abrir pagina",
    directoryFallbackDescription: "Pagina dedicada do portfolio.",
    directoryDescriptions: {
      "/about": "Trajetoria, visao de trabalho e posicionamento profissional.",
      "/stacks": "Tecnologias, cloud e ferramentas que formam sua base tecnica atual.",
      "/education": "Formacao academica apresentada em formato de timeline editorial.",
      "/experience": "Trajetoria profissional e experiencia em automacao de processos.",
      "/projects": "Vitrine tecnica com projetos, papeis e links externos.",
      "/contact": "Canais de contato e chamada final para conexao profissional.",
    },
    localeNames: { pt: "PT", en: "EN", es: "ES" },
    contactOptions: [
      { value: "internship", label: "Estagio / oportunidade" },
      { value: "freelance", label: "Projeto freelance" },
      { value: "networking", label: "Parceria / networking" },
      { value: "other", label: "Outro assunto" },
    ],
  },
};
