import type { ItineraryDay } from "@/types";

export const itinerary: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: "Friday, March 20",
    title: "Arrival Day",
    summary: "Get settled in and explore the neighborhood",
    activities: [
      {
        time: "3:00 PM",
        title: "Check In",
        description: "Arrive at the house, pick rooms, get settled",
        category: "travel",
      },
      {
        time: "6:00 PM",
        title: "Welcome Dinner",
        description: "First night dinner — details TBD",
        category: "meal",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "Saturday, March 21",
    title: "Day 2",
    summary: "Activities TBD",
    activities: [
      {
        time: "TBD",
        title: "Plans Coming Soon",
        description: "Check back for the full day plan",
        category: "activity",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "Sunday, March 22",
    title: "Day 3",
    summary: "Activities TBD",
    activities: [
      {
        time: "TBD",
        title: "Plans Coming Soon",
        description: "Check back for the full day plan",
        category: "activity",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "Monday, March 23",
    title: "Day 4",
    summary: "Activities TBD",
    activities: [
      {
        time: "TBD",
        title: "Plans Coming Soon",
        description: "Check back for the full day plan",
        category: "activity",
      },
    ],
  },
  {
    dayNumber: 5,
    date: "Tuesday, March 24",
    title: "Day 5",
    summary: "Activities TBD",
    activities: [
      {
        time: "TBD",
        title: "Plans Coming Soon",
        description: "Check back for the full day plan",
        category: "activity",
      },
    ],
  },
  {
    dayNumber: 6,
    date: "Wednesday, March 25",
    title: "Departure Day",
    summary: "Last morning in Austin",
    activities: [
      {
        time: "11:00 AM",
        title: "Check Out",
        description: "Pack up and say goodbye to Austin",
        category: "travel",
      },
    ],
  },
];
