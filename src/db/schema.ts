import { boolean, integer, jsonb, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/* ------------------------------ Posts ------------------------------ */

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 220 }).notNull().unique(),
  title: varchar("title", { length: 320 }).notNull(),
  excerpt: text("excerpt").notNull(),
  category: varchar("category", { length: 120 }).notNull(),
  author: varchar("author", { length: 160 }).notNull(),
  authorRole: varchar("author_role", { length: 160 }).notNull(),
  image: text("image").notNull(),
  readTime: integer("read_time").notNull().default(5),
  featured: boolean("featured").notNull().default(false),
  content: jsonb("content").notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/* ---------------------------- Inquiries ----------------------------- */

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 260 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  company: varchar("company", { length: 220 }),
  intent: varchar("intent", { length: 80 }).notNull().default("strategy"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
