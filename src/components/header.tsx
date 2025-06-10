"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {  Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
}

export default function HeaderBar({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileMenuOpen])

  // Close mobile menu when clicking on nav links
  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-40 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-primary">Arii</span>
            <span>Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map(link => (
              <div key={link.name} className="px-4 py-2 text-sm">{link.name}</div>
            ))}
          </div>
          <div className="md:hidden">
            <Menu className="h-5 w-5" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link 
              href="#home" 
              className={`text-xl sm:text-2xl lg:text-3xl font-bold group flex items-center gap-1 transition-all duration-300 ${
                isScrolled ? "text-foreground" : "text-foreground/90"
              }`}
              onClick={handleNavClick}
            >
              <span className={`text-primary group-hover:text-primary/80 transition-colors ${isScrolled ? "opacity-100" :"opacity-0"}`}>
                Arii's
              </span>
              <span className={`group-hover:text-primary transition-colors text-gradient ${isScrolled? "opacity-100" :"opacity-0"}`}>
                Portfolio
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 lg:px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                        layoutId="activeSection"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative z-50 transition-all duration-200 hover:scale-110 ${
                mobileMenuOpen ? "bg-primary/10" : ""
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-xl"
            >
              <nav className="container mx-auto px-4 py-6">
                <ul className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                          activeSection === link.href.substring(1)
                            ? "bg-primary/15 text-primary font-semibold border-l-4 border-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={handleNavClick}
                      >
                        <span className="text-base">{link.name}</span>
                        {activeSection === link.href.substring(1) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-primary rounded-full"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}