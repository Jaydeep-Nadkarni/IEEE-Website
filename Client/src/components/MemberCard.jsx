import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function MemberCard({ name, position, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 card-hover text-center">

      {/* Profile Image - Made smaller for mobile, better responsive sizing */}
      <div className="mb-3 sm:mb-4">
        {image ? (
          <img
            src={image}
            alt={name}


            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto object-cover shadow-md"
          />
        ) : (




          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto bg-gradient-to-br from-[#4B5563] to-[#2C3E50] flex items-center justify-center">
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-base sm:text-lg font-semibold text-[#2C3E50] mb-1 sm:mb-2">{name}</h3>

      {/* Position */}
      <p className="text-xs sm:text-sm text-[#4B5563] font-medium mb-3 sm:mb-4">{position}</p>

      {/* LinkedIn Link */}
      <div className="flex justify-center">
        <a
          href="#"
          className="hover:text-[#4B5563] text-gray-600 smooth-transition"
          title="LinkedIn"
        >


          <FaLinkedin className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
}













































