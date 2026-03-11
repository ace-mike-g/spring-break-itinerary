import type { ItineraryDay } from "@/types";

export const itinerary: ItineraryDay[] = [
  {
    dayNumber: 1,
    date: "Friday, March 20",
    title: "Arrival Day",
    summary: "Grisko & Romme families arrive and settle in",
    activities: [
      {
        time: "2:00 PM",
        title: "Grisko & Romme Families Arrive",
        description:
          "Two families, ten people — the trip officially begins! Check in, pick rooms, and get settled.",
        category: "travel",
        location: "3500 Travis Country Cir, Austin, TX 78703",
        mapUrl:
          "https://maps.google.com/?q=3500+Travis+Country+Cir,+Austin,+TX+78703",
      },
      {
        time: "3:00 PM",
        title: "Explore the House",
        description:
          "Tour the house, find the pool, check out the gym, and fire up the espresso machine.",
        category: "free-time",
      },
      {
        time: "6:00 PM",
        title: "Dinner: Chicken Thigh Bowls",
        description: "First night dinner at the house — keeping it easy.",
        category: "meal",
      },
    ],
  },
  {
    dayNumber: 2,
    date: "Saturday, March 21",
    title: "Pool Day + Beres Arrive",
    summary: "Morning hike, pool all day, and the crew grows to 15",
    activities: [
      {
        time: "8:00 AM",
        title: "Breakfast: English Muffin Sandwiches",
        description: "Fuel up before the morning adventure.",
        category: "meal",
      },
      {
        time: "9:30 AM",
        title: "Morning Trail Hike or Playground",
        description:
          "Hit the Barton Creek Greenbelt trail right from Travis Country, or take the kids to Regents fields — your call.",
        category: "activity",
        location: "Barton Creek Greenbelt — Travis Country Access",
        mapUrl:
          "https://maps.google.com/?q=Barton+Creek+Greenbelt,+Travis+Country,+Austin,+TX",
        notes: "Regents fields & playground are also a short walk from the house.",
      },
      {
        time: "11:00 AM",
        title: "Beres Family Arrives",
        description:
          "The third family rolls in — now we're at full squad: 15 people, 3 families.",
        category: "travel",
        location: "3500 Travis Country Cir, Austin, TX 78703",
        mapUrl:
          "https://maps.google.com/?q=3500+Travis+Country+Cir,+Austin,+TX+78703",
      },
      {
        time: "12:00 PM",
        title: "Lunch: Sandwiches",
        description: "Quick and easy at the house so we can maximize pool time.",
        category: "meal",
      },
      {
        time: "1:00 PM",
        title: "Pool Day",
        description:
          "Heated pool, hot tub, outdoor bar — spend the afternoon soaking it all in.",
        category: "activity",
      },
      {
        time: "3:30 PM",
        title: "Snack: Hummus/Veggie & Fruit Plate",
        description: "Poolside snacks to keep everyone going.",
        category: "meal",
      },
      {
        time: "6:00 PM",
        title: "Dinner: Franklin's BBQ",
        description: "The legendary Austin BBQ — takeout brought back to the house.",
        category: "meal",
        notes: "Pickup from Franklin Barbecue, 900 E 11th St.",
      },
    ],
  },
  {
    dayNumber: 3,
    date: "Sunday, March 22",
    title: "Church & Faire",
    summary: "Morning worship, then jousting and turkey legs",
    activities: [
      {
        time: "7:30 AM",
        title: "Breakfast: Belgian Waffles",
        description: "Waffles before church — get 'em while they're hot.",
        category: "meal",
      },
      {
        time: "9:00 AM",
        title: "Church at Austin Ridge Bible Church",
        description: "Sunday service at the Southwest campus.",
        category: "activity",
        location: "7416 W Highway 71, Austin, TX 78735",
        mapUrl:
          "https://maps.google.com/?q=Austin+Ridge+Bible+Church,+7416+W+Highway+71,+Austin,+TX+78735",
      },
      {
        time: "12:00 PM",
        title: "Lunch: Breakfast Tacos Out",
        description: "Grab breakfast tacos at a local spot on the way back.",
        category: "meal",
      },
      {
        time: "2:00 PM",
        title: "Sherwood Forest Faire",
        description:
          "Renaissance faire with jousting, live music, artisan shops, and turkey legs. 25 acres of medieval fun about 35 miles east of Austin.",
        category: "activity",
        location: "1883 Old Hwy 20, McDade, TX 78650",
        mapUrl:
          "https://maps.google.com/?q=Sherwood+Forest+Faire,+1883+Old+Hwy+20,+McDade,+TX+78650",
        notes: "~40 min drive from the house.",
      },
      {
        time: "6:30 PM",
        title: "Dinner: Lasagna & Salad & Bread Sticks",
        description: "Home-cooked comfort food after a big day out.",
        category: "meal",
      },
    ],
  },
  {
    dayNumber: 4,
    date: "Monday, March 23",
    title: "Pool Day or Ranch Visit",
    summary: "Relax by the pool or go cuddle some cows",
    activities: [
      {
        time: "8:30 AM",
        title: "Breakfast: French Toast Casserole",
        description: "A crowd-pleaser to start the day.",
        category: "meal",
      },
      {
        time: "10:00 AM",
        title: "Pool Day or Cow Cuddling Ranch Visit",
        description:
          "Option A: Another glorious pool day at the house. Option B: Take a trip to a ranch for cow cuddling — yes, it's a real thing and it's amazing.",
        category: "activity",
        notes: "Ranch TBD — several options within an hour of Austin.",
      },
      {
        time: "12:30 PM",
        title: "Lunch: Avocado Toast Bar",
        description: "Build your own — pick your toppings.",
        category: "meal",
      },
      {
        time: "1:30 PM",
        title: "Afternoon Free Time",
        description:
          "Pool, hot tub, gym, Xbox, board games — dealer's choice.",
        category: "free-time",
      },
      {
        time: "6:00 PM",
        title: "Dinner: Romme Fam Dinner",
        description: "The Romme family takes the reins on tonight's meal.",
        category: "meal",
      },
    ],
  },
  {
    dayNumber: 5,
    date: "Tuesday, March 24",
    title: "Farewell Rommes",
    summary: "The Romme family heads out, two families remain",
    activities: [
      {
        time: "8:30 AM",
        title: "Breakfast: Yogurt/Chia Seed Parfaits",
        description: "Light and fresh to start the morning.",
        category: "meal",
      },
      {
        time: "11:00 AM",
        title: "Romme Family Departs",
        description:
          "Hugs, maybe some tears, definitely some inside jokes. Safe travels, Rommes!",
        category: "travel",
      },
      {
        time: "12:30 PM",
        title: "Lunch: Leftovers",
        description: "Clean out the fridge — best buffet of the trip.",
        category: "meal",
      },
      {
        time: "1:30 PM",
        title: "Afternoon Free Time",
        description:
          "Last full afternoon in Austin — pool, greenbelt walk, or just hang.",
        category: "free-time",
      },
      {
        time: "6:00 PM",
        title: "Dinner: Fresh Pasta",
        description:
          "Fresh pasta with basil parm, cherry tomatoes & chicken. A proper send-off meal.",
        category: "meal",
      },
    ],
  },
  {
    dayNumber: 6,
    date: "Wednesday, March 25",
    title: "Departure Day",
    summary: "Pack up and say goodbye to Austin",
    activities: [
      {
        time: "8:00 AM",
        title: "Beres Family Departs",
        description:
          "The Beres crew heads out. Down to one family standing.",
        category: "travel",
      },
      {
        time: "11:00 AM",
        title: "Grisko Family Check Out",
        description:
          "Final walkthrough, load up the car, and close out an incredible trip.",
        category: "travel",
        location: "3500 Travis Country Cir, Austin, TX 78703",
        mapUrl:
          "https://maps.google.com/?q=3500+Travis+Country+Cir,+Austin,+TX+78703",
      },
    ],
  },
];
