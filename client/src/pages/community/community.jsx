import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Image as ImageIcon, Smile, Send, TrendingUp, Compass } from 'lucide-react';

export default function Community() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto flex gap-8">
      {/* Left Sidebar - Trends */}
      <div className="w-1/4 hidden lg:block space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-accent-cyan" size={20} />
            <h2 className="font-bold text-white">Trending Topics</h2>
          </div>
          <div className="space-y-4">
            {['#JapanAutumn', '#SoloFemaleTravel', '#BudgetBackpacking', '#DigitalNomadLife'].map((tag, i) => (
              <div key={i} className="cursor-pointer group">
                <p className="text-white font-medium group-hover:text-accent-cyan transition-colors">{tag}</p>
                <p className="text-xs text-slate-500">{12.5 - i}k posts</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 bg-gradient-to-br from-primary-blue/20 to-accent-purple/20">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="text-white" size={20} />
            <h2 className="font-bold text-white">Travel Weekly</h2>
          </div>
          <p className="text-sm text-slate-300 mb-4">Read the top stories curated by our editors this week.</p>
          <button className="w-full btn-primary py-2 text-sm">Read Now</button>
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex-1 max-w-2xl mx-auto space-y-6">
        {/* Create Post */}
        <div className="glass-card p-4">
          <div className="flex gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <textarea 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-accent-cyan transition-colors min-h-[80px]"
              placeholder="Share your travel experiences, tips, or ask for advice..."
            ></textarea>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-800">
            <div className="flex gap-2">
              <button className="text-slate-400 hover:text-accent-cyan transition-colors p-2 rounded-lg hover:bg-slate-800">
                <ImageIcon size={20} />
              </button>
              <button className="text-slate-400 hover:text-accent-purple transition-colors p-2 rounded-lg hover:bg-slate-800">
                <Smile size={20} />
              </button>
            </div>
            <button className="bg-accent-cyan hover:bg-cyan-400 text-slate-900 font-bold py-1.5 px-4 rounded-lg transition-colors flex items-center gap-2">
              Post <Send size={16} />
            </button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                  <img src={post.avatar} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{post.author}</h3>
                  <p className="text-xs text-slate-400">{post.time} • {post.location}</p>
                </div>
              </div>
              <button className="text-slate-500 hover:text-white">•••</button>
            </div>
            
            <div className="px-4 pb-3">
              <p className="text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">{post.content}</p>
              {post.tags && (
                <div className="flex gap-2 mt-2">
                  {post.tags.map(t => <span key={t} className="text-accent-cyan text-sm cursor-pointer hover:underline">#{t}</span>)}
                </div>
              )}
            </div>

            {post.img && (
              <div className="w-full max-h-[400px] overflow-hidden">
                <img src={post.img} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-4 border-t border-slate-800/50 flex justify-between items-center">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors group">
                  <Heart size={20} className={post.liked ? 'fill-pink-500 text-pink-500' : ''} />
                  <span className="text-sm font-medium group-hover:text-pink-500">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-primary-blue transition-colors group">
                  <MessageCircle size={20} />
                  <span className="text-sm font-medium group-hover:text-primary-blue">{post.comments}</span>
                </button>
              </div>
              <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar - Suggestions */}
      <div className="w-1/4 hidden xl:block space-y-6">
        <div className="glass-card p-6">
          <h2 className="font-bold text-white mb-4">Travelers to Follow</h2>
          <div className="space-y-4">
            {[
              { name: 'David Chen', handle: '@nomaddavid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop' },
              { name: 'Elena Rossi', handle: '@elenaxplores', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop' }
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={user.avatar} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">{user.name}</p>
                    <p className="text-xs text-slate-500">{user.handle}</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full hover:bg-accent-cyan hover:text-slate-900 transition-colors">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const posts = [
  {
    author: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    time: '2h ago',
    location: 'Kyoto, Japan',
    content: 'Just experienced the most serene morning at Arashiyama Bamboo Grove. Pro tip: get there before 7 AM to avoid the crowds! The light filtering through the bamboo is absolutely magical. 🎋✨',
    tags: ['Japan', 'Photography', 'TravelTips'],
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    likes: '1.2k',
    comments: '84',
    liked: true
  },
  {
    author: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
    time: '5h ago',
    location: 'Santorini, Greece',
    content: 'Can anyone recommend a good local taverna in Oia? Looking for authentic seafood away from the main tourist traps. Bonus points if it has a sunset view! 🌅',
    tags: ['Greece', 'Foodie'],
    likes: '342',
    comments: '45',
    liked: false
  }
];
