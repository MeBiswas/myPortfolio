import { LucideIcon } from 'lucide-react';

export interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export interface Project {
  id: string;
  year: number;
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  id: string;
  role: string;
  dates: string;
  tech: string[];
  company: string;
  filled: boolean;
  location: string;
  bullets: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  title: string;
  content: string;
  readTime: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps' | 'Other';
}