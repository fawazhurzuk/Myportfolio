import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/Portfolio.webp", 
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/portfolio",
  },
  {
    title: "E-commerce App",
    description: "A fully responsive e-commerce platform.",
    image: "/E-commerce.webp",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/ecommerce",
  },
  {
    title: "Task Manager",
    description: "A simple task management app with user authentication.",
    image: "/Task manager.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/task-manager",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
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
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
