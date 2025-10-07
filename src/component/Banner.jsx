import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  MessageCircle,
  ChevronDown
} from 'lucide-react';

const Banner = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/lavshah19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lav-shah-8203031b8/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lavshah51@gmail.com', label: 'Email' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      
      <div className="relative pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between py-16">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 space-y-6">
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="relative">
                <span className="relative inline-block animate-fade-in">
                  Lav Shah
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-300 rounded-full transform origin-left animate-expand-line"></div>
                </span>
              </span>
            </h1>

            <p className="text-xl text-blue-100 font-medium animate-fade-in-up">
              BSc CSIT Student at Tribhuvan University
            </p>

            <p className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto md:mx-0 animate-fade-in-up delay-100">
              I'm passionate about technology and software development. Currently pursuing my Bachelor's 
              degree in Computer Science and Information Technology at TU University, focusing on building 
              innovative solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-200">
              <NavLink to="/projects">
                <button className="group bg-white hover:bg-blue-50 text-blue-600 font-semibold 
                                 py-3 px-8 rounded-full transition-all duration-300 
                                 flex items-center gap-2 shadow-lg shadow-blue-500/25">
                  <Code size={20} />
                  <span>View Projects</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </NavLink>

              <NavLink to="/contact">
                <button className="group border-2 border-white/80 text-white hover:bg-white/10 
                                 font-semibold py-3 px-8 rounded-full transition-all duration-300 
                                 flex items-center gap-2 backdrop-blur-sm">
                  <MessageCircle size={20} />
                  <span>Contact Me</span>
                </button>
              </NavLink>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-blue-200 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Image Space */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl">
                <img 
                  src="/lavshah.png"
                  alt="Lav Shah" 
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-white opacity-50" />
      </div>
    </div>
  );
};

export default Banner;
