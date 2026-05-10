import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Clock, ArrowLeft, Heart, Share2, IndianRupee, ChevronRight, Sun, Users, Tent, Hotel } from 'lucide-react';
import api from '../../services/api';

export default function DestinationDetail() {
  const { id } = useParams();
  const [dest, setDest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchDest = async () => {
      try {
        const res = await api.get(`/destinations/${id}`);
        setDest(res.data);
      } catch (err) {
        console.error('Failed to fetch destination', err);
      }
      setLoading(false);
    };
    fetchDest();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!dest) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-2xl font-bold text-white">Destination not found</h2>
        <Link to="/activities" className="text-accent-cyan mt-4 inline-block">← Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
          <Link to="/activities" className="bg-slate-900/60 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <ArrowLeft size={18} /> Back
          </Link>
          <div className="flex gap-2">
            <button className="bg-slate-900/60 backdrop-blur-md text-white p-2 rounded-xl hover:bg-red-500/80 transition-colors">
              <Heart size={20} />
            </button>
            <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="bg-slate-900/60 backdrop-blur-md text-white p-2 rounded-xl hover:bg-slate-800 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 z-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {dest.categories?.map((cat, i) => (
              <span key={i} className="text-xs bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full">{cat}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{dest.name}</h1>
          <p className="text-slate-300 flex items-center gap-2 text-lg">
            <MapPin size={18} /> {dest.state ? `${dest.state}, ${dest.country}` : dest.country}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Star size={20} className="text-yellow-400" />, label: 'Rating', value: `${dest.rating} ★`, sub: `${dest.reviewCount?.toLocaleString('en-IN')} reviews` },
            { icon: <IndianRupee size={20} className="text-accent-emerald" />, label: 'Budget', value: `₹${dest.budgetFrom?.toLocaleString('en-IN')}`, sub: `to ₹${dest.budgetTo?.toLocaleString('en-IN')}` },
            { icon: <Calendar size={20} className="text-accent-cyan" />, label: 'Best Time', value: dest.bestTimeToVisit || 'Year Round', sub: '' },
            { icon: <Clock size={20} className="text-accent-purple" />, label: 'Duration', value: dest.tripDuration || '3-5 Days', sub: 'Recommended' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="glass-card p-4 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-white font-bold text-sm">{stat.value}</p>
              {stat.sub && <p className="text-slate-500 text-xs mt-0.5">{stat.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex gap-1 bg-slate-900/50 p-1 rounded-xl mb-8 overflow-x-auto">
          {['overview', 'activities', 'hotels', 'highlights'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap ${activeTab === tab ? 'bg-primary-blue text-white shadow' : 'text-slate-400 hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-4">About {dest.name}</h2>
                <p className="text-slate-300 leading-relaxed text-lg">{dest.description}</p>
              </motion.div>
            )}

            {activeTab === 'activities' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Tent size={24} className="text-accent-cyan" /> Things To Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dest.activities?.map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-accent-cyan/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan font-bold text-sm shrink-0">{i + 1}</div>
                      <span className="text-white font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'hotels' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Hotel size={24} className="text-accent-purple" /> Where To Stay</h2>
                <div className="space-y-4">
                  {dest.hotels?.map((hotel, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-accent-purple/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple to-primary-blue flex items-center justify-center text-white font-bold">{hotel.name?.[0]}</div>
                        <div>
                          <h3 className="text-white font-bold">{hotel.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-yellow-400">
                            <Star size={12} className="fill-yellow-400" /> {hotel.rating}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-accent-emerald font-bold text-lg">₹{hotel.pricePerNight?.toLocaleString('en-IN')}</p>
                        <p className="text-slate-500 text-xs">per night</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'highlights' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Sun size={24} className="text-yellow-400" /> Must-See Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dest.highlights?.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                        <Star size={18} />
                      </div>
                      <span className="text-white font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Quick Book Card */}
            <div className="glass-card p-6 border-t-4 border-accent-cyan sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">Plan Your Trip</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Starting from</span>
                  <span className="text-accent-cyan font-bold text-xl">₹{dest.budgetFrom?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-white">{dest.tripDuration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Best Time</span>
                  <span className="text-white">{dest.bestTimeToVisit}</span>
                </div>
              </div>
              <Link to="/create-trip" className="btn-primary w-full py-3 text-center flex items-center justify-center gap-2">
                Create Trip <ChevronRight size={18} />
              </Link>
              <Link to="/booking" className="btn-secondary w-full py-3 text-center flex items-center justify-center gap-2 mt-3">
                Book Now <ChevronRight size={18} />
              </Link>
            </div>

            {/* Categories */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {dest.categories?.map((cat, i) => (
                  <Link key={i} to={`/activities`} className="text-xs bg-slate-800 text-accent-cyan px-3 py-1.5 rounded-lg hover:bg-accent-cyan/20 transition-colors">{cat}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
