"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiTypescript,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiGraphql,
  SiPrisma,
  SiPostman,
  SiCypress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRender,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useLanguage } from "context/LanguageContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const Skills = () => {
  const { t } = useLanguage();

  const skills = {
    [t.skills.frontend]: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    [t.skills.backend]: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Prisma", icon: SiPrisma },
    ],
    [t.skills.tools]: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Cypress", icon: SiCypress },
      { name: "Render", icon: SiRender },
    ],
  };

  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-space text-white">
                💻 {t.skills.sectionTitle}{" "}
                <span className="text-gradient">Full Stack</span>
              </h2>
              <div className="h-1 w-50 bg-muted-foreground mx-auto my-4"></div>
              <p className="text-muted-foreground md:text-xl/relaxed">
                {t.skills.sectionSubtitle}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                className="bg-transparent backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gradient text-center">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="flex items-center gap-2 text-white px-3 py-2 rounded-full transition-colors bg-black"
                    >
                      <Icon className="text-lg" />
                      <span className="text-sm">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
