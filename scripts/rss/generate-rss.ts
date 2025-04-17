import { POSTS_PATH_FROM_ROOT, SITE_DOMAIN } from '@/const';
import { POST_CONTENTS_DIR } from '@/posts/const';
import { promises as fs } from 'fs';
import path from 'path';
import RSS from 'rss';
import { renderMdx2Html } from './render-mdx';


const FEED_FILE_NAME = 'rss.xml';
const FEED_OUTPUT_PATH = path.join(process.cwd(), 'public', FEED_FILE_NAME);

// 記事情報の型定義
interface Article {
  id: string;
  title: string;
  date: Date;
  link: string;
  description?: string;
  author?: string;
  categories?: string[];
}

function generateRssFeed(articles: Article[]): string {
  const feed = new RSS({
    title: "onigiri.w2",
    description: "onigiri.w2の個人サイトです",
    feed_url: `${SITE_DOMAIN}/${FEED_FILE_NAME}`,
    site_url: SITE_DOMAIN,
    language: "ja",
    pubDate: new Date(),
  });

  // 記事の追加
  articles.forEach((article) => {
    feed.item({
      guid: article.id,
      title: article.title,
      date: article.date,
      url: article.link,
      description: article.description || '',
      author: article.author,
      categories: article.categories,
    });
  });

  // RSSフィードの文字列を生成して返却
  return feed.xml({ indent: true });
}

async function main() {
  const contentsDir = POST_CONTENTS_DIR;
  const slugs = (await fs.readdir(contentsDir, { withFileTypes: true })).filter((item) => item.isDirectory());

  // MDXファイルをHTMLに変換
  const htmlPromises = slugs.map(async (slug) => {
    const filePath = path.join(contentsDir, slug.name, 'index.mdx');
    const { html, metadata } = await renderMdx2Html(filePath);
    return { html, metadata, slug: slug.name };
  })
  const htmlResults = await Promise.all(htmlPromises);

  // 各記事の情報を取得
  const LATEST_LIMIT = 10;
  const latestArticles: Article[] = htmlResults.map((result) => {
    return {
      id: result.metadata.id,
      title: result.metadata.title,
      date: new Date(result.metadata.date),
      link: `${SITE_DOMAIN}${POSTS_PATH_FROM_ROOT}/${result.slug}`,
      description: result.html,
      author: result.metadata.author,
      categories: result.metadata.tags,
    }
  }).sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  }).slice(0, LATEST_LIMIT);

  const rssFeed = generateRssFeed(latestArticles);

  await fs.writeFile(FEED_OUTPUT_PATH, rssFeed, 'utf8');
}


main().then(() => {
  console.log('RSSフィードの生成が完了しました。');
}).catch((error) => {
  console.error('エラーが発生しました:', error);
});
