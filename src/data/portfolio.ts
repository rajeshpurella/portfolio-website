import { Project, Experience, Skill, SocialLink } from '../types';

export const personalInfo = {
  name: 'Rajesh Purella',
  role: 'Full Stack Developer',
  location: 'Hyderabad, Telangana, India',
  email: 'rajeshpurella2002@gmail.com',
  phone: '+91 6304821005',
  tagline: 'Full Stack Developer | Building scalable, AI-ready web apps with real-time insights',
  bio: 'Full-stack developer with hands-on experience in building scalable web applications using React.js, Node.js, MongoDB, and Python. Skilled in developing real-time dashboards, RESTful APIs, and integrating ML models for actionable insights. Experienced in cloud deployment and delivering production-ready solutions. Passionate about modern web technologies and creating applications that are robust, efficient, and AI-ready.',
  availability: 'Available for new opportunities',
  responseTime: '24 hours',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rajesh-purella/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/rajeshpurella',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:rajeshpurella2002@gmail.com',
    icon: 'mail',
  },
  {
    name: 'Phone',
    url: 'tel:+916304821005',
    icon: 'phone',
  },
];

export const skills: Skill[] = [
  { name: 'React.js', level: 90, category: 'frontend', icon: 'react', experience: '2+ years production' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: 'code', experience: '1+ years' },
  { name: 'JavaScript ES6+', level: 90, category: 'frontend', icon: 'javascript', experience: '2+ years' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: 'paintbrush', experience: '1+ years' },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend', icon: 'code2', experience: '3+ years' },
  
  { name: 'Node.js', level: 85, category: 'backend', icon: 'server', experience: 'RESTful APIs, middleware' },
  { name: 'Express.js', level: 80, category: 'backend', icon: 'zap', experience: 'Production APIs' },
  { name: 'Python', level: 80, category: 'backend', icon: 'snake', experience: 'Django, ML basics' },
  { name: 'Django', level: 75, category: 'backend', icon: 'database', experience: 'MVT architecture' },
  
  { name: 'MongoDB', level: 85, category: 'database', icon: 'database', experience: 'Schema design, aggregation' },
  { name: 'MySQL', level: 80, category: 'database', icon: 'table', experience: 'Complex queries' },
  { name: 'PostgreSQL', level: 75, category: 'database', icon: 'server', experience: 'Optimization' },
  
  { name: 'Git', level: 90, category: 'devops', icon: 'git-branch', experience: 'Version control' },
  { name: 'Docker', level: 65, category: 'devops', icon: 'container', experience: 'Basic containerization' },
  { name: 'AWS', level: 70, category: 'devops', icon: 'cloud', experience: 'Fundamentals' },
  
  { name: 'VS Code', level: 95, category: 'tools', icon: 'code', experience: 'Daily development' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'AITAR Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: 'Aug 2024 – Present',
    location: 'Hyderabad, India',
    current: true,
    achievements: [
      'Developed Solar & Weather Forecasting Dashboard using React, Chart.js, Node.js, MongoDB',
      'Integrated ML model outputs into real-time dashboards with 99.9% uptime',
      'Built scalable REST APIs processing 10K+ daily weather dataset requests',
      'Successfully deployed full-stack application on Netlify & Render with CI/CD',
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Household Management System',
    description: 'Full-stack inventory management with real-time notifications',
    features: [
      'CRUD operations for household items',
      'Smart low-stock alerts',
      'PDF report generation',
      'Dark mode support',
      'Mobile-responsive design',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    metrics: [
      '40% reduction in household waste',
      '60% faster shopping planning',
      'Real-time notifications',
    ],
    image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://household-management-demo.netlify.app',
    githubUrl: 'https://github.com/rajeshpurella/household-management',
    featured: true,
  },
  {
    id: '2',
    title: 'Early Detection of Skin Diseases',
    description: 'CNN-powered dermatology diagnosis system',
    features: [
      'Image classification with confidence scoring',
      'Medical report export',
      'Support for 7 skin condition types',
      'User-friendly interface',
      'Data visualization charts',
    ],
    techStack: ['TensorFlow', 'Scikit-learn', 'Django', 'SQLite', 'OpenCV'],
    metrics: [
      '94% diagnostic accuracy',
      '7 skin condition types',
      'Sub-second processing time',
    ],
    image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://skin-disease-detection.netlify.app',
    githubUrl: 'https://github.com/rajeshpurella/skin-disease-detection',
    featured: true,
  },
  {
    id: '3',
    title: 'E-Tailing Shopping Platform',
    description: 'Full-featured e-commerce with secure payments',
    features: [
      'User authentication & authorization',
      'Product catalog with search',
      'Order management system',
      'Analytics dashboard',
      'Secure payment integration',
    ],
    techStack: ['Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'XAMPP'],
    metrics: [
      'Sub-3s page loads',
      'Mobile-first design',
      'Secure transactions',
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://etailing-platform.netlify.app',
    githubUrl: 'https://github.com/rajeshpurella/etailing-platform',
    featured: true,
  },
  {
    id: '4',
    title: 'Solar & Weather Forecasting Dashboard',
    description: 'Real-time ML-powered weather and solar energy prediction system',
    features: [
      'Real-time weather data visualization',
      'Solar energy output predictions',
      'Interactive charts and graphs',
      'Historical data analysis',
      'Mobile-responsive dashboard',
    ],
    techStack: ['React.js', 'Chart.js', 'Node.js', 'MongoDB', 'Python', 'ML Models'],
    metrics: [
      '99.9% uptime achieved',
      '10K+ daily API requests',
      'Real-time data processing',
    ],
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://solar-weather-dashboard.netlify.app',
    githubUrl: 'https://github.com/rajeshpurella/solar-weather-dashboard',
    featured: true,
  },
];

export const education = {
  degree: 'B.Tech Computer Science & Engineering',
  institution: 'Institute of Aeronautical Engineering, Hyderabad',
  duration: '2021–2024',
  cgpa: '7.15/10',
};

export const certifications = [
  {
    name: 'Programming in Java',
    issuer: 'NPTEL',
    type: 'Course Certification',
  },
  {
    name: 'Python Programming',
    issuer: 'HackerRank',
    type: 'Skill Verification',
  },
  {
    name: 'TCS iON Career Edge',
    issuer: 'TCS',
    type: 'Young Professional Program',
  },
];