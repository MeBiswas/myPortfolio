'use client';

import styles from './Skills.module.css';
import SkillCard from './SkillCard';
import { skillGroups } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>02 —</span> technical skills
      </div>
      <h2 className={styles['sec-title']}>
        The stack I <span className={styles['sec-title-hl']}>build</span> with.
      </h2>
      <div className={styles['skills-grid']}>
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}
