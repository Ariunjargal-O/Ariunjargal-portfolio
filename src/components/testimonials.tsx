"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "../../config/portfolio-config"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform duration-300"
          >
            <MessageSquare className="h-8 w-8 text-purple-500" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
          <div className="h-1 w-20 bg-muted-foreground mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">Here's what people are saying about working with me</p>
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-primary/20">
              <Quote className="h-20 w-20" />
            </div>

            <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : 20,
                      position: activeIndex === index ? "relative" : "absolute",
                    }}
                    transition={{ duration: 0.5 }}
                    className={`${activeIndex !== index ? "hidden" : ""}`}
                  >
                    <p className="text-lg md:text-xl italic mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        activeIndex === index ? "bg-primary" : "bg-muted"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
