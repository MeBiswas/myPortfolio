'use client';

import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrap']}>
        <div className={styles['footer-left']}>
          © 2026 <span className={styles['footer-left-strong']}>Abhipriyo Biswas</span> — Frontend Developer, Backend Developer, Python, Full Stack, Data Analyst & Data Engineer
        </div>
        <div className={styles['footer-socials']}>
          <a href="https://github.com/MeBiswas" target="_blank" rel="noopener noreferrer" className={styles.fsoc} title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="https://linkedin.com/in/abhipriyo-biswas" target="_blank" rel="noopener noreferrer" className={styles.fsoc} title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:biswasabhi93@gmail.com" className={styles.fsoc} title="Email">
            <Mail size={14} color='oklch(78% 0.17 165)' />
          </a>
        </div>
      </div>
    </footer>
  );
}
