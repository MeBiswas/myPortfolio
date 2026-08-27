'use client';

import styles from './Blog.module.css';
import { Hash } from 'lucide-react';

const BlogHeader = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles['hero-noise']}></div>
            <div className={styles['hero-wrapper']}>
                <div className={styles['hero-avail']}>
                    <Hash size={10} color='oklch(70% .02 250' />
                    notes from the terminal
                </div>
                <h1 className={styles['hero-title']}>
                    Writing about <span className={styles['hero-title-hl']}> code & data </span>.
                </h1>
                <p className={styles['hero-sub']}>
                    Practical posts on <strong className={styles['hero-sub-strong']}>frontend, backend, databases</strong> — drawn from things I&apos;ve shipped, broken, and fixed in production.
                </p>
            </div>
        </section>
    )
}

export default BlogHeader;