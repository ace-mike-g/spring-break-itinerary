import type { MenuDay } from "@/types";

export const menu: MenuDay[] = [
  {
    dayNumber: 1,
    date: "March 20",
    dayOfWeek: "Friday",
    meals: [
      {
        label: "Breakfast",
        description: "",
        type: "breakfast",
        skipped: true,
      },
      {
        label: "Lunch",
        description: "",
        type: "lunch",
        skipped: true,
      },
      {
        label: "Dinner",
        description: "Chicken Thigh Bowls",
        type: "dinner",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "March 21",
    dayOfWeek: "Saturday",
    meals: [
      {
        label: "Breakfast",
        description: "English Muffin Breakfast Sandwiches",
        type: "breakfast",
      },
      {
        label: "Lunch",
        description: "Sandwiches",
        type: "lunch",
      },
      {
        label: "Snack",
        description: "Hummus/Veggie & Fruit Plate",
        type: "snack",
      },
      {
        label: "Dinner",
        description: "Franklin's BBQ",
        type: "dinner",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "March 22",
    dayOfWeek: "Sunday",
    meals: [
      {
        label: "Breakfast",
        description: "Belgian Waffles",
        type: "breakfast",
      },
      {
        label: "Lunch",
        description: "Lunch at Sherwood Forest Faire",
        type: "lunch",
      },
      {
        label: "Dinner",
        description: "Lasagna & Salad & Bread Sticks",
        type: "dinner",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "March 23",
    dayOfWeek: "Monday",
    meals: [
      {
        label: "Breakfast",
        description: "French Toast Casserole",
        type: "breakfast",
      },
      {
        label: "Lunch",
        description: "Avocado Toast Bar",
        type: "lunch",
      },
      {
        label: "Dinner",
        description: "Romme Fam Dinner",
        type: "dinner",
      },
    ],
  },
  {
    dayNumber: 5,
    date: "March 24",
    dayOfWeek: "Tuesday",
    meals: [
      {
        label: "Breakfast",
        description: "Yogurt/Chia Seed Parfaits",
        type: "breakfast",
      },
      {
        label: "Lunch",
        description: "Leftovers",
        type: "lunch",
      },
      {
        label: "Dinner",
        description: "Fresh Pasta w/ Basil Parm, Cherry Tomatoes & Chicken",
        type: "dinner",
      },
    ],
  },
];
