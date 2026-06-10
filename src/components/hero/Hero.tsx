'use client';

import styles from './Hero.module.css';
import { Hash, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles['hero-noise']}></div>
      <div className={styles['hero-avail']}>
        <Hash size={10} color='oklch(70% .02 250' />
        available for junior data engineer roles
      </div>
      <h1 className={styles['hero-title']}>
        Building reliable <span className={styles['hero-title-hl']}> data pipelines </span>
        that scale.
      </h1>
      <p className={styles['hero-sub']}>
        I&apos;m <strong className={styles['hero-sub-strong']}>Abhipriyo Biswas</strong> — a software engineer with 7+ years of production
        experience, now focused on data engineering with Python, SQL, PostgreSQL, and Apache Airflow.
      </p>
      <div className={styles['hero-btns']}>
        <a href="#projects" className={styles['btn-primary']}>
          View projects
          <ArrowRight size={16} />
        </a>
        <a href="#contact" className={styles['btn-ghost']}>
          <i className="ti ti-mail"></i> Get in touch
        </a>
      </div>
      <div className={`${styles['hero-stats']} fi`}>
        <div className={styles['stat-box']}>
          <div className={styles['stat-val']}>7+</div>
          <div className={styles['stat-lbl']}>Years Engineering</div>
        </div>
        <div className={styles['stat-box']}>
          <div className={styles['stat-val']}>1M+</div>
          <div className={styles['stat-lbl']}>Records Processed</div>
        </div>
        <div className={styles['stat-box']}>
          <div className={styles['stat-val']}>100+</div>
          <div className={styles['stat-lbl']}>Assets Tracked</div>
        </div>
        <div className={styles['stat-box']}>
          <div className={styles['stat-val']}>20%</div>
          <div className={styles['stat-lbl']}>Perf Improvement</div>
        </div>
      </div>
    </section>
  );
}
