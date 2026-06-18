import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Srinivas Rao',
    role: 'Parent',
    location: 'Chirala',
    text: 'Raju Events turned our daughter’s first birthday into a fairytale! The 3D castle backdrop was breathtaking, and the pastel balloon color scheme was exactly what we envisioned. Very professional crew.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya K.',
    role: 'Mother of Teenager',
    location: 'Bapatla',
    text: 'Highly recommend their customized setups. We ordered a Neon Glow theme for my son’s 16th birthday. The design details were flawless, and the setup was complete 2 hours before the party! Simply exceptional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ramesh Kumar',
    role: 'Event Host',
    location: 'Chirala',
    text: 'Best event decorator in Andhra Pradesh. Affordable prices, zero compromises on material quality, and punctual execution. Raju was personally involved in planning and accommodating our last-minute additions.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Anitha Reddy',
    role: 'Family Client',
    location: 'Vetapalem',
    text: 'We hired them for a balloon arch and photo booth setup. The balloon work was incredibly neat and stayed perfect for two whole days! Very polite team and very budget-friendly.',
    rating: 5,
  },
]

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const { playHover, playClick } = useSound()
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-sliding effect
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isHovered])

  const handleNext = () => {
    playClick()
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    playClick()
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const selectTestimonial = (index: number) => {
    playClick()
    setActiveIndex(index)
  }

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute left-1/10 top-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute right-1/10 bottom-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Loved by <span className="text-gradient-pink-purple">Families</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body text-sm sm:text-base"
          >
            Hear what our happy clients have to say about their magical birthday celebration decoration experiences.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative px-4">
          
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl glass-card border border-white/30 shadow-xl relative overflow-hidden flex flex-col items-center text-center select-none"
              >
                {/* Decorative Giant Quotes Icon */}
                <Quote className="absolute -left-2 top-2 w-32 h-32 text-primary/5 dark:text-white/[0.01] pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary drop-shadow-[0_2px_4px_rgba(255,209,102,0.3)]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 dark:text-gray-300 font-body text-base sm:text-lg italic leading-relaxed mb-8">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Client Profile */}
                <div className="flex flex-col items-center">
                  <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary dark:text-secondary mt-1">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            onMouseEnter={playHover}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-dark-card hover:bg-primary dark:hover:bg-primary text-slate-700 dark:text-white hover:text-white dark:hover:text-white rounded-full shadow-lg border border-gray-100 dark:border-white/5 transition-all duration-300 z-10 cursor-none interactive-card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            onMouseEnter={playHover}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-dark-card hover:bg-primary dark:hover:bg-primary text-slate-700 dark:text-white hover:text-white dark:hover:text-white rounded-full shadow-lg border border-gray-100 dark:border-white/5 transition-all duration-300 z-10 cursor-none interactive-card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => selectTestimonial(index)}
              onMouseEnter={playHover}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-none ${
                activeIndex === index
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/45'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
