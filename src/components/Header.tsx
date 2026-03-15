

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "context/LanguageContext";
import type { Locale } from "@/lib/translations";

interface HeaderProps {
  activeSection: string;
}

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "mn", label: "MN", flag: "🇲🇳" },
  { code: "ja", label: "JP", flag: "🇯🇵" },
];

export const HeaderBar = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { locale, t, setLocale } = useLanguage();

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const offsetPosition = element.offsetTop - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.home, id: "home" },
    { name: t.nav.about, id: "about" },
    { name: t.nav.skills, id: "skills" },
    { name: t.nav.projects, id: "projects" },
    { name: t.nav.experience, id: "experience" },
    { name: t.nav.testimonials, id: "testimonials" },
    { name: t.nav.contact, id: "contact" },

  ];

  if (!isMounted) return null;

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("home")}
              className={`text-xl sm:text-2xl lg:text-3xl font-bold group flex items-center gap-1 transition-all duration-300 cursor-pointer ${
                isScrolled ? "text-foreground" : "text-foreground/90"
              }`}
            >
              <span className={`text-primary group-hover:text-primary/80 transition-colors ${isScrolled ? "opacity-100" : "opacity-0"}`}>
                Arii's
              </span>
              <span className={`group-hover:text-primary transition-colors text-gradient ${isScrolled ? "opacity-100" : "opacity-0"}`}>
                Portfolio
              </span>
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm lg:text-base transition cursor-pointer ${
                  activeSection === link.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Language Switcher Desktop */}
            <div className="flex items-center bg-muted rounded-full px-2 py-1 gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm transition cursor-pointer ${
                    locale === lang.code
                      ? "bg-primary text-white"
                      : "hover:bg-muted-foreground/10"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="hidden lg:inline">{lang.label}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language */}
            <div className="flex bg-muted rounded-full px-1 py-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLocale(lang.code)}
                  className={`text-lg px-1.5 py-0.5 rounded-full ${
                    locale === lang.code ? "bg-primary text-white" : ""
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-background border-t"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-lg ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
