import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Car, CreditCard, MapPin, CheckCircle, Shield } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-5xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Secure Your Booking</h1>
        <div className="flex justify-between items-center relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800 -z-10"></div>
          <div className="absolute left-0 right-1/2 top-1/2 h-0.5 bg-accent-cyan -z-10"></div>
          
          {[
            { num: 1, name: 'Selection', active: true, done: true },
            { num: 2, name: 'Details', active: true, done: false },
            { num: 3, name: 'Payment', active: false, done: false }
          ].map((s) => (
            <div key={s.num} className="flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                s.done ? 'bg-accent-cyan border-accent-cyan text-slate-900' : 
                s.active ? 'bg-slate-900 border-accent-cyan text-accent-cyan' : 
                'bg-slate-900 border-slate-700 text-slate-500'
              }`}>
                {s.done ? <CheckCircle size={16} /> : s.num}
              </div>
              <span className={`text-xs font-medium ${s.active ? 'text-white' : 'text-slate-500'}`}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Form */}
        <div className="lg:w-2/3">
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-6">Booking Details</h2>
            
            <form className="space-y-6" onSubmit={e => { e.preventDefault(); setStep(3); }}>
              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Pick-up Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="date" className="glass-input pl-12 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Pick-up Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="time" className="glass-input pl-12 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-300">Select Vehicle Type</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Economy', price: '45/day', icon: Car },
                    { name: 'Premium', price: '85/day', icon: Car, selected: true },
                    { name: 'SUV', price: '120/day', icon: Car }
                  ].map((v, i) => (
                    <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      v.selected ? 'bg-primary-blue/20 border-primary-blue shadow-lg shadow-primary-blue/20' : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
                    }`}>
                      <v.icon size={24} className={`mb-2 ${v.selected ? 'text-accent-cyan' : 'text-slate-400'}`} />
                      <div className={`font-bold ${v.selected ? 'text-white' : 'text-slate-300'}`}>{v.name}</div>
                      <div className="text-sm text-slate-400">${v.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="pt-6 border-t border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4">Passenger Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="glass-input" />
                  <input type="text" placeholder="Last Name" className="glass-input" />
                  <input type="email" placeholder="Email Address" className="glass-input md:col-span-2" />
                  <input type="tel" placeholder="Phone Number" className="glass-input md:col-span-2" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield size={16} className="text-accent-emerald" /> Secure encrypted checkout
                </div>
                <button type="submit" className="btn-primary py-3 px-8">Continue to Payment</button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          <div className="glass-card p-6 border-t-4 border-primary-blue">
            <h3 className="text-lg font-bold text-white mb-4">Order Summary</h3>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                <Car size={32} className="text-slate-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Premium Sedan</h4>
                <p className="text-sm text-slate-400">Automatic • 4 Seats</p>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                  <MapPin size={12} /> Tokyo Narita Airport
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Daily Rate (3 days)</span>
                <span className="text-white">$255.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Insurance</span>
                <span className="text-white">$45.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Taxes & Fees</span>
                <span className="text-white">$28.50</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-700 flex justify-between items-center">
              <span className="font-bold text-white text-lg">Total</span>
              <span className="font-bold text-accent-cyan text-2xl">$328.50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
