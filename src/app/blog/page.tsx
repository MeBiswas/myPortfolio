import BlogPost from '@/components/blog';
import Navbar from "@/components/navbar/Navbar"
import BlogHeader from '@/components/blog/header';

const BlogRoute = () => {
    return (
        <>
            <Navbar />
            <BlogHeader />
            <BlogPost />
        </>
    );
}

export default BlogRoute;