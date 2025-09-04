"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  relevantCourses: string[];
  website: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  skills: string[];
}

const EducationSection: React.FC = () => {
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

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "FAST National University",
      location: "Islamabad, Pakistan",
      period: "2021 - 2025",
      type: "Bachelor's Degree",
      description: "Comprehensive computer science program focusing on software engineering, algorithms, data structures, and artificial intelligence.",
      achievements: [
        "Strong foundation in programming and software development",
        "Specialized in AI/ML and data science courses",
        "Active participation in coding competitions and tech events",
        "Served as Lab Demonstration Assistant for undergraduate courses"
      ],
      relevantCourses: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Artificial Intelligence", 
        "Database Systems",
        "Software Engineering",
        "Computer Networks"
      ],
      website: "https://nu.edu.pk"
    }
  ];

  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI via Coursera",
      date: "2024",
      type: "Professional Certificate",
      description: "Comprehensive course on LLMs, fine-tuning, and generative AI applications.",
      skills: ["LLMs", "Fine-tuning", "Generative AI", "Transformers"]
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024", 
      type: "Cloud Certification",
      description: "Foundational knowledge of AWS cloud services and architecture.",
      skills: ["AWS", "Cloud Computing", "Infrastructure", "Security"]
    }
  ];

  const EducationCard: React.FC<{ education: Education; index: number }> = ({ education }) => (
    <motion.div
      variants={itemVariants}
      className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -5 }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
      
      {/* Card Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {education.degree}
          </h3>
          <div className="flex items-center space-x-2 mb-2">
            <GraduationCap size={16} className="text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-medium">
              {education.institution}
            </span>
            {education.website && (
              <motion.a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className="flex flex-col space-y-1 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{education.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {education.description}
      </p>

      {/* Achievements */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {education.achievements.map((achievement: string, i: number) => (
            <motion.li
              key={i}
              className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-green-500 mt-1">•</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Relevant Courses */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Relevant Courses:</h4>
        <div className="flex flex-wrap gap-2">
          {education.relevantCourses.map((course: string, i: number) => (
            <motion.span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {course}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Award size={20} className="text-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {cert.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {cert.issuer} • {cert.date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {cert.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {cert.skills.map((skill: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4"
          >
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Education & 
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent"> Certifications</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Academic background and professional certifications in computer science and AI/ML
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-600" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
