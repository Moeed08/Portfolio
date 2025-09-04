"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
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

  const features = [
    {
      icon: Code,
      title: "AI/ML Development",
      description: "Developing machine learning models and AI solutions using TensorFlow, PyTorch, and advanced algorithms."
    },
    {
      icon: Palette,
      title: "Data Science",
      description: "Extracting insights from complex datasets and building predictive models for real-world applications."
    },
    {
      icon: Zap,
      title: "Cloud & MLOps",
      description: "Deploying scalable AI systems on AWS/Azure with MLOps practices and automated pipelines."
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "Passionate about leveraging cutting-edge AI technologies like LLMs and AI Agents to solve problems."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              AI Engineer with experience in developing machine learning models and AI solutions. Proficient in Generative AI technologies including LLMs, and Computer vision technologies. Proven track
              record in building scalable AI systems, voice assistants, and automated solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <div className="relative">
                <div className="aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-2 sm:inset-4 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <Image
                      src="/my_image.jpg"
                      alt="Muhammad Moeed Asif - AI/ML Engineer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                {[
                  { number: "10+", label: "Projects" },
                  { number: "1+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi! I&apos;m Muhammad Moeed Asif, an AI Engineer with hands-on experience in developing 
                  machine learning models and AI solutions. I&apos;m skilled in Python, TensorFlow, PyTorch, 
                  and generative AI technologies including LLMs and computer vision.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  I have demonstrated success in building scalable AI systems, voice assistants, and 
                  automated solutions. I&apos;m familiar with cloud platforms (AWS, Azure) and MLOps practices, 
                  and I specialize in NLP, Generative AI, Agentic AI, and LLMs.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently working at MTBC CareCloud as a Junior AI Engineer, I lead R&D on Agentic and 
                  Generative AI solutions, boosting healthcare product efficiency by 90%. I&apos;m passionate 
                  about creating AI solutions that solve real-world problems in healthcare and beyond.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
