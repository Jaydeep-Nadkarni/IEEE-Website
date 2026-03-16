import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[400px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About IEEE</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover the mission, vision, and impact of IEEE Student Branch
          </p>
        </div>
      </section>

      {/* About IEEE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">About IEEE</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                The Institute of Electrical and Electronics Engineers (IEEE) is the world's leading professional association for the advancement of technology. Founded in 1963, IEEE has been at the forefront of technological innovation and development for over six decades.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                With over 400,000 members worldwide, IEEE is dedicated to advancing the theory and practice of electrical, electronics, and computer engineering. The organization publishes over a quarter of the world's technical papers in these fields.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                IEEE provides forums for technical innovation, professional advancement, and global networking opportunities for its members.
              </p>
            </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#4B5563]/10 to-transparent p-8 rounded-lg border-l-4 border-[#4B5563]">
                <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">About IEEE</h2>
          </div>
        </div>
        </div>
      </section>

      {/* About Our Student Branch */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Student Branch"
            subtitle="Leading innovation and excellence at our institution"
          />

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The IEEE Student Branch at our institution is a dynamic community of passionate students dedicated to advancing technology, fostering innovation, and creating positive change through engineering. Since our establishment, we have been instrumental in providing platforms for students to develop their technical skills, explore career opportunities, and build lasting networks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                  <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                    <span className="w-10 h-10 bg-[#4B5563] text-white rounded-full flex items-center justify-center mr-3">
                      Books
                    </span>
                    Student-Centric Approach
                  </h3>
                <p className="text-gray-600">
                  We design all our programs and events with students in mind, focusing on their learning objectives and career aspirations. Our initiatives are tailored to bridge the gap between academic learning and industry application.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                    <span className="w-10 h-10 bg-[#6B8CAE] text-white rounded-full flex items-center justify-center mr-3">
                      Star
                    </span>
                    Excellence Focus
                  </h3>
                <p className="text-gray-600">
                  We are committed to excellence in every endeavor, from the technical workshops we conduct to the events we organize. Our dedication to quality ensures meaningful experiences for all participants.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                    <span className="w-10 h-10 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mr-3">
                      Users
                    </span>
                    Community Building
                  </h3>
                <p className="text-gray-600">
                  We foster a vibrant community where students from diverse backgrounds come together to collaborate, learn, and support each other in achieving their goals.
                </p>
              </div>

              <div>
                  <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                    <span className="w-10 h-10 bg-[#4B5563] text-white rounded-full flex items-center justify-center mr-3">
                      Rocket
                    </span>
                    Innovation & Growth
                  </h3>
                <p className="text-gray-600">
                  We encourage innovation and continuous growth through workshops, competitions, and mentorship programs that push boundaries and develop future leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#4B5563]/5 to-transparent p-8 rounded-lg border-2 border-[#4B5563]/20">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6 flex items-center">
                <span className="w-12 h-12 bg-[#4B5563] text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                  Goal
                </span>
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To inspire and empower students to become tomorrow's leaders in technology and innovation by providing quality technical education, fostering professional development, and creating meaningful networking opportunities.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">✕</span>
                  <span>Facilitate technical learning through workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">✕</span>
                  <span>Build a supportive community of like-minded engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">✕</span>
                  <span>Connect students with industry professionals and opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">✕</span>
                  <span>Promote ethical practices and professional responsibility</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#6B8CAE]/5 to-transparent p-8 rounded-lg border-2 border-[#6B8CAE]/20">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6 flex items-center">
                <span className="w-12 h-12 bg-[#6B8CAE] text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                  Sparkle
                </span>
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the premier student organization that shapes innovative thinkers and ethical engineers who contribute positively to society through technological advancement.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">→</span>
                  <span>Every member becomes a confident technical leader</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">→</span>
                  <span>Create lasting impact through meaningful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">→</span>
                  <span>Build bridges between academia and industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">→</span>
                  <span>Foster a culture of continuous learning and innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="Principles that guide our actions and decisions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', description: 'Acting with honesty and strong moral principles' },
              { title: 'Excellence', description: 'Pursuing the highest standards in all endeavors' },
              { title: 'Innovation', description: 'Embracing creativity and forward-thinking solutions' },
              { title: 'Collaboration', description: 'Working together for collective success' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              >
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
