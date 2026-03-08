import PageHeader from "@/components/PageHeader";
import DayCard from "@/components/DayCard";
import { itinerary } from "@/data/itinerary";

export default function ItineraryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageHeader
        title="Itinerary"
        subtitle="6 days of sun, food, and good times"
      />

      <div className="grid gap-4">
        {itinerary.map((day) => (
          <DayCard key={day.dayNumber} day={day} />
        ))}
      </div>
    </div>
  );
}
