import React from 'react'
import { motion } from 'framer-motion'
import { Cake, Palette, Sparkles, Camera, Castle, PartyPopper } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const services: Service[] = [
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: 'Balloon Decorations',
    description: 'Bespoke balloon arches, organic garlands, bouquets, and ceiling balloon drops tailored to your theme colors.',
    gradient: 'from-[#FF4D6D] to-[#7C3AED]',
  },
  {
    icon: <Cake className="w-8 h-8" />,
    title: 'Birthday Decorations',
    description: 'Complete celebration setups, cake tables, party signages, lighting, and tablescapes for all ages.',
    gradient: 'from-[#FFD166] to-[#FF8A00]',
  },
  {
    icon: <Castle className="w-8 h-8" />,
    title: '3D Theme Decorations',
    description: 'Immersive 3D cutout backdrops, custom character setups, structures, and stages that bring fantasy worlds to life.',
    gradient: 'from-[#7C3AED] to-[#3B82F6]',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: '2D Theme Decorations',
    description: 'Beautiful 2D themed prints, custom backdrops, character cutouts, and wall decals for elegant settings.',
    gradient: 'from-pink-400 to-rose-600',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Customized Decorations',
    description: 'Bespoke designs tailored from scratch to match your specific vision, dreams, and venue requirements.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Theme Backgrounds',
    description: 'Premium photobooths and media walls, complete with props, lighting, and professional backdrop panels.',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
]

export const Services: React.FC = () => {
  const { playHover, playClick } = useSound()

  const handleServiceClick = (title: string) => {
    playClick()
    
    // Map service title to Zod theme select options in Contact form
    let optionValue = ""
    if (title.includes("Balloon")) optionValue = "Balloon Decorations"
    else if (title.includes("2D Theme")) optionValue = "2D Theme Decorations"
    else if (title.includes("3D Theme")) optionValue = "3D Theme Decorations"
    else if (title.includes("Custom")) optionValue = "Custom Decorations"
    else if (title.includes("Backgrounds") || title.includes("Backdrop")) optionValue = "Backdrop/Photo Booth"
    else if (title.includes("Birthday")) optionValue = "Birthday Decorations"
    
    if (optionValue) {
      const event = new CustomEvent('select-theme', { detail: optionValue })
      window.dispatchEvent(event)
    }

    const contactSec = document.getElementById('contact')
    if (contactSec) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = contactSec.getBoundingClientRect().top
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      })
    }
  }

  // Custom 3D Tilt Card implementation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Max tilt angle (degrees)
    const maxTilt = 8
    const rotateX = ((centerY - y) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }

  return (
    <section
      id="services"
      className="relative py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300"
    >
      {/* Background Blobs */}
      <div className="absolute left-1/10 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/10 bottom-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Premium Birthday <span className="text-gradient-pink-purple">Decoration</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body text-base"
          >
            Explore our curated decoration services. From simple elegant balloon setups to massive custom-built 3D character themes, we make your celebrations spectacular.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={playHover}
              onClick={() => handleServiceClick(service.title)}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
              className="gradient-border-container shadow-lg shadow-primary/3 interactive-card cursor-pointer"
            >
              <div
                className="glass-card rounded-2xl p-8 flex flex-col h-full items-start select-none relative overflow-hidden"
                style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
              >
                {/* Glow Spot */}
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 rounded-full pointer-events-none" />

                {/* Icon wrapper */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold text-xl text-slate-800 dark:text-white mb-3"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {service.description}
                </p>

                {/* Micro-arrow indicator */}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-primary dark:text-secondary group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <span className="text-sm font-bold">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
