import type { Locale } from "@/lib/i18n";

export type NavIconName =
  | "home"
  | "user"
  | "spark"
  | "cap"
  | "stack"
  | "projects"
  | "briefcase"
  | "mail";

export type PageKey =
  | "home"
  | "about"
  | "stacks"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "contact";

export interface NavItem {
  key: PageKey;
  label: string;
  href: string;
  icon: NavIconName;
}

export interface ActionLink {
  label: string;
  href: string;
}

export interface SocialLink extends ActionLink {
  ariaLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  highlightedPhrases: string[];
  description: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
}

export interface AboutMetric {
  label: string;
  value: string;
}

export interface AboutContent {
  title: string;
  lead: string;
  paragraphs: string[];
  metrics: AboutMetric[];
}

export interface StackCategory {
  title: string;
  items: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  role: string;
  stack: string[];
  demoUrl: string;
  repositoryUrl: string;
  featured: boolean;
}

export interface ContactContent {
  title: string;
  description: string;
  availability: string;
  email: string;
}

export interface PageIntroContent {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  highlights: string[];
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface LocaleUiContent {
  localeLabel: string;
  themeToggleLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  skipToContentLabel: string;
  profileLabel: string;
  locationLabel: string;
  locationFallback: string;
  resumeLabel: string;
  resumeAvailable: string;
  resumeSoon: string;
  degreeLabel: string;
  degreePeriod: string;
  pageContextLabel: string;
  pageContextFallback: string;
  aboutEyebrow: string;
  aboutDirectionTitle: string;
  aboutDirectionText: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  featuredProjectLabel: string;
  projectLabel: string;
  roleLabel: string;
  stackLabel: string;
  demoLabel: string;
  repositoryLabel: string;
  stacksEyebrow: string;
  stacksTitle: string;
  stacksDescription: string;
  currentFocusLabel: string;
  currentFocusTitle: string;
  currentFocusDescription: string;
  skillsEyebrow: string;
  skillsTitle: string;
  skillsDescription: string;
  mindsetLabel: string;
  mindsetText: string;
  educationEyebrow: string;
  educationTitle: string;
  educationDescription: string;
  experienceEyebrow: string;
  experienceTitle: string;
  experienceDescription: string;
  contactEyebrow: string;
  availabilityLabel: string;
  primaryChannelLabel: string;
  formLabel: string;
  formTitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactContextLabel: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactHelperText: string;
  submitLabel: string;
  submittingLabel: string;
  sendFailureMessage: string;
  sendSuccessMessage: string;
  sendFallbackMessage: string;
  sendErrorMessage: string;
  directoryEyebrow: string;
  directoryTitle: string;
  directoryDescription: string;
  directoryOpenLabel: string;
  directoryFallbackDescription: string;
  directoryDescriptions: Record<string, string>;
  localeNames: Record<Locale, string>;
  contactOptions: ContactOption[];
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string[];
}

export interface RouteSeoContent {
  title: string;
  description: string;
}

export interface PortfolioData {
  seo: SeoContent;
  routeSeo: Record<PageKey, RouteSeoContent>;
  profile: {
    name: string;
    role: string;
    location: string;
    avatarUrl: string;
    resumeUrl: string;
    email: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  hero: HeroContent;
  about: AboutContent;
  stacks: StackCategory[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  contact: ContactContent;
  pageIntros: Record<Exclude<PageKey, "home">, PageIntroContent>;
  ui: LocaleUiContent;
}
