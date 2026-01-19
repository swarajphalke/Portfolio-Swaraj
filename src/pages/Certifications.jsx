import React from "react";
import Tilt from "react-parallax-tilt";

// Import certification images
import cloudCert from "../assets/certifications/cloud_computing.png";
import mlCert from "../assets/certifications/machine_learning_coursera.png";
import reactCert from "../assets/certifications/react_udemy.png";
import tailwindCert from "../assets/certifications/tailwindcss_udemy.png";
import webDevCert from "../assets/certifications/web_dev_coursera.png";
import jsCourseraCert from "../assets/certifications/javascript_coursera.png";
import jsUdemyCert from "../assets/certifications/javascript_udemy.png";
import uxCert from "../assets/certifications/ux_coursera.png";
import figmaCert from "../assets/certifications/figma_coursera.png";

const certifications = [
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    year: "2024",
    image: cloudCert,
  },
  {
    title: "Machine Learning",
    provider: "Coursera",
    year: "2024",
    image: mlCert,
  },
  {
    title: "React Certification",
    provider: "Udemy",
    year: "2024",
    image: reactCert,
  },
  {
    title: "Tailwind CSS",
    provider: "Udemy",
    year: "2024",
    image: tailwindCert,
  },
  {
    title: "Web Development (HTML, CSS, JS)",
    provider: "Coursera",
    year: "2023",
    image: webDevCert,
  },
  {
    title: "JavaScript Certification",
    provider: "Coursera",
    year: "2024",
    image: jsCourseraCert,
  },
  {
    title: "JavaScript Certification",
    provider: "Udemy",
    year: "2024",
    image: jsUdemyCert,
  },
  {
    title: "UX Design Certification",
    provider: "Coursera",
    year: "2024",
    image: uxCert,
  },
  {
    title: "Figma Certification",
    provider: "Udemy",
    year: "2024",
    image: figmaCert,
  },
];

const Certifications = () => (
  <div className="flex flex-col min-h-screen bg-gray-950 text-white font-sans">
    <section className="flex-grow py-16 px-[6vw] md:px-[10vw] lg:px-[14vw]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">CERTIFICATIONS</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Recognized certifications that validate my skills and continuous
          learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={900}
            className="h-full"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
              <div className="overflow-hidden rounded-xl mb-4 bg-gray-800 flex items-center justify-center p-2">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto max-h-52 object-contain transition-transform duration-500 transform hover:scale-105 rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm">{cert.provider}</p>
              <p className="text-gray-400 text-xs mt-1">{cert.year}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  </div>
);

export default Certifications;
