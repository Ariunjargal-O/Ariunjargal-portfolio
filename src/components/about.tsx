"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { interests, personalInfo, stats } from "../../config/portfolio-config";
import CvDownloadButton from "./CvDownloadButton";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <>
      <section 
        id="about"
        ref={ref}
        className="py-16 sm:py-20 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300"
            >
              <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              About Me
              <div className="h-1 w-16 sm:w-20 bg-muted-foreground mx-auto my-4"></div>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Get to know me better
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-35 lg:gap-20 items-center">
            
            {/* Image Section */}
            <motion.div 
              style={{ y, opacity }} 
              className="relative order-1 lg:order-1 px-4 sm:px-8 lg:px-0"
            >
              <div className="relative group max-w-sm sm:max-w-md lg:max-w-full mx-auto">
                {/* Light effect */}
                <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20 rounded-2xl sm:rounded-[2.5rem] blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>

                {/* Main image container */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  className="relative perspective-1000"
                >
                  {/* Glass effect main image */}
                  <div className="relative z-10 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/30 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    {/* Image wrapper */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 rounded-xl sm:rounded-2xl"></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 skew-x-12"></div>

                      <Image
                        width={600}
                        height={700}
                        src="/profile.png"
                        alt="Ariunjargal Ochirpurev"
                        className="rounded-xl sm:rounded-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                      />

                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-b-xl sm:rounded-b-2xl"></div>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-7 rounded-xl p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="text-white text-xl sm:text-2xl font-medium">
                        {personalInfo.name}
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm">
                        {personalInfo.title}
                      </div>
                    </div>
                  </div>

                  {/* Shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl sm:rounded-3xl blur-xl translate-y-4 sm:translate-y-8 -z-10 opacity-60"></div>
                </motion.div>

                {/* Stats overlay - responsive positioning */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="absolute -bottom-6 sm:-bottom-12 -right-4 sm:-right-12 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-xl p-2 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 hover:shadow-blue-500/30 hover:-translate-y-2 z-30"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 border-2 border-gray-400 rounded-xl sm:rounded-2xl p-2 sm:p-4">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="text-center relative group/stat cursor-pointer"
                      >
                        {/* Background hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-lg sm:rounded-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10 p-1 sm:p-2">
                          <div className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300 text-gradient">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">
                            {stat.label}
                          </div>
                        </div>

                        {/* Animation dot */}
                        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl sm:rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </motion.div>

                {/* Award badge - responsive positioning */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="absolute -top-4 sm:-top-10 -left-4 sm:-left-10 bg-gradient-to-br from-purple-500/100 to-pink-500/90 p-2 sm:p-5 rounded-full shadow-2xl border-2 sm:border-4 border-white/50 transition-all duration-500 transform hover:scale-125 hover:rotate-12 hover:shadow-yellow-500/50 hover:-translate-y-2 cursor-pointer z-30"
                >
                  <Award className="h-6 w-6 sm:h-12 sm:w-12 text-white drop-shadow-lg" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                  {/* Pulsing ring */}
                  <div className="absolute -inset-1 sm:-inset-2 bg-yellow-400/30 rounded-full animate-ping opacity-50"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 sm:space-y-8 relative z-20 order-2 lg:order-2 px-4 sm:px-0"
            >
              <div className="border-2 p-4 sm:p-6 lg:p-10 border-gray-200 rounded-md z-20 min-h-[500px] sm:min-h-[560px]">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6 bg-white/20 backdrop-blur-sm rounded-lg py-2 gap-3">
                    <TabsTrigger 
                      value="about" 
                      className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/30 backdrop-blur-sm "
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger 
                      value="education" 
                     className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/30 backdrop-blur-sm "
                    >
                      Education
                    </TabsTrigger>
                    <TabsTrigger 
                      value="interests" 
                      className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/30 backdrop-blur-sm  "
                    >
                      Interests
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="space-y-4 pt-2 sm:pt-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-relaxed">
                      A passionate {personalInfo.title} based in{" "}
                      {personalInfo.location}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {personalInfo.longBio}
                    </p>
                  </TabsContent>

                  <TabsContent value="education" className="space-y-4 pt-2 sm:pt-4">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            Bachelor of Economic Management
                          </h4>
                          <p className="text-muted-foreground text-sm sm:text-base">Nagaoka University</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            2020 - 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <Award className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            FullStack developer Certification
                          </h4>
                          <p className="text-muted-foreground text-sm sm:text-base">Pinecode Academy</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">2025</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="interests" className="space-y-4 pt-2 sm:pt-4">
                    <p className="text-white text-sm sm:text-base">
                      When I'm not coding, you can find me:
                    </p>
                    <ul className="space-y-2">
                      {interests.map((interest, index) => (
                        <li key={index} className="flex items-center gap-2 text-white ml-2 text-sm sm:text-base">
                          <span className="text-white text-lg">•</span> {interest}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-5 text-gray-400 text-sm sm:text-base">
                  <div>
                    <p className="font-medium text-gray-200 mb-1">Name:</p>
                    <p className="break-words">{personalInfo.name}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200 mb-1">Email:</p>
                    <p className="break-all">{personalInfo.email}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200 mb-1">Location:</p>
                    <p>{personalInfo.location}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-200 mb-1">Availability:</p>
                    <p>{personalInfo.availability}</p>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <CvDownloadButton />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}