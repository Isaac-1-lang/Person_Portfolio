import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Star, 
  Rocket, 
  Globe, 
  Download, 
  ExternalLink,
  Play,
  ArrowRight,
  Sparkles,
  MousePointer,
  Code2,
  Palette,
  Zap
} from 'lucide-react';

// Import your navbar and footer components
import PortfolioNavbar from '../components/Navbar';
import PortfolioFooter from '../components/Footer';

const PortfolioLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder', 'Problem Solver'];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Particle system
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  // Reveal animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern React app with JavaScript, featuring dynamic animations and seamless UX.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      image: '🛒',
      color: 'from-purple-500 to-pink-500',
      link:"https://ecommerce-5-vm0o.onrender.com"
    },
    {
      title: 'Wastes Classification System',
      description: 'Real-time upload and scan wastes type with clear description of wastes and other revelant informtion.',
      tech: ['Python', 'React Native', 'Pytorch', 'TensorFlow'],
      image: '🤖',
      color: 'from-blue-500 to-cyan-500',
      link:"https://github.com/Isaac-1-lang/Green_IQ_111"
    },
    {
      title: 'Ngwino',
      description: 'Comprehensive design system with reusable components and design tokens.',
      tech: ['Django', 'PostgreSQL', 'HTML', 'CSS'],
      image: '📱',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95, icon: <Code2 size={20} />, color: 'bg-blue-500' },
    { name: 'UI/UX Design', level: 88, icon: <Palette size={20} />, color: 'bg-purple-500' },
    { name: 'Backend Development', level: 82, icon: <Zap size={20} />, color: 'bg-green-500' },
    { name:'Prompt Engineering', level: 90, icon: <MousePointer size={20} />, color: 'bg-yellow-500' },
    { name: 'Creative Coding', level: 85, icon: <Sparkles size={20} />, color: 'bg-pink-500' },
    { name: 'Problem Solving', level: 92, icon: <Rocket size={20} />, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      <PortfolioNavbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}

        {/* Mouse Follower */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-8">
              <Sparkles className="text-purple-600" size={20} />
              <span className="text-purple-700 font-medium">Hello, I'm a</span>
            </div>

            {/* Dynamic Role */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that inspire, engage, and deliver results. 
              I turn ideas into beautiful, functional reality with code and creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>View My Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown className="text-gray-400 mx-auto" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Passionate about creating digital experiences that matter</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 1 year of experience in web and mobile apps development and design, I specialize in creating 
                modern, responsive applications that combine beautiful aesthetics with powerful functionality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in the power of clean code, intuitive design, and continuous learning. 
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">1+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-6xl shadow-2xl">
                👨‍💻
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full flex items-center justify-center">
                <Star className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 ${skill.color} rounded-lg text-white`}>
                      {skill.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl`}>
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors">
                      <Globe size={16} />
                      <span>Source</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">Ready to bring your ideas to life?</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <Rocket className="mx-auto mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your ideas and create something amazing together.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Import your footer component */}
      <PortfolioFooter />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLanding;