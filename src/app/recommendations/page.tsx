"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import RecommendationCard from "@/components/RecommendationCard";
import { recommendations } from "@/data/recommendations";

const categories = ["all", "food", "drinks", "outdoors", "entertainment", "coffee"] as const;

const categoryStyles: Record<string, string> = {
  all: "bg-white text-dark-bg",
  food: "bg-electric-orange text-white",
  drinks: "bg-hot-pink text-white",
  outdoors: "bg-neon-green text-dark-bg",
  entertainment: "bg-cyan-blue text-dark-bg",
  coffee: "bg-electric-orange-light text-dark-bg",
};

export default function RecommendationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? recommendations
      : recommendations.filter((r) => r.category === activeCategory);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Recommendations"
        subtitle="Our curated guide to Austin eats, drinks & adventures"
      />

      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-bold capitalize transition-all ${
              activeCategory === cat
                ? categoryStyles[cat]
                : "bg-dark-card text-white/60 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((rec) => (
          <RecommendationCard key={rec.id} {...rec} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-white/40">
          No recommendations in this category yet.
        </div>
      )}
    </div>
  );
}
