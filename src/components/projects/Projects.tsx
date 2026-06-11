'use client';

import ProjectCard from './ProjectCard';
import { projects } from './ProjectData';
import styles from './Projects.module.css';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section}`}>
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>03 —</span> selected projects
      </div>
      <h2 className={styles['sec-title']}>
        What I&apos;ve <span className={styles['sec-title-hl']}>shipped</span>
      </h2>
      <div className={styles['projects-grid']}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <p className={styles['more']}>More on
        <a href="https://github.com/MeBiswas" target="_blank" rel="noreferrer">GitHub
        <ExternalLink size={13} color='oklch(78% .17 165)' />
        </a>
      </p>
    </section>
  );
}
