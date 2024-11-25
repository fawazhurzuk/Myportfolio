import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Handle scroll for the glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/30 dark:bg-gray-900/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="flex items-center text-2xl font-sans font-semibold text-gray-900 dark:text-white transition duration-500 transform hover:scale-105 hover:text-blue-500">
  <img
    src="public/Image.jpg"
    alt="Profile"
    className="w-8 h-8 rounded-full mr-2 border border-gray-300 dark:border-gray-700"
  />
  Fawaz Hurzuk
</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="relative group text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-transform transform hover:scale-110"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle - Desktop View */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-110"
        >
          {darkMode ? (
            <FiSun className="text-yellow-400" size={20} />
          ) : (
            <FiMoon className="text-gray-600" size={20} />
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden relative flex flex-col w-6 h-6 justify-between items-center group"
        >
          <span
            className={`block h-1 w-full bg-gray-600 dark:bg-gray-300 rounded transition-transform duration-300 ${
              navOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-600 dark:bg-gray-300 rounded transition-opacity duration-300 ${
              navOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-gray-600 dark:bg-gray-300 rounded transition-transform duration-300 ${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black z-40 transform transition-transform duration-500 ease-in-out ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 mt-16">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(false)}
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle inside Mobile Navbar */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:shadow-lg transition-transform transform hover:scale-110"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" size={20} />
            ) : (
              <FiMoon className="text-gray-600" size={20} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
