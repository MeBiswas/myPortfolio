'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../../public/logo.png';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles['nav-logo']}>
        {/* ab<span className={styles['nav-logo-span']}>.</span>biswas */}
        <Image src={logo} alt="logo" width={100} />
      </div>
      <div className={styles['nav-links']}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles['nav-right']}>
        {/* <div className={styles['role-toggle']}>
          <button className={`${styles['rt-btn']} ${styles.active}`} id="de-btn">
            Data Engineer
          </button>
          <button className={styles['rt-btn']} id="da-btn">
            Data Analyst
          </button>
        </div> */}
        <a
          className={styles['btn-resume']}
          download="Abhipriyo_Biswas_Resume.pdf"
          href="/Abhipriyo_Biswas_Junior_Resume.pdf"
        >
          <Download size={16} />Resume
        </a>
      </div>
    </nav>
  );
}
