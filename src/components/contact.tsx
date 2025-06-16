"use client";

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
        "service_bgrkysy",    // EmailJS service ID
        "template_ec4dt4e",   // EmailJS template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // EmailJS public key (user ID)
      
      )


      .then(
        () => {
          toast("Message sent! Thank you for your message. I'll get back to you soon.");
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
      console.log( "key", process.env.PUBLIC_KEY || "")
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        {isSubmitted ? (
          <div className="p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center min-h-[300px]">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
            <p className="text-gray-300 mb-6 px-4">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 p-6 rounded-lg border border-gray-700 shadow-sm bg-gray-900"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-gray-300">
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
                  className="text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 text-gray-300">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-gray-300">
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
                className="text-white resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black border-2 border-black hover:text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300 flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                  Processing...
                </span>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
