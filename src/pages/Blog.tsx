import BlogHeader from "@/components/blog/BlogHeader";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="blog-index">
      <BlogHeader />
      <BlogList posts={posts} />
    </section>
  );
}
