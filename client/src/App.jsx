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

// Layout
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/build-itinerary" element={<BuildItinerary />} />
          <Route path="/trips" element={<TripList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activities" element={<ActivitySearch />} />
          <Route path="/itinerary" element={<ItineraryView />} />
          <Route path="/community" element={<Community />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<AdminAnalytics />} />
          <Route path="/notes" element={<TripNotes />} />
          <Route path="/invoice" element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
