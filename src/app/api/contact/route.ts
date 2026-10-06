import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;
const INTENTS = new Set(["strategy", "initiative", "leadership", "gcc", "coaching", "other"]);

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, company, intent, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ ok: false, error: "A valid name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }
  if (typeof phone !== "string" || !PHONE_RE.test(phone.trim())) {
    return NextResponse.json(
      { ok: false, error: "A valid contact number is required." },
      { status: 400 },
    );
  }
  if (typeof message !== "string" || message.trim().length < 20) {
    return NextResponse.json(
      { ok: false, error: "Please include a message of at least 20 characters." },
      { status: 400 },
    );
  }

  const safeIntent = typeof intent === "string" && INTENTS.has(intent) ? intent : "other";
  const safeCompany = typeof company === "string" ? company.trim().slice(0, 220) : null;

  try {
    const [row] = await db
      .insert(inquiries)
      .values({
        name: name.trim().slice(0, 200),
        email: email.trim().slice(0, 260),
        phone: phone.trim().slice(0, 60),
        company: safeCompany,
        intent: safeIntent,
        message: message.trim().slice(0, 5000),
      })
      .returning({ id: inquiries.id });

    return NextResponse.json({ ok: true, id: row.id }, { status: 201 });
  } catch (error) {
    console.error("[contact] failed to persist inquiry:", error);
    return NextResponse.json(
      { ok: false, error: "Could not save your message right now." },
      { status: 500 },
    );
  }
}
