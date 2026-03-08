import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import TimelineItem from "@/components/TimelineItem";
import { itinerary } from "@/data/itinerary";

interface DayPageProps {
  params: Promise<{ day: string }>;
}

export function generateStaticParams() {
  return itinerary.map((day) => ({ day: String(day.dayNumber) }));
}

export default async function DayPage({ params }: DayPageProps) {
  const { day: dayParam } = await params;
  const dayNumber = parseInt(dayParam, 10);
  const day = itinerary.find((d) => d.dayNumber === dayNumber);

  if (!day) notFound();

  const prevDay = itinerary.find((d) => d.dayNumber === dayNumber - 1);
  const nextDay = itinerary.find((d) => d.dayNumber === dayNumber + 1);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/itinerary"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-white/50 transition-colors hover:text-hot-pink"
      >
        <ChevronLeft className="h-4 w-4" />
        All Days
      </Link>

      <PageHeader title={day.title} subtitle={day.date} />

      {/* Timeline */}
      <div className="mb-10">
        {day.activities.map((activity, i) => (
          <TimelineItem key={i} activity={activity} />
        ))}
      </div>

      {/* Prev / Next navigation */}
      <div className="flex justify-between border-t border-warm-200 pt-6">
        {prevDay ? (
          <Link
            href={`/itinerary/${prevDay.dayNumber}`}
            className="flex items-center gap-1 text-sm font-semibold text-white/50 transition-colors hover:text-cyan-blue"
          >
            <ChevronLeft className="h-4 w-4" />
            {prevDay.title}
          </Link>
        ) : (
          <div />
        )}
        {nextDay ? (
          <Link
            href={`/itinerary/${nextDay.dayNumber}`}
            className="flex items-center gap-1 text-sm font-semibold text-white/50 transition-colors hover:text-cyan-blue"
          >
            {nextDay.title}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
