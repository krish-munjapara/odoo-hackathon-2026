import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, MapPin, Sparkles, DollarSign, Clock, Heart } from 'lucide-react';

export default function ActivitySearch() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      {/* Header & Search */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Discover Experiences</h1>
        <p className="text-slate-400 mb-8">Find the best tours, activities, and hidden gems for your next trip.</p>
        
        <div className="glass-card p-2 rounded-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search for activities, places, or categories" className="w-full bg-slate-800/50 hover:bg-slate-800/80 transition-colors border-none rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
          </div>
          <div className="flex gap-2">
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl transition-colors flex items-center gap-2 font-medium">
              <Filter size={18} /> Filters
            </button>
            <button className="btn-primary px-6 py-3 rounded-xl whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
        {['All', 'Tours', 'Food & Drink', 'Nature', 'Museums', 'Nightlife', 'Adventure'].map((cat, i) => (
          <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-full border transition-all ${i === 0 ? 'bg-white text-slate-900 border-white font-medium' : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* AI Recommendations */}
      <div className="glass-card p-6 border-accent-purple/30 bg-gradient-to-r from-slate-900 to-accent-purple/10 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-accent-purple" size={24} />
          <h2 className="text-xl font-bold text-white">Recommended for you in Tokyo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiRecommendations.map((activity, i) => (
            <ActivityCard key={i} activity={activity} featured />
          ))}
        </div>
      </div>

      {/* All Activities Grid */}
      <h2 className="text-2xl font-bold text-white mb-6">Popular Right Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allActivities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} />
        ))}
      </div>
    </div>
  );
}

function ActivityCard({ activity, featured }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card overflow-hidden group cursor-pointer flex flex-col ${featured ? 'border-accent-purple/30' : ''}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={activity.img} alt={activity.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-red-500 transition-colors z-10">
          <Heart size={16} />
        </button>
        {featured && (
          <div className="absolute top-3 left-3 bg-accent-purple text-white text-xs font-bold px-2 py-1 rounded-md z-10 shadow-lg">
            Top Match
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
          <MapPin size={12} className="text-primary-blue" /> {activity.location}
        </div>
        <h3 className="font-bold text-white mb-2 leading-tight group-hover:text-accent-cyan transition-colors line-clamp-2">
          {activity.title}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center text-yellow-400 text-sm font-bold">
            <Star size={14} className="fill-yellow-400 mr-1" /> {activity.rating}
          </div>
          <span className="text-slate-500 text-xs">({activity.reviews} reviews)</span>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">From</span>
            <span className="text-lg font-bold text-white flex items-center">
              <DollarSign size={16} className="text-accent-emerald" />{activity.price}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-md">
            <Clock size={12} /> {activity.duration}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const aiRecommendations = [
  { title: 'Tsukiji Outer Market Food Tour', location: 'Chuo City, Tokyo', rating: '4.9', reviews: '1.2k', price: '65', duration: '3h', img: 'https://images.unsplash.com/photo-1542051812871-758502109a18?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Mt Fuji Day Tour & Hakone Cruise', location: 'Shinjuku, Tokyo', rating: '4.8', reviews: '3.4k', price: '120', duration: '10h', img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Shinjuku Neon Night Photography Tour', location: 'Shinjuku, Tokyo', rating: '5.0', reviews: '840', price: '45', duration: '2h', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop' }
];

const allActivities = [
  { title: 'Robot Restaurant Show', location: 'Shinjuku, Tokyo', rating: '4.6', reviews: '2.1k', price: '75', duration: '1.5h', img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Kyoto Temples Full Day Tour', location: 'Kyoto, Japan', rating: '4.9', reviews: '4.5k', price: '95', duration: '8h', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Sushi Making Class', location: 'Tsukiji, Tokyo', rating: '4.9', reviews: '620', price: '85', duration: '2.5h', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop' },
  { title: 'Sumo Morning Practice Viewing', location: 'Ryogoku, Tokyo', rating: '4.7', reviews: '1.1k', price: '50', duration: '2h', img: 'https://images.unsplash.com/photo-1542051812871-758502109a18?q=80&w=2070&auto=format&fit=crop' }
];
