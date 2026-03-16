import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logos/ieee-klescet.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C3E50] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branch Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="IEEE KLESCET Logo" className="h-12 w-auto object-contain" />
              <h3 className="text-xl font-bold">IEEE Student Branch</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students through innovation, networking, and professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-[#4B5563] smooth-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#4B5563] smooth-transition">
                  About
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-[#4B5563] smooth-transition">
                  Events
                </a>
              </li>
              <li>
                <a href="/members" className="hover:text-[#4B5563] smooth-transition">
                  Members
                </a>
              </li>
              <li>
                <a href="/achievements" className="hover:text-[#4B5563] smooth-transition">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/chapters" className="hover:text-[#4B5563] smooth-transition">
                  Chapters
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-400">
                Email: <a href="mailto:ieee@branch.edu" className="text-[#00629B] hover:underline">ieee@branch.edu</a>
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#00629B] smooth-transition">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="hover:text-[#00629B] smooth-transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-[#00629B] smooth-transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:text-[#00629B] smooth-transition">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            © {currentYear} IEEE Student Branch. All rights reserved. | Empowering Innovation Through Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
