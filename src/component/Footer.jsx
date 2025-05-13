import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ExternalLink,
  Code,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/lavshah19",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lavshah",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:lavshah51@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-600 opacity-95"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">Lav Shah</h3>
              </div>
              <p className="text-blue-100/80 text-sm">
                BSc CSIT Student at Tribhuvan University, passionate about creating innovative solutions through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="/" className="text-blue-100/80 hover:text-white transition-colors duration-200">Home</a>
                <a href="/about" className="text-blue-100/80 hover:text-white transition-colors duration-200">About</a>
                <a href="/projects" className="text-blue-100/80 hover:text-white transition-colors duration-200">Projects</a>
                <a href="skills" className="text-blue-100/80 hover:text-white transition-colors duration-200">Skills</a>
                <a href="contact" className="text-blue-100/80 hover:text-white transition-colors duration-200">Contact</a>
                <a href="#" className="text-blue-100/80 hover:text-white transition-colors duration-200">Resume</a>
              </div>
            </div>

            {/* Contact/Social Section */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white/10 rounded-lg 
                              hover:bg-white/20 transition-all duration-300 
                              ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                   bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs 
                                   text-white opacity-0 group-hover:opacity-100 
                                   transition-opacity duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-blue-100/80">
                <span>&copy; {new Date().getFullYear()} Lav Shah.</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-400" /> and <Coffee className="w-4 h-4 text-amber-400" />
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* <a 
                  href="#" 
                  className="text-blue-100/80 hover:text-white flex items-center gap-1 text-sm"
                >
                  View Source <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
