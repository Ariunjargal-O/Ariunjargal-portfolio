"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Loader from "@/components/loading";
import Projects from "@/components/projects";
import { ScrollIndicator } from "@/components/scroll-inducator";
import SkillsBanner from "@/components/skills-banner";
import Testimonials from "@/components/testimonials";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Skills } from "@/components/skills";
import { HeaderBar } from "../components/Header";
import { Footer } from "../components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  interface Star {
    id: number;
    size: number;
    top: number;
    left: number;
    brightness: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (!mounted) return;

    const newStars = Array.from({ length: 1000 }).map((_, i) => ({
      id: i,
      size:
        Math.random() < 0.9
          ? Math.random() * 0.8 + 0.2
          : Math.random() * 1.5 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      brightness: Math.random() * 0.7 + 0.3,
    }));

    setStars(newStars);
  }, [mounted]);

  useEffect(() => {
    if (loading) return;

    const handleScroll = () => {
      const sections = [
        { id: "home", element: document.getElementById("home") },
        { id: "about", element: document.getElementById("about") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "experience", element: document.getElementById("experience") },
        {
          id: "testimonials",
          element: document.getElementById("testimonials"),
        },
        { id: "contact", element: document.getElementById("contact") },
      ];

      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionHeight = section.element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
          }
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen overflow-x-hidden"
        >
          {/* Одны дэвсгэр */}
          <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              background:
                "linear-gradient(to bottom, #000011 0%, #001122 100%)",
            }}
          >
            {/* Статик одод - зөвхөн client дээр */}
            {mounted && (
              <div className="absolute inset-0 w-full h-full">
                {stars.map((star) => (
                  <div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: star.size,
                      height: star.size,
                      top: `${star.top}%`,
                      left: `${star.left}%`,
                      opacity: star.brightness,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <HeaderBar activeSection={activeSection} />
          <ScrollIndicator />
          <main className="relative z-10" ref={ref}>
            <motion.div style={{ opacity: heroOpacity }}>
              <Hero />
            </motion.div>
            <About />
            <SkillsBanner />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
