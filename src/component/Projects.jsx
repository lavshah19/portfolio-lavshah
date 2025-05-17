import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Folder, 
  Code2, 
  Sparkles,
  ArrowRight,
  Layout,
  Search
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'task-arena',
      description: 'Task Arena is a full-stack productivity web app that makes staying organized fun and competitive. It blends personal task management with challenge-based goal tracking, helping you build better habits, complete tasks, and push your limits.',
      link: 'https://github.com/lavshah19/task-arena',
      github: 'https://github.com/lavshah19/task-arena',
      tech: ['React', 'Node.js', 'MongoDB','express'],
      image: '/task-arena.png',
      category: 'full stack'
    },
    {
      name: 'Image-gallery-MERN',
      description: 'A full-stack image gallery web application built with the MERN stack (MongoDB, Express, React, Node.js). Users can register, log in, upload images (admin only), like photos, and leave comments.',
      link: 'https://github.com/lavshah19/Image-gallery-MERN-',
      github: 'https://github.com/lavshah19/Image-gallery-MERN-',
      tech: ['React ', 'Express','mongoDB','nodejs'],
      image: '/image-project.png', // Replace with your local image
      category: 'web App'
    },
 
    {
      name: 'Whispr GraphQL Project',

      description: 'A full-stack GraphQL application with a React frontend and Apollo Server backend.Where Users can send anonymous messages along with their favorite songs, creating a fun and engaging experience',
      link: 'https://github.com/lavshah19/Whispr-GraphQL-project',
      github: 'https://github.com/lavshah19/Whispr-GraphQL-project',
      tech: ['React', 'GraphQL', 'Apollo Server','nodejs'],
      
      image: '/allmsg.png', // Replace with your local image
      category: 'Web App'
    },
       {
      name: 'chat app',
      description: 'This is a simple real-time chat application built using Node.js, Socket.io, and Vanilla JavaScript. It allows multiple users to chat in real-time with features like online user list and typing indicator.',
      link: 'https://github.com/lavshah19/chat-app',
      github: 'https://github.com/lavshah19/chat-app',
      tech: [ 'Express.js', 'socket.io', 'Node.js'],
      image: '/chat-app.png', // Replace with your local image
      category: 'web app'
    },
    // {
    //   name: 'Project 5',
    //   description: 'This is a description of Project 2. It is a mobile app built with React Native and Expo.',
    //   link: 'https://project2.com',
    //   tech: ['React Native', 'Expo'],
    //   image: '/project-placeholder.jpg', // Replace with your local image
    //   category: 'Mobile App'
    // },
    // {
    //   name: 'Project 6',
    //   description: 'This is a description of Project 3. It is a full-stack application built with the MERN stack.',
    //   link: 'https://project3.com',
    //   tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    //   image: '/project-placeholder.jpg', // Replace with your local image
    //   category: 'Full Stack'
    // },
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Layout className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-300">Portfolio Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 
                         backdrop-blur-xl rounded-2xl overflow-hidden 
                         border border-white/10 hover:border-white/20
                         transform transition-all duration-300 hover:scale-[1.02] 
                         hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 
                           group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md 
                                px-3 py-1 rounded-full border border-white/10">
                    <Code2 className="w-3.5 h-3.5 text-blue-300" />
                    <span className="text-xs font-medium text-blue-300">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 
                             transition-colors duration-300 flex items-center gap-2">
                  <Folder className="w-5 h-5" />
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4  break-words whitespace-normal">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-blue-200 bg-blue-500/10 
                               px-3 py-1.5 rounded-full border border-blue-400/20 
                               backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 
                             text-white bg-blue-500 hover:bg-blue-600 
                             px-4 py-2 rounded-lg transition-all duration-300 
                             hover:shadow-lg hover:shadow-blue-500/25 z-50"
                  >
                    <Search className="w-4 h-4" />
                    Live Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                             text-white/80 hover:text-white border border-white/10
                             transition-all duration-300 z-50"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Hover Effect Decoration */}
              <div className="absolute inset-0 border-2 border-blue-400/10 rounded-2xl opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-300/60 
                         bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">More projects coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
