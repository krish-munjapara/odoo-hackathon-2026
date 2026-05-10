import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, User, Map, Compass, BookOpen, FileText, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Don't show nav on auth pages or admin dashboard
  const hideNav = ['/login', '/register', '/admin', '/invoice'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-mesh flex flex-col font-sans">
      {!hideNav && (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 px-6 py-4 flex justify-between items-center rounded-2xl border-white/10 shadow-2xl">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-primary-blue to-accent-cyan p-2 rounded-xl text-white">
              <Plane size={24} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Trave<span className="text-accent-cyan">loop</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" icon={<Compass size={18} />} text="Explore" />
            <NavLink to="/trips" icon={<Map size={18} />} text="My Trips" />
            <NavLink to="/notes" icon={<FileText size={18} />} text="Notes" />
            <NavLink to="/booking" icon={<BookOpen size={18} />} text="Booking" />
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-slate-300 text-sm hidden md:inline">Hi, {user.firstName}</span>
                <Link to="/profile" className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-accent-cyan flex items-center justify-center text-white font-bold uppercase">
                  {user.firstName?.[0] || 'U'}
                </Link>
                <button onClick={handleLogout} className="text-slate-400 hover:text-red-400 transition-colors" title="Logout">
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-300 hover:text-white transition-colors font-medium">Log In</Link>
                <Link to="/register" className="btn-primary py-2 px-4 rounded-lg text-sm">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      )}

      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
}

function NavLink({ to, icon, text }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
        isActive 
          ? 'bg-white/10 text-white font-medium' 
          : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
