export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tool {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
}