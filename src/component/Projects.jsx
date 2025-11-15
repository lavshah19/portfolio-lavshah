import React from "react";
import {
  ExternalLink,
  Github,
  Folder,
  Code2,
  Sparkles,
  ArrowRight,
  Layout,
  Search,
} from "lucide-react";

const Projects = () => {
  const projects = [
    
    {
      name: "Lavio — AI Agent",
      description:
        "A full-stack AI chat agent built with Next.js 16, LangChain, Prisma, Groq LLMs, and Qdrant. It supports web browsing, image analysis, PDF-grounded answers, Cloudinary uploads, and secure Better Auth sessions with a modern React 19 UI.",
      link: "https://github.com/lavshah19/lavio-ai-agent",
      github: "https://github.com/lavshah19/lavio-ai-agent",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "LangChain",
        "LangGraph",
        "Groq LLMs",
        "Prisma",
        "MongoDB",
        "Qdrant",
        "Cloudinary",
        "Better Auth",
        "Tailwind CSS",
        "Radix UI",
        "Tavily Search",
      ],
      image: "/learnly.png",
      category: "AI / Full Stack",
    },
    {
      name: "Learnly",
      description:
        "A full-stack learning management system (LMS) with instructor course creation, bulk media uploads, student enrollment and progress tracking, and eSewa payment integration.",
      link: "https://learnly-eta.vercel.app",
      github: "https://github.com/lavshah19/Learnly",
      tech: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway", "Tailwind"],
      image: "/learnly.png",
      category: "full stack",
    },

    {
      name: "PDF-Chat-Assistant (RAG)",
      description:
        "A PDF-based chat assistant that retrieves relevant content from uploaded PDFs using LangChain JS, Qdrant, HuggingFace embeddings, Groq LLaMA, BullMQ, and Next.js.",
      link: "https://github.com/lavshah19/PDF-Chat-Assistant",
      github: "https://github.com/lavshah19/PDF-Chat-Assistant",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "LangChain JS",
        "Qdrant",
        "Hugging Face Embeddings",
        "Groq LLaMA",
        "BullMQ",
        "Valkey",
      ],
      image: "/pdfchat.png",
      category: "AI / RAG",
    },

    {
      name: "Task Arena",
      description:
        "A full-stack productivity web app combining personal task management with challenge-based goal tracking to help users stay consistent and competitive.",
      link: "https://github.com/lavshah19/task-arena",
      github: "https://github.com/lavshah19/task-arena",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/task-arena.png",
      category: "full stack",
    },

    {
      name: "Image Gallery MERN",
      description:
        "A full-stack MERN image gallery app where users can register, log in, upload images, like photos, and leave comments (admin upload only).",
      link: "https://github.com/lavshah19/Image-gallery-MERN-",
      github: "https://github.com/lavshah19/Image-gallery-MERN-",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      image: "/image-project.png",
      category: "web app",
    },

    {
      name: "Promptly AI",
      description:
        "A lightweight AI chat application built with React, Node.js, Express, and the Gemini API.",
      link: "https://github.com/lavshah19/Promptly-MERN-AI",
      github: "https://github.com/lavshah19/Promptly-MERN-AI",
      tech: ["React", "Node.js", "Express", "Gemini API"],
      image: "/promptly.png",
      category: "AI Chat App",
    },

    {
      name: "Whispr GraphQL Project",
      description:
        "A full-stack GraphQL application where users send anonymous messages with song choices. Built with React, GraphQL, Apollo Server, and Node.js.",
      link: "https://github.com/lavshah19/Whispr-GraphQL-project",
      github: "https://github.com/lavshah19/Whispr-GraphQL-project",
      tech: ["React", "GraphQL", "Apollo Server", "Node.js"],
      image: "/allmsg.png",
      category: "web app",
    },

    {
      name: "Chat App",
      description:
        "A real-time chat application built with Node.js, Socket.io, and Vanilla JS including online user list and typing indicators.",
      link: "https://github.com/lavshah19/chat-app",
      github: "https://github.com/lavshah19/chat-app",
      tech: ["Express.js", "Socket.io", "Node.js"],
      image: "/chat-app.png",
      category: "web app",
    },
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Layout className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-300">Portfolio Projects</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured Projects
          </h2>

          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 max-h-[35rem]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Code2 className="w-3.5 h-3.5 text-blue-300" />
                    <span className="text-xs font-medium text-blue-300">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                  <Folder className="w-5 h-5" />
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 break-words whitespace-normal h-24 overflow-y-auto scrollbar-hide">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-blue-200 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-400/20 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Search className="w-4 h-4" />
                    Live Demo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-300/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">More projects coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
