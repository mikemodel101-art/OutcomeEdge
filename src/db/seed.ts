/* Seed the database with bundled blog content (idempotent). */
import "dotenv/config";
import { db } from "./index";
import { posts } from "./schema";
import { POSTS } from "../lib/data";

async function seed() {
  console.log("Seeding posts…");
  for (const p of POSTS) {
    await db
      .insert(posts)
      .values({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
        author: p.author,
        authorRole: p.authorRole,
        image: p.image,
        readTime: p.readTime,
        featured: p.featured,
        content: p.content,
        publishedAt: new Date(p.date),
      })
      .onConflictDoNothing({ target: posts.slug });
  }
  console.log(`Seed complete (${POSTS.length} posts).`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
