export interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category?: string;
  image?: string;
  keywords?: string[];
  published: boolean;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
  readingTime: number;
}
