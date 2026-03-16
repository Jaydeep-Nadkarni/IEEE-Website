import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logos/ieee-klescet.jpg';
import sheshagiriLogo from '../assets/logos/SHESHAGIRI CAMPUS LOGO PNG.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Members', path: '/members' },
    { name: 'Events', path: '/events' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Chapters', path: '/chapters' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm smooth-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 flex-shrink-0 group">
            <img src={logo} alt="IEEE KLESCET Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="hidden sm:block h-14 w-px bg-gray-300"></div>
            <img src={sheshagiriLogo} alt="Sheshagiri Campus Logo" className="hidden sm:inline h-14 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-[#0F172A] font-medium text-sm smooth-transition relative group rounded-md hover:bg-gray-50"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#00629B] scale-x-0 group-hover:scale-x-100 smooth-transition origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-[#0F172A] smooth-transition"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-1 border-t border-gray-200 pt-4 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 text-[#0F172A] font-medium hover:bg-gray-50 rounded-lg smooth-transition text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
