import { LucideIcon } from 'lucide-react';

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