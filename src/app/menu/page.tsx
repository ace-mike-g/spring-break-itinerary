import {
  Coffee,
  Sun,
  Cookie,
  UtensilsCrossed,
  Minus,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { menu } from "@/data/menu";
import type { Meal } from "@/types";

const mealConfig: Record<
  Meal["type"],
  { icon: typeof Coffee; color: string; bg: string; dot: string }
> = {
  breakfast: {
    icon: Coffee,
    color: "text-electric-orange",
    bg: "bg-electric-orange/15",
    dot: "bg-electric-orange",
  },
  lunch: {
    icon: Sun,
    color: "text-cyan-blue",
    bg: "bg-cyan-blue/15",
    dot: "bg-cyan-blue",
  },
  snack: {
    icon: Cookie,
    color: "text-neon-green",
    bg: "bg-neon-green/15",
    dot: "bg-neon-green",
  },
  dinner: {
    icon: UtensilsCrossed,
    color: "text-hot-pink",
    bg: "bg-hot-pink/15",
    dot: "bg-hot-pink",
  },
};

const accentBorders = [
  "border-l-hot-pink",
  "border-l-cyan-blue",
  "border-l-neon-green",
  "border-l-electric-orange",
  "border-l-hot-pink-light",
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader
        title="Menu"
        subtitle="What we're eating all week"
      />

      <div className="space-y-6">
        {menu.map((day, idx) => (
          <div
            key={day.dayNumber}
            className={`rounded-2xl border border-warm-200 ${accentBorders[idx % accentBorders.length]} border-l-4 bg-dark-card p-6`}
          >
            <div className="mb-4 flex items-baseline gap-3">
              <span className="text-lg font-extrabold text-white">
                {day.dayOfWeek}
              </span>
              <span className="text-sm font-semibold text-white/40">
                {day.date}
              </span>
            </div>

            <div className="space-y-3">
              {day.meals.map((meal) => {
                const config = mealConfig[meal.type];
                const Icon = meal.skipped ? Minus : config.icon;

                return (
                  <div
                    key={`${day.dayNumber}-${meal.label}`}
                    className={`flex items-center gap-3 ${meal.skipped ? "opacity-40" : ""}`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${meal.skipped ? "bg-warm-200" : config.bg}`}
                    >
                      <Icon
                        className={`h-4 w-4 ${meal.skipped ? "text-white/40" : config.color}`}
                      />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        {meal.label}
                      </span>
                      {meal.skipped ? (
                        <span className="text-sm italic text-white/30 line-through">
                          N/A — 2pm arrival
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-white/90">
                          {meal.description}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
