"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "config/portfolio-config";
import { motion, useScroll, useTransform } from "framer-motion";

export const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_bgrkysy", // EmailJS service ID
        "template_ec4dt4e", // EmailJS template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "bSpzquXzX4SGtOIkp" // EmailJS public key (user ID)
      )

      .then(
        () => {
          toast(
            "Message sent! Thank you for your message. I'll get back to you soon."
          );
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
    console.log("key", process.env.PUBLIC_KEY || "");
  };

  return (
    <section id="contact" className="py-8 md:py-12 lg:py-16 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mobile First Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          
          {/* Contact Information - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-1"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Feel free to reach out through any of these channels. I'm always
              open to new projects or collaborations.
            </p>
  
            <div className="space-y-3 md:space-y-4 lg:space-y-6 mt-6 md:mt-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 md:p-4 lg:p-5 rounded-lg border border-gray-700 hover:shadow-[0_0_20px_#9f7aea] transition-all duration-300 hover:border-purple-500"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 p-2 bg-gray-200/80 rounded-md text-primary">
                      {React.createElement(info.icon, { 
                        className: "w-4 h-4 md:w-5 md:h-5" 
                      })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-purple-400 text-sm md:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-200 text-sm md:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
  
          {/* Contact Form or Success Message - Right Column */}
          <div className="order-2 lg:order-2">
            {isSubmitted ? (
              <div className="p-4 md:p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center min-h-[250px] md:min-h-[300px] justify-center bg-gray-900/50">
                <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-4 md:mb-6 px-2 md:px-4 text-sm md:text-base">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 p-4 md:p-6 rounded-lg border border-gray-700 shadow-sm bg-gray-900"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  Send a Message
                </h3>
  
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-1 text-gray-300 text-sm md:text-base"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-white bg-gray-800 border-gray-600 focus:border-purple-500 text-sm md:text-base"
                    />
                  </div>
  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-1 text-gray-300 text-sm md:text-base"
                    >
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
                      className="text-white bg-gray-800 border-gray-600 focus:border-purple-500 text-sm md:text-base"
                    />
                  </div>
                </div>
  
                {/* Subject */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block mb-1 text-gray-300 text-sm md:text-base"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="text-white bg-gray-800 border-gray-600 focus:border-purple-500 text-sm md:text-base"
                  />
                </div>
  
                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-1 text-gray-300 text-sm md:text-base"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to discuss a project..."
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-white resize-none bg-gray-800 border-gray-600 focus:border-purple-500 text-sm md:text-base min-h-[80px] md:min-h-[100px]"
                  />
                </div>
  
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black border-2 border-black hover:text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300 flex items-center justify-center py-2 md:py-3 text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-3 w-3 md:h-4 md:w-4 border-b-2 border-current mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    <>
                      Send Message 
                      <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
