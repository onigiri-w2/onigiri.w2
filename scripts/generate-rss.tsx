import { POSTS_PATH_FROM_ROOT, SITE_DOMAIN } from '@/const';
import { mdxComponents } from '@/posts/components';
import { PostMetadata } from '@/posts/types';
import { evaluate } from '@mdx-js/mdx';
import { promises as fs } from 'fs';
import path from 'path';
import { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { jsx, jsxs } from 'react/jsx-runtime';
import RSS from 'rss';


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
  // フィードのオプション設定
  const feedOptions = {
    title: "onigiri.w2",
    description: "onigiri.w2の個人サイトです",
    feed_url: `${SITE_DOMAIN}/rss.xml`,
    site_url: SITE_DOMAIN,
    language: "ja",
    pubDate: new Date(),
  };

  // フィードインスタンスの作成
  const feed = new RSS(feedOptions);

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

async function renderMdx2Html(inputPath: string): Promise<{ html: string, metadata: PostMetadata }> {
  // MDXファイルを読み込む
  const mdxPath = path.isAbsolute(inputPath)
    ? inputPath
    : path.join(process.cwd(), inputPath);
  const mdxContent = await fs.readFile(mdxPath, 'utf8');

  // MDXをHTMLにレンダリング
  const { default: MDXContent, metadata } = await evaluate(mdxContent, {
    Fragment,
    jsx,
    jsxs,
    useMDXComponents: () => mdxComponents,
  });

  // HTMLを生成
  return {
    html: renderToString(<MDXContent />),
    metadata: metadata as PostMetadata,
  }
}


async function main() {
  const contentsDir = path.join(process.cwd(), 'src/posts/content');
  const slugs = (await fs.readdir(contentsDir, { withFileTypes: true })).filter((item) => item.isDirectory());

  // MDXファイルをHTMLに変換
  const htmlPromises = slugs.map(async (slug) => {
    const filePath = path.join(contentsDir, slug.name, 'index.mdx');
    const { html, metadata } = await renderMdx2Html(filePath);
    return { html, metadata, slug: slug.name };
  })
  const htmlResults = await Promise.all(htmlPromises);

  // 各記事の情報を取得
  // ここでは例として、最初の3件を取得
  const articles: Article[] = htmlResults.map((result) => {
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
  }).slice(0, 10); // 最新の10件を取得

  const rssFeed = generateRssFeed(articles);

  // RSSフィードをファイルに書き込む
  const rssFilePath = path.join(process.cwd(), 'public', 'rss.xml');
  await fs.writeFile(rssFilePath, rssFeed, 'utf8');
}


main().then(() => {
  console.log('RSSフィードの生成が完了しました。');
}).catch((error) => {
  console.error('エラーが発生しました:', error);
});
