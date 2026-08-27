
import { getAllPosts } from '@/lib/mdx';
import BlogMainContent from './blogMainContent';

const BlogPost = () => {
    const posts = getAllPosts();

    return <BlogMainContent data={posts} />
}

export default BlogPost;