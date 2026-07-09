'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.section} ${styles['section-alt']}`} id="about">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>01 —</span> About
      </div>
      <div className={styles['about-grid']}>
        <h2 className={styles['sec-title']}>
          Full-stack engineer. <span className={styles['sec-title-hl']}>Data-fluent</span>. <span className={styles['sec-title-hl']}>Production-first</span>.
        </h2>
        <div className={styles['about-bio']}>
          <p>I&apos;ve spent 7+ years shipping production software across full-stack web, frontend, and mobile — at companies like TELUS Digital and Etelligens Technologies. I&apos;ve integrated REST APIs, built React/Angular apps, optimized SQL, and worked with real users, real data, and real deadlines.</p>
          <p>
            Alongside that, I&apos;m deep in Python and SQL — pursuing an 
            <span> MSc in Data Science </span>
            at Central University of Haryana and building ETL pipelines, analytics, and dashboards with Python, PostgreSQL, Pandas, and Apache Airflow.
          </p>
          <p>Whether the role is Python Developer, Full Stack Developer, Data Analyst, or Data Engineer — the same principles apply: clean code, correct data, modular architecture, and systems you can trust at 3 AM.</p>
        </div>
      </div>
    </section>
  );
}
