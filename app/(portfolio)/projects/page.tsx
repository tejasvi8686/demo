"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "A Modern Travel Landing Page",
    description: "The Modern Travel Landing Page is built with Next.js 15 and TypeScript, offering a seamless, fully responsive experience. Styled with Tailwind CSS, it features React Icons for enhanced UI, React-Multi-Carousel for smooth sliders, and Swiper.js for client reviews. AOS animations bring interactions to life, while the ScrollToTop feature improves navigation.",
    image: "https://i.ibb.co/MkbMHbnB/Screenshot-2025-03-01-225534.png",
    tags: ["Next.js", "React Icons", "Tailwind CSS", "TypeScript", "AOS (Animate On Scroll)", "Vercel"],
    liveUrl: "https://tripi-app.vercel.app/",
    githubUrl: "https://github.com/Rajasva-Raj-CODE/Modern_Travel--Next.Js",
  },
  {
    id: 2,
    title: "UIFry App",
    description: "I developed a modern, responsive landing page using Next.js and TypeScript, focusing on performance, user experience, and maintainability. It features dark mode, an interactive FAQ carousel, smooth animations with Framer Motion, and a fully responsive design, ensuring a seamless experience across all device",
    image: "https://i.ibb.co/JVN5nwB/Screenshot-2025-03-01-225838.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "ShadCN", "Vercel"],
    liveUrl: "https://ui-fry-opal.vercel.app/",
    githubUrl: "https://github.com/Rajasva-Raj-CODE/UI-FRY",
  },
  {
    id: 3,
    title: "Doctor-Apponintment",
    description: "In this project, we will create an online appointment booking website for doctor or hospital. In this hospital website we will add multiple doctors and user can filter the doctor with their specialty. User and choose the date and time slot within 7 days window and book the appointment with the doctor",
    image: "https://i.ibb.co/cS8FfKRm/Screenshot-2025-03-01-225932.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Vercel"],
    liveUrl: "https://doctor-appointment-7x.vercel.app/",
    githubUrl: "https://github.com/Rajasva-Raj-CODE/Doctor-Appointment_React.js",
  },
  {
    id: 4,
    title: "Flavoro_APP",
    description: "This project is a sleek, feature-packed e-commerce application built with React, Redux Toolkit, and Tailwind CSS for a responsive and interactive user experience. It includes essential features like product search, filtering, add to cart, remove from cart, and secure checkout.",
    image: "https://i.ibb.co/99s8b3gF/Screenshot-2025-03-01-230134.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "Vercel"],
    liveUrl: "https://flavoro-react-js.vercel.app/",
    githubUrl: "https://github.com/Rajasva-Raj-CODE/Flavoro-React-JS",
  },
];

export default function ProjectsPage() {
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
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">A selection of my recent work and personal projects</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="relative h-56 w-full overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="secondary" className="rounded-full">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <Link 
                      href={project.liveUrl} 
                      target="_blank"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-xs px-3">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}