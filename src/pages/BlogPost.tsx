import { useParams } from "react-router-dom";
import BlogPost from "@/components/blog/BlogPost";
import { getPostBySlug } from "@/lib/blog";
import NotFound from "./NotFound";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return <BlogPost post={post} />;
}
