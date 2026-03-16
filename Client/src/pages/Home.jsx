import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';
import MemberCard from '../components/MemberCard';

export default function Home() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: eventsRef, isVisible: eventsVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const featuredEvents = [
    {
      id: 1,
      title: 'AI & Machine Learning Workshop',
      date: 'March 20, 2026',
      description: 'Learn the fundamentals of AI and ML with hands-on projects',
    },
    {
      id: 2,
      title: 'IEEE Networking Event',
      date: 'March 25, 2026',
      description: 'Connect with industry professionals and fellow members',
    },
    {
      id: 3,
      title: 'Tech Talks Series',
      date: 'April 5, 2026',
      description: 'Insights from leading tech experts in the industry',
    },
  ];

  const teamMembers = [
    { name: 'Rajesh Kumar', position: 'Chairperson' },
    { name: 'Priya Sharma', position: 'Vice Chairperson' },
    { name: 'Arjun Patel', position: 'Treasurer' },
    { name: 'Neha Singh', position: 'Secretary' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                IEEE Student Branch
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                Empowering the next generation of engineers and innovators
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-xl">
                Discover, learn, and grow with our community of passionate students dedicated to advancing technology and engineering excellence.
              </p>
              <Link
                to="/events"
                className="inline-block bg-[#6B8CAE] hover:bg-white hover:text-[#4B5563] text-white font-semibold px-8 py-4 rounded-lg smooth-transition"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white" ref={headerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${headerVisible ? 'animate-slide-left active' : 'animate-slide-left'}`}>
            {/* Left Content */}
            <div>
              <SectionHeader
                title="About IEEE"
                subtitle="Building Futures Through Technology"
                centered={false}
              />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for humanity.
              </p>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Our Student Branch is committed to providing a platform for students to enhance their technical skills, network with industry professionals, and contribute to innovative projects that shape the future.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold px-8 py-3 rounded-lg smooth-transition"
              >
                Learn More
              </Link>
            </div>

            {/* Right Features */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00629B] hover:shadow-md smooth-transition">
                <div className="flex items-center mb-3">
                  <BookOpen size={24} className="text-[#00629B] mr-3" />
                  <h3 className="text-xl font-semibold text-[#2C3E50]">
                    Learn & Develop
                  </h3>
                </div>
                <p className="text-gray-600">
                  Access workshops, webinars, and training programs to enhance your technical expertise.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#3B82F6] hover:shadow-md smooth-transition">
                <div className="flex items-center mb-3">
                  <Users size={24} className="text-[#3B82F6] mr-3" />
                  <h3 className="text-xl font-semibold text-[#2C3E50]">
                    Network & Connect
                  </h3>
                </div>
                <p className="text-gray-600">
                  Build meaningful connections with peers, mentors, and industry professionals.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0F172A] hover:shadow-md smooth-transition">
                <div className="flex items-center mb-3">
                  <Briefcase size={24} className="text-[#0F172A] mr-3" />
                  <h3 className="text-xl font-semibold text-[#2C3E50]">
                    Career Growth
                  </h3>
                </div>
                <p className="text-gray-600">
                  Explore internship opportunities and advance your professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-50" ref={eventsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Featured Events"
            subtitle="Upcoming opportunities to learn, connect, and grow"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-lg shadow-md p-6 card-hover ${
                  eventsVisible ? 'animate-slide-up active' : 'animate-slide-up'
                }`}
                style={{
                  transitionDelay: eventsVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                <div className="inline-block bg-[#4B5563]/10 text-[#4B5563] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <Link
                  to="/events"
                  className="text-[#4B5563] font-semibold hover:text-[#2C3E50] smooth-transition inline-flex items-center"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Preview */}
      <section className="py-20 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Leadership"
            subtitle="Meet the dedicated team steering our branch"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`${
                  teamVisible ? 'animate-slide-up active' : 'animate-slide-up'
                }`}
                style={{
                  transitionDelay: teamVisible ? `${index * 0.08}s` : '0s',
                }}
              >
                <MemberCard name={member.name} position={member.position} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/members"
              className="inline-block bg-[#4B5563] hover:bg-[#2C3E50] text-white font-semibold px-8 py-3 rounded-lg smooth-transition"
            >
              View All Members
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
