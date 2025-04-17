import { getPost, getPostSlugs } from "@/posts/loader";
import styles from './markdown.module.css'
import { mdxComponents } from "@/posts/components";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const { metadata, Post } = await getPost(slug);
    const date = new Date(metadata.date);

    return (
      <div>
        <div className="mt-16 mb-10">
          <h1 className="text-h1-small md:text-h1 leading-snug font-bold">{metadata.title}</h1>
          <div className="mt-1" />
          <p className=" text-sm md:text-base text-text-secondary leading-normal block">
            {date.toISOString().split('T')[0]}
          </p>
        </div>
        <article className={styles.markdown}>
          <Post components={mdxComponents} />
        </article>
      </div>
    );
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return <div>Post not found.</div>;
  }
}

export const dynamicParams = false;
export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(slug => ({ slug }));
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
