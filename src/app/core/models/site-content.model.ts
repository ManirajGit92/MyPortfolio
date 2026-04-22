export interface AboutStat {
  value: string;
  label: string;
  icon: string;
}

export interface AboutInterest {
  icon: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  color?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  icon: string;
  color: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectFilter {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string[];
  tech: string[];
  icon: string;
  color: string;
  featured: boolean;
  githubUrl: string;
  demoUrl: string;
}

export interface Achievement {
  icon: string;
  color: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  quote: string;
}

export interface BlogArticle {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  icon: string;
  url: string;
}

export interface ContactLink {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavbarContent {
  brandName: string;
}

export interface HeroContent {
  badgeText: string;
  name: string;
  titles: string[];
  tagline: string;
  profileImage: string;
  socialLinks: SocialLink[];
  stats: Array<{ value: string; label: string }>;
  resumeUrl: string;
}

export interface ResumeContent {
  name: string;
  title: string;
  description: string;
  highlights: string[];
  pdfUrl: string;
  pdfFileName: string;
  linkedinUrl: string;
}

export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  about: {
    profileImage: string;
    stats: AboutStat[];
    interests: AboutInterest[];
  };
  skills: {
    categories: SkillCategory[];
  };
  experience: {
    experiences: ExperienceItem[];
  };
  projects: {
    filters: ProjectFilter[];
    projects: Project[];
  };
  achievements: {
    achievements: Achievement[];
  };
  testimonials: {
    testimonials: Testimonial[];
  };
  blog: {
    articles: BlogArticle[];
  };
  contact: {
    contactLinks: ContactLink[];
  };
  resume: ResumeContent;
}

export type SiteContentKey = keyof SiteContent;
