'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { Download, ArrowLeft } from 'lucide-react';

import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../../public/logo.png';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return (
      <nav className={styles.nav}>
        <div className={styles['nav-alt']}>
          <div className={styles['nav-logo']}>
            <Image src={logo} alt="logo" width={100} />
          </div>
          <div className={styles['nav-secondary']}>
            <Link href="/"><ArrowLeft size={16} /> Portfolio</Link>
            <span>Blog</span>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <div className={styles['nav-alt']}>
        <div className={styles['nav-logo']}>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className={styles['nav-links']}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={styles['nav-right']}>
          <a
            className={styles['btn-resume']}
            download="Abhipriyo_Biswas_Resume.pdf"
            href="/Abhipriyo_Biswas_Resume.pdf"
          >
            <Download size={16} />Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
