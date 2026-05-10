import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const screens = [
  'Login',
  'Register',
  'Home',
  'CreateTrip',
  'BuildItinerary',
  'TripList',
  'Profile',
  'ActivitySearch',
  'ItineraryView',
  'Community',
  'Booking',
  'AdminAnalytics',
  'TripNotes',
  'Invoice'
];

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

screens.forEach(screen => {
  const content = `import React from 'react';
import { motion } from 'framer-motion';

export default function ${screen}() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#0F172A] text-slate-200 p-8 pt-24"
    >
      <h1 className="text-4xl font-bold text-white mb-6">${screen} Page</h1>
      <p className="text-slate-400">Content for ${screen} goes here.</p>
    </motion.div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, `${screen}.jsx`), content);
});

console.log('Created screens:', screens.join(', '));
