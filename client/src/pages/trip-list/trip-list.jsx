import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, MapPin, MoreVertical, CloudSun, Users, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTrips = async () => {
    try {
      const response = await api.get('/trips');
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const deleteTrip = async (id) => {
    if (!window.confirm('Are you sure you want to delete this trip?')) return;
    try {
      await api.delete(`/trips/${id}`);
      setTrips(trips.filter(t => t._id !== id));
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  const filteredTrips = trips.filter(trip =>
    (trip.tripName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     trip.destination?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            <input
              type="text"
              placeholder="Search trips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-2 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-blue"
            />
          </div>
          <Link to="/create-trip" className="btn-primary py-2 px-4 whitespace-nowrap">
            New Trip
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-800 mb-8">
        <button className="pb-4 text-accent-cyan font-bold border-b-2 border-accent-cyan">All ({trips.length})</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-slate-400">Loading your trips...</div>
        ) : filteredTrips.length === 0 ? (
          <div className="col-span-full text-center py-12 text-slate-400">
            <p className="mb-4">{searchTerm ? 'No trips match your search.' : "You haven't planned any trips yet."}</p>
            <Link to="/create-trip" className="btn-primary py-2 px-4">Start Planning</Link>
          </div>
        ) : (
          filteredTrips.map((trip, index) => (
            <motion.div 
              key={trip._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group relative border-primary-blue/30"
            >
              <button
                onClick={() => deleteTrip(trip._id)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-red-500/20 backdrop-blur text-red-400 flex items-center justify-center hover:bg-red-500/40 hover:text-red-300 transition-colors"
                title="Delete Trip"
              >
                <Trash2 size={16} />
              </button>
              
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-0 opacity-80"></div>
                <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(trip.destination || 'travel')}`} alt={trip.destination} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-2xl font-bold text-white mb-1">{trip.tripName}</h3>
                  <p className="text-slate-300 text-sm flex items-center gap-1"><MapPin size={14} /> {trip.destination}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between mb-4 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={16} className="text-slate-500" />
                    <span>{trip.startDate ? new Date(trip.startDate).toLocaleDateString() : 'TBD'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="capitalize">{trip.budgetLevel}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Users size={16} /> <span className="capitalize">{trip.companions}</span>
                  </div>
                  
                  <Link to="/build-itinerary" className="text-sm font-medium text-accent-cyan hover:text-white transition-colors bg-accent-cyan/10 px-4 py-2 rounded-lg">
                    View Itinerary
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
