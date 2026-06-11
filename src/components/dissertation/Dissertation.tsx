'use client';

import styles from './Dissertation.module.css';

export default function Dissertation() {
  return (
    <section className={`${styles.section} ${styles['section-alt']}`} id="dissertation">
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>04 —</span> Dissertation
      </div>
      <h2 className={styles['sec-title']}>
        Research &amp; <span className={styles['sec-title-hl']}>Academic Work</span>
      </h2>
      <div className={`${styles['dissertation-content']} fi`}>
        <div className={styles['dissertation-intro']}>
          <p className={styles['dissertation-intro-p']}>
            As part of my MSc in Data Science at Central University of Haryana, I&apos;m conducting research and
            developing a comprehensive dissertation project focused on modern data engineering practices and their
            real-world applications.
          </p>
        </div>
        <div className={styles['dissertation-grid']}>
          <div className={styles['dissertation-card']}>
            <div className={styles['card-icon']}>
              <i className="ti ti-book"></i>
            </div>
            <h3 className={styles['dissertation-card-title']}>Research Focus</h3>
            <p className={styles['dissertation-card-text']}>
              Exploring scalable data pipeline architectures, ETL optimization, and data quality assurance patterns
              in production environments.
            </p>
          </div>
          <div className={styles['dissertation-card']}>
            <div className={styles['card-icon']}>
              <i className="ti ti-flask-2"></i>
            </div>
            <h3 className={styles['dissertation-card-title']}>Methodology</h3>
            <p className={styles['dissertation-card-text']}>
              Implementing real-world case studies using Apache Airflow, PostgreSQL, and cloud-based data
              warehousing solutions.
            </p>
          </div>
          <div className={styles['dissertation-card']}>
            <div className={styles['card-icon']}>
              <i className="ti ti-chart-line"></i>
            </div>
            <h3 className={styles['dissertation-card-title']}>Applications</h3>
            <p className={styles['dissertation-card-text']}>
              Developing frameworks and best practices applicable to modern data engineering workflows and enterprise
              data systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
