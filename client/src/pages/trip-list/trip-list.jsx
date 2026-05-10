import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, MoreVertical, CloudSun, Users, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TripList() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Trips</h1>
          <p className="text-slate-400">Manage all your travel plans in one place.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" placeholder="Search trips..." className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-blue" />
          </div>
          <button className="bg-slate-800 border border-slate-700 text-white p-2 rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center aspect-square">
            <Filter size={18} />
          </button>
          <Link to="/create-trip" className="btn-primary py-2 px-4 whitespace-nowrap">
            New Trip
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-800 mb-8">
        <button className="pb-4 text-accent-cyan font-bold border-b-2 border-accent-cyan">Upcoming (2)</button>
        <button className="pb-4 text-slate-400 font-medium hover:text-white transition-colors">Past (12)</button>
        <button className="pb-4 text-slate-400 font-medium hover:text-white transition-colors">Drafts (1)</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trip Card 1 - Next Trip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden group relative border-primary-blue/30"
        >
          <div className="absolute top-4 left-4 z-10 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Clock size={12} /> Next Up (3 days)
          </div>
          <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition-colors">
            <MoreVertical size={16} />
          </button>
          
          <div className="h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-0 opacity-80"></div>
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop" alt="Tokyo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-2xl font-bold text-white mb-1">Tokyo Adventure</h3>
              <p className="text-slate-300 text-sm flex items-center gap-1"><MapPin size={14} /> Japan</p>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between mb-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar size={16} className="text-slate-500" />
                <span>Jul 15 - Jul 21, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CloudSun size={16} className="text-yellow-400" />
                <span>28°C</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <Link to="/build-itinerary" className="text-sm font-medium text-accent-cyan hover:text-white transition-colors bg-accent-cyan/10 px-4 py-2 rounded-lg">
                View Itinerary
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Trip Card 2 - Upcoming */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card overflow-hidden group relative"
        >
          <div className="absolute top-4 left-4 z-10 bg-slate-800/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            Planned
          </div>
          <button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-black/60 transition-colors">
            <MoreVertical size={16} />
          </button>
          
          <div className="h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-0 opacity-80"></div>
            <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" alt="Paris" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-2xl font-bold text-white mb-1">Paris Getaway</h3>
              <p className="text-slate-300 text-sm flex items-center gap-1"><MapPin size={14} /> France</p>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between mb-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar size={16} className="text-slate-500" />
                <span>Sep 10 - Sep 15, 2026</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <Users size={16} /> Solo
              </div>
              
              <Link to="/build-itinerary" className="text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 transition-colors px-4 py-2 rounded-lg">
                Edit
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
