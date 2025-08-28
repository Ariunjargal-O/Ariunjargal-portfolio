"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "../../config/portfolio-config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    email: <Mail className="h-5 w-5" />,
  };

  const socialLinksArray = Object.entries(socialLinks).map(([key, url]) => ({
    icon: socialIcons[key as keyof typeof socialIcons] || (
      <Github className="h-5 w-5" />
    ),
    href: url,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand and Social Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="#home" className="text-xl sm:text-2xl font-bold group">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-white">Arii's</span>
                <span className="text-gradient">Portfolio</span>
              </div>
            </Link>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
              {personalInfo.bio}
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
              {socialLinksArray.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-9 w-9 sm:h-10 sm:w-10"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="bg-gray-200 hover:bg-white"
                    >
                      {link.icon}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-4 sm:gap-x-0">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-white transition-colors block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base text-muted-foreground break-all hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>

              {/* GitHub */}
              <li className="flex items-start gap-2">
                <Github className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-muted-foreground hover:text-white transition-colors break-all"
                >
                  github.com/Ariunjargal-O
                </Link>
              </li>

              {/* LinkedIn */}
              <li className="flex items-start gap-2">
                <Linkedin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-muted-foreground hover:text-white transition-colors break-all"
                >
                  linkedin.com/in/ariunjargal-ochirpurev
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center sm:justify-end">
              <span className="hidden sm:inline">Designed & Built with</span>
              <span className="sm:hidden">Built with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mx-1" />
              <span className="hidden sm:inline">using Next.js & Tailwind</span>
              <span className="sm:hidden">Next.js & Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
