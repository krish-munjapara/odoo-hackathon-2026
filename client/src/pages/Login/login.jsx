import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Globe, Smartphone, Plane } from 'lucide-react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      console.log('Login successful:', response.data);
      login(response.data.user, response.data.token);
      navigate('/trips');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-4">
      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-accent-cyan/20 rounded-full blur-xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-5xl glass-card overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        {/* Left Side - Graphics */}
        <div className="w-full md:w-1/2 p-12 hidden md:flex flex-col justify-between relative bg-gradient-to-br from-primary-blue/20 to-accent-purple/20 border-r border-slate-700/50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-12">
              <div className="bg-gradient-to-tr from-primary-blue to-accent-cyan p-2 rounded-xl text-white">
                <Plane size={32} />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">Trave<span className="text-accent-cyan">loop</span></span>
            </Link>
            
            <h1 className="text-4xl font-bold text-white leading-tight mb-4">
              Your Journey <br/>
              <span className="text-gradient">Begins Here</span>
            </h1>
            <p className="text-slate-300 text-lg">
              Plan, track, and share your adventures with the world's most intelligent travel companion.
            </p>
          </div>
          
          <div className="relative z-10">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-emerald/20 flex items-center justify-center border border-accent-emerald/50">
                <span className="text-accent-emerald font-bold">4.9</span>
              </div>
              <div>
                <div className="flex gap-1 text-accent-emerald text-sm mb-1">
                  ★★★★★
                </div>
                <p className="text-slate-300 text-sm">"The best travel planner I've ever used."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-900/60 backdrop-blur-sm">
          <div className="mb-8 md:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-primary-blue to-accent-cyan p-1.5 rounded-lg text-white">
                <Plane size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Trave<span className="text-accent-cyan">loop</span></span>
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400 mb-8">Enter your details to access your account.</p>

          <form className="space-y-5" onSubmit={handleLogin}>
            {error && <div className="p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl">{error}</div>}
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Mail size={18} />
                </div>
                  <input 
                    type="email" 
                    className="glass-input pl-11" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-slate-300">Password</label>
                <a href="#" className="text-sm text-accent-cyan hover:text-white transition-colors">Forgot password?</a>
              </div>
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
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-primary-blue focus:ring-primary-blue focus:ring-offset-slate-900" />
              <label htmlFor="remember" className="text-sm text-slate-400">Remember me for 30 days</label>
            </div>

            <button className="w-full btn-primary flex items-center justify-center gap-2 group mt-6">
              Sign In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 flex items-center">
            <div className="flex-1 border-t border-slate-700"></div>
            <span className="px-4 text-sm text-slate-500">Or continue with</span>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="btn-secondary flex justify-center items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border-slate-700/50 text-sm">
              <Globe size={18} /> Google
            </button>
            <button className="btn-secondary flex justify-center items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border-slate-700/50 text-sm">
              <Smartphone size={18} /> GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-accent-cyan font-medium hover:text-white transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
