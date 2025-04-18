import { mdxComponents } from "@/posts/components";
import { PostMetadata } from "@/posts/types";
import { evaluate } from "@mdx-js/mdx";
import { promises as fs } from "fs";
import path from "path";
import { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";

export async function renderMdx2Html(inputPath: string): Promise<{ html: string, metadata: PostMetadata }> {
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

