import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex space-x-6"
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/fawaz-hurzuk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/fawazhurzuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:fawazhurzuk90@gmail.com"
              className="text-red-500 dark:text-red-400 hover:text-red-300 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300 dark:border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-center">
            © 2024 <span className="font-semibold">Fawaz Hurzuk</span>. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
