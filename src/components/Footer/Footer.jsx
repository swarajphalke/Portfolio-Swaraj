import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    if (id === "certifications") {
      navigate("/certifications");
      return;
    }

    // Scroll from other pages
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    // Scroll on homepage
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Swaraj Phalke</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Certifications", id: "certifications" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/SwarajPhalke" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/swaraj-phalke-b5539b220" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/swarajphalke_/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">© 2025 Swaraj Phalke. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
