// Central configuration file - Update your personal information here
export const personalConfig = {
  // Personal Information
  name: "K Shruthi",
  title: "Full Stack Developer",
  bio: "Passionate developer creating amazing digital experiences. I love building scalable applications and solving complex problems with modern technologies.",
  location: "India",
  email: "shruthik1603@gmail.com",
  
  // Profile Photo - Replace with your actual photo URL
  profilePhoto: "/src/assets/my_img2.jpg",
  
  // Contact Links
  linkedinUrl: "https://www.linkedin.com/in/kshruthi1603",
  whatsappNumber: "+916300833287",
  phoneNumber: "6300833287",
  
  // WhatsApp predefined message
  whatsappMessage: "Hi Shruthi! I found your website and would like to connect with you.",
  
  // QR Code link (this webpage URL or LinkedIn)
  qrCodeLink: "https://www.linkedin.com/in/kshruthi1603",
  
  // Resume file path
  resumeUrl: "/KUMMARI_SHRUTHI_RESUME.pdf",
  
  // Skills with categories
  skills: [
    { name: "Python", category: "Backend", level: "Intermediate", icon: "🐍" },
    { name: "Django", category: "Backend", level: "Advanced", icon: "🟢" },
    { name: "MySQL", category: "Database", level: "Advanced", icon: "🗄️" },
    { name: "HTML/CSS", category: "Frontend", level: "Expert", icon: "🎨" },
    { name: "Matlab/Simulink", category: "Tools", level: "Advanced", icon: "📊" },
    { name: "Embedded Systems", category: "Hardware", level: "Intermediate", icon: "🔧" },
    { name: "Telecommunications", category: "Hardware", level: "Intermediate", icon: "📡" },
    { name: "Data Science", category: "Analytics", level: "Intermediate", icon: "📈" },
    { name: "Fuzzy Logic Control", category: "Control Systems", level: "Advanced", icon: "🎛️" },
    { name: "DTMF Signals", category: "Hardware", level: "Advanced", icon: "📞" },
  ],
  
  // Projects
  projects: [
    {
      title: "Mobile Based Home Automation",
      description: "Designed a mobile-based home automation system to control appliances like fans, A.C., and washing machines using DTMF signals. It combines telecommunications and embedded systems, enabling easy remote operation from any location via mobile phones.",
      technologies: ["Telecommunications", "Embedded Systems", "DTMF Signals"],
      category: "Hardware",
      icon: "🏠"
    },
    {
      title: "Energy Management of Hybrid Power System",
      description: "This project combines wind energy, solar power (PV), and battery storage in a hybrid system to provide efficient power. It uses Fuzzy Logic Control (FLC) to manage energy flow and a multilevel inverter to ensure smooth power delivery. The system is simulated in Matlab/Simulink, making it ideal for applications like electrification and water pumping.",
      technologies: ["Matlab/Simulink", "Fuzzy Logic Control", "Power Systems"],
      category: "Energy",
      icon: "⚡"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Designed and developed a recipe-sharing platform using Django and Python, allowing users to add and manage recipes with ingredients and detailed steps. The platform features ingredient-based search, enabling users to find recipes easily, and includes functionality to rate and review recipes, fostering a community of food enthusiasts.",
      technologies: ["Django", "Python", "MySQL", "HTML", "CSS"],
      category: "Web Development",
      icon: "🍳"
    }
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Technology",
      field: "Electrical and Electronics Engineering",
      institution: "Indur Institute of Engineering and Technology, Siddipet",
      duration: "Sep 2021 - July 2024",
      cgpa: "7.83",
      icon: "🎓"
    },
    {
      degree: "Diploma",
      field: "Electrical and Electronics Engineering", 
      institution: "Government Polytechnic Mahabubnagar",
      duration: "Aug 2018 - July 2021",
      cgpa: "7.87",
      icon: "📜"
    },
    {
      degree: "10th Class",
      field: "Secondary Education",
      institution: "The Vimala's Ich Dien Convent",
      duration: "June 2017 - Apr 2018",
      cgpa: "8.7",
      icon: "🏫"
    }
  ],
  
  // Certifications
  certifications: [
    {
      name: "Data Science using Python",
      issuer: "BRAINO VISION",
      year: "2024",
      icon: "📊"
    },
    {
      name: "NCC 'B' Certificate",
      issuer: "National Cadet Corps",
      year: "2021",
      icon: "🎖️"
    },
    {
      name: "NCC 'C' Certificate", 
      issuer: "National Cadet Corps",
      year: "2021",
      icon: "🏅"
    }
  ],
  
  // Workshops
  workshops: [
    {
      name: "Electrical Vehicle Technologies",
      organizer: "HIEE Empowering Engineers Pvt Ltd",
      year: "2023",
      icon: "🚗"
    },
    {
      name: "Python Workshop",
      organizer: "FIXITY-EDX",
      year: "2023", 
      icon: "🐍"
    }
  ],
  
  // Hobbies
  hobbies: [
    { name: "Making Crafts with Paper", icon: "🎨" },
    { name: "Listening to Music", icon: "🎵" },
    { name: "Playing Chess", icon: "♟️" },
    { name: "Reading Tech Articles", icon: "📚" }
  ],
  
  // Color Theme - Easy to customize
  theme: {
    primary: "#6366F1",
    secondary: "#EC4899", 
    accent: "#10B981",
    background: "#0F0F23",
    surface: "#1A1A2E",
    text: "#F8FAFC",
    textSecondary: "#CBD5E1",
  }
};