'use client';

import { Project } from '../../types';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({project}: ProjectCardProps) {
  const Icon = project.icon

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <div className={styles.projectMeta}>
          <div className={styles.projectIcon}>
            {Icon && <Icon size={24} color='oklch(16% .02 250)' />}
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>
              {project.title}
            </h3>

            <p className={styles.projectSubtitle}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <span className={styles.projectYear}>
          {project.year}
        </span>
      </header>

      <ul className={styles.projectHighlights}>
        {project.highlights.map((highlight, index) => (
          <li key={index} className={styles.highlightItem}>
            <span>▹</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className={styles.techStack}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
