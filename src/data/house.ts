import type { HouseInfo } from "@/types";

export const houseInfo: HouseInfo = {
  address: "3500 Travis Country Cir, Austin, TX 78703",
  wifi: {
    network: "ManaFromModem",
    password: "3122065348",
  },
  parking: "Driveway parking available",
  checkIn: "Thursday, March 20",
  checkOut: "Wednesday, March 25",
  rules: [
    "Spa robes encouraged during coffee",
    "Shoes belong in the mud room",
    "Water bottles should be placed on the water bottle table",
    "No kids on the balcony",
    "No food upstairs",
  ],
  amenities: [
    { icon: "waves", label: "Heated Pool" },
    { icon: "hot-tub", label: "Hot Tub" },
    { icon: "dumbbell", label: "Gym — Full Eleiko Rack & Weights" },
    { icon: "coffee", label: "Espresso Machine" },
    { icon: "cup-soda", label: "Drip Coffee & Tea" },
    { icon: "flame", label: "Fireplace" },
    { icon: "gamepad-2", label: "Board Games & Xbox" },
    { icon: "tv", label: "Outdoor Bar & Television" },
  ],
};

export const locationHighlights = [
  "Steps away from beautiful greenbelt trails",
  "Walking distance to Regents fields and playground",
];
