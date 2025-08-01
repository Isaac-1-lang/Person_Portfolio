import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Code, Award, Zap } from 'lucide-react';

interface NavItem {
  id: string;
  labels: string[];
  icon: React.ReactNode;
  href: string;
}

interface TypewriterState {
  currentText: string;
  currentIndex: number;
  isDeleting: boolean;
  itemIndex: number;
}

const PortfolioNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [typewriterStates, setTypewriterStates] = useState<{ [key: string]: TypewriterState }>({});

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      labels: ['Home', 'Welcome', 'Start Here', 'Begin'], 
      icon: <Home size={18} />, 
      href: '#home' 
    },
    { 
      id: 'about', 
      labels: ['About', 'My Story', 'Who Am I', 'Background'], 
      icon: <User size={18} />, 
      href: '#about' 
    },
    { 
      id: 'skills', 
      labels: ['Skills', 'Tech Stack', 'Abilities', 'Expertise'], 
      icon: <Code size={18} />, 
      href: '#skills' 
    },
    { 
      id: 'projects', 
      labels: ['Projects', 'Portfolio', 'My Work', 'Creations'], 
      icon: <Briefcase size={18} />, 
      href: '#projects' 
    },
    { 
      id: 'achievements', 
      labels: ['Awards', 'Achievements', 'Recognition', 'Success'], 
      icon: <Award size={18} />, 
      href: '#achievements' 
    },
    { 
      id: 'contact', 
      labels: ['Contact', 'Reach Out', 'Get In Touch', 'Connect'], 
      icon: <Mail size={18} />, 
      href: '#contact' 
    },
  ];

  const [logoTexts] = useState<string[]>(['Portfolio', 'Developer', 'Creator', 'Designer']);
  const [logoState, setLogoState] = useState<TypewriterState>({
    currentText: '',
    currentIndex: 0,
    isDeleting: false,
    itemIndex: 0
  });

  // Typewriter effect for logo
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const currentWord = logoTexts[logoState.itemIndex];
      
      if (!logoState.isDeleting) {
        if (logoState.currentIndex < currentWord.length) {
          setLogoState(prev => ({
            ...prev,
            currentText: currentWord.substring(0, prev.currentIndex + 1),
            currentIndex: prev.currentIndex + 1
          }));
          setTimeout(type, typeSpeed);
        } else {
          setTimeout(() => {
            setLogoState(prev => ({ ...prev, isDeleting: true }));
          }, pauseTime);
        }
      } else {
        if (logoState.currentIndex > 0) {
          setLogoState(prev => ({
            ...prev,
            currentText: currentWord.substring(0, prev.currentIndex - 1),
            currentIndex: prev.currentIndex - 1
          }));
          setTimeout(type, deleteSpeed);
        } else {
          setLogoState(prev => ({
            ...prev,
            isDeleting: false,
            itemIndex: (prev.itemIndex + 1) % logoTexts.length
          }));
        }
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [logoState, logoTexts]);

  // Typewriter effect for nav items
  useEffect(() => {
    const initializeTypewriters = () => {
      const initialStates: { [key: string]: TypewriterState } = {};
      navItems.forEach((item, index) => {
        initialStates[item.id] = {
          currentText: item.labels[0],
          currentIndex: item.labels[0].length,
          isDeleting: false,
          itemIndex: 0
        };
      });
      setTypewriterStates(initialStates);
    };

    initializeTypewriters();
  }, []);

  useEffect(() => {
    const typewriterIntervals: { [key: string]: NodeJS.Timeout } = {};

    navItems.forEach((item, navIndex) => {
      const startDelay = navIndex * 1000; // Stagger the animations
      
      setTimeout(() => {
        const runTypewriter = () => {
          const typeSpeed = 80;
          const deleteSpeed = 40;
          const pauseTime = 3000 + Math.random() * 2000; // Random pause for variety

          const type = () => {
            setTypewriterStates(prev => {
              const current = prev[item.id];
              if (!current) return prev;

              const currentWord = item.labels[current.itemIndex];
              
              if (!current.isDeleting) {
                if (current.currentIndex < currentWord.length) {
                  return {
                    ...prev,
                    [item.id]: {
                      ...current,
                      currentText: currentWord.substring(0, current.currentIndex + 1),
                      currentIndex: current.currentIndex + 1
                    }
                  };
                } else {
                  setTimeout(() => {
                    setTypewriterStates(prevState => ({
                      ...prevState,
                      [item.id]: { ...prevState[item.id], isDeleting: true }
                    }));
                  }, pauseTime);
                  return prev;
                }
              } else {
                if (current.currentIndex > 0) {
                  return {
                    ...prev,
                    [item.id]: {
                      ...current,
                      currentText: currentWord.substring(0, current.currentIndex - 1),
                      currentIndex: current.currentIndex - 1
                    }
                  };
                } else {
                  return {
                    ...prev,
                    [item.id]: {
                      ...current,
                      isDeleting: false,
                      itemIndex: (current.itemIndex + 1) % item.labels.length
                    }
                  };
                }
              }
            });
          };

          typewriterIntervals[item.id] = setInterval(type, current.isDeleting ? deleteSpeed : typeSpeed);
        };

        runTypewriter();
      }, startDelay);
    });

    return () => {
      Object.values(typewriterIntervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [navItems]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id: string): void => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Dynamic Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Zap className="text-white" size={20} />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent min-w-[120px]">
                {logoState.currentText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation with Dynamic Text */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const state = typewriterStates[item.id];
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 min-w-[100px] ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`transition-colors duration-200 ${
                      activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="flex items-center">
                      {state?.currentText || item.labels[0]}
                      <span className={`ml-1 animate-pulse ${
                        activeSection === item.id ? 'text-white' : 'text-purple-600'
                      }`}>|</span>
                    </span>
                    
                    {/* Hover effect */}
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu with Dynamic Text */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-gray-200/20 shadow-lg">
          {navItems.map((item) => {
            const state = typewriterStates[item.id];
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                }`}
              >
                <span className={`transition-colors duration-200 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
                }`}>
                  {item.icon}
                </span>
                <span className="flex items-center">
                  {state?.currentText || item.labels[0]}
                  <span className={`ml-1 animate-pulse ${
                    activeSection === item.id ? 'text-white' : 'text-purple-600'
                  }`}>|</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating indicator for desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </nav>
  );
};

export default PortfolioNavbar;