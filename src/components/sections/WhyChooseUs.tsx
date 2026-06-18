import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Clock, Heart, ArrowUpRight } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface ChoiceCard {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const choices: ChoiceCard[] = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Bespoke Creativity',
    description: 'We don’t do cookie-cutter events. Every backdrop, organic arch, and 3D prop is designed to fit your unique theme.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Premium Quality & Materials',
    description: 'We use high-grade biodegradable latex balloons, sturdy customized 3D frames, and professional studio lighting.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flawless Punctuality',
    description: 'Time is everything. Our setup crews coordinate ahead of schedule so your venue looks pristine before the first guest steps in.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: <Heart className="w-6 h-6" />,
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
