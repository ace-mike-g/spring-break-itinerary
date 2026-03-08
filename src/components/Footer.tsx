import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-sand py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center">
        <div className="flex items-center gap-2 text-hot-pink">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-bold">Spring Break 2026</span>
        </div>
        <p className="text-xs text-white/50">
          Grisko &middot; Romme &middot; Beres &middot; March 20–25 &middot; Austin, TX
        </p>
      </div>
    </footer>
  );
}
