import React from 'react';
import { motion } from 'framer-motion';
import { Map, Plane, Star, Award, Edit3, Settings, MapPin, Calendar, Heart } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-5xl mx-auto">
      {/* Profile Header */}
      <div className="glass-card relative overflow-hidden mb-8">
        <div className="h-48 bg-gradient-to-r from-primary-blue via-accent-purple to-accent-cyan opacity-40"></div>
        <button className="absolute top-4 right-4 glass-card p-2 text-white hover:bg-white/20 transition-colors rounded-xl">
          <Edit3 size={18} />
        </button>
        
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16 relative z-10">
            <div className="w-32 h-32 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 mb-2">
              <h1 className="text-3xl font-bold text-white">Sarah Jenkins</h1>
              <p className="text-slate-400 flex items-center gap-2 mt-1">
                <MapPin size={16} /> San Francisco, CA • Member since 2024
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="btn-secondary py-2 px-6 flex-1 md:flex-none flex justify-center items-center gap-2">
                <Settings size={18} /> Settings
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-slate-300 max-w-2xl">
            Avid explorer and photographer. Always on the lookout for hidden gems, great coffee, and stunning viewpoints. Next goal: visit all continents!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Stats & Badges */}
        <div className="space-y-8">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6">Travel Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-accent-cyan mb-2 flex justify-center"><Map size={24} /></div>
                <div className="text-2xl font-bold text-white mb-1">12</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Countries</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-accent-purple mb-2 flex justify-center"><Plane size={24} /></div>
                <div className="text-2xl font-bold text-white mb-1">34</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Cities</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-primary-blue mb-2 flex justify-center"><Star size={24} /></div>
                <div className="text-2xl font-bold text-white mb-1">4.9</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Avg Rating</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-accent-emerald mb-2 flex justify-center"><Heart size={24} /></div>
                <div className="text-2xl font-bold text-white mb-1">128</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Saved</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex justify-between items-center">
              Achievements
              <span className="text-sm font-normal text-accent-cyan cursor-pointer">View All</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Globetrotter Gold</h3>
                  <p className="text-xs text-slate-400">Visited 10+ countries</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">City Explorer</h3>
                  <p className="text-xs text-slate-400">Visited 30+ cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map & Recent */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-6 h-80 flex flex-col">
            <h2 className="text-xl font-bold text-white mb-4">Travel Map</h2>
            <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden relative flex items-center justify-center">
              {/* Placeholder for actual interactive map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale"></div>
              <div className="relative z-10 flex flex-col items-center">
                <Map size={48} className="text-slate-500 mb-2" />
                <p className="text-slate-400 font-medium">Interactive Map view</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent Trips</h2>
            <div className="space-y-4">
              {[
                { name: 'Swiss Alps Hiking', date: 'Mar 2026', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop' },
                { name: 'Rome Weekend', date: 'Jan 2026', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop' }
              ].map((trip, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer border border-transparent hover:border-slate-700">
                  <img src={trip.img} className="w-16 h-16 rounded-lg object-cover" alt={trip.name} />
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{trip.name}</h3>
                    <p className="text-sm text-slate-400 flex items-center gap-1 mt-1"><Calendar size={12} /> {trip.date}</p>
                  </div>
                  <button className="text-accent-cyan text-sm font-medium hover:text-white transition-colors mr-2">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
