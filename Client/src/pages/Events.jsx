import React, { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

import ieeeBranchLogo from '../assets/logos/ieee-klescet.jpg';
import campusLogo from '../assets/logos/SHESHAGIRI CAMPUS LOGO PNG.png';
import wieLogo from '../assets/logos/WIE.jpg';
import mttsLogo from '../assets/logos/MTTS.webp';
import pelsLogo from '../assets/logos/PELS.jpg';
import pesLogo from '../assets/logos/PES.webp';
import cassLogo from '../assets/logos/CAS.png';
import aessLogo from '../assets/logos/AESS.jpg';
import itsLogo from '../assets/logos/IEEE-ITS-logo.jpg';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Annual General Meeting Ceremony',
      date: '7 March 2026',
      society: 'IEEE Student Branch',
      location: 'Dr. M. S. Sheshgiri Campus',
      images: [ieeeBranchLogo, campusLogo, itsLogo],
      summary:
        'The Student Branch reviewed the year’s progress, highlighted major technical programs, and recognized the collective effort of members, faculty advisors, and office bearers.',
      details: [
        'Presented a year-end review of workshops, seminars, competitions, outreach activities, and branch milestones.',
        'Acknowledged the support of faculty advisors and the contributions of all chapters and affinity groups.',
        'Reaffirmed the branch vision of technical advancement, innovation, and student development.',
      ],
      attendees: 'Branch members and faculty',
    },
    {
      id: 2,
      title: 'Installation Ceremony (Badge Ceremony)',
      date: '7 March 2026',
      society: 'All Chapters and Affinity Groups',
      location: 'Dr. M. S. Sheshgiri Campus',
      images: [campusLogo, ieeeBranchLogo, aessLogo],
      summary:
        'The new leadership team was officially introduced, and each chapter and affinity group inaugurated its executive committee for the academic year.',
      details: [
        'Formally welcomed the Student Branch office bearers and chapter executive teams.',
        'Presented badges as a symbol of responsibility, leadership, and commitment.',
        'Set the tone for teamwork, professional growth, and active participation in IEEE activities.',
      ],
      attendees: 'New office bearers and chapter teams',
    },
    {
      id: 3,
      title: 'Women’s Day Self-Defence Workshop',
      date: '9 March 2026',
      society: 'IEEE WIE Affinity Group',
      location: 'Belagavi Campus',
      images: [wieLogo, campusLogo, ieeeBranchLogo],
      summary:
        'A practical workshop was organized to build awareness around personal safety and to equip participants with basic self-defence techniques.',
      details: [
        'Focused on situational awareness, confidence, and response to potential threats.',
        'Included live demonstrations, guided practice, and interactive training sessions.',
        'Received strong feedback from participants for its practical and empowering approach.',
      ],
      attendees: 'Female students across departments',
    },
    {
      id: 4,
      title: 'Introduction to Microwaves and Antenna Technologies',
      date: '28 March 2026',
      society: 'IEEE MTT-S / AP-S Student Chapter',
      location: 'Online webinar',
      images: [mttsLogo, ieeeBranchLogo, campusLogo],
      summary:
        'The webinar introduced the fundamentals of microwave theory, antenna systems, and their modern applications in communication and embedded systems.',
      details: [
        'Covered microwave frequency ranges, transmission lines, waveguides, and impedance matching.',
        'Explained antenna types and performance parameters such as gain, directivity, and efficiency.',
        'Drew connections to satellite communication, radar, 5G, IoT, and autonomous systems.',
      ],
      attendees: '83 participants',
    },
    {
      id: 5,
      title: 'Introduction to VLSI ASIC Design',
      date: '8 April 2026',
      society: 'IEEE Student Branch',
      location: 'Belagavi Campus',
      images: [pelsLogo, cassLogo, ieeeBranchLogo],
      summary:
        'Students were introduced to the VLSI design flow and gained hands-on exposure to chip design concepts through Cadence tools.',
      details: [
        'Built a foundation with basic electronics concepts, circuit behavior, and logic blocks.',
        'Walked through design entry, simulation, synthesis, and layout stages.',
        'Combined guided demos, lab sessions, and collaborative problem solving.',
      ],
      attendees: 'Students from multiple grades',
    },
    {
      id: 6,
      title: 'IEEE ITS Software Hackathon',
      date: '11-12 April 2026',
      society: 'IEEE ITS Student Chapter',
      location: 'Intra-college',
      images: [itsLogo, campusLogo, ieeeBranchLogo],
      summary:
        'The two-day hackathon brought student teams together to build software solutions, compete across evaluation rounds, and showcase practical product thinking.',
      details: [
        'Hosted 14 teams with 52 participants from different disciplines.',
        'Judging focused on innovation, functionality, UI/UX, scalability, and presentation.',
        'Recognized standout teams in multiple categories and celebrated strong teamwork.',
      ],
      attendees: '52 participants',
    },
    {
      id: 7,
      title: 'MATLAB for Electrical Engineering',
      date: '29 April 2026',
      society: 'IEEE PES Student Chapter',
      location: 'Computing Lab, EEE Department',
      images: [pesLogo, campusLogo, ieeeBranchLogo],
      summary:
        'A hands-on workshop helped students strengthen their understanding of MATLAB and apply it to DSP, Signals & Systems, and Power Systems.',
      details: [
        'Covered the MATLAB environment, syntax, modelling, plotting, and numerical analysis.',
        'Included live coding, waveform plotting, and simulation of electrical problems.',
        'Conducted by Dr. Nalini Karchi and Prof. Tushar Birje.',
      ],
      attendees: '4th Semester EEE students',
    },
    {
      id: 8,
      title: 'Power Loss Minimization',
      date: '30 April 2026',
      society: 'IEEE PES Student Chapter',
      location: 'EEE Seminar Hall',
      images: [pesLogo, ieeeBranchLogo, campusLogo],
      summary:
        'The seminar explored techniques for reducing power losses in electrical networks and improving the efficiency of power systems.',
      details: [
        'Explained transmission and distribution losses and their impact on efficiency and cost.',
        'Outlined practical methods for better network design and operation.',
        'Delivered by Dr. Rudresh Magdum with a practical, industry-oriented approach.',
      ],
      attendees: 'EEE students and faculty',
    },
    {
      id: 9,
      title: 'Industrial Visit to UR Rao Satellite Centre',
      date: '1 June 2026',
      society: 'IEEE AESS Student Chapter',
      location: 'URSC, Bengaluru',
      images: [aessLogo, campusLogo, ieeeBranchLogo],
      summary:
        'The industrial visit offered practical exposure to satellite development, subsystem integration, and technologies used in space missions.',
      details: [
        'Visited with 32 students and learned about satellite design and testing processes.',
        'Observed how communication, navigation, power, and onboard systems come together.',
        'Created a strong bridge between classroom concepts and aerospace applications.',
      ],
      attendees: '32 students',
    },
    {
      id: 10,
      title: 'My Business Journey: From Idea to Reality',
      date: '9 June 2026',
      society: 'IEEE WIE Affinity Group',
      location: 'Dr. M. S. Sheshgiri Campus',
      images: [wieLogo, campusLogo, ieeeBranchLogo],
      summary:
        'The seminar encouraged entrepreneurship by sharing practical lessons on turning ideas into real ventures through perseverance and leadership.',
      details: [
        'Focused on innovation, self-development, and opportunity creation.',
        'Highlighted the speaker’s professional journey, challenges, and lessons learned.',
        'Included an interactive discussion and token of appreciation ceremony.',
      ],
      attendees: 'Students, faculty, and dignitaries',
    },
    {
      id: 11,
      title: 'VLSI Tools, Trends and Career Opportunities',
      date: '19 June 2026',
      society: 'IEEE CAS Chapter',
      location: 'Belagavi Campus',
      images: [cassLogo, ieeeBranchLogo, campusLogo],
      summary:
        'This technical session introduced students to current VLSI design flows, EDA tools, semiconductor trends, and career paths in the domain.',
      details: [
        'Covered the design flow from specification to verification and chip sign-off.',
        'Discussed tools from Cadence, Synopsys, and Mentor Graphics.',
        'Gave guidance on roles such as digital design, verification, analog design, DFT, and FPGA engineering.',
      ],
      attendees: 'Students across semesters',
    },
  ];

  return (
    <div className="w-full bg-white">

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="2026 Events Timeline"
            subtitle="The student branch activities and chapter programs from 2026"
          />

          <div className="space-y-8">
            {events.map((event) => (
              <article key={event.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className={`flex flex-col lg:min-h-[380px] lg:flex-row ${event.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-[42%] bg-white">
                    <EventCarousel images={event.images} title={event.title} />
                  </div>

                  <div className="w-full lg:w-[58%] p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#4B5563]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C3E50]">
                        <CalendarDays size={14} />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-[#0F172A]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F172A]">
                        {event.society}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-5 text-sm text-gray-600">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-0.5 text-[#4B5563] flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={18} className="mt-0.5 text-[#4B5563] flex-shrink-0" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-5">
                      {event.summary}
                    </p>

                    <div className="space-y-3">
                      {event.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#4B5563] flex-shrink-0" />
                          <p className="leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Keep the archive moving forward
          </h2>
          <p className="text-lg text-gray-600">
            Add future event photos to the image arrays and the timeline will continue rotating them automatically.
          </p>
        </div>
      </section>
    </div>
  );
}

function EventCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC] min-h-[260px] h-full">
      <div className="aspect-[16/10] h-full w-full overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`${title} slide ${activeIndex + 1}`}
          className="h-full w-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-[#0F172A]/55 to-transparent px-3 py-3">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label={`Previous image for ${title}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/90 text-[#0F172A] shadow-sm transition hover:bg-white"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          <span>{activeIndex + 1}</span>
          <span>/</span>
          <span>{images.length}</span>
        </div>

        <button
          type="button"
          onClick={goToNext}
          aria-label={`Next image for ${title}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/90 text-[#0F172A] shadow-sm transition hover:bg-white"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
