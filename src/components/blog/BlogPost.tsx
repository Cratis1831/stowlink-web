import { Link } from "react-router-dom";
import { formatPostDate, getRelatedPosts } from "@/lib/blog";
import type { BlogPost as BlogPostType } from "@/types/blog";
import BlogCta from "./BlogCta";
import BlogList from "./BlogList";

export default function BlogPost({ post }: { post: BlogPostType }) {
  const related = getRelatedPosts(post.slug, 3);
  const modified = post.metadata.updated ?? post.metadata.date;

  return (
    <article className="blog-article">
      <nav className="blog-breadcrumb" aria-label="Breadcrumb">
        <Link to="/blog">Blog</Link>
        {post.metadata.category ? (
          <>
            <span aria-hidden="true">/</span>
            <span>{post.metadata.category}</span>
          </>
        ) : null}
      </nav>
      <h1>{post.metadata.title}</h1>
      <p className="lede">{post.metadata.description}</p>
      <p className="blog-byline">
        <time dateTime={post.metadata.date}>{formatPostDate(post.metadata.date)}</time>
        {modified !== post.metadata.date ? (
          <>
            {" "}
            · Updated <time dateTime={modified}>{formatPostDate(modified)}</time>
          </>
        ) : null}
        {" · "}
        {post.readingTime} min read
      </p>
      <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
      <BlogCta />
      {related.length > 0 ? (
        <section className="blog-related" aria-labelledby="related-title">
          <h2 id="related-title">Related articles</h2>
          <BlogList posts={related} />
        </section>
      ) : null}
    </article>
  );
}
