import { useState } from "react";
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Database, 
  Wrench,
  Sparkles,
  ChevronRight,
  Layout,
  Terminal,
  GitBranch,
  Server,
  Cpu,
  Gauge
} from 'lucide-react';

export default function SkillsComponent() {
  const [activeTab, setActiveTab] = useState("development");

  const skillCategories = {
    development: {
      title: "Development",
      description: "Programming languages and frameworks I work with",
      icon: Code2,
      color: "blue",
      skills: [
        { name: "JavaScript", level: 90, icon: Terminal },
        { name: "React", level: 88, icon: Code2 },
        { name: "Node.js", level: 78, icon: Server },
        { name: "HTML/CSS", level: 95, icon: Layout },
      ],
    },
    design: {
      title: "Design",
      description: "UI/UX and design tools I'm proficient in",
      icon: Palette,
      color: "purple",
      skills: [
        { name: "Figma", level: 80, icon: Layout },
        { name: "Adobe XD", level: 75, icon: Layout },
        { name: "UI Design", level: 85, icon: Palette },
        { name: "Responsive Design", level: 90, icon: Layout },
        { name: "Design Systems", level: 78, icon: Layout },
      ],
    },
    backend: {
      title: "Backend",
      description: "Server and database technologies I use",
      icon: Database,
      color: "green",
      skills: [
        // { name: "PostgreSQL", level: 75, icon: Database },
        { name: "MongoDB", level: 80, icon: Database },
        { name: "GraphQL", level: 70, icon: Cpu },
        { name: "REST API", level: 88, icon: Server },
        { name: "Express.js", level: 82, icon: Server },
      ],
    },
    tools: {
      title: "Tools",
      description: "DevOps and productivity tools I'm familiar with",
      icon: Wrench,
      color: "amber",
      skills: [
        { name: "Git", level: 92, icon: GitBranch },
        // { name: "Docker", level: 75, icon: Database },
        // { name: "CI/CD", level: 78, icon: Cpu },
        // { name: "AWS", level: 70, icon: Server },
        { name: "Vercel", level: 85, icon: Server },
      ],
    },
  };

  const getColorClasses = (color) => ({
    bg: `bg-${color}-500`,
    text: `text-${color}-500`,
    border: `border-${color}-500`,
    hover: `hover:bg-${color}-500`,
    gradient: `from-${color}-500 to-${color}-400`,
  });

  return (
    <div className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/25 -z-0" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          <motion.div className="inline-flex items-center justify-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.05 }}>
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">My Expertise</span>
          </motion.div>
          <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1 }}>
            Professional Skills
          </motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.15 }}>
            A showcase of my technical abilities and expertise in various domains
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}>
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl
                  transition-all duration-300 
                  ${activeTab === key 
                    ? ` bg-white ${colors.text} ${colors.bg} ${colors.border} shadow-lg` 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}
                `}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            return activeTab === key && (
              <motion.div key={key} className="space-y-8" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.06, delayChildren: 0.06 } } }}>
                <motion.div className="flex items-start gap-4" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
                  <div className={`p-3 rounded-xl ${colors.bg}/10 ${colors.text}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </motion.div>

                <div className="grid gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div key={index} className="group" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.05 * index }}>
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`p-2 rounded-lg ${colors.bg}/10 ${colors.text}`}>
                          <skill.icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <div className="ml-auto flex items-center gap-2">
                          <Gauge className={`w-4 h-4 ${colors.text}`} />
                          <span className={`font-medium ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className={`h-full bg-blue-600`}
                        >
                          <div className="w-full h-full opacity-50 bg-gradient-to-r from-white/0 to-white/20"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
