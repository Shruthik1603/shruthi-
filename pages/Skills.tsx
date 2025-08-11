import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Settings, Zap, Star, Award, BookOpen, Wrench, Trophy, Users } from 'lucide-react';
import { personalConfig } from '../data/config';
import './Skills.css';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Hardware', 'Tools', 'Analytics', 'Control Systems'];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Code className="w-5 h-5" />;
      case 'backend':
        return <Settings className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'hardware':
        return <Wrench className="w-5 h-5" />;
      case 'tools':
        return <Zap className="w-5 h-5" />;
      case 'analytics':
        return <BookOpen className="w-5 h-5" />;
      case 'control systems':
        return <Settings className="w-5 h-5" />;
      case 'cloud':
        return <Cloud className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'expert';
      case 'advanced':
        return 'advanced';
      case 'intermediate':
        return 'intermediate';
      default:
        return 'beginner';
    }
  };

  const getLevelPercentage = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 95;
      case 'advanced':
        return 80;
      case 'intermediate':
        return 65;
      default:
        return 40;
    }
  };

  const filteredSkills = selectedCategory === 'All' 
    ? personalConfig.skills 
    : personalConfig.skills.filter(skill => skill.category === selectedCategory);

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="skills-container">
      {/* Background Elements */}
      <div className="skills-background">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="bg-element element-1"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="bg-element element-2"
        />
      </div>

      <motion.div
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="skills-header">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="skills-badge"
          >
            <Star className="w-4 h-4" />
            <span>Technical Expertise</span>
          </motion.div>
          
          <h1 className="skills-title">
            My <span className="gradient-text">Skills</span> & Expertise
          </h1>
          
          <p className="skills-description">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="category-filter">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="skills-grid" layout>
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`skill-card ${getLevelColor(skill.level)}`}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <span className="skill-emoji">{skill.icon}</span>
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div className="skill-level-badge">
                    <span className={`level-indicator ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                </div>

                <div className="skill-content">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-category">{skill.category}</p>
                  
                  {/* Progress Bar */}
                  <div className="progress-container">
                    <div className="progress-bar">
                      <motion.div
                        className={`progress-fill ${getLevelColor(skill.level)}`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: hoveredSkill === skill.name ? `${getLevelPercentage(skill.level)}%` : '0%'
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="progress-text">{getLevelPercentage(skill.level)}%</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="skill-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overlay-content">
                    <Star className="w-6 h-6" />
                    <span>Click to learn more</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={itemVariants}
          className="projects-section"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {personalConfig.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="project-card"
              >
                <div className="project-header">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={itemVariants}
          className="education-section"
        >
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {personalConfig.education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="education-item"
              >
                <div className="education-icon">
                  <span>{edu.icon}</span>
                </div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-details">
                    <span className="education-duration">{edu.duration}</span>
                    <span className="education-cgpa">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          variants={itemVariants}
          className="achievements-section"
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="achievements-grid">
            {personalConfig.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="achievement-card"
              >
                <div className="achievement-icon">{cert.icon}</div>
                <h3 className="achievement-name">{cert.name}</h3>
                <p className="achievement-issuer">{cert.issuer}</p>
                <span className="achievement-year">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workshops */}
        <motion.div
          variants={itemVariants}
          className="workshops-section"
        >
          <h2 className="section-title">Workshops Attended</h2>
          <div className="workshops-grid">
            {personalConfig.workshops.map((workshop, index) => (
              <motion.div
                key={workshop.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="workshop-card"
              >
                <div className="workshop-icon">{workshop.icon}</div>
                <div className="workshop-content">
                  <h3 className="workshop-name">{workshop.name}</h3>
                  <p className="workshop-organizer">{workshop.organizer}</p>
                  <span className="workshop-year">{workshop.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          variants={itemVariants}
          className="hobbies-section"
        >
          <h2 className="section-title">Hobbies & Interests</h2>
          <div className="hobbies-grid">
            {personalConfig.hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="hobby-card"
              >
                <div className="hobby-icon">{hobby.icon}</div>
                <span className="hobby-name">{hobby.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          className="skills-summary"
        >
          <div className="summary-grid">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="summary-card"
            >
              <div className="summary-icon">💻</div>
              <div className="summary-number">{personalConfig.skills.length}</div>
              <div className="summary-label">Total Skills</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="summary-card"
            >
              <div className="summary-icon">🚀</div>
              <div className="summary-number">
                {personalConfig.projects.length}
              </div>
              <div className="summary-label">Projects</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="summary-card"
            >
              <div className="summary-icon">🏆</div>
              <div className="summary-number">
                {personalConfig.certifications.length}
              </div>
              <div className="summary-label">Certifications</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="summary-card"
            >
              <div className="summary-icon">📚</div>
              <div className="summary-number">
                {personalConfig.workshops.length}
              </div>
              <div className="summary-label">Workshops</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;