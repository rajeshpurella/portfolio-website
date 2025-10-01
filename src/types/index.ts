export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  metrics: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  icon: string;
  experience: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}