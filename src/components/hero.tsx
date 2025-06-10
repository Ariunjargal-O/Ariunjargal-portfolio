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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="container w-full flex flex-row justify-between items-center z-10">
        <div className="w-full flex flex-row justify-between relative z-10 gap-10 items-center">
          <motion.div
            style={{ y, opacity: heroOpacity }}
            className=" w-1/2 justify-between items-center px-20 py-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col my-auto"
            >
              <div className="inline-block mb-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block p-3 rounded-full bg-primary/10 text-2xl font-medium border-2 border-white text-gradient"
                >
                  WELCOME TO MY PORTFOLIO
                </motion.span>
              </div>
              <h1 className="text-2xl md:text-4xl  font-bold leading-tight mb-4 text-white">
                Hi👋 , I'm{" "}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/90 pl-5"
                >
                  <TypeAnimation
                    sequence={["Ariunjargal Ochirpurev", 5000, "Arii", 5000]}
                    className="text-2xl md:text-4xl lg:text-5xl pl-10 text-white"
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>
              </h1>
              <div className="text-xl md:text-2xl text-gray-200 h-16">
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
              <p className="text-lg text-muted-foreground max-w-lg mt-4">
                {personalInfo.bio}
              </p>
            </motion.div>

            <p className="flex text-white mb-10 mt-5">
              <MapPin />
              Mongolia, Ulaanbaatar
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Contact Me{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-10"
            >
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  url: socialLinks.github,
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  url: socialLinks.linkedin,
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  url: socialLinks.instagram,
                },
                {
                  icon: <Facebook className="h-5 w-5" />,
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
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-card border hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center w-1/2"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 group mx-auto max-w-md lg:max-w-none">
              <Image
                width={600}
                height={700}
                src="/profile.png"
                alt="Ariunjargal Ochirpurev"
                className="rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500 w-full h-auto
              "
              />

              {/* Enhanced overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-200 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-6 w-6 text-gray-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}