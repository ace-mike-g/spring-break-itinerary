"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Quote } from "@/types";

interface QuoteFormProps {
  onSubmit: (quote: Quote) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: author.trim(), text: text.trim() }),
      });

      if (res.ok) {
        const newQuote = await res.json();
        onSubmit(newQuote);
        setAuthor("");
        setText("");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-warm-200 bg-dark-card p-6">
      <h2 className="mb-4 text-lg font-bold text-white">Add to the Wall</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          maxLength={100}
          className="w-full rounded-lg border border-warm-200 bg-dark-bg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-hot-pink"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Drop a quote, memory, or inside joke..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={500}
          rows={3}
          className="w-full resize-none rounded-lg border border-warm-200 bg-dark-bg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-hot-pink"
          required
        />
      </div>
      <button
        type="submit"
        disabled={submitting || !author.trim() || !text.trim()}
        className="flex items-center gap-2 rounded-lg bg-hot-pink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-hot-pink-dark disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Posting..." : "Post"}
      </button>
    </form>
  );
}
