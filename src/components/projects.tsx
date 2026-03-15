"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Search, Layers } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "../../config/portfolio-config"
import { useLanguage } from "context/LanguageContext"

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const categories = [
    { key: "all", label: t.projects.all },
    { key: "frontend", label: t.projects.frontend },
    { key: "fullstack", label: t.projects.fullstack },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300">
            <Layers className="h-8 w-8 text-purple-500" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.projects.sectionTitle}</h2>
          <div className="h-1 w-20 bg-muted-foreground mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg mb-8">{t.projects.sectionSubtitle}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(({ key, label }) => (
              <Button key={key} variant={filter === key ? "default" : "outline"} onClick={() => setFilter(key)}
                className={`capitalize hover:shadow-[0_0_20px_#9f7aea] transition-colors cursor-pointer bg-black/20 hover:bg-white/85 backdrop-blur-sm ${
                  filter === key ? "bg-black/30 border-2 border-white/40 text-purple-400 hover:text-white hover:bg-black" : "text-muted-foreground border-muted-foreground"
                }`}>
                {label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y, opacity }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -10 }}
                className="group bg-black/30 border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 pb-5">
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.image || "/placeholder.svg"} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="icon" className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
                      onClick={() => setSelectedProject(project)}>
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors text-white/60">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (<Badge key={tech}>{tech}</Badge>))}
                    {project.technologies.length > 3 && (<Badge>+{project.technologies.length - 3}</Badge>)}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="group/btn">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> {t.projects.demo}
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="group/btn">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> {t.projects.code}
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild className="group">
            <Link href="https://github.com/Ariunjargal-O" target="_blank" rel="noopener noreferrer">
              {t.projects.viewAll} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}