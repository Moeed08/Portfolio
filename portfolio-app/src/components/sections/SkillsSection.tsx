"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 90, color: "from-orange-500 to-red-500" },
        { name: "PyTorch", level: 85, color: "from-red-500 to-pink-500" },
        { name: "Keras", level: 88, color: "from-purple-500 to-indigo-500" },
        { name: "Scikit-learn", level: 92, color: "from-blue-500 to-cyan-500" },
        { name: "OpenAI/LLMs", level: 85, color: "from-green-500 to-emerald-500" },
      ]
    },
    {
      title: "Programming Languages", 
      skills: [
        { name: "Python", level: 95, color: "from-green-600 to-blue-600" },
        { name: "C/C++", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "SQL", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 75, color: "from-yellow-500 to-orange-500" },
        { name: "TypeScript", level: 70, color: "from-blue-600 to-blue-700" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 82, color: "from-orange-500 to-yellow-500" },
        { name: "Docker", level: 78, color: "from-blue-500 to-blue-600" },
        { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-800" },
        { name: "FastAPI", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "MLflow", level: 75, color: "from-purple-500 to-purple-600" },
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={categoryIndex * 3 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Azure DevOps", "Gemini AI", "Pandas", "NumPy", 
                "Jupyter Notebooks", "OpenCV", "NLTK", "Streamlit", "Flask","FastAPI",
                "RAG Systems", "Vector Databases", "Hugging Face", "LangChain", 
                "Computer Vision", "NLP"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
