import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Sparkles, Star, ArrowRight, Compass, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 text-center max-w-4xl mx-auto mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border-accent-cyan/30 text-accent-cyan text-sm font-medium">
            <Sparkles size={16} />
            <span>AI-Powered Travel Planning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Discover Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-accent-cyan to-accent-emerald">Great Adventure</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Design personalized itineraries, explore hidden gems, and manage all your travel plans in one beautiful workspace.
          </p>

          {/* Interactive Search Bar */}
          <div className="glass-card p-3 rounded-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-3 shadow-2xl shadow-primary-blue/20">
            <div className="flex-1 relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Where to?" className="w-full bg-slate-800/50 hover:bg-slate-800/80 transition-colors border border-slate-700/50 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
            </div>
            <div className="flex-1 relative">
              <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Dates" className="w-full bg-slate-800/50 hover:bg-slate-800/80 transition-colors border border-slate-700/50 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan" />
            </div>
            <button className="btn-primary py-4 px-8 rounded-xl flex items-center justify-center gap-2">
              <Search size={20} />
              <span>Explore</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Trending Destinations */}
      <section className="px-4 py-16 max-w-7xl mx-auto relative z-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Destinations</h2>
            <p className="text-slate-400">The most popular places to visit right now</p>
          </div>
          <Link to="/activities" className="text-accent-cyan hover:text-white transition-colors flex items-center gap-1 font-medium">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trendingDestinations.map((dest, i) => (
            <motion.variants key={i} variants={itemVars}>
              <DestinationCard dest={dest} />
            </motion.variants>
          ))}
        </motion.div>
      </section>

      {/* AI Planner Banner */}
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden glass-card border border-accent-purple/30 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-primary-blue/20"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent-purple/30 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-accent-purple text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} /> AI Planner
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let AI build your dream itinerary in seconds.</h2>
            <p className="text-slate-300 mb-8 max-w-xl">
              Tell us your budget, interests, and dates. Our AI will craft a personalized day-by-day plan with optimized routes and hidden gems.
            </p>
            <Link to="/create-trip" className="btn-primary inline-flex items-center gap-2 px-8">
              Generate Itinerary <Sparkles size={18} />
            </Link>
          </div>
          
          <div className="relative z-10 w-full md:w-1/3 aspect-square max-w-[300px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-full animate-spin-slow opacity-20 blur-xl"></div>
            <div className="glass-card w-full h-full rounded-2xl flex items-center justify-center border-accent-purple/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <Compass size={64} className="text-white relative z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="glass-card hover:bg-slate-800/80 transition-colors cursor-pointer flex flex-col items-center justify-center p-6 gap-3 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <span className="font-medium text-slate-300 group-hover:text-white">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ dest }) {
  return (
    <div className="group rounded-2xl overflow-hidden relative aspect-[3/4] cursor-pointer shadow-xl shadow-black/40">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-90"></div>
      <img 
        src={dest.img} 
        alt={dest.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
        <Heart size={20} />
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform transition-transform duration-300">
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">{dest.name}</h3>
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm font-bold">{dest.rating}</span>
          </div>
        </div>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{dest.desc}</p>
        <div className="flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-white font-medium">From ${dest.price}</span>
          <button className="text-sm bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-white transition-colors">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

const trendingDestinations = [
  {
    name: 'Kyoto, Japan',
    desc: 'Ancient temples, beautiful gardens, and traditional tea houses.',
    rating: '4.9',
    price: '1,200',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Santorini, Greece',
    desc: 'Iconic white and blue architecture with stunning sunset views.',
    rating: '4.8',
    price: '1,500',
    img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Bali, Indonesia',
    desc: 'Lush landscapes, vibrant culture, and beautiful beaches.',
    rating: '4.7',
    price: '850',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop'
  },
  {
    name: 'Swiss Alps',
    desc: 'Majestic mountains, skiing, and cozy alpine villages.',
    rating: '4.9',
    price: '2,100',
    img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop'
  }
];

const categories = [
  { name: 'Beaches', icon: <MapPin size={24} /> },
  { name: 'Mountains', icon: <MapPin size={24} /> },
  { name: 'Cities', icon: <MapPin size={24} /> },
  { name: 'Historical', icon: <MapPin size={24} /> },
  { name: 'Food', icon: <MapPin size={24} /> },
  { name: 'Wildlife', icon: <MapPin size={24} /> }
];
