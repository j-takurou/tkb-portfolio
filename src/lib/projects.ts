import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

/**
 * Front‑matter 型定義
 */
export interface ProjectFM {
  title: string;
  description: string;
  date: string;               // ISO 文字列
  thumbnail: string;          // /images/xxx.jpg
  hero: string;               // /images/xxx.jpg
}

const contentDir = path.join(process.cwd(), 'content');

/**
 * MDX ファイルをすべて読み込み、Front‑matter 部分だけ返す
 */
export async function getAllProjects() {
  const files = (await fs.readdir(contentDir)).filter((f) => f.endsWith('.mdx'));
  const projects = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(contentDir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ''),
        ...(data as ProjectFM),
      };
    })
  );
  // 日付降順でソート
  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * slug から単一プロジェクトを取得（本文は MDX → HTML に変換）
 */
export async function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const mdx = await serialize(content, { parseFrontmatter: false });
  return {
    slug,
    ...(data as ProjectFM),
    body: mdx, // MDXRemote で使用
  };
}