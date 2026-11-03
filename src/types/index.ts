export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'crm' | 'cloud';
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  year: string;
  status: 'Production' | 'Case Study Pending Media' | 'Verified Active';
  featured?: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  duration: string;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
  icon: string;
}

