"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import HeaderBar from "@/components/header";
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

const ShootingStar: React.FC<{ delay: number }> = ({ delay }) => {
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight * 0.7;
  const endX = startX + (Math.random() * 800 + 400);
  const endY = startY + (Math.random() * 400 + 200);
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: startX,
        top: startY,
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: endX - startX,
        y: endY - startY,
        opacity: [0, 1, 1, 0.5, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 30 + 20,
        ease: "easeOut",
      }}
    >
      {/* Main star body */}
      <div
        className="relative w-2 h-2 bg-white rounded-full"
        style={{
          boxShadow: `
            0 0 6px #fff,
            0 0 12px #fff,
            0 0 18px #87ceeb
          `,
        }}
      />
      
      {/* Trailing particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: -i * 3 - 2,
            top: 2,
            opacity: 0.8 - i * 0.15,
          }}
          animate={{
            opacity: [0.8 - i * 0.15, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 30 + 20,
          }}
        />
      ))}
    </motion.div>
  );
};

const Constellation: React.FC<{ points: { x: number; y: number }[] }> = ({ points }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {points.map((point, index) => {
        if (index === points.length - 1) return null;
        const nextPoint = points[index + 1];
        return (
          <motion.line
            key={index}
            x1={`${point.x}%`}
            y1={`${point.y}%`}
            x2={`${nextPoint.x}%`}
            y2={`${nextPoint.y}%`}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 10,
            }}
          />
        );
      })}
    </svg>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // constellationsY removed
  const shootingStarsY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const nebulasY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(
    containerScrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.7, 1, 1, 0.7]
  );
  interface Star {
    id: number;
    size: number;
    top: number;
    left: number;
    animationDuration: number;
    delay: number;
    brightness: number;
    twinkle: boolean;
  }

  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<
    { id: number; delay: number }[]
  >([]);
  // Removed constellations state

  useEffect(() => {
    // Generate massive amount of stars
    const newStars = Array.from({ length: 10000 }).map((_, i) => ({
      id: i,
      size: Math.random() < 0.95 
        ? Math.random() * 1.2 + 0.3  // Tiny stars
        : Math.random() * 2.5 + 1.5, // Brighter stars
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 5 + 4,
      delay: Math.random() * 8,
      brightness: Math.random() * 0.9 + 0.2,
      twinkle: Math.random() > 0.8,
    }));

    // Generate more shooting stars
    const newShootingStars = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 25,
    }));

    // Removed constellation generation

    setStars(newStars);
    setShootingStars(newShootingStars);
    // Removed setConstellations
  }, []);

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
          {/* Main starry background */}
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              background: "linear-gradient(to bottom, #000000 0%, #111111 100%)",
            }}
          >
            {/* Stars layer - moves with scroll */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              style={{ 
                opacity,
                y: starsY
              }}
            >
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute rounded-full"
                  style={{
                    width: star.size,
                    height: star.size,
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    background: star.size > 2 
                      ? `radial-gradient(circle, rgba(255, 255, 255, ${star.brightness}) 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)`
                      : '#ffffff',
                    boxShadow: star.size > 2
                      ? `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 6}px rgba(255, 255, 255, 0.4)`
                      : `0 0 2px rgba(255, 255, 255, ${star.brightness})`,
                  }}
                  animate={
                    star.twinkle
                      ? {
                          opacity: [star.brightness * 0.3, star.brightness, star.brightness * 0.5, star.brightness],
                          scale: [0.8, 1.2, 0.9, 1],
                        }
                      : {
                          opacity: [star.brightness * 0.7, star.brightness, star.brightness * 0.8],
                        }
                  }
                  transition={{
                    duration: star.animationDuration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Constellations removed */}

            {/* Shooting stars - move with scroll */}
            <motion.div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ 
                y: shootingStarsY
              }}
            >
              {shootingStars.map((star) => (
                <ShootingStar key={star.id} delay={star.delay} />
              ))}
            </motion.div>

            {/* Distant galaxies/nebulas - move with scroll */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              style={{ 
                y: nebulasY
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={`nebula-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 300 + 150,
                    height: Math.random() * 300 + 150,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    background: i % 2 === 0
                      ? `radial-gradient(circle, rgba(138, 43, 226, 0.03) 0%, rgba(75, 0, 130, 0.015) 50%, transparent 80%)`
                      : `radial-gradient(circle, rgba(30, 144, 255, 0.025) 0%, rgba(0, 191, 255, 0.012) 50%, transparent 80%)`,
                    filter: 'blur(1px)',
                  }}
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [0.9, 1.1, 0.9],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: Math.random() * 30 + 40,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 10,
                  }}
                />
              ))}
            </motion.div>
          </div>

          <HeaderBar />
          <ScrollIndicator />
          <main className="relative z-10">
            <Hero />
            <About />
            <SkillsBanner />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}