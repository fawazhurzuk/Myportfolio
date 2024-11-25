import React from "react";
import { motion } from "framer-motion";
import Typing from "react-typing-effect";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center px-6"
    >
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400">
          Hi,{" "}
          <Typing
            text={["I'm Fawaz Hurzuk"]}
            speed={70} // Adjusted speed for smoothness
            eraseSpeed={50} // Smooth erasing
            eraseDelay={2500} // Delay before erasing
            typingDelay={500} // Delay before starting
          />
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
          A passionate Frontend Developer creating seamless user experiences.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 flex space-x-4"
      >
        <a
          href="/Fawaz resume.pdf"
          download="Fawaz_Hurzuk_Resume.pdf"
          className="px-6 py-3 text-blue-600 bg-white-600 border-2 border-blue-600 hover:bg-blue-100 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 text-blue-600 bg-white-600 border-2 border-blue-600 hover:bg-blue-100 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Decorative Scroll Down */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="animate-bounce text-gray-600 dark:text-gray-300 text-3xl">
          ↓
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
