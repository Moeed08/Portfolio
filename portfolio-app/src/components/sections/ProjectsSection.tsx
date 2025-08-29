"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Button from '../ui/Button';
import PlaceholderImage from '../ui/PlaceholderImage';

const ProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      title: "Student Information Chatbot using RAG",
      description: "Built an intelligent conversational AI system using Retrieval-Augmented Generation (RAG) to provide accurate answers to student queries about university programs, admission processes, and academic services. Implemented advanced NLP techniques for context understanding.",
      image: "chatbot",
      technologies: ["Python", "LangChain", "OpenAI", "RAG", "Vector Database", "FastAPI", "NLP"],
      category: "AI/ML",
      date: "2024",
      github: "https://github.com/moeedasif/student-chatbot-rag",
      live: "",
      featured: true
    },
    {
      title: "Healthcare Document Processing Pipeline",
      description: "Developed and deployed OCR and RAG-based pipelines for TalkEHR at MTBC CareCloud, achieving 95% accuracy improvement in document classification and 90% faster processing speed. Automated healthcare document workflows using AI.",
      image: "ocr",
      technologies: ["Python", "Tesseract OCR", "Azure DevOps", "Gemini AI", "Machine Learning", "Computer Vision"],
      category: "AI/ML",
      date: "2024",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Machine Learning Model Deployment & MLOps",
      description: "Designed end-to-end ML pipelines for healthcare AI solutions including automated model training, validation, and cloud deployment. Implemented MLOps practices for continuous integration and monitoring of AI models.",
      image: "mlops",
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "AWS", "Azure", "MLflow", "CI/CD"],
      category: "AI/ML",
      date: "2024",
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Computer Vision & Image Processing System",
      description: "Developed computer vision solutions for healthcare applications including medical image analysis and automated diagnosis support. Utilized deep learning models for image classification and object detection.",
      image: "computer-vision",
      technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "Computer Vision", "Deep Learning"],
      category: "AI/ML",
      date: "2024",
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Data Structures & Algorithms Teaching Tools",
      description: "Created interactive educational tools and visualizations for teaching data structures and algorithms to undergraduate students during lab assistant role at FAST University. Enhanced student learning through hands-on programming exercises.",
      image: "algorithms",
      technologies: ["C++", "Data Structures", "Algorithms", "OOP", "Educational Technology"],
      category: "Education",
      date: "2023",
      github: "https://github.com/moeedasif/dsa-teaching-tools",
      live: "",
      featured: false
    },
    {
      title: "AI Portfolio Website",
      description: "Modern, responsive portfolio website showcasing AI/ML projects and skills. Features dark mode, smooth animations, and optimized performance. Built with Next.js and modern web technologies.",
      image: "portfolio",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "React"],
      category: "Frontend",
      date: "2025",
      github: "https://github.com/moeedasif/ai-portfolio",
      live: "",
      featured: false
    }
  ];

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      whileHover={{ y: -5 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-64">
        <PlaceholderImage
          width={600}
          height={400}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Tag size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {project.category}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Calendar size={16} />
            <span className="text-sm">{project.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="primary"
            size="sm"
            icon={ExternalLink}
            href={project.live}
            target="_blank"
            className="flex-1"
          >
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={Github}
            href={project.github}
            target="_blank"
            className="flex-1"
          >
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              icon={Github}
              href="https://github.com"
              target="_blank"
            >
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
