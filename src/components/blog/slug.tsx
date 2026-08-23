import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-emerald-400 text-sm hover:underline mb-6 inline-block">
        ← Back to all posts
      </Link>
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm text-gray-400">{meta.date} • {meta.readTime}</p>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}