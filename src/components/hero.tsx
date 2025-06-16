"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "../../config/portfolio-config";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-16 lg:py-20"
    >
      <div className="container w-full px-4 sm:px-6 lg:px-8 z-10">
        {/* Mobile-first layout: stacked vertically on mobile, side-by-side on desktop */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center relative z-10 gap-8 lg:gap-10 pt-10">
          
          {/* Content Section */}
          <motion.div
            style={{ y, opacity: heroOpacity }}
            className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-8 lg:px-20 py-5 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col my-auto"
            >
              {/* Welcome Badge */}
              <div className="inline-block mb-4 mx-auto lg:mx-0">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block p-2 sm:p-3 rounded-full bg-primary/10 text-xs sm:text-sm lg:text-base xl:text-lg font-medium border-2 border-white text-white"
                >
                  WELCOME TO MY PORTFOLIO
                </motion.span>
              </div>

              {/* Main Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-white">
                Hi👋 , I'm{" "}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/90 block sm:inline-block mt-2 sm:mt-0 sm:pl-2 lg:pl-5 "
                >
                  <TypeAnimation
                    sequence={["Ariunjargal Ochirpurev", 5000, "Arii", 5000]}
                    className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-gradient"
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>
              </h1>

              {/* Dynamic Text Animation */}
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 h-12 sm:h-14 lg:h-16 mb-4">
                <TypeAnimation
                  sequence={[
                    "I build web applications",
                    1000,
                    "I create user experiences",
                    1000,
                    "I develop solutions",
                    1000,
                    "I design APIs",
                    1000,
                    "I'm a fast learner",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mt-2 lg:mt-4 mb-6">
                {personalInfo.bio}
              </p>

              {/* Location */}
              <p className="flex items-center justify-center lg:justify-start text-white mb-6 lg:mb-10 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Mongolia, Ulaanbaatar
              </p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8"
              >
                <Button 
                  asChild 
                  size="default" 
                  className="group bg-white/80 text-gray-800 border border-white hover:bg-white hover:text-black w-full sm:w-auto text-sm sm:text-base"
                >
                  <Link href="#contact">
                    Contact Me{" "}
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="default" 
                  asChild 
                  className="group bg-transparent text-white border-white hover:bg-white hover:text-black w-full sm:w-auto text-sm sm:text-base"
                >
                  <Link href="#projects">
                    View Projects{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                {[
                  {
                    icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
                    url: socialLinks.github,
                  },
                  {
                    icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
                    url: socialLinks.linkedin,
                  },
                  {
                    icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
                    url: socialLinks.instagram,
                  },
                  {
                    icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />,
                    url: socialLinks.facebook,
                  },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 border hover:bg-white hover:text-primary transition-colors"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 xl:p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 group mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                width={600}
                height={700}
                src="/profile.png"
                alt="Ariunjargal Ochirpurev"
                className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                priority
              />

              {/* Enhanced overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-50 pointer-events-none"
        >
          <span className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2 drop-shadow-lg">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="drop-shadow-lg"
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}