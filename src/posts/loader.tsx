import { readdir } from "fs/promises";
import { PostContent } from "./types";


const postsDir = `${process.cwd()}/src/posts/content`;
const genImportPath = (slug: string) => {
  return `@/posts/content/${slug}/index.mdx`;
}

export const getPostMetas = async (order: "asc" | "desc" = "asc") => {
  const content = await readdir(postsDir, { withFileTypes: true });
  const slugs = content.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

  const postMetas = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata }: PostContent = await import(genImportPath(slug));
      return { slug, metadata };
    })
  );

  return postMetas.sort((a, b) => {
    return order === "asc" ? new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime() : new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
  });
}

export const getPost = async (slug: string) => {
  try {
    const { metadata, default: Post }: PostContent = await import(genImportPath(slug));
    return { metadata, Post };
  } catch (error) {
    throw new Error(`Error loading post ${slug}: ${error}`);
  }
}



