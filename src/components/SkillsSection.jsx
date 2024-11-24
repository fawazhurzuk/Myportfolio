import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb} from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },

  ];

  return (
    <section
      id="skills"
      className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 flex justify-center items-center"
    >
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 mb-8"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
