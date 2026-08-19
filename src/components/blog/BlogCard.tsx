import { Link } from "react-router-dom";
import { formatPostDate } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const readingLabel = `${post.readingTime} min read`;
  const meta = [post.metadata.category, readingLabel].filter(Boolean).join(" · ");

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      {post.metadata.image ? (
        <img
          src={post.metadata.image}
          alt=""
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <div className="blog-card-body">
        <p className="blog-card-meta">{meta}</p>
        <h3>{post.metadata.title}</h3>
        <p>{post.metadata.description}</p>
        <time dateTime={post.metadata.date}>{formatPostDate(post.metadata.date)}</time>
      </div>
    </Link>
  );
}
