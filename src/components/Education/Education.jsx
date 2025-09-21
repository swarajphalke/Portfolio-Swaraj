import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-[6vw] md:px-[10vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-600 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-14 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-5 sm:transform -translate-x-1/2 bg-gray-900 border-2 border-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center shadow-md z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-7 h-7 sm:w-8 sm:h-8 object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`relative w-full sm:max-w-sm mt-8 sm:mt-0 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 bg-gray-900 hover:scale-[1.01] transition-transform duration-300 ${
                index % 2 === 0 ? "sm:ml-16 text-left" : "sm:mr-16 text-left"
              }`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xs md:text-sm text-gray-400">
                    {edu.school}
                  </h4>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs text-purple-400 mt-1">{edu.date}</p>

              {/* Grade */}
              <p className="mt-3 text-gray-300 text-sm">
                <span className="font-semibold text-white">Grade:</span>{" "}
                {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
