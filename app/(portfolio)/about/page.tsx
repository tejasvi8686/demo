"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <p className="text-muted-foreground">Get to know my background, approach, and what drives me as a developer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                <Image
                  src="https://i.ibb.co/21RVVz19/Whats-App-Image-2022-02-05-at-9-40-27-PM.jpg"
                  alt="John Doe"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <Button className="w-full gap-2 rounded-xl h-12" variant="outline">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-medium mb-2">Contact Details</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">7rajasvaraj@gmail.com</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Noida, India</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-4">My Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a passionate frontend developer with 1 years of experience creating 
                      beautiful, responsive, and user-friendly web applications. My journey in web 
                      development began with a curiosity about how websites work and evolved into 
                      a deep expertise in modern frontend technologies.
                    </p>
                    <p>
                      I specialize in React, Next.js, and modern CSS frameworks like Tailwind CSS. 
                      My approach to development focuses on creating performant applications that 
                      provide excellent user experiences across all devices.
                    </p>
                 
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3">What I Bring to the Table</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Clean, maintainable code",
                        "Responsive design expertise",
                        "Performance optimization",
                        "Accessibility knowledge",
                        "Modern UI/UX sensibilities",
                        "Team collaboration skills"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild className="gap-2 rounded-xl">
                      <Link href="/projects">
                        View My Projects
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}