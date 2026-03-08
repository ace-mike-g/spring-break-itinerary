import {
  Waves,
  Dumbbell,
  Coffee,
  CupSoda,
  Flame,
  Gamepad2,
  Tv,
  Droplets,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  waves: Waves,
  "hot-tub": Droplets,
  dumbbell: Dumbbell,
  coffee: Coffee,
  "cup-soda": CupSoda,
  flame: Flame,
  "gamepad-2": Gamepad2,
  tv: Tv,
};

interface HouseInfoCardProps {
  icon: string;
  label: string;
}

export default function HouseInfoCard({ icon, label }: HouseInfoCardProps) {
  const Icon = iconMap[icon] || Coffee;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-warm-200 bg-dark-card p-4 transition-colors hover:border-cyan-blue/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-blue/15 text-cyan-blue">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  );
}
