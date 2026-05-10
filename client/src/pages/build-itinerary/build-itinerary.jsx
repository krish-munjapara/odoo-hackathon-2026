import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripVertical, Clock, MapPin, DollarSign, Plus, MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

export default function BuildItinerary() {
  const [days, setDays] = useState([
    {
      id: 1,
      date: 'Day 1 - Dec 20',
      budget: '4,500',
      expanded: true,
      activities: [
        { id: 'a1', time: '09:00 AM', title: 'Arrival at Jaipur Airport', location: 'Sanganer, Jaipur', type: 'transport', cost: '800' },
        { id: 'a2', time: '12:30 PM', title: 'Check-in at Hotel Rajputana', location: 'MI Road', type: 'accommodation', cost: '0' },
        { id: 'a3', time: '03:00 PM', title: 'Hawa Mahal & Jantar Mantar Visit', location: 'Old City', type: 'activity', cost: '500' },
        { id: 'a4', time: '07:00 PM', title: 'Dinner at Chokhi Dhani', location: 'Tonk Road', type: 'food', cost: '1,200' }
      ]
    },
    {
      id: 2,
      date: 'Day 2 - Dec 21',
      budget: '3,800',
      expanded: true,
      activities: [
        { id: 'a5', time: '09:00 AM', title: 'Amer Fort & Sheesh Mahal', location: 'Amer', type: 'activity', cost: '1,000' },
        { id: 'a6', time: '11:30 AM', title: 'Jal Mahal Photography', location: 'Man Sagar Lake', type: 'activity', cost: '0' },
        { id: 'a7', time: '02:00 PM', title: 'City Palace Museum', location: 'Old City', type: 'activity', cost: '700' }
      ]
    }
  ]);

  const toggleDay = (id) => {
    setDays(days.map(d => d.id === id ? { ...d, expanded: !d.expanded } : d));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-5xl mx-auto flex gap-6">
      {/* Main Timeline Section */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center mb-8 glass-card p-6 rounded-2xl border-primary-blue/30 bg-primary-blue/5">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Jaipur Heritage Trip</h1>
            <p className="text-slate-400">7 Days • Dec 20 - Dec 26 • 2 Travelers</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary py-2 px-4">Share</button>
            <button className="btn-primary py-2 px-4">Export</button>
          </div>
        </div>

        <div className="space-y-6">
          {days.map((day, dayIndex) => (
            <div key={day.id} className="glass-card overflow-hidden">
              <div 
                className="bg-slate-800/40 p-4 flex justify-between items-center cursor-pointer hover:bg-slate-800/60 transition-colors"
                onClick={() => toggleDay(day.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white font-bold">
                    D{day.id}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">{day.date}</h2>
                    <p className="text-sm text-slate-400">Budget: ₹{day.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); }}>
                    <Plus size={16} />
                  </button>
                  {day.expanded ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </div>
              </div>

              <AnimatePresence>
                {day.expanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4"
                  >
                    <div className="relative border-l-2 border-slate-700/50 ml-4 py-4 space-y-4">
                      {day.activities.map((activity, actIndex) => (
                        <div key={activity.id} className="relative pl-8 group">
                          {/* Timeline Dot */}
                          <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                          
                          <div className="glass-card p-4 hover:border-accent-cyan/50 transition-colors group-hover:shadow-lg group-hover:shadow-accent-cyan/5">
                            <div className="flex items-start gap-4">
                              <div className="cursor-grab text-slate-600 mt-1 hover:text-slate-400 active:cursor-grabbing">
                                <GripVertical size={20} />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="font-bold text-white text-lg">{activity.title}</h3>
                                  <button className="text-slate-500 hover:text-slate-300">
                                    <MoreHorizontal size={18} />
                                  </button>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                  <div className="flex items-center gap-1">
                                    <Clock size={14} className="text-accent-cyan" />
                                    <span>{activity.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin size={14} className="text-accent-purple" />
                                    <span>{activity.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign size={14} className="text-accent-emerald" />
                                    <span>{activity.cost}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <button className="flex items-center gap-2 text-sm text-accent-cyan font-medium hover:text-white transition-colors bg-accent-cyan/10 px-4 py-2 rounded-xl">
                        <Plus size={16} /> Add Activity
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <button className="w-full glass-card border-dashed border-2 border-slate-700 p-4 text-slate-400 font-medium hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all flex items-center justify-center gap-2">
            <Plus size={20} /> Add Day
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 hidden lg:flex flex-col gap-6 sticky top-24 h-[calc(100vh-120px)]">
        <div className="glass-card p-6">
          <h3 className="font-bold text-white mb-4">Budget Overview</h3>
          <div className="relative w-full h-32 mb-4">
            {/* Simple circular progress visualization */}
            <div className="absolute inset-0 rounded-full border-8 border-slate-800"></div>
            <div className="absolute inset-0 rounded-full border-8 border-accent-emerald border-t-transparent border-r-transparent transform rotate-45"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">₹8,300</span>
              <span className="text-xs text-slate-400">of ₹25,000</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Accommodation</span>
              <span className="text-white">₹0</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Transport</span>
              <span className="text-white">₹800</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Food</span>
              <span className="text-white">₹1,200</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Activities</span>
              <span className="text-white">₹500</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-white mb-4">Trip Notes</h3>
          <textarea 
            className="w-full flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-slate-300 resize-none focus:outline-none focus:border-accent-cyan/50 text-sm"
            placeholder="Add general notes, flight confirmation numbers, or packing reminders here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
