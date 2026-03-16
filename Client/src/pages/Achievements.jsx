import React, { useState, useEffect } from 'react';
import { Award, Trophy, Target, Star, Zap, Medal } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';

export default function Achievements() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setAchievements([
      {
        id: 1,
        title: 'Best Student Organization',
        year: '2024',
        description: 'Recognized as the most active student organization on campus for consistent excellence in event management and member engagement.',
        icon: Trophy,
      },
      {
        id: 2,
        title: 'Technical Excellence Award',
        year: '2024',
        description: 'Awarded for organizing and executing high-quality technical workshops and seminars throughout the academic year.',
        icon: Target,
      },
      {
        id: 3,
        title: 'Community Impact Recognition',
        year: '2023',
        description: 'Honored for significant contributions to the community through outreach programs and educational initiatives.',
        icon: Star,
      },
      {
        id: 4,
        title: 'Innovation Leadership',
        year: '2023',
        description: 'Recognized for pioneering innovative approaches to member development and professional growth programs.',
        icon: Zap,
      },
      {
        id: 5,
        title: 'Excellence in Mentorship',
        year: '2022',
        description: 'Acknowledged for outstanding mentorship programs that guided hundreds of students toward their career goals.',
        icon: Award,
      },
      {
        id: 6,
        title: 'Distinguished Service Medal',
        year: '2022',
        description: 'Presented for exceptional service and dedication to advancing IEEE student branch mission and vision.',
        icon: Medal,
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
          title="Achievements"
          subtitle="Celebrating our milestones and recognitions"
        />
      </section>

      {/* Achievements Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

function AchievementCard({ achievement, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = achievement.icon;

  return (
    <div
      ref={ref}
      className={`p-6 border border-gray-200 rounded-lg hover:shadow-lg smooth-transition ${
        isVisible ? 'animate-slide-up active' : 'animate-slide-up'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#00629B] to-[#3B82F6] rounded-lg flex items-center justify-center mr-4">
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#00629B]">{achievement.year}</p>
          <h3 className="font-bold text-[#0F172A]">{achievement.title}</h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
}

function StatisticsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { label: '500+', description: 'Active Members' },
    { label: '50+', description: 'Annual Events' },
    { label: '100+', description: 'Industry Partners' },
    { label: '15+', description: 'Years of Excellence' },
  ];

  return (
    <section
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-[#0F172A] to-[#1a2847] rounded-lg my-16 text-white ${
        isVisible ? 'animate-scale-in active' : 'animate-scale-in'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-[#3B82F6] mb-2">{stat.label}</p>
            <p className="text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      quote: 'IEEE Student Branch transformed my engineering journey with exceptional networking opportunities and technical knowledge.',
      author: 'Rajesh Kumar',
      role: 'Electrical Engineering Student',
    },
    {
      quote: 'The mentorship and guidance I received was instrumental in securing my dream internship.',
      author: 'Priya Sharma',
      role: 'Computer Science Student',
    },
    {
      quote: 'Being part of this organization has enhanced my leadership and professional development skills significantly.',
      author: 'Arjun Patel',
      role: 'Mechanical Engineering Student',
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      ref={ref}
    >
      <h2
        className={`text-3xl font-bold text-[#0F172A] text-center mb-12 ${
          isVisible ? 'animate-slide-up active' : 'animate-slide-up'
        }`}
      >
        What Our Members Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 bg-gray-50 rounded-lg border-l-4 border-[#00629B] ${
              isVisible ? 'animate-slide-up active' : 'animate-slide-up'
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 0.15}s` : '0s',
            }}
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-[#0F172A]">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
