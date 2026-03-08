import { UtensilsCrossed, Coffee, Sun, Moon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { dailyMenu } from "@/data/menu";
import type { LucideIcon } from "lucide-react";

const mealIcons: Record<string, LucideIcon> = {
  breakfast: Coffee,
  lunch: Sun,
  dinner: Moon,
  snack: UtensilsCrossed,
};

const mealColors: Record<string, string> = {
  breakfast: "bg-electric-orange/15 text-electric-orange",
  lunch: "bg-neon-green/15 text-neon-green",
  dinner: "bg-hot-pink/15 text-hot-pink",
  snack: "bg-cyan-blue/15 text-cyan-blue",
};

const dayAccents = [
  "border-hot-pink/40",
  "border-electric-orange/40",
  "border-neon-green/40",
  "border-cyan-blue/40",
  "border-hot-pink/40",
  "border-electric-orange/40",
];

const dayAccentText = [
  "text-hot-pink",
  "text-electric-orange",
  "text-neon-green",
  "text-cyan-blue",
  "text-hot-pink",
  "text-electric-orange",
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageHeader
        title="Daily Menu"
        subtitle="What we're eating each day"
      />

      <div className="space-y-6">
        {dailyMenu.map((day) => (
          <div
            key={day.dayNumber}
            className={`rounded-2xl border bg-dark-card p-6 ${dayAccents[(day.dayNumber - 1) % dayAccents.length]}`}
          >
            <div className="mb-4">
              <span className={`text-xs font-bold uppercase tracking-wide ${dayAccentText[(day.dayNumber - 1) % dayAccentText.length]}`}>
                Day {day.dayNumber}
              </span>
              <h2 className="text-lg font-bold text-white">{day.date}</h2>
            </div>

            <div className="space-y-3">
              {day.meals.map((meal, i) => {
                const Icon = mealIcons[meal.type] || UtensilsCrossed;
                const colorClass = mealColors[meal.type] || "bg-warm-100 text-white/60";

                return (
                  <div key={i} className="flex gap-3 rounded-xl border border-warm-200 bg-dark-bg p-4">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold uppercase ${colorClass.split(" ")[1]}`}>
                          {meal.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-white">{meal.title}</h3>
                      <p className="text-sm text-white/60">{meal.description}</p>
                      {meal.location && (
                        <p className="mt-0.5 text-xs text-white/40">{meal.location}</p>
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
