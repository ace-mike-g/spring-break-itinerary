import type { Activity } from "@/types";

const categoryColors: Record<string, string> = {
  meal: "bg-electric-orange",
  activity: "bg-cyan-blue",
  travel: "bg-hot-pink",
  "free-time": "bg-neon-green",
  nightlife: "bg-hot-pink-light",
};

const categoryBadge: Record<string, string> = {
  meal: "bg-electric-orange/15 text-electric-orange",
  activity: "bg-cyan-blue/15 text-cyan-blue",
  travel: "bg-hot-pink/15 text-hot-pink",
  "free-time": "bg-neon-green/15 text-neon-green",
  nightlife: "bg-hot-pink-light/15 text-hot-pink-light",
};

export default function TimelineItem({ activity }: { activity: Activity }) {
  const dotColor = categoryColors[activity.category] || "bg-white/40";
  const badge = categoryBadge[activity.category] || "bg-warm-100 text-white/60";

  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`h-3 w-3 shrink-0 rounded-full ${dotColor}`} />
        <div className="w-px grow bg-warm-200" />
      </div>

      {/* Content */}
      <div className="-mt-0.5 flex-1 rounded-xl border border-warm-200 bg-dark-card p-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-bold text-white/50">{activity.time}</span>
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold capitalize ${badge}`}>
            {activity.category.replace("-", " ")}
          </span>
        </div>
        <h3 className="font-bold text-white">{activity.title}</h3>
        <p className="mt-0.5 text-sm text-white/60">{activity.description}</p>
        {activity.location && (
          <p className="mt-1 text-xs text-white/40">{activity.location}</p>
        )}
        {activity.notes && (
          <p className="mt-1 text-xs italic text-white/40">{activity.notes}</p>
        )}
      </div>
    </div>
  );
}
