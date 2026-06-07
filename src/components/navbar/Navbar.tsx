'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-logo']}>
        ab<span className={styles['nav-logo-span']}>.</span>biswas
      </div>
      <div className={styles['nav-links']}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles['nav-right']}>
        <div className={styles['role-toggle']}>
          <button className={`${styles['rt-btn']} ${styles.active}`} id="de-btn">
            Data Engineer
          </button>
          <button className={styles['rt-btn']} id="da-btn">
            Data Analyst
          </button>
        </div>
        <a href="/resume.pdf" className={styles['btn-resume']}>
          <i className="ti ti-download"></i> Resume
        </a>
      </div>
    </nav>
  );
}
