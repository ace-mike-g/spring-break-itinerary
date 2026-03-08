import {
  MapPin,
  Wifi,
  Copy,
  CalendarCheck,
  CalendarX,
  ShieldCheck,
  TreePine,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import HouseInfoCard from "@/components/HouseInfoCard";
import { houseInfo, locationHighlights } from "@/data/house";

export default function HousePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <PageHeader title="The House" subtitle="Everything you need to know about home base" />

      {/* Address */}
      <div className="mb-8 rounded-2xl border border-warm-200 bg-dark-card p-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-hot-pink" />
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Address
            </h2>
            <p className="mt-1 text-lg font-bold text-white">{houseInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Wifi + Dates row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {/* Wifi */}
        <div className="rounded-2xl border border-warm-200 bg-dark-card p-6">
          <div className="flex items-start gap-3">
            <Wifi className="mt-0.5 h-5 w-5 shrink-0 text-neon-green" />
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">
                WiFi
              </h2>
              <p className="mt-1 text-base font-bold text-white">
                {houseInfo.wifi.network}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <code className="rounded bg-neon-green/10 px-2 py-0.5 text-sm text-neon-green">
                  {houseInfo.wifi.password}
                </code>
                <Copy className="h-3.5 w-3.5 text-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="rounded-2xl border border-warm-200 bg-dark-card p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-5 w-5 shrink-0 text-cyan-blue" />
              <div>
                <span className="text-xs font-semibold uppercase text-white/50">Check-in</span>
                <p className="text-sm font-bold text-white">{houseInfo.checkIn}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarX className="h-5 w-5 shrink-0 text-electric-orange" />
              <div>
                <span className="text-xs font-semibold uppercase text-white/50">Check-out</span>
                <p className="text-sm font-bold text-white">{houseInfo.checkOut}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* House Rules */}
      <div className="mb-8 rounded-2xl border border-warm-200 bg-dark-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-electric-orange" />
          <h2 className="text-lg font-bold text-white">House Rules</h2>
        </div>
        <ul className="space-y-2">
          {houseInfo.rules.map((rule) => (
            <li key={rule} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-orange" />
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-bold text-white">Amenities</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {houseInfo.amenities.map((amenity) => (
            <HouseInfoCard key={amenity.label} {...amenity} />
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="rounded-2xl border border-warm-200 bg-dark-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <TreePine className="h-5 w-5 text-neon-green" />
          <h2 className="text-lg font-bold text-white">Location Highlights</h2>
        </div>
        <ul className="space-y-2">
          {locationHighlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-green" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
