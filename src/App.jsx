import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WhyJoinPage from './pages/WhyJoinPage';
import StudentVoicesPage from './pages/StudentVoicesPage';
import ExplorePage from './pages/ExplorePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why-join" element={<WhyJoinPage />} />
            <Route path="/student-voices" element={<StudentVoicesPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
