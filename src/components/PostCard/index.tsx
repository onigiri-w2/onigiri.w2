import { PostMetadata } from "@/lib/post/types";


type Props = {
  postMetadata: PostMetadata;
}
export default async function PostCard({ postMetadata }: Props) {
  const { title, date } = postMetadata;
  // yyyy-MM-ddの形式の日付を日本語の形式に変換する
  const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <article className="py-4">
      <span className="text-sm text-text-light">{formattedDate}</span>
      <h2 className="text-lg font-bold hover:underline">{title}</h2>
    </article>
  );
}

