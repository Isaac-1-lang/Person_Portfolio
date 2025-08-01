import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Figma, 
  Palette, 
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code,
  Coffee,
  Zap,
  TrendingUp,
  Activity,
  Star,
  Sparkles,
  ArrowUp,
  Send,
  Calendar,
  Clock,
  Globe
} from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hoverColor: string;
  bgGradient: string;
}

interface AnimatedStat {
  label: string;
  value: number;
  suffix: string;
  color: string;
  icon: React.ReactNode;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
}

const PortfolioFooter: React.FC = () => {
  const [currentYear] = useState<number>(new Date().getFullYear());
  const [animatedStats, setAnimatedStats] = useState<AnimatedStat[]>([
    { label: 'Projects Completed', value: 0, suffix: '+', color: 'text-purple-400', icon: <Code size={20} /> },
    { label: 'Happy Clients', value: 0, suffix: '+', color: 'text-blue-400', icon: <Star size={20} /> },
    { label: 'Code Commits', value: 0, suffix: 'K+', color: 'text-teal-400', icon: <Activity size={20} /> },
    { label: 'Coffee Cups', value: 0, suffix: '+', color: 'text-orange-400', icon: <Coffee size={20} /> }
  ]);
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [waveAnimation, setWaveAnimation] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  const targetStats = [42, 28, 15, 1247];

  const socialLinks: SocialLink[] = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Isaac-1-lang',
      color: 'text-gray-300',
      hoverColor: 'hover:text-white',
      bgGradient: 'from-gray-600 to-gray-800'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/NIYOBYOSE Isaac Precieux',
      color: 'text-blue-300',
      hoverColor: 'hover:text-blue-100',
      bgGradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/isaacniyo78',
      color: 'text-pink-300',
      hoverColor: 'hover:text-pink-100',
      bgGradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: <MessageCircle size={24} />,
      url: 'https://discord.com/users/youruserid',
      color: 'text-indigo-300',
      hoverColor: 'hover:text-indigo-100',
      bgGradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <Figma size={24} />,
      url: 'https://www.figma.com/design/Zb75cxBquATQ2pyuYwQVRp/Projects?node-id=0-1&p=f&t=0SlJZ9TU8BdQuaak-0',
      color: 'text-purple-300',
      hoverColor: 'hover:text-purple-100',
      bgGradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'canva',
      name: 'Canva',
      icon: <Palette size={24} />,
      url: 'https://www.canva.com/design/DAGujUJmlnw/aPsBU6tC__vbw3RCNjO_sg/edit',
      color: 'text-cyan-300',
      hoverColor: 'hover:text-cyan-100',
      bgGradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/@PrecieuxIs73595',
      color: 'text-blue-300',
      hoverColor: 'hover:text-blue-100',
      bgGradient: 'from-blue-400 to-blue-600'
    }
  ];

  // Current time update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Africa/Kigali',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating elements initialization
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 400,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 2 + 0.5,
      color: ['purple', 'blue', 'teal', 'pink', 'cyan'][Math.floor(Math.random() * 5)]
    }));
    setFloatingElements(elements);
  }, []);

  // Animate floating elements
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements(prev => prev.map(el => ({
        ...el,
        y: el.y <= -20 ? 400 : el.y - el.speed,
        x: el.x + Math.sin(Date.now() * 0.001 + el.id) * 0.5
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Scroll tracking for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  // Animate stats when visible
  useEffect(() => {
    if (isVisible) {
      targetStats.forEach((target, index) => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => 
            prev.map((stat, i) => 
              i === index ? { ...stat, value: Math.floor(current) } : stat
            )
          );
        }, 30);
      });
    }
  }, [isVisible]);

  // Enhanced wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ContactInfo = () => (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
          <Mail size={18} className="text-white" />
        </div>
        Get In Touch
      </h3>
      <div className="space-y-4 text-gray-300">
        <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer hover:scale-105">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
            <Mail size={16} className="group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Email</div>
            <div className="group-hover:text-purple-400 transition-colors">isaprecieux112@gmail.com</div>
          </div>
        </div>
        <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer hover:scale-105">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
            <Phone size={16} className="group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Phone</div>
            <div className="group-hover:text-green-400 transition-colors">+250 792 688 507</div>
          </div>
        </div>
        <div className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer hover:scale-105">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-red-500 group-hover:to-pink-500 transition-all duration-300">
            <MapPin size={16} className="group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Location</div>
            <div className="group-hover:text-red-400 transition-colors">Kigali, Rwanda</div>
            <div className="text-xs text-gray-500 flex items-center mt-1">
              <Clock size={12} className="mr-1" />
              {currentTime} (GMT+2)
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const QuickLinks = () => (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
          <Zap size={18} className="text-white" />
        </div>
        Quick Links
      </h3>
      <div className="space-y-3">
        {[
          { name: 'Privacy Policy', icon: <Globe size={16} /> },
          { name: 'Terms of Service', icon: <Star size={16} /> },
          { name: 'Blog', icon: <Calendar size={16} /> },
          { name: 'Resume/CV', icon: <Send size={16} /> }
        ].map((link) => (
          <a
            key={link.name}
            href="#"
            className="group flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:translate-x-2 transform"
          >
            <div className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
              {link.icon}
            </div>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full bg-${element.color}-400/20 animate-pulse`}
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              transform: `translate(${Math.sin(Date.now() * 0.001 + element.id) * 10}px, 0px)`,
            }}
          />
        ))}

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0),
                radial-gradient(circle at 75px 75px, rgba(147,51,234,0.1) 1px, transparent 0)
              `,
              backgroundSize: '100px 100px',
              animation: 'grid-pulse 4s ease-in-out infinite'
            }}
          />
        </div>

        {/* Dynamic Wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-purple-600/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(147,51,234,0.3)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0.3)" />
            </linearGradient>
          </defs>
          <path
            d={`M0,60 Q300,${60 + Math.sin(waveAnimation * Math.PI / 180) * 25} 600,60 T1200,60 V120 H0 Z`}
            fill="url(#waveGradient)"
          />
          <path
            d={`M0,80 Q400,${80 + Math.sin((waveAnimation + 90) * Math.PI / 180) * 15} 800,80 T1200,80 V120 H0 Z`}
            fill="rgba(147,51,234,0.1)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {animatedStats.map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${stat.color} transition-colors duration-300 group-hover:scale-110 transform`}>
                    {stat.icon}
                  </div>
                  <Sparkles className="text-gray-600 group-hover:text-purple-400 transition-colors duration-300" size={16} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:animate-pulse`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Code className="text-white" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Isaac's Portfolio
                </h2>
                <p className="text-gray-400 text-lg">Creative Developer & Designer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Passionate about creating digital experiences that inspire and engage. 
              Let's build something amazing together with cutting-edge technology and creative design.
            </p>

            {/* Enhanced Skills Visualization */}
            <div className="space-y-4">
              <div className="text-lg text-gray-300 mb-4 flex items-center">
                <Star className="mr-2 text-yellow-400" size={20} />
                Tech Stack Proficiency
              </div>
              {[
                { name: 'React/TypeScript', level: 95, color: 'bg-blue-500', icon: '⚛️' },
                { name: 'UI/UX Design', level: 50, color: 'bg-purple-500', icon: '🎨' },
                { name: 'Node.js', level: 82, color: 'bg-green-500', icon: '🟢' },
                { name: 'Python', level: 95, color: 'bg-yellow-500', icon: '🐍' },
                { name: 'React Native', level: 70, color: 'bg-pink-500', icon: '📱' },
                { name: 'Java', level: 40, color: 'bg-teal-500', icon: '☕' }
              ].map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <ContactInfo />

          {/* Enhanced Quick Links */}
          <QuickLinks />
        </div>

        {/* Enhanced Social Links */}
        <div className="border-t border-gray-700/50 pt-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <div className="flex items-center space-x-3 text-gray-400">
              <span className="text-lg">Made with</span>
              <Heart className="text-red-500 animate-pulse" size={20} />
              <span className="text-lg">and lots of</span>
              <Coffee className="text-yellow-500 hover:animate-bounce cursor-pointer" size={20} />
              <span className="text-lg">in Rwanda 🇷🇼</span>
            </div>

            {/* Enhanced Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative ${social.color} ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 p-3 rounded-xl hover:shadow-lg`}
                  title={social.name}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                  <div className="relative z-10">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-base">
              © {currentYear} Isaac Niyobyose. All rights reserved.
            </div>
          </div>
        </div>

        {/* Enhanced Activity Graph */}
        <div className="mt-12 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Activity className="text-white" size={16} />
              </div>
              <span className="text-lg text-gray-300 font-semibold">Recent Activity</span>
            </div>
            <TrendingUp className="text-green-400" size={20} />
          </div>
          <div className="flex items-end space-x-1 h-16">
            {[...Array(52)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-green-600/40 to-green-400/80 rounded-sm flex-1 transition-all duration-300 hover:from-green-500 hover:to-green-300 cursor-pointer hover:scale-y-110"
                style={{
                  height: `${20 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.05}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style jsx>{`
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </footer>
  );
};

export default PortfolioFooter;