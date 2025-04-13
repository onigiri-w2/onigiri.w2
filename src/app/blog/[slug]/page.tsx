import { getPost } from "@/posts/loader";
import { readdir } from "fs/promises";


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const { metadata, Post } = await getPost(slug);
    const date = new Date(metadata.date);

    return (
      <Post />
    );
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return <div>Post not found.</div>;
  }
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const entries = await readdir(`${process.cwd()}/src/posts/content`, { withFileTypes: true });
  const directories = entries.filter(entry => entry.isDirectory());
  const names = directories.map(entry => entry.name);

  return names.map(name => ({
    slug: name,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const { metadata } = await getPost(slug);
    return {
      title: metadata.title || `${slug} - ブログタイトル`,
      description: metadata.description || `${slug}の記事の説明文`,
    };
  } catch (error) {
    console.error(`Error generating metadata for ${slug}:`, error);
    return {
      title: `${slug} - ブログタイトル`,
      description: `${slug}の記事の説明文`,
    };
  }
}
