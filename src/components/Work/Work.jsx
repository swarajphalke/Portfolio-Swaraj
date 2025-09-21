import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-16 px-[6vw] md:px-[10vw] lg:px-[14vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-gray-700 bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-purple-500/40 transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto">
          {/* Modal Container */}
          <div className="relative bg-[#1a1a2e] rounded-xl shadow-2xl w-full max-w-xl mx-auto my-8">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-purple-500 transition"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="w-full flex justify-center px-4 pt-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-w-md max-h-[250px] w-full object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-md px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-3 py-2 rounded-lg text-sm font-semibold text-center transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-semibold text-center transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
