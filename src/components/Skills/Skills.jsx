// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-[6vw] md:px-[10vw] lg:px-[14vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
          className="h-full"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-purple-500/40 transition-all duration-300 h-full flex flex-col">
            {/* Category Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-300 text-center mb-4">
              {category.title}
            </h3>

            {/* Skills Grid (no flex-grow, keeps natural spacing) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start gap-2 border border-gray-700 rounded-lg px-3 py-2 hover:border-purple-500 transition"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
