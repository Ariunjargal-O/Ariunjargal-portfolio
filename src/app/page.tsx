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
import { Footer } from "../components/Footer";






const ShootingStar: React.FC<{ delay: number }> = ({ delay }) => {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.7;
    const endX = startX + (Math.random() * 400 + 200);
    const endY = startY + (Math.random() * 200 + 100);
    
    setStartPosition({ x: startX, y: startY });
    setEndPosition({ x: endX, y: endY });
  }, []);

  return (
    <motion.div
      className="absolute"
      style={{
        left: startPosition.x,
        top: startPosition.y,
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: endPosition.x - startPosition.x,
        y: endPosition.y - startPosition.y,
        opacity: [0, 1, 1, 0.5, 0],
      }}
      transition={{
        duration: Math.random() * 1.5 + 0.8,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 15 + 10,
        ease: "easeOut",
      }}
    >
      <div
        className="w-2 h-2 bg-white rounded-full"
        style={{
          boxShadow: "0 0 6px #fff, 0 0 12px #87ceeb",
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Client-side дээр л ажиллах
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
    animationDuration: number;
    delay: number;
    brightness: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (!mounted) return;
    
    // Одод үүсгэх (жижиг тоо - өндөр ачаалал багасгах)
    const newStars = Array.from({ length: 1000 }).map((_, i) => ({
      id: i,
      size:
        Math.random() < 0.9
          ? Math.random() * 0.8 + 0.2 // Жижиг одод
          : Math.random() * 1.5 + 1, // Том одод
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 3,
      delay: Math.random() * 5,
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
        { id: "testimonials", element: document.getElementById("testimonials") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      const scrollPosition = window.scrollY + 200; // Header offset
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

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
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
            {/* Хялбар одод - зөвхөн client дээр */}
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

            {/* Онцгой од */}
            {mounted && (
              <div
                className="absolute w-4 h-4 bg-white rounded-full animate-pulse"
                style={{
                  top: "20%",
                  right: "15%",
                  boxShadow: `
                    0 0 10px rgba(255, 255, 255, 0.8),
                    0 0 20px rgba(255, 255, 255, 0.6),
                    0 0 30px rgba(135, 206, 235, 0.4),
                    0 0 40px rgba(135, 206, 235, 0.2)
                  `,
                }}
              />
            )}

            {/* Унадаг одод */}
            {mounted && (
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                  <ShootingStar key={i} delay={Math.random() * 10} />
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