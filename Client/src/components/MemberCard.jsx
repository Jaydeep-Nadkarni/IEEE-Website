import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function MemberCard({ name, position, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover text-center">
      {/* Profile Image */}
      <div className="mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-[#4B5563] to-[#2C3E50] flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{name}</h3>

      {/* Position */}
      <p className="text-sm text-[#4B5563] font-medium mb-4">{position}</p>

      {/* LinkedIn Link */}
      <div className="flex justify-center">
        <a
          href="#"
          className="hover:text-[#4B5563] text-gray-600 smooth-transition"
          title="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
