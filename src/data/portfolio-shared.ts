import type { NavIconName, PageKey } from "@/data/portfolio-types";

export const sharedProfile = {
  name: "Gustavo Barreto Fogliati",
  location: "Porto Alegre, RS, Brasil",
  avatarUrl: "",
  resumeUrl: "/cv/gustavo-fogliati-cv.pdf",
  email: "gustavofogliati@gmail.com",
};

export const sharedProjects = [
  {
    title: "Site Cabanas",
    role: "Full Stack Developer",
    stack: ["JavaScript", "HTML", "CSS"],
    demoUrl: "",
    repositoryUrl: "https://github.com/4sofa/site-canbana-v2",
    featured: true,
  },
  {
    title: "SoundPad",
    role: "Developer",
    stack: ["JavaScript", "Python", "HTML", "CSS"],
    demoUrl: "",
    repositoryUrl: "https://github.com/4sofa/SoundPad",
    featured: false,
  },
  {
    title: "Tech News Aggregator",
    role: "Backend Developer",
    stack: ["JavaScript", "Node.js", "Express", "libSQL", "Turso"],
    demoUrl: "",
    repositoryUrl: "https://github.com/4sofa/tech-news-aggregator",
    featured: false,
  },
  {
    title: "Web Controller Emulator",
    role: "Full Stack Developer",
    stack: ["Python", "JavaScript", "Flask", "WebSockets", "HTML", "CSS"],
    demoUrl: "",
    repositoryUrl: "https://github.com/4sofa/Web-Controller-Emulator",
    featured: false,
  },
];

export const sharedNavigation = [
  { key: "home", href: "/", icon: "home" },
  { key: "about", href: "/about", icon: "user" },
  { key: "stacks", href: "/stacks", icon: "stack" },
  { key: "education", href: "/education", icon: "cap" },
  { key: "experience", href: "/experience", icon: "briefcase" },
  { key: "projects", href: "/projects", icon: "projects" },
  { key: "contact", href: "/contact", icon: "mail" },
] as const satisfies ReadonlyArray<{
  key: PageKey;
  href: string;
  icon: NavIconName;
}>;
