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
