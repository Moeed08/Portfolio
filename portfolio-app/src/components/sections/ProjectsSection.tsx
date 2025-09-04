"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Button from '../ui/Button';
import PlaceholderImage from '../ui/PlaceholderImage';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: string;
  date: string;
  github?: string;
  live?: string;
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Fallback to ensure section becomes visible after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
      title: "Final Year Project: Data Genie",
      description: "A web based synthetic data generation tool for quality assurance and testing of textile fabric in the textile industry.",
      image: "/images/data-genie.svg",
      technologies: ["Python", "Stable Diffusion", "Computer Vision", "YOLO-V8", "Git", "MERN Stack", "NLP","Generative AI"],
      category: "Personal Project",
      date: "Sep 2024 - June 2025",
      github: "https://github.com/Hammadqr/FYP-DataGenie",
      featured: true
    },
    {
      title: "AI Powered TalkEHR's Document Processing Pipeline",
      description: "Developed and deployed OCR and RAG-based pipelines for TalkEHR at MTBC CareCloud, achieving 95% accuracy improvement in document classification and 90% faster processing speed. Automated healthcare document workflows using AI.",
      image: "/images/talkehr-pipeline.svg",
      technologies: ["Python", "Tesseract OCR", "Azure DevOps", "Gemini AI", "Git", "NLP", "RAG","Docker","CI/CD","FastAPI"],
      category: "Company Project",
      date: "March 2025 - June 2025",
      featured: false
    },
    {
      title: "Automated Call Center",
      description: "Integrated AI call center with Avaya communication platform, enabling real-time voice interactions, streamlining client support operations and reducing human agent workload.",
      image: "/images/ai-call-center.svg",
      technologies: ["Python", "Git", "OpenAI", "Azure DevOps", "FastAPI"],
      category: "Company Project",
      date: "June 2025 - Present",
      featured: false
    },
    {
      title: "Pure Air AI",
      description: "Developed and deployed a full-fledged real-time weather and air quality monitoring application on the AWS ecosystem, leveraging cloud services for scalable and reliable performance.",
      image: "/images/pure-air-ai.svg",
      technologies: ["Python", "LSTM", "PyTorch","Docker","MLflow","CI/CD","Git/Github","Deep Learning"],
      category: "Personal Project",
      date: "Nov 2024 - Jan 2025",
      github: "https://github.com/Moeed08/Pollution-Prediction-in-time-series-using-LSTM",
      featured: false
    },
    {
      title: "Text to Image Generation",
      description: "Developed a text-to-image generation service using a gRPC backend and a Gradio frontend. The backend forwards prompts to a Hugging Face Space hosting a Stable Diffusion model, and the frontend provides a simple web interface for users to enter prompts and view the generated images.",
      image: "/images/text-to-image.svg",
      technologies: ["Python", "Stable Diffusion", "gRPC", "Gradio", "Docker", "NLP", "CI/CD"],
      category: "Personal Project",
      date: "April 2025 - May 2025",
      github: "https://github.com/Moeed08/NLP-Project",
      live: "",
      featured: false
    }
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        project.featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      whileHover={{ y: -5 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
          <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
        <PlaceholderImage
          width={600}
          height={400}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} className="sm:w-5 sm:h-5" />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Tag size={14} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
              {project.category}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <Calendar size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{project.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.live && (
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
          )}
          {project.github && (
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
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          onViewportEnter={() => setIsVisible(true)}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              href="https://github.com/Moeed08"
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
