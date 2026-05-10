import React, { useState, useEffect } from 'react';
import { FileText, Plus, MoreVertical, List, Bold, Italic, Link as LinkIcon, CheckSquare, Image as ImageIcon, Save } from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function TripNotes() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      setNotes(response.data);
      if (response.data.length > 0) {
        selectNote(response.data[0]);
      } else {
        createNewNote();
      }
    } catch (err) {
      console.error('Failed to fetch notes', err);
    }
  };

  const selectNote = (note) => {
    setActiveNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const createNewNote = () => {
    setActiveNote(null);
    setTitle('New Notebook');
    setContent('Start typing here...');
  };

  const saveNote = async () => {
    setSaving(true);
    try {
      if (activeNote) {
        await api.put(`/notes/${activeNote._id}`, { title, content });
      } else {
        const response = await api.post('/notes', { title, content });
        setActiveNote(response.data);
      }
      fetchNotes();
    } catch (err) {
      console.error('Failed to save note', err);
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto flex gap-6">
      {/* Sidebar */}
      <div className="w-64 hidden md:flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Notebooks</span>
          <button onClick={createNewNote} className="text-slate-400 hover:text-white"><Plus size={16} /></button>
        </div>
        <div className="space-y-1">
          {notes.map((doc, i) => (
            <button 
              key={doc._id} 
              onClick={() => selectNote(doc)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${activeNote?._id === doc._id ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              <FileText size={14} /> {doc.title || 'Untitled'}
            </button>
          ))}
          {notes.length === 0 && (
            <div className="text-sm text-slate-500 px-3">No notebooks yet</div>
          )}
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
          
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-slate-500">{saving ? 'Saving...' : 'Saved'}</span>
            <button onClick={saveNote} className="text-accent-cyan hover:text-white flex items-center gap-1 bg-accent-cyan/10 px-3 py-1.5 rounded-lg"><Save size={16} /> Save</button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="p-10 flex-1 overflow-y-auto">
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-4xl font-bold text-white bg-transparent border-none focus:outline-none mb-8 placeholder-slate-700"
            placeholder="Document Title"
          />
          
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[400px] text-slate-300 text-lg leading-relaxed bg-transparent border-none focus:outline-none resize-none placeholder-slate-700"
            placeholder="Start typing your notes here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
