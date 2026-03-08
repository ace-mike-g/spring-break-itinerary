"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import QuoteCard from "@/components/QuoteCard";
import QuoteForm from "@/components/QuoteForm";
import type { Quote } from "@/types";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function handleNewQuote(quote: Quote) {
    setQuotes((prev) => [quote, ...prev]);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Guestbook"
        subtitle="Leave a quote, memory, or inside joke on the wall"
      />

      <div className="mb-10">
        <QuoteForm onSubmit={handleNewQuote} />
      </div>

      {loading ? (
        <div className="py-12 text-center text-white/40">Loading quotes...</div>
      ) : quotes.length === 0 ? (
        <div className="py-12 text-center text-white/40">
          No quotes yet — be the first to post!
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              author={quote.author}
              text={quote.text}
              createdAt={quote.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
