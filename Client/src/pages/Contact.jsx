import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[300px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get in touch with IEEE Student Branch. We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md smooth-transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00629B] to-[#3B82F6] text-white rounded-lg flex items-center justify-center mr-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Email</h3>
                </div>
                <p className="text-gray-600">
                  <a href="mailto:ieee@branch.edu" className="text-[#00629B] hover:text-[#3B82F6] font-medium smooth-transition">
                    ieee@klescet.ac.in
                  </a>
                </p>
              </div>

              {/* Location */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md smooth-transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0F172A] to-[#00629B] text-white rounded-lg flex items-center justify-center mr-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Location</h3>
                </div>
                <p className="text-gray-600">
                  KLE Technological University KLE Dr. M.S. Sheshgiri Campus,
                  <br />
                  Angol Main Road, Udyambag,
                  <br />
                   Belagavi, Karnataka 590008
                </p>
              </div>

              {/* Follow Us */}
              <div className="bg-gradient-to-br from-[#00629B]/5 to-[#3B82F6]/5 p-6 rounded-lg border border-[#00629B]/20">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center hover:bg-[#3B82F6] smooth-transition">
                    <FaFacebook size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center hover:bg-[#3B82F6] smooth-transition">
                    <FaTwitter size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center hover:bg-[#3B82F6] smooth-transition">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center hover:bg-[#3B82F6] smooth-transition">
                    <FaInstagram size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-[#2C3E50] mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fadeIn">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#2C3E50] font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4B5563] focus:ring-1 focus:ring-[#4B5563] smooth-transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#2C3E50] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4B5563] focus:ring-1 focus:ring-[#4B5563] smooth-transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-[#2C3E50] font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4B5563] focus:ring-1 focus:ring-[#4B5563] smooth-transition"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#2C3E50] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4B5563] focus:ring-1 focus:ring-[#4B5563] smooth-transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold py-3 rounded-lg smooth-transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions"
          />

          <div className="space-y-4">
            {[
              {
                q: 'How do I join IEEE Student Branch?',
                a: 'You can join by filling out the membership form available in our office or on our website. Membership is open to all students interested in technology and professional development.',
              },
              {
                q: 'When are meetings held?',
                a: 'Our general meetings are held every Monday at 3:00 PM in the Engineering Building, Room 405. Check our events calendar for special meetings.',
              },
              {
                q: 'Are there membership fees?',
                a: 'IEEE Student Branch membership includes IEEE global benefits. Annual fees are nominal and provide access to publications, events, and professional development resources.',
              },
              {
                q: 'Can I participate in events if I\'m not a member?',
                a: 'Yes! While many benefits are reserved for members, most of our public events are open to all students. Check individual event details for registration requirements.',
              },
            ].map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg p-4 hover:border-[#4B5563] smooth-transition">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#2C3E50] group-open:text-[#4B5563]">
                  <span>{faq.q}</span>
                  <span className="text-2xl">+</span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
