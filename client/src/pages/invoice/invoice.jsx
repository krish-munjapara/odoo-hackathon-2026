import React from 'react';
import { Download, Printer, CheckCircle, MapPin, Calendar, CreditCard, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Invoice() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <Link to="/trips" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ChevronLeft size={16} /> Back to My Trips
      </Link>

      <div className="glass-card bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 p-2 rounded-xl text-white">
                <MapPin size={24} />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Trave<span className="text-primary-blue">loop</span></span>
            </div>
            <p className="text-slate-500 font-medium">Receipt #INV-2026-0042</p>
            <p className="text-slate-400 text-sm">Issued: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-bold mb-4">
              <CheckCircle size={14} /> Paid in Full
            </div>
            <h2 className="text-slate-500 font-medium">Total Amount</h2>
            <p className="text-4xl font-bold text-slate-900">₹24,500</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Billed To</h3>
            <p className="font-bold text-slate-900 text-lg">{user?.firstName || 'Guest'} {user?.lastName || ''}</p>
            <p className="text-slate-500">{user?.city || 'India'}</p>
            <p className="text-slate-500">{user?.email || ''}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Trip Details</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={16} className="text-slate-400" /> Jaipur & Udaipur, Rajasthan
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar size={16} className="text-slate-400" /> Dec 20 - Dec 30, 2026 (10 Days)
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-8 md:p-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 font-bold text-slate-900">Description</th>
                <th className="py-4 font-bold text-slate-900 text-center">Qty</th>
                <th className="py-4 font-bold text-slate-900 text-right">Price</th>
                <th className="py-4 font-bold text-slate-900 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="py-4">
                  <p className="font-bold text-slate-900">Hotel Rajputana Palace</p>
                  <p className="text-sm">Deluxe Double Room</p>
                </td>
                <td className="py-4 text-center">5 nights</td>
                <td className="py-4 text-right">₹3,500</td>
                <td className="py-4 text-right font-medium text-slate-900">₹17,500</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4">
                  <p className="font-bold text-slate-900">Sedan Car Rental</p>
                  <p className="text-sm">With driver, AC</p>
                </td>
                <td className="py-4 text-center">3 days</td>
                <td className="py-4 text-right">₹2,500</td>
                <td className="py-4 text-right font-medium text-slate-900">₹7,500</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4">
                  <p className="font-bold text-slate-900">Amer Fort Guided Tour</p>
                  <p className="text-sm">Includes elephant ride</p>
                </td>
                <td className="py-4 text-center">2</td>
                <td className="py-4 text-right">₹1,500</td>
                <td className="py-4 text-right font-medium text-slate-900">₹3,000</td>
              </tr>
              <tr>
                <td className="py-4">
                  <p className="font-bold text-slate-900">Traveloop Concierge Fee</p>
                  <p className="text-sm">Premium itinerary planning</p>
                </td>
                <td className="py-4 text-center">1</td>
                <td className="py-4 text-right">₹999</td>
                <td className="py-4 text-right font-medium text-slate-900">₹999</td>
              </tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-3">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>₹28,999</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>GST (18%)</span>
                <span>₹5,220</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Discount</span>
                <span className="text-emerald-600">-₹9,719</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-slate-900 pt-3 border-t border-slate-200">
                <span>Total</span>
                <span>₹24,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <CreditCard size={16} /> Paid via UPI
          </div>
          <div className="flex gap-4">
            <button onClick={() => window.print()} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
              <Printer size={18} /> Print
            </button>
            <button onClick={() => window.print()} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-xl transition-colors font-medium">
              <Download size={18} /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
