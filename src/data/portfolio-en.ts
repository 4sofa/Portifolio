import { sharedNavigation, sharedProfile, sharedProjects } from "@/data/portfolio-shared";
import type { PortfolioData } from "@/data/portfolio-types";

export const portfolioDataEn: PortfolioData = {
  seo: {
    title: "Gustavo Fogliati | Software Engineering Student",
    description:
      "Portfolio of Gustavo Barreto Fogliati focused on web development, modern interfaces, and cloud solutions.",
    keywords: [
      "Gustavo Fogliati",
      "developer",
      "software engineering",
      "portfolio",
      "CyberSecurity",
      "information security",
      "vulnerability analysis",
    ],
  },
  routeSeo: {
    home: { title: "Home | Gustavo Fogliati", description: "Professional portfolio with overview, projects, and contact." },
    about: { title: "About | Gustavo Fogliati", description: "Background and professional point of view." },
    stacks: { title: "Stacks | Gustavo Fogliati", description: "Languages, cloud, and tools in Gustavo's current toolkit." },
    skills: { title: "Skills | Gustavo Fogliati", description: "Technical and professional skills." },
    education: { title: "Education | Gustavo Fogliati", description: "Academic background in Software Engineering." },
    experience: { title: "Experience | Gustavo Fogliati", description: "Professional path in process automation and software." },
    projects: { title: "Projects | Gustavo Fogliati", description: "Projects that show technical execution and problem solving." },
    contact: { title: "Contact | Gustavo Fogliati", description: "Get in touch for internships, freelance work, and collaborations." },
  },
  profile: {
    ...sharedProfile,
    role: "Software Engineering Student",
  },
  navigation: sharedNavigation.map((item) => ({
    ...item,
    label: {
      home: "Home",
      about: "About",
      stacks: "Stacks",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    }[item.key],
  })),
  socialLinks: [
    { label: "GitHub", href: "https://github.com/4sofa", ariaLabel: "Open GitHub profile in a new tab" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gustavo-barreto-fogliati-46732b23b", ariaLabel: "Open LinkedIn profile in a new tab" },
    { label: "Email", href: "mailto:gustavofogliati@gmail.com", ariaLabel: "Send an email to gustavofogliati@gmail.com" },
  ],
  hero: {
    title: "I build solutions that connect code and purpose.",
    highlightedText: "Clean code. Functional design. Results.",
    highlightedPhrases: ["Clean code.", "Functional design.", "Results."],
    description:
      "Software Engineering student focused on CyberSecurity, with experience in process automation and a growing interest in security analysis, networks, and system protection.",
    primaryCta: { label: "View projects", href: "/projects" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },
  about: {
    title: "About me",
    lead:
      "I am driven by technical curiosity and by the challenge of turning complex problems into simple, efficient interfaces.",
    paragraphs: [
      "I started as a self-taught learner, driven to understand how technology works behind the scenes. Today I study Software Engineering at UNINTER and direct my learning toward CyberSecurity, with a focus on vulnerability analysis, networks, and system defense.",
      "My experience in the public sector gave me a solid foundation in data management, task automation, and user support, skills I now bring into software development.",
    ],
    metrics: [
      { label: "Public sector", value: "1 year" },
      { label: "Current focus", value: "CyberSecurity" },
      { label: "Degree", value: "Software Eng." },
    ],
  },
  stacks: [
    { title: "Languages", items: ["Python", "HTML", "CSS", "JavaScript", "TypeScript"] },
  ],
  skills: [
    {
      title: "Cloud and development",
      items: ["Google Cloud Platform Basics", "CyberSecurity (Cisco)", "Python automation", "Vulnerability analysis"],
    },
  ],
  experience: [
    {
      period: "Oct/2024 - Dec/2025",
      role: "Intern / Administrative Assistant",
      company: "Cachoeirinha City Hall (Active Debt Department)",
      description:
        "Focused on automating internal processes and managing administrative data, improving the team's workflow.",
      skills: ["Automation", "Excel", "Data Management", "SQL"],
    },
  ],
  education: [
    {
      period: "2025 - 2030 (expected)",
      degree: "Bachelor's Degree in Software Engineering",
      institution: "UNINTER - International University Center",
      description:
        "Focused on scalable software development, cloud architecture, and engineering fundamentals.",
    },
    {
      period: "2022 - 2025",
      degree: "High school",
      institution: "Rodrigues Alves State School",
      description: "Completed with an academic focus.",
    },
  ],
  projects: [
    {
      ...sharedProjects[0],
      summary:
        "Cabin rental website with property listings, detailed information, and a responsive interface to support reservations.",
    },
    {
      ...sharedProjects[1],
      summary:
        "Soundpad clone for playing sound effects and memes during calls or streams, with audio fetched from MyInstants.",
    },
    {
      ...sharedProjects[2],
      summary:
        "Editorial IT news aggregator with an Express server, internal reader, and libSQL/Turso-compatible database.",
    },
    {
      ...sharedProjects[3],
      summary:
        "Windows server that turns a phone into a virtual controller over WebSockets/HTTP and injects input as an Xbox 360 controller.",
    },
  ],
  contact: {
    title: "Contact",
    description:
      "I am open to opportunities, freelance work, and professional connections. If anything in my work caught your attention, feel free to reach out.",
    availability: "Available for internships, freelance work, and collaborations.",
    email: sharedProfile.email,
  },
  pageIntros: {
    about: {
      eyebrow: "Profile",
      title: "Who I am, what I do, and how I think about technology.",
      description: "A deeper view of my path, skills, and way of working.",
    },
    stacks: {
      eyebrow: "Technical stack",
      title: "Languages, cloud, and tools.",
      description: "Languages I am currently learning and using.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Skills",
      description: "Technical skills and soft skills.",
    },
    education: {
      eyebrow: "Education",
      title: "My academic background.",
      description: "Theoretical foundation in Software Engineering focused on scalability and fundamentals.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I built practical foundations and process awareness.",
      description: "My path combines public sector work with a transition into software engineering.",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Selected projects that demonstrate technical thinking and problem solving.",
      description: "Each project represents a different challenge. The structure can keep evolving as new work is added.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk?",
      description: "I am open to opportunities, professional connections, and interesting projects.",
    },
  },
  ui: {
    localeLabel: "Language",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    skipToContentLabel: "Skip to content",
    profileLabel: "Profile",
    locationLabel: "Location",
    locationFallback: "To be defined",
    resumeLabel: "CV / Resume",
    resumeAvailable: "Available",
    resumeSoon: "Coming soon",
    degreeLabel: "Software Engineering",
    degreePeriod: "UNINTER - 2025",
    featuredProjectLabel: "Featured project",
    projectLabel: "Project",
    roleLabel: "Role",
    stackLabel: "Stack",
    demoLabel: "Demo",
    repositoryLabel: "GitHub",
    educationEyebrow: "Education",
    educationTitle: "My academic path",
    educationDescription: "Theoretical foundation in Software Engineering focused on scalability and algorithmic fundamentals.",
    experienceEyebrow: "Experience",
    experienceTitle: "Professional journey",
    experienceDescription: "My professional path combines public sector work with a transition to software engineering and automation.",
    contactEyebrow: "Connection",
    availabilityLabel: "Availability",
    primaryChannelLabel: "Primary channel",
    formLabel: "Form",
    formTitle: "Send a direct message",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Email",
    contactEmailPlaceholder: "you@example.com",
    contactContextLabel: "Context",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Share a bit about the opportunity, project, or idea.",
    submitLabel: "Send message",
    submittingLabel: "Sending...",
    sendFailureMessage: "Send failed",
    sendSuccessMessage: "Message sent successfully. I will reply soon.",
    sendFallbackMessage: "Your email client has been opened with the message prefilled.",
    sendErrorMessage: "It was not possible to send right now. Please try again or use the social links below.",
    directoryEyebrow: "Site map",
    directoryTitle: "Each area of the portfolio now lives in its own page.",
    directoryDescription: "The central navigation takes on a more visual role and gives each page its own identity.",
    directoryOpenLabel: "Open page",
    directoryFallbackDescription: "Dedicated portfolio page.",
    directoryDescriptions: {
      "/about": "Background, work approach, and professional positioning.",
      "/stacks": "Technologies, cloud, and tools that form the current technical base.",
      "/skills": "Functional strengths and execution differentiators.",
      "/education": "Academic background shown as an editorial timeline.",
      "/experience": "Professional history and process automation experience.",
      "/projects": "Technical showcase with projects, roles, and external links.",
      "/contact": "Contact channels and final call for professional connection.",
    },
    localeNames: { pt: "PT", en: "EN", es: "ES" },
    contactOptions: [
      { value: "internship", label: "Internship / opportunity" },
      { value: "freelance", label: "Freelance project" },
      { value: "networking", label: "Partnership / networking" },
      { value: "other", label: "Other topic" },
    ],
  },
};
