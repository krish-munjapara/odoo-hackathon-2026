import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Phone, MapPin, Globe, Camera } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    return 3;
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-mesh py-12 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl glass-card p-8 md:p-12 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Create your account</h1>
          <p className="text-slate-400">Join Traveloop and start planning your next adventure today.</p>
        </div>

        <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Profile Image Upload */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 border-dashed flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-accent-cyan hover:bg-slate-700/50 transition-all cursor-pointer group">
                <Camera size={24} className="mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Upload</span>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center border-4 border-slate-900">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <User size={18} />
                </div>
                <input type="text" className="glass-input pl-11" placeholder="John" required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <User size={18} />
                </div>
                <input type="text" className="glass-input pl-11" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Mail size={18} />
                </div>
                <input type="email" className="glass-input pl-11" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Phone size={18} />
                </div>
                <input type="tel" className="glass-input pl-11" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">City</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <MapPin size={18} />
                </div>
                <input type="text" className="glass-input pl-11" placeholder="New York" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Country</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Globe size={18} />
                </div>
                <input type="text" className="glass-input pl-11" placeholder="United States" />
              </div>
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Bio / Travel Interests (Optional)</label>
              <textarea 
                className="glass-input min-h-[100px] py-3 resize-none" 
                placeholder="I love hiking and exploring new cultures..."
              ></textarea>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="glass-input pl-11 pr-11" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Password strength indicator */}
              <div className="flex gap-1 mt-2">
                <div className={`h-1.5 w-1/3 rounded-full transition-colors ${strength >= 1 ? 'bg-red-500' : 'bg-slate-700'}`}></div>
                <div className={`h-1.5 w-1/3 rounded-full transition-colors ${strength >= 2 ? 'bg-yellow-500' : 'bg-slate-700'}`}></div>
                <div className={`h-1.5 w-1/3 rounded-full transition-colors ${strength >= 3 ? 'bg-accent-emerald' : 'bg-slate-700'}`}></div>
              </div>
              <p className="text-xs text-slate-500 mt-1">Use 8+ characters with a mix of letters, numbers & symbols</p>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="glass-input pl-11 pr-11" 
                  placeholder="••••••••" 
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full btn-primary text-lg">
              Create Account
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-slate-400 relative z-10">
          Already have an account?{' '}
          <Link to="/login" className="text-accent-cyan font-medium hover:text-white transition-colors">
            Log in instead
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
