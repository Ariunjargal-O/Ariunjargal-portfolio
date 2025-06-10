"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram, Facebook, Mail, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { personalInfo, socialLinks } from "../../config/portfolio-config"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
  }

  const socialLinksArray = Object.entries(socialLinks).map(([key, url]) => ({
    icon: socialIcons[key as keyof typeof socialIcons] || <Github className="h-5 w-5" />,
    href: url,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }))

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#home" className="text-2xl font-bold group">
              <span className="text-primary group-hover:text-foreground transition-colors">Port</span>
              <span className="group-hover:text-primary transition-colors">folio</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">{personalInfo.bio}</p>
            <div className="flex space-x-4 mt-6">
              {socialLinksArray.map((link, i) => (
                <motion.div key={i} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Button asChild size="icon" variant="outline">
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{personalInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/Ariunjargal-O
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/ariunjargal-ochirpurev
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0 flex items-center">
            Designed & Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
