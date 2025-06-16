"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPinned,
} from "lucide-react";
import { experiences } from "../../config/portfolio-config";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden "
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <Calendar className="h-8 w-8   text-purple-500" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experience & Education
          </h2>
          <div className="h-1 w-50 bg-muted-foreground mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">
            My professional journey and educational background
          </p>
        </motion.div>

        <motion.div style={{ opacity }}>
          <VerticalTimeline lineColor="rgba(138, 43, 226, 0.4)">
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element text-white"
                contentStyle={{
                  background: "hsl(var(--card))",
                  boxShadow: "0 3px 15px rgba(0, 0, 0, 0.1)",
                  border: "1px solid hsl(var(--border))",
                  padding: "2rem",
                  borderRadius: "0.75rem",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid hsl(var(--card))",
                }}
                date={exp.date}
                iconStyle={{
                  background: "#43055e",
                  color: "white",
                  boxShadow:
                    "0 0 0 4px hsl(var(--background)), 0 0 0 5px hsl(var(--primary))",
                }}
                icon={exp.type === "work" ? <Briefcase /> : <GraduationCap />}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-3xl text-gradient font-bold">
                    {exp.title}
                  </h3>
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="text-xl font-bold text-white w-50">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-1">
                      
                      <MapPinned className="text-muted-foreground" />
                      <p className="text-muted-foreground text-xs mt-0!">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2! ">{exp.description}</p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-8 mb-6">
                      <h5 className="font-semibold mb-2 text-white">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1 ">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm "
                          >
                            <span className="text-muted-foreground  ml-3">
                              •
                            </span>
                            <span className="text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded-full text-xs font-medium text-foreground shadow-sm 
                          hover:bg-muted/80 transition-colors duration-200"
                         
                     
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
}
