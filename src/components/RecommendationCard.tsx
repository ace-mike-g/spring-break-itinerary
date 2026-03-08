import { MapPin, DollarSign } from "lucide-react";
import type { Recommendation } from "@/types";

const categoryColors: Record<string, string> = {
  food: "bg-electric-orange/15 text-electric-orange",
  drinks: "bg-hot-pink/15 text-hot-pink",
  outdoors: "bg-neon-green/15 text-neon-green",
  entertainment: "bg-cyan-blue/15 text-cyan-blue",
  coffee: "bg-electric-orange/15 text-electric-orange-light",
};

export default function RecommendationCard({ name, category, description, address, priceLevel, tags }: Recommendation) {
  return (
    <div className="rounded-2xl border border-warm-200 bg-dark-card p-5 transition-all hover:border-hot-pink/30 hover:shadow-lg hover:shadow-hot-pink/5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold capitalize ${categoryColors[category]}`}>
          {category}
        </span>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-white/70">{description}</p>

      <div className="mb-3 flex items-center gap-4 text-xs text-white/50">
        <span className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {address}
        </span>
        <span className="flex items-center gap-0.5">
          <DollarSign className="h-3 w-3" />
          {priceLevel}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-warm-100 px-2 py-0.5 text-xs font-medium text-white/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
