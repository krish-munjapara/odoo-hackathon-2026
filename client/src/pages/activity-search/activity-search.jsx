import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Filter, ArrowRight, Globe, Mountain, Waves, Heart, Compass, TreePine, Users, Tent, Plane, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const categoryIcons = {
  'All': <Compass size={18} />,
  'Beaches': <Waves size={18} />,
  'Mountains': <Mountain size={18} />,
  'Adventure': <Tent size={18} />,
  'Honeymoon': <Heart size={18} />,
  'Luxury': <Star size={18} />,
  'Budget Trips': <Sun size={18} />,
  'Family Trips': <Users size={18} />,
  'Solo Travel': <Compass size={18} />,
  'International': <Plane size={18} />,
  'Spiritual': <Globe size={18} />,
  'Wildlife': <TreePine size={18} />,
  'Road Trips': <MapPin size={18} />,
  'Historical': <Globe size={18} />,
};

export default function ActivitySearch() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [showInternational, setShowInternational] = useState('');

  const categories = ['All', 'Beaches', 'Mountains', 'Adventure', 'Honeymoon', 'Luxury', 'Budget Trips', 'Family Trips', 'Solo Travel', 'International', 'Spiritual', 'Wildlife', 'Road Trips', 'Historical'];

  useEffect(() => {
    fetchDestinations();
  }, [activeCategory, sortBy, showInternational]);

  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (activeCategory !== 'All') params.append('category', activeCategory);
      if (sortBy) params.append('sort', sortBy);
      if (showInternational) params.append('international', showInternational);

      const response = await api.get(`/destinations?${params.toString()}`);
      setDestinations(response.data);
    } catch (err) {
      console.error('Failed to fetch destinations', err);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDestinations();
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-emerald">Destinations</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover breathtaking places across India and the world. Find your perfect getaway.</p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="glass-card p-3 rounded-2xl max-w-3xl mx-auto flex gap-3 mb-8 shadow-2xl shadow-primary-blue/10">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destinations, countries, activities..."
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-cyan"
          />
        </div>
        <button type="submit" className="btn-primary py-3 px-6 rounded-xl flex items-center gap-2">
          <Search size={18} /> Search
        </button>
      </form>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex gap-2">
          <button onClick={() => setShowInternational('')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${showInternational === '' ? 'bg-accent-cyan text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>All</button>
          <button onClick={() => setShowInternational('false')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${showInternational === 'false' ? 'bg-accent-cyan text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>🇮🇳 India</button>
          <button onClick={() => setShowInternational('true')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${showInternational === 'true' ? 'bg-accent-cyan text-white' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>🌍 International</button>
        </div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-slate-800 border border-slate-700 text-slate-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan">
          <option value="">Sort: Trending</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-primary-blue to-accent-cyan text-white shadow-lg shadow-accent-cyan/20'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
            }`}
          >
            {categoryIcons[cat] || <MapPin size={18} />}
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-400 text-sm">{loading ? 'Searching...' : `${destinations.length} destinations found`}</p>
      </div>

      {/* Destination Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="glass-card h-80 animate-pulse bg-slate-800/50"></div>
          ))}
        </div>
      ) : destinations.length === 0 ? (
        <div className="text-center py-20">
          <Globe size={48} className="text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No destinations found</h3>
          <p className="text-slate-400">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/destination/${dest._id}`} className="block group">
                <div className="glass-card overflow-hidden rounded-2xl hover:border-accent-cyan/50 transition-all hover:shadow-lg hover:shadow-accent-cyan/10">
                  <div className="h-52 relative overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    {dest.isTrending && (
                      <div className="absolute top-3 left-3 bg-accent-cyan/90 text-white text-xs font-bold px-2 py-1 rounded-lg">🔥 Trending</div>
                    )}
                    {dest.isInternational && (
                      <div className="absolute top-3 right-3 bg-accent-purple/90 text-white text-xs font-bold px-2 py-1 rounded-lg">🌍 International</div>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                      <p className="text-slate-300 text-sm flex items-center gap-1"><MapPin size={12} /> {dest.state || dest.country}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{dest.shortDesc}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dest.categories?.slice(0, 3).map((cat, i) => (
                        <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-md">{cat}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-accent-cyan font-bold text-lg">₹{dest.budgetFrom?.toLocaleString('en-IN')}</span>
                        <span className="text-slate-500 text-sm"> onwards</span>
                      </div>
                      <div className="flex items-center gap-1 bg-accent-emerald/10 px-2 py-1 rounded-lg">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-sm font-bold">{dest.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
