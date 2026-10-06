"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2, RotateCcw } from "lucide-react";
import { CONTACT_REASONS } from "@/lib/data";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

export default function ContactForm() {
  const params = useSearchParams();
  const initialIntent = CONTACT_REASONS.some((i) => i.value === params.get("intent"))
    ? (params.get("intent") as string)
    : "strategy";

  const [intent, setIntent] = useState<string>(initialIntent);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): boolean {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please share your full name.";
    if (!EMAIL_RE.test(email.trim())) next.email = "That email doesn't look right.";
    if (!PHONE_RE.test(phone.trim())) next.phone = "A reachable contact number is required.";
    if (message.trim().length < 20)
      next.message = "Give us a proper description — twenty characters minimum.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          intent,
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl border border-ink/10 bg-paper p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-volt-deep/10 text-volt-deep">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl md:text-3xl">Message received.</h3>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-clay">
            Thank you, {name.split(" ")[0] || "there"}. We&apos;ll reply within one business day to
            set up a real conversation.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }}
          className="btn-ghost text-ink"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (hasError?: string) =>
    cn(
      "w-full rounded-xl border bg-transparent px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-clay/60 focus:border-volt-deep",
      hasError ? "border-volt-deep/70" : "border-ink/15",
    );

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {/* Reason */}
      <fieldset className="flex flex-col gap-3">
        <legend className="eyebrow text-clay">Reason for contacting</legend>
        <div className="flex flex-wrap gap-2">
          {CONTACT_REASONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setIntent(option.value)}
              aria-pressed={intent === option.value}
              className={cn(
                "eyebrow rounded-full border px-4 py-2.5 transition-all duration-300",
                intent === option.value
                  ? "border-ember bg-ember text-ink"
                  : "border-ink/15 text-clay hover:border-ink/40 hover:text-ink",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="eyebrow text-clay">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass(errors.name)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="text-xs text-volt-deep">{errors.name}</p> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="eyebrow text-clay">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass(errors.email)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-xs text-volt-deep">{errors.email}</p> : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="eyebrow text-clay">
          Contact number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass(errors.phone)}
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <p className="text-xs text-volt-deep">{errors.phone}</p> : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow text-clay">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="The initiative, the blocker, and what success would look like…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(inputClass(errors.message), "resize-none")}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="text-xs text-volt-deep">{errors.message}</p> : null}
        <p className="text-xs text-clay/70">
          We ignore messages that don&apos;t have a proper description.
        </p>
      </div>

      {status === "error" ? (
        <p className="rounded-xl border border-volt-deep/40 bg-volt-deep/5 px-4 py-3 text-sm text-volt-deep">
          Something went wrong sending your message. Please try again — or email us directly at
          business@agilonomics.com.
        </p>
      ) : null}

      <div className="flex flex-col gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-fit disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="btn-arrow h-4 w-4" aria-hidden />
            </>
          )}
        </button>
        <p className="eyebrow text-clay/70">
          Read by a human · Reply within one business day · Zero newsletters
        </p>
      </div>
    </form>
  );
}
