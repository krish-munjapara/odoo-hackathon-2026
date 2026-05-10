import React from 'react';
import { FileText, Plus, MoreVertical, List, Bold, Italic, Link as LinkIcon, CheckSquare, Image as ImageIcon } from 'lucide-react';

export default function TripNotes() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto flex gap-6">
      {/* Sidebar */}
      <div className="w-64 hidden md:flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Notebooks</span>
          <button className="text-slate-400 hover:text-white"><Plus size={16} /></button>
        </div>
        <div className="space-y-1">
          {['Tokyo 2026', 'Eurotrip Ideas', 'Packing Lists', 'Flight Info'].map((doc, i) => (
            <button key={i} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${i === 0 ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}>
              <FileText size={14} /> {doc}
            </button>
          ))}
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 bg-slate-900/40 rounded-2xl border border-slate-800 min-h-[80vh] flex flex-col overflow-hidden">
        {/* Editor Toolbar */}
        <div className="h-14 border-b border-slate-800 bg-slate-900/80 flex items-center px-4 gap-2 text-slate-400">
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><Bold size={16} /></button>
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><Italic size={16} /></button>
          <div className="w-px h-4 bg-slate-700 mx-2"></div>
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><List size={16} /></button>
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><CheckSquare size={16} /></button>
          <div className="w-px h-4 bg-slate-700 mx-2"></div>
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><LinkIcon size={16} /></button>
          <button className="p-1.5 hover:bg-slate-800 hover:text-white rounded"><ImageIcon size={16} /></button>
          
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-slate-500">Saved just now</span>
            <button className="text-slate-400 hover:text-white"><MoreVertical size={16} /></button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="p-10 flex-1 overflow-y-auto">
          <input 
            type="text" 
            defaultValue="Tokyo 2026 - Master Document"
            className="w-full text-4xl font-bold text-white bg-transparent border-none focus:outline-none mb-8 placeholder-slate-700"
            placeholder="Document Title"
          />
          
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>Welcome to the ultimate planning document for the upcoming trip to Japan. We will spend most of our time in Tokyo, but plan to take a bullet train to Kyoto for a few days.</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Important Links</h2>
            <ul className="list-disc pl-5 space-y-2 text-primary-blue">
              <li><a href="#" className="hover:underline">Flight Confirmation (ANA NH111)</a></li>
              <li><a href="#" className="hover:underline">Airbnb in Shinjuku</a></li>
              <li><a href="#" className="hover:underline">JR Pass Exchange Order</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Packing Checklist</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-accent-cyan focus:ring-offset-slate-900" defaultChecked />
                <span className="group-hover:text-white transition-colors line-through text-slate-500">Passport (valid for at least 6 months)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-accent-cyan focus:ring-offset-slate-900" defaultChecked />
                <span className="group-hover:text-white transition-colors line-through text-slate-500">Universal Power Adapter</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-accent-cyan focus:ring-offset-slate-900" />
                <span className="group-hover:text-white transition-colors">Comfortable walking shoes</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-accent-cyan focus:ring-offset-slate-900" />
                <span className="group-hover:text-white transition-colors">Yen (Cash for small shops)</span>
              </label>
            </div>
            
            <p className="mt-8 text-slate-500 italic">Press '/' for commands</p>
          </div>
        </div>
      </div>
    </div>
  );
}
