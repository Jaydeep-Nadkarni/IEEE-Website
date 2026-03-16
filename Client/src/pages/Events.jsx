import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

export default function Events() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      date: 'March 20, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'Tech Lab A',
      description: 'Comprehensive workshop on AI fundamentals and ML algorithms with hands-on projects using Python and TensorFlow.',
      speakers: ['Dr. John Smith', 'Prof. Emily Johnson'],
      attendees: 156,
    },
    {
      id: 2,
      title: 'IEEE Networking Event',
      date: 'March 25, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Auditorium Hall',
      description: 'Connect with industry professionals from leading tech companies. A great opportunity to explore career prospects.',
      speakers: ['Industry Professionals'],
      attendees: 200,
    },
    {
      id: 3,
      title: 'Tech Talks Series - Cloud Computing',
      date: 'April 5, 2026',
      time: '3:00 PM - 4:30 PM',
      location: 'Seminar Room B',
      description: 'Insights into modern cloud technologies, AWS, Azure, and GCP. Learn from industry experts.',
      speakers: ['Cloud Architect Specialist'],
      attendees: 120,
    },
    {
      id: 4,
      title: 'Robotics Bootcamp',
      date: 'April 15, 2026',
      time: '10:00 AM - 5:00 PM',
      location: 'Robotics Lab',
      description: 'Intensive training on robotics programming, hardware integration, and autonomous systems.',
      speakers: ['Robotics Team Lead'],
      attendees: 85,
    },
    {
      id: 5,
      title: 'Web Development Summit',
      date: 'April 22, 2026',
      time: '1:00 PM - 3:30 PM',
      location: 'Tech Lab B',
      description: 'Latest trends in web development including React, Node.js, and full-stack development practices.',
      speakers: ['Full Stack Developer', 'Web Architect'],
      attendees: 178,
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      date: 'May 5, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'Conference Room',
      description: 'Essential cybersecurity concepts, ethical hacking basics, and best practices for digital safety.',
      speakers: ['Cybersecurity Expert'],
      attendees: 142,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[300px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Explore our knowledge-sharing events and networking opportunities
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Events"
            subtitle="Premium learning and networking opportunities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                {/* Event Header */}
                <div className="bg-gradient-to-r from-[#4B5563] to-[#2C3E50] text-white p-6">
                  <div className="text-sm font-semibold text-white/80 mb-2">
                    📅 {event.date}
                  </div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-[#4B5563] font-bold mr-3">Clock</span>
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#4B5563] font-bold mr-3">Location</span>
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#4B5563] font-bold mr-3">Users</span>
                      <span className="text-gray-700">{event.attendees} registered</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>

                  {/* Expandable Details */}
                  {expandedEvent === event.id && (
                    <div className="border-t pt-4 mb-4">
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div>
                        <h4 className="font-semibold text-[#0F172A] mb-2">Speakers:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {event.speakers.map((speaker, idx) => (
                            <li key={idx}>• {speaker}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setExpandedEvent(
                          expandedEvent === event.id ? null : event.id
                        )
                      }
                      className="flex-1 text-[#4B5563] font-semibold hover:text-[#2C3E50] smooth-transition"
                    >
                      {expandedEvent === event.id ? 'Show Less' : 'Learn More'}
                    </button>
                    <button className="flex-1 bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold py-2 rounded smooth-transition">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Event Categories"
            subtitle="Different types of events we host"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Books', title: 'Workshops', description: 'Hands-on technical training' },
              { icon: 'Mic', title: 'Talks', description: 'Expert insights and speakers' },
              { icon: 'Users', title: 'Networking', description: 'Connect with professionals' },
              { icon: 'Trophy', title: 'Competitions', description: 'Challenge your skills' },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Don't miss out on our events
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter to stay updated on upcoming events and opportunities
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00629B]"
            />
            <button
              type="submit"
              className="bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold px-6 py-3 rounded-lg smooth-transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
