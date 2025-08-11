import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Linkedin,
  Download,
  Send,
  Star,
  Heart
} from 'lucide-react';
import QRCodeLib from 'qrcode';
import { personalConfig } from '../data/config';
import './Contact.css';

const Contact: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrGenerated, setQrGenerated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCodeLib.toCanvas(canvasRef.current, personalConfig.qrCodeLink, {
            width: 200,
            margin: 2,
            color: {
              dark: '#1E293B',
              light: '#F8FAFC'
            }
          });
          setQrGenerated(true);
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQR();
  }, []);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = `${personalConfig.name.replace(/\s+/g, '_')}_contact_qr.png`;
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'whatsapp',
      description: 'Quick chat on WhatsApp',
      action: () => {
        const encodedMessage = encodeURIComponent(personalConfig.whatsappMessage);
        window.open(`https://wa.me/${personalConfig.whatsappNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`, '_blank');
      }
    },
    {
      name: 'Call Me',
      icon: <Phone className="w-6 h-6" />,
      color: 'phone',
      description: 'Direct phone call',
      action: () => {
        window.location.href = `tel:${personalConfig.phoneNumber}`;
      }
    },
    {
      name: 'Send SMS',
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'sms',
      description: 'Text message',
      action: () => {
        window.location.href = `sms:${personalConfig.phoneNumber}`;
      }
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      color: 'email',
      description: 'Send an email',
      action: () => {
        window.location.href = `mailto:${personalConfig.email}`;
      }
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalConfig.email}?subject=${subject}&body=${body}`;
  };

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

  return (
    <div className="contact-container">
      {/* Background Elements */}
      <div className="contact-background">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="bg-element element-1"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="bg-element element-2"
        />
        <motion.div
          animate={{ 
            rotate: 180,
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="bg-element element-3"
        />
      </div>

      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="contact-header">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="contact-badge"
          >
            <Heart className="w-4 h-4" />
            <span>Let's Connect</span>
          </motion.div>
          
          <h1 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          
          <p className="contact-description">
            I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. 
            Choose your preferred way to reach out!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="contact-grid">
          {/* Left Column - Contact Methods & Info */}
          <div className="contact-left">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="contact-methods">
              <h2 className="section-title">Quick Contact</h2>
              <div className="methods-grid">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={method.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      rotateY: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={method.action}
                    className={`contact-method ${method.color}`}
                  >
                    <div className="method-icon">
                      {method.icon}
                    </div>
                    <div className="method-content">
                      <h3>{method.name}</h3>
                      <p>{method.description}</p>
                    </div>
                    <div className="method-arrow">
                      <Send className="w-4 h-4" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="contact-info">
              <h2 className="section-title">Contact Information</h2>
              <div className="info-list">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="info-item"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <span className="info-label">Email</span>
                    <a href={`mailto:${personalConfig.email}`} className="info-value">
                      {personalConfig.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="info-item"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <span className="info-label">Phone</span>
                    <a href={`tel:${personalConfig.phoneNumber}`} className="info-value">
                      {personalConfig.phoneNumber}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="info-item"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">{personalConfig.location}</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="info-item"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="info-label">LinkedIn</span>
                    <a 
                      href={personalConfig.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="info-value"
                    >
                      Connect with me
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form & QR Code */}
          <div className="contact-right">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="contact-form-container">
              <h2 className="section-title">Send a Message</h2>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <a 
                  href={personalConfig.resumeUrl} 
                  download="Kummari_Shruthi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: '#6366F1',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download My Resume</span>
                </a>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-textarea"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="form-submit"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* QR Code */}
            <motion.div variants={itemVariants} className="qr-section">
              <h2 className="section-title">Quick Connect QR</h2>
              <div className="qr-container">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: qrGenerated ? 1 : 0, rotate: 0 }}
                  transition={{ delay: 1.0, duration: 0.8, type: "spring" }}
                  className="qr-wrapper"
                >
                  <canvas ref={canvasRef} className="qr-canvas" />
                </motion.div>

                <p className="qr-description">
                  Scan to connect on LinkedIn
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadQR}
                  className="qr-download"
                >
                  <Download className="w-4 h-4" />
                  <span>Download QR</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="social-section">
          <h2 className="section-title">Connect on Social Media</h2>
          <div className="social-links">
            <motion.a
              href={personalConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="social-link linkedin"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;