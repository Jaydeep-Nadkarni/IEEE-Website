import React, { useState, useEffect } from 'react';
import { MapPin, Users, Briefcase, Globe, Building2, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';

export default function Chapters() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    setChapters([
      {
        id: 1,
        name: 'Student Branch',
        location: 'Main Campus',
        members: 450,
        founded: '2009',
        focus: 'General Membership',
        email: 'ieee-student@university.edu',
        icon: Building2,
      },
      {
        id: 2,
        name: 'Computer Society',
        location: 'Engineering Block',
        members: 280,
        founded: '2010',
        focus: 'Software & Computing',
        email: 'cs@university.edu',
        icon: Globe,
      },
      {
        id: 3,
        name: 'Power & Energy Society',
        location: 'Energy Lab',
        members: 180,
        founded: '2012',
        focus: 'Power Systems',
        email: 'pes@university.edu',
        icon: Briefcase,
      },
      {
        id: 4,
        name: 'Robotics & Automation',
        location: 'Innovation Hub',
        members: 220,
        founded: '2015',
        focus: 'Robotics & Innovation',
        email: 'robotics@university.edu',
        icon: Users,
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section
        ref={headerRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${
          headerVisible ? 'animate-slide-up active' : 'animate-slide-up'
        }`}
      >
        <SectionHeader
          title="IEEE Chapters"
          subtitle="Explore our diverse technical chapters and societies"
        />
      </section>

      {/* Chapters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </section>

      {/* Chapter Benefits */}
      <ChapterBenefitsSection />

      {/* Get Involved */}
      <GetInvolvedSection />
    </div>
  );
}

function ChapterCard({ chapter, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = chapter.icon;

  return (
    <div
      ref={ref}
      className={`p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg hover:shadow-lg smooth-transition ${
        isVisible ? 'animate-slide-up active' : 'animate-slide-up'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0F172A] mb-2">
            {chapter.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin size={16} className="mr-2 text-[#00629B]" />
            {chapter.location}
          </div>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-[#00629B] to-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon size={24} className="text-white" />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-700">
          <Users size={16} className="mr-3 text-[#3B82F6]" />
          <span className="text-sm">
            <strong>{chapter.members}</strong> Active Members
          </span>
        </div>
        <div className="flex items-center text-gray-700">
          <Building2 size={16} className="mr-3 text-[#3B82F6]" />
          <span className="text-sm">
            Founded in <strong>{chapter.founded}</strong>
          </span>
        </div>
        <div className="flex items-center text-gray-700">
          <Briefcase size={16} className="mr-3 text-[#3B82F6]" />
          <span className="text-sm">Focus: {chapter.focus}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Join our community of passionate engineers and innovators.
      </p>

      <div className="pt-4 border-t border-gray-200">
        <a
          href={`mailto:${chapter.email}`}
          className="text-[#00629B] hover:text-[#3B82F6] text-sm font-semibold flex items-center smooth-transition"
        >
          <Phone size={14} className="mr-2" />
          Get in Touch
        </a>
      </div>
    </div>
  );
}

function ChapterBenefitsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const benefits = [
    {
      title: 'Technical Workshops',
      description: 'Regular hands-on training sessions and skill development programs',
    },
    {
      title: 'Networking Events',
      description: 'Connect with industry professionals and like-minded students',
    },
    {
      title: 'Career Development',
      description: 'Access to internships, job opportunities, and mentorship programs',
    },
    {
      title: 'Project Collaboration',
      description: 'Work on real-world projects and build your portfolio',
    },
    {
      title: 'Leadership Training',
      description: 'Develop leadership and management skills through active participation',
    },
    {
      title: 'Innovation Hub',
      description: 'Access to resources and support for your innovative ideas',
    },
  ];

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-16"
    >
      <h2
        className={`text-3xl font-bold text-[#0F172A] text-center mb-12 ${
          isVisible ? 'animate-slide-up active' : 'animate-slide-up'
        }`}
      >
        Chapter Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md smooth-transition ${
              isVisible ? 'animate-slide-up active' : 'animate-slide-up'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.08}s` : '0s',
            }}
          >
            <h3 className="font-bold text-[#00629B] mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GetInvolvedSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-[#0F172A] to-[#1a2847] rounded-lg text-white ${
        isVisible ? 'animate-scale-in active' : 'animate-scale-in'
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join one of our chapters today and become part of a vibrant community of engineers
          and innovators dedicated to professional growth and technical excellence.
        </p>
        <button className="bg-[#00629B] hover:bg-[#004d75] text-white font-bold py-3 px-8 rounded-lg smooth-transition">
          Join a Chapter
        </button>
      </div>
    </section>
  );
}
