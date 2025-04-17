import { MDXContent } from "mdx/types";

export type PostMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
}

export type PostContent = {
  default: MDXContent;
  metadata: PostMetadata;
}
