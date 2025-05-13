import React from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Calendar, 
  GraduationCap, 
  Building2, 
  Code2,
  Brain,
  Globe,
  Sparkles
} from 'lucide-react';

const About = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/lavshah", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/lavshah19", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" }
  ];

  const personalInfo = [
    { icon: Calendar, label: "Born", value: "2002" },
    { icon: GraduationCap, label: "Education", value: "BSc CSIT" },
    { icon: Building2, label: "University", value: "Tribhuvan University" }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-gray-200/25 -z-0" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Card */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-gray-100">
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75"></div>
                  <img 
                    src="/lavshah.png"
                    alt="Lav Shah"
                    className="relative rounded-full w-full h-full object-cover border-4 border-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Lav Shah
                </h3>
                <p className="text-blue-600 font-medium">BSc CSIT Student</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <info.icon className="text-blue-600" size={20} />
                    <div>
                      <span className="text-sm text-gray-500">{info.label}:</span>
                      <span className="ml-2 font-medium text-gray-900">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 w-full space-y-8">
            {/* Introduction */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-blue-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Hi, I'm <span className="text-blue-600">Lav Shah</span>
                </h3>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  A passionate coder and a <span className="font-medium text-gray-900">BSc CSIT student at Tribhuvan University</span>, 
                  born in 2002. I'm currently pursuing my Bachelor's degree in 
                  <span className="font-medium text-gray-900"> Computer Science and Information Technology (CSIT)</span>.
                </p>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <Code2 className="text-blue-600 mt-1" size={20} />
                  <p>
                    My journey began with <span className="font-medium">HTML</span>, <span className="font-medium">CSS</span>, 
                    and <span className="font-medium">JavaScript</span>. I'm deeply interested in web development, 
                    currently focusing on the <span className="font-medium">MERN stack</span>.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <Brain className="text-purple-600 mt-1" size={20} />
                  <p>
                    I also explore <span className="font-medium">AI integration</span> into web development 
                    to create more intelligent and dynamic websites.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <Globe className="text-green-600 mt-1" size={20} />
                  <p>
                    My goal is to become a top web developer and contribute to the tech community 
                    by creating innovative solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
