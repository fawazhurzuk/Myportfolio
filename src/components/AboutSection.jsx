import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 flex justify-center items-center"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-500">Fawaz Hurzuk</span>, a
            passionate Frontend Developer with a background in{" "}
            <span className="text-blue-500">
              Bachelor of science with specialization in information technology
            </span>
            . I love crafting intuitive user experiences and bringing designs to
            life with code.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            My journey in tech started with a fascination for how websites work,
            and it has grown into a career I’m deeply proud of. My current goal
            is to build applications that function flawlessly and make users
            happy.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            When I’m not coding, I enjoy{" "}
            <span className="italic">Reading books, Swimming & Trekking</span>{" "}
            and exploring the latest trends in technology.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
            <img
              src="/Image.jpg"
              alt="Your Name"
              className="w-full h-full object-cover"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
