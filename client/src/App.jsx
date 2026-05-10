import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import CreateTrip from './pages/create-trip/create-trip';
import BuildItinerary from './pages/build-itinerary/build-itinerary';
import TripList from './pages/trip-list/trip-list';
import Profile from './pages/profile/profile';
import ActivitySearch from './pages/activity-search/activity-search';
import ItineraryView from './pages/itinerary-view/itinerary-view';
import Community from './pages/community/community';
import Booking from './pages/booking/booking';
import AdminAnalytics from './pages/admin-analytics/admin-analytics';
import TripNotes from './pages/trip-notes/trip-notes';
import Invoice from './pages/invoice/invoice';
import DestinationDetail from './pages/destination-detail/destination-detail';

// Layout
import Layout from './components/Layout';

import { AuthProvider, useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center text-white text-xl">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/create-trip" element={<ProtectedRoute><CreateTrip /></ProtectedRoute>} />
            <Route path="/build-itinerary" element={<ProtectedRoute><BuildItinerary /></ProtectedRoute>} />
            <Route path="/trips" element={<ProtectedRoute><TripList /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/activities" element={<ActivitySearch />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/itinerary" element={<ProtectedRoute><ItineraryView /></ProtectedRoute>} />
            <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
            <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminAnalytics /></ProtectedRoute>} />
            <Route path="/notes" element={<ProtectedRoute><TripNotes /></ProtectedRoute>} />
            <Route path="/invoice" element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
