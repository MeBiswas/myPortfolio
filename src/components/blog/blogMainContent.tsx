'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import styles from './Blog.module.css';
import type { PostMetaData } from '@/lib/mdx';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Data Engineering', 'Career'];

type Props = {data: PostMetaData[]}

const BlogMainContent: React.FC<Props> = ({data}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

    const filteredPosts =
        activeCategory === 'All'
            ? data
            : data.filter((post) => post.category === activeCategory);

    return (
        <main className={styles.blogContainer}>
            <div className={styles.blogWrap}>
                <nav className={styles.categoryNav} aria-label="Blog categories">
                    {CATEGORIES.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.tabBtn} ${isActive ? styles.active : ''}`}
                        >
                            {category}
                        </button>
                    );
                    })}
                </nav>

                <section aria-label="Blog posts list">
                    {filteredPosts.map((post) => (
                    <article key={post.slug} className={styles.postCard}>
                        <div className={styles.postMeta}>
                            <span className={styles.category}>
                                {post.category}
                            </span>
                            <span>•</span>
                            <time>
                                {post.date}
                            </time>
                            <span>•</span>
                            <span>
                                {post.readTime}
                            </span>
                        </div>

                        <h2 className={styles.postTitle}>
                            <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                                {post.title}
                            </Link>
                        </h2>

                        <p className={styles.postExcerpt}>
                            {post.description}
                        </p>

                        <div className={styles.postFooter}>
                            <div className={styles.tagList}>
                                {post.tags.map((tag: string) => (
                                    <span key={tag} className={styles.tagPill}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                Read
                                <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default BlogMainContent;