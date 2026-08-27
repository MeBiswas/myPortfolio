import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetaData {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  description: string;
  tags: string[];
}

export function getAllPosts(): PostMetaData[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<PostMetaData, 'slug'>),
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // Fallback check for .mdx extension
  const filePath = fs.existsSync(fullPath) 
    ? fullPath 
    : path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      ...(data as Omit<PostMetaData, 'slug'>),
      tags: Array.isArray(data.tags) ? data.tags : [],
    },
    content,
  };
}