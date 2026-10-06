import { desc } from "drizzle-orm";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { POSTS, type Post, type PostBlock } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  CMS-ready blog access: PostgreSQL when seeded, bundled content      */
/*  otherwise — so the site always renders.                            */
/* ------------------------------------------------------------------ */

function rowToPost(row: typeof posts.$inferSelect): Post {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    author: row.author,
    authorRole: row.authorRole,
    date: row.publishedAt.toISOString(),
    readTime: row.readTime,
    image: row.image,
    featured: row.featured,
    content: row.content as PostBlock[],
  };
}

const sortedStaticPosts = [...POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export async function getAllPosts(): Promise<Post[]> {
  try {
    const rows = await db.select().from(posts).orderBy(desc(posts.publishedAt));
    if (rows.length > 0) return rows.map(rowToPost);
  } catch {
    /* database not seeded yet — use bundled content */
  }
  return sortedStaticPosts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}
