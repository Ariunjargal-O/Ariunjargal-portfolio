"use client";

import React from "react";

import { useState, useRef, JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, personalInfo, socialLinks } from "../../config/portfolio-config";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast(
        "Message sent! Thank you for your message. I'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  // Map icon names to actual icon components
  const getIcon = (iconName: string): JSX.Element => {
    const icons: Record<string, JSX.Element> = {
      Mail: <Mail className="h-6 w-6" />,
      Phone: <Phone className="h-6 w-6" />,
      MapPin: <MapPin className="h-6 w-6" />,
    };
    return icons[iconName] || <Mail className="h-6 w-6" />;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Get In Touch
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-muted-foreground mx-auto mb-3 sm:mb-4"></div>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <motion.div style={{ y, opacity }}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="xl:col-span-1 space-y-4 sm:space-y-6 order-2 xl:order-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Feel free to reach out through any of these channels. I'm always open to new projects or collaborations.
              </p>

              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg border border-gray-700 hover:shadow-[0_0_20px_#9f7aea] transition-all duration-300 hover:border-purple-500/50"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 bg-gray-200 rounded-md text-primary flex-shrink-0">
                      {React.createElement(info.icon)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-purple-400 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-gray-200 text-sm sm:text-base break-words">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="xl:col-span-2 order-1 xl:order-2"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-lg border border-gray-200 h-full flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200/30 flex items-center justify-center mb-4 sm:mb-6">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4 sm:space-y-6 p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-700 shadow-sm"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full  text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full  text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none w-full min-h-[100px]  text-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full group cursor-pointer bg-white text-black border-2 border-black hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:shadow-[0_0_20px_#9f7aea] transition-all duration-300" 
                    variant="outline" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Send Message 
                        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}