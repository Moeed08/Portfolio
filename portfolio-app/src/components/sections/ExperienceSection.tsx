"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  website: string;
}

const ExperienceSection: React.FC = () => {
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

  const experiences = [
    {
      title: "Jr. AI Engineer",
      company: "MTBC CareCloud",
      location: "Islamabad, Pakistan",
      period: "March 2024 - Present",
      type: "Full-time",
      description: "Contributing to the development of AI-driven solutions and applications that support healthcare providers in improving patient care and operational efficiency.",
      achievements: [
        "Developed and deployed machine learning models for healthcare document processing",
        "Implemented OCR and RAG-based pipelines improving document processing speed by 90%",
        "Contributed to AI solutions serving healthcare providers across multiple regions",
        "Collaborated with cross-functional teams to enhance TalkEHR product features"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Azure", "Docker", "Git", "OpenAI", "SQL"],
      website: "https://carecloud.com"
    },
    {
      title: "AI Engineer Intern",
      company: "MTBC CareCloud", 
      location: "Islamabad, Pakistan",
      period: "September 2023 - February 2024",
      type: "Internship",
      description: "Developed and maintained OCR & RAG based pipelines that support healthcare document processing in TalkEHR platform.",
      achievements: [
        "Improved document processing accuracy by 95% through advanced OCR techniques",
        "Reduced error rates in document classification using machine learning models",
        "Integrated AI solutions with existing healthcare systems",
        "Participated in agile development processes and code reviews"
      ],
      technologies: ["Python", "Tesseract OCR", "Gemini", "Azure DevOps", "Git", "FastAPI"],
      website: "https://carecloud.com"
    },
    {
      title: "Undergraduate Lab Demonstration Assistant",
      company: "FAST National University",
      location: "Islamabad, Pakistan", 
      period: "August 2023 - January 2024",
      type: "Part-time",
      description: "Assisted in laboratory demonstrations for undergraduate computer science students, providing guidance on programming concepts and project development.",
      achievements: [
        "Received positive feedback from students for effective teaching methods",
        "Contributed to 80% increase in student engagement during lab sessions",
        "Assisted lab instructors with academic curriculum development",
        "Mentored students on data structures and algorithms implementation"
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "OOP", "VS Code"],
      website: "https://nu.edu.pk"
    }
  ];

  const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience }) => (
    <motion.div
      variants={itemVariants}
      className="relative bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-3 sm:-left-4 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg" />
      
      {/* Card Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 sm:mb-4 gap-2">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2 flex-wrap">
            <Briefcase size={14} className="sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </span>
            {experience.website && (
              <motion.a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className="flex flex-col space-y-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="leading-tight">{experience.period}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="leading-tight">{experience.location}</span>
          </div>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium w-fit">
            {experience.type}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="mb-4 sm:mb-6">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Key Achievements:</h4>
        <ul className="space-y-1.5 sm:space-y-2">
          {experience.achievements.map((achievement: string, i: number) => (
            <motion.li
              key={i}
              className="flex items-start space-x-1.5 sm:space-x-2 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false, margin: "-20px" }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
              <span className="text-xs sm:text-sm leading-relaxed">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Technologies Used:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {experience.technologies.map((tech: string, i: number) => (
            <motion.span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, margin: "-20px" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              My professional journey and the experiences that have shaped me as a developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-4 top-6 sm:top-8 bottom-6 sm:bottom-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />
            
            {/* Experience Cards */}
            <div className="space-y-6 sm:space-y-8 ml-6 sm:ml-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s create something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
