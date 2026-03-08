import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ItineraryDay } from "@/types";

const dayColors = [
  "border-hot-pink/40 hover:border-hot-pink",
  "border-electric-orange/40 hover:border-electric-orange",
  "border-neon-green/40 hover:border-neon-green",
  "border-cyan-blue/40 hover:border-cyan-blue",
  "border-hot-pink/40 hover:border-hot-pink",
  "border-electric-orange/40 hover:border-electric-orange",
];

const dayAccents = [
  "text-hot-pink",
  "text-electric-orange",
  "text-neon-green",
  "text-cyan-blue",
  "text-hot-pink",
  "text-electric-orange",
];

export default function DayCard({ day }: { day: ItineraryDay }) {
  const colorClass = dayColors[(day.dayNumber - 1) % dayColors.length];
  const accentClass = dayAccents[(day.dayNumber - 1) % dayAccents.length];

  return (
    <Link
      href={`/itinerary/${day.dayNumber}`}
      className={`group flex items-center justify-between rounded-2xl border bg-dark-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg ${colorClass}`}
    >
      <div>
        <span className={`text-xs font-bold uppercase tracking-wide ${accentClass}`}>
          {day.date}
        </span>
        <h3 className="mt-1 text-lg font-bold text-white">{day.title}</h3>
        <p className="mt-0.5 text-sm text-white/60">{day.summary}</p>
        <p className="mt-1 text-xs text-white/40">
          {day.activities.length} {day.activities.length === 1 ? "activity" : "activities"}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-white/30 transition-colors group-hover:text-white" />
    </Link>
  );
}
