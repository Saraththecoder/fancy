import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface ChoiceCard {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const choices: ChoiceCard[] = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-6 h-6">
        <defs>
          <linearGradient id="wand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
        </defs>
        <path d="M48 10 L50 14 L54 16 L50 18 L48 22 L46 18 L42 16 L46 14 Z" fill="#FFD166" className="animate-pulse" />
        <path d="M22 6 L24 8 L27 9 L24 10 L22 12 L20 10 L17 9 L20 8 Z" fill="#FFD166" className="animate-pulse" />
        <path d="M8 56 L46 18" stroke="url(#wand-grad)" strokeWidth="4" strokeLinecap="round" />
        <path d="M46 18 L50 14" stroke="#FF4D6D" strokeWidth="5" strokeLinecap="round" />
        <circle cx="48" cy="16" r="6" fill="#FFF" className="animate-ping" opacity="0.3" />
      </svg>
    ),
    title: 'Bespoke Creativity',
    description: 'We don’t do cookie-cutter events. Every backdrop, organic arch, and 3D prop is designed to fit your unique theme.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-6 h-6">
        <defs>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M12 10 L32 4 L52 10 L52 32 C52 48 32 60 32 60 C32 60 12 48 12 32 Z" fill="none" stroke="url(#shield-grad)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M22 30 L28 36 L42 22" fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 14 L32 18 L38 14" fill="none" stroke="#FFD166" strokeWidth="2" />
      </svg>
    ),
    title: 'Premium Quality & Materials',
    description: 'We use high-grade biodegradable latex balloons, sturdy customized 3D frames, and professional studio lighting.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-6 h-6">
        <defs>
          <linearGradient id="clock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#FFD166" />
          </linearGradient>
        </defs>
        <path d="M4 22 L14 22 M2 32 L12 32 M6 42 L16 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="36" cy="34" r="20" fill="none" stroke="url(#clock-grad)" strokeWidth="3" />
        <path d="M32 14 L40 14 M36 14 L36 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M36 34 L36 24 M36 34 L44 34" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Flawless Punctuality',
    description: 'Time is everything. Our setup crews coordinate ahead of schedule so your venue looks pristine before the first guest steps in.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-6 h-6">
        <defs>
          <linearGradient id="coin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
        </defs>
        <path d="M22 40 L16 60 L28 52 L40 60 L34 40" fill="#FF4D6D" />
        <circle cx="28" cy="28" r="20" fill="url(#coin-grad)" stroke="#FFF" strokeWidth="2" />
        <path d="M28 16 L31 22 L38 23 L33 28 L35 35 L28 31 L21 35 L23 28 L18 23 L25 22 Z" fill="#FFF" />
      </svg>
    ),
    title: 'Affordable Magic',
    description: 'High-end decorations shouldn’t break the bank. We offer transparent pricing structures and customized packages.',
    color: 'from-emerald-400 to-teal-500',
  },
]

export const WhyChooseUs: React.FC = () => {
  const { playHover, playClick } = useSound()

  const handleCardClick = (title: string) => {
    playClick()
    let sectionId = ""
    if (title.includes("Creativity")) sectionId = "services"
    else if (title.includes("Quality")) sectionId = "gallery"
    else if (title.includes("Punctuality")) sectionId = "process"
    else if (title.includes("Affordable")) sectionId = "contact"
    
    if (sectionId) {
      const target = document.getElementById(sectionId)
      if (target) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = target.getBoundingClientRect().top
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <section
      id="why-us"
      className="relative py-24 bg-white dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300"
    >
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Brand Pitch & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
              Crafting Celebrations <br />
              That Spark <span className="text-gradient-pink-purple">Joy</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-body">
              At Raju Events, our decade of experience is backed by our passion for perfection. We deal with everything from the initial draft to cleanup, ensuring you can focus on making happy memories with your family.
            </p>

            {/* Quick feature list */}
            <div className="flex flex-col gap-4">
              {[
                '100% Custom Themes & 3D Backdrops',
                'Professional Lighting & Setup Included',
                'Trusted by 1000+ Families across Andhra Pradesh',
                'No hidden fees—Transparent Pricing Packages'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Grid of 4 Interactive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {choices.map((choice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onMouseEnter={playHover}
                onClick={() => handleCardClick(choice.title)}
                className="p-8 rounded-2xl glass-card border border-white/20 shadow-md flex flex-col justify-between group interactive-card cursor-pointer relative overflow-hidden"
              >
                {/* Background accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon with gradient circle */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${choice.color} text-white flex items-center justify-center shadow-md mb-6 transition-transform duration-300 group-hover:scale-105`}>
                    {choice.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-2">
                    {choice.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {choice.description}
                  </p>
                </div>

                {/* Corner detail icon on hover */}
                <div className="mt-6 flex justify-end text-gray-300 dark:text-gray-700 group-hover:text-primary transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
