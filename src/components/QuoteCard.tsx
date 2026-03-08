import { Quote } from "lucide-react";

interface QuoteCardProps {
  author: string;
  text: string;
  createdAt: string;
}

export default function QuoteCard({ author, text, createdAt }: QuoteCardProps) {
  const date = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-2xl border border-warm-200 bg-dark-card p-5 transition-colors hover:border-hot-pink/30">
      <Quote className="mb-2 h-5 w-5 text-hot-pink/60" />
      <p className="mb-3 text-base leading-relaxed text-white/90">{text}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-hot-pink">— {author}</span>
        <span className="text-xs text-white/40">{date}</span>
      </div>
    </div>
  );
}
