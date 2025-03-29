"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, FileText, ArrowRight, Mail, Linkedin, Code2, Layout } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    router.push("/about");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-12 gap-8 md:gap-16">
        <motion.div 
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary inline-block mb-2">
                Frontend Developer
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <motion.span 
                className="block text-primary mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Rajasva Raj Srivastava
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Building beautiful, responsive, and user-friendly web applications with modern technologies.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12">
              <Link href="https://drive.google.com/file/d/1FDGcRKMXrYohKXnv7K__omfCQjzR9KKK/view?usp=sharing" target="_blank">
                <FileText className="h-5 w-5" />
                Resume
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12">
              <Link href="https://github.com/Rajasva-Raj-CODE" target="_blank">
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12">
              <Link href="https://www.linkedin.com/in/rajasvaraj/" target="_blank">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12">
              <a href="mailto:7rajasvaraj@gmail.com">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Button 
              onClick={handleContinue} 
              size="lg" 
              className="gap-2 rounded-xl h-12 px-6"
              disabled={isLoading}
            >
              Explore My Work
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
              <Image
                src="https://i.ibb.co/21RVVz19/Whats-App-Image-2022-02-05-at-9-40-27-PM.jpg"
                alt="Rajasva Raj"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <Code2 className="h-10 w-10 text-primary" />
            </div>
            
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <Layout className="h-10 w-10 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}