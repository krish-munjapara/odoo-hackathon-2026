import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Wallet, Sparkles, Navigation, Globe, Plus } from 'lucide-react';

export default function CreateTrip() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Plan Your Journey</h1>
        <p className="text-slate-400">Let's craft the perfect itinerary for your next adventure.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="glass-card p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Trip Details</h2>
              <div className="text-sm font-medium text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full">
                Step {step} of 3
              </div>
            </div>

            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Trip Name</label>
                <input type="text" className="glass-input text-lg" placeholder="e.g. Summer in Tokyo" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Destination</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="text" className="glass-input pl-12" placeholder="Where are you going?" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Start Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="date" className="glass-input pl-12 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">End Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="date" className="glass-input pl-12 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-sm font-medium text-slate-300">Travel Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Relaxation', 'Adventure', 'Cultural', 'Nightlife', 'Nature', 'Food'].map((style, i) => (
                    <button key={i} className={`p-3 rounded-xl border transition-all text-sm font-medium ${i === 1 ? 'bg-primary-blue/20 border-primary-blue text-white' : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white'}`}>
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Companions</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <select className="glass-input pl-12 appearance-none">
                      <option value="solo" className="bg-slate-900">Solo</option>
                      <option value="couple" className="bg-slate-900">Couple</option>
                      <option value="family" className="bg-slate-900">Family</option>
                      <option value="friends" className="bg-slate-900">Friends</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Budget Level</label>
                  <div className="relative">
                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <select className="glass-input pl-12 appearance-none">
                      <option value="budget" className="bg-slate-900">Budget ($)</option>
                      <option value="moderate" className="bg-slate-900">Moderate ($$)</option>
                      <option value="luxury" className="bg-slate-900">Luxury ($$$)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full btn-primary text-lg flex justify-center items-center gap-2">
                  Generate Magic Itinerary <Sparkles size={20} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Right Suggestions Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 space-y-6"
        >
          <div className="glass-card p-6 border-accent-purple/30 bg-gradient-to-br from-slate-900/80 to-accent-purple/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">AI Recommendations</h3>
                <p className="text-slate-400 text-sm">Based on your preferences</p>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              {[
                { name: 'Mount Fuji Day Tour', type: 'Adventure', price: '120', img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop' },
                { name: 'Traditional Tea Ceremony', type: 'Cultural', price: '45', img: 'https://images.unsplash.com/photo-1542051812871-758502109a18?q=80&w=2070&auto=format&fit=crop' },
                { name: 'Sushi Making Class', type: 'Food', price: '85', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop' }
              ].map((activity, idx) => (
                <div key={idx} className="group glass-card overflow-hidden flex items-center gap-4 p-3 hover:bg-slate-800/80 transition-colors cursor-pointer">
                  <img src={activity.img} alt={activity.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-accent-cyan transition-colors">{activity.name}</h4>
                    <p className="text-slate-400 text-sm">{activity.type}</p>
                    <p className="text-white font-medium mt-1">${activity.price}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-white transition-all mr-2">
                    <Plus size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
