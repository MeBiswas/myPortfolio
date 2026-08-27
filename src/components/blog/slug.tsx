import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ComponentProps } from 'react';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';

const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-xl font-bold text-slate-100 mt-8 mb-4 border-b border-slate-800 pb-2" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="text-slate-300 leading-relaxed mb-4 text-base" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => <li className="text-slate-300" {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-slate-400 my-6" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre className="bg-slate-900 border border-slate-800 text-slate-200 p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.meta.title} — Portfolio Blog`,
    description: post.meta.description,
  };
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
  
  const nextPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-200 py-12 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        {/* Navigation Row */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors"
          >
            ← All posts
          </Link>
        </div>

        {/* Article Meta Header */}
        <header className="mb-8 border-b border-slate-800/80 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <span className="text-emerald-400 font-medium">{meta.category}</span>
            <span>•</span>
            <time>{meta.date}</time>
            <span>•</span>
            <span>{meta.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            {meta.title}
          </h1>

          {meta.description && (
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
              {meta.description}
            </p>
          )}

          {/* Tags */}
          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* MDX Content */}
        <div className="prose prose-invert max-w-none prose-emerald">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {/* Article Footer & Recommendations */}
        <footer className="mt-16 pt-8 border-t border-slate-800">
          <h3 className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-6">
            Keep Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nextPosts.map((nextPost) => (
              <Link
                key={nextPost.slug}
                href={`/blog/${nextPost.slug}`}
                className="group p-4 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all"
              >
                <div className="text-xs font-mono text-emerald-400 mb-1">
                  {nextPost.category}
                </div>
                <h4 className="font-bold text-slate-200 text-sm group-hover:text-emerald-400 transition-colors">
                  {nextPost.title}
                </h4>
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </main>
  );
}