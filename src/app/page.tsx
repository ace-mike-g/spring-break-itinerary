import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";

const sections = [
  {
    title: "The House",
    description: "Address, wifi, parking, rules & everything you need to know",
    href: "/house",
    icon: "home",
  },
  {
    title: "Guestbook",
    description: "Drop a quote, memory, or inside joke for the trip wall",
    href: "/quotes",
    icon: "quotes",
  },
  {
    title: "Menu",
    description: "What we're eating for breakfast, lunch & dinner every day",
    href: "/menu",
    icon: "menu",
  },
  {
    title: "Recommendations",
    description: "Our curated list of Austin restaurants, bars & activities",
    href: "/recommendations",
    icon: "recommendations",
  },
  {
    title: "Itinerary",
    description: "Day-by-day plans so nobody misses a thing",
    href: "/itinerary",
    icon: "itinerary",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Everything You Need
          </h2>
          <p className="mt-2 text-white/60">
            Tap a section to explore — we&apos;ve got the whole trip covered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <SectionCard key={section.href} {...section} />
          ))}
        </div>
      </section>
    </>
  );
}
