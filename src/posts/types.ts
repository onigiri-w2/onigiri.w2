import { MDXContent } from "mdx/types";

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
}

export type PostContent = {
  default: MDXContent;
  metadata: PostMetadata;
}
