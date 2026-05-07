export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  type: 'primary' | 'secondary';
  highlights?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  duration?: string;
  type: 'course' | 'certification' | 'workshop' | 'event';
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'language';
  level?: number;
  proficiency?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Programming' | 'Design' | 'Engineering';
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}
