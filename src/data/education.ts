import type { EducationItem, CertificationItem } from '@/types';

export const education: EducationItem[] = [
  {
    degree: 'M.Sc. Data Science',
    institution: 'Central University of Haryana, Mahendergarh',
    date: 'Jul 2024 — Jun 2026 (expected)',
    details: ['Data Engineering', 'Big Data Systems', 'DB Management', 'ML', 'Statistics'],
  },
  {
    degree: 'Bachelor of Arts',
    institution: 'Lovely Professional University',
    date: 'Dec 2020 — Apr 2024',
  },
  {
    degree: 'Diploma in Computer Applications',
    institution: 'Lovely Professional University',
    date: 'Jun 2019 — Jul 2020',
  }
];

export const certifications: CertificationItem[] = [
  {
    name: 'Python (Basic)',
    provider: 'HackerRank',
    status: 'Earned',
    icon: '🐍',
    iconBg: 'rgba(0,200,150,0.1)',
  },
  {
    name: 'SQL (Basic)',
    provider: 'HackerRank',
    status: 'Earned',
    icon: '🗄️',
    iconBg: 'rgba(59,130,246,0.1)',
  },
  {
    name: 'Node (Basic)',
    provider: 'HackerRank',
    status: 'Earned',
    icon: '🟢',
    iconBg: 'rgba(234,88,12,0.1)',
  },
  {
    name: 'SQL (Intermediate)',
    provider: 'HackerRank',
    status: 'Earned',
    icon: '🗄️',
    iconBg: 'rgba(59,130,246,0.1)',
  },
  {
    name: 'dbt Fundamentals',
    provider: 'dbt Labs',
    status: 'In progress',
    icon: '⚙️',
    iconBg: 'rgba(245,158,11,0.1)',
    dashed: true,
  },
  {
    name: 'Airflow Fundamentals',
    provider: 'Astronomer Academy',
    status: 'In progress',
    icon: '✈️',
    iconBg: 'rgba(245,158,11,0.1)',
    dashed: true,
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    provider: 'AWS Skill Builder',
    status: 'Planned',
    icon: '☁️',
    iconBg: 'var(--bg4)',
    dashed: true,
  },
];

export const languages = ['English', 'Hindi', 'Punjabi', 'Bengali'];
