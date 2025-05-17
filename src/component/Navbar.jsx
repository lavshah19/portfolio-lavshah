import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Folder,
  Code2,
  MessageCircle,
  FileText,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "/", name: "Home", icon: Home },
    { path: "/about", name: "About", icon: User },
    { path: "/projects", name: "Projects", icon: Folder },
    { path: "/skills", name: "Skills", icon: Code2 },
    { path: "/contact", name: "Contact", icon: MessageCircle },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };

    // Add shadow on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="w-full flex justify-center p-4">
        <nav
          className={`
          bg-white/80 backdrop-blur-lg
          rounded-2xl
          px-6 py-4
          max-w-6xl w-full
          flex items-center justify-between
          transition-all duration-300
          border border-gray-200/20
          ${scrolled ? "shadow-lg shadow-black/5" : ""}
        `}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 
                          flex items-center justify-center text-white font-bold text-xl
                          shadow-lg shadow-blue-500/20"
            >
              LS
            </div>
            <span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 
                           bg-clip-text text-transparent"
            >
              lav shah
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  px-4 py-2 rounded-xl flex items-center gap-2
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }
                `}
                end
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Links */}
            <div className="flex items-center gap-2 border-r border-gray-200 pr-3">
              <a
                href="https://github.com/lavshah19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-50 
                         transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lavshah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-50 
                         transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Resume Button */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button
              className="
              group
              bg-gradient-to-r from-blue-600 to-blue-400
              text-white font-medium
              py-2 px-4 rounded-xl
              flex items-center gap-2
              hover:shadow-lg hover:shadow-blue-500/25
              transition-all duration-300
            "
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ExternalLink
                className="w-4 h-4 opacity-0 -translate-x-2 
                                     group-hover:opacity-100 group-hover:translate-x-0 
                                     transition-all duration-300"
              />
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 
                     hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full right-4 left-4 mt-4 md:hidden">
              <div
                className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
                            border border-gray-200/20 overflow-hidden"
              >
                <div className="p-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center gap-3 px-4 py-3 rounded-xl mb-1
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                      end
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    </NavLink>
                  ))}
                </div>

                <div className="border-t border-gray-200 p-4 space-y-4">
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/lavshah19"
                      className="p-3 rounded-xl text-gray-600 hover:text-blue-600 
                               hover:bg-gray-50 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/lavshah"
                      className="p-3 rounded-xl text-gray-600 hover:text-blue-600 
                               hover:bg-gray-50 transition-all duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <a
  href="/resume.pdf"
  download
  rel="noopener noreferrer"
>
  <button
    className="
      w-full
      bg-gradient-to-r from-blue-600 to-blue-400
      text-white font-medium
      py-3 px-4 rounded-xl
      flex items-center justify-center gap-2
      hover:shadow-lg hover:shadow-blue-500/25
      transition-all duration-300
    "
  >
    <FileText className="w-4 h-4" />
    <span>Download Resume</span>
  </button>
</a>

                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
