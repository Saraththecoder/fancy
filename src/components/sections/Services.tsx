import React from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../providers/SoundProvider'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="balloon-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
          <linearGradient id="balloon-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <g className="animate-pulse-slow">
          <path d="M42 16 C32 16 32 44 42 50 C52 44 52 16 42 16 Z" fill="url(#balloon-grad-2)" opacity="0.85" />
          <path d="M40 50 L44 50 L42 54 Z" fill="#7C3AED" />
          <path d="M42 54 Q38 60 42 64" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48 24 A 6 6 0 0 0 44 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>
        <g>
          <path d="M24 10 C10 10 10 44 24 52 C38 44 38 10 24 10 Z" fill="url(#balloon-grad-1)" />
          <path d="M22 52 L26 52 L24 56 Z" fill="#FF4D6D" />
          <path d="M24 56 Q18 61 24 64" fill="none" stroke="#FF4D6D" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 20 A 8 8 0 0 0 26 14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </g>
      </svg>
    ),
    title: 'Balloon Decorations',
    description: 'Bespoke balloon arches, organic garlands, bouquets, and ceiling balloon drops tailored to your theme colors.',
    gradient: 'from-[#FF4D6D] to-[#7C3AED]',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="cake-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
          <linearGradient id="cake-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M10 54 L54 54 M24 54 L24 60 L40 60 L40 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="14" y="36" width="36" height="18" rx="4" fill="url(#cake-grad-1)" />
        <path d="M14 42 Q32 46 50 42" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <rect x="20" y="22" width="24" height="14" rx="3" fill="url(#cake-grad-2)" />
        <path d="M20 27 Q32 30 44 27" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        <line x1="26" y1="14" x2="26" y2="22" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="14" x2="38" y2="22" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 6 Q28 10 26 13 Q24 10 26 6 Z" fill="#FF4D6D" className="animate-pulse" />
        <path d="M38 6 Q40 10 38 13 Q36 10 38 6 Z" fill="#FF4D6D" className="animate-pulse" />
      </svg>
    ),
    title: 'Birthday Decorations',
    description: 'Complete celebration setups, cake tables, party signages, lighting, and tablescapes for all ages.',
    gradient: 'from-[#FFD166] to-[#FF8A00]',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="castle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path d="M12 56 L52 56 M16 56 L16 32 L24 24 L32 32 L32 56 M32 56 L32 32 L40 24 L48 32 L48 56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="22" y="20" width="20" height="36" fill="url(#castle-grad)" rx="2" />
        <path d="M20 20 L32 4 L44 20 Z" fill="#FF4D6D" />
        <path d="M32 4 L32 0 L40 3 Z" fill="#FFD166" />
        <path d="M27 56 A 5 5 0 0 1 37 56 Z" fill="white" />
        <path d="M10 16 L12 20 L16 22 L12 24 L10 28 L8 24 L4 22 L8 20 Z" fill="#FFD166" className="animate-pulse" />
        <path d="M52 14 L53 17 L56 18 L53 19 L52 22 L51 19 L48 18 L51 17 Z" fill="#FFD166" className="animate-pulse" />
      </svg>
    ),
    title: '3D Theme Decorations',
    description: 'Immersive 3D cutout backdrops, custom character setups, structures, and stages that bring fantasy worlds to life.',
    gradient: 'from-[#7C3AED] to-[#3B82F6]',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="pennant-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M6 16 Q32 28 58 16" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 32 Q32 44 58 32" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <path d="M12 18 L20 18 L16 30 Z" fill="url(#pennant-grad)" />
        <path d="M22 20 L30 20 L26 32 Z" fill="#FFD166" />
        <path d="M32 20 L40 20 L36 32 Z" fill="#3B82F6" />
        <path d="M42 19 L50 19 L46 31 Z" fill="#FF4D6D" />
        <path d="M32 46 L34 50 L38 52 L34 54 L32 58 L30 54 L26 52 L30 50 Z" fill="#FFD166" className="animate-pulse" />
      </svg>
    ),
    title: '2D Theme Decorations',
    description: 'Beautiful 2D themed prints, custom backdrops, character cutouts, and wall decals for elegant settings.',
    gradient: 'from-pink-400 to-rose-600',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="gift-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#FF8A00" />
          </linearGradient>
        </defs>
        <rect x="14" y="24" width="36" height="30" rx="3" fill="url(#gift-grad)" />
        <rect x="10" y="18" width="44" height="8" rx="2" fill="#FF4D6D" />
        <rect x="28" y="18" width="8" height="36" fill="#7C3AED" />
        <rect x="14" y="35" width="36" height="8" fill="#7C3AED" />
        <path d="M32 18 C26 10 24 18 32 18 Z" fill="#7C3AED" />
        <path d="M32 18 C38 10 40 18 32 18 Z" fill="#7C3AED" />
        <path d="M10 8 L12 11 L15 12 L12 13 L10 16 L8 13 L5 12 L8 11 Z" fill="#FF4D6D" className="animate-pulse" />
        <path d="M52 8 L54 11 L57 12 L54 13 L52 16 L50 13 L47 12 L50 11 Z" fill="#FFD166" className="animate-pulse" />
      </svg>
    ),
    title: 'Customized Decorations',
    description: 'Bespoke designs tailored from scratch to match your specific vision, dreams, and venue requirements.',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-8 h-8 drop-shadow-md">
        <defs>
          <linearGradient id="camera-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#FF4D6D" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="44" height="32" rx="4" fill="url(#camera-grad)" />
        <rect x="18" y="14" width="10" height="6" rx="1" fill="#7C3AED" />
        <circle cx="44" cy="14" r="3" fill="#FFD166" />
        <circle cx="32" cy="36" r="14" fill="#3B82F6" stroke="white" strokeWidth="2.5" />
        <circle cx="32" cy="36" r="8" fill="black" />
        <circle cx="29" cy="33" r="3" fill="white" opacity="0.6" />
        <path d="M2 14 L8 24 L14 14 Z" fill="#FFD166" opacity="0.4" />
        <path d="M62 14 L56 24 L50 14 Z" fill="#FFD166" opacity="0.4" />
      </svg>
    ),
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
