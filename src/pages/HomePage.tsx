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
  Zap,
  Coffee,
  Music,
  BookOpen,
  Heart,
  Users,
  Trophy,
  Camera,
  Gamepad2,
  Lightbulb,
  Clock,
  Target,
  Award,
  School,
  MapPin
} from 'lucide-react';

const PortfolioLanding: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder', 'Problem Solver', 'RCA Graduate'];

  const codingQuotes = [
    "Code is poetry written in logic",
    "Every bug is a learning opportunity",
    "Clean code is not written by following rules, but by caring",
    "The best code is no code at all",
    "Programming is thinking, not typing"
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Role and quote rotation
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    
    const quoteInterval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % codingQuotes.length);
    }, 4000);
    
    return () => {
      clearInterval(roleInterval);
      clearInterval(quoteInterval);
    };
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
      description: 'Modern React app with JavaScript, featuring dynamic animations and seamless UX. Built during my final year at RCA.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
      image: '🛒',
      color: 'from-purple-500 to-pink-500',
      link: "https://ecommerce-5-vm0o.onrender.com",
      category: 'Web Development'
    },
    {
      title: 'Wastes Classification System',
      description: 'AI-powered waste classification using deep learning. Inspired by Rwanda\'s green initiatives and sustainability goals.',
      tech: ['Python', 'React Native', 'PyTorch', 'TensorFlow'],
      image: '🤖',
      color: 'from-blue-500 to-cyan-500',
      link: "https://github.com/Isaac-1-lang/Green_IQ_111",
      category: 'Machine Learning'
    },
    {
      title: 'Ngwino',
      description: 'A comprehensive platform designed to connect Rwandan communities. Built with passion for local impact.',
      tech: ['Django', 'PostgreSQL', 'HTML', 'CSS'],
      image: '📱',
      color: 'from-green-500 to-teal-500',
      category: 'Full Stack'
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95, icon: <Code2 size={20} />, color: 'bg-blue-500' },
    { name: 'UI/UX Design', level: 88, icon: <Palette size={20} />, color: 'bg-purple-500' },
    { name: 'Backend Development', level: 82, icon: <Zap size={20} />, color: 'bg-green-500' },
    { name: 'Prompt Engineering', level: 90, icon: <MousePointer size={20} />, color: 'bg-yellow-500' },
    { name: 'Creative Coding', level: 85, icon: <Sparkles size={20} />, color: 'bg-pink-500' },
    { name: 'Problem Solving', level: 92, icon: <Rocket size={20} />, color: 'bg-red-500' }
  ];

  const roleModels = [
    {
      name: 'Linus Torvalds',
      role: 'Creator of Linux',
      inspiration: 'Open source philosophy and collaborative development',
      impact: 'Showed me the power of sharing knowledge'
    },
    {
      name: 'Sarah Drasner',
      role: 'Vue.js Core Team',
      inspiration: 'Creative coding and design-developer bridge',
      impact: 'Inspired my approach to UI/UX development'
    },
    {
      name: 'Kigali Tech Community',
      role: 'Local Heroes',
      inspiration: 'Building tech solutions for Rwanda',
      impact: 'Motivated me to create impactful local solutions'
    }
  ];

  const hobbies = [
    {
      icon: <Coffee size={24} />,
      title: 'Coffee & Code',
      description: 'Best debugging sessions happen over a good cup of Rwandan coffee',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: <Music size={24} />,
      title: 'Music Production',
      description: 'Creating beats and melodies - creativity flows in many forms',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Camera size={24} />,
      title: 'Photography',
      description: 'Capturing Rwanda\'s beauty one frame at a time',
      color: 'from-blue-400 to-teal-500'
    },
    {
      icon: <Gamepad2 size={24} />,
      title: 'Gaming',
      description: 'Strategy games fuel my problem-solving mindset',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Tech Reading',
      description: 'Always learning - from algorithms to design patterns',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: <Users size={24} />,
      title: 'Mentoring',
      description: 'Sharing knowledge with upcoming developers at RCA',
      color: 'from-red-400 to-pink-500'
    }
  ];

  const dailyLife = [
    { time: '06:00', activity: 'Morning coffee & tech news', icon: <Coffee size={16} /> },
    { time: '08:00', activity: 'Deep work - coding sessions', icon: <Code2 size={16} /> },
    { time: '12:00', activity: 'Lunch & community discussions', icon: <Users size={16} /> },
    { time: '14:00', activity: 'Learning new technologies', icon: <BookOpen size={16} /> },
    { time: '18:00', activity: 'Side projects & experimentation', icon: <Lightbulb size={16} /> },
    { time: '20:00', activity: 'Hobbies & creative time', icon: <Heart size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-8">
              <MapPin className="text-purple-600" size={20} />
              <span className="text-purple-700 font-medium">From Kigali, Rwanda 🇷🇼</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </h1>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 mx-auto max-w-2xl border border-purple-200">
              <p className="text-lg italic text-purple-700">
                "{codingQuotes[currentQuote]}"
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Rwanda Coding Academy graduate passionate about creating digital solutions 
              that make a difference. Turning ideas into code, one commit at a time.
            </p>

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

            <div className="animate-bounce">
              <ChevronDown className="text-gray-400 mx-auto" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section id="journey" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Coding Journey</h2>
            <p className="text-xl text-gray-600">From curiosity to passion, through Rwanda Coding Academy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-3">
                  <School className="text-green-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Rwanda Coding Academy</h3>
                </div>
                <p className="text-gray-700">
                  My journey at RCA shaped not just my technical skills, but my perspective on using 
                  technology to solve real problems. The collaborative environment and focus on 
                  practical solutions prepared me for the real world of software development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                  <Trophy className="mx-auto mb-2 text-purple-600" size={24} />
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Projects Built</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                  <Award className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Hours Coded</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">A Day in My Coding Life</h3>
              <div className="space-y-3">
                {dailyLife.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-purple-600">{item.time}</div>
                      <div className="text-gray-700 text-sm">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Models Section */}
      <section id="inspiration" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Inspirations</h2>
            <p className="text-xl text-gray-600">People who shaped my coding philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roleModels.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    {model.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                  <p className="text-purple-600 font-medium">{model.role}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">What inspires me:</h4>
                    <p className="text-gray-600 text-sm">{model.inspiration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Impact on me:</h4>
                    <p className="text-gray-600 text-sm">{model.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond the Code</h2>
            <p className="text-xl text-gray-600">What keeps me creative and balanced</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${hobby.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Arsenal</h2>
            <p className="text-xl text-gray-600">Tools and technologies in my toolkit</p>
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
            <p className="text-xl text-gray-600">Solutions built with passion and purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-6xl relative`}>
                  {project.image}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                    {project.category}
                  </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600">Ready to turn ideas into reality?</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Rocket className="mx-auto mb-6" size={48} />
              <h3 className="text-3xl font-bold mb-4">From Rwanda to the World</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's collaborate and create digital solutions that make a difference. 
                Whether it's a startup idea or an enterprise solution, I'm here to help.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>Start a Conversation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

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