import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  const branchStats = [
    { value: '8', label: 'Office Bearers' },
    { value: '6', label: 'Technical Chapters' },
    { value: '1', label: 'Affinity Group' },
    { value: '35', label: 'Executive Members' },
  ];

  const branchSections = [
    {
      title: 'About Our Institution',
      description:
        'KLE Technological University is a leading institution dedicated to excellence in education, research, innovation, and professional development. With a strong focus on experiential learning and industry collaboration, the university empowers students to build technical expertise, leadership, and teamwork skills.',
    },
    {
      title: 'About IEEE',
      description:
        'IEEE, the Institute of Electrical and Electronics Engineers, is the world\'s largest professional technical organization dedicated to advancing technology for humanity. It supports innovation, research, professional growth, and hands-on learning through conferences, workshops, chapters, and community initiatives.',
    },
    {
      title: 'About IEEE Student Branch',
      description:
        'The IEEE Student Branch at KLE Technological University is a student-driven professional community that promotes technical excellence, innovation, leadership, and collaborative learning. Guided by the Branch Counselor and supported by the Office Bearers, the branch organizes workshops, technical events, competitions, and community initiatives.',
    },
  ];

  const chapters = ['MTT-S', 'AESS', 'ITS', 'PES', 'PELS', 'CAS'];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[400px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About IEEE</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover the institution, IEEE, and the student branch that powers our technical community
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About IEEE Student Branch"
            subtitle="A systematic overview of our institution, IEEE, and the branch community"
          />

          <div className="space-y-8 mb-12">
            {branchSections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {branchStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-[#4B5563]/10 shadow-sm p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#4B5563] mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide text-gray-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#4B5563]/5 to-transparent p-8 rounded-lg border border-[#4B5563]/15">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6">Branch Structure</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The branch is guided by the IEEE Branch Counselor and supported by student leaders who coordinate events, technical programs, and outreach activities across the year.
              </p>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Office Bearers coordinate planning, outreach, and execution.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Executive Committee members drive chapter-level activities.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Technical chapters and the WIE Affinity Group create focused opportunities for members.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6B8CAE]/5 to-transparent p-8 rounded-lg border border-[#6B8CAE]/15">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6">Technical Chapters</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The branch includes the following chapters and affinity group to support domain-specific learning and collaboration:
              </p>
              <div className="flex flex-wrap gap-3">
                {chapters.map((chapter) => (
                  <span
                    key={chapter}
                    className="px-4 py-2 rounded-full bg-white text-[#2C3E50] border border-[#6B8CAE]/20 font-medium shadow-sm"
                  >
                    {chapter}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full bg-white text-[#2C3E50] border border-[#6B8CAE]/20 font-medium shadow-sm">
                  Women in Engineering (WIE)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Guidance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership & Guidance"
            subtitle="The visionaries and mentors guiding our student branch"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {/* Principal Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start hover:shadow-md transition-all duration-300">
              {/* Photo Placeholder */}
              <div className="w-32 h-32 md:w-36 md:h-36 bg-slate-100 rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 select-none">
                <svg className="w-10 h-10 mb-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="text-xs font-semibold tracking-wider">PHOTO</span>
              </div>
              
              {/* Details */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Dr. S. F. Patil</h3>
                  <p className="text-xs md:text-sm font-semibold text-[#00629b] uppercase tracking-wider mt-1">
                    Principal, KLE Technological University Belagavi
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify sm:text-left text-sm md:text-base">
                  "We strongly support IEEE activities that inspire students to achieve technical excellence, innovation, and leadership development. Through workshops, technical events, research opportunities, and collaborative initiatives, the IEEE Student Branch creates a platform for students to enhance professional skills, encourage creativity, and contribute meaningfully to society."
                </p>
              </div>
            </div>

            {/* Branch Counselor Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start hover:shadow-md transition-all duration-300">
              {/* Photo Placeholder */}
              <div className="w-32 h-32 md:w-36 md:h-36 bg-slate-100 rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 select-none">
                <svg className="w-10 h-10 mb-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="text-xs font-semibold tracking-wider">PHOTO</span>
              </div>
              
              {/* Details */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">Dr. Nalini Kharchi</h3>
                  <p className="text-xs md:text-sm font-semibold text-[#00629b] uppercase tracking-wider mt-1">
                    Student Branch Counselor, KLE Technological University Belagavi
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify sm:text-left text-sm md:text-base">
                  "The IEEE Branch Counselor provides guidance and support to the Student Branch by encouraging technical excellence, leadership, and professional growth. Through mentorship and active involvement, the counselor helps students organize impactful activities, strengthen teamwork, and create opportunities for innovation, learning, and meaningful engagement within IEEE."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Student Branch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Student Branch Impact"
            subtitle="How the IEEE Student Branch creates value for students"
          />

          <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The IEEE Student Branch at KLE Technological University is an active and student-driven professional community that promotes technical excellence, innovation, leadership, and collaborative learning. Through regular engagement, the branch helps students strengthen technical knowledge, professional growth, and leadership development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#4B5563] text-white rounded-full flex items-center justify-center mr-3">
                    1
                  </span>
                  Technical Events
                </h3>
                <p className="text-gray-600">
                  Workshops, seminars, hackathons, and technical talks are designed to bridge classroom learning with industry practice.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#6B8CAE] text-white rounded-full flex items-center justify-center mr-3">
                    2
                  </span>
                  Leadership Development
                </h3>
                <p className="text-gray-600">
                  Office Bearers and executive members gain planning, communication, and team management experience through real responsibilities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#2C3E50] text-white rounded-full flex items-center justify-center mr-3">
                    3
                  </span>
                  Community Building
                </h3>
                <p className="text-gray-600">
                  The branch connects students from diverse backgrounds to collaborate, learn together, and support each other in achieving shared goals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#4B5563] mb-4 flex items-center">
                  <span className="w-10 h-10 bg-[#4B5563] text-white rounded-full flex items-center justify-center mr-3">
                    4
                  </span>
                  Innovation & Growth
                </h3>
                <p className="text-gray-600">
                  Competitions, mentorship, and chapter-driven initiatives encourage students to explore new ideas and develop future-ready skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#4B5563]/5 to-transparent p-8 rounded-lg border-2 border-[#4B5563]/20 bg-white">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6 flex items-center">
                <span className="w-12 h-12 bg-[#4B5563] text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                  1
                </span>
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To inspire and empower students to become leaders in technology and innovation through quality technical education, professional development, and meaningful networking opportunities.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Facilitate technical learning through workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Build a supportive community of like-minded engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Connect students with industry professionals and opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4B5563] font-bold mr-3">•</span>
                  <span>Promote ethical practices and professional responsibility</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#6B8CAE]/5 to-transparent p-8 rounded-lg border-2 border-[#6B8CAE]/20 bg-white">
              <h3 className="text-3xl font-bold text-[#2C3E50] mb-6 flex items-center">
                <span className="w-12 h-12 bg-[#6B8CAE] text-white rounded-lg flex items-center justify-center mr-4 text-xl">
                  2
                </span>
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the premier student organization that shapes innovative thinkers and ethical engineers who contribute positively to society through technological advancement.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">•</span>
                  <span>Every member becomes a confident technical leader</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">•</span>
                  <span>Create lasting impact through meaningful projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">•</span>
                  <span>Build bridges between academia and industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6B8CAE] font-bold mr-3">•</span>
                  <span>Foster a culture of continuous learning and innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
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
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center card-hover"
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
