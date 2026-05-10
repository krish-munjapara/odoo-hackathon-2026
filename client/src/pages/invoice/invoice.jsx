import React from 'react';
import { Download, Printer, CheckCircle, MapPin, Calendar, CreditCard, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Invoice() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ChevronLeft size={16} /> Back to Dashboard
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
            <p className="text-slate-400 text-sm">Issued: July 1, 2026</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-bold mb-4">
              <CheckCircle size={14} /> Paid in Full
            </div>
            <h2 className="text-slate-500 font-medium">Total Amount</h2>
            <p className="text-4xl font-bold text-slate-900">$2,450.00</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Billed To</h3>
            <p className="font-bold text-slate-900 text-lg">Sarah Jenkins</p>
            <p className="text-slate-500">123 Market St, Suite 400</p>
            <p className="text-slate-500">San Francisco, CA 94105</p>
            <p className="text-slate-500">sarah.j@example.com</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Trip Details</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={16} className="text-slate-400" /> Tokyo & Kyoto, Japan
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar size={16} className="text-slate-400" /> Jul 15 - Jul 25, 2026 (10 Days)
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
                  <p className="font-bold text-slate-900">Shinjuku Prince Hotel</p>
                  <p className="text-sm">Premium Double Room</p>
                </td>
                <td className="py-4 text-center">5 nights</td>
                <td className="py-4 text-right">$180.00</td>
                <td className="py-4 text-right font-medium text-slate-900">$900.00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4">
                  <p className="font-bold text-slate-900">Japan Rail Pass</p>
                  <p className="text-sm">7-Day Ordinary Pass</p>
                </td>
                <td className="py-4 text-center">2</td>
                <td className="py-4 text-right">$250.00</td>
                <td className="py-4 text-right font-medium text-slate-900">$500.00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4">
                  <p className="font-bold text-slate-900">Mt. Fuji Full Day Tour</p>
                  <p className="text-sm">Includes lunch and guide</p>
                </td>
                <td className="py-4 text-center">2</td>
                <td className="py-4 text-right">$125.00</td>
                <td className="py-4 text-right font-medium text-slate-900">$250.00</td>
              </tr>
              <tr>
                <td className="py-4">
                  <p className="font-bold text-slate-900">Traveloop Concierge Fee</p>
                  <p className="text-sm">Premium itinerary planning</p>
                </td>
                <td className="py-4 text-center">1</td>
                <td className="py-4 text-right">$800.00</td>
                <td className="py-4 text-right font-medium text-slate-900">$800.00</td>
              </tr>
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mt-8">
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-3">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>$2,450.00</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Tax (0%)</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-slate-900 pt-3 border-t border-slate-200">
                <span>Total</span>
                <span>$2,450.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <CreditCard size={16} /> Paid via Visa ending in 4242
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
              <Printer size={18} /> Print
            </button>
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-xl transition-colors font-medium">
              <Download size={18} /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
