import { PostMetadata } from "@/posts/types";


type Props = {
  postMetadata: PostMetadata;
}
export default async function PostCard({ postMetadata }: Props) {
  const { title, date } = postMetadata;
  const formattedDate = new Date(date).toISOString().split('T')[0];
  return (
    <article className="group cursor-pointer">
      <span className="text-xs leading-tight text-text-secondary">{formattedDate}</span>
      <h2 className="text-base text-blue-500 leading-tight group-hover:underline">{title}</h2>
    </article>
  );
}

