import type { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return <p className="blog-empty">No posts yet.</p>;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
