'use client';

import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.section} ${styles['section-alt']}`} id="about">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>01 —</span> About
      </div>
      <div className={styles['about-grid']}>
        <h2 className={styles['sec-title']}>From shipping production apps to shipping production data.</h2>
        <div className={styles['about-bio']}>
          <p>I spent 7+ years building production-grade applications across full stack, frontend, and mobile — at companies like TELUS Digital and Etelligens Technologies. I learned what it takes to design systems that don&apos;t break in front of real users.</p>
          <p>
            Now I&apos;m channeling that engineering rigor into data. I&apos;m pursuing an
            <span> MSc in Data Science </span>
            at Central University of Haryana, and building real ETL pipelines, data warehouses, and analytics systems with Python, SQL, PostgreSQL, and Apache Airflow.
          </p>
          <p>I care about idempotency, data quality, modular architecture, and pipelines that you can trust at 3 AM.</p>
        </div>
      </div>
    </section>
  );
}
