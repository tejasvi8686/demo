"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Layout, 
  Terminal, 
  GitBranch, 
  Braces,
  FileCode,
  Cpu,
  Globe,
  Server,
  Workflow,
  TestTube,
  Figma as FigmaIcon,
  Repeat
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "HTML/CSS", icon: <Globe className="h-5 w-5" /> },
      { name: "JavaScript", icon: <Braces className="h-5 w-5" /> },
      { name: "TypeScript", icon: <FileCode className="h-5 w-5" /> },
      { name: "React", icon: <Code className="h-5 w-5" /> },
      { name: "Next.js", icon: <Server className="h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <Layout className="h-5 w-5" /> },
    ]
  },
  {
    title: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", icon: <Cpu className="h-5 w-5" /> },
      { name: "Express", icon: <Server className="h-5 w-5" /> },
      { name: "RESTful APIs", icon: <Globe className="h-5 w-5" /> },
      { name: "GraphQL", icon: <Database className="h-5 w-5" /> },
    ]
  },
  {
    title: "Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Git/GitHub", icon: <GitBranch className="h-5 w-5" /> },
      { name: "Webpack/Vite", icon: <Repeat className="h-5 w-5" /> },
      { name: "Jest/Testing", icon: <TestTube className="h-5 w-5" /> },
      { name: "CI/CD", icon: <Workflow className="h-5 w-5" /> },
      { name: "Figma", icon: <FigmaIcon className="h-5 w-5" /> },
    ]
  }
];

const specialties = [
  {
    title: "Clean Code",
    icon: <Code />,
    description: "Writing maintainable, readable, and efficient code"
  },
  {
    title: "Problem Solving",
    icon: <Terminal />,
    description: "Finding elegant solutions to complex problems"
  },
  {
    title: "Collaboration",
    icon: <GitBranch />,
    description: "Working effectively in teams using version control"
  }
];

export default function SkillsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Skills & Expertise</h1>
          <p className="text-muted-foreground mb-8">A showcase of my technical abilities and proficiencies</p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              variants={item}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={item}>
          <h2 className="text-2xl font-semibold mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((specialty, idx) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="h-8 w-8"
                      >
                        {specialty.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{specialty.title}</h3>
                    <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}