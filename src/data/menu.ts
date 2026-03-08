export interface DayMenu {
  dayNumber: number;
  date: string;
  meals: {
    type: "breakfast" | "lunch" | "dinner" | "snack";
    title: string;
    description: string;
    location?: string;
  }[];
}

export const dailyMenu: DayMenu[] = [
  {
    dayNumber: 1,
    date: "Friday, March 20",
    meals: [
      { type: "dinner", title: "Welcome Dinner", description: "TBD — check back soon!" },
    ],
  },
  {
    dayNumber: 2,
    date: "Saturday, March 21",
    meals: [
      { type: "breakfast", title: "TBD", description: "Check back soon!" },
      { type: "lunch", title: "TBD", description: "Check back soon!" },
      { type: "dinner", title: "TBD", description: "Check back soon!" },
    ],
  },
  {
    dayNumber: 3,
    date: "Sunday, March 22",
    meals: [
      { type: "breakfast", title: "TBD", description: "Check back soon!" },
      { type: "lunch", title: "TBD", description: "Check back soon!" },
      { type: "dinner", title: "TBD", description: "Check back soon!" },
    ],
  },
  {
    dayNumber: 4,
    date: "Monday, March 23",
    meals: [
      { type: "breakfast", title: "TBD", description: "Check back soon!" },
      { type: "lunch", title: "TBD", description: "Check back soon!" },
      { type: "dinner", title: "TBD", description: "Check back soon!" },
    ],
  },
  {
    dayNumber: 5,
    date: "Tuesday, March 24",
    meals: [
      { type: "breakfast", title: "TBD", description: "Check back soon!" },
      { type: "lunch", title: "TBD", description: "Check back soon!" },
      { type: "dinner", title: "TBD", description: "Check back soon!" },
    ],
  },
  {
    dayNumber: 6,
    date: "Wednesday, March 25",
    meals: [
      { type: "breakfast", title: "Farewell Breakfast", description: "TBD — check back soon!" },
    ],
  },
];
