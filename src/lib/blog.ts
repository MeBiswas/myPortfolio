import {BlogPost} from '../types';

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        date: '2026-08-23',
        category: 'Frontend',
        readTime: '15 min read',
        slug: 'how-web-really-works-frontend-story',
        title: 'A Beginner\'s Story of How the Web Really Works',
        description: 'An exploration of the underlying mechanisms that make the web function.',
        content: `
            When you type a website address and press Enter, your browser sends a request to a server asking...
        `,
    },
    {
        id: '2',
        date: '2026-08-30',
        readTime: '20 min read',
        category: 'System Design',
        slug: 'system-design-for-beginners',
        title: 'System Design for Beginners',
        description: 'A comprehensive guide to understanding system design principles.',
        content: `
            System design is less about writing code and more about drawing the blueprint that code will live inside...
        `,
    }
]

export const getAllPosts = (): BlogPost[] => BLOG_POSTS

export const getPostBySlug = (slug: string): BlogPost | undefined => BLOG_POSTS.find(post => post.slug === slug)