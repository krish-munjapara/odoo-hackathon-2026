require("dotenv").config();
const mongoose = require("mongoose");
const Destination = require("./models/Destination");

const destinations = [
  {
    name: "Goa", country: "India", state: "Goa",
    description: "India's smallest state is famous for its stunning beaches, vibrant nightlife, Portuguese heritage architecture, and delicious seafood cuisine. From the lively shores of Baga and Calangute to the serene beauty of Palolem, Goa offers something for every traveler.",
    shortDesc: "Sun, sand, and the best beach vibes in India.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    rating: 4.7, reviewCount: 3420, budgetFrom: 5000, budgetTo: 25000,
    categories: ["Beaches", "Adventure", "Honeymoon", "Budget Trips"],
    bestTimeToVisit: "November - February", tripDuration: "3-5 Days",
    activities: ["Beach Hopping", "Water Sports", "Old Goa Churches", "Night Markets", "Dolphin Watching", "Scuba Diving"],
    hotels: [{ name: "Taj Fort Aguada", pricePerNight: 8500, rating: 4.8 }, { name: "Zostel Goa", pricePerNight: 600, rating: 4.3 }],
    highlights: ["Baga Beach", "Dudhsagar Falls", "Basilica of Bom Jesus", "Anjuna Flea Market"],
    isTrending: true, latitude: 15.2993, longitude: 74.124
  },
  {
    name: "Manali", country: "India", state: "Himachal Pradesh",
    description: "Nestled in the Kullu Valley of Himachal Pradesh, Manali is a breathtaking hill station surrounded by snow-capped peaks, lush green forests, and the gushing Beas River. It is the gateway to Rohtang Pass and Solang Valley.",
    shortDesc: "Snow-capped peaks and adventure in the Himalayas.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    rating: 4.8, reviewCount: 5210, budgetFrom: 6000, budgetTo: 30000,
    categories: ["Mountains", "Adventure", "Honeymoon", "Road Trips"],
    bestTimeToVisit: "October - June", tripDuration: "4-6 Days",
    activities: ["Skiing", "Paragliding", "Trekking", "River Rafting", "Rohtang Pass Visit", "Hot Springs"],
    hotels: [{ name: "The Himalayan", pricePerNight: 6500, rating: 4.6 }, { name: "Zostel Manali", pricePerNight: 500, rating: 4.2 }],
    highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali"],
    isTrending: true, latitude: 32.2396, longitude: 77.1887
  },
  {
    name: "Kashmir", country: "India", state: "Jammu & Kashmir",
    description: "Known as 'Paradise on Earth', Kashmir enchants visitors with its pristine Dal Lake, Mughal gardens, snow-covered mountains, and warm hospitality. A shikara ride on Dal Lake is one of India's most iconic experiences.",
    shortDesc: "Paradise on Earth — lakes, gardens, and snow.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150a53?w=800",
    rating: 4.9, reviewCount: 4800, budgetFrom: 8000, budgetTo: 40000,
    categories: ["Mountains", "Honeymoon", "Family Trips", "Adventure"],
    bestTimeToVisit: "March - October", tripDuration: "5-7 Days",
    activities: ["Shikara Ride", "Gondola Ride", "Skiing in Gulmarg", "Trekking", "Mughal Gardens", "Apple Orchard Visit"],
    hotels: [{ name: "The Lalit Grand Palace", pricePerNight: 12000, rating: 4.9 }, { name: "Houseboat on Dal Lake", pricePerNight: 3500, rating: 4.5 }],
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Sonmarg", "Mughal Gardens"],
    isTrending: true, latitude: 34.0837, longitude: 74.7973
  },
  {
    name: "Jaipur", country: "India", state: "Rajasthan",
    description: "The Pink City of Jaipur is a vibrant blend of royal heritage, magnificent forts, bustling bazaars, and delicious Rajasthani cuisine. Every corner tells a story of the Rajput era.",
    shortDesc: "Royal forts and vibrant Rajasthani culture.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    rating: 4.6, reviewCount: 3890, budgetFrom: 4000, budgetTo: 20000,
    categories: ["Historical", "Family Trips", "Budget Trips", "Road Trips"],
    bestTimeToVisit: "October - March", tripDuration: "3-4 Days",
    activities: ["Fort Visits", "Elephant Ride", "Shopping at Johari Bazaar", "Rajasthani Thali", "Hot Air Balloon"],
    hotels: [{ name: "Rambagh Palace", pricePerNight: 25000, rating: 4.9 }, { name: "Hotel Pearl Palace", pricePerNight: 1200, rating: 4.4 }],
    highlights: ["Amer Fort", "Hawa Mahal", "City Palace", "Nahargarh Fort"],
    isTrending: true, latitude: 26.9124, longitude: 75.7873
  },
  {
    name: "Kerala", country: "India", state: "Kerala",
    description: "God's Own Country is famous for its serene backwaters, Ayurvedic treatments, lush tea plantations in Munnar, and beautiful beaches in Kovalam and Varkala.",
    shortDesc: "Backwaters, Ayurveda, and tropical paradise.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    rating: 4.8, reviewCount: 4120, budgetFrom: 7000, budgetTo: 35000,
    categories: ["Beaches", "Honeymoon", "Spiritual", "Family Trips", "Luxury"],
    bestTimeToVisit: "September - March", tripDuration: "5-7 Days",
    activities: ["Houseboat Cruise", "Ayurvedic Spa", "Tea Plantation Tour", "Kathakali Show", "Beach Relaxation"],
    hotels: [{ name: "Kumarakom Lake Resort", pricePerNight: 15000, rating: 4.8 }, { name: "Zostel Alleppey", pricePerNight: 700, rating: 4.1 }],
    highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Fort Kochi", "Kovalam Beach"],
    isTrending: true, latitude: 10.8505, longitude: 76.2711
  },
  {
    name: "Rishikesh", country: "India", state: "Uttarakhand",
    description: "The Yoga Capital of the World sits on the banks of the holy Ganges. Rishikesh offers thrilling rafting, bungee jumping, ancient temples, and peaceful ashrams.",
    shortDesc: "Yoga capital with thrilling adventure sports.",
    image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=800",
    rating: 4.6, reviewCount: 2890, budgetFrom: 3000, budgetTo: 15000,
    categories: ["Adventure", "Spiritual", "Budget Trips", "Solo Travel"],
    bestTimeToVisit: "September - November, March - May", tripDuration: "2-4 Days",
    activities: ["River Rafting", "Bungee Jumping", "Yoga Retreat", "Temple Visit", "Camping", "Cliff Jumping"],
    hotels: [{ name: "Aloha on the Ganges", pricePerNight: 5000, rating: 4.5 }, { name: "Zostel Rishikesh", pricePerNight: 450, rating: 4.3 }],
    highlights: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat Aarti"],
    latitude: 30.0869, longitude: 78.2676
  },
  {
    name: "Ladakh", country: "India", state: "Ladakh",
    description: "The Land of High Passes features dramatic landscapes with crystal-clear lakes, ancient monasteries, and some of the highest motorable roads in the world.",
    shortDesc: "High-altitude desert with stunning blue lakes.",
    image: "https://images.unsplash.com/photo-1626015365107-39ab0e18d1e4?w=800",
    rating: 4.9, reviewCount: 3650, budgetFrom: 12000, budgetTo: 50000,
    categories: ["Mountains", "Adventure", "Road Trips", "Solo Travel"],
    bestTimeToVisit: "June - September", tripDuration: "7-10 Days",
    activities: ["Pangong Lake Visit", "Khardung La Pass", "Monastery Tour", "Bike Trip", "Camping", "Camel Safari"],
    hotels: [{ name: "The Grand Dragon", pricePerNight: 8000, rating: 4.6 }, { name: "Leh Hostel", pricePerNight: 800, rating: 4.0 }],
    highlights: ["Pangong Tso", "Nubra Valley", "Khardung La", "Thiksey Monastery"],
    isTrending: true, latitude: 34.1526, longitude: 77.5771
  },
  {
    name: "Shimla", country: "India", state: "Himachal Pradesh",
    description: "The former summer capital of British India retains its colonial charm with the famous Mall Road, toy train rides, and panoramic Himalayan views.",
    shortDesc: "Colonial charm and scenic toy train rides.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150a53?w=800",
    rating: 4.4, reviewCount: 2340, budgetFrom: 4000, budgetTo: 18000,
    categories: ["Mountains", "Family Trips", "Honeymoon", "Road Trips"],
    bestTimeToVisit: "March - June, December", tripDuration: "3-4 Days",
    activities: ["Mall Road Walk", "Toy Train Ride", "Jakhu Temple", "Ice Skating", "Kufri Visit"],
    hotels: [{ name: "Wildflower Hall", pricePerNight: 20000, rating: 4.9 }, { name: "Hotel Willow Banks", pricePerNight: 2000, rating: 4.2 }],
    highlights: ["The Ridge", "Mall Road", "Jakhoo Temple", "Kufri"],
    latitude: 31.1048, longitude: 77.1734
  },
  {
    name: "Udaipur", country: "India", state: "Rajasthan",
    description: "The City of Lakes is one of India's most romantic destinations with floating palaces, serene lakes, and a royal atmosphere that transports you to the era of maharajas.",
    shortDesc: "City of Lakes — India's most romantic city.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
    rating: 4.7, reviewCount: 2980, budgetFrom: 5000, budgetTo: 25000,
    categories: ["Honeymoon", "Luxury", "Historical", "Family Trips"],
    bestTimeToVisit: "September - March", tripDuration: "3-4 Days",
    activities: ["Lake Pichola Boat Ride", "City Palace Tour", "Sunset at Monsoon Palace", "Vintage Car Museum"],
    hotels: [{ name: "Taj Lake Palace", pricePerNight: 35000, rating: 5.0 }, { name: "Zostel Udaipur", pricePerNight: 550, rating: 4.3 }],
    highlights: ["Lake Pichola", "City Palace", "Jagdish Temple", "Saheliyon ki Bari"],
    latitude: 24.5854, longitude: 73.7125
  },
  {
    name: "Varanasi", country: "India", state: "Uttar Pradesh",
    description: "One of the oldest living cities in the world, Varanasi is the spiritual heart of India. The mesmerizing Ganga Aarti, ancient ghats, and narrow lanes create an unforgettable experience.",
    shortDesc: "India's spiritual capital on the holy Ganges.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
    rating: 4.5, reviewCount: 3200, budgetFrom: 3000, budgetTo: 12000,
    categories: ["Spiritual", "Budget Trips", "Solo Travel", "Historical"],
    bestTimeToVisit: "October - March", tripDuration: "2-3 Days",
    activities: ["Ganga Aarti", "Boat Ride on Ganges", "Temple Tour", "Silk Shopping", "Street Food Walk"],
    hotels: [{ name: "BrijRama Palace", pricePerNight: 9000, rating: 4.7 }, { name: "Stops Hostel", pricePerNight: 400, rating: 4.1 }],
    highlights: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Assi Ghat", "Sarnath"],
    latitude: 25.3176, longitude: 83.0064
  },
  {
    name: "Mumbai", country: "India", state: "Maharashtra",
    description: "The City of Dreams is India's financial capital and entertainment hub. From Bollywood to street food, colonial architecture to modern skyline, Mumbai never sleeps.",
    shortDesc: "India's city of dreams — Bollywood and beyond.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    rating: 4.4, reviewCount: 4500, budgetFrom: 4000, budgetTo: 20000,
    categories: ["Family Trips", "Budget Trips", "Road Trips"],
    bestTimeToVisit: "November - February", tripDuration: "3-4 Days",
    activities: ["Gateway of India", "Marine Drive Walk", "Bollywood Tour", "Street Food Trail", "Elephanta Caves"],
    hotels: [{ name: "Taj Mahal Palace", pricePerNight: 18000, rating: 4.9 }, { name: "Zostel Mumbai", pricePerNight: 600, rating: 4.0 }],
    highlights: ["Gateway of India", "Marine Drive", "Juhu Beach", "Elephanta Caves"],
    latitude: 19.076, longitude: 72.8777
  },
  {
    name: "Andaman Islands", country: "India", state: "Andaman & Nicobar",
    description: "A tropical paradise in the Bay of Bengal with crystal-clear waters, pristine beaches, vibrant coral reefs, and fascinating history at Cellular Jail.",
    shortDesc: "Tropical island paradise with turquoise waters.",
    image: "https://images.unsplash.com/photo-1589379072324-61f8e92e3071?w=800",
    rating: 4.8, reviewCount: 2100, budgetFrom: 15000, budgetTo: 50000,
    categories: ["Beaches", "Adventure", "Honeymoon", "Wildlife"],
    bestTimeToVisit: "October - May", tripDuration: "5-7 Days",
    activities: ["Scuba Diving", "Snorkeling", "Sea Walking", "Cellular Jail Visit", "Glass Bottom Boat"],
    hotels: [{ name: "Taj Exotica", pricePerNight: 12000, rating: 4.7 }, { name: "Eco Villa", pricePerNight: 2500, rating: 4.2 }],
    highlights: ["Radhanagar Beach", "Cellular Jail", "Neil Island", "Baratang Limestone Caves"],
    latitude: 11.7401, longitude: 92.6586
  },
  {
    name: "Jim Corbett", country: "India", state: "Uttarakhand",
    description: "India's oldest national park is a haven for wildlife enthusiasts. Home to the majestic Bengal tiger, the park offers thrilling jungle safaris amidst sal forests.",
    shortDesc: "Tiger trails in India's oldest national park.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    rating: 4.5, reviewCount: 1890, budgetFrom: 5000, budgetTo: 25000,
    categories: ["Wildlife", "Adventure", "Family Trips"],
    bestTimeToVisit: "November - June", tripDuration: "2-3 Days",
    activities: ["Jungle Safari", "Bird Watching", "Elephant Safari", "Nature Walk"],
    hotels: [{ name: "Jim's Jungle Retreat", pricePerNight: 7000, rating: 4.6 }, { name: "Camp Riverwild", pricePerNight: 4000, rating: 4.3 }],
    highlights: ["Dhikala Zone", "Bijrani Zone", "Garjia Temple", "Corbett Waterfall"],
    latitude: 29.945, longitude: 78.9
  },
  {
    name: "Dubai", country: "UAE", isInternational: true,
    description: "A futuristic city in the Arabian Desert, Dubai dazzles with the world's tallest building, luxury shopping malls, desert safaris, and world-class dining.",
    shortDesc: "Futuristic skyline meets Arabian desert luxury.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    rating: 4.7, reviewCount: 5800, budgetFrom: 40000, budgetTo: 150000,
    categories: ["Luxury", "International", "Family Trips", "Adventure"],
    bestTimeToVisit: "November - March", tripDuration: "4-6 Days",
    activities: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah", "Dhow Cruise"],
    hotels: [{ name: "Atlantis The Palm", pricePerNight: 25000, rating: 4.8 }, { name: "Rove Downtown", pricePerNight: 6000, rating: 4.3 }],
    highlights: ["Burj Khalifa", "Dubai Marina", "Gold Souk", "Miracle Garden"],
    isTrending: true, latitude: 25.2048, longitude: 55.2708
  },
  {
    name: "Bali", country: "Indonesia", isInternational: true,
    description: "The Island of the Gods is a tropical paradise with ancient temples, terraced rice paddies, world-class surfing, and vibrant arts scene.",
    shortDesc: "Island of the Gods — temples and rice terraces.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    rating: 4.8, reviewCount: 6200, budgetFrom: 35000, budgetTo: 120000,
    categories: ["Beaches", "International", "Honeymoon", "Adventure", "Solo Travel"],
    bestTimeToVisit: "April - October", tripDuration: "5-7 Days",
    activities: ["Temple Visits", "Rice Terrace Walk", "Surfing", "Snorkeling", "Monkey Forest", "Yoga Retreat"],
    hotels: [{ name: "Viceroy Bali", pricePerNight: 30000, rating: 4.9 }, { name: "Capsule Hotel Bali", pricePerNight: 1500, rating: 4.0 }],
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Uluwatu", "Seminyak Beach"],
    isTrending: true, latitude: -8.3405, longitude: 115.092
  },
  {
    name: "Thailand", country: "Thailand", isInternational: true,
    description: "The Land of Smiles offers an intoxicating blend of Bangkok's bustling streets, pristine islands, ancient temples, and legendary Thai food.",
    shortDesc: "Temples, islands, and world-famous street food.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    rating: 4.6, reviewCount: 5400, budgetFrom: 25000, budgetTo: 80000,
    categories: ["Beaches", "International", "Budget Trips", "Adventure", "Solo Travel"],
    bestTimeToVisit: "November - February", tripDuration: "5-7 Days",
    activities: ["Temple Tour", "Island Hopping", "Night Market", "Thai Massage", "Elephant Sanctuary"],
    hotels: [{ name: "Mandarin Oriental", pricePerNight: 20000, rating: 4.9 }, { name: "NapPark Hostel", pricePerNight: 800, rating: 4.2 }],
    highlights: ["Grand Palace", "Phi Phi Islands", "Chiang Mai Temples", "Phuket Beaches"],
    isTrending: true, latitude: 13.7563, longitude: 100.5018
  },
  {
    name: "Maldives", country: "Maldives", isInternational: true,
    description: "A dream destination of overwater villas, turquoise lagoons, white sand beaches, and vibrant coral reefs. The ultimate luxury tropical getaway.",
    shortDesc: "Overwater villas and turquoise lagoons.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    rating: 4.9, reviewCount: 3200, budgetFrom: 60000, budgetTo: 300000,
    categories: ["Beaches", "International", "Luxury", "Honeymoon"],
    bestTimeToVisit: "November - April", tripDuration: "4-6 Days",
    activities: ["Snorkeling", "Scuba Diving", "Underwater Restaurant", "Sunset Cruise", "Spa Treatment"],
    hotels: [{ name: "Soneva Fushi", pricePerNight: 80000, rating: 5.0 }, { name: "Maafushi Budget Stay", pricePerNight: 4000, rating: 4.0 }],
    highlights: ["Overwater Villas", "Coral Reefs", "Bioluminescent Beach", "Male Fish Market"],
    isTrending: true, latitude: 3.2028, longitude: 73.2207
  },
  {
    name: "Switzerland", country: "Switzerland", isInternational: true,
    description: "A fairy-tale country of snow-capped Alps, pristine lakes, chocolate, and watches. The Swiss rail network offers some of the world's most scenic train journeys.",
    shortDesc: "Alps, lakes, chocolate, and scenic train rides.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    rating: 4.9, reviewCount: 4100, budgetFrom: 80000, budgetTo: 250000,
    categories: ["Mountains", "International", "Honeymoon", "Luxury", "Adventure"],
    bestTimeToVisit: "June - September, December - March", tripDuration: "6-8 Days",
    activities: ["Jungfraujoch Visit", "Glacier Express", "Paragliding", "Lake Cruise", "Cheese Tasting"],
    hotels: [{ name: "Badrutt's Palace", pricePerNight: 50000, rating: 5.0 }, { name: "Youth Hostel Interlaken", pricePerNight: 3000, rating: 4.1 }],
    highlights: ["Jungfraujoch", "Interlaken", "Lake Geneva", "Zermatt & Matterhorn"],
    latitude: 46.8182, longitude: 8.2275
  },
  {
    name: "Paris", country: "France", isInternational: true,
    description: "The City of Light captivates with the iconic Eiffel Tower, world-class art at the Louvre, charming cafés, and romantic Seine river cruises.",
    shortDesc: "City of Light — art, romance, and the Eiffel Tower.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    rating: 4.7, reviewCount: 6800, budgetFrom: 70000, budgetTo: 200000,
    categories: ["International", "Honeymoon", "Luxury", "Historical"],
    bestTimeToVisit: "April - June, September - November", tripDuration: "5-7 Days",
    activities: ["Eiffel Tower", "Louvre Museum", "Seine Cruise", "Versailles Day Trip", "Montmartre Walk"],
    hotels: [{ name: "Le Bristol Paris", pricePerNight: 60000, rating: 4.9 }, { name: "Generator Paris", pricePerNight: 3500, rating: 4.0 }],
    highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "Notre-Dame"],
    latitude: 48.8566, longitude: 2.3522
  },
  {
    name: "Singapore", country: "Singapore", isInternational: true,
    description: "A futuristic city-state where stunning architecture, world-class food, lush gardens, and diverse cultures blend seamlessly. Perfect for families and couples alike.",
    shortDesc: "Futuristic gardens and world-class food culture.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    rating: 4.6, reviewCount: 4500, budgetFrom: 50000, budgetTo: 150000,
    categories: ["International", "Family Trips", "Luxury"],
    bestTimeToVisit: "February - April", tripDuration: "4-5 Days",
    activities: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island", "Universal Studios", "Hawker Centre Food"],
    hotels: [{ name: "Marina Bay Sands", pricePerNight: 25000, rating: 4.8 }, { name: "Five Stones Hostel", pricePerNight: 2000, rating: 4.1 }],
    highlights: ["Gardens by the Bay", "Marina Bay", "Sentosa", "Chinatown"],
    latitude: 1.3521, longitude: 103.8198
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Destination.deleteMany({});
    console.log("Cleared old destinations");

    await Destination.insertMany(destinations);
    console.log(`Seeded ${destinations.length} destinations successfully!`);

    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err.message);
    process.exit(1);
  }
}

seed();
