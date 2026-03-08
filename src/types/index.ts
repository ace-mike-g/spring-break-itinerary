export interface Quote {
  id: number;
  author: string;
  text: string;
  createdAt: string;
}

export interface HouseInfo {
  address: string;
  wifi: { network: string; password: string };
  parking: string;
  checkIn: string;
  checkOut: string;
  rules: string[];
  amenities: { icon: string; label: string }[];
}

export interface Recommendation {
  id: string;
  name: string;
  category: "food" | "drinks" | "outdoors" | "entertainment" | "coffee";
  description: string;
  address: string;
  priceLevel: "$" | "$$" | "$$$" | "$$$$";
  tags: string[];
  website?: string;
  image?: string;
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  category: "meal" | "activity" | "travel" | "free-time" | "nightlife";
  location?: string;
  notes?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  summary: string;
  activities: Activity[];
}

export interface SectionLink {
  title: string;
  description: string;
  href: string;
  icon: string;
}
