import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import MemberCard from '../components/MemberCard';

export default function Members() {
  const [filter, setFilter] = useState('all');

  const members = [
    // Leadership
    { name: 'Rajesh Kumar', position: 'Chairperson', category: 'leadership' },
    { name: 'Priya Sharma', position: 'Vice Chairperson', category: 'leadership' },
    { name: 'Arjun Patel', position: 'Treasurer', category: 'leadership' },
    { name: 'Neha Singh', position: 'Secretary', category: 'leadership' },

    // Technical Leads
    { name: 'Vikram Desai', position: 'Technical Lead', category: 'technical' },
    { name: 'Anjali Verma', position: 'Technical Lead', category: 'technical' },
    { name: 'Rohit Nair', position: 'Technical Lead', category: 'technical' },
    { name: 'Divya Krishnan', position: 'Technical Lead', category: 'technical' },

    // Event Coordinators
    { name: 'Aditya Gupta', position: 'Events Coordinator', category: 'events' },
    { name: 'Sanya Kapoor', position: 'Events Coordinator', category: 'events' },
    { name: 'Samir Khan', position: 'Events Coordinator', category: 'events' },
    { name: 'Isha Rastogi', position: 'Events Coordinator', category: 'events' },

    // Communications
    { name: 'Nikhil Saxena', position: 'Communications', category: 'communications' },
    { name: 'Megha Sharma', position: 'Communications', category: 'communications' },
    { name: 'Varun Iyer', position: 'Communications', category: 'communications' },
    { name: 'Pooja Nambiar', position: 'Communications', category: 'communications' },
  ];

  const categories = [
    { value: 'all', label: 'All Members' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'technical', label: 'Technical' },
    { value: 'events', label: 'Events' },
    { value: 'communications', label: 'Communications' },
  ];

  const filteredMembers =
    filter === 'all' ? members : members.filter((member) => member.category === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[300px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Members</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Meet the talented team driving our student branch forward
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-semibold smooth-transition ${
                  filter === category.value
                    ? 'bg-[#4B5563] text-white'
                    : 'bg-gray-200 text-[#2C3E50] hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${(index % 4) * 0.1}s` }}>
                <MemberCard
                  name={member.name}
                  position={member.position}
                />
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No members found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Become Part of Our Community"
            subtitle="Join IEEE Student Branch and grow with us"
          />

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you're passionate about cutting-edge technology, interested in professional development, or simply looking to connect with like-minded peers, IEEE Student Branch offers the perfect platform for your growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">Books</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Learn Skills
              </h3>
              <p className="text-gray-600">
                Develop technical expertise through workshops and training programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">Users</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Network
              </h3>
              <p className="text-gray-600">
                Connect with industry professionals and fellow students
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">Rocket</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
                Grow Career
              </h3>
              <p className="text-gray-600">
                Access internships and career advancement opportunities
              </p>
            </div>
          </div>

          <button className="bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold px-8 py-3 rounded-lg smooth-transition">
            Join IEEE Today
          </button>
        </div>
      </section>
    </div>
  );
}
