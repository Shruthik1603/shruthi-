import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star, Code, Heart, Zap, Briefcase, Phone, User } from 'lucide-react';
import { personalConfig } from '../data/config';
import './Home.css';

const Home: React.FC = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="home-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <motion.div 
          className="floating-shape shape-1"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="floating-shape shape-2"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="floating-shape shape-3"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <motion.div
        className="hero-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Advanced Animation */}
        <motion.div
          variants={itemVariants}
          className="profile-image-container"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="profile-image-wrapper"
          >
            <img
              src={personalConfig.profilePhoto}
              alt={personalConfig.name}
              className="profile-image"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="profile-ring"
            />
          </motion.div>
          
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-5, 5, -5], x: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="floating-icon icon-1"
          >
            <Code className="w-6 h-6" />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5], x: [2, -2, 2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="floating-icon icon-2"
          >
            <Heart className="w-5 h-5" />
          </motion.div>
          <motion.div
            animate={{ y: [-3, 3, -3], x: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="floating-icon icon-3"
          >
            <Zap className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Hero Content */}
        <motion.div variants={itemVariants} className="hero-content">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="greeting-badge"
          >
            <Star className="w-4 h-4" />
            <span>Welcome to my digital space</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="hero-title"
          >
            Hi, I'm{' '}
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="gradient-text"
            >
              {personalConfig.name}
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="hero-subtitle"
          >
            {personalConfig.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="hero-description"
          >
            {personalConfig.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-actions"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="primary-button"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="secondary-button"
              >
                <Briefcase className="w-5 h-5" />
                <span>View Skills</span>
              </motion.button>
            </Link>

            <a 
              href={personalConfig.resumeUrl} 
              download="Kummari_Shruthi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="secondary-button"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="stats-section"
      >
        <div className="stats-grid">
          {[
            { number: `${personalConfig.skills.length}+`, label: "Technologies", icon: "💻" },
            { number: `${personalConfig.projects.length}`, label: "Projects", icon: "🚀" },
            { number: `${personalConfig.certifications.length}`, label: "Certifications", icon: "🏆" },
            { number: "100%", label: "Dedication", icon: "❤️" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="stat-card"
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="quick-links"
      >
        <h3>Quick Navigation</h3>
        <div className="links-grid">
          <Link to="/skills" className="quick-link">
            <Briefcase className="w-6 h-6" />
            <span>My Skills</span>
          </Link>
          <Link to="/contact" className="quick-link">
            <Phone className="w-6 h-6" />
            <span>Contact Me</span>
          </Link>
          <a href={personalConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="quick-link">
            <User className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;