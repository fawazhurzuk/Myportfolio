import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12 px-6"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 mb-12"
        >
          Let's Work Together!
        </motion.h2>

        {/* Contact Form and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mt-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3 text-center"
          >
            <p className="text-lg mb-4">You can also reach me here:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/fawaz-hurzuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/fawazhurzuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="mailto:fawazhurzuk90@gmail.com"
                className="text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
