import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// cwd is the project root during both `astro dev` and `astro build`, unlike
// import.meta.url which breaks once this module is bundled into dist/.
const BLOG_DIR = join(process.cwd(), 'src/content/blog');
const WORDS_PER_MINUTE = 200;

/** Reading time in minutes, computed from the real Markdown source of a post. */
export function getReadingTime(postId: string): number {
  const raw = readFileSync(join(BLOG_DIR, `${postId}.md`), 'utf-8');
  const body = raw.replace(/^---[\s\S]*?---/, ''); // strip frontmatter
  const words = body
    .replace(/`{1,3}[^`]*`{1,3}/g, ' ') // strip code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // strip images
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ') // strip link syntax
    .replace(/[#>*_~-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return Math.max(1, Math.ceil(words.length / WORDS_PER_MINUTE));
}
