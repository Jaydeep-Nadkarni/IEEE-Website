import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import itsocLogo from '../assets/logos/IEEE-ITS-logo.jpg';
import mttLogo from '../assets/logos/MTTS.webp';
import pelsLogo from '../assets/logos/PELS.jpg';
import cassLogo from '../assets/logos/CAS.png';
import wieLogo from '../assets/logos/WIE.jpg';
import aessLogo from '../assets/logos/AESS.jpg';
import pesLogo from '../assets/logos/PES.webp';

const chapters = [
  {
    id: 1,
    label: 'IEEE INFORMATION THEORY SOCIETY',
    logo: itsocLogo,
    alt: 'IEEE Information Theory Society logo',
    description:
      'The IEEE Information Theory Society is a global community dedicated to advancing the mathematical foundations and applications of information, communication, and data processing. It promotes research, innovation, and knowledge sharing in areas such as coding theory, data compression, machine learning, cryptography, and communication systems while supporting students through technical activities and professional development opportunities.',
  },
  {
    id: 2,
    label: 'IEEE MICROWAVE THEORY AND TECHNIQUES SOCIETY',
    logo: mttLogo,
    alt: 'IEEE Microwave Theory and Techniques Society logo',
    description:
      'The IEEE Microwave Theory and Techniques Society (MTT-S) is a global professional community focused on advancing microwave, radio frequency (RF), millimeter-wave, and wireless technologies. It promotes innovation, research, and technical excellence through knowledge sharing, events, and professional development opportunities, empowering students and professionals to contribute to modern communication and electronic systems.',
  },
  {
    id: 3,
    label: 'IEEE POWER ELECTRONICS SOCIETY',
    logo: pelsLogo,
    alt: 'IEEE Power Electronics Society logo',
    description:
      'The IEEE Power Electronics Society (PELS) is a global professional community dedicated to advancing the development and application of power electronics technologies. It promotes innovation, research, and knowledge sharing in areas such as energy conversion, renewable energy systems, electric vehicles, smart grids, and efficient power management while supporting students through technical activities and professional development opportunities.',
  },
  {
    id: 4,
    label: 'IEEE CIRCUITS AND SYSTEMS SOCIETY',
    logo: cassLogo,
    alt: 'IEEE Circuits and Systems Society logo',
    description:
      'The IEEE Circuits and Systems Society (CASS) is a global professional community dedicated to advancing the theory, analysis, design, and practical implementation of circuits and systems. It promotes research, innovation, and knowledge sharing in areas such as electronics, signal processing, integrated circuits, communication systems, and emerging technologies while supporting students through technical activities and professional development opportunities.',
  },
  {
    id: 5,
    label: 'IEEE WOMEN IN ENGINEERING SOCIETY (AFFINITY GROUP)',
    logo: wieLogo,
    alt: 'IEEE Women in Engineering logo',
    description:
      'The IEEE Women in Engineering (WIE) Affinity Group is a global network dedicated to promoting and supporting women in engineering, technology, and science. It encourages leadership, professional growth, technical development, and diversity through workshops, networking opportunities, mentorship, and community engagement while empowering students and professionals to achieve excellence in their careers.',
  },
  {
    id: 6,
    label: 'IEEE AEROSPACE AND ELECTRONIC SYSTEM SOCIETY',
    logo: aessLogo,
    alt: 'IEEE Aerospace and Electronic Systems Society logo',
    description:
      'The IEEE Aerospace and Electronic Systems Society (AESS) is a global professional community dedicated to advancing the design, development, integration, and operation of complex aerospace and electronic systems. It promotes innovation, research, and technical excellence in areas such as avionics, radar, navigation, communication, space systems, and defense technologies while supporting students through technical activities, networking, and professional development opportunities.',
  },
  {
    id: 7,
    label: 'IEEE POWER AND ENERGY SOCIETY',
    logo: pesLogo,
    alt: 'IEEE Power and Energy Society logo',
    description:
      'The IEEE Power & Energy Society (PES) is a global professional community dedicated to advancing the science and practice of electric power generation, transmission, distribution, and sustainable energy systems. It promotes innovation, research, and knowledge sharing in areas such as renewable energy, smart grids, energy management, and power system technologies while supporting students through technical activities and professional development opportunities.',
  },
];

export default function Chapters() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white pt-20">
      <section
        ref={headerRef}
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${headerVisible ? 'animate-slide-up active' : 'animate-slide-up'}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] text-center mb-3">
          IEEE Chapters
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {chapters.map((chapter) => (
          <ChapterBlock key={chapter.id} chapter={chapter} />
        ))}
      </section>
    </div>
  );
}

function ChapterBlock({ chapter }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'animate-slide-up active' : 'animate-slide-up'}`}
    >
      <h2 className="text-lg md:text-xl font-bold text-[#0F172A] uppercase tracking-wide mb-4">
        {chapter.label}
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
        <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center">
          <img
            src={chapter.logo}
            alt={chapter.alt}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>

        <p className="flex-1 text-[#0F172A] text-base md:text-lg leading-relaxed text-justify sm:text-left">
          {chapter.description}
        </p>
      </div>
    </section>
  );
}
