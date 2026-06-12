'use client';

import Timeline from './Timeline';
import {experiences} from './ExperienceData';
import styles from './Experience.module.css';

export default function Experience() {
  
  const len = experiences.length

  return (
    <section className={styles.section} id="experience">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>05 —</span> Experience
      </div>
      <h2 className={styles['sec-title']}>
        Where I&apos;ve <span className={styles['sec-title-hl']}>worked</span>
      </h2>

      <div className={styles['exp-list']} style={{ marginTop: '48px' }}>
        {experiences.map((exp, index) => (
          <Timeline
            exp={exp}
            length={len}
            key={exp.id}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
