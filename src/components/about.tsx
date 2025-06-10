"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { interests, personalInfo, stats } from "../../config/portfolio-config";

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
        className="py-20 md:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300"
            >
              <Briefcase className="h-10 w-10 text-blue-600" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground text-lg"
            >
              Get to know me better
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Updated Image Section */}
            <motion.div style={{ y, opacity }} className="relative">
              <div className="relative group">
                {/* Light effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>

                {/* Main image container */}
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  className="relative perspective-1000"
                >
                  {/* Glass effect main image */}
                  <div className="relative z-10 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-700 transform group-hover:scale-[1.02] group-hover:-rotate-1">
                    {/* Image wrapper */}
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 rounded-2xl"></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 skew-x-12"></div>

                      <Image
                        width={600}
                        height={700}
                        src="/profile.png"
                        alt="Ariunjargal Ochirpurev"
                        className="rounded-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-700 filter group-hover:brightness-110 group-hover:contrast-110"
                      />

                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-b-2xl"></div>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="text-white text-sm font-medium">
                        {personalInfo.name}
                      </div>
                      <div className="text-white/80 text-xs">
                        {personalInfo.title}
                      </div>
                    </div>
                  </div>

                  {/* Shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl translate-y-8 -z-10 opacity-60"></div>
                </motion.div>

                {/* Stats section - enhanced hover effects */}
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
                  className="absolute -bottom-12 -right-12 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 hover:shadow-blue-500/30 hover:-translate-y-2"
                >
                  <div className="grid grid-cols-2 gap-6">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10 p-2">
                          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {stat.label}
                          </div>
                        </div>

                        {/* Animation dot */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-0 group-hover/stat:opacity-100"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </motion.div>

                {/* Award badge - enhanced hover effects */}
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
                  className="absolute -top-10 -left-10 bg-gradient-to-br from-yellow-400/90 to-orange-500/90 p-5 rounded-full shadow-2xl border-4 border-white/50 transition-all duration-500 transform hover:scale-125 hover:rotate-12 hover:shadow-yellow-500/50 hover:-translate-y-2 cursor-pointer"
                >
                  <Award className="h-12 w-12 text-white drop-shadow-lg" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                  {/* Pulsing ring */}
                  <div className="absolute -inset-2 bg-yellow-400/30 rounded-full animate-ping opacity-50"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side information section - improved */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 relative z-20" // Add this
          >
            <div className="border-2 p-10 border-gray-200 rounded-md z-20 h-[500px]">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 gap-5">
                  <TabsTrigger value="about" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">About</TabsTrigger>
                  <TabsTrigger value="education" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">Education</TabsTrigger>
                  <TabsTrigger value="interests" className="capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer  bg-black/20 backdrop-blur-sm ">Interests</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-4 pt-4">
                  <h3 className="text-2xl font-bold">
                    A passionate {personalInfo.title} based in{" "}
                    {personalInfo.location}
                  </h3>
                  <p className="text-muted-foreground">
                    {personalInfo.longBio}
                  </p>
                </TabsContent>
                <TabsContent value="education" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <GraduationCap className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">
                          Bachelor of Economic Managemant
                        </h4>
                        <p className="text-muted-foreground">Nagaoka University</p>
                        <p className="text-sm text-muted-foreground">
                          2020 - 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <Award className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold ">
                          FullStack developer Certification
                        </h4>
                        <p className="text-muted-foreground">Pineconde Academy</p>
                        <p className="text-sm text-muted-foreground">2025</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="interests" className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me:
                  </p>
                  <ul className="space-y-2">
                    {interests.map((interest, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-primary">•</span> {interest}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="grid grid-cols-2 gap-4 py-5 text-gray-400">
                <div>
                  <p className="font-medium text-gray-200">Name:</p>
                  <p>{personalInfo.name}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Email:</p>
                  <p>{personalInfo.email}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Location:</p>
                  <p>{personalInfo.location}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Availability:</p>
                  <p>{personalInfo.availability}</p>
                </div>
              </div>

              {/* <CvDownloadButton /> */}
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
