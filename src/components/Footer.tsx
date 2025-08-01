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
  Activity
} from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hoverColor: string;
}

interface AnimatedStat {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const PortfolioFooter: React.FC = () => {
  const [currentYear] = useState<number>(new Date().getFullYear());
  const [animatedStats, setAnimatedStats] = useState<AnimatedStat[]>([
    { label: 'Projects Completed', value: 0, suffix: '+', color: 'text-purple-400' },
    { label: 'Happy Clients', value: 0, suffix: '+', color: 'text-blue-400' },
    { label: 'Code Commits', value: 0, suffix: 'K+', color: 'text-teal-400' },
    { label: 'Coffee Cups', value: 0, suffix: '+', color: 'text-orange-400' }
  ]);
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [waveAnimation, setWaveAnimation] = useState<number>(0);

  const targetStats = [42, 28, 15, 1247];

  const socialLinks: SocialLink[] = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/yourusername',
      color: 'text-gray-400',
      hoverColor: 'hover:text-gray-300'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/yourusername',
      color: 'text-pink-400',
      hoverColor: 'hover:text-pink-300'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: <MessageCircle size={24} />,
      url: 'https://discord.com/users/youruserid',
      color: 'text-indigo-400',
      hoverColor: 'hover:text-indigo-300'
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <Figma size={24} />,
      url: 'https://figma.com/@yourusername',
      color: 'text-purple-400',
      hoverColor: 'hover:text-purple-300'
    },
    {
      id: 'canva',
      name: 'Canva',
      icon: <Palette size={24} />,
      url: 'https://canva.com/yourusername',
      color: 'text-cyan-400',
      hoverColor: 'hover:text-cyan-300'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/yourusername',
      color: 'text-blue-400',
      hoverColor: 'hover:text-blue-300'
    }
  ];

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
        const increment = target / 50;
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
        }, 40);
      });
    }
  }, [isVisible]);

  // Wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveAnimation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const ContactInfo = () => (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Mail className="mr-2 text-purple-400" size={20} />
        Get In Touch
      </h3>
      <div className="space-y-2 text-gray-300">
        <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors cursor-pointer">
          <Mail size={16} />
          <span>hello@yourportfolio.com</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors cursor-pointer">
          <Phone size={16} />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors cursor-pointer">
          <MapPin size={16} />
          <span>Your City, Country</span>
        </div>
      </div>
    </div>
  );

  const QuickLinks = () => (
    <div className="space-y-3">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Zap className="mr-2 text-blue-400" size={20} />
        Quick Links
      </h3>
      <div className="space-y-2">
        {['Privacy Policy', 'Terms of Service', 'Blog', 'Resume/CV'].map((link) => (
          <a
            key={link}
            href="#"
            className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}

        {/* Animated Wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-purple-600/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d={`M0,60 Q300,${60 + Math.sin(waveAnimation * Math.PI / 180) * 20} 600,60 T1200,60 V120 H0 Z`}
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>

        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                 backgroundSize: '50px 50px',
                 animation: 'grid-move 20s linear infinite'
               }} 
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {animatedStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Your Portfolio
                </h2>
                <p className="text-gray-400 text-sm">Creative Developer & Designer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about creating digital experiences that inspire and engage. 
              Let's build something amazing together with cutting-edge technology and creative design.
            </p>

            {/* Skills Visualization */}
            <div className="space-y-2">
              <div className="text-sm text-gray-400 mb-2">Tech Stack Proficiency</div>
              {[
                { name: 'React/TypeScript', level: 95, color: 'bg-blue-500' },
                { name: 'UI/UX Design', level: 88, color: 'bg-purple-500' },
                { name: 'Node.js', level: 82, color: 'bg-green-500' }
              ].map((skill) => (
                <div key={skill.name} className="flex items-center space-x-3">
                  <span className="text-xs text-gray-400 w-24">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <ContactInfo />

          {/* Quick Links */}
          <QuickLinks />
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>and lots of</span>
              <Coffee className="text-yellow-500" size={16} />
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-lg hover:bg-gray-800/50`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              © {currentYear} Your Portfolio. All rights reserved.
            </div>
          </div>
        </div>

        {/* Mini Activity Graph */}
        <div className="mt-8 bg-gray-800/30 rounded-xl p-4 backdrop-blur-sm border border-gray-700/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="text-green-400" size={16} />
              <span className="text-sm text-gray-300">Recent Activity</span>
            </div>
            <TrendingUp className="text-green-400" size={16} />
          </div>
          <div className="flex items-end space-x-1 h-12">
            {[...Array(52)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-green-600/30 to-green-400/60 rounded-sm flex-1 transition-all duration-300 hover:from-green-500 hover:to-green-300"
                style={{
                  height: `${20 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </footer>
  );
};

export default PortfolioFooter;