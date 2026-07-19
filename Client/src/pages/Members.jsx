import React from 'react';
import SectionHeader from '../components/SectionHeader';

// SB
import jaydeepPhoto from '../assets/Members/SB/Jaydeep-Webmaster.jpg';
import Deepaphoto from '../assets/Members/SB/Deepa.png';
import harshPhoto from '../assets/Members/SB/Harsh.png';
import kushalPhoto from '../assets/Members/SB/Kushal.png';
// ITS
import Aryanphoto from '../assets/Members/ITS/Aryan.png';
import drRajashriPhoto from "../assets/Members/ITS/Dr. Rajashri.png";
import manojanaPhoto from "../assets/Members/ITS/Manojana.png";
import pavitraPhoto from "../assets/Members/ITS/Pavitra.png";
import snehaPhoto from "../assets/Members/ITS/Sneha.png";
import srushtiPhoto from "../assets/Members/ITS/Srushti.png";
// MTTS
import drDattaprasadPhoto from "../assets/Members/MTTS/Dr. Dattaprasad.png";
import khushiKPhoto from "../assets/Members/MTTS/Khushi K..png";
import khushiMuttinPhoto from "../assets/Members/MTTS/Khushi Muttin.png";
import spurtiPhoto from "../assets/Members/MTTS/Spurti.png";
import namradaPhoto from "../assets/Members/MTTS/Namrada.png";
import vyankateshPhoto from "../assets/Members/MTTS/Vyankatesh.png";
// PELS
import drNaliniPhoto from "../assets/Members/PELS/Dr. Nalini.png";
import shreecharanPhoto from "../assets/Members/PELS/Shreecharan.png";
import riyaPhoto from "../assets/Members/PELS/Riya.png";
import gajendraPhoto from "../assets/Members/PELS/Gajendra.png";
import amoghPhoto from "../assets/Members/PELS/Amogh.png";
import shreyaPhoto from "../assets/Members/PELS/Shreya.png";
// CAS
import pragatiPhoto from "../assets/Members/CAS/Pragati.png";
import shivaniPhoto from "../assets/Members/CAS/Shivani.png";
import vaishnaviPhoto from "../assets/Members/CAS/Vaishnavi.png";
import naveenPhoto from "../assets/Members/CAS/Naveen.png";
import akshayPhoto from "../assets/Members/CAS/Akshay.png";
import aniruddhaPhoto from "../assets/Members/CAS/Anirudhha.png";
// WIE
import drTamalikaPhoto from "../assets/Members/WIE/Dr Tamalika.png";
import shwetaPhoto from "../assets/Members/WIE/Shweta.png";
import prajakataPhoto from "../assets/Members/WIE/Prajkta.png";
import sumanPhoto from "../assets/Members/WIE/Suman.png";
import sanjanaPhoto from "../assets/Members/WIE/Sanjana.png";
import shrustiWIEPhoto from "../assets/Members/WIE/Srushti-WIE.png";
// AESS
import drNiranjanPhoto from "../assets/Members/AESS/Dr Niranjan.png";
import chaitanyaPhoto from "../assets/Members/AESS/Chaitanya.png";
import varshaPhoto from "../assets/Members/AESS/Varsha.png";
import ishanPhoto from "../assets/Members/AESS/Ishan.png";
import virajPhoto from "../assets/Members/AESS/Viraj.png";
import prachiPhoto from "../assets/Members/AESS/Prachi.png";
// PES
import shreyasPhoto from "../assets/Members/PES/Shreyas.png";
import kartikPhoto from "../assets/Members/PES/Kartik.png";
import samsherPhoto from "../assets/Members/PES/Samsher.png";
import anuradhaPhoto from "../assets/Members/PES/Anuradha.png";
import ankitaPhoto from "../assets/Members/PES/Ankita.png";

const memberGroups = {
  ob: {
    title: 'Student Branch Office Bearers',
    description: 'The executive committee responsible for coordinating activities, planning events, and leading the student branch.',
    members: [
      {
        name: 'Harsh Othy',
        position: 'IEEE Student Branch Chair',
        membershipId: '102047550',
        image: harshPhoto,
        description: 'The IEEE Student Branch Chair leads the Student Branch by coordinating activities, encouraging student participation, and promoting technical and professional development. The Chair works closely with office bearers, chapter teams, and faculty members to organize events, strengthen collaboration, and create meaningful opportunities for learning, innovation, and leadership.'
      },
      {
        name: 'Kushal M Itnal',
        position: 'IEEE Student Branch Vice Chair',
        membershipId: '101893509',
        image: kushalPhoto,
        description: 'The IEEE Student Branch Vice Chair supports the Chair in planning and managing branch activities while ensuring smooth coordination among teams and chapters. The role focuses on promoting student engagement, assisting in organizing technical and professional events, and contributing to leadership, collaboration, and overall branch development.'
      },
      {
        name: 'Kartik Hammpanvar',
        position: 'IEEE Student Branch Secretary',
        image: kartikPhoto,
        membershipId: '102170336',
        description: 'The IEEE Student Branch Secretary plays an important role in managing branch communication, maintaining records, and supporting the coordination of activities and events. The Secretary ensures smooth execution of operations by organizing documentation, facilitating teamwork, and contributing to effective planning and professional growth within the branch.'
      },
      {
        name: 'Shreyas Halingali',
        position: 'IEEE Student Branch Joint Secretary',
        image: shreyasPhoto,
        membershipId: '100787771',
        description: 'The IEEE Student Branch Joint Secretary supports the Secretary in coordinating branch activities, maintaining communication, and ensuring smooth execution of events and initiatives. The role involves assisting with documentation, organizing operations, and contributing to effective teamwork, leadership, and the successful functioning of the Student Branch.'
      },
      {
        name: 'Deepa Virupaxappa Garajur',
        position: 'IEEE Student Branch Treasurer',
        membershipId: '101058642',
        image: Deepaphoto,
        description: 'The IEEE Student Branch Treasurer is responsible for managing branch finances and supporting the effective planning of activities and events. The Treasurer ensures proper budgeting, financial coordination, and resource management while contributing to the smooth functioning, transparency, and overall growth of the Student Branch.'
      },
      {
        name: 'Jaydeep Nadkarni',
        position: 'IEEE Student Branch Webmaster',
        membershipId: '102204295',
        image: jaydeepPhoto,
        description: 'The IEEE Student Branch Webmaster is responsible for managing and maintaining the branch’s digital presence and online communication platforms. The Webmaster ensures timely updates of website content, promotes branch activities, enhances visibility, and supports effective communication to strengthen engagement within the IEEE community.'
      },
      {
        name: 'Kushal M Itnal',
        position: 'IEEE Student Branch Media Lead',
        membershipId: '101893509',
        image: kushalPhoto,
        description: 'The IEEE Student Branch Media Lead is responsible for promoting branch activities and maintaining effective communication across digital and social media platforms. The role focuses on creating engaging content, documenting events, increasing visibility, and strengthening outreach to showcase the achievements and initiatives of the Student Branch.'
      },
      {
        name: 'Vaishnavi Rajagoli',
        position: 'IEEE Student Branch Membership Development Coordinator (MDC)',
        membershipId: '100810531',
        image: vaishnaviPhoto,
        description: 'The IEEE Student Branch Membership Development Coordinator (MDC) is responsible for strengthening member engagement and supporting branch growth through outreach and participation initiatives. The role focuses on promoting IEEE membership benefits, encouraging active involvement, enhancing member experience, and building a strong and connected IEEE student community.'
      }
    ]
  },
  its: {
    title: 'Information Theory Society (ITS)',
    description: 'Focusing on the mathematical foundations and applications of information, communication, and data processing.',
    members: [
      {
        name: 'Dr. Rajashri Khanai',
        position: 'IEEE ITS Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drRajashriPhoto,
        description: 'The IEEE Information Theory Society Faculty Advisor provides guidance and mentorship to support the chapter’s technical and professional activities. Through leadership and continuous support, the advisor encourages student participation, promotes innovation and research, and helps create opportunities for learning, collaboration, and overall chapter development.'
      },
      {
        name: 'Aryan Sunil Patil',
        position: 'IEEE ITS Society Chair',
        membershipId: '102204303',
        image: Aryanphoto,
        description: 'The IEEE Information Theory Society Chair leads the chapter by coordinating technical activities, encouraging student participation, and promoting innovation in information theory and related fields. The Chair works closely with the executive team and faculty advisor to organize events, strengthen collaboration, and create opportunities for technical learning and professional development.'
      },
      {
        name: 'Sneha Hundekar',
        position: 'IEEE ITS Society Vice Chair',
        membershipId: '102513032',
        image: snehaPhoto,
        description: 'The IEEE Information Theory Society Vice Chair supports the Chair in planning and coordinating chapter activities while encouraging active student participation and technical engagement. The role focuses on assisting in organizing events, strengthening collaboration among members, and contributing to leadership, innovation, and the successful growth of the chapter.'
      },
      {
        name: 'Pavitra M Halleppanavar',
        position: 'IEEE ITS Society Secretary',
        membershipId: '102204270',
        image: pavitraPhoto,
        description: 'The IEEE Information Theory Society Secretary is responsible for managing chapter communication, maintaining records, and supporting the coordination of activities and events. The Secretary ensures effective documentation, facilitates teamwork, and contributes to the smooth functioning and successful execution of chapter initiatives while encouraging active student engagement.'
      },
      {
        name: 'Manojna S',
        position: 'IEEE ITS Society Joint Secretary',
        membershipId: '102224315',
        image: manojanaPhoto,
        description: 'The IEEE Information Theory Society Joint Secretary supports the Secretary in coordinating chapter activities, maintaining communication, and ensuring smooth execution of events and initiatives. The role involves assisting in planning, documentation, and teamwork while encouraging active student participation and contributing to the overall growth of the chapter.'
      },
      {
        name: 'Srushti Hanagandi',
        position: 'IEEE ITS Society Treasurer',
        membershipId: '102224233',
        image: srushtiPhoto,
        description: 'The IEEE Information Theory Society Treasurer is responsible for supporting financial planning and maintaining proper coordination of chapter resources and activities. The role focuses on budgeting, financial organization, and ensuring smooth execution of events while contributing to transparency, teamwork, and the overall growth of the chapter.'
      }
    ]
  },
  mtts: {
    title: 'Microwave Theory and Techniques Society (MTT-S)',
    description: 'Promoting the theory and application of RF, microwave, millimeter-wave, and wireless technologies.',
    members: [
      {
        name: 'Dr. Dattaprasad Torse',
        position: 'IEEE MTTS Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drDattaprasadPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Faculty Advisor provides guidance and support for the chapter’s academic, technical, and professional activities. Through mentorship and leadership, the advisor encourages student participation, promotes innovation and technical learning, and helps create opportunities for collaboration, skill development, and overall chapter growth.'
      },
      {
        name: 'Khushi Muttin',
        position: 'IEEE MTTS Society Chair',
        membershipId: '102259525',
        image: khushiMuttinPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Chair leads the chapter by coordinating technical activities, encouraging student participation, and promoting innovation in microwave and related technologies. The Chair works with the executive team and faculty advisor to organize events, strengthen collaboration, and create opportunities for technical and professional development.'
      },
      {
        name: 'Mogali Spurti Manojkumar',
        position: 'IEEE MTTS Society Vice Chair',
        membershipId: '102198508',
        image: spurtiPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Vice Chair supports the Chair in planning and coordinating chapter activities while encouraging active student participation and technical engagement. The role focuses on assisting in event organization, strengthening collaboration among members, and contributing to leadership, innovation, and the successful growth of the chapter.'
      },
      {
        name: 'Khushi Kotresh Gadad',
        position: 'IEEE MTTS Society Secretary',
        membershipId: '102204159',
        image: khushiKPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Secretary is responsible for managing chapter communication, maintaining records, and supporting the coordination of activities and events. The Secretary ensures effective documentation, facilitates teamwork, and contributes to the smooth functioning and successful execution of chapter initiatives and programs.'
      },
      {
        name: 'Narmada Vinod Katti',
        position: 'IEEE MTTS Society Joint Secretary',
        image: namradaPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Joint Secretary supports the Secretary in coordinating chapter activities, maintaining communication, and ensuring smooth execution of events and initiatives. The role involves assisting with documentation, organizing operations, promoting teamwork, and contributing to effective chapter management and overall student engagement.'
      },
      {
        name: 'Venkatesh Parab',
        position: 'IEEE MTTS Society Treasurer',
        membershipId: '102198963',
        image: vyankateshPhoto,
        description: 'The IEEE Microwave Theory and Techniques Society Treasurer is responsible for supporting financial planning and maintaining proper management of chapter resources and activities. The Treasurer assists in budgeting, financial coordination, and event planning while ensuring transparency, efficient resource utilization, and contributing to the smooth functioning and growth of the chapter.'
      }
    ]
  },
  pels: {
    title: 'Power Electronics Society (PELS)',
    description: 'Advancing the development and application of power electronics technologies in energy systems.',
    members: [
      {
        name: 'Dr. Nalini Kharchi',
        position: 'IEEE PEL Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drNaliniPhoto,
        description: 'The IEEE Power Electronics Society Faculty Advisor provides guidance and mentorship to support the chapter’s technical, academic, and professional activities. Through leadership and continuous support, the advisor encourages student participation, promotes innovation and research, and helps create opportunities for learning, collaboration, and overall chapter development.'
      },
      {
        name: 'Shree Charan M B',
        position: 'IEEE PEL Society Chair',
        membershipId: '100799134',
        image: shreecharanPhoto,
        description: 'The IEEE Power Electronics Society Chair leads the chapter by coordinating technical activities, encouraging active student participation, and promoting innovation in power electronics and related technologies. The Chair works closely with the executive team and faculty advisor to organize events, strengthen collaboration, and create opportunities for technical and professional development.'
      },
      {
        name: 'Riya Kakatikar',
        position: 'IEEE PEL Society Vice Chair',
        membershipId: '102133507',
        image: riyaPhoto,
        description: 'The IEEE Power Electronics Society Vice Chair supports the Chair in planning and coordinating chapter activities while encouraging active student participation and technical engagement. The role focuses on assisting in event organization, strengthening collaboration among members, and contributing to leadership, innovation, and the successful growth of the chapter.'
      },
      {
        name: 'Gajendra Ramu Veer',
        position: 'IEEE PEL Society Secretary',
        membershipId: '102199044',
        image: gajendraPhoto,
        description: 'The IEEE Power Electronics Society Secretary is responsible for managing chapter communication, maintaining records, and supporting the coordination of technical activities and events. The Secretary ensures effective documentation, facilitates teamwork, and contributes to the smooth functioning and successful execution of chapter initiatives and professional activities.'
      },
      {
        name: 'Amogh Shivanand Morbad',
        position: 'IEEE PEL Society Joint Secretary',
        membershipId: '102190510',
        image: amoghPhoto,
        description: 'The IEEE Power Electronics Society Joint Secretary supports the Secretary in coordinating chapter activities, maintaining communication, and ensuring smooth execution of events and initiatives. The role involves assisting in documentation, organizing operations, promoting teamwork, and contributing to effective chapter management and overall student engagement.'
      },
      {
        name: 'Shreya Kulkarni',
        position: 'IEEE PEL Society Treasurer',
        membershipId: '100806437',
        image: shreyaPhoto,
        description: 'The IEEE Power Electronics Society Treasurer is responsible for supporting financial planning and managing chapter resources for effective execution of activities and events. The Treasurer assists in budgeting, financial coordination, and maintaining transparency while contributing to the smooth functioning, accountability, and overall growth of the chapter.'
      }
    ]
  },
  cas: {
    title: 'Circuits and Systems Society (CASS)',
    description: 'Fostering theory, analysis, design, and practical implementations of circuits and systems.',
    members: [
      {
        name: 'Pragati Annanavar',
        position: 'IEEE CAS Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: pragatiPhoto,
        description: 'The IEEE Circuits and Systems Society Faculty Advisor provides guidance and mentorship to support the chapter’s technical, academic, and professional activities. Through leadership and continuous encouragement, the advisor promotes student participation, fosters innovation and research, and helps create opportunities for learning, collaboration, and overall chapter development.'
      },
      {
        name: 'Shivani Shanbhag',
        position: 'IEEE CAS Society Chair',
        membershipId: '102194762',
        image: shivaniPhoto,
        description: 'The IEEE Circuits and Systems Society Chair leads the chapter by organizing technical events, encouraging student participation, and promoting innovation in circuits and systems. The Chair works with the team and faculty advisor to strengthen collaboration and support technical and professional development in line with the goals of the IEEE Circuits and Systems Society.'
      },
      {
        name: 'Vaishnavi Rajagoli',
        position: 'IEEE CAS Society Vice Chair',
        membershipId: '100810531',
        image: vaishnaviPhoto,
        description: 'The IEEE Circuits and Systems Society Vice Chair supports the Chair in planning and coordinating technical activities, events, and initiatives related to circuits and systems. The Vice Chair helps manage student participation, assists in organizing workshops and seminars, and ensures smooth execution of chapter activities. This role also involves working closely with the executive team and faculty advisor to promote innovation, teamwork, and professional development in alignment with the objectives of the IEEE Circuits and Systems Society.'
      },
      {
        name: 'Naveen Munavalli',
        position: 'IEEE CAS Society Secretary',
        membershipId: '102137325',
        image: naveenPhoto,
        description: 'The IEEE Circuits and Systems Society Secretary is responsible for maintaining official records of the chapter, including meeting minutes, attendance, reports, and correspondence. The Secretary helps in organizing documentation for events, communicating information to members, and ensuring smooth administrative functioning of the society. This role supports the executive team and faculty advisor in coordinating activities and maintaining proper records in alignment with the objectives of the IEEE Circuits and Systems Society.'
      },
      {
        name: 'Akshay Janamatti',
        position: 'IEEE CAS Society Joint Secretary',
        membershipId: '102137624',
        image: akshayPhoto,
        description: 'The IEEE Circuits and Systems Society Joint Secretary assists the Secretary in maintaining records, preparing meeting minutes, handling correspondence, and supporting event documentation. The Joint Secretary helps ensure smooth communication within the chapter and supports the executive team in organizing technical activities and administrative tasks in alignment with the goals of the IEEE Circuits and Systems Society.'
      },
      {
        name: 'Aniruddha Badiger',
        position: 'IEEE CAS Society Treasurer',
        membershipId: '102137666',
        image: aniruddhaPhoto,
        description: 'The IEEE Circuits and Systems Society Treasurer manages the financial activities of the chapter, including budgeting, expense tracking, and maintaining proper financial records. The Treasurer ensures transparency in fund usage for events, workshops, and other activities, and works closely with the executive team and faculty advisor to plan and control expenditures. This role supports smooth financial management in alignment with the objectives of the IEEE Circuits and Systems Society.'
      }
    ]
  },
  wie: {
    title: 'Women in Engineering (WIE)',
    description: 'Promoting women engineers and scientists, and inspiring girls to follow their academic interests in engineering.',
    members: [
      {
        name: 'Dr. Tamalika Chowdhury',
        position: 'IEEE WIE Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drTamalikaPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Faculty Advisor provides guidance and mentorship to support the effective functioning of the chapter. The Faculty Advisor helps in planning and approving activities, ensuring documentation, and encouraging initiatives that promote diversity, inclusion, and professional growth in engineering.'
      },
      {
        name: 'Shweta Kadolkar',
        position: 'IEEE WIE Society Chair',
        membershipId: '102194672',
        image: shwetaPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Chair leads the chapter by planning and coordinating activities that promote women’s participation in engineering and technology. The Chair encourages members to take part in technical events, leadership programs, and outreach initiatives, while working closely with the executive team and faculty advisor.'
      },
      {
        name: 'Prajakta Bhoje',
        position: 'IEEE WIE Society Vice Chair',
        membershipId: '102145937',
        image: prajakataPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Vice Chair supports the Chair in organizing and coordinating chapter activities that promote women in engineering. The Vice Chair assists in planning events, encouraging member participation, and ensuring smooth execution of programs.'
      },
      {
        name: 'Suman Suresh Naik',
        position: 'IEEE WIE Society Secretary',
        membershipId: '102139099',
        image: sumanPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Secretary is responsible for maintaining official records of the chapter, including meeting minutes, attendance, reports, and correspondence. The Secretary supports communication within the team and helps in organizing documentation for events and activities.'
      },
      {
        name: 'Sanjana Satyanarayan Ankali',
        position: 'IEEE WIE Society Joint Secretary',
        membershipId: '102138919',
        image: sanjanaPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Joint Secretary assists in maintaining records, preparing meeting minutes, handling correspondence, and supporting documentation for events and activities. The Joint Secretary helps ensure smooth communication within the chapter.'
      },
      {
        name: 'Shrusti Muganur',
        position: 'IEEE WIE Society Treasurer',
        membershipId: '102138829',
        image: shrustiWIEPhoto,
        description: 'The IEEE Women in Engineering (WIE) Affinity Group Treasurer manages the financial activities of the chapter, including budgeting, expense tracking, and maintaining accurate financial records. The Treasurer ensures proper utilization of funds for events and programs while maintaining transparency and accountability.'
      }
    ]
  },
  aess: {
    title: 'Aerospace and Electronic Systems Society (AESS)',
    description: 'Advancing aerospace and electronic systems design, development, integration, and operations.',
    members: [
      {
        name: 'Dr. Niranjan Muchandi',
        position: 'IEEE AESS Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drNiranjanPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Faculty Advisor provides guidance and mentorship to the student chapter, ensuring that all activities align with IEEE standards and technical goals. The Faculty Advisor supports planning and approval of events, encourages student participation in aerospace and electronic systems-related fields, and helps maintain coordination between students, faculty, and IEEE requirements.'
      },
      {
        name: 'Chaitanya Kittur',
        position: 'IEEE AESS Society Chair',
        membershipId: '102138440',
        image: chaitanyaPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Chair leads the student chapter by planning and coordinating technical activities related to aerospace and electronic systems. The Chair encourages student participation, organizes events such as workshops, seminars, and competitions, and promotes innovation in the field.'
      },
      {
        name: 'Varsha Nagaraj Dandgall',
        position: 'IEEE AESS Society Vice Chair',
        membershipId: '102137058',
        image: varshaPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Vice Chair supports the Chair in planning and organizing technical activities related to aerospace and electronic systems. The Vice Chair helps coordinate events, encourages student participation, and ensures smooth execution of chapter programs.'
      },
      {
        name: 'Ishan Bagewadi',
        position: 'IEEE AESS Society Secretary',
        membershipId: '102137562',
        image: ishanPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Secretary is responsible for maintaining official records of the chapter, including meeting minutes, attendance, reports, and correspondence. The Secretary helps in organizing documentation for events and ensures proper communication within the chapter.'
      },
      {
        name: 'Viraj Patil',
        position: 'IEEE AESS Society Joint Secretary',
        membershipId: '101944346',
        image: virajPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Joint Secretary assists in maintaining records, preparing meeting minutes, handling correspondence, and supporting event documentation. The Joint Secretary helps ensure smooth communication within the chapter.'
      },
      {
        name: 'Prachi Santosh Sutar',
        position: 'IEEE AESS Society Treasurer',
        membershipId: '102138783',
        image: prachiPhoto,
        description: 'The IEEE Aerospace and Electronic Systems Society Treasurer manages the financial activities of the chapter, including budgeting, expense tracking, and maintaining accurate financial records. The Treasurer ensures proper utilization of funds for events, workshops, and technical programs.'
      }
    ]
  },
  pes: {
    title: 'Power and Energy Society (PES)',
    description: 'Focusing on sustainable energy systems, power generation, transmission, and smart grid solutions.',
    members: [
      {
        name: 'Dr. Nalini Kharchi',
        position: 'IEEE PES Society Faculty Advisor',
        institution: 'KLE Technological University Belagavi',
        image: drNaliniPhoto,
        description: 'The IEEE Power and Energy Society Faculty Advisor provides guidance and mentorship to the student chapter, ensuring that all activities align with IEEE standards and technical objectives. The Faculty Advisor supports planning and approval of events, encourages student involvement in power and energy-related fields, and helps maintain coordination between students and faculty.'
      },
      {
        name: 'Shreyas Halingali',
        position: 'IEEE PES Society Chair',
        membershipId: '100787771',
        image: shreyasPhoto,
        description: 'The IEEE Power and Energy Society Chair leads the student chapter by planning and coordinating technical activities related to power systems and energy engineering. The Chair encourages active student participation, organizes events such as workshops, seminars, and competitions, and promotes innovation in the field of power and energy.'
      },
      {
        name: 'Kartik Hammpanvar',
        position: 'IEEE PES Society Vice Chair',
        membershipId: '102170336',
        image: kartikPhoto,
        description: 'The IEEE Power and Energy Society Vice Chair supports the Chair in planning and coordinating technical activities related to power and energy systems. The Vice Chair helps organize events, encourages student participation, and ensures smooth execution of chapter programs.'
      },
      {
        name: 'Samsher Patil',
        position: 'IEEE PES Society Secretary',
        membershipId: '102139161',
        image: samsherPhoto,
        description: 'The IEEE Power and Energy Society Secretary is responsible for maintaining official records of the chapter, including meeting minutes, attendance, reports, and correspondence. The Secretary ensures proper documentation of events and supports communication within the chapter.'
      },
      {
        name: 'Anuradha Shankinmath',
        position: 'IEEE PES Society Joint Secretary',
        membershipId: '102194860',
        image: anuradhaPhoto,
        description: 'The IEEE Power and Energy Society Joint Secretary assists in maintaining records, preparing meeting minutes, handling correspondence, and supporting documentation for events and activities. The Joint Secretary helps ensure smooth communication within the chapter.'
      },
      {
        name: 'Ankita Managuli',
        position: 'IEEE PES Society Treasurer',
        membershipId: '102216744',
        image: ankitaPhoto,
        description: 'The IEEE Power and Energy Society Treasurer manages the financial activities of the chapter, including budgeting, expense tracking, and maintaining accurate financial records. The Treasurer ensures proper utilization of funds for events, workshops, and technical programs.'
      }
    ]
  }
};

const tabs = [
  { value: 'ob', label: 'Office Bearers' },
  { value: 'its', label: 'ITS' },
  { value: 'mtts', label: 'MTTS' },
  { value: 'pels', label: 'PELS' },
  { value: 'cas', label: 'CAS' },
  { value: 'wie', label: 'WIE' },
  { value: 'aess', label: 'AESS' },
  { value: 'pes', label: 'PES' }
];

export default function Members() {
  const allGroups = tabs.map((tab) => ({
    value: tab.value,
    label: tab.label,
    ...memberGroups[tab.value],
  }));

  return (
  <div className="w-full scroll-smooth">
    {/* Hero Section */}
    <section className="min-h-[300px] bg-gradient-to-br from-[#4B5563] to-[#2C3E50] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Members</h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Meet the talented leadership, faculty advisors, and executive members driving our student branch and societies forward
        </p>
      </div>
    </section>

    {/* Sticky Navigation / Filter Section */}
    <section className="sticky top-0 bg-white/90 backdrop-blur-md z-40 border-b border-slate-100 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                const element = document.getElementById(tab.value);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-5 py-2.5 rounded-full font-semibold bg-slate-100 text-slate-600 hover:bg-[#00629b] hover:text-white transition-all duration-300"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>

    {/* Continuous Members Display */}
    <section className="py-12 bg-white flex flex-col gap-24">
      {/* Assuming 'allGroups' is an array of all your group objects containing { value, title, description, members } */}
      {allGroups.map((group) => (
        <div 
          key={group.value} 
          id={group.value} 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 w-full"
        >
          {/* Group Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{group.title}</h2>
            <p className="text-slate-500 leading-relaxed">{group.description}</p>
          </div>

          {/* Group Grid — Adjusted to look less tall and better balanced */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {group.members.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                
                {/* Photo/Fallback Box — Changed to aspect-square for better mobile display */}
                <div className="w-full aspect-square overflow-hidden relative rounded-t-2xl">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#00629b] flex items-center justify-center text-white font-bold text-3xl sm:text-4xl select-none">
                      {member.name.split(' ').filter(Boolean).map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Info Text Box */}
                <div className="px-4 sm:px-5 py-4 sm:py-5 text-center flex-1 flex flex-col justify-between min-h-[120px]">
                  <div className="flex flex-col justify-center flex-1 gap-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] md:text-[11px] font-extrabold text-[#00629b] uppercase tracking-wider leading-tight max-w-[95%] mx-auto">
                      {member.position}
                    </p>
                  </div>
                  
                  {(member.membershipId || member.institution) && (
                    <p className="mt-2 text-[9px] sm:text-[10px] font-semibold text-slate-400 tracking-normal">
                      {member.membershipId ? `ID: ${member.membershipId}` : member.institution}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

    {/* Join Us Section */}
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Become Part of Our Community"
          subtitle="Join IEEE Student Branch and grow with us"
        />

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Whether you're passionate about cutting-edge technology, interested in professional development, or simply looking to connect with like-minded peers, IEEE Student Branch offers the perfect platform for your growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4 select-none">📚</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Learn Skills</h3>
            <p className="text-slate-600 text-sm">
              Develop technical expertise through workshops and training programs
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4 select-none">👥</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Network</h3>
            <p className="text-slate-600 text-sm">
              Connect with industry professionals and fellow students
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-4xl mb-4 select-none">🚀</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Grow Career</h3>
            <p className="text-slate-600 text-sm">
              Access internships and career advancement opportunities
            </p>
          </div>
        </div>

        <button className="bg-[#00629b] hover:bg-[#004d75] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
          Join IEEE Today
        </button>
      </div>
    </section>
  </div>
);
}
