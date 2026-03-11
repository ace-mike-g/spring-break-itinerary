import Link from "next/link";
import { Home, MessageCircle, Utensils, Calendar, CookingPot, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  quotes: MessageCircle,
  recommendations: Utensils,
  itinerary: Calendar,
  menu: CookingPot,
};

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function SectionCard({ title, description, href, icon }: SectionCardProps) {
  const Icon = iconMap[icon] || Home;

  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-warm-200 bg-dark-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-hot-pink/40 hover:shadow-lg hover:shadow-hot-pink/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hot-pink/15 text-hot-pink transition-colors group-hover:bg-hot-pink group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </Link>
  );
}
