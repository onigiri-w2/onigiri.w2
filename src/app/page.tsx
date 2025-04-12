import PostCard from '@/components/PostCard';
import { getPostMetas } from '@/lib/post/loader';
import Link from 'next/link';


export default async function Home() {
  const posts = await getPostMetas("desc");

  return (
    <div className='flex flex-col space-y-2'>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}/`}>
          <PostCard postMetadata={post.metadata} />
        </Link>
      ))}
    </div>
  );
}

