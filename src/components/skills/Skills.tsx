'use client';

import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section}`}>
      <div className={styles['sec-eyebrow']}>
        <span className={styles['sec-num']}>02 —</span> technical skills
      </div>
      <h2 className={styles['sec-title']}>
        The stack I <span className={styles['sec-title-hl']}>build</span> with.
      </h2>
      <div className={styles['skills-grid']}>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Languages</h3>
          <div className={styles['skills']}>
            <span>Python</span>
            <span>SQL</span>
            <span>JavaScript</span>
            <span>Bash</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Data Engineering</h3>
          <div className={styles['skills']}>
            <span>ETL Pipelines</span>
            <span>dbt</span>
            <span>Data Modeling</span>
            <span>Data Warehousing</span>
            <span>Batch Processing</span>
            <span>Idempotent Upserts</span>
            <span>Data Quality</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Databases</h3>
          <div className={styles['skills']}>
            <span>PostgreSQL</span>
            <span>MySQL</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Advanced SQL</h3>
          <div className={styles['skills']}>
            <span>Window Functions</span>
            <span>CTEs</span>
            <span>Joins</span>
            <span>Indexing</span>
            <span>Query Optimization</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Big Data &amp; Workflow</h3>
          <div className={styles['skills']}>
            <span>Apache Airflow</span>
            <span>Apache Spark</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Cloud</h3>
          <div className={styles['skills']}>
            <span>AWS (S3, Glue)</span>
            <span>GCP BigQuery</span>
            <span>Azure</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>DevOps &amp; Tools</h3>
          <div className={styles['skills']}>
            <span>Docker</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Linux</span>
            <span>Jupyter</span>
            <span>VS Code</span>
          </div>
        </div>
        <div className={styles['skills-card']}>
          <h3 className={styles['skill-title']}>Libraries</h3>
          <div className={styles['skills']}>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>REST APIs</span>
            <span>JSON Parsing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
