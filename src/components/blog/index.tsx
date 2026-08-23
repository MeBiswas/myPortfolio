import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog | Technical Writing & Engineering Insights',
  description: 'Articles on Frontend, Backend, SQL Databases, and Data Engineering.',
};

const BlogPost = () => {
    const posts = getAllPosts();

    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">Technical Writings</h1>
            <p className="text-gray-400 mb-10">
                Articles covering Full-Stack development, SQL optimizations, Python, and Data Systems.
            </p>

            <div className="grid gap-6">
                {posts.map((post) => (
                <article 
                    key={post.slug} 
                    className="p-6 border border-gray-800 rounded-lg hover:border-emerald-500 transition-colors"
                >
                    <div className="flex items-center gap-3 text-xs text-emerald-400 mb-2">
                    <span className="uppercase tracking-wider font-semibold">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold hover:underline mb-2">{post.title}</h2>
                    </Link>
                    
                    <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                    
                    <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                    >
                    Read post →
                    </Link>
                </article>
                ))}
            </div>
        </main>
    );
}

export default BlogPost;