import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-[6vw] md:px-[10vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-600 h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-14 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-5 sm:transform -translate-x-1/2 bg-gray-900 border-2 border-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center shadow-md z-10">
              <img
                src={experience.img}
                alt={experience.company}
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
                <div className="w-12 h-12 bg-white rounded-md overflow-hidden shadow-sm flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-xs md:text-sm text-gray-400">
                    {experience.company}
                  </h4>
                </div>
              </div>

              {/* Date */}
              <p className="text-xs text-purple-400 mt-1">{experience.date}</p>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-3">
                <h5 className="font-medium text-white text-sm">Skills:</h5>
                <ul className="flex flex-wrap mt-1">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-purple-600/80 text-white px-2 py-1 text-xs rounded-md mr-2 mb-2 border border-purple-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
