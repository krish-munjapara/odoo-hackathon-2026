import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, DollarSign, Activity, TrendingUp, Calendar, Map, Bell, Search, Menu } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 border-r border-slate-800 bg-slate-900/50 hidden lg:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="text-accent-cyan" /> Traveloop <span className="text-xs bg-primary-blue px-2 py-0.5 rounded text-white font-normal">Admin</span>
          </h2>
        </div>
        <div className="p-4 flex-1 space-y-2">
          {[
            { icon: BarChart3, name: 'Overview', active: true },
            { icon: Users, name: 'Users' },
            { icon: Map, name: 'Destinations' },
            { icon: DollarSign, name: 'Revenue' },
            { icon: Calendar, name: 'Bookings' }
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-primary-blue/10 text-primary-blue font-medium' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              <item.icon size={18} /> {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-400"><Menu size={24} /></button>
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input type="text" placeholder="Search analytics..." className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-accent-cyan" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-slate-400">Welcome back, Admin. Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg">
              <button className="px-3 py-1 text-sm bg-slate-700 text-white rounded-md shadow">Today</button>
              <button className="px-3 py-1 text-sm text-slate-400 hover:text-white">7d</button>
              <button className="px-3 py-1 text-sm text-slate-400 hover:text-white">30d</button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Revenue', value: '₹4,52,319', change: '+20.1%', positive: true, icon: DollarSign, color: 'text-accent-emerald' },
              { title: 'Active Users', value: '2,405', change: '+15.2%', positive: true, icon: Users, color: 'text-primary-blue' },
              { title: 'New Bookings', value: '1,234', change: '+4.5%', positive: true, icon: Calendar, color: 'text-accent-purple' },
              { title: 'Bounce Rate', value: '24.5%', change: '-2.4%', positive: true, icon: Activity, color: 'text-accent-cyan' }
            ].map((kpi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-slate-800 ${kpi.color}`}>
                    <kpi.icon size={20} />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${kpi.positive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                    <TrendingUp size={12} /> {kpi.change}
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">{kpi.title}</h3>
                <p className="text-3xl font-bold text-white">{kpi.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Revenue Analytics</h3>
                <button className="text-slate-400 hover:text-white"><MoreHorizontal size={20} /></button>
              </div>
              <div className="flex-1 min-h-[300px] flex items-end justify-between gap-2 pt-10 relative">
                {/* Simulated Chart Bars */}
                {[40, 70, 45, 90, 65, 85, 100, 60, 40, 75, 50, 80].map((h, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-2 group">
                    <div className="w-full bg-slate-800 rounded-t-sm h-full relative flex items-end">
                      <div 
                        className="w-full bg-primary-blue rounded-t-sm transition-all duration-500 group-hover:bg-accent-cyan" 
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-500">Jan</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col">
              <h3 className="text-lg font-bold text-white mb-6">Recent Bookings</h3>
              <div className="space-y-6 flex-1">
                {[
                  { user: 'Priya Sharma', action: 'Booked a trip to Goa', time: 'Just now', amount: '₹12,500' },
                  { user: 'Rahul Patel', action: 'Cancelled Manali tour', time: '2h ago', amount: '-₹4,500' },
                  { user: 'Ananya Gupta', action: 'Booked Kerala houseboat', time: '5h ago', amount: '₹18,200' },
                  { user: 'Vikram Singh', action: 'Upgraded hotel room', time: '12h ago', amount: '₹3,500' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold shrink-0">
                        {item.user.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">{item.user}</p>
                        <p className="text-xs text-slate-400 mb-1">{item.action}</p>
                        <p className="text-[10px] text-slate-500">{item.time}</p>
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${item.amount.startsWith('-') ? 'text-red-400' : 'text-emerald-400'}`}>
                      {item.amount}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 mt-4 text-sm font-medium text-primary-blue hover:text-accent-cyan transition-colors border-t border-slate-800">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy icon to fix undefined error
function MoreHorizontal(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
}
