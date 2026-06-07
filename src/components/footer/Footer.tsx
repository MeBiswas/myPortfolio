'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-left']}>
        © 2026 <span className={styles['footer-left-strong']}>Abhipriyo Biswas</span> — Junior Data Engineer
      </div>
      <div className={styles['footer-socials']}>
        <a href="https://github.com/MeBiswas" target="_blank" rel="noopener noreferrer" className={styles.fsoc} title="GitHub">
          <i className="ti ti-brand-github"></i>
        </a>
        <a href="https://linkedin.com/in/abhipriyo-biswas" target="_blank" rel="noopener noreferrer" className={styles.fsoc} title="LinkedIn">
          <i className="ti ti-brand-linkedin"></i>
        </a>
        <a href="mailto:biswasabhi93@gmail.com" className={styles.fsoc} title="Email">
          <i className="ti ti-mail"></i>
        </a>
      </div>
    </footer>
  );
}
