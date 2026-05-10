import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, DollarSign, CloudSun, Utensils, Camera, Building, Calendar } from 'lucide-react';

export default function ItineraryView() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar - Sticky Navigation */}
      <div className="lg:w-1/4 hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="glass-card p-6">
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop" className="w-full h-32 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Tokyo Explorer</h2>
            <p className="text-sm text-slate-400 flex items-center gap-2 mb-4"><Calendar size={14} /> Jul 15 - Jul 21</p>
            
            <div className="space-y-2 border-t border-slate-800 pt-4">
              <a href="#day1" className="block text-accent-cyan font-medium py-1">Day 1 - Arrival</a>
              <a href="#day2" className="block text-slate-400 hover:text-white transition-colors py-1">Day 2 - Shinjuku</a>
              <a href="#day3" className="block text-slate-400 hover:text-white transition-colors py-1">Day 3 - Shibuya</a>
            </div>
          </div>

          <div className="glass-card p-6 bg-gradient-to-br from-slate-900 to-primary-blue/10">
            <div className="flex items-center gap-3 mb-4">
              <CloudSun className="text-yellow-400" size={24} />
              <div>
                <h3 className="font-bold text-white text-lg">28°C</h3>
                <p className="text-sm text-slate-400">Sunny, Light Breeze</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">Weather forecast for tomorrow</p>
          </div>
        </div>
      </div>

      {/* Main Content - Timeline */}
      <div className="lg:w-3/4 space-y-12">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Detailed Itinerary</h1>
            <p className="text-slate-400">Your step-by-step guide for the trip.</p>
          </div>
          <button className="btn-secondary py-2 px-4 flex items-center gap-2">
            <Navigation size={18} /> Map View
          </button>
        </div>

        {/* Day 1 Section */}
        <section id="day1" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary-blue text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-primary-blue/30">
              <span className="text-xs uppercase opacity-80">Jul</span>
              <span className="text-lg leading-none">15</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Arrival & Acclimation</h2>
              <p className="text-slate-400">Tokyo, Japan</p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            {/* Activity 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-accent-cyan text-slate-400 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Building size={20} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 group-hover:border-accent-cyan/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Check-in at Hotel</h3>
                  <span className="text-sm font-medium text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-md">14:00</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">Shinjuku Prince Hotel. Confirmation #NRT8493</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={12} /> Shinjuku City</span>
                  <span className="flex items-center gap-1 text-accent-emerald"><DollarSign size={12} /> Pre-paid</span>
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-accent-purple text-slate-400 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Camera size={20} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 group-hover:border-accent-purple/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Shinjuku Gyoen</h3>
                  <span className="text-sm font-medium text-accent-purple bg-accent-purple/10 px-2 py-1 rounded-md">16:00</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">Explore the beautiful national garden and relax after the flight.</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={12} /> Shinjuku</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> 2 hours</span>
                </div>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 group-hover:bg-yellow-500 text-slate-400 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <Utensils size={20} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 group-hover:border-yellow-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">Dinner at Omoide Yokocho</h3>
                  <span className="text-sm font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-md">19:30</span>
                </div>
                <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" className="w-full h-32 object-cover rounded-xl mb-4" />
                <p className="text-slate-400 text-sm mb-4">Famous alleyway with tiny yakitori stands. Great for photos!</p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-accent-emerald"><DollarSign size={12} /> Est. $45</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Expense Tracker Widget at bottom */}
        <div className="glass-card p-6 border-t-4 border-accent-emerald/50 mt-12">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white">Day 1 Expenses</h3>
              <p className="text-sm text-slate-400">Total estimated cost</p>
            </div>
            <div className="text-3xl font-bold text-accent-emerald">$75.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}
