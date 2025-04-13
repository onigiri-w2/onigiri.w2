import { PostMetadata } from "@/posts/types";


type Props = {
  postMetadata: PostMetadata;
}
export default async function PostCard({ postMetadata }: Props) {
  const { title, date } = postMetadata;
  const formattedDate = new Date(date).toISOString().split('T')[0];
  return (
    <article className="py-4 group cursor-pointer">
      <span className="text-sm text-text-secondary">{formattedDate}</span>
      <h2 className="text-lg font-bold group-hover:underline">{title}</h2>
    </article>
  );
}

