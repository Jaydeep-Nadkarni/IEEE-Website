import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Chapters from './pages/Chapters';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-poppins">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/chapters" element={<Chapters />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
