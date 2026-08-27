import BlogPost from '@/components/blog';
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import BlogHeader from '@/components/blog/header';

const BlogRoute = () => {
    return (
        <>
            <Navbar />
            <BlogHeader />
            <BlogPost />
            <Footer />
        </>
    );
}

export default BlogRoute;